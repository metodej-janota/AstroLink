import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { Heart } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import withAuth from "../../supabase/protectedRoutes";
import { supabase } from "../../supabase/supabase";

type Astro = {
  id: number;
  user_id: string;
  username: string;
  content: string;
  created_at: string;
  likes: number;
};

const Astros = () => {
  const [tweets, setTweets] = useState<Astro[]>([]);
  const [likedTweets, setLikedTweets] = useState<number[]>([]);
  const [newTweet, setNewTweet] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await supabase.auth.getUser();
      if (!user.data.user) {
        router.push("/login");
      } else {
        fetchTweets();
        fetchLikedTweets(user.data.user.id);
      }
    };

    fetchUser();
  }, [router]);

  const fetchTweets = async () => {
    const { data: tweets, error } = await supabase
      .from("tweets")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) console.log("Error fetching tweets:", error);
    else setTweets(tweets);
  };

  const fetchLikedTweets = async (userId: string) => {
    const { data: likes, error } = await supabase
      .from("likes")
      .select("tweet_id")
      .eq("user_id", userId);

    if (error) console.log("Error fetching liked tweets:", error);
    else setLikedTweets(likes.map((like) => like.tweet_id));
  };

  const handleNewTweet = async () => {
    const user = await supabase.auth.getUser();
    if (user.data.user) {
      const { error } = await supabase.from("tweets").insert([
        {
          user_id: user.data.user.id,
          username: user.data.user.email,
          content: newTweet,
        },
      ]);

      if (error) console.log("Error creating tweet:", error);
      else {
        setNewTweet("");
        fetchTweets();
      }
    }
  };

  const handleLike = async (id: number) => {
    const user = await supabase.auth.getUser();
    if (user.data.user) {
      const { data: likes, error: likeError } = await supabase
        .from("likes")
        .select("*")
        .eq("user_id", user.data.user.id)
        .eq("tweet_id", id);

      if (likeError) {
        console.log("Error checking like:", likeError);
      } else if (likes.length === 0) {
        const { error: insertError } = await supabase
          .from("likes")
          .insert([{ user_id: user.data.user.id, tweet_id: id }]);

        if (insertError) {
          console.log("Error liking tweet:", insertError);
        } else {
          const { error: updateError } = await supabase.rpc("increment_likes", {
            tweet_id: id,
          });

          if (updateError)
            console.log("Error updating like count:", updateError);
          else {
            setLikedTweets([...likedTweets, id]);
            fetchTweets();
          }
        }
      } else {
        const { error: deleteError } = await supabase
          .from("likes")
          .delete()
          .eq("user_id", user.data.user.id)
          .eq("tweet_id", id);

        if (deleteError) {
          console.log("Error unliking tweet:", deleteError);
        } else {
          const { error: updateError } = await supabase.rpc("decrement_likes", {
            tweet_id: id,
          });

          if (updateError)
            console.log("Error updating like count:", updateError);
          else {
            setLikedTweets(likedTweets.filter((tweetId) => tweetId !== id));
            fetchTweets();
          }
        }
      }
    }
  };

  return (
    <div className="pt-24 container mx-auto flex flex-col gap-8">
      <div className="flex gap-4">
        <Input
          value={newTweet}
          onChange={(e) => setNewTweet(e.target.value)}
          placeholder="What's happening?"
          resize={"none"}
        />
        <Button onClick={handleNewTweet}>Send Astro</Button>
      </div>
      <div className="flex flex-col gap-4">
        {tweets.map((tweet) => (
          <Card key={tweet.id} className="p-3 flex flex-col gap-4">
            <div className="flex flex-col gap">
              <Heading size="sm">{tweet.username}</Heading>
              <Text className="text-muted">
                {new Date(tweet.created_at).toLocaleString()}
              </Text>
            </div>
            <Text>{tweet.content}</Text>
            <Button
              onClick={() => handleLike(tweet.id)}
              rightIcon={
                <Heart
                  color={likedTweets.includes(tweet.id) ? "red" : "black"}
                />
              }
            >
              {tweet.likes} Like
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default withAuth(Astros);

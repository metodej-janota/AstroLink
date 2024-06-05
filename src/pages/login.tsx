import { Button, Heading, Input, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { supabase } from "../supabase/supabase";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      setError(null);
      router.push("/");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/2">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <Heading>Login</Heading>
            <Text>User password:</Text>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@example.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Text>User password:</Text>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*********"
            />
          </div>

          <Button onClick={handleLogin}>Login</Button>
          {error && (
            <Text className="text-center" style={{ color: "red" }}>
              {error}
            </Text>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

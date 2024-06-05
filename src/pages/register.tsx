import { Button, Heading, Input, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { supabase } from "../supabase/supabase";

const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleRegister = async () => {
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setError(error.message);
    } else {
      await supabase
        .from("profiles")
        .insert([{ id: data.user!.id, username, email }]);
      setError(null);
      router.push("/login");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/2">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <Heading>Register</Heading>
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

          <Button onClick={handleRegister}>Login</Button>
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

export default Register;

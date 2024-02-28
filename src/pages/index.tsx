import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import clientPromise from "./components/util/mongodb";

type ConnectionStatus = {
  isConnected: boolean;
};

export const getServerSideProps: GetServerSideProps<
  ConnectionStatus
> = async () => {
  try {
    await clientPromise;
    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data: session, status } = useSession();
  return (
    <div>
      {isConnected ? <p>Database connected</p> : <p>Database error</p>}

      {session ? "Loged id" : "Not loged in"}

      <div className="flex flex-col bg-cover">
        {session ? (
          <></>
        ) : (
          <div className="h-full flex items-center justify-center flex-col space-y-2.5">
            {status === "loading" ? null : "yea boi"}
          </div>
        )}
      </div>
    </div>
  );
}

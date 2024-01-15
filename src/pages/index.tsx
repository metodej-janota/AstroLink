import Header from "./components/sections/header";
import MessageList from "./components/chat/messageList";
import NewMessageForm from "./components/chat/messageForm";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <div className="flex flex-col bg-cover">
      <Header />
      {session ? (
        <>
          <div className="flex-1 overflow-y-scroll no-scrollbar p-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-center">
                <MessageList />
              </div>
            </div>
          </div>
          <div className="p-6 bg-white/5 border-t border-[#363739]">
            <div className="max-w-4xl mx-auto">
              <NewMessageForm />
            </div>
          </div>
        </>
      ) : (
        <div className="h-full flex items-center justify-center flex-col space-y-2.5">
          {status === "loading" ? null : "yea boi"}
        </div>
      )}
    </div>
  );
}

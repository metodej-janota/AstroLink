import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
      <Link href="/protected/tweets">Tweets</Link>
    </>
  );
}

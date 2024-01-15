import { signIn, signOut, useSession } from "next-auth/react";
import { GitHub } from "react-feather";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export function Header() {
  const { data: session } = useSession();

  return <>{session ? "Přihlášen" : "Odhlášen"}</>;
}

export default Header;

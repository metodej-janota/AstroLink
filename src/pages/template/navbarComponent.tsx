import React from "react";
import Image from "next/image";
import { GitHub, LogOut } from "react-feather";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import ThemeSwitcher from "../components/util/themeSwitcher";

export default function NavbarComponent() {
  const { data: session } = useSession();
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">🚀 AstroLink</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          {session ? (
            <div className="flex space-x-1">
              {session?.user?.image && (
                <div className="w-12 h-12 rounded overflow-hidden">
                  <Image
                    width={50}
                    height={50}
                    src={session?.user?.image}
                    alt={session?.user?.name || "User profile picture"}
                    title={session?.user?.name || "User profile picture"}
                  />
                </div>
              )}
              <Button
                onClick={() => signOut()}
                color="primary"
                endContent={<LogOut />}
              >
                Odhlásit se
              </Button>
            </div>
          ) : (
            <Button
              onClick={() => signIn("github")}
              color="primary"
              endContent={<GitHub />}
            >
              Přihlásit se přes GitHub
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

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
  User,
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
            <div>
              {session?.user?.image && (
                <User
                  name={session?.username}
                  description={session?.user?.email}
                  avatarProps={{
                    src: session?.user?.image,
                  }}
                />
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

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  User,
  useDisclosure,
} from "@nextui-org/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { GitHub, LogOut, UserCheck } from "react-feather";
import ThemeSwitcher from "../components/util/themeSwitcher";

export default function NavbarComponent() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data: session } = useSession();
  return (
    <>
      {" "}
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
          {session ? (
            <NavbarItem>
              <Dropdown showArrow>
                <DropdownTrigger>
                  {session?.user?.image ? (
                    <User
                      name={session?.username}
                      description={session?.user?.email}
                      avatarProps={{
                        src: session?.user?.image,
                      }}
                    />
                  ) : (
                    <User
                      name={session?.username}
                      description={session?.user?.email}
                      avatarProps={{
                        src: session?.username,
                      }}
                    />
                  )}
                </DropdownTrigger>
                <DropdownMenu variant="faded" aria-label="Dropdown menu">
                  <DropdownItem key="new" shortcut="⌘P">
                    <ThemeSwitcher />
                  </DropdownItem>

                  <DropdownItem
                    key="new"
                    shortcut="⌘P"
                    startContent={<UserCheck />}
                    onPress={onOpen}
                  >
                    Profile
                  </DropdownItem>
                  <DropdownItem
                    key="delete"
                    className="text-danger "
                    color="danger"
                    shortcut="⌘⇧D"
                    startContent={<LogOut />}
                    onClick={() => signOut()}
                  >
                    Log out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
          ) : (
            <>
              <NavbarItem>
                <ThemeSwitcher />
              </NavbarItem>
              <NavbarItem>
                <Button
                  onClick={() => signIn("github")}
                  color="primary"
                  endContent={<GitHub />}
                >
                  Přihlásit se přes GitHub
                </Button>
              </NavbarItem>
            </>
          )}
        </NavbarContent>
      </Navbar>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="flex flex-row">
                  <User
                    name={session?.username}
                    description={session?.user?.email}
                    avatarProps={{
                      src: session?.username,
                    }}
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

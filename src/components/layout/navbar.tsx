import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabase";

const Navbar = () => {
  const [logined, setLogined] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await supabase.auth.getUser();
      if (!user.data.user) {
        setLogined(false);
      } else {
        setLogined(true);
      }
    };

    fetchUser();
  }, [router]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.log("Error logging out:", error);
    else router.push("/login");
  };

  return (
    <div
      className={`fixed w-full p-3 bg-slate-700 transition-opacity duration-300 z-50 ${
        scrolled ? "opacity-100" : "opacity-75"
      }`}
    >
      <div className="flex justify-between">
        <div className="flex gap-4">
          <Link
            className={`${
              router.pathname === "/" ? "text-blue-300" : ""
            } text-xl font-bold`}
            href="/"
          >
            Astrolink
          </Link>
          <Link
            className={`${router.pathname === "/login" ? "text-blue-300" : ""}`}
            href="/login"
          >
            Login
          </Link>
          <Link
            className={`${
              router.pathname === "/register" ? "text-blue-300" : ""
            }`}
            href="/register"
          >
            Register
          </Link>
          {logined && (
            <Link
              className={`${
                router.pathname === "/protected/astros" ? "text-blue-300" : ""
              }`}
              href="/protected/astros"
            >
              Astros
            </Link>
          )}
        </div>
        <div>
          {logined && (
            <>
              <Button onClick={handleLogout}>Logout</Button>
              <Button onClick={() => router.push("/protected/profile")}>
                Profile
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

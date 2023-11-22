"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

import Sun from "../../../public/icons/sun";
import Moon from "../../../public/icons/moon";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  function themeSwitch() {
    if (theme == "light") {
      setTheme("dark");
    } else if (theme == "dark") {
      setTheme("light");
    }
  }

  return (
    <Button
      isIconOnly
      color="primary"
      aria-label="Theme switch"
      variant="flat"
      onClick={themeSwitch}
    >
      {theme == "dark" ? <Moon /> : <Sun />}
    </Button>
  );
}

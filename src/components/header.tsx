"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex items-center justify-between px-4 py-2 border-b bg-background">
      <h1 className="text-lg font-semibold">Via Fidei</h1>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? "light" : "dark"}
      </Button>
    </header>
  );
};

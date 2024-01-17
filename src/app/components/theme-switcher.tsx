"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {theme === "dark" ? (
        <button
          className={`w-fit absolute right-12 top-16 p-2 rounded-full hover:scale-110 active:scale-100 duration-200 bg-lime-500 dark:bg-white sm:top-6 sm:right-6`}
          onClick={() => setTheme("light")}
        >
          <BsSunFill size={18} />
        </button>
      ) : (
        <button
          className={`w-fit absolute right-12 top-16 p-2 rounded-full hover:scale-110 active:scale-100 duration-200 bg-lime-500 dark:bg-white sm:top-6 sm:right-6`}
          onClick={() => setTheme("dark")}
        >
          <BsMoonFill size={18} />
        </button>
      )}
    </>
  );
};

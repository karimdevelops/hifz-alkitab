"use client";

import Autostories from "@/components/icons/Autostories";
import Book from "@/components/icons/Book";
import Close from "@/components/icons/Close";
import Gear from "@/components/icons/Gear";
import Large from "@/components/icons/Large";
import List from "@/components/icons/List";
import Medium from "@/components/icons/Medium";
import MenuBook from "@/components/icons/MenuBook";
import Moon from "@/components/icons/Moon";
import Small from "@/components/icons/Small";
import Sun from "@/components/icons/Sun";
import Sunset from "@/components/icons/Sunset";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useDisplay } from "@/context/DisplayContext";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const [fontSize, setFontSize] = useState("1rem");
  const { displayMode, setDisplayMode } = useDisplay();

  useEffect(
    () =>
      document.documentElement.style.setProperty("--app-font-size", fontSize),
    [fontSize],
  );

  return (
    <Drawer direction="left">
      <DrawerTrigger>
        <Gear />
      </DrawerTrigger>
      <DrawerContent className="p-4">
        <DrawerHeader>
          <div className="flex items-center justify-between">
            <DrawerTitle></DrawerTitle>
            <DrawerClose className="ml-auto">
              <Close />
            </DrawerClose>
          </div>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-10 *:flex *:flex-col *:gap-5">
          <div>
            <h3 className="text-base font-bold">Appearance</h3>
            <div className="flex flex-wrap justify-center gap-5 *:flex *:items-center *:gap-2 *:rounded-full *:border-2 *:p-2">
              <button
                className={`${theme == "light" ? "text-app-background bg-app-primary" : ""}`}
                onClick={() => setTheme("light")}
              >
                <Sun />
                Light
              </button>
              <button
                className={`${theme == "sepia" ? "text-app-background bg-app-primary" : ""}`}
                onClick={() => setTheme("sepia")}
              >
                <Sunset />
                Sepia
              </button>
              <button
                className={`${theme == "dark" ? "text-app-background bg-app-primary" : ""}`}
                onClick={() => setTheme("dark")}
              >
                <Moon />
                Dark
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold">Font Size</h3>
            <div className="flex flex-wrap justify-center gap-5 *:flex *:items-center *:rounded-full *:border-2 *:p-2">
              <button
                className={`${fontSize == "1rem" ? "text-app-background bg-app-primary" : ""}`}
                onClick={() => setFontSize("1rem")}
              >
                <Small />
                Small
              </button>
              <button
                className={`${fontSize == "1.2rem" ? "text-app-background bg-app-primary" : ""}`}
                onClick={() => setFontSize("1.2rem")}
              >
                <Medium />
                Medium
              </button>
              <button
                className={`${fontSize == "1.35rem" ? "text-app-background bg-app-primary" : ""}`}
                onClick={() => setFontSize("1.35rem")}
              >
                <Large />
                Large
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold">Display Mode</h3>
            <div className="flex flex-wrap justify-center gap-5 *:flex *:items-center *:rounded-full *:border-2 *:p-3">
              <button
                className={`${displayMode == "linebyline" ? "text-app-background bg-app-primary" : ""}`}
                onClick={() => setDisplayMode("linebyline")}
              >
                <List />
              </button>
              <button
                className={`${displayMode == "hifzlinebyline" ? "text-app-background bg-app-primary" : ""}`}
                onClick={() => setDisplayMode("hifzlinebyline")}
              >
                <MenuBook />
              </button>
              <button
                className={`${displayMode == "reading" ? "text-app-background bg-app-primary" : ""}`}
                onClick={() => setDisplayMode("reading")}
              >
                <Autostories />
              </button>
              <button
                className={`${displayMode == "hifzreading" ? "text-app-background bg-app-primary" : ""}`}
                onClick={() => setDisplayMode("hifzreading")}
              >
                <Book />
              </button>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

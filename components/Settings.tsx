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
import { DisplayMode, useDisplay } from "@/context/DisplayContext";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const [fontSize, setFontSize] = useState("1rem");
  const { displayMode, setDisplayMode } = useDisplay();

  useEffect(() => {
    document.documentElement.style.setProperty("--app-font-size", fontSize);
  }, [fontSize]);

  const activeClass = (isActive: boolean) =>
    isActive ? "text-app-background bg-app-primary" : "";

  const themes = [
    { id: "light", label: "Light", icon: <Sun /> },
    { id: "sepia", label: "Sepia", icon: <Sunset /> },
    { id: "dark", label: "Dark", icon: <Moon /> },
  ];

  const fontSizes = [
    { size: "1rem", label: "Small", icon: <Small /> },
    { size: "1.2rem", label: "Medium", icon: <Medium /> },
    { size: "1.35rem", label: "Large", icon: <Large /> },
  ];

  const modes = [
    { id: "linebyline", icon: <List /> },
    { id: "hifzlinebyline", icon: <MenuBook /> },
    { id: "reading", icon: <Autostories /> },
    { id: "hifzreading", icon: <Book /> },
  ];

  return (
    <Drawer direction="left">
      <DrawerTrigger>
        <Gear />
      </DrawerTrigger>
      <DrawerContent className="p-4">
        <DrawerHeader>
          <div className="flex items-center justify-between">
            <DrawerTitle />
            <DrawerClose className="ml-auto">
              <Close />
            </DrawerClose>
          </div>
          <DrawerDescription />
        </DrawerHeader>
        <div className="flex flex-col gap-10 *:flex *:flex-col *:gap-5">
          <div>
            <h3 className="text-base font-bold">Appearance</h3>
            <div className="flex flex-wrap justify-center gap-5 *:flex *:items-center *:gap-2 *:rounded-full *:border-2 *:p-2">
              {themes.map((t) => (
                <button
                  key={t.id}
                  className={activeClass(theme === t.id)}
                  onClick={() => setTheme(t.id)}
                >
                  {t.icon} {t.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold">Font Size</h3>
            <div className="flex flex-wrap justify-center gap-5 *:flex *:items-center *:rounded-full *:border-2 *:p-2">
              {fontSizes.map((f) => (
                <button
                  key={f.size}
                  className={activeClass(fontSize === f.size)}
                  onClick={() => setFontSize(f.size)}
                >
                  {f.icon} {f.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold">Display Mode</h3>
            <div className="flex flex-wrap justify-center gap-5 *:flex *:items-center *:rounded-full *:border-2 *:p-3">
              {modes.map((m) => (
                <button
                  key={m.id}
                  className={activeClass(displayMode === m.id)}
                  onClick={() => setDisplayMode(m.id as DisplayMode)}
                >
                  {m.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

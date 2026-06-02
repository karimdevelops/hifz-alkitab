"use client";

import Close from "@/components/icons/Close";
import Gear from "@/components/icons/Gear";
import Large from "@/components/icons/Large";
import Medium from "@/components/icons/Medium";
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
import { useTheme } from "next-themes";

export default function Settings() {
  const { theme, setTheme } = useTheme();

  function setFont(size: string) {
    document.documentElement.style.setProperty("--app-font-size", size);
  }

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
        <div className="flex flex-col gap-10 *:flex *:flex-col *:gap-2">
          <div>
            <h3 className="text-base font-bold">Select theme</h3>
            <div className="flex flex-wrap justify-center gap-5 *:flex *:items-center *:gap-2 *:rounded-full *:border-2 *:p-2">
              <button onClick={() => setTheme("light")}>
                <Sun />
                Light
              </button>
              <button onClick={() => setTheme("sepia")}>
                <Sunset />
                Sepia
              </button>
              <button onClick={() => setTheme("dark")}>
                <Moon />
                Dark
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold">Select font size</h3>
            <div className="flex flex-wrap justify-center gap-5 *:flex *:items-center *:rounded-full *:border-2 *:p-2">
              <button onClick={() => setFont("1rem")}>
                <Small />
                Small
              </button>
              <button onClick={() => setFont("1.2rem")}>
                <Medium />
                Medium
              </button>
              <button onClick={() => setFont("1.5rem")}>
                <Large />
                Large
              </button>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

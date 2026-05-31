"use client";

import Close from "@/components/icons/Close";
import Gear from "@/components/icons/Gear";
import Moon from "@/components/icons/Moon";
import Sun from "@/components/icons/Sun";
import Sunset from "@/components/icons/Sunset";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useTheme } from "next-themes";

export default function Settings() {
  const { theme, setTheme } = useTheme();

  return (
    <Drawer direction="left">
      <DrawerTrigger>
        <Gear />
      </DrawerTrigger>
      <DrawerContent className="md:p-4">
        <DrawerHeader>
          <div className="flex items-center justify-between">
            <DrawerClose className="ml-auto">
              <Close />
            </DrawerClose>
          </div>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-bold">Select theme</h3>
          <div className="flex justify-center gap-5 *:flex *:items-center *:gap-2 *:rounded-full *:border-2 *:p-2">
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
      </DrawerContent>
    </Drawer>
  );
}

"use client";

import Gear from "@/components/icons/Gear";
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

  return (
    <Drawer direction="left">
      <DrawerTrigger>
        <Gear />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <div className="flex items-center justify-between p-2">
            <DrawerTitle>Settings</DrawerTitle>
            <DrawerClose>cancel</DrawerClose>
          </div>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>
        <div className="flex justify-center gap-15 p-2">
          <button onClick={() => setTheme("light")}>Light</button>
          <button onClick={() => setTheme("sepia")}>Sepia</button>
          <button onClick={() => setTheme("dark")}>Dark</button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

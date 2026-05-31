import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Settings() {
  return (
    <Drawer direction="left">
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <div className="flex items-center justify-between">
            <DrawerTitle>Settings</DrawerTitle>{" "}
            <DrawerClose>cancel</DrawerClose>
          </div>
          <DrawerDescription>Settings</DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}

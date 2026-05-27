import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Settings() {
  return (
    <Drawer direction="left" disablePreventScroll={false}>
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <div className="flex items-center justify-between">
            <DrawerTitle>Settings</DrawerTitle>{" "}
            <DrawerClose>
              <button>cancel</button>
            </DrawerClose>
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}

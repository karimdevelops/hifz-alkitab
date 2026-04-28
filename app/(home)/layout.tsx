"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-[90vh] flex-col gap-10 p-5 md:p-10">
      <h1 className="text-app-primary font-noto-arabic self-center text-4xl font-bold">
        حفظ
      </h1>
      <ul className="flex max-w-fit justify-center gap-2 self-center font-semibold *:rounded-full *:px-3 *:py-2">
        <li
          className={`${pathname == "/surah" ? "bg-app-primary text-app-background" : ""}`}
        >
          <Link href={"/surah"}>Surah</Link>
        </li>
        <li
          className={`${pathname == "/reveal-order" ? "bg-app-primary text-app-background" : ""}`}
        >
          <Link href={"/reveal-order"}>Revelation Order</Link>
        </li>
      </ul>
      <div>{children}</div>
    </div>
  );
}

import ChapterTab from "@/app/[order]/(home)/_components/ChapterTab";
import Link from "next/link";
import { Suspense } from "react";

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-[90vh] flex-col gap-5 px-5 py-10 md:p-10">
      <Link
        href="/"
        className="text-app-primary font-kitab self-center text-5xl font-bold"
      >
        حفظ
      </Link>
      <Suspense>
        <ChapterTab />
        <div>{children}</div>
      </Suspense>
    </div>
  );
}

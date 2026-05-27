import ChapterTab from "@/app/[order]/(home)/_components/ChapterTab";
import { Suspense } from "react";

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-app-primary font-kitab self-center text-5xl font-bold">
        حفظ
      </h1>
      <Suspense>
        <ChapterTab />
        <div>{children}</div>
      </Suspense>
    </div>
  );
}

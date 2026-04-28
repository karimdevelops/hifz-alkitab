import Link from "next/link";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-[90vh] flex-col gap-10 p-5 md:p-10">
      <h1 className="text-app-primary font-noto-arabic self-center text-4xl font-bold">
        حفظ
      </h1>
      <ul className="flex justify-center gap-5">
        <li>
          <Link href={"/surah"}>Surah</Link>
        </li>
        <li>
          <Link href={"/reveal-order"}>Revelation Order</Link>
        </li>
      </ul>
      <div>{children}</div>
    </div>
  );
}

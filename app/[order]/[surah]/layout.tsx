import Link from "next/link";

export default async function SurahLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-[90vh] flex-col gap-10 px-5 py-10 md:p-10">
      <div className="flex justify-between">
        <div>settings</div>
        <Link
          href="/"
          className="text-app-primary font-kitab text-3xl font-bold"
        >
          حفظ
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
}

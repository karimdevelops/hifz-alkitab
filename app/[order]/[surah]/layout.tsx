export default async function SurahLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-[90vh] flex-col gap-5 px-5 py-10 md:p-10">
      <div className="flex justify-between">
        <div>title</div>
        <h1 className="text-app-primary font-kitab text-3xl font-bold">حفظ</h1>
        <div>settings</div>
      </div>
      <div>{children}</div>
    </div>
  );
}

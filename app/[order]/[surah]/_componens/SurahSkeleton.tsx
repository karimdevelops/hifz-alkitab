import { Skeleton } from "@/components/ui/skeleton";

export default function SurahSkeleton() {
  return (
    <div className="flex flex-col gap-5">
      <Skeleton className="size-20 w-full rounded-xl" />
      <Skeleton className="size-10 w-full rounded-xl" />
      <Skeleton className="size-10 w-full rounded-xl" />
      <Skeleton className="size-10 w-full rounded-xl" />
      <Skeleton className="size-10 w-full rounded-xl" />
      <Skeleton className="size-10 w-full rounded-xl" />
      <Skeleton className="size-10 w-full rounded-xl" />
      <Skeleton className="size-10 w-full rounded-xl" />
      <Skeleton className="size-10 w-full rounded-xl" />
      <Skeleton className="size-10 w-full rounded-xl" />
    </div>
  );
}

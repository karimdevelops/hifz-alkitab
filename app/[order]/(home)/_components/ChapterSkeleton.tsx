import { Skeleton } from "@/components/ui/skeleton";

export default function ChapterSkeleton() {
  return (
    <div className="flex flex-col gap-5">
      <Skeleton className="size-20 w-full rounded-xl" />
      <Skeleton className="size-20 w-full rounded-xl" />
      <Skeleton className="size-20 w-full rounded-xl" />
      <Skeleton className="size-20 w-full rounded-xl" />
      <Skeleton className="size-20 w-full rounded-xl" />
      <Skeleton className="size-20 w-full rounded-xl" />
    </div>
  );
}

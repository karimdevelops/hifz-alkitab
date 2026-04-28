import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col gap-10">
      <Skeleton className="size-16 w-full" />
      <Skeleton className="size-16 w-full" />
      <Skeleton className="size-16 w-full" />
      <Skeleton className="size-16 w-full" />
      <Skeleton className="size-16 w-full" />
      <Skeleton className="size-16 w-full" />
    </div>
  );
}

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col gap-5">
      <Skeleton className="size-20 w-full" />
      <Skeleton className="size-20 w-full" />
      <Skeleton className="size-20 w-full" />
      <Skeleton className="size-20 w-full" />
      <Skeleton className="size-20 w-full" />
      <Skeleton className="size-20 w-full" />
    </div>
  );
}

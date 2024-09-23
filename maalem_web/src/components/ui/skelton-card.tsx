import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[30rem] w-[77rem] rounded-xl" />
    </div>
  )
}

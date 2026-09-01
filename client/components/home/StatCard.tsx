import StatCounter from "./StatCounter";
import { cn } from "@/lib/utils";

export default function StatCard({
  value,
  suffix,
  label,
  variant = "clay",
}: {
  value: number;
  suffix?: string;
  label: string;
  variant?: "clay" | "olive";
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col justify-between rounded-3xl p-5 sm:p-6",
        variant === "clay" && "bg-clay text-clay-foreground",
        variant === "olive" && "bg-olive text-olive-foreground",
      )}
    >
      <span className="self-end text-lg">↗</span>
      <p className="font-display text-3xl font-semibold sm:text-4xl">
        <StatCounter value={value} suffix={suffix} />
      </p>
      <p className="text-sm opacity-80">{label}</p>
    </div>
  );
}

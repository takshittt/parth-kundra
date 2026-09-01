import { Award } from "lucide-react";
import StatCounter from "./StatCounter";

export default function AwardCard() {
  return (
    <div className="relative flex h-full items-center justify-between overflow-hidden rounded-3xl bg-ink p-5 text-ink-foreground sm:p-6">
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full opacity-80"
        style={{
          background:
            "conic-gradient(from 180deg, hsl(21 45% 48%), hsl(84 15% 40%), hsl(38 32% 80%), hsl(21 45% 48%))",
        }}
      />
      <Award className="relative h-8 w-8 text-ink-foreground/70" strokeWidth={1.5} />
      <div className="relative text-right">
        <p className="font-display text-3xl font-semibold sm:text-4xl">
          <StatCounter value={12} />
        </p>
        <p className="text-sm text-ink-foreground/70">Global film awards</p>
      </div>
    </div>
  );
}

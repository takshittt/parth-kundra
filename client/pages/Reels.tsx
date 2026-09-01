import { useEffect, useRef, useState } from "react";
import SiteLayout from "@/components/layout/SiteLayout";
import { Pause, Play } from "lucide-react";

const REELS = [
  {
    title: "Selected Cinematography, 2024",
    label: "Showreel",
    duration: "03:40",
    gradient:
      "radial-gradient(circle at 25% 20%, hsl(21 45% 30%) 0%, transparent 55%), radial-gradient(circle at 80% 75%, hsl(84 15% 22%) 0%, transparent 50%)",
  },
  {
    title: "Meridian — Behind the Scenes",
    label: "BTS",
    duration: "02:12",
    gradient:
      "radial-gradient(circle at 75% 25%, hsl(84 15% 25%) 0%, transparent 55%), radial-gradient(circle at 20% 80%, hsl(21 45% 28%) 0%, transparent 50%)",
  },
  {
    title: "Nightfall — Short Film",
    label: "Narrative",
    duration: "05:48",
    gradient:
      "radial-gradient(circle at 30% 75%, hsl(21 45% 26%) 0%, transparent 55%), radial-gradient(circle at 80% 20%, hsl(30 18% 20%) 0%, transparent 50%)",
  },
  {
    title: "Slow Water — Documentary Cut",
    label: "Documentary",
    duration: "04:05",
    gradient:
      "radial-gradient(circle at 20% 30%, hsl(84 15% 30%) 0%, transparent 55%), radial-gradient(circle at 85% 80%, hsl(21 45% 24%) 0%, transparent 50%)",
  },
];

function ReelPlayerCard({
  title,
  label,
  duration,
  gradient,
}: {
  title: string;
  label: string;
  duration: string;
  gradient: string;
}) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setProgress((p) => (p >= 100 ? 0 : p + 0.6));
      }, 60);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [playing]);

  return (
    <div className="group relative flex h-72 flex-col justify-between overflow-hidden rounded-3xl bg-ink p-6 text-ink-foreground sm:p-7">
      <div
        className="pointer-events-none absolute inset-0 opacity-70 transition-transform duration-700 group-hover:scale-105"
        style={{ background: gradient }}
      />

      <div className="relative flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-ink-foreground/60">
          {label}
        </span>
        <span className="text-xs font-medium text-ink-foreground/60">
          {playing ? `-- / ${duration}` : duration}
        </span>
      </div>

      <div className="relative flex flex-1 items-center justify-center">
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pause reel" : "Play reel"}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-ink-foreground text-ink transition-transform duration-300 hover:scale-110 active:scale-95"
        >
          {playing ? (
            <Pause className="h-6 w-6" fill="currentColor" />
          ) : (
            <Play className="ml-1 h-6 w-6" fill="currentColor" />
          )}
        </button>
      </div>

      <div className="relative flex flex-col gap-2">
        <p className="font-display text-lg font-semibold">{title}</p>
        <div className="h-1 w-full overflow-hidden rounded-full bg-ink-foreground/15">
          <div
            className="h-full rounded-full bg-clay transition-[width] duration-75 ease-linear"
            style={{ width: `${playing ? progress : 0}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Reels() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
        <div className="flex flex-col gap-4 border-b border-border/70 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Reels
            </span>
            <h1 className="mt-3 font-display text-6xl font-extrabold leading-[0.9] tracking-tight sm:text-7xl">
              Motion in
              <br />
              every frame.
            </h1>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Showreels, behind-the-scenes footage, and cuts from recent
            productions.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {REELS.map((reel) => (
            <ReelPlayerCard key={reel.title} {...reel} />
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}

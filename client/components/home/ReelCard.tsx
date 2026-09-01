import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

export default function ReelCard() {
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
    <div className="group relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-3xl bg-ink p-6 text-ink-foreground sm:p-8">
      <div
        className="pointer-events-none absolute inset-0 opacity-70 transition-transform duration-700 group-hover:scale-105"
        style={{
          background:
            "radial-gradient(circle at 25% 20%, hsl(21 45% 30%) 0%, transparent 55%), radial-gradient(circle at 80% 75%, hsl(84 15% 22%) 0%, transparent 50%)",
        }}
      />

      <div className="relative flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-ink-foreground/60">
          Showreel
        </span>
        <span className="text-xs font-medium text-ink-foreground/60">
          {playing ? "02:14 / 03:40" : "03:40"}
        </span>
      </div>

      <div className="relative flex flex-1 items-center justify-center py-10">
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pause showreel" : "Play showreel"}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-ink-foreground text-ink transition-transform duration-300 hover:scale-110 active:scale-95 sm:h-20 sm:w-20"
        >
          {playing ? (
            <Pause className="h-6 w-6" fill="currentColor" />
          ) : (
            <Play className="ml-1 h-6 w-6" fill="currentColor" />
          )}
        </button>
      </div>

      <div className="relative flex flex-col gap-2">
        <p className="font-display text-lg font-semibold sm:text-xl">
          Selected Cinematography, 2024
        </p>
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

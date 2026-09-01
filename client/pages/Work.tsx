import SiteLayout from "@/components/layout/SiteLayout";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    title: "Meridian — Brand Film",
    category: "Commercial",
    year: "2024",
    client: "Meridian",
    variant: "ink" as const,
  },
  {
    title: "Northwind Docs",
    category: "Documentary",
    year: "2024",
    client: "Northwind",
    variant: "clay" as const,
  },
  {
    title: "Arclight — Launch Reel",
    category: "Commercial",
    year: "2023",
    client: "Arclight",
    variant: "olive" as const,
  },
  {
    title: "Fable Co. — Season One",
    category: "Series",
    year: "2023",
    client: "Fable Co.",
    variant: "sand" as const,
  },
  {
    title: "Nightfall",
    category: "Short Film",
    year: "2023",
    client: "Independent",
    variant: "ink" as const,
  },
  {
    title: "Slow Water",
    category: "Documentary",
    year: "2022",
    client: "Independent",
    variant: "clay" as const,
  },
];

const VARIANT_STYLES: Record<string, string> = {
  ink: "bg-ink text-ink-foreground",
  clay: "bg-clay text-clay-foreground",
  olive: "bg-olive text-olive-foreground",
  sand: "bg-sand text-sand-foreground",
};

export default function Work() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
        <div className="flex flex-col gap-4 border-b border-border/70 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Selected Work
            </span>
            <h1 className="mt-3 font-display text-6xl font-extrabold leading-[0.9] tracking-tight sm:text-7xl">
              Projects &amp;
              <br />
              Productions.
            </h1>
          </div>
          <p className="max-w-sm text-muted-foreground">
            A collection of commercial, documentary, and narrative work shot
            and directed over the last several years.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className={cn(
                "group relative flex h-64 flex-col justify-between overflow-hidden rounded-3xl p-6 transition-transform hover:-translate-y-1 sm:p-7",
                VARIANT_STYLES[project.variant],
              )}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-70 transition-transform duration-700 group-hover:scale-105"
                style={{
                  background:
                    "radial-gradient(circle at 20% 15%, hsl(0 0% 100% / 0.08) 0%, transparent 55%), radial-gradient(circle at 85% 85%, hsl(0 0% 0% / 0.08) 0%, transparent 50%)",
                }}
              />

              <div className="relative flex items-center justify-between text-xs font-medium uppercase tracking-[0.2em] opacity-70">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>

              <div className="relative">
                <p className="text-xs font-medium uppercase tracking-[0.2em] opacity-60">
                  {project.client}
                </p>
                <div className="mt-2 flex items-end justify-between gap-3">
                  <h3 className="font-display text-2xl font-semibold leading-tight">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 shrink-0 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}

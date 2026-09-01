import SiteLayout from "@/components/layout/SiteLayout";
import StatCard from "@/components/home/StatCard";
import ClientsCard from "@/components/home/ClientsCard";
import { Aperture, Mail } from "lucide-react";

const EXPERIENCE = [
  {
    year: "2024",
    role: "Director of Photography",
    org: "Independent",
    copy: "Leading cinematography for commercial and documentary projects across North America and Europe.",
  },
  {
    year: "2021",
    role: "Senior Cinematographer",
    org: "Arclight Studios",
    copy: "Shot brand films and narrative shorts, developing signature lighting and color workflows.",
  },
  {
    year: "2018",
    role: "Camera Operator",
    org: "Northwind Productions",
    copy: "Operated on set for documentary and episodic productions, building a foundation in visual storytelling.",
  },
  {
    year: "2016",
    role: "Assistant Camera",
    org: "Fable Co.",
    copy: "Started in the camera department, learning the craft from the ground up on commercial sets.",
  },
];

const TOOLS = [
  "ARRI Alexa",
  "RED Komodo",
  "DaVinci Resolve",
  "Cooke Anamorphics",
  "Premiere Pro",
  "Ronin 4D",
];

export default function About() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-[340px_1fr] lg:gap-6">
          <div className="rounded-3xl bg-sand p-6 text-sand-foreground sm:p-8">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-sand-foreground/60">
              <Aperture className="h-3.5 w-3.5" />
              About Me
            </div>

            <div className="my-8 flex justify-center">
              <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-clay via-clay/70 to-olive sm:h-40 sm:w-40">
                <div className="flex h-[85%] w-[85%] items-center justify-center rounded-full border-2 border-sand bg-ink">
                  <Aperture className="h-12 w-12 text-ink-foreground/80" strokeWidth={1.25} />
                </div>
              </div>
            </div>

            <p className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Parth Kundra
            </p>
            <p className="mt-2 text-sm text-sand-foreground/70">
              Cinematographer &amp; visual storyteller
            </p>

            <a
              href="mailto:hello@reevemarlow.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-sand-foreground/80 transition-colors hover:text-sand-foreground"
            >
              <Mail className="h-4 w-4" />
              hello@reevemarlow.com
            </a>
          </div>

          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
            <h1 className="font-display text-6xl font-extrabold leading-[0.9] tracking-tight sm:text-7xl">
              The story
              <br />
              behind the frame.
            </h1>
            <p className="max-w-2xl text-muted-foreground">
              I&apos;m a cinematographer based between Los Angeles and
              London, working with brands, filmmakers, and studios to craft
              images that carry weight and feeling. My approach blends
              disciplined technical craft with an instinct for light,
              movement, and pace — every frame is built to serve the story,
              not the other way around.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              <StatCard value={48} suffix="+" label="Projects shot" variant="clay" />
              <StatCard value={9} label="Years experience" variant="olive" />
            </div>
          </div>
        </div>

        <section className="mt-16 border-t border-border/70 pt-10 sm:mt-20 sm:pt-12">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Experience
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            A path through the frame.
          </h2>

          <div className="mt-10 flex flex-col divide-y divide-border/70 rounded-3xl border border-border bg-card">
            {EXPERIENCE.map((item) => (
              <div
                key={item.year}
                className="grid gap-2 p-6 sm:grid-cols-[100px_1fr] sm:gap-6 sm:p-7"
              >
                <span className="font-display text-lg font-semibold text-muted-foreground">
                  {item.year}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold">
                    {item.role}
                    <span className="ml-2 text-base font-normal text-muted-foreground">
                      · {item.org}
                    </span>
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-4 sm:mt-20 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-7">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Kit &amp; tools
            </span>
            <div className="mt-4 flex flex-wrap gap-2">
              {TOOLS.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <ClientsCard />
        </section>
      </div>
    </SiteLayout>
  );
}

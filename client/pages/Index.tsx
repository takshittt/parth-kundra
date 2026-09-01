import SiteLayout from "@/components/layout/SiteLayout";
import ProfileCard from "@/components/home/ProfileCard";
import ReelCard from "@/components/home/ReelCard";
import StatCard from "@/components/home/StatCard";
import ClientsCard from "@/components/home/ClientsCard";
import AwardCard from "@/components/home/AwardCard";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Index() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-[340px_1fr] lg:gap-6">
          <div className="lg:row-span-2">
            <ProfileCard />
          </div>

          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h1 className="font-display text-6xl font-extrabold leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
                Frame by
                <br />
                Frame.
              </h1>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
              >
                View Work
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-[1fr_200px] sm:gap-5 lg:gap-6">
              <div className="min-h-[220px]">
                <ReelCard />
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-1 sm:gap-5 lg:gap-6">
                <StatCard value={48} suffix="+" label="Projects shot" variant="clay" />
                <StatCard value={9} label="Years experience" variant="olive" />
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:col-start-2 lg:gap-6">
            <ClientsCard />
            <AwardCard />
          </div>
        </div>

        <section className="mt-16 border-t border-border/70 pt-10 sm:mt-20 sm:pt-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                What I do
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                Cinematography, direction, and color.
              </h2>
            </div>
            <p className="max-w-sm text-muted-foreground">
              I craft moving images for brands, filmmakers, and studios who
              care about how a story feels in every frame.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-5">
            {[
              {
                title: "Cinematography",
                copy: "Feature, commercial, and documentary lensing built around light and movement.",
              },
              {
                title: "Direction",
                copy: "On-set leadership from pre-production through final delivery.",
              },
              {
                title: "Color grading",
                copy: "Custom looks that give every project a distinct, cohesive tone.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <h3 className="font-display text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.copy}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}

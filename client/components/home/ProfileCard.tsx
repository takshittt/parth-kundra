import { Aperture, ArrowUpRight, Mail } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="flex h-full flex-col justify-between rounded-3xl bg-sand p-6 text-sand-foreground sm:p-8">
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

      <div>
        <p className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
          I&apos;m, <br />
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
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

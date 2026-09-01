import { useState } from "react";
import { toast } from "sonner";
import SiteLayout from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AtSign, Globe, Mail, MapPin } from "lucide-react";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com", icon: AtSign },
  { label: "Portfolio site", href: "https://reevemarlow.com", icon: Globe },
];

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Message sent — I'll get back to you soon.");
      event.currentTarget.reset();
    }, 700);
  };

  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Contact
          </span>
          <h1 className="mt-3 font-display text-6xl font-extrabold leading-[0.9] tracking-tight sm:text-7xl">
            Let&apos;s make
            <br />
            something.
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Have a project in mind? Tell me a bit about it and I&apos;ll
            follow up within a couple of days.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:gap-5 lg:grid-cols-[1fr_340px] lg:gap-6">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Name
                </label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@studio.com"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="project"
                className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
              >
                Project type
              </label>
              <Input
                id="project"
                name="project"
                placeholder="Commercial, documentary, narrative..."
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project, timeline, and budget."
                className="min-h-[160px]"
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="mt-2 self-start rounded-full"
            >
              {submitting ? "Sending..." : "Send message"}
            </Button>
          </form>

          <div className="flex flex-col gap-4 sm:gap-5">
            <div className="rounded-3xl bg-ink p-6 text-ink-foreground sm:p-7">
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-ink-foreground/60">
                Direct
              </span>
              <a
                href="mailto:hello@reevemarlow.com"
                className="mt-4 flex items-center gap-2 text-lg font-medium transition-colors hover:text-ink-foreground/80"
              >
                <Mail className="h-4 w-4" />
                hello@reevemarlow.com
              </a>
              <div className="mt-3 flex items-center gap-2 text-sm text-ink-foreground/70">
                <MapPin className="h-4 w-4" />
                Los Angeles &amp; London
              </div>
            </div>

            <div className="rounded-3xl bg-secondary p-6 text-secondary-foreground sm:p-7">
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                Elsewhere
              </span>
              <div className="mt-4 flex flex-col gap-3">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
                  >
                    <social.icon className="h-4 w-4" />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}

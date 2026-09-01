import SiteLayout from "@/components/layout/SiteLayout";

export default function PlaceholderPage({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <SiteLayout>
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Coming soon
        </span>
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">
          {title}
        </h1>
        <p className="max-w-md text-muted-foreground">
          {description ??
            "This page hasn't been built out yet. Keep prompting to add content here."}
        </p>
      </div>
    </SiteLayout>
  );
}

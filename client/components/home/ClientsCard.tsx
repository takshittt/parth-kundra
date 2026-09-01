const CLIENTS = ["Meridian", "Northwind", "Arclight", "Fable Co."];

export default function ClientsCard() {
  return (
    <div className="flex h-full flex-col justify-between rounded-3xl bg-secondary p-5 text-secondary-foreground sm:p-6">
      <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
        Trusted by
      </span>
      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
        {CLIENTS.map((client) => (
          <span
            key={client}
            className="truncate font-display text-sm font-semibold text-secondary-foreground/80"
          >
            {client}
          </span>
        ))}
      </div>
    </div>
  );
}

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Reels", to: "/reels" },
  { label: "Contact", to: "/contact" },
];

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Desktop vertical rail */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-20 flex-col items-center justify-between border-r border-border/70 py-8 md:flex">
        <Link
          to="/"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-sm font-semibold text-primary-foreground"
          aria-label="Home"
        >
          PK
        </Link>

        <nav className="flex flex-col items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <div key={item.to} className="flex h-16 items-center justify-center">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "origin-center -rotate-90 whitespace-nowrap text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground",
                    isActive && "text-foreground",
                  )
                }
              >
                {item.label}
              </NavLink>
            </div>
          ))}
        </nav>

        <span className="-rotate-90 whitespace-nowrap mb-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Est. 2024
        </span>
      </aside>

      {/* Mobile top bar */}
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-border/70 bg-background/90 px-5 py-4 backdrop-blur-sm md:hidden">
        <Link
          to="/"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-display text-xs font-semibold text-primary-foreground"
          aria-label="Home"
        >
          PK
        </Link>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground"
        >
          <Menu className="h-4 w-4" />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-background px-6 py-6 md:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-semibold">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <nav className="mt-12 flex flex-1 flex-col justify-center gap-6">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "font-display text-4xl font-semibold text-muted-foreground transition-colors",
                        isActive && "text-foreground",
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20 md:pl-20 md:pt-0">{children}</main>
    </div>
  );
}

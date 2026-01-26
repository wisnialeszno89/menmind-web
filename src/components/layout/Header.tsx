"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_PL = [
  { label: "Start", href: "/" },
  { label: "O projekcie", href: "/about" },
  { label: "Propozycje", href: "/propozycje?state=broken&city=online" },
  { label: "Partnerzy", href: "/partners" },
  { label: "Partnerstwo", href: "/partnerstwo" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Navimind", href: "/navimind" },
];

const NAV_EN = [
  { label: "Home", href: "/en" },
  { label: "About", href: "/en/about" },
  { label: "Suggestions", href: "/en/suggestions?state=broken&city=online" },
  { label: "Partners", href: "/en/partners" },
  { label: "Partnership", href: "/en/partnership" },
  { label: "Contact", href: "/en/contact" },
  { label: "Navimind", href: "/en/navimind" },
];

function isEnglishPath(pathname: string) {
  return pathname === "/en" || pathname.startsWith("/en/");
}

function toEnglishPath(pathname: string) {
  if (pathname === "/") return "/en";
  if (pathname === "/about") return "/en/about";
  if (pathname === "/navimind") return "/en/navimind";
  if (pathname === "/partners") return "/en/partners";
  if (pathname === "/partnerstwo") return "/en/partnership";
  if (pathname === "/kontakt") return "/en/contact";
  if (pathname === "/propozycje") return "/en/suggestions";

  if (pathname.startsWith("/where/")) {
    return pathname.replace("/where/", "/en/where/");
  }

  return "/en";
}

function toPolishPath(pathname: string) {
  if (pathname === "/en") return "/";
  if (pathname === "/en/about") return "/about";
  if (pathname === "/en/navimind") return "/navimind";
  if (pathname === "/en/partners") return "/partners";
  if (pathname === "/en/partnership") return "/partnerstwo";
  if (pathname === "/en/contact") return "/kontakt";
  if (pathname === "/en/suggestions") return "/propozycje";

  if (pathname.startsWith("/en/where/")) {
    return pathname.replace("/en/where/", "/where/");
  }

  return "/";
}

export default function Header() {
  const pathname = usePathname();
  const isEN = isEnglishPath(pathname);

  const nav = isEN ? NAV_EN : NAV_PL;

  // ✅ bez useSearchParams → zero problemów
  const queryString =
    typeof window !== "undefined" ? window.location.search : "";

  const mappedBase = isEN ? toPolishPath(pathname) : toEnglishPath(pathname);
  const languageSwitchHref = `${mappedBase}${queryString}`;

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/40 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href={isEN ? "/en" : "/"}
          className="font-semibold tracking-tight text-zinc-100 hover:text-cyan-200 transition"
        >
          Waypoint
          <span className="ml-2 text-xs font-medium text-zinc-500">beta</span>
        </Link>

        {/* Nav + Language */}
        <div className="flex items-center gap-3">
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item) => {
              const active = pathname === item.href.split("?")[0];

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "px-3 py-2 rounded-xl text-sm transition",
                    active
                      ? "bg-cyan-500/15 text-cyan-200 ring-1 ring-cyan-400/20"
                      : "text-zinc-300 hover:bg-zinc-800/50 hover:text-zinc-100",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile shortcut */}
          <div className="md:hidden flex items-center gap-2">
            <Link
              href={
                isEN
                  ? "/en/suggestions?state=broken&city=online"
                  : "/propozycje?state=broken&city=online"
              }
              className="px-3 py-2 rounded-xl text-sm text-zinc-300 ring-1 ring-zinc-800/70 bg-zinc-900/40 hover:bg-zinc-800/50 transition"
            >
              {isEN ? "Suggestions" : "Propozycje"}
            </Link>
          </div>

          {/* Language switch */}
          <Link
            href={languageSwitchHref}
            aria-label={isEN ? "Switch language to Polish" : "Switch language to English"}
            className="inline-flex items-center justify-center rounded-xl border border-zinc-800/70 bg-zinc-900/40 px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-800/50 transition"
            title={isEN ? "PL" : "EN"}
          >
            <span className="text-lg leading-none">{isEN ? "🇵🇱" : "🇬🇧"}</span>
          </Link>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden border-t border-zinc-800/60 bg-zinc-950/30">
        <div className="mx-auto max-w-6xl px-6 py-3 flex flex-wrap gap-2">
          {nav.map((item) => {
            const active = pathname === item.href.split("?")[0];

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "px-3 py-2 rounded-xl text-sm transition",
                  active
                    ? "bg-cyan-500/15 text-cyan-200 ring-1 ring-cyan-400/20"
                    : "bg-zinc-900/40 text-zinc-300 ring-1 ring-zinc-800/70 hover:bg-zinc-800/50",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
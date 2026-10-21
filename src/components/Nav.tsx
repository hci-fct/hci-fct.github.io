"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

const links = [
  { id: "about", label: "About" },
  { id: "project", label: "Project" },
  { id: "prototype", label: "Prototype" },
  { id: "team", label: "Team" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      let current = "";
      for (const { id } of links) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 120) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-slate-200 bg-white/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight text-slate-900">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-azul-600 text-sm text-white">E</span>
          {site.name}
        </a>

        <ul className="hidden gap-1 sm:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  active === l.id
                    ? "bg-azul-50 text-azul-700"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-lg text-slate-700 sm:hidden"
        >
          <span className="relative block h-3 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </nav>

      <ul
        className={`overflow-hidden px-4 transition-all duration-300 sm:hidden ${
          open ? "max-h-64 pb-4" : "max-h-0"
        }`}
      >
        {links.map((l) => (
          <li key={l.id}>
            <a
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-slate-700 hover:bg-slate-50"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}

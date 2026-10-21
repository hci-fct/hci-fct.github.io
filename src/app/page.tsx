import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { about, prototype, site, stages, team, type Status } from "@/content/site";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
const asset = (path: string) => (path.startsWith("/") ? base + path : path);

const statusStyle: Record<Status, { label: string; className: string }> = {
  done: { label: "Done", className: "bg-emerald-50 text-emerald-700 ring-emerald-600/20" },
  current: { label: "In progress", className: "bg-azul-50 text-azul-700 ring-azul-600/20" },
  upcoming: { label: "Upcoming", className: "bg-slate-50 text-slate-500 ring-slate-400/20" },
};

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-azul-600">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg text-slate-600">{text}</p>}
    </Reveal>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto h-80 w-full max-w-sm" aria-hidden>
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-azul-100 to-azul-50" />
      {/* tile pattern */}
      <div className="absolute inset-4 grid grid-cols-4 gap-2 opacity-60">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className={`rounded-md ${i % 3 === 0 ? "bg-azul-200" : "bg-white/70"}`} />
        ))}
      </div>
      <div className="animate-float absolute left-2 top-8 w-52 rounded-2xl bg-white p-4 shadow-xl shadow-azul-900/10 [--r:-4deg]">
        <p className="text-xs font-semibold text-slate-400">Arrival checklist</p>
        {["Learning Agreement", "Student card", "Accommodation"].map((t, i) => (
          <div key={t} className="mt-2 flex items-center gap-2 text-sm text-slate-700">
            <span className={`grid h-4 w-4 place-items-center rounded ${i < 2 ? "bg-azul-600 text-[10px] text-white" : "border border-slate-300"}`}>
              {i < 2 ? "✓" : ""}
            </span>
            {t}
          </div>
        ))}
      </div>
      <div
        className="animate-float absolute bottom-8 right-2 w-48 rounded-2xl bg-white p-4 shadow-xl shadow-azul-900/10 [--r:3deg]"
        style={{ animationDelay: "1.5s" }}
      >
        <p className="text-xs font-semibold text-slate-400">Next class</p>
        <p className="mt-1 font-semibold text-slate-900">Building VII · 9:00</p>
        <p className="mt-1 text-xs text-azul-600">How do I get there? →</p>
      </div>
      <div className="absolute right-10 top-6 h-10 w-10 rounded-full bg-sun-400 shadow-lg" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-gradient-to-b from-azul-50/70 to-transparent" />
          <div className="mx-auto grid max-w-5xl items-center gap-14 px-4 sm:px-6 md:grid-cols-2">
            <Reveal>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-azul-200 bg-white px-3 py-1 text-xs font-medium text-azul-700">
                <span className="h-1.5 w-1.5 rounded-full bg-azul-500" />
                {site.course}
              </p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                {site.tagline}
              </h1>
              <p className="mt-6 text-lg text-slate-600">{site.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#project"
                  className="rounded-full bg-azul-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-azul-600/25 transition hover:-translate-y-0.5 hover:bg-azul-700"
                >
                  See the project stages
                </a>
                <a
                  href="#about"
                  className="rounded-full px-6 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:bg-white"
                >
                  About the idea
                </a>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <HeroVisual />
            </Reveal>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <SectionHeading eyebrow="About" title="Why Erasmus students need this" />
            <div className="grid gap-6 md:grid-cols-2">
              <Reveal className="rounded-3xl bg-slate-50 p-8">
                <h3 className="text-lg font-semibold text-slate-900">The problem</h3>
                <p className="mt-3 text-slate-600">{about.problem}</p>
              </Reveal>
              <Reveal delay={100} className="rounded-3xl bg-azul-600 p-8 text-white">
                <h3 className="text-lg font-semibold">Our solution</h3>
                <p className="mt-3 text-azul-50">{about.solution}</p>
              </Reveal>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {about.goals.map((g, i) => (
                <Reveal key={g.title} delay={i * 100} className="rounded-3xl border border-slate-200 p-6">
                  <span className="text-sm font-semibold text-azul-600">0{i + 1}</span>
                  <h3 className="mt-2 font-semibold text-slate-900">{g.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{g.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Project stages */}
        <section id="project" className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Project"
              title="Six stages, one platform"
              text="Our progress through the IPM final project. Reports are linked as soon as they are submitted."
            />
            <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {stages.map((s, i) => {
                const status = statusStyle[s.status];
                return (
                  <Reveal key={s.n} delay={(i % 3) * 100} className="h-full">
                    <li
                      className={`group flex h-full flex-col rounded-3xl bg-white p-6 ring-1 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 ${
                        s.status === "current" ? "ring-2 ring-azul-500" : "ring-slate-200"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-4xl font-bold text-slate-200 transition-colors group-hover:text-azul-200">
                          {String(s.n).padStart(2, "0")}
                        </span>
                        <span className={`rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${status.className}`}>
                          {status.label}
                        </span>
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
                      <p className="mt-1 text-xs font-medium text-slate-400">{s.date}</p>
                      <p className="mt-3 flex-1 text-sm text-slate-600">{s.text}</p>
                      {s.report ? (
                        <a
                          href={asset(s.report)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-azul-600 hover:text-azul-700"
                        >
                          Read report <span className="transition-transform group-hover:translate-x-1">→</span>
                        </a>
                      ) : (
                        <span className="mt-5 text-sm text-slate-400">
                          {s.status === "upcoming" ? "Not started yet" : "Report coming soon"}
                        </span>
                      )}
                    </li>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </section>

        {/* Prototype */}
        <section id="prototype" className="py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Stage 3"
              title="Paper prototype & user tests"
              text="Our first, hand-drawn prototype was tested by colleagues in the lab class. This is the briefing and the scenarios they received."
            />
            <div className="grid gap-6 lg:grid-cols-5">
              <Reveal className="rounded-3xl bg-slate-900 p-8 text-white lg:col-span-2">
                <p className="text-sm font-semibold uppercase tracking-widest text-azul-200">Briefing</p>
                <p className="mt-4 leading-relaxed text-slate-200">{prototype.briefing}</p>
              </Reveal>
              <div className="grid gap-4 lg:col-span-3">
                {prototype.scenarios.map((sc, i) => (
                  <Reveal key={sc.title} delay={i * 100}>
                    <div className="flex gap-4 rounded-3xl border border-slate-200 p-6 transition hover:border-azul-200 hover:bg-azul-50/40">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-azul-50 font-semibold text-azul-700">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold text-slate-900">{sc.title}</h3>
                        <p className="mt-1 text-sm text-slate-600">{sc.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal className="mt-10">
              {prototype.gallery.length > 0 ? (
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  {prototype.gallery.map((img) => (
                    <figure key={img.src} className="overflow-hidden rounded-2xl bg-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={asset(img.src)}
                        alt={img.caption}
                        className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
                      />
                      <figcaption className="p-3 text-xs text-slate-500">{img.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              ) : (
                <div className="rounded-3xl border-2 border-dashed border-slate-200 p-10 text-center text-slate-400">
                  Sketches, storyboards and photos from testing day will appear here.
                </div>
              )}
            </Reveal>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <SectionHeading eyebrow="Team" title="Who we are" />
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
              {team.map((m, i) => (
                <Reveal key={m.name} delay={i * 80}>
                  <div className="rounded-3xl bg-white p-6 text-center ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5">
                    <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-azul-500 to-azul-700 text-xl font-semibold text-white">
                      {m.name
                        .split(" ")
                        .map((p) => p[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <p className="mt-4 font-semibold text-slate-900">{m.name}</p>
                    <p className="text-sm text-slate-500">{m.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 text-sm text-slate-500 sm:flex-row sm:justify-between sm:px-6">
          <p>
            {site.name} · {site.university}
          </p>
          <p>{site.course}</p>
        </div>
      </footer>
    </>
  );
}

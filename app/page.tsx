'use client'
import Link from "next/link";
export default function LandingPage() {

  const features = [
    { icon: "↑", title: "Income tracking", desc: "Log every source of income with full CRUD control." },
    { icon: "↓", title: "Expense control", desc: "Categorize and manage your expenses effortlessly." },
    { icon: "⚡", title: "Instant overview", desc: "See your financial balance at a glance, always up to date." },
    { icon: "🔒", title: "Private & secure", desc: "Your data is yours. Protected with session-based auth." },
    { icon: "◎", title: "Simple by design", desc: "No bloat, no ads, no subscriptions. Just clarity." },
    { icon: "↻", title: "Full history", desc: "Every record is editable and traceable over time." },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-mono relative overflow-x-hidden">

      {/* Glow blobs */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-lime-400 opacity-5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-20 left-0 w-80 h-80 bg-emerald-400 opacity-5 rounded-full blur-3xl pointer-events-none" />

      {/* NAV */}
      <nav className="relative z-10 max-w-4xl mx-auto flex items-center justify-between px-6 py-6">
        <span className="font-serif text-2xl tracking-tight">
          valt<span className="text-lime-400">.</span>
        </span>
        <div className="flex items-center gap-3">
          <Link
           href="/auth/login"
            className="text-sm text-zinc-400 border border-zinc-800 px-4 py-2 rounded-md hover:text-zinc-100 hover:border-zinc-600 transition-all"
          >
            Sign in
          </Link>
          <button
            
            className="text-sm bg-lime-400 text-zinc-950 font-semibold px-4 py-2 rounded-md hover:bg-lime-300 transition-all"
          >
            Get started
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 pt-20 pb-20">
        <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-lime-400 bg-lime-400/10 border border-lime-400/20 px-4 py-2 rounded-full mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
          Personal Finance Tracker
        </div>

        <h1 className="font-serif text-5xl md:text-7xl leading-none tracking-tight mb-6">
          Your money,<br />
          <em className="text-lime-400 not-italic">finally</em> clear.
        </h1>

        <p className="text-zinc-500 text-sm leading-relaxed max-w-sm mb-10">
          Track incomes and expenses in one clean place.
          No clutter, no subscriptions, no nonsense.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/auth/login"
            className="text-sm bg-lime-400 text-zinc-950 font-semibold px-6 py-3 rounded-md hover:bg-lime-300 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-lime-400/20"
          >
            Start tracking →
          </Link>
          <button
            onClick={() => document.getElementById("features").scrollIntoView({ behavior: "smooth" })}
            className="text-sm text-zinc-300 border border-zinc-800 px-6 py-3 rounded-md hover:border-lime-400/50 hover:text-lime-400 transition-all"
          >
            See features
          </button>
        </div>
      </section>

      {/* STATS */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-3 border-t border-zinc-800">
          {[
            { num: "100%", label: "Private data" },
            { num: "2", label: "Core schemas" },
            { num: "∞", label: "Records tracked" },
          ].map((s) => (
            <div key={s.label} className="pt-6 pr-8 border-r border-zinc-800 last:border-r-0">
              <div className="font-serif text-3xl text-lime-400">{s.num}</div>
              <div className="text-xs text-zinc-600 mt-1 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section id="features" className="relative z-10 max-w-4xl mx-auto px-6 pb-24">
        <p className="text-xs tracking-widest uppercase text-zinc-600 mb-8">What's inside</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800 rounded-xl overflow-hidden">
          {features.map((f) => (
            <div key={f.title} className="bg-zinc-900 p-6 hover:bg-zinc-800/80 transition-colors group">
              <div className="text-2xl mb-4">{f.icon}</div>
              <div className="text-sm font-medium text-zinc-100 mb-1 group-hover:text-lime-400 transition-colors">{f.title}</div>
              <div className="text-xs text-zinc-600 leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>
      {/* FOOTER */}
      <footer className="relative z-10 max-w-4xl mx-auto px-6 py-6 border-t border-zinc-900 flex items-center justify-between">
        <span className="font-serif text-lg">valt<span className="text-lime-400">.</span></span>
        <span className="text-xs text-zinc-700">Built with Next.js · Auth.js · MongoDB</span>
      </footer>

    </div>
  );
}
const YEAR = 2026;

export default function Hero() {
  return (
    <section className="relative overflow-hidden felt-texture py-16 sm:py-24">
      {/* Background glow orbs */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-purple-700/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-orange-600/15 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        {/* Badge pill */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-2">
          <span className="text-orange-400 text-lg">🏆</span>
          <span className="text-sm font-semibold text-orange-300 tracking-wide">
            UK&apos;s Premier Casino Review Hub {YEAR}
          </span>
        </div>

        {/* H1 */}
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Find{" "}
          <span className="gold-text">UK&apos;s Best</span>
          <br />
          Online Casino Sites
        </h1>

        {/* Subtitle */}
        <p className="mx-auto text-lg text-purple-200 leading-relaxed">
          Independently expert-reviewed casinos with{" "}
          <strong className="text-orange-400">exclusive bonuses</strong> and full{" "}
          <strong className="text-purple-300">UKGC licensing</strong>. Updated daily for {YEAR}.
        </p>
      </div>
    </section>
  );
}

export default function AboutSection() {
  const ratingFactors = [
    { icon: "🛡️", text: "UKGC licence verification — we never list unlicensed operators" },
    { icon: "💰", text: "Bonus value analysis — wagering requirements, max cashout, and T&Cs" },
    { icon: "⚡", text: "Withdrawal process review — available methods, limits, and verification steps" },
    { icon: "🎮", text: "Game library depth — slots, live casino, table games, and RTP" },
    { icon: "📱", text: "Mobile experience — native app quality and browser performance" },
    { icon: "🎧", text: "Customer support — live chat, email response times, and helpfulness" },
    { icon: "🔒", text: "Security standards — SSL encryption, 2FA, and responsible gambling tools" },
  ];

  return (
    <section id="guide" className="py-16 sm:py-24 felt-texture">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            How We Rate{" "}
            <span className="gold-text">Casino Sites</span>
          </h2>
          <p className="mt-4 text-purple-300 text-lg max-w-2xl mx-auto">
            Our team of UK gambling experts spends hundreds of hours testing each site before publishing a review.
          </p>
        </div>

        {/* Advertiser Disclosure */}
        <div className="mb-10 rounded-2xl border border-purple-700/40 bg-purple-900/15 px-6 py-5">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 shrink-0 rounded-md border border-purple-600/50 bg-purple-800/40 px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-purple-300">
              Ad Disclosure
            </span>
            <p className="text-sm text-purple-300 leading-relaxed">
              <strong className="text-white">10bestukcasinos.org</strong> is owned and operated by{" "}
              <strong className="text-white">Andreas Karl-Heinz Hirsch</strong>, an independent
              aggregator running a casino comparison service for the UK market. This site earns
              revenue through affiliate commissions when users sign up at featured casinos via our
              tracked links — at no extra cost to you. Our editorial ratings and reviews remain
              unbiased and are based solely on independent testing. Andreas Karl-Heinz Hirsch is not
              a licensed gambling operator and does not provide gambling services.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Rating card */}
          <div className="casino-card-bg rounded-2xl p-8 relative overflow-hidden">
            <div className="pointer-events-none absolute top-0 right-0 h-48 w-48 rounded-full bg-purple-700/10 blur-2xl" />
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">⭐</span> Why Our Reviews Stand Out
            </h3>
            <ul className="space-y-4">
              {ratingFactors.map((f) => (
                <li key={f.text} className="flex items-start gap-3">
                  <span className="text-xl shrink-0 mt-0.5">{f.icon}</span>
                  <span className="text-sm text-purple-200 leading-relaxed">{f.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Responsible gambling card */}
          <div
            id="about"
            className="rounded-2xl p-8 relative overflow-hidden border border-amber-600/30 bg-amber-900/10"
          >
            <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-amber-600/5 blur-2xl" />
            <h3 className="text-xl font-bold text-amber-300 mb-4 flex items-center gap-2">
              <span className="text-2xl">♠️</span> Responsible Gambling
            </h3>
            <p className="text-sm text-amber-200/80 mb-6 leading-relaxed">
              We are committed to promoting safe and responsible gambling. All casinos in our list
              are regulated by the UK Gambling Commission and offer robust responsible gambling tools
              including deposit limits, self-exclusion, and reality checks.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="https://www.begambleaware.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-amber-600/30 bg-amber-900/20 px-4 py-3 hover:bg-amber-900/30 transition-colors"
              >
                <span className="text-xl">🌐</span>
                <div>
                  <div className="font-semibold text-amber-200">BeGambleAware.org</div>
                  <div className="text-xs text-amber-400">Free advice and support</div>
                </div>
              </a>
              <a
                href="https://www.gamstop.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-amber-600/30 bg-amber-900/20 px-4 py-3 hover:bg-amber-900/30 transition-colors"
              >
                <span className="text-xl">🚫</span>
                <div>
                  <div className="font-semibold text-amber-200">GamStop — Self-Exclusion</div>
                  <div className="text-xs text-amber-400">Exclude yourself from all UK-licensed casinos</div>
                </div>
              </a>
              <a
                href="tel:08088020133"
                className="flex items-center gap-3 rounded-lg border border-amber-600/30 bg-amber-900/20 px-4 py-3 hover:bg-amber-900/30 transition-colors"
              >
                <span className="text-xl">📞</span>
                <div>
                  <div className="font-semibold text-amber-200">National Gambling Helpline</div>
                  <div className="text-xs text-amber-400">0808 8020 133 — Free, confidential, 24/7</div>
                </div>
              </a>
            </div>
            <p className="mt-4 text-xs text-amber-600">
              If you or someone you know has a gambling problem, please seek help immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

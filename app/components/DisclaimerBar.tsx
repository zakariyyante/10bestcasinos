export default function DisclaimerBar() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
      <div className="flex flex-wrap items-center justify-center gap-2 rounded-xl border border-amber-600/30 bg-amber-900/10 px-5 py-3 text-center text-xs text-amber-300">
        <span className="text-base">⚠️</span>
        <strong className="text-amber-200 text-sm">For adults 18+ only.</strong>
        <span className="text-amber-400/80">
          Gambling can be addictive. Play responsibly. Visit{" "}
          <a
            href="https://www.begambleaware.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            BeGambleAware.org
          </a>{" "}
          or call{" "}
          <a href="tel:08088020133" className="underline hover:text-white transition-colors font-semibold">
            0808 8020 133
          </a>
          {" "}(National Gambling Helpline, free, 24/7).
        </span>
        <span className="text-amber-400/80">Regulated by the{" "}
          <a
            href="https://www.gamblingcommission.gov.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            UK Gambling Commission
          </a>.
        </span>
      </div>
    </div>
  );
}

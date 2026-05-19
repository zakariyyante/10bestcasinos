import Link from "next/link";
import Image from "next/image";

const YEAR = 2026;

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/#guide", label: "Casino Guide & Reviews" },
  { href: "/#about", label: "About Us" },
  { href: "/#contact", label: "Contact Us" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  {
    href: "https://www.gamblingcommission.gov.uk",
    label: "UKGC",
    external: true,
  },
  {
    href: "https://www.begambleaware.org",
    label: "BeGambleAware",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-purple-900/50 bg-[#080312] pt-12 pb-8"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Logo centred */}
        <div className="mb-10 flex justify-center">
          <Image
            src="/10bestlogo1.png"
            alt="10 Best UK Casinos"
            width={220}
            height={55}
            className="h-12 w-auto opacity-90"
          />
        </div>

        {/* Links grid */}
        <div className="mb-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-orange-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-purple-300 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-orange-400">
              Legal
            </h4>
            <ul className="space-y-2">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  {"external" in l && l.external ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-purple-300 hover:text-white transition-colors"
                    >
                      {l.label} ↗
                    </a>
                  ) : (
                    <Link
                      href={l.href}
                      className="text-sm text-purple-300 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="col-span-2">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-orange-400">
              Contact & Support
            </h4>
            <p className="text-sm text-purple-300 mb-2">
              📧{" "}
              <a
                href="mailto:info@10bestukcasinos.org"
                className="hover:text-white transition-colors"
              >
                info@10bestukcasinos.org
              </a>
            </p>
            <p className="text-sm text-purple-300">
              📞 National Gambling Helpline:{" "}
              <a href="tel:08088020133" className="text-amber-400 hover:text-white font-semibold">
                0808 8020 133
              </a>
            </p>
          </div>
        </div>

        {/* Responsible gambling logos row */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-6 border-y border-purple-900/30 py-6">
          {/* 18+ badge */}
          <div className="flex items-center gap-2 rounded-lg border border-amber-600/30 bg-amber-900/10 px-4 py-2">
            <span className="text-2xl font-black text-amber-400 border-2 border-amber-400 rounded px-1">18+</span>
            <span className="text-xs text-amber-300 font-semibold">Age Restriction</span>
          </div>
          {/* BeGambleAware */}
          <a
            href="https://www.begambleaware.org"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-purple-700/40 bg-white/5 px-4 py-2 hover:bg-white/10 transition-colors"
          >
            <Image
              src="/begambleaware.svg"
              alt="BeGambleAware"
              width={140}
              height={40}
              className="h-9 w-auto object-contain"
            />
          </a>
          {/* GambleAware */}
          <a
            href="https://www.gambleaware.org"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-purple-700/40 bg-white/5 px-4 py-2 hover:bg-white/10 transition-colors"
          >
            <Image
              src="/GambleAware.webp"
              alt="GambleAware"
              width={140}
              height={40}
              className="h-9 w-auto object-contain"
            />
          </a>
          {/* GamCare */}
          <a
            href="https://www.gamcare.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-purple-700/40 bg-white/5 px-4 py-2 hover:bg-white/10 transition-colors"
          >
            <Image
              src="/GamCare.svg"
              alt="GamCare"
              width={120}
              height={40}
              className="h-9 w-auto object-contain"
            />
          </a>
          {/* Gordon Moody */}
          <a
            href="https://www.gordonmoody.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-purple-700/40 bg-white/5 px-4 py-2 hover:bg-white/10 transition-colors"
          >
            <Image
              src="/gordonmoody.png"
              alt="Gordon Moody"
              width={120}
              height={40}
              className="h-9 w-auto object-contain"
            />
          </a>
        </div>

        {/* Disclaimer paragraph */}
        <div className="mb-4 rounded-xl border border-purple-900/30 bg-purple-900/10 p-5 text-xs text-purple-400 leading-relaxed space-y-3">
          <p>
            <strong className="text-purple-300">Educational Content Notice:</strong>{" "}
            10bestukcasinos.org is an independent guide and review website. All content published on
            this site — including casino guides, reviews, and comparisons — is provided strictly for{" "}
            <strong className="text-purple-300">educational and informational purposes only</strong>.
            We do not accept money, deposits, or any payments from players or users of this website.
          </p>
          <p>
            <strong className="text-purple-300">Affiliate Disclosure:</strong>{" "}
            We may receive a commission from our partners when you access a partner&apos;s website through
            information and links we provide. This commission comes solely from our partners and is at
            no cost to you. It does not influence our editorial guides or review ratings.
          </p>
          <p>
            All casinos featured in our guides are regulated by the{" "}
            <a
              href="https://www.gamblingcommission.gov.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-purple-200"
            >
              UK Gambling Commission
            </a>
            . Please gamble responsibly. If gambling is causing you problems, call the National
            Gambling Helpline on{" "}
            <a href="tel:08088020133" className="underline hover:text-purple-200">
              0808 8020 133
            </a>
            . Gambling is for adults aged 18 and over only.
          </p>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-purple-600">
          © {YEAR} 10bestukcasinos.org — Independent casino guides &amp; reviews for the UK market. Play responsibly. 18+.
        </p>
      </div>
    </footer>
  );
}

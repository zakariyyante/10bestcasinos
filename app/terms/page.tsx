import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | 10 Best UK Casinos",
  description: "Terms of Service for 10bestukcasinos.org — rules governing use of our affiliate review website.",
};

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
        <div className="casino-card-bg rounded-2xl p-8 sm:p-12">
          <h1 className="text-3xl font-extrabold text-white mb-2">Terms of Service</h1>
          <p className="text-purple-400 text-sm mb-10">Last updated: 1 January 2026</p>

          <div className="prose prose-invert max-w-none space-y-8 text-purple-200">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using 10bestukcasinos.org (&quot;the Site&quot;), you agree to be bound by
                these Terms of Service. If you do not agree, please discontinue use of the Site
                immediately.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. About the Site</h2>
              <p>
                10bestukcasinos.org is an independent affiliate marketing website providing reviews
                and comparisons of UK-licensed online casinos. We do not operate, own, or control any
                gambling platform. We may earn a commission when users sign up via our affiliate links.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. Age Restriction</h2>
              <p>
                This Site is intended exclusively for adults aged 18 years and over. By using this
                Site, you confirm that you are at least 18 years old. If you are under 18, you must
                leave this Site immediately.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. No Gambling Services</h2>
              <p>
                We do not provide gambling services. All gambling activities take place on the
                third-party casino platforms we link to. Those platforms are independently operated
                and regulated by the UK Gambling Commission (&quot;UKGC&quot;). We are not responsible for
                their services, promotions, or terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Accuracy of Information</h2>
              <p>
                We strive to keep all reviews, bonus information, and ratings accurate and up to date.
                However, casino bonuses and terms can change without notice. Always verify current
                offers directly on the casino&apos;s website before registering. We accept no liability for
                outdated or inaccurate bonus information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Affiliate Disclosure</h2>
              <p>
                Links on this Site may be affiliate links. If you click a link and sign up at a casino,
                we may receive a commission from that operator. This commission is at no additional cost
                to you and does not affect our editorial independence or the ratings we assign to casinos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Intellectual Property</h2>
              <p>
                All content on this Site, including text, graphics, logos, and reviews, is the property
                of 10bestukcasinos.org unless otherwise stated. You may not reproduce, distribute, or
                create derivative works without prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, 10bestukcasinos.org shall not be liable for
                any direct, indirect, incidental, or consequential damages arising from your use of
                this Site or any linked casino platforms. Gambling involves financial risk. Always
                gamble responsibly and within your means.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">9. Responsible Gambling</h2>
              <p>
                We are committed to promoting responsible gambling. If you believe gambling is causing
                you harm, please contact:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-purple-300">
                <li>
                  <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline hover:text-orange-300">
                    BeGambleAware.org
                  </a>
                </li>
                <li>
                  National Gambling Helpline:{" "}
                  <a href="tel:08088020133" className="text-orange-400 underline hover:text-orange-300">
                    0808 8020 133
                  </a>{" "}
                  (free, 24/7)
                </li>
                <li>
                  <a href="https://www.gamstop.co.uk" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline hover:text-orange-300">
                    GamStop.co.uk
                  </a>{" "}
                  — Self-exclusion from all UK-licensed casinos
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">10. Governing Law</h2>
              <p>
                These Terms are governed by the laws of England and Wales. Any disputes shall be
                subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes take effect immediately
                upon posting. Continued use of the Site after changes constitutes your acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">12. Contact</h2>
              <p>
                For any questions about these Terms, please email{" "}
                <a href="mailto:info@10bestukcasinos.org" className="text-orange-400 underline hover:text-orange-300">
                  info@10bestukcasinos.org
                </a>.
              </p>
            </section>
          </div>

          <div className="mt-10 pt-8 border-t border-purple-900/30">
            <Link href="/" className="text-orange-400 hover:text-orange-300 font-semibold transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

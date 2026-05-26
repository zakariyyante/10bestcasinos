import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | 10 Best UK Casinos",
  description: "Privacy Policy for 10bestukcasinos.org — how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
        <div className="casino-card-bg rounded-2xl p-8 sm:p-12">
          <h1 className="text-3xl font-extrabold text-white mb-2">Privacy Policy</h1>
          <p className="text-purple-400 text-sm mb-10">Last updated: 1 January 2026</p>

          <div className="prose prose-invert max-w-none space-y-8 text-purple-200">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Who We Are</h2>
              <p>
                10bestukcasinos.org (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is an independent affiliate review
                website. We do not operate any gambling services. Our registered contact email is{" "}
                <a href="mailto:info@10bestukcasinos.org" className="text-orange-400 hover:text-orange-300 underline">
                  info@10bestukcasinos.org
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-purple-300">
                <li>Usage data (pages visited, time on site, device type) via Google Analytics</li>
                <li>Click data via Vercel Analytics (anonymised)</li>
                <li>Cookies for analytics and session management</li>
                <li>Email address if you contact us voluntarily</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. How We Use Your Information</h2>
              <p>We use collected data to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-purple-300">
                <li>Improve our website content and user experience</li>
                <li>Measure advertising performance (Google Ads conversions)</li>
                <li>Respond to enquiries sent to our contact email</li>
                <li>Comply with legal obligations under UK GDPR</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Cookies</h2>
              <p>
                We use strictly necessary cookies and analytics cookies. Analytics cookies are only placed
                with your consent. You can disable cookies in your browser settings at any time. Disabling
                cookies may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Affiliate Links &amp; Third Parties</h2>
              <p>
                Our site contains affiliate links to licensed UK casinos. When you click these links,
                the casino operator may place their own cookies on your device. We are not responsible
                for the privacy practices of third-party operators. We encourage you to read their
                privacy policies before registering.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Data Retention</h2>
              <p>
                Analytics data is retained for up to 26 months in accordance with Google Analytics
                default settings. Contact emails are retained for as long as necessary to respond to
                your enquiry, then deleted.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Your Rights (UK GDPR)</h2>
              <p>Under UK GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-purple-300">
                <li>Access the personal data we hold about you</li>
                <li>Correct inaccurate data</li>
                <li>Request erasure of your data</li>
                <li>Object to processing</li>
                <li>Lodge a complaint with the ICO at{" "}
                  <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline hover:text-orange-300">ico.org.uk</a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on
                this page with an updated revision date. Continued use of the site constitutes
                acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">9. Contact Us</h2>
              <p>
                For any privacy-related questions, please contact us at{" "}
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

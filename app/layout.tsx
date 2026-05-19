import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "10 Best UK Casinos 2026 | Top Rated Casino Sites",
  description:
    "Discover the UK&apos;s best online casinos for 2026. Expert reviews, exclusive bonuses, and top-rated casino sites licensed by the UKGC.",
  keywords: "best UK casinos, online casino UK, casino bonuses UK, UKGC licensed casinos",
  metadataBase: new URL("https://10bestukcasinos.org"),
  openGraph: {
    title: "10 Best UK Casinos 2026 | Top Rated Casino Sites",
    description:
      "Expert-reviewed UK casino sites with exclusive bonuses and full UKGC licensing.",
    url: "https://10bestukcasinos.org",
    siteName: "10BestUKCasinos",
    locale: "en_GB",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.svg",
  },
};

const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Script id="gtag-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.open(url, '_blank');
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-XXXXXXXXXX/YYYYYYYYYYYYYYY',
                'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
      </body>
    </html>
  );
}

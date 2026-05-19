"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { track } from "@vercel/analytics";
import type { Brand } from "@/app/data/brands";

interface MobileModalProps {
  brands: Brand[];
  gclidValue: string;
}

function buildUrl(url: string, gclid?: string): string {
  if (!gclid) return url;
  if (url.endsWith("=")) return url + gclid;
  const separator = url.includes("?") ? "&" : "?";
  return url + separator + "gclid=" + gclid;
}

declare global {
  interface Window {
    gtag_report_conversion?: (url: string) => void;
  }
}

export default function MobileModal({ brands, gclidValue }: MobileModalProps) {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  function handleBrandClick(brand: Brand) {
    const url = buildUrl(brand.url, gclidValue);
    track("Brand Click", { brand: brand.name, source: "mobile_modal" });
    if (typeof window !== "undefined" && window.gtag_report_conversion) {
      window.gtag_report_conversion(url);
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-[#0d0618] overflow-y-auto">
      {/* Modal Header */}
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-purple-900/50 bg-[#0d0618]/95 backdrop-blur px-4 py-3">
        <Image src="/10bestlogo1.png" alt="10 Best UK Casinos" width={160} height={40} className="h-9 w-auto" />
        <button
          onClick={() => {
            setOpen(false);
            router.push("/");
          }}
          className="rounded-lg border border-purple-800 px-3 py-1.5 text-xs font-semibold text-purple-300 hover:bg-purple-900/40 transition-colors"
        >
          ✕ Close
        </button>
      </div>

      {/* Hero text */}
      <div className="px-4 py-6 text-center border-b border-purple-900/30">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1.5">
          <span className="text-xs font-semibold text-orange-300">🏆 Exclusive Mobile Offers</span>
        </div>
        <h2 className="text-2xl font-extrabold text-white mt-2">Top UK Casino Bonuses</h2>
        <p className="mt-1 text-sm text-purple-300">Claim your welcome bonus before it expires</p>
      </div>

      {/* Brand cards */}
      <div className="flex flex-col gap-3 p-4">
        {brands.map((brand, i) => (
          <div
            key={brand.id}
            className="casino-card-bg rounded-xl overflow-hidden border border-purple-800/30 cursor-pointer active:scale-[0.99] transition-transform"
            onClick={() => handleBrandClick(brand)}
          >
            <div className="flex items-center gap-3 p-4">
              <div className="relative h-12 w-24 shrink-0 overflow-hidden rounded-lg bg-white/5 border border-purple-800/20">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain p-1"
                  sizes="96px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  {i < 3 && (
                    <span className="text-xs font-bold text-yellow-400">#{i + 1}</span>
                  )}
                  <span className="text-sm font-bold text-white truncate">{brand.name}</span>
                  <span className="ml-auto text-sm font-bold text-orange-400 shrink-0">{brand.rating}/10</span>
                </div>
                <p className="text-xs text-orange-300 leading-snug line-clamp-2">🎁 {brand.bonus}</p>
              </div>
            </div>
            <div className="btn-gradient mx-4 mb-4 rounded-lg py-3 text-center text-sm font-extrabold uppercase tracking-widest text-white">
              Claim Offer →
            </div>
          </div>
        ))}
      </div>

      {/* Footer disclaimer */}
      <div className="border-t border-purple-900/30 p-4 text-center text-xs text-amber-400/70">
        ⚠️ 18+ Only. T&amp;Cs apply. BeGambleAware.org |{" "}
        <a href="tel:08088020133" className="underline">0808 8020 133</a>
      </div>

      <div className="border-t border-purple-900/20 p-4 text-center text-xs text-purple-700">
        © 2026 10bestukcasinos.org — UKGC Regulated
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { track } from "@vercel/analytics";
import type { Brand } from "@/app/data/brands";

interface BrandCardProps {
  brand: Brand;
  rank: number;
  gclidValue?: string;
}

function buildUrl(url: string, gclid?: string): string {
  if (!gclid) return url;
  if (url.endsWith("=")) return url + gclid;
  const separator = url.includes("?") ? "&" : "?";
  return url + separator + "gclid=" + gclid;
}

function renderStars(rating: number) {
  const stars = [];
  const full = Math.floor(rating / 2);
  const hasHalf = rating / 2 - full >= 0.5;

  for (let i = 0; i < 5; i++) {
    if (i < full) {
      stars.push(
        <span key={i} className="star-filled text-lg">★</span>
      );
    } else if (i === full && hasHalf) {
      stars.push(
        <span key={i} className="star-half text-lg">★</span>
      );
    } else {
      stars.push(
        <span key={i} className="star-empty text-lg">★</span>
      );
    }
  }
  return stars;
}

const rankConfig = [
  { label: "🥇 #1 Top Pick", bg: "bg-yellow-500/20 border-yellow-500/50 text-yellow-400" },
  { label: "🥈 #2 Runner Up", bg: "bg-slate-400/20 border-slate-400/50 text-slate-300" },
  { label: "🥉 #3 Top Rated", bg: "bg-amber-700/20 border-amber-600/50 text-amber-500" },
];

declare global {
  interface Window {
    gtag_report_conversion?: (url: string) => void;
  }
}

export default function BrandCard({ brand, rank, gclidValue }: BrandCardProps) {
  const finalUrl = buildUrl(brand.url, gclidValue);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    track("Brand Click", { brand: brand.name, rank });
    if (typeof window !== "undefined" && window.gtag_report_conversion) {
      window.gtag_report_conversion(finalUrl);
    } else {
      window.open(finalUrl, "_blank", "noopener,noreferrer");
    }
  }

  const rankBadge = rank <= 3 ? rankConfig[rank - 1] : null;

  return (
    <div
      className="corner-accent relative casino-card-bg rounded-2xl p-0.5 transition-all duration-300 hover:casino-glow hover:-translate-y-1 cursor-pointer group"
      onClick={handleClick}
    >
      {/* Gradient border wrapper */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1a0a2e 0%, #12061e 100%)",
        }}
      >
        {/* Top-3 rank badge */}
        {rankBadge && (
          <div className={`flex items-center justify-center gap-2 border-b px-4 py-2 text-xs font-bold tracking-wide ${rankBadge.bg}`}>
            {rankBadge.label}
          </div>
        )}

        {/* Brand tag (e.g. Editor's Choice) */}
        {brand.tag && !rankBadge && (
          <div className="flex items-center justify-center gap-2 border-b border-purple-800/30 px-4 py-2 text-xs font-semibold text-purple-300 tracking-wide">
            ✦ {brand.tag}
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center gap-4 p-5">
          {/* LEFT: Logo + Rating */}
          <div className="flex flex-col items-center gap-3 sm:w-40 shrink-0">
            <div className="relative h-16 w-36 overflow-hidden rounded-xl bg-white/5 border border-purple-800/30 flex items-center justify-center p-2">
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                fill
                className="object-contain p-2"
                sizes="144px"
              />
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex gap-0.5">{renderStars(brand.rating)}</div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-extrabold text-white">{brand.rating}</span>
                <span className="text-xs text-purple-400">/10</span>
              </div>
              <div className="text-xs text-purple-400">
                {brand.votes.toLocaleString("en-GB")} reviews
              </div>
            </div>
          </div>

          {/* RIGHT: Bonus + CTA */}
          <div className="flex flex-1 flex-col gap-3">
            <h3 className="text-lg font-bold text-white">{brand.name}</h3>
            <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 px-4 py-3">
              <p className="text-sm font-semibold text-orange-300 leading-snug">
                🎁 {brand.bonus}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-purple-400">
              <span>✔ UKGC Licensed</span>
              <span>•</span>
              <span>✔ UKGC Regulated</span>
              <span>•</span>
              <span>✔ 18+</span>
            </div>
            <button
              className="btn-gradient w-full rounded-xl py-3 text-sm font-extrabold uppercase tracking-widest text-white shadow-md"
              onClick={handleClick}
            >
              Claim Offer →
            </button>
            <p className="text-center text-[10px] text-purple-600">
              T&amp;Cs apply. 18+. BeGambleAware.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

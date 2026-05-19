"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#guide", label: "Guide" },
  { href: "/#about", label: "About Us" },
  { href: "/#contact", label: "Contact Us" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-900/50 bg-[#0d0618]/95 backdrop-blur-md">
      {/* 18+ disclaimer bar */}
      <div className="w-full bg-amber-900/30 border-b border-amber-700/30 px-4 py-1.5 text-center text-xs text-amber-300">
        <span className="font-bold text-amber-200">⚠️ 18+ Only.</span>{" "}
        Gambling can be addictive — play responsibly.{" "}
        <a
          href="https://www.begambleaware.org"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white transition-colors font-semibold"
        >
          BeGambleAware.org
        </a>
        {" "}|{" "}
        <a href="tel:08088020133" className="underline hover:text-white transition-colors font-semibold">
          0808 8020 133
        </a>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/10bestlogo1.png"
            alt="10 Best UK Casinos logo"
            width={220}
            height={55}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-purple-200 transition-colors hover:text-orange-400"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#guide"
            className="rounded-lg btn-gradient px-4 py-2 text-sm font-bold uppercase text-white tracking-wide"
          >
            Our Guide
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-purple-900/30 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-purple-900/50 bg-[#0d0618] px-4 py-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-purple-200 py-2 hover:text-orange-400 transition-colors border-b border-purple-900/30"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#guide"
              onClick={() => setMobileOpen(false)}
              className="mt-2 text-center rounded-lg btn-gradient px-4 py-3 text-sm font-bold uppercase text-white tracking-wide"
            >
              Our Guide
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

import { brands } from "@/app/data/brands";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import BrandCard from "@/app/components/BrandCard";
import DisclaimerBar from "@/app/components/DisclaimerBar";
import AboutSection from "@/app/components/AboutSection";
import Footer from "@/app/components/Footer";
import MobileModal from "@/app/components/MobileModal";

interface PageProps {
  searchParams: Promise<{ gclid?: string }>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const gclidValue = params.gclid ?? "";

  const mobileBrands = brands.filter((b) => b.isMobile);
  const showModal = !!gclidValue && mobileBrands.length > 0;

  return (
    <>
      {showModal && (
        <MobileModal brands={mobileBrands} gclidValue={gclidValue} />
      )}

      <div className={showModal ? "hidden" : ""}>
        <Header />

        <main>
          {/* Hero */}
          <Hero />

          {/* Brand Cards Section */}
          <section id="brands" className="py-12 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div className="mb-10 text-center">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  <span className="gold-text">Top 10</span> UK Online Casinos
                </h2>
                <p className="mt-3 text-purple-300 text-base max-w-xl mx-auto">
                  All sites are UKGC licensed, expert-reviewed, and ranked by our editorial team.
                  Updated May {new Date().getFullYear()}.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {brands.map((brand, index) => (
                  <BrandCard
                    key={brand.id}
                    brand={brand}
                    rank={index + 1}
                    gclidValue={gclidValue || undefined}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* 18+ Disclaimer bar */}
          <DisclaimerBar />

          {/* About / How We Rate */}
          <AboutSection />
        </main>

        <Footer />
      </div>
    </>
  );
}

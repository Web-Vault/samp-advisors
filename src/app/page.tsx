import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ChevronRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      
      {/* Trust Bar */}
      <div className="bg-primary py-12 border-y border-white/10">
        <Container>
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12">
            <span className="text-white/40 font-serif font-bold text-2xl tracking-widest uppercase">Trusted Advisor</span>
            <span className="text-white/40 font-serif font-bold text-2xl tracking-widest uppercase">Certified CPA</span>
            <span className="text-white/40 font-serif font-bold text-2xl tracking-widest uppercase">ASIC Compliant</span>
            <span className="text-white/40 font-serif font-bold text-2xl tracking-widest uppercase">Tax Institute</span>
          </div>
        </Container>
      </div>

      <ServicesPreview />

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square bg-muted rounded-sm overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-primary/10" />
                <div className="w-full h-full flex items-center justify-center text-primary/10 font-serif text-4xl sm:text-6xl lg:text-8xl italic">
                  ADVISORY
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-bottom-8 lg:-right-8 p-6 sm:p-8 lg:p-12 bg-primary text-white shadow-2xl max-w-[80%] sm:max-w-xs lg:max-w-sm">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold mb-4">Precision & Integrity</h3>
                <p className="text-white/80 leading-relaxed mb-6 text-sm sm:text-base">
                  We believe that financial excellence is built on a foundation of trust and meticulous attention to detail.
                </p>
                <Link href="/about">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] border-b-2 border-white pb-1 hover:text-white/70 transition-colors cursor-pointer">
                    Meet Our Directors
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase">Why Partner With Us</span>
                <h2 className="text-4xl md:text-5xl text-primary tracking-tight font-serif font-bold">
                  Expertise That Drives Results.
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With decades of experience in the Australian market, we provide the specialized knowledge you need to navigate complex taxation and business landscapes.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                {[
                  "Proactive Tax Planning",
                  "Expert Business Advice",
                  "Transparent Fee Structure",
                  "Personalized Service",
                  "Latest Software Tools",
                  "Certified CPA Team"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary shrink-0" size={20} />
                    <span className="font-medium text-primary/80 uppercase tracking-widest text-xs">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <Link href="/contact">
                  <Button size="lg" className="group">
                    Book Your Consultation
                    <ChevronRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Testimonials />
      
      {/* <BlogPreview /> */}
    </div>
  );
}

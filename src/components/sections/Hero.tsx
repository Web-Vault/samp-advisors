import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-muted skew-x-12 origin-top transform translate-x-1/4 -z-10 hidden lg:block" />
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase">
                Premier SAMP ADVISORS Firm
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-primary tracking-tight">
                Strategic <span className="text-secondary italic">Excellence</span> in Tax & Advisory.
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Tailored financial strategies for SAMP ADVISORS businesses and individuals. Navigating complexity with clarity and integrity.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group">
                Schedule a Consultation
                <ChevronRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Link href="/services">
                <Button variant="outline" size="lg">Our Services</Button>
              </Link>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">20+</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Years Experience</span>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">500+</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Clients Nationwide</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-in fade-in slide-in-from-right duration-700">
            <div className="aspect-[4/5] bg-primary overflow-hidden shadow-2xl rounded-sm group">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
              {/* Using a placeholder since I can't provide real images */}
              <div className="w-full h-full flex items-center justify-center text-white/20 font-serif text-6xl text-center px-4 italic">
                SAMP ADVISORS
              </div>
              
              <div className="absolute -bottom-8 -left-8 p-8 bg-white shadow-xl max-w-xs border-l-4 border-primary">
                <p className="text-primary italic font-serif text-lg mb-2">
                  "Excellence is not an act, but a habit. We've built our reputation on consistent, high-quality advice."
                </p>
                <p className="font-bold text-sm uppercase tracking-widest text-muted-foreground">
                  — Lead Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

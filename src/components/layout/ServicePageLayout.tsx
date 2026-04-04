import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { HelpCard } from "@/components/ui/HelpCard";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  whatWeHelpWith: { title: string; description: string }[];
  whoItIsFor: string[];
  approach: { step: string; detail: string }[];
  benefits: string[];
  icon: LucideIcon;
}

export function ServicePageLayout({
  title,
  subtitle,
  description,
  whatWeHelpWith,
  whoItIsFor,
  approach,
  benefits,
  icon: Icon,
}: ServicePageLayoutProps) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="w-16 h-16 bg-white/10 text-white flex items-center justify-center rounded-sm mb-8">
              <Icon size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-serif font-bold tracking-tight mb-6">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-10">
              {subtitle}
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-10">
                Book a Consultation
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* What This Service Is */}
      <section className="py-24 bg-white border-b border-border">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase">The Concept</span>
              <h2 className="text-3xl md:text-4xl text-primary font-serif font-bold mt-4 mb-8">What This Service Is</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
            <div className="bg-muted p-10 lg:p-16 border border-border">
              <h3 className="text-xl font-serif font-bold text-primary mb-6">Who This Service Is For</h3>
              <ul className="flex flex-col gap-4">
                {whoItIsFor.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary shrink-0" size={20} />
                    <span className="text-primary/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* What We Help With */}
      <section className="py-24 bg-muted/30">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase">Advisory Support</span>
            <h2 className="text-3xl md:text-4xl text-primary font-serif font-bold mt-4">What We Help With</h2>
            <p className="text-muted-foreground mt-4 italic text-sm">Tap or hover over each area to see how we assist you.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeHelpWith.map((item, idx) => (
              <HelpCard key={idx} item={item} />
            ))}
          </div>
        </Container>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase">Our Process</span>
            <h2 className="text-3xl md:text-4xl text-primary font-serif font-bold mt-4">How We Work Together</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="text-6xl font-serif font-bold text-primary/5 absolute -top-4 -left-2 group-hover:text-primary/10 transition-colors">
                  0{idx + 1}
                </div>
                <div className="relative z-10 pt-8">
                  <h3 className="text-xl font-serif font-bold text-primary mb-3">{item.step}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-primary text-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Why Choose Our {title}?</h2>
              <div className="grid gap-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <p className="text-lg text-white/80">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 p-12 border border-white/20 backdrop-blur-sm text-center">
              <h3 className="text-2xl font-serif font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-white/70 mb-10 leading-relaxed">
                Experience the difference of strategic, high-level advisory support. Contact us today to discuss your unique needs.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 w-full group">
                  Schedule Consultation
                  <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

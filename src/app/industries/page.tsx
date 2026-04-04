import { Container } from "@/components/ui/Container";
import { industries } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Search, BarChart3, FileSpreadsheet, BellRing } from "lucide-react";

export default function Industries() {
  const tailoringPoints = [
    {
      title: "Specialized Research",
      text: "In-depth research into industry-specific tax rulings and compliance requirements.",
      icon: Search
    },
    {
      title: "Performance Benchmarking",
      text: "Benchmarking your financial performance against sector leaders and competitors.",
      icon: BarChart3
    },
    {
      title: "Customized Reporting",
      text: "Customizing reporting formats to meet your specific industry standards and KPIs.",
      icon: FileSpreadsheet
    },
    {
      title: "Proactive Regulatory Alerts",
      text: "Real-time alerts on legislative and regulatory changes affecting your specific sector.",
      icon: BellRing
    }
  ];

  return (
    <div className="py-20 lg:py-32">
      <Container>
        <div className="max-w-4xl mb-24">
          <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase">Specialized Expertise</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl text-primary font-serif font-bold tracking-tight mb-8 mt-2">
            Industries We <span className="italic text-secondary">Support</span>.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Every industry has unique financial challenges and regulatory requirements. We provide tailored advice that addresses the specific needs of your sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="group bg-white p-10 border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary flex items-center justify-center rounded-sm mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <industry.icon size={28} />
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                {industry.name}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                {industry.description}
              </p>
              
              <div className="mt-auto pt-8 border-t border-border">
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Our Tailored Advice</h4>
                <p className="text-sm text-primary/70 leading-relaxed italic">
                  "{industry.tailoredAdvice}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* How we tailor advice section - Outside main container for full-width background */}
      <section className="py-24 lg:py-32 bg-primary text-white relative overflow-hidden">
        {/* Modern decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white blur-3xl" />
        </div>
        
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="text-sm font-bold tracking-[0.3em] text-white/60 uppercase mb-4 block">Our Methodology</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                How We Tailor Our <span className="italic text-white/80">Advice</span>
              </h2>
              <p className="text-xl text-white/70 leading-relaxed mb-12 max-w-2xl">
                We don't believe in one-size-fits-all financial management. Our approach is deeply rooted in understanding the nuances of your specific industry.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {tailoringPoints.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-4 p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white p-10 lg:p-12 border border-white/10 shadow-2xl relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 -mr-12 -mt-12 rounded-full" />
                <h3 className="text-2xl font-serif font-bold mb-6 text-primary">Partner With Industry Experts</h3>
                <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
                  Whether you're a tech founder or a family business owner, our team has the specialized knowledge to help you navigate your unique landscape.
                </p>
                <div className="space-y-6 mb-10">
                  <div className="flex items-center gap-4 text-primary">
                    <CheckCircle2 size={20} className="shrink-0" />
                    <span className="font-bold text-xs uppercase tracking-widest">Confidential Consultations</span>
                  </div>
                  <div className="flex items-center gap-4 text-primary">
                    <CheckCircle2 size={20} className="shrink-0" />
                    <span className="font-bold text-xs uppercase tracking-widest">Sector-Specific Insights</span>
                  </div>
                </div>
                <Link href="/contact">
                  <Button size="lg" className="w-full group py-8 text-lg">
                    Discuss Your Needs
                    <ArrowRight size={24} className="ml-3 transition-transform group-hover:translate-x-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

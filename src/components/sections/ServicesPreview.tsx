import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { 
  Briefcase, 
  Calculator, 
  TrendingUp, 
  FileText,
  ChevronRight 
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Bookkeeping",
    description: "Seamless day-to-day financial management to keep your business records organized and insightful.",
    icon: FileText,
    href: "/services/bookkeeping",
  },
  {
    title: "Accounting",
    description: "Accurate, timely financial reporting that goes beyond data entry to provide real business insights.",
    icon: Briefcase,
    href: "/services/accounting",
  },
  {
    title: "Taxation",
    description: "Expert strategies to minimize your tax liability while ensuring full compliance with Australian laws.",
    icon: Calculator,
    href: "/services/taxation",
  },
  {
    title: "Virtual CFO",
    description: "Strategic financial leadership and analysis to drive your business growth and maximize profitability.",
    icon: TrendingUp,
    href: "/services/virtual-cfo",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 bg-muted/30">
      <Container>
        <SectionHeading 
          title="Our Core Services" 
          subtitle="Comprehensive financial solutions tailored to your unique business needs and personal financial goals."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index} 
              href={service.href}
              className="group bg-white p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 -mr-12 -mt-12 rounded-full group-hover:bg-primary/10 transition-colors" />
              
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon size={28} />
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-primary mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-muted-foreground/80">
                {service.description}
              </p>
              
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary group-hover:translate-x-1 transition-transform">
                Learn More <ChevronRight size={16} />
              </div>
            </Link>
          ))}
          
          <div className="flex flex-col items-center justify-center p-8 lg:p-10 bg-primary text-white text-center shadow-sm md:col-span-2 lg:col-span-1">
            <h3 className="text-3xl font-serif font-bold mb-4">Need a Custom Strategy?</h3>
            <p className="text-white/80 mb-8 max-w-xs mx-auto">
              Our experts are ready to build a financial plan tailored specifically for your needs.
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 bg-white text-primary font-bold uppercase tracking-widest text-sm hover:bg-white/90 transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { 
  Calculator, 
  TrendingUp, 
  Briefcase, 
  FileText,
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const detailedServices = [
  {
    title: "Bookkeeping",
    description: "Stay on top of your daily finances without the stress. Our bookkeeping services ensure your data is always up-to-date and ready for analysis.",
    features: [
      "Bank Reconciliation",
      "Accounts Payable & Receivable",
      "Payroll Administration",
      "Inventory Management",
      "Superannuation Lodgement",
      "Software Training & Support (Xero/MYOB)"
    ],
    icon: FileText,
    slug: "bookkeeping"
  },
  {
    title: "Accounting",
    description: "Professional accounting that goes beyond data entry. We provide clear, accurate financial statements that offer real insights into your business health.",
    features: [
      "Financial Statement Preparation",
      "Management Reporting & Analysis",
      "Budgeting & Variance Analysis",
      "Cloud Accounting Setup & Support",
      "Statutory Compliance Reporting",
      "Financial Health Checks"
    ],
    icon: Briefcase,
    slug: "accounting"
  },
  {
    title: "Taxation",
    description: "Navigate the complex Australian tax landscape with confidence. We ensure you meet all statutory obligations while proactively identifying opportunities to legally minimize your tax burden.",
    features: [
      "Income Tax Return Preparation",
      "Strategic Tax Planning",
      "GST, BAS, and FBT Compliance",
      "Capital Gains Tax (CGT) Advice",
      "Tax Audit Assistance & ATO representation",
      "R&D Tax Incentives & Government Grants"
    ],
    icon: Calculator,
    slug: "taxation"
  },
  {
    title: "Virtual CFO",
    description: "Get the expertise of a high-level Chief Financial Officer without the full-time cost. Our Virtual CFO services provide the strategic insight and financial analysis needed to drive your business forward.",
    features: [
      "Strategic Financial Planning",
      "Cash Flow Forecasting & Management",
      "Board & Management Reporting",
      "KPI Development & Monitoring",
      "Business Structuring Advice",
      "Capital Raising & Funding Support"
    ],
    icon: TrendingUp,
    slug: "virtual-cfo"
  }
];

export default function Services() {
  return (
    <div className="py-20">
      <Container>
        <div className="max-w-4xl mb-24">
          <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase">Our Expertise</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary font-serif font-bold tracking-tight mb-8 mt-2">
            Strategic Financial <span className="italic text-secondary">Solutions</span> for Your Success.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From complex tax planning to proactive business advisory, we provide a full suite of professional services designed to help Australian businesses and individuals thrive in a changing economic landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mb-24">
          {detailedServices.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row gap-12 p-12 bg-white border border-border shadow-sm hover:shadow-xl transition-all duration-300 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1">
                <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center rounded-sm mb-8">
                  <service.icon size={32} />
                </div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">{service.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>
                <Link href={`/services/${service.slug}`} className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="group w-full whitespace-nowrap">
                    Learn More About This
                    <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              
              <div className="flex-1 bg-muted/30 p-10 rounded-sm border border-border">
                <h3 className="text-lg font-bold text-primary uppercase tracking-widest mb-6">Key Offerings</h3>
                <ul className="grid grid-cols-1 gap-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                      <span className="text-muted-foreground font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solution CTA */}
        <div className="bg-primary text-white p-16 text-center rounded-sm relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          <h2 className="text-4xl font-serif font-bold mb-6 relative z-10">Need a Tailored Approach?</h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto relative z-10">
            Every business is unique. We pride ourselves on creating bespoke financial strategies that align with your specific objectives.
          </p>
          <div className="flex justify-center relative z-10">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-6 sm:px-12 w-full whitespace-nowrap">
                Let's Discuss Your Needs
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

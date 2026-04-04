import Link from "next/link";
import { Mail, MapPin, Phone, Linkedin, Facebook, Twitter, LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface FooterLink {
  name: string;
  href: string;
  icon?: LucideIcon;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    title: "Services",
    links: [
      { name: "Bookkeeping", href: "/services/bookkeeping" },
      { name: "Accounting", href: "/services/accounting" },
      { name: "Taxation", href: "/services/taxation" },
      { name: "Virtual CFO", href: "/services/virtual-cfo" },
    ],
  },
  {
    title: "Contact Info",
    links: [
      {
        name: "Warner QLD 4500, Australia",
        href: "#",
        icon: MapPin,
      },
      { name: "+61 450 251 432", href: "tel:+61450251432", icon: Phone },
      {
        name: "info@samp-advisors.com.au",
        href: "mailto:info@samp-advisors.com.au",
        icon: Mail,
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 border-t border-white/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          <div className="flex flex-col gap-8">
            <Link href="/" className="flex flex-col">
              <span className="font-serif font-bold text-3xl tracking-tight leading-none">
                SAMP ADVISORS
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/50 mt-2">
                Your business, Our Priority
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed max-w-xs">
              Providing strategic financial solutions and expert advisory services to Australian businesses and individuals.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Linkedin size={20} className="text-white/80" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Facebook size={20} className="text-white/80" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Twitter size={20} className="text-white/80" />
              </a>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col gap-8">
              <h4 className="text-sm font-bold uppercase tracking-widest text-white/40">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-4">
                {section.links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className="text-white/70 hover:text-white transition-colors flex items-center gap-3 group"
                      >
                        {Icon && (
                          <span className="inline-flex items-center justify-center">
                            <Icon size={18} className="text-white/40 group-hover:text-white transition-colors" />
                          </span>
                        )}
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} SAMP ADVISORS. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/legal/privacy" className="text-white/40 hover:text-white text-sm transition-colors">Privacy</Link>
            <Link href="/legal/terms" className="text-white/40 hover:text-white text-sm transition-colors">Terms</Link>
            <Link href="/legal/cookies" className="text-white/40 hover:text-white text-sm transition-colors">Cookies</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

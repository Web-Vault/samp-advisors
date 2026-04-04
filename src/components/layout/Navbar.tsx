"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/data";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "About", href: "/about" },
  // { name: "Industries", href: "/industries" },
  // { name: "Insights", href: "/insights" },
  // { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm transition-transform group-hover:scale-105">
              <span className="text-white font-serif font-bold text-xl italic">S</span>
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-serif font-bold text-xl leading-none transition-colors text-primary"
              )}>
                SAMP ADVISORS
              </span>
              <span className={cn(
                "text-[10px] uppercase tracking-[0.2em] font-medium leading-none mt-1 text-muted-foreground"
              )}>
                Your business, Our Priority
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group/item" ref={link.hasDropdown ? dropdownRef : null}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={cn(
                        "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary py-2",
                        pathname.startsWith(link.href) ? "text-primary font-bold" : "text-foreground/80"
                      )}
                    >
                      {link.name}
                      <ChevronDown size={14} className={cn("transition-transform", dropdownOpen && "rotate-180")} />
                    </button>
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 w-64 bg-white border border-border shadow-xl py-4 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="grid gap-1">
                          {services.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              onClick={() => setDropdownOpen(false)}
                              className="px-6 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-muted transition-colors"
                            >
                              {service.name}
                            </Link>
                          ))}
                          <div className="border-t border-border mt-2 pt-2">
                            <Link
                              href="/services"
                              onClick={() => setDropdownOpen(false)}
                              className="px-6 py-2 text-sm font-bold text-primary hover:bg-muted block"
                            >
                              All Services
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary py-2",
                      pathname === link.href ? "text-primary font-bold" : "text-foreground/80"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/contact">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-border p-6 flex flex-col gap-6 shadow-xl animate-in slide-in-from-top duration-300 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col gap-4">
                <Link
                  href={link.href}
                  onClick={() => !link.hasDropdown && setIsOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors",
                    pathname === link.href ? "text-primary" : "text-foreground"
                  )}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-4 flex flex-col gap-3 border-l border-border">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full">
                Get Started
              </Button>
            </Link>
          </div>
        )}
      </Container>
    </nav>
  );
}

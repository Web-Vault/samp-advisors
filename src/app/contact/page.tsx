"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you would handle form submission here
  };

  return (
    <div className="py-20">
      <Container>
        <div className="max-w-4xl mb-24">
          <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase">Connect With Us</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary font-serif font-bold tracking-tight mb-8 mt-2">
            Professional <span className="italic text-secondary">Guidance</span> is a Message Away.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to optimize your financial strategy? Contact our expert team today for a confidential consultation and discover how we can help your business thrive.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-24 items-start mb-24">
          {/* Contact Information */}
          <div className="flex flex-col gap-12 order-2 lg:order-1">
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl font-serif font-bold text-primary tracking-tight">Contact Information</h2>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                {[
                  {
                    icon: MapPin,
                    title: "Office Location",
                    details: "Level 20, 100 Miller St, North Sydney NSW 2060",
                    action: "View on Maps",
                    href: "#"
                  },
                  {
                    icon: Phone,
                    title: "Phone Support",
                    details: "+61 (0) 2 8000 0000",
                    action: "Call Now",
                    href: "tel:+61280000000"
                  },
                  {
                    icon: Mail,
                    title: "Email Address",
                    details: "info@australian-cpa.com.au",
                    action: "Send Email",
                    href: "mailto:info@australian-cpa.com.au"
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    details: "Mon - Fri: 9:00 AM - 5:30 PM",
                    action: "Book Appointment",
                    href: "#"
                  }
                ].map((info, index) => (
                  <div key={index} className="flex items-start gap-6 p-8 bg-muted border border-border group hover:bg-primary transition-all duration-300">
                    <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-sm group-hover:bg-white group-hover:text-primary transition-colors">
                      <info.icon size={24} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-bold text-primary uppercase tracking-widest text-sm group-hover:text-white transition-colors">{info.title}</h3>
                      <p className="text-muted-foreground leading-relaxed group-hover:text-white/80 transition-colors">{info.details}</p>
                      <a href={info.href} className="text-primary font-bold text-xs uppercase tracking-[0.2em] mt-2 group-hover:text-white transition-colors">
                        {info.action}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-[16/9] bg-muted border border-border relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-primary/5" />
              <div className="text-primary/20 font-serif italic text-4xl">Interactive Map Placeholder</div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white p-4 shadow-xl">
                <MapPin size={24} />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white p-12 border border-border shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full" />
              
              <h2 className="text-3xl font-serif font-bold text-primary mb-8 tracking-tight">Send a Secure Message</h2>
              
              {submitted ? (
                <div className="py-20 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-100 text-green-600 flex items-center justify-center rounded-full mx-auto mb-8">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-primary mb-4">Message Sent!</h3>
                  <p className="text-muted-foreground text-lg mb-8 max-w-sm mx-auto">
                    Thank you for reaching out. One of our senior advisors will contact you within 24 business hours.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline" size="lg">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="firstName" className="text-xs font-bold uppercase tracking-widest text-primary">First Name</label>
                      <input 
                        id="firstName"
                        type="text" 
                        required
                        className="w-full px-4 py-3 border border-border bg-white text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="lastName" className="text-xs font-bold uppercase tracking-widest text-primary">Last Name</label>
                      <input 
                        id="lastName"
                        type="text" 
                        required
                        className="w-full px-4 py-3 border border-border bg-white text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-primary">Email Address</label>
                    <input 
                      id="email"
                      type="email" 
                      required
                      className="w-full px-4 py-3 border border-border bg-white text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="john.doe@company.com"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-primary">Subject</label>
                    <select 
                      id="subject"
                      required
                      className="w-full px-4 py-3 border border-border bg-white text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      <option value="">Select an inquiry type...</option>
                      <option value="tax">Tax Planning & Compliance</option>
                      <option value="advisory">Business Advisory</option>
                      <option value="accounting">Accounting Services</option>
                      <option value="smsf">SMSF Management</option>
                      <option value="audit">Audit & Assurance</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-primary">Message Details</label>
                    <textarea 
                      id="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-border bg-white text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      placeholder="Tell us about your needs..."
                    />
                  </div>
                  
                  <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full group">
                      Send Secure Message
                      <Send size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our <a href="/legal/privacy" className="text-primary underline">Privacy Policy</a> and <a href="/legal/terms" className="text-primary underline">Terms of Service</a>. Your information is encrypted and secure.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

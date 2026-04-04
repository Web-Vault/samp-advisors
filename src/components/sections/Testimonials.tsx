import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "James Wilson",
    role: "CEO, TechInnovate Australia",
    text: "The strategic tax advice we received has been transformative. They don't just process numbers; they provide genuine business intelligence that has significantly impacted our bottom line.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Founder, Chen & Co. Real Estate",
    text: "Managing compliance used to keep me up at night. Since partnering with SAMP ADVISORS, I have complete peace of mind knowing everything is handled with professional precision.",
    rating: 5,
  },
  {
    name: "Michael O'Connor",
    role: "Director, O'Connor Construction",
    text: "Their team is incredibly responsive and always goes the extra mile. They've helped us navigate complex restructuring with ease and clarity. Highly recommended for any growing business.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      
      <Container>
        <SectionHeading 
          title="Client Experiences" 
          subtitle="Our reputation is built on the success and trust of our clients. Here's what they have to say about our partnership."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="relative p-10 bg-muted/20 border border-border shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <Quote 
                size={40} 
                className="text-primary/10 absolute top-8 right-8 shrink-0" 
              />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="text-yellow-500" />
                ))}
              </div>
              
              <p className="text-lg text-primary/80 italic font-serif leading-relaxed mb-8 relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="flex flex-col">
                <span className="font-bold text-primary uppercase tracking-widest text-sm mb-1">
                  {testimonial.name}
                </span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">
                  {testimonial.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

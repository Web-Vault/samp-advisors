"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

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
  {
    name: "Emma Thompson",
    role: "MD, Thompson Logistics",
    text: "Working with SAMP ADVISORS has been a game changer for our cash flow management. Their proactive approach saved us thousands in potential tax overpayments.",
    rating: 5,
  },
  {
    name: "David Miller",
    role: "Owner, Miller's Artisan Bakery",
    text: "As a small business owner, I needed someone who understood my specific challenges. They provided tailored advice that helped us scale without losing our core values.",
    rating: 5,
  },
];

const AUTOPLAY_DURATION = 6000; // 6 seconds per testimonial

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isHovering) return;
    
    const timer = setInterval(() => {
      nextTestimonial();
    }, AUTOPLAY_DURATION);

    return () => clearInterval(timer);
  }, [nextTestimonial, activeIndex, isHovering]);

  const handleDotClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <section 
      className="py-24 bg-white relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      
      <Container>
        <SectionHeading 
          title="Client Experiences" 
          subtitle="Our reputation is built on the success and trust of our clients. Here's what they have to say about our partnership."
        />
        
        {/* Desktop & Tablet Slider (Shown when more than 3 testimonials) */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden px-4 -mx-4">
            <motion.div 
              className="flex gap-8"
              animate={{ x: `calc(-${activeIndex * (100 / (testimonials.length > 3 ? 3 : testimonials.length))}% - ${activeIndex * (32 / 3)}px)` }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              style={{ width: testimonials.length > 3 ? `${(testimonials.length / 3) * 100}%` : "100%" }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "relative p-10 bg-muted/20 border border-border shadow-sm hover:shadow-lg transition-all duration-500 shrink-0",
                    testimonials.length > 3 ? "w-[calc(33.333% - 22px)]" : "flex-1"
                  )}
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
            </motion.div>
          </div>

          {/* Desktop Navigation Buttons */}
          {testimonials.length > 3 && (
            <>
              <button 
                onClick={prevTestimonial}
                className="absolute left-[-60px] top-1/2 -translate-y-1/2 p-4 bg-white border border-border text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-xl z-20 hidden lg:flex items-center justify-center group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="absolute right-[-60px] top-1/2 -translate-y-1/2 p-4 bg-white border border-border text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-xl z-20 hidden lg:flex items-center justify-center group"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </>
          )}

          {/* Desktop Dots/Progress (Always shown for visual feedback) */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className="relative h-1.5 w-12 bg-primary/10 rounded-full overflow-hidden cursor-pointer group"
                aria-label={`Go to testimonial ${i + 1}`}
              >
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/20 transition-colors" />
                {i === activeIndex && (
                  <motion.div
                    key={`desktop-progress-${activeIndex}`}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ 
                      duration: AUTOPLAY_DURATION / 1000, 
                      ease: "linear" 
                    }}
                    className="absolute inset-0 bg-primary"
                  />
                )}
                {i < activeIndex && (
                  <div className="absolute inset-0 bg-primary/40" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Carousel (Same as before, uniquely styled) */}
        <div className="md:hidden relative px-4 min-h-[450px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, index) => {
              if (index !== activeIndex) return null;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, filter: "blur(10px)", y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0, scale: 1 }}
                  exit={{ opacity: 0, filter: "blur(10px)", y: -20, scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute w-full max-w-[340px] p-8 bg-white border border-primary/10 shadow-xl"
                >
                  <div className="flex justify-between items-start mb-6">
                    <Quote size={40} className="text-primary" />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={12} fill="currentColor" className="text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-xl text-primary font-serif italic leading-relaxed mb-8">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="pt-6 border-t border-primary/5">
                    <h4 className="font-bold text-primary uppercase tracking-[0.2em] text-sm mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">
                      {testimonial.role}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Mobile Indicator Progress Bars */}
          <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className="relative h-1.5 w-12 bg-primary/10 rounded-full overflow-hidden cursor-pointer group"
                aria-label={`Go to testimonial ${i + 1}`}
              >
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/20 transition-colors" />
                {i === activeIndex && (
                  <motion.div
                    key={`mobile-progress-${activeIndex}`}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ 
                      duration: AUTOPLAY_DURATION / 1000, 
                      ease: "linear" 
                    }}
                    className="absolute inset-0 bg-primary"
                  />
                )}
                {i < activeIndex && (
                  <div className="absolute inset-0 bg-primary/40" />
                )}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

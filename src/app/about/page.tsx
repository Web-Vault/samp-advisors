import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2, Award, Users, Target } from "lucide-react";

export default function About() {
  return (
    <div className="py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase">About SAMP Advisors</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary font-serif font-bold tracking-tight">
                Our Legacy of <span className="italic text-secondary">Trust</span> and Expertise.
              </h1>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded on the principles of integrity and professional excellence, SAMP Advisors has grown to become a leading tax and advisory firm in North Sydney. We specialize in providing high-level strategic advice to SMEs and high-net-worth individuals.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 pt-4">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-sm">
                  <Award size={24} />
                </div>
                <h3 className="font-bold text-primary uppercase tracking-widest text-sm">Certified Excellence</h3>
                <p className="text-sm text-muted-foreground">Fully accredited CPA firm with a track record of award-winning advisory services.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-sm">
                  <Users size={24} />
                </div>
                <h3 className="font-bold text-primary uppercase tracking-widest text-sm">Client-Centric</h3>
                <p className="text-sm text-muted-foreground">We build long-term partnerships, not just client-provider relationships.</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] bg-muted rounded-sm overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center text-primary/5 font-serif text-9xl italic">
                CPA
              </div>
            </div>
            <div className="absolute -top-7 -right-7 p-8 bg-white shadow-xl border border-border max-sm:right-0 max-sm:left-auto max-sm:translate-x-3 max-sm:translate-y-5 max-sm:top-auto max-sm:bottom-0 max-sm:transform-none max-sm:p-4 max-sm:shadow-lg">
              <span className="text-5xl font-bold text-primary max-sm:text-3xl">10+</span>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mt-2 max-sm:text-[0.65rem]">Years of Excellence</p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="p-12 bg-primary text-white">
            <Target className="mb-6 text-white/50" size={48} />
            <h2 className="text-3xl font-serif font-bold mb-4">Our Mission</h2>
            <p className="text-white/70 leading-relaxed text-lg">
              To empower Australian businesses with strategic financial clarity and innovative tax solutions that drive sustainable growth and long-term prosperity.
            </p>
          </div>
          <div className="p-12 bg-muted border border-border">
            <Users className="mb-6 text-primary/30" size={48} />
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To be the most trusted financial partner for SMEs across Australia, recognized for our unwavering integrity, professional expertise, and personalized approach to tax and advisory services.
            </p>
          </div>
        </div>

        {/* Director Profile Section */}
        <SectionHeading 
          title="Leadership Team" 
          subtitle="Meet the experts behind our success. Our directors bring decades of combined experience in Australian taxation and business advisory."
          align="center"
        />
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {[
            {
              name: "Dhaval Thakkar, CPA",
              role: "Managing Director",
              bio: "With over 25 years of experience in corporate taxation and business restructuring, Dhaval leads our strategic advisory division.",
            },
            {
              name: "Aryan Lathigara, Dev",
              role: "Designer and developer",
              bio: "Aryan specializes in complex Code and compliance for mid-sized Australian corporations, ensuring transparency and accountability.",
            }
          ].map((director, index) => (
            <div key={index} className="flex flex-col gap-6 bg-white border border-border p-10 shadow-sm hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-muted rounded-sm mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10" />
                <div className="w-full h-full flex items-center justify-center text-primary/20 font-serif text-4xl italic">
                  {director.name.split(' ')[0]}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-serif font-bold text-primary">{director.name}</h3>
                <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{director.role}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {director.bio}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

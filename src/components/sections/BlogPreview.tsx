import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ChevronRight, Calendar, User } from "lucide-react";

const blogPosts = [
  {
    title: "Understanding New Tax Laws for Australian SMEs in 2026",
    excerpt: "The latest changes in taxation policy could significantly impact your business. Here's what you need to know to stay compliant.",
    date: "March 15, 2026",
    author: "Robert Smith, CPA",
    href: "/insights",
  },
  {
    title: "Strategic Financial Planning for Your Retirement",
    excerpt: "It's never too early to start planning for the future. Discover the best strategies for a comfortable and secure retirement.",
    date: "February 28, 2026",
    author: "Alice Johnson",
    href: "/insights",
  },
  {
    title: "Optimizing Your Business Structure for Maximum Growth",
    excerpt: "Choosing the right business structure is crucial for your long-term success. Explore the pros and cons of different structures.",
    date: "January 20, 2026",
    author: "Mark Davis, Director",
    href: "/insights",
  },
];

export function BlogPreview() {
  return (
    <section className="py-24 bg-muted/50 border-y border-border">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeading 
            title="Strategic Insights" 
            subtitle="The latest updates on taxation, compliance, and business strategy for the Australian market."
            align="left"
            className="mb-0"
          />
          <Link href="/insights">
            <Button variant="outline" size="lg" className="group">
              View All Insights
              <ChevronRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post, index) => (
            <Link 
              key={index} 
              href={post.href}
              className="group flex flex-col gap-6 p-8 bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/20"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {post.author}
                  </div>
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-primary group-hover:text-primary transition-colors mb-4 leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary group-hover:translate-x-1 transition-transform">
                    Read Article
                  </span>
                  <ChevronRight size={20} className="text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

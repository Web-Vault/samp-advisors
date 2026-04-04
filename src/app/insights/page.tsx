import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ChevronRight, Calendar, User, Search, ArrowRight, Tag } from "lucide-react";

const blogPosts = [
  {
    title: "Tax Planning Tips for Small Businesses",
    excerpt: "The end of the financial year is fast approaching. Discover the top tax planning strategies every small business owner should consider now.",
    date: "March 15, 2026",
    author: "Robert Smith, CPA",
    category: "Taxation",
    href: "/insights/tax-planning-tips",
  },
  {
    title: "How to Improve Business Cash Flow",
    excerpt: "Managing cash flow is the biggest challenge for many Australian firms. Learn the simple strategies to improve your capital management.",
    date: "February 28, 2026",
    author: "Alice Johnson",
    category: "Management",
    href: "/insights/improve-cash-flow",
  },
  {
    title: "Choosing the Right Business Structure in Australia",
    excerpt: "Company, Trust, Partnership or Sole Trader? Selecting the right structure is fundamental to asset protection and tax efficiency.",
    date: "January 20, 2026",
    author: "Mark Davis, Director",
    category: "Structuring",
    href: "/insights/business-structure-guide",
  },
  {
    title: "Financial Planning for Startups",
    excerpt: "From burn rates to seed rounds, discover how to build a robust financial foundation for your new high-growth venture.",
    date: "December 10, 2025",
    author: "Sarah Johnson, CA",
    category: "Startups",
    href: "/insights/startup-financial-planning",
  }
];

const categories = ["All", "Taxation", "Management", "Structuring", "Startups", "Superannuation", "Technology"];

export default function Insights() {
  return (
    <div className="py-20 lg:py-32">
      <Container>
        <div className="max-w-4xl mb-24">
          <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase">Strategic Insights</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl text-primary font-serif font-bold tracking-tight mb-8 mt-2">
            Professional <span className="italic text-secondary">Perspectives</span> on Finance.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Stay informed with the latest updates on Australian taxation, compliance, and business strategy. Our experts share their knowledge to help you make better financial decisions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-20">
          {/* Blog List */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 gap-16">
              {blogPosts.map((post, index) => (
                <article key={index} className="group flex flex-col gap-6 pb-16 border-b border-border last:border-0">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-primary">
                      <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-sm">
                        <Tag size={12} />
                        {post.category}
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar size={14} />
                        {post.date}
                      </div>
                    </div>
                    <Link href={post.href}>
                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary group-hover:text-primary transition-colors leading-tight">
                        {post.title}
                      </h2>
                    </Link>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-primary/30 font-serif italic text-sm">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-sm font-bold uppercase tracking-widest text-primary">{post.author}</span>
                    </div>
                    <Link href={post.href}>
                      <Button variant="ghost" className="group">
                        Read Article <ChevronRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-4 mt-16 pt-12 border-t border-border">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button size="sm" className="bg-primary text-white">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3 flex flex-col gap-16">
            <div className="bg-muted p-10 border border-border">
              <h3 className="text-lg font-bold text-primary uppercase tracking-widest mb-6">Search</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search insights..." 
                  className="w-full px-4 py-3 border border-border bg-white text-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              </div>
            </div>

            <div className="bg-muted p-10 border border-border">
              <h3 className="text-lg font-bold text-primary uppercase tracking-widest mb-6">Categories</h3>
              <ul className="flex flex-col gap-4">
                {categories.map((category) => (
                  <li key={category}>
                    <button className="text-muted-foreground hover:text-primary transition-colors flex items-center justify-between w-full group">
                      <span className="font-medium">{category}</span>
                      <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
              <h3 className="text-2xl font-serif font-bold mb-6 relative z-10">Subscribe to Our Newsletter</h3>
              <p className="text-white/70 mb-8 relative z-10 leading-relaxed">
                Get the latest financial insights delivered straight to your inbox every month.
              </p>
              <form className="flex flex-col gap-4 relative z-10">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold uppercase tracking-widest text-xs">
                  Subscribe Now
                </Button>
              </form>
            </div>

            <div className="bg-white p-10 border border-border shadow-sm">
              <h3 className="text-lg font-bold text-primary uppercase tracking-widest mb-6">Featured Topics</h3>
              <div className="flex flex-wrap gap-2">
                {["CPA Australia", "Tax Laws", "Business Growth", "SMSF", "Investment", "Audit", "Startups"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-muted text-primary/60 text-xs font-bold uppercase tracking-widest hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}

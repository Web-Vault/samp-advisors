import { 
  Briefcase, 
  Calculator, 
  TrendingUp, 
  FileText, 
  Rocket,
  Building2,
  Users,
  Store,
  Laptop
} from "lucide-react";

export const services = [
  {
    slug: "bookkeeping",
    name: "Bookkeeping",
    shortDescription: "Seamless day-to-day financial management for your peace of mind.",
    icon: FileText,
    description: "Stay on top of your daily finances without the stress. Our bookkeeping services ensure your data is always up-to-date and ready for analysis.",
    whatWeHelpWith: [
      { title: "Bank Reconciliation", description: "Regularly matching your bank transactions to your accounting records for accuracy." },
      { title: "Accounts Payable & Receivable", description: "Managing the money you owe and the money owed to you by customers." },
      { title: "Payroll Administration", description: "Accurate processing of wages, leave entitlements, and PAYG withholding." },
      { title: "Inventory Management", description: "Tracking your stock levels and costs to optimize your purchasing decisions." },
      { title: "Superannuation Lodgement", description: "Ensuring employee super contributions are calculated and paid on time." },
      { title: "Software Training & Support", description: "Helping your team master the tools needed for efficient daily finance tasks." }
    ],
    whoItIsFor: ["Sole Traders", "Micro-businesses", "Fast-growing SMEs"],
    approach: [
      { step: "Integration", detail: "Connecting your banking and software." },
      { step: "Process", detail: "Establishing weekly/monthly routines." },
      { step: "Maintenance", detail: "Continuous data entry and cleaning." },
      { step: "Reporting", detail: "Monthly summaries for your review." }
    ],
    benefits: [
      "Time savings for business owners",
      "Real-time financial data",
      "Reduced errors in lodgements",
      "Scalable administrative support"
    ]
  },
  {
    slug: "accounting",
    name: "Accounting",
    shortDescription: "Accurate financial reporting to keep your business records organized and insightful.",
    icon: Briefcase,
    description: "Professional accounting that goes beyond data entry. We provide clear, accurate financial statements that offer real insights into your business health.",
    whatWeHelpWith: [
      { title: "Financial Statement Preparation", description: "Compiling Profit & Loss statements and Balance Sheets that tell your financial story." },
      { title: "Management Reporting", description: "Regular, easy-to-understand reports to help you manage your business day-to-day." },
      { title: "Budgeting & Variance Analysis", description: "Setting financial targets and tracking your actual performance against them." },
      { title: "Cloud Accounting Setup (Xero/MYOB)", description: "Implementing modern software to automate your financial data collection." },
      { title: "Statutory Reporting", description: "Ensuring all your reports meet the required Australian accounting standards." },
      { title: "Financial Health Checks", description: "A comprehensive review of your books to ensure accuracy and identify risks." }
    ],
    whoItIsFor: ["Startups", "SMEs", "Non-Profit Organizations"],
    approach: [
      { step: "Setup", detail: "Establishing robust accounting systems." },
      { step: "Recording", detail: "Systematic capture of financial data." },
      { step: "Reporting", detail: "Generating meaningful financial insights." },
      { step: "Review", detail: "Regular discussions on financial performance." }
    ],
    benefits: [
      "Accurate financial overview",
      "Easier access to finance",
      "Improved cash flow visibility",
      "Reduced administrative burden"
    ]
  },
  {
    slug: "taxation",
    name: "Taxation",
    shortDescription: "Expert strategies to minimize liability and ensure full Australian compliance.",
    icon: Calculator,
    description: "Navigate the complex Australian tax landscape with confidence. We ensure you meet all statutory obligations while proactively identifying opportunities to legally minimize your tax burden.",
    whatWeHelpWith: [
      { title: "Income Tax Return Preparation", description: "Accurate and timely lodgement of tax returns for individuals and all business types." },
      { title: "Strategic Tax Planning", description: "Proactive structuring and timing of transactions to optimize your tax position." },
      { title: "GST & BAS Compliance", description: "Managing your Goods and Services Tax obligations and Business Activity Statements." },
      { title: "Capital Gains Tax (CGT) Advice", description: "Specialized guidance on the tax implications of selling assets or investments." },
      { title: "Fringe Benefits Tax (FBT) Management", description: "Ensuring compliance with taxes on non-cash benefits provided to employees." },
      { title: "R&D Tax Incentives", description: "Helping innovative companies claim valuable tax offsets for research and development." }
    ],
    whoItIsFor: ["Individuals", "Small to Medium Businesses", "Investment Portfolios"],
    approach: [
      { step: "Review", detail: "Analyzing your current tax position." },
      { step: "Planning", detail: "Proactive structuring before year-end." },
      { step: "Execution", detail: "Accurate preparation and lodgement." },
      { step: "Support", detail: "Ongoing advisory and ATO representation." }
    ],
    benefits: [
      "Minimized tax liabilities",
      "Peace of mind with full compliance",
      "Optimized wealth creation",
      "No surprises at tax time"
    ]
  },
  {
    slug: "virtual-cfo",
    name: "Virtual CFO",
    shortDescription: "Strategic financial leadership to scale your operations and maximize profitability.",
    icon: TrendingUp,
    description: "Get the expertise of a high-level Chief Financial Officer without the full-time cost. Our Virtual CFO services provide the strategic insight and financial analysis needed to drive your business forward.",
    whatWeHelpWith: [
      { title: "Strategic Financial Planning", description: "Developing long-term roadmaps to guide your business growth and market positioning." },
      { title: "Cash Flow Forecasting", description: "Predicting your future cash position to avoid shortfalls and plan for investments." },
      { title: "Board & Management Reporting", description: "Delivering high-level financial insights for better executive decision-making." },
      { title: "Budgeting & Performance Monitoring", description: "Setting financial targets and tracking your actual performance against them." },
      { title: "Business Structuring Advice", description: "Optimizing your legal framework for asset protection and tax efficiency." },
      { title: "Capital Raising & Funding Support", description: "Assisting with financial modeling and documentation for investors or lenders." }
    ],
    whoItIsFor: ["Growing SMEs", "High-growth Startups", "Businesses seeking strategic scale"],
    approach: [
      { step: "Discovery", detail: "Deep dive into your current operations and goals." },
      { step: "Analysis", detail: "Identifying gaps and opportunities in your financial model." },
      { step: "Strategy", detail: "Developing a tailored roadmap for financial success." },
      { step: "Partnership", detail: "Regular strategic meetings to review performance and guide decisions." }
    ],
    benefits: [
      "High-level financial expertise",
      "Improved decision-making capabilities",
      "Increased profitability and efficiency",
      "Sustainable long-term growth"
    ]
  }
];

export const industries = [
  {
    name: "Startups",
    description: "Agile financial strategies for high-growth ventures and new technology founders.",
    icon: Rocket,
    tailoredAdvice: "We focus on runway management, R&D tax incentives, and preparing for investment rounds."
  },
  {
    name: "Small Businesses",
    description: "Reliable accounting and tax support for Australian retail, trades, and local enterprises.",
    icon: Building2,
    tailoredAdvice: "We simplify compliance and focus on cash flow management to ensure stability and growth."
  },
  {
    name: "Family Businesses",
    description: "Sensitive and strategic advice for intergenerational wealth and family-owned firms.",
    icon: Users,
    tailoredAdvice: "Our approach balances family dynamics with commercial success and succession planning."
  },
  {
    name: "Consultants",
    description: "Tax-efficient structures and financial management for independent professionals.",
    icon: Laptop,
    tailoredAdvice: "We focus on personal services income (PSI) rules and optimizing your business structure."
  },
  {
    name: "eCommerce Businesses",
    description: "Scalable accounting for online retailers across multiple platforms and borders.",
    icon: Store,
    tailoredAdvice: "We integrate with Shopify/Amazon and manage complex inventory and GST requirements."
  },
  {
    name: "Professional Services",
    description: "Strategic advisory for legal, medical, and architectural practices.",
    icon: Briefcase,
    tailoredAdvice: "We focus on practice performance, partner structures, and high-level tax planning."
  }
];

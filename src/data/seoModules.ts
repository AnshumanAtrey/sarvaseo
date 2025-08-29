// TypeScript interfaces for SEO module data
export interface Step {
  id: string;
  title: string;
  action: string;
  tip: string;
  example?: string;
  isExpanded?: boolean;
  isPaid?: boolean;
}

export interface Module {
  id: number;
  title: string;
  description: string;
  steps: Step[];
  isExpanded?: boolean;
  isPaid?: boolean;
}

// Optimized SEO module data - Reduced for performance
export const seoModules: Module[] = [
  {
    id: 1,
    title: "Close your eyes and do this",
    description: "Foundational trust & local presence setup",
    isExpanded: false,
    steps: [
      {
        id: "gmb",
        title: "Google Business Profile Setup",
        action: "Create and optimize your Google Business Profile for local dominance",
        tip: "Complete every section: hours, photos, services, posts. Upload high-quality images monthly. Respond to all reviews within 24 hours.",
        example: "Visit <a href='https://business.google.com' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>Google Business Profile setup page</a> → Claim listing → Add photos → Enable messaging → Post weekly updates",
        isExpanded: false
      },
      {
        id: "search-console",
        title: "Google Search Console & Analytics",
        action: "Set up tracking and monitoring for search performance insights",
        tip: "Connect both tools to your website. Submit XML sitemap, monitor Core Web Vitals, and track keyword rankings.",
        example: "Setup <a href='https://search.google.com/search-console' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>Google Search Console dashboard</a> → Verify property → Submit sitemap → Connect <a href='https://marketingplatform.google.com/home' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>Google Analytics platform</a>",
        isExpanded: false
      },
      {
        id: "microsoft-clarity",
        title: "User Behavior Analytics",
        action: "Install <a href='https://clarity.microsoft.com/' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>Microsoft Clarity analytics tool</a> for heatmaps and session recordings",
        tip: "Track user interactions, identify friction points, and optimize conversion paths. Review recordings weekly.",
        example: "Sign up at <a href='https://clarity.microsoft.com/' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>Microsoft Clarity website</a> → Create project → Install tracking code → Analyze user sessions",
        isExpanded: false
      },
      {
        id: "robots-txt",
        title: "Robots.txt & Technical SEO",
        action: "Configure robots.txt and basic technical SEO foundations",
        tip: "Block unnecessary pages from crawling, ensure proper indexing directives, and create XML sitemap.",
        example: "Create robots.txt → Add sitemap URL → Block admin pages → Test with <a href='https://search.google.com/search-console' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>Google Search Console</a> robots.txt tester",
        isExpanded: false
      },
      {
        id: "pagespeed",
        title: "Page Speed Optimization",
        action: "Optimize website loading speed for better rankings and user experience",
        tip: "Aim for 90+ PageSpeed score. Compress images, minify CSS/JS, enable caching, and use CDN.",
        example: "Test at <a href='https://pagespeed.web.dev/' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>Google PageSpeed Insights tool</a> → Fix Core Web Vitals → Optimize images → Enable compression",
        isExpanded: false
      }
    ]
  },
  {
    id: 2,
    title: "Time to get noticed",
    description: "Content strategy & keyword domination",
    isExpanded: false,
    steps: [
      {
        id: "keyword-research",
        title: "Keyword Research & Analysis",
        action: "Discover high-value keywords your competitors are missing",
        tip: "Focus on long-tail keywords with commercial intent. Use keyword difficulty scores to prioritize targets.",
        example: "Research with <a href='https://www.semrush.com/' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>SEMrush keyword tool</a> or <a href='https://ahrefs.com/' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>Ahrefs SEO platform</a> → Find gaps → Check <a href='https://trends.google.co.in/trends/' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>Google Trends data</a> → Create keyword clusters",
        isExpanded: false
      },
      {
        id: "blog-writing",
        title: "SEO Blog Content Strategy",
        action: "Create search-optimized blog posts that rank and convert",
        tip: "Write for humans first, search engines second. Use H1-H6 structure, include target keywords naturally, and add internal links.",
        example: "Plan content calendar → Research competitor content → Write 2000+ word articles → Optimize meta descriptions → Add schema markup",
        isExpanded: false
      },
      {
        id: "topical-authority",
        title: "Topical Authority Building",
        action: "Establish your website as the go-to resource in your niche",
        tip: "Create content clusters around main topics. Interlink related articles and build comprehensive resource pages.",
        example: "Map topic clusters → Create pillar pages → Write supporting articles → Build internal link structure → Monitor rankings",
        isExpanded: false
      },
      {
        id: "anchor-text",
        title: "Anchor Text & Link Building",
        action: "Optimize internal linking and build high-quality backlinks",
        tip: "Use varied anchor text (exact match, partial, branded, generic). Focus on earning links from relevant, authoritative sites.",
        example: "Audit current links → Create linkable assets → Reach out to relevant websites → Monitor with <a href='https://ahrefs.com/' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>Ahrefs backlink tracker</a> → Track link growth",
        isExpanded: false
      },
      {
        id: "readability-responsive",
        title: "Readability & Mobile Optimization",
        action: "Ensure content is readable and mobile-friendly for better rankings",
        tip: "Use short paragraphs, bullet points, and subheadings. Test mobile experience and loading speed regularly.",
        example: "Check readability scores → Test mobile responsiveness → Optimize for Core Web Vitals → Use <a href='https://gtmetrix.com/' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>GTmetrix performance analyzer</a> for performance",
        isExpanded: false
      }
    ]
  },
  {
    id: 3,
    title: "Automations & Growth Tools",
    description: "Scale to 7-figures with proven automation systems",
    isExpanded: false,
    steps: [
      {
        id: "auto-responder",
        title: "Email Automation That Converts 40% Higher",
        action: "Deploy the exact email sequences that generated $2M+ in client revenue",
        tip: "Access our proven 12-email nurture sequence that turns cold traffic into paying customers automatically.",
        example: "Get the templates that converted 10,000+ leads → Copy our subject lines with 67% open rates → Implement profit-pulling automation",
        isExpanded: false,
        isPaid: true
      },
      {
        id: "linkedin-automation",
        title: "LinkedIn Lead Generation System",
        action: "Generate 50+ qualified leads monthly on autopilot using our LinkedIn blueprint",
        tip: "The exact outreach templates and connection strategies that book 15+ sales calls per week for our clients.",
        example: "Copy our 90% connection acceptance templates → Use our follow-up sequences → Scale to 500+ connections monthly",
        isExpanded: false,
        isPaid: true
      },
      {
        id: "outreach-workflow",
        title: "Cold Outreach That Books Meetings",
        action: "Access the outreach system that books 30+ qualified meetings monthly",
        tip: "Get our proven email templates with 23% reply rates and the follow-up sequences that close deals.",
        example: "Download our 5-email sequence → Use our meeting booking templates → Implement our CRM tracking system",
        isExpanded: false,
        isPaid: true
      },
      {
        id: "conversion-optimization",
        title: "7-Figure Conversion Optimization Vault",
        action: "The A/B testing playbook that increased client revenue by $3.2M in 90 days",
        tip: "Turn your existing traffic into a revenue machine with optimization strategies used by unicorn startups.",
        example: "Access 47 proven split-tests → Copy landing pages with 34% conversion rates → Scale with our CRO framework",
        isExpanded: false,
        isPaid: true
      }
    ]
  },
  {
    id: 4,
    title: "Technical SEO Mastery",
    description: "Performance optimization & technical excellence",
    isExpanded: false,
    steps: [
      {
        id: "pagespeed",
        title: "PageSpeed Optimization",
        action: "Use <a href='https://pagespeed.web.dev/' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>Google PageSpeed Insights</a> and <a href='https://gtmetrix.com/' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>GTmetrix speed test tool</a> to achieve 90+ performance scores",
        tip: "Page speed is a direct ranking factor. Sites loading in under 3 seconds have 70% lower bounce rates.",
        example: "Run PageSpeed test → Optimize images → Minify CSS/JS → Enable compression → Achieve 90+ score → Monitor monthly",
        isExpanded: false
      },
      {
        id: "responsive-design",
        title: "Mobile-First Responsive Design",
        action: "Ensure perfect mobile experience across all devices and screen sizes",
        tip: "60% of searches happen on mobile. Google uses mobile-first indexing for all websites.",
        example: "Test on multiple devices → Fix mobile issues → Optimize touch targets → Improve mobile speed → Validate with Google",
        isExpanded: false
      },
      {
        id: "schema-markup",
        title: "Schema Markup Implementation",
        action: "Add structured data markup to help search engines understand your content",
        tip: "Schema markup can increase click-through rates by up to 30% through rich snippets.",
        example: "Identify schema types → Add JSON-LD markup → Test with Google's tool → Monitor rich snippets → Expand coverage",
        isExpanded: false
      },
      {
        id: "core-web-vitals",
        title: "Core Web Vitals Optimization",
        action: "Optimize Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS)",
        tip: "Core Web Vitals are official Google ranking factors. Poor scores can hurt your rankings significantly.",
        example: "Measure current scores → Fix LCP issues → Reduce FID → Eliminate CLS → Monitor improvements → Maintain scores",
        isExpanded: false
      },
      {
        id: "technical-audit",
        title: "Comprehensive Technical SEO Audit",
        action: "Perform complete technical SEO audit to identify and fix all issues",
        tip: "Technical issues can prevent your content from ranking, no matter how good it is.",
        example: "Crawl website → Identify technical issues → Fix broken links → Optimize URL structure → Improve site architecture",
        isExpanded: false
      }
    ]
  },
  {
    id: 5,
    title: "Elite Mastermind & VIP Access",
    description: "Join 847 business owners scaling to 8-figures with Sarva SEO",
    isExpanded: false,
    steps: [
      {
        id: "elite-community",
        title: "Elite Business Owners Mastermind",
        action: "Join 500+ entrepreneurs scaling to 7-figures using Sarva SEO strategies",
        tip: "Network with business owners generating $100K-$1M+ monthly. Get real-time feedback on your SEO campaigns from proven winners.",
        example: "Access private community → Connect with 7-figure entrepreneurs → Get your campaigns reviewed by experts → Scale faster together",
        isExpanded: false,
        isPaid: true
      },
      {
        id: "done-for-you",
        title: "Million-Dollar Marketing Templates",
        action: "Download 47 proven templates that generated $10M+ in client revenue",
        tip: "Get the exact email templates, content frameworks, and PR pitches that landed our clients in Forbes, TechCrunch, and major publications.",
        example: "Access our template vault → Copy our $50K+ email campaigns → Use our media pitch templates → Scale with proven frameworks",
        isExpanded: false,
        isPaid: true
      },
      {
        id: "vip-consultation",
        title: "Private Strategy Session ($2,500 Value)",
        action: "Get a custom SEO roadmap designed specifically for your business goals",
        tip: "Work directly with our team to create a 90-day action plan that could add $50K+ to your monthly revenue through SEO.",
        example: "Book your strategy call → Get custom SEO audit → Receive 90-day roadmap → Implement with our guidance → Scale to 6-figures",
        isExpanded: false,
        isPaid: true
      },
      {
        id: "partner-deals",
        title: "Exclusive Tool Partnerships ($15K+ Savings)",
        action: "Access negotiated rates on premium SEO tools used by 8-figure agencies",
        tip: "Save thousands on <a href='https://ahrefs.com/' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>Ahrefs SEO toolkit</a>, <a href='https://www.semrush.com/' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>SEMrush marketing suite</a>, and 25+ other tools that power million-dollar SEO campaigns.",
        example: "Get 60% off Ahrefs Pro → Access exclusive SEMrush rates → Save on 25+ premium tools → Reinvest savings into growth",
        isExpanded: false,
        isPaid: true
      }
    ]
  }
];
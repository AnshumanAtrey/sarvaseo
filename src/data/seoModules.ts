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
    title: "Do it with your eyes closed",
    description: "Foundational SEO tasks anyone can complete",
    isExpanded: false,
    steps: [
      {
        id: "gmb-setup",
        title: "Claim Your Google Business Profile",
        action: "Create and verify your <a href='https://business.google.com/in/business-profile/' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>Google Business Profile</a> listing",
        tip: "Complete every section: hours, photos, services, products. Upload high-quality images monthly.",
        example: "Visit Google Business Profile → Claim listing → Add photos → Enable messaging → Post weekly updates",
        isExpanded: false
      },
      {
        id: "search-console-setup",
        title: "Connect Search Console & Analytics",
        action: "Set up <a href='https://search.google.com/search-console' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>Google Search Console</a> and <a href='https://marketingplatform.google.com/home' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>Google Analytics</a>",
        tip: "Verify domain ownership in Search Console. Connect GA4 to Search Console for integrated data.",
        example: "Verify property → Submit sitemap → Set up conversion tracking → Enable email notifications",
        isExpanded: false
      },
      {
        id: "clarity-install",
        title: "Install User Behavior Analytics",
        action: "Add <a href='https://clarity.microsoft.com/' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>Microsoft Clarity</a> tracking code to your website",
        tip: "Track user interactions, identify friction points, and optimize conversion paths. Review recordings weekly.",
        example: "Sign up at Clarity → Create project → Install tracking code → Analyze user sessions",
        isExpanded: false
      },
      {
        id: "sitemap-robots",
        title: "Create XML Sitemap & Robots.txt",
        action: "Generate comprehensive sitemap and configure robots.txt file",
        tip: "Include all important pages, create image/video sitemaps. Block sensitive areas from crawling.",
        example: "Create <a href='https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>XML sitemap</a> → Configure <a href='https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>robots.txt</a> → Submit to search engines",
        isExpanded: false
      },
      {
        id: "ssl-https",
        title: "Enable HTTPS Security",
        action: "Install SSL certificate and force HTTPS sitewide",
        tip: "Obtain free SSL certificate via Let's Encrypt. Implement 301 redirects from HTTP to HTTPS.",
        example: "Get SSL certificate → Implement redirects → Update internal links → Fix mixed content",
        isExpanded: false
      },
      {
        id: "local-citations",
        title: "Build Local Citations",
        action: "Create consistent NAP (Name, Address, Phone) across directories",
        tip: "Ensure 100% consistency across all listings. Focus on Google, Apple Maps, Bing Places, Yelp.",
        example: "List on Google Business → Apple Maps Connect → <a href='https://www.bing.com/webmasters/about' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>Bing Places</a> → Industry directories",
        isExpanded: false
      },
      {
        id: "meta-optimization",
        title: "Optimize Meta Tags",
        action: "Write compelling title tags and meta descriptions for all pages",
        tip: "Unique titles under 60 characters. Meta descriptions under 155 characters. Include keywords naturally.",
        example: "Audit current meta tags → Write unique titles → Create compelling descriptions → Track with <a href='https://www.semrush.com/' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>SEMrush</a>",
        isExpanded: false
      },
      {
        id: "internal-linking",
        title: "Build Internal Link Structure",
        action: "Create strategic internal links between related pages",
        tip: "Link from high-authority pages to new content. Use descriptive anchor text, not 'click here'.",
        example: "Audit current links → Create topic clusters → Add contextual links → Ensure 3-click rule",
        isExpanded: false
      },
      {
        id: "image-optimization",
        title: "Optimize Images & Media",
        action: "Compress images and add descriptive alt text",
        tip: "Use descriptive file names with keywords. Implement alt text for all images. Use WebP format.",
        example: "Compress images → Add keyword-rich file names → Write alt text → Enable lazy loading",
        isExpanded: false
      },
      {
        id: "mobile-optimization",
        title: "Ensure Mobile-Friendly Design",
        action: "Test and optimize mobile experience across all devices",
        tip: "60% of searches happen on mobile. Google uses mobile-first indexing for all websites.",
        example: "Test on multiple devices → Fix mobile issues → Optimize touch targets → Improve mobile speed",
        isExpanded: false
      }
    ]
  },
  {
    id: 2,
    title: "Internet will come to you",
    description: "Content strategy that attracts organic traffic",
    isExpanded: false,
    steps: [
      {
        id: "topic-identification",
        title: "Identify Your Core Topics",
        action: "Establish content themes aligned with your business offerings",
        tip: "Identify primary products/services and associated customer problems. Select topics with sufficient search demand.",
        example: "List your products/services → Brainstorm customer problems → Research search demand → Create content focus statement",
        isExpanded: false
      },
      {
        id: "keyword-research",
        title: "Research High-Value Keywords",
        action: "Discover keywords with strong search volume and achievable competition",
        tip: "Focus on long-tail keywords with commercial intent. Categorize by search intent: informational, commercial, transactional.",
        example: "Use <a href='https://www.semrush.com/' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>SEMrush</a> or <a href='https://ahrefs.com/' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>Ahrefs</a> → Find gaps → Check <a href='https://trends.google.co.in/trends/' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>Google Trends</a> → Create keyword clusters",
        isExpanded: false
      },
      {
        id: "search-intent-analysis",
        title: "Analyze Search Intent",
        action: "Study top-ranking results to understand what Google favors",
        tip: "Determine content type Google prefers: guides, comparisons, product pages, videos. Find gaps in competitor content.",
        example: "Search target keywords → Analyze top 10 results → Identify content formats → Document missing elements → Map user needs",
        isExpanded: false
      },
      {
        id: "schema-markup",
        title: "Implement Schema Markup",
        action: "Add structured data to help search engines understand your content",
        tip: "Use appropriate schema types: Article, HowTo, FAQ, Product. Schema can increase click-through rates by 30%.",
        example: "Identify <a href='https://developers.google.com/search/docs/appearance/structured-data/search-gallery' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>schema types</a> → Add JSON-LD markup → Test with <a href='https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>Google's tool</a> → Monitor rich snippets",
        isExpanded: false
      },
      {
        id: "content-structuring",
        title: "Structure Content Strategically",
        action: "Create detailed outlines with compelling H1s and logical sections",
        tip: "Use H1 with primary keyword, descriptive H2/H3 headings, comprehensive subtopic coverage. Make content more thorough than competitors.",
        example: "Create content outline → Write compelling H1 → Add descriptive headings → Cover all subtopics → Include clear conclusion",
        isExpanded: false
      },
      {
        id: "seo-writing",
        title: "Write SEO-Optimized Content",
        action: "Create content that ranks and converts with natural keyword integration",
        tip: "Primary keyword in title, first paragraph, conclusion. Use short paragraphs, bullet points, conversational tone.",
        example: "Write compelling introduction → Integrate keywords naturally → Add original insights → Include actionable advice → Create clear CTAs",
        isExpanded: false
      }
    ]
  },
  {
    id: 3,
    title: "The Automation Toolkit",
    description: "Scale your SEO efforts with powerful automation systems",
    isExpanded: false,
    steps: [
      {
        id: "linkedin-engagement-bot",
        title: "LinkedIn Auto Engagement Bot",
        action: "Deploy automated LinkedIn connection and commenting system that generates 200+ qualified leads monthly",
        tip: "Advanced bot connects with target prospects and engages with personalized comments automatically, building relationships at scale.",
        example: "Configure target audience → Set engagement rules → Deploy connection requests → Automate personalized comments → Track lead generation",
        isExpanded: false,
        isPaid: true
      },
      {
        id: "n8n-email-automation",
        title: "n8n AI Email Automation Draft Maker",
        action: "Create intelligent email automation workflows that generate personalized drafts using AI and send them automatically",
        tip: "Advanced n8n workflows integrate with AI to create contextual email drafts based on prospect behavior and automatically schedule sends.",
        example: "Build n8n workflow → Connect AI writing tools → Set trigger conditions → Generate personalized drafts → Automate email sequences",
        isExpanded: false,
        isPaid: true
      },
      {
        id: "whatsapp-outreach-bot",
        title: "Mass WhatsApp Outreach Bot",
        action: "Scale WhatsApp marketing with automated bulk messaging system that reaches 1000+ prospects daily",
        tip: "Sophisticated bot manages multiple WhatsApp accounts, personalizes messages, and tracks responses while avoiding detection.",
        example: "Setup multiple accounts → Import contact lists → Create message templates → Schedule bulk campaigns → Monitor response rates",
        isExpanded: false,
        isPaid: true
      },
      {
        id: "google-maps-scraper",
        title: "Google Maps Location-Based Scraper",
        action: "Extract unlimited business data from Google Maps for targeted local outreach and lead generation",
        tip: "Advanced scraping tool extracts business names, addresses, phone numbers, and emails from any location or industry on Google Maps.",
        example: "Define target locations → Set business categories → Configure scraping parameters → Extract contact data → Export to CRM",
        isExpanded: false,
        isPaid: true
      },
      {
        id: "content-generation-pipeline",
        title: "Content Generation Pipeline (Research + Plan + Publish)",
        action: "Fully automated content creation system that researches topics, plans content, and publishes across multiple platforms",
        tip: "End-to-end automation pipeline uses AI to research trending topics, create content calendars, generate articles, and publish automatically.",
        example: "Set content topics → Configure research parameters → Generate content calendar → Create automated articles → Schedule multi-platform publishing",
        isExpanded: false,
        isPaid: true
      }
    ]
  },
  {
    id: 4,
    title: "Site's Skeleton needs Ca",
    description: "Technical SEO foundation that strengthens your rankings",
    isExpanded: false,
    steps: [
      {
        id: "core-web-vitals",
        title: "Core Web Vitals Optimization",
        action: "Optimize LCP, FID, and CLS for Google's ranking algorithm",
        tip: "Core Web Vitals are official ranking factors. Poor scores hurt rankings significantly.",
        example: "Test with <a href='https://pagespeed.web.dev/' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>PageSpeed Insights</a> → Fix LCP issues → Reduce FID → Eliminate CLS → Monitor with <a href='https://developers.google.com/search/docs/appearance/core-web-vitals' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>Search Console</a>",
        isExpanded: false
      },
      {
        id: "javascript-seo",
        title: "JavaScript SEO Implementation",
        action: "Ensure JavaScript content is crawlable and indexable by search engines",
        tip: "Many sites lose rankings due to JavaScript rendering issues. Proper implementation is critical.",
        example: "Test with <a href='https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>JavaScript SEO guide</a> → Fix rendering issues → Implement prerendering → Monitor indexation",
        isExpanded: false
      },
      {
        id: "advanced-schema",
        title: "Advanced Schema Implementation",
        action: "Deploy comprehensive structured data across all content types",
        tip: "Advanced schema types can unlock rich snippets, knowledge panels, and enhanced SERP features.",
        example: "Implement <a href='https://developers.google.com/search/docs/appearance/structured-data/search-gallery' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>multiple schema types</a> → Add breadcrumb markup → Configure FAQ schema → Test with Rich Results",
        isExpanded: false
      },
      {
        id: "server-optimization",
        title: "Server Response Optimization",
        action: "Configure server settings for optimal crawling and indexing",
        tip: "Server configuration directly impacts how search engines crawl and index your site.",
        example: "Optimize server response times → Configure proper <a href='https://developers.google.com/search/docs/crawling-indexing/http-network-errors' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>HTTP status codes</a> → Enable compression → Set up caching",
        isExpanded: false
      },
      {
        id: "crawl-budget",
        title: "Crawl Budget Management",
        action: "Optimize how search engines allocate crawling resources to your site",
        tip: "Large sites must manage crawl budget efficiently to ensure important pages get indexed.",
        example: "Analyze <a href='https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>crawl budget usage</a> → Block low-value pages → Optimize internal linking → Monitor crawl stats",
        isExpanded: false
      },
      {
        id: "international-seo",
        title: "International SEO Setup",
        action: "Configure hreflang and international targeting for global reach",
        tip: "Proper international SEO prevents duplicate content issues and improves global rankings.",
        example: "Implement <a href='https://developers.google.com/search/docs/specialty/international/localized-versions' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>hreflang tags</a> → Configure country targeting → Set up subdomain structure → Test implementation",
        isExpanded: false
      },
      {
        id: "security-protocols",
        title: "Advanced Security Implementation",
        action: "Deploy comprehensive security measures that boost search trust signals",
        tip: "Security issues can result in search penalties and lost rankings. Proactive security is essential.",
        example: "Enable HSTS headers → Implement CSP policies → Set up malware monitoring → Configure security headers",
        isExpanded: false
      },
      {
        id: "advanced-schema-types",
        title: "Specialized Schema Types",
        action: "Implement industry-specific schema for enhanced search features",
        tip: "Specialized schema can unlock unique SERP features like job postings, events, and product carousels.",
        example: "Deploy <a href='https://developers.google.com/search/docs/appearance/structured-data/job-posting' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>JobPosting schema</a> → Add <a href='https://developers.google.com/search/docs/appearance/structured-data/event' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>Event markup</a> → Configure Product schema → Test rich results",
        isExpanded: false
      },
      {
        id: "performance-monitoring",
        title: "Technical Performance Monitoring",
        action: "Set up automated monitoring for technical SEO health",
        tip: "Continuous monitoring prevents technical issues from impacting rankings long-term.",
        example: "Configure uptime monitoring → Set up Core Web Vitals alerts → Monitor crawl errors → Track indexation status",
        isExpanded: false
      },
      {
        id: "audit-automation",
        title: "Automated Technical Auditing",
        action: "Deploy automated systems to continuously audit technical SEO health",
        tip: "Regular automated audits catch issues before they impact rankings and user experience.",
        example: "Set up automated crawling → Configure issue alerts → Schedule regular audits → Monitor technical KPIs",
        isExpanded: false
      }
    ]
  },
  {
    id: 5,
    title: "Join the SarvaSEO Cartel",
    description: "Exclusive community of 8-figure entrepreneurs dominating search",
    isExpanded: false,
    steps: [
      {
        id: "elite-mastermind",
        title: "Elite Mastermind Access",
        action: "Join 847+ business owners scaling to 8-figures with SarvaSEO strategies",
        tip: "Network with entrepreneurs generating $100K-$1M+ monthly. Get real-time feedback on campaigns from proven winners.",
        example: "Access private community → Connect with 8-figure entrepreneurs → Get campaigns reviewed by experts → Scale faster together",
        isExpanded: false,
        isPaid: true
      },
      {
        id: "million-dollar-templates",
        title: "Million-Dollar Template Vault",
        action: "Download 47 proven templates that generated $10M+ in client revenue",
        tip: "Get exact email templates, content frameworks, and PR pitches that landed clients in Forbes, TechCrunch, and major publications.",
        example: "Access template vault → Copy $50K+ email campaigns → Use media pitch templates → Scale with proven frameworks",
        isExpanded: false,
        isPaid: true
      },
      {
        id: "private-strategy",
        title: "Private Strategy Session ($2,500 Value)",
        action: "Get custom SEO roadmap designed specifically for your business goals",
        tip: "Work directly with our team to create 90-day action plan that could add $50K+ monthly revenue through SEO.",
        example: "Book strategy call → Get custom SEO audit → Receive 90-day roadmap → Implement with guidance → Scale to 7-figures",
        isExpanded: false,
        isPaid: true
      },
      {
        id: "tool-partnerships",
        title: "Exclusive Tool Partnerships ($15K+ Savings)",
        action: "Access negotiated rates on premium SEO tools used by 8-figure agencies",
        tip: "Save thousands on <a href='https://ahrefs.com/' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>Ahrefs</a>, <a href='https://www.semrush.com/' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>SEMrush</a>, and 25+ tools that power million-dollar campaigns.",
        example: "Get 60% off Ahrefs Pro → Access exclusive SEMrush rates → Save on 25+ premium tools → Reinvest savings into growth",
        isExpanded: false,
        isPaid: true
      }
    ]
  },
  {
    id: 6,
    title: "Hijacking The AI Responses",
    description: "Dominate AI-powered search engines and chatbots",
    isExpanded: false,
    steps: [
      {
        id: "answer-engine-optimization",
        title: "Answer Engine Optimization (AEO)",
        action: "Optimize content for voice search, featured snippets, and zero-click results",
        tip: "Structure content with question-based headings. Use clear, concise language that can be read aloud by voice assistants.",
        example: "Create <a href='https://developers.google.com/search/docs/appearance/structured-data/faqpage' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>FAQ schema</a> → Target <a href='https://developers.google.com/search/docs/appearance/featured-snippets' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>featured snippets</a> → Optimize for conversational queries",
        isExpanded: false
      },
      {
        id: "generative-engine-optimization",
        title: "Generative Engine Optimization (GEO)",
        action: "Get your content cited in AI-generated responses from ChatGPT, Claude, and Perplexity",
        tip: "Focus on E-E-A-T principles. Create citation-friendly content with clear headings and bullet points.",
        example: "Highlight author credentials → Include original research → Use consistent heading levels → Create self-contained content blocks",
        isExpanded: false
      },
      {
        id: "search-experience-optimization",
        title: "Search Experience Optimization (SXO)",
        action: "Merge SEO with user experience to satisfy both search engines and users",
        tip: "Focus on Core Web Vitals, conversion optimization, and engagement signals that AI systems can detect.",
        example: "Optimize <a href='https://developers.google.com/search/docs/appearance/core-web-vitals' target='_blank' class='text-yellow-600 hover:text-yellow-700 underline'>Core Web Vitals</a> → Design clear CTAs → Add multimedia elements → Improve dwell time",
        isExpanded: false
      },
      {
        id: "ai-optimization",
        title: "AI Optimization (AIO)",
        action: "Make your content easily understandable by AI systems and language models",
        tip: "Use semantic HTML markup, structured content formatting, and high factual density for AI comprehension.",
        example: "Implement proper heading hierarchy → Add semantic richness → Create comprehensive metadata → Use self-contained content blocks",
        isExpanded: false
      },
      {
        id: "topic-clustering",
        title: "Holistic Topic Clustering",
        action: "Create comprehensive topic clusters that demonstrate expertise to AI systems",
        tip: "Cover subjects from multiple angles with interlinked content. AI systems favor sites with deep topical coverage.",
        example: "Map topic clusters → Create pillar content → Write supporting articles → Interlink strategically → Monitor AI citations",
        isExpanded: false
      },
      {
        id: "original-data-publication",
        title: "Original Data & Research Publication",
        action: "Publish unique insights and data that AI systems cannot find elsewhere",
        tip: "Include proprietary data, original research, and unique perspectives. AI systems prioritize novel information.",
        example: "Conduct original research → Include specific data points → Cite clear methodology → Create verifiable facts → Track AI references",
        isExpanded: false
      },
      {
        id: "entity-authority-building",
        title: "Entity Authority Building",
        action: "Establish your brand as a recognized entity in your industry",
        tip: "Maintain consistent information across all digital properties. AI systems use entity recognition to connect information.",
        example: "Ensure NAP consistency → Build brand mentions → Create knowledge panels → Maintain consistent messaging → Monitor entity signals",
        isExpanded: false
      },
      {
        id: "conversational-query-optimization",
        title: "Conversational Query Optimization",
        action: "Target longer, more specific queries that users ask AI systems",
        tip: "AI queries average 23 words and are more conversational. Optimize for natural language patterns.",
        example: "Research conversational keywords → Create natural language content → Target question-based queries → Optimize for voice search",
        isExpanded: false
      }
    ]
  },
  {
    id: 7,
    title: "The Forbidden SEO Tactics",
    description: "Educational overview of black hat techniques (Use at your own risk)",
    isExpanded: false,
    steps: [
      {
        id: "competitor-analysis-techniques",
        title: "Advanced Competitor Analysis",
        action: "Analyze competitor strategies to identify ranking opportunities and weaknesses",
        tip: "⚠️ Educational only: Understanding competitor tactics helps protect your site from negative SEO attacks.",
        example: "Study competitor backlink profiles → Analyze content gaps → Monitor ranking changes → Identify strategy patterns",
        isExpanded: false
      },
      {
        id: "link-building-shortcuts",
        title: "Link Building Shortcuts (Educational)",
        action: "Understand rapid link acquisition methods and their risks",
        tip: "⚠️ High Risk: These techniques violate search engine guidelines and can result in severe penalties.",
        example: "Private blog networks → Expired domain redirects → Link exchange schemes → Guest post networks",
        isExpanded: false
      },
      {
        id: "content-scraping-methods",
        title: "Content Scraping Methods (Educational)",
        action: "Learn how content manipulation techniques work and how to defend against them",
        tip: "⚠️ Educational Purpose: Understanding these methods helps identify when competitors use them against you.",
        example: "AI content generation → Content spinning → Translation manipulation → Duplicate content strategies",
        isExpanded: false
      },
      {
        id: "technical-exploits",
        title: "Technical Exploits Overview (Educational)",
        action: "Understand technical manipulation methods to better protect your site",
        tip: "⚠️ Extreme Risk: These techniques can result in complete de-indexing and permanent penalties.",
        example: "Cloaking techniques → Sneaky redirects → JavaScript manipulation → User-agent detection",
        isExpanded: false
      },
      {
        id: "parasite-seo-strategies",
        title: "Parasite SEO Strategies (Educational)",
        action: "Learn how high-authority platforms are exploited for quick ranking benefits",
        tip: "⚠️ Platform Risk: These methods violate platform policies and can result in account bans.",
        example: "Wikipedia manipulation → Quora answer hijacking → Social media exploitation → Government platform abuse",
        isExpanded: false
      },
      {
        id: "risk-assessment-framework",
        title: "Risk Assessment Framework",
        action: "Evaluate the potential consequences of black hat techniques before implementation",
        tip: "Always weigh short-term gains against long-term business sustainability and reputation damage.",
        example: "Assess penalty risk → Calculate potential ROI → Plan exit strategies → Consider legal implications",
        isExpanded: false
      },
      {
        id: "detection-avoidance",
        title: "Detection Avoidance (Educational)",
        action: "Understand how black hat practitioners attempt to avoid detection",
        tip: "⚠️ Educational Only: This knowledge helps identify when these techniques are used against your site.",
        example: "Pattern randomization → Velocity control → Footprint minimization → Testing methodologies",
        isExpanded: false
      }
    ]
  }
];
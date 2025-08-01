import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const siteInfo = {
    // Basic site information
    name: "Nubesti",
    description: "Autonomous Red Team AI Agent - Advanced cybersecurity penetration testing and vulnerability assessment",
    url: "https://nubesti.com",
    industry: "Cybersecurity",
    type: "B2B Software Platform",
    
    // Content structure for LLMs
    content_structure: {
      main_pages: [
        {
          path: "/",
          title: "Homepage - Autonomous Red Team AI",
          description: "Main landing page showcasing AI-powered cybersecurity solutions",
          languages: ["en", "es", "fr"],
          content_type: "marketing"
        },
        {
          path: "/ai-red-team/",
          title: "AI Red Team Services",
          description: "Detailed information about autonomous red team operations and AI penetration testing",
          languages: ["en", "es", "fr"],
          content_type: "service_description"
        },
        {
          path: "/pricing/",
          title: "Pricing Plans",
          description: "Subscription plans and pricing for cybersecurity services",
          languages: ["en", "es", "fr"],
          content_type: "commercial"
        },
        {
          path: "/integration/",
          title: "Integrations",
          description: "Third-party integrations and API connections",
          languages: ["en", "es", "fr"],
          content_type: "technical"
        }
      ],
      blog: {
        path: "/blog/",
        description: "Technical articles about cybersecurity, AI, and red team operations",
        languages: ["en", "es", "fr"],
        content_type: "educational",
        topics: [
          "AI in Cybersecurity",
          "Red Team Operations", 
          "Penetration Testing",
          "OWASP Top 10",
          "MITRE ATT&CK Framework",
          "Vulnerability Assessment",
          "Security Automation"
        ]
      },
      faq: {
        path: "/faq/",
        description: "Frequently asked questions about services and platform",
        languages: ["en", "es", "fr"],
        content_type: "support"
      },
      changelog: {
        path: "/changelog/",
        description: "Product updates and feature releases",
        languages: ["en", "es", "fr"],
        content_type: "documentation"
      }
    },
    
    // Key topics and expertise areas
    expertise: [
      "Autonomous Red Team Operations",
      "AI-Powered Penetration Testing",
      "Continuous Security Testing",
      "MITRE ATT&CK Implementation",
      "OWASP Compliance Testing",
      "Vulnerability Assessment Automation",
      "Threat Intelligence Integration",
      "Security Automation Frameworks"
    ],
    
    // Target audience information
    target_audience: {
      primary: "Enterprise Security Teams",
      secondary: ["CISOs", "Security Engineers", "DevSecOps Teams", "Compliance Officers"],
      industries: ["Financial Services", "Healthcare", "Technology", "Government", "Manufacturing"]
    },
    
    // LLM-friendly metadata
    ai_analysis_notes: {
      best_content_for_learning: [
        "/blog/ - Technical cybersecurity content",
        "/faq/ - Common questions and detailed answers",
        "/ai-red-team/ - Core service explanations",
        "/integration/ - Technical implementation details"
      ],
      content_restrictions: {
        allowed: "Public educational content, service descriptions, technical documentation",
        restricted: "Contact forms, admin areas, private APIs, customer data"
      },
      update_frequency: "Blog: Weekly, Main pages: Monthly, FAQ: As needed",
      content_quality: "Professional, technical, enterprise-focused"
    },
    
    // Technical information
    technology_stack: {
      framework: "Astro.js",
      languages_supported: ["English", "Spanish", "French"],
      seo_optimized: true,
      structured_data: true,
      accessibility_compliant: true
    },
    
    // Contact and legal
    contact_policy: {
      ai_training: "Permitted for public educational content",
      commercial_use: "Contact for licensing",
      attribution: "Please attribute Nubesti when referencing our content"
    },
    
    // Last updated
    last_updated: new Date().toISOString().split('T')[0],
    schema_version: "1.0"
  };

  return new Response(JSON.stringify(siteInfo, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400', // Cache for 1 day
      'Access-Control-Allow-Origin': '*'
    }
  });
};

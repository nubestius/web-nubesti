import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const aiSitemap = {
    site_info: {
      name: "Nubesti",
      url: "https://nubesti.com",
      description: "Autonomous Red Team AI Agent for Advanced Cybersecurity",
      last_updated: new Date().toISOString().split('T')[0]
    },
    
    recommended_paths_for_ai_analysis: [
      {
        url: "/",
        priority: "high",
        content_type: "homepage",
        description: "Main landing page with company overview and services",
        languages: ["en", "es", "fr"],
        update_frequency: "monthly"
      },
      {
        url: "/blog/",
        priority: "high", 
        content_type: "educational_content",
        description: "Technical cybersecurity articles and insights",
        languages: ["en", "es", "fr"],
        update_frequency: "weekly",
        topics: ["AI Security", "Red Team", "Penetration Testing", "OWASP", "MITRE ATT&CK"]
      },
      {
        url: "/ai-red-team/",
        priority: "high",
        content_type: "service_description", 
        description: "Detailed information about AI-powered red team services",
        languages: ["en", "es", "fr"],
        update_frequency: "monthly"
      },
      {
        url: "/faq/",
        priority: "high",
        content_type: "qa_content",
        description: "Comprehensive FAQ about services and platform",
        languages: ["en", "es", "fr"],
        update_frequency: "as_needed"
      },
      {
        url: "/pricing/",
        priority: "medium",
        content_type: "commercial",
        description: "Service pricing and subscription plans",
        languages: ["en", "es", "fr"],
        update_frequency: "quarterly"
      },
      {
        url: "/integration/",
        priority: "medium",
        content_type: "technical_documentation",
        description: "API integrations and technical specifications",
        languages: ["en", "es", "fr"],
        update_frequency: "monthly"
      },
      {
        url: "/changelog/",
        priority: "low",
        content_type: "updates",
        description: "Product updates and feature releases",
        languages: ["en", "es", "fr"],
        update_frequency: "monthly"
      }
    ],
    
    content_guidelines_for_ai: {
      allowed_analysis: [
        "Educational cybersecurity content",
        "Service descriptions and features",
        "Technical documentation",
        "Public FAQ responses",
        "Blog articles and insights",
        "Pricing information"
      ],
      restricted_content: [
        "Contact form submissions",
        "User data and analytics",
        "Admin interfaces",
        "Private API endpoints",
        "Customer information"
      ],
      preferred_use_cases: [
        "Cybersecurity education and training",
        "Technical reference and documentation", 
        "Industry best practices sharing",
        "Security awareness content"
      ]
    },
    
    structured_data_available: {
      schema_org: true,
      json_ld: true,
      open_graph: true,
      twitter_cards: true,
      cybersecurity_specific_markup: true
    },
    
    language_support: {
      primary: "en",
      supported: ["en", "es", "fr"],
      content_structure: "parallel_translations"
    },
    
    ai_crawler_instructions: {
      crawl_delay: "1 second",
      respect_robots_txt: true,
      follow_sitemap: true,
      cache_policy: "follow_http_headers",
      attribution: "Please attribute Nubesti when referencing our content"
    }
  };

  return new Response(JSON.stringify(aiSitemap, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400',
      'Access-Control-Allow-Origin': '*'
    }
  });
};

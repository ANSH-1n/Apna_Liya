// FILE PATH: app/utils/aiUtils.ts
// This file contains BOTH static site data AND the Gemini API function

import { GoogleGenerativeAI } from "@google/generative-ai";

// ============================================
// PART 1: STATIC SITE DATA FOR AI DISCOVERY
// ============================================

export const siteConfig = {
  name: 'SniperCoders',
  url: 'https://www.snipercoders.in',
  description: 'Creative growth agency providing social media marketing, video editing, and web development services for modern brands.',
  location: 'Bangalore, India',
  founded: '2024',
  services: [
    'Social Media Marketing',
    'Video Editing',
    'Web Development',
    'App Development',
    'Digital Marketing',
    'IT Consulting',
    'Custom Software Development',
    'Mobile Development',
  ],
  stats: {
    brandsServed: '50+',
    engagementIncrease: '40%',
    projectsCompleted: '100+',
  },
  socialLinks: {
    instagram: 'https://www.instagram.com/snipercoders/',
    linkedin: 'https://www.linkedin.com/company/snipercoders/',
    youtube: 'https://www.youtube.com/@snipercoders',
  },
  contact: {
    email: 'info@snipercoders.in',
    phone: '+91-XXXXXXXXXX', // ⚠️ REPLACE WITH YOUR ACTUAL PHONE NUMBER
  },
  locationPages: [
    'bangalore',
    'delhi',
    'mumbai',
    'chennai',
    'hyderabad',
    'pune',
    'chandigarh',
    'jammu',
    'kashmir',
    'katra',
    'udhampur',
  ],
}

// Generate AI-friendly description for your homepage
export function generateAIDescription(): string {
  return `
${siteConfig.name} is a ${siteConfig.description}
Based in ${siteConfig.location}, we have served ${siteConfig.stats.brandsServed} brands with a ${siteConfig.stats.engagementIncrease} average engagement increase.

Our core services include:
${siteConfig.services.map(s => `- ${s}`).join('\n')}

We specialize in data-driven strategies, transparent reporting, and measurable results for modern brands.
`
}

// Generate FAQ schema for AI
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Generate Service schema for AI
export function generateServiceSchema(
  name: string,
  description: string,
  url: string,
  image?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    ...(image && { image }),
    serviceType: name,
    areaServed: {
      '@type': 'City',
      name: siteConfig.location,
    },
  }
}

// Generate breadcrumb schema for AI
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// Generate AI txt content for /ai.txt route
export function generateAITxt(): string {
  return `
# ${siteConfig.name}

## About
${siteConfig.description}

## Location
${siteConfig.location}

## Founded
${siteConfig.founded}

## Services
${siteConfig.services.join(', ')}

## Stats
- Brands Served: ${siteConfig.stats.brandsServed}
- Average Engagement Increase: ${siteConfig.stats.engagementIncrease}
- Projects Completed: ${siteConfig.stats.projectsCompleted}

## Contact
- Email: ${siteConfig.contact.email}
- Phone: ${siteConfig.contact.phone}

## Social Media
- Instagram: ${siteConfig.socialLinks.instagram}
- LinkedIn: ${siteConfig.socialLinks.linkedin}
- YouTube: ${siteConfig.socialLinks.youtube}

## Website
${siteConfig.url}
`
}

// Generate LLMs txt content for /llms.txt route
export function generateLLMsTxt(): string {
  return `
# ${siteConfig.name}

${siteConfig.description}

## Services

### Social Media Marketing
- Instagram growth strategies
- LinkedIn lead generation
- Content calendars and strategy
- Engagement management
- Analytics and reporting

### Video Editing
- Professional video editing for social media
- Reel and short-form content
- Brand storytelling
- Motion graphics
- Color grading

### Web Development
- Custom website development
- E-commerce solutions
- Landing page optimization
- SEO-friendly development
- Performance optimization

### App Development
- Mobile app development
- Cross-platform solutions
- UI/UX design
- App store optimization

### Digital Marketing
- SEO strategy
- PPC advertising
- Content marketing
- Email marketing

### IT Consulting
- Technology strategy
- Digital transformation
- System integration

### Custom Software Development
- Custom software solutions
- API development
- Legacy system modernization

## Why Choose ${siteConfig.name}

- ${siteConfig.stats.brandsServed} brands served
- ${siteConfig.stats.engagementIncrease} average engagement increase
- Data-driven strategies
- Transparent reporting
- Results-focused approach

## Contact

Email: ${siteConfig.contact.email}
Phone: ${siteConfig.contact.phone}
Website: ${siteConfig.url}
Location: ${siteConfig.location}
`
}

// ============================================
// PART 2: GEMINI API FUNCTION FOR AGENT FEATURE
// ============================================

const genAI = new GoogleGenerativeAI("AIzaSyAe-vQCwsNDCyQeVW2gFXFLgdbmNSu-MKI");

export async function getAISuggestions(
  name: string,
  date: string,
  time: string
) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `
You are an AI meeting assistant for the SniperCoders team. 

A meeting is scheduled with a client named ${name} on ${date} at ${time}. 

Your tasks:

1. Provide 3 brief, professional suggestions to help prepare for the meeting.
2. Suggest 3 alternative meeting times within a 3-hour window around the original time (1 hour before and 2 hours after), formatted as bullet points in 12-hour format with AM/PM. Include the current time zone in parentheses.

Be clear, concise, and professional. Use bullet points for both sections.
`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating AI content:", error);
    return `
      - Review the agenda and prepare any relevant materials.
      - Ensure a stable internet connection for the meeting.
      - Arrive a few minutes early to the meeting.
    `;
  }
}
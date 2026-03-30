import fullImage from './assets/full.png'

// ============================================================
// CONFIGURATION
// ============================================================

// Navigation links shown in the header
export const NAV_LINKS = [
  { label: 'Our Story', href: '#story' },
  { label: 'Demo', href: '#demo' },
  { label: 'Values', href: '#values' },
  { label: 'Schedule', href: '#schedule' },
]

// Hero section content
export const HERO = {
  badge: 'Introducing NithenAI: Metadata Intelligence, Redefined',
  headline: 'Transforming how organizations understand their data',
  description:
    'We believe metadata intelligence should be accessible, private, and actionable. NithenAI empowers teams to unlock insights from their data ecosystem — without compromising security or control.',
}

// Company story section
export const STORY = {
  heading: 'Our Story',
  paragraphs: [
    'NithenAI was founded on a simple observation: organizations are drowning in data, yet starving for understanding. Traditional approaches to metadata management are fragmented, manual, and unable to keep pace with modern data ecosystems.',
    'Our team of data engineers and AI researchers set out to build an intelligent platform that automatically discovers, classifies, and connects metadata across every tool in your stack — giving you a living map of your data landscape.',
    'Today, NithenAI serves teams who demand both deep visibility and uncompromising privacy. Our platform runs where your data lives, ensuring nothing leaves your environment while delivering enterprise-grade intelligence.',
  ],
  image: fullImage,
  imageAlt: 'NithenAI team collaborating',
}

// Values / principles cards
export const VALUES = [
  {
    icon: '🔒',
    title: 'Privacy First',
    description:
      'Your data never leaves your environment. Our architecture ensures complete control and compliance from day one.',
  },
  {
    icon: '🤖',
    title: 'AI-Native Intelligence',
    description:
      'Purpose-built models that understand metadata context, lineage, and relationships across your entire stack.',
  },
  {
    icon: '⚡',
    title: 'Instant Clarity',
    description:
      'From connection to insight in minutes, not months. Automated discovery replaces manual cataloging.',
  },
  {
    icon: '🤝',
    title: 'Team Empowerment',
    description:
      'We build for the people who work with data every day — analysts, engineers, and leaders who need answers fast.',
  },
]

// Team members (used in StorySection right column)
export const TEAM = [
  { name: 'Niten Luthra',     title: 'Founder & CEO', image: fullImage },
  { name: 'Ahmed Elghazi',    title: 'Tech',           image: fullImage },
  { name: 'Vibha Doddipalle', title: 'Marketing',      image: fullImage },
  { name: 'Ishana Datusalia', title: 'Design',         image: fullImage },
]

// Demo video section
// Place your video file in public/ as demo.mp4, or swap url for an external link
export const VIDEO = {
  heading: 'See NithenAI in Action',
  description:
    'Watch a quick walkthrough of how NithenAI discovers, classifies, and connects your metadata automatically.',
  url: '/demo.mp4',
}

export const CALENDLY = {
  heading: 'Schedule a Demo',
  description:
    "Ready to see how NithenAI can transform your data understanding? Book a personalized demo with our team.",
  url: 'https://calendly.com/nithenai/new-meeting?back=1',
}

// Footer content
export const FOOTER = {
  brand: 'NithenAI',
  tagline: 'Metadata intelligence, redefined.',
  links: [
    { label: 'Product', href: '#' },
    { label: 'Security', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Documentation', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  legal: `© ${new Date().getFullYear()} NithenAI. All rights reserved.`,
}

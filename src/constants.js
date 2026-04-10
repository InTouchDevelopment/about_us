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
    'NithenAI was founded on a pattern every experienced investor recognizes in hindsight: someone on the team already knew something was wrong — weeks before it showed up in the numbers. Deals were slipping. Handoffs were fraying. The energy between teams had shifted. But there was no system to surface it.',
    'We built one.',
    'Our team set out to track what financials can\'t: the behavioral signals that precede execution risk. Not surveys. Not content monitoring. Response times, communication patterns, acknowledgment rates — the quiet indicators that, when they drift, reliably predict what happens next in the board deck.',
    'The result is the Connection Health Score: real-time organizational visibility, 4 to 8 weeks before problems reach your portfolio companies\' financials.',
  ],
  image: fullImage,
  imageAlt: 'NithenAI team collaborating',
}

// Values / principles cards
export const VALUES = [
  {
    icon: '🔍',
    title: 'Signal Over Noise',
    description:
      'We track the behavioral patterns that matter — response times, engagement, communication flow — and filter out everything that doesn\'t predict what happens next.',
  },
  {
    icon: '🔒',
    title: 'Privacy Without Compromise',
    description:
      'We see patterns, never content. No messages are read, no conversations monitored. Visibility into organizational health without crossing the line.',
  },
  {
    icon: '⏱️',
    title: 'Early, Not Late',
    description:
      'By the time execution risk shows up in a board deck, the window to act has narrowed. We\'re built to surface what\'s coming 4 to 8 weeks before it hits the financials.',
  },
  {
    icon: '🤝',
    title: 'Built for Investors Who\'ve Seen It Before',
    description:
      'You already know the pattern — someone on the team knew. We built the system that finally makes that signal visible, at scale, across a portfolio.',
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
    'We built an illustrative walkthrough around a fictional Series B company. See exactly what the Connection Health Score was showing — and when an investor would have had enough signal to act.',
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

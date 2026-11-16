/**
 * SINGLE SOURCE OF TRUTH FOR SITE COPY AND DEMO CONTACT DETAILS.
 * All sample values below are intentionally illustrative and are NOT verified.
 * Switch demoMode to false only after verifying the company's real contact details.
 * Contact details are informational only; demoMode labels unverified samples.
 */
export const company = {
  name: 'O.S Engineering Nirman Sewa Pvt. Ltd.',
  shortName: 'O.S Engineering',
  country: 'Nepal',
  demoMode: true,
  address: 'New Baneshwor, Kathmandu, Nepal', // SAMPLE LOCATION, not verified office
  phone: '+977 9876543210',                 // SAMPLE NUMBER — do not call
  email: 'os@gmail.com',                     // SAMPLE EMAIL — do not send
  businessHours: 'Sunday – Friday · 9:00 AM – 5:00 PM', // sample schedule
  socials: {
    // Demo links open the platforms, NOT official company profiles.
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
  },
};

export const navigation = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Our projects', href: '#projects' },
  { title: 'Achievements', href: '#achievements' },
  { title: 'Team', href: '#team' },
  { title: 'Contact us', href: '#contact' },
];

/** All photos are illustrative, not claimed completed company projects. */
export const projectExamples = [
  {
    category: 'BUILDING CONSTRUCTION',
    title: 'Residential & commercial spaces',
    description: 'Concept example: well-planned buildings for everyday living and work.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=75',
    alt: 'Illustrative photo of modern buildings; not a verified company project',
  },
  {
    category: 'CIVIL & INFRASTRUCTURE',
    title: 'Civil works & site development',
    description: 'Concept example: construction and improvement of essential sites.',
    image: 'https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=900&q=75',
    alt: 'Illustrative construction site photograph; not a verified company project',
  },
  {
    category: 'MATERIALS & EQUIPMENT',
    title: 'Construction supply support',
    description: 'Concept example: materials and equipment needed to move work forward.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=75',
    alt: 'Illustrative construction equipment photograph; not a verified company project',
  },
];


/** Timeline and team content intentionally use placeholders until verified details are provided. */
export const achievements = [
  { year: '01', title: 'Company beginnings', detail: 'Established date and founding story to be added after confirmation.' },
  { year: '02', title: 'Building the practice', detail: 'Verified company milestones and capabilities can be recorded here.' },
  { year: '03', title: 'Project milestones', detail: 'Completed and ongoing project milestones will be listed here when confirmed.' },
];

export const team = [
  { role: 'Managing Director', name: 'Balkrishna Shrestha', detail: 'Company leadership' },
];

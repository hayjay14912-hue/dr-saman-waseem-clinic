import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Announcement, Footer, Nav, WhatsApp } from '@/components/SiteChrome';
import { clinic } from '@/lib/data';

const pages: Record<string, { eyebrow: string, title: string, copy: string }> = {
  about: { eyebrow: 'About DermaBliss', title: 'Care designed around you.', copy: 'DermaBliss brings a considered, consultation-first approach to aesthetic medicine in Islamabad. Every recommended treatment begins with a personal assessment and an honest conversation about suitability, outcomes and comfort.' },
  results: { eyebrow: 'Real patient journeys', title: 'Natural-looking results.', copy: 'Our consent-approved patient gallery is being prepared for this website. In the meantime, visit Dr. Saman’s Instagram to see current work and clinic updates.' },
  reviews: { eyebrow: 'Patient experience', title: 'Your experience matters.', copy: 'Verified patient reviews will be presented here once the clinic’s preferred review source is connected.' },
  faqs: { eyebrow: 'Frequently asked questions', title: 'Clarity before every step.', copy: 'We believe that an informed consultation is the beginning of good care. Speak to the clinic team if you have a treatment-specific question.' },
  contact: { eyebrow: 'Contact DermaBliss', title: 'Start with a conversation.', copy: `${clinic.address}. Call ${clinic.phoneDisplay} or request a consultation through WhatsApp.` },
  privacy: { eyebrow: 'Privacy', title: 'Your privacy matters.', copy: 'A clinic-approved privacy policy will be published here before the website goes live.' },
  terms: { eyebrow: 'Website terms', title: 'Information with care.', copy: 'Website information is general in nature and never replaces an individual medical consultation. Clinic-approved full terms will be published before launch.' },
};

export function generateStaticParams() { return Object.keys(pages).map((page) => ({ page })); }

export default function GenericPage({ params }: { params: { page: string } }) {
  const content = pages[params.page];
  if (!content) notFound();
  return <><Announcement/><Nav/><main className="standard-page"><div className="shell"><p className="section-eyebrow">{content.eyebrow}</p><h1>{content.title}</h1><p>{content.copy}</p><Link className="button button-dark" href="/#contact">Book a consultation <span>↗</span></Link></div></main><Footer/><WhatsApp/></>;
}

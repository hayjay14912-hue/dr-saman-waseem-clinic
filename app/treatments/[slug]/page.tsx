import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Announcement, Footer, Nav, WhatsApp } from '@/components/SiteChrome';
import { clinic, treatments } from '@/lib/data';

export function generateStaticParams() { return treatments.map((t) => ({ slug: t.slug })); }

export default function TreatmentPage({ params }: { params: { slug: string } }) {
  const treatment = treatments.find((t) => t.slug === params.slug);
  if (!treatment) notFound();
  const bookingLink = `https://wa.me/${clinic.phoneE164}?text=${encodeURIComponent(`Hello, I'd like to enquire about ${treatment.name}.`)}`;
  return <><Announcement/><Nav/><main className="treatment-page"><section className="treatment-hero"><div className="shell"><Link className="back-link" href="/#treatments">← All treatments</Link><p className="section-eyebrow">{treatment.eyebrow}</p><h1>{treatment.name}</h1><p>{treatment.summary}</p><a className="button button-dark" href={bookingLink}>Book consultation <span>↗</span></a></div></section><section className="treatment-details"><div className="shell"><p className="section-eyebrow">Your treatment, explained</p><div className="treatment-detail-grid">{[['A considered choice', 'Treatment suitability is always assessed during a personal consultation. We discuss your skin, concerns, health history and expectations before recommending a way forward.'], ['Sessions and recovery', 'Your recommended course and expected downtime depend on the treatment and your individual needs. Clear guidance is provided before you decide to proceed.'], ['Aftercare', 'You will receive treatment-specific aftercare instructions and know exactly how to contact the clinic team if you need support.'], ['Important to know', 'Every aesthetic treatment has potential risks and benefits. Results vary between individuals and cannot be guaranteed.']].map(([title, copy]) => <article key={title}><h2>{title}</h2><p>{copy}</p></article>)}</div></div></section></main><Footer/><WhatsApp/></>;
}

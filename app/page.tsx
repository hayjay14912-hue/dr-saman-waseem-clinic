import { Announcement, Footer, Nav, WhatsApp } from '@/components/SiteChrome';
import { About, Booking, FAQ, GoogleReviews, Hero, Intro, Reels, Results, ServiceFinder, SocialProof, Treatments, Visit } from '@/components/HomeClient';

export default function Home() {
  const jsonLd = { '@context': 'https://schema.org', '@type': 'MedicalBusiness', name: 'DermaBliss by Dr. Saman Waseem', address: { '@type': 'PostalAddress', streetAddress: 'Pakland Trade Center, Jinnah Super Market', addressLocality: 'Islamabad', addressCountry: 'PK' }, telephone: '+923028866556', description: 'Aesthetic medicine and skin rejuvenation clinic in Islamabad.' };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}/><Announcement/><Nav/><main><Hero/><Reels/><Intro/><SocialProof/><ServiceFinder/><Treatments/><About/><Results/><GoogleReviews/><Visit/><FAQ/><Booking/></main><Footer/><WhatsApp/></>;
}

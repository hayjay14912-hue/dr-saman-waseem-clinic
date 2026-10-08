import { googleReviewSnapshot } from './google-reviews';

export const clinic = {
  name: 'DermaBliss',
  doctor: 'Dr. Saman Waseem',
  city: 'Islamabad, Pakistan',
  phoneDisplay: '+92 302 886 6556',
  phoneE164: '923028866556',
  address: 'Shop 8–13, Lower Ground Floor, Pakland Trade Center, Jinnah Super Market, Islamabad',
  hours: 'Appointments available by prior confirmation',
  instagram: 'https://www.instagram.com/dr.samanwaseem/?hl=en',
};

export const treatments = [
  { slug: 'laser-skin-care', name: 'Laser skin care', eyebrow: 'Skin', summary: 'Targeted laser-led plans for selected concerns, after a clinical assessment.' },
  { slug: 'injectables', name: 'Botox & fillers', eyebrow: 'Injectables', summary: 'Balanced, consultation-led treatments that respect your natural features.' },
  { slug: 'thread-lift', name: 'Thread lifting', eyebrow: 'Rejuvenation', summary: 'A considered option for selected patients seeking gentle definition and lift.' },
  { slug: 'skin-rejuvenation', name: 'Skin rejuvenation', eyebrow: 'Skin', summary: 'Texture, tone and luminosity plans chosen for your individual skin goals.' },
  { slug: 'scalp-hair-care', name: 'Scalp & hair care', eyebrow: 'Hair', summary: 'Clinician-led options for scalp and hair concerns, tailored after assessment.' },
  { slug: 'exosome-therapy', name: 'Exosome therapy', eyebrow: 'Regenerative', summary: 'Advanced regenerative care discussed only where appropriate for you.' },
];

export const serviceGroups = [
  { title: 'Skin', items: ['Laser skin care', 'Skin rejuvenation', 'Acne and texture care'] },
  { title: 'Injectables', items: ['Botox', 'Dermal fillers', 'Thread lifting'] },
  { title: 'Hair & scalp', items: ['Scalp assessment', 'Hair restoration support', 'Regenerative options'] },
];

export const faqs = [
  ['How do I know which treatment is right for me?', 'Every treatment begins with a consultation. Your concerns, skin, medical history and expectations are discussed before a plan is recommended.'],
  ['Will I have downtime?', 'Downtime varies by treatment. We will explain the expected recovery, aftercare and when it is appropriate to return to everyday activities before you proceed.'],
  ['Are treatments suitable for everyone?', 'No. Suitability, possible risks and alternatives are always assessed individually during consultation.'],
  ['How do I book an appointment?', 'You can call, send a WhatsApp message or submit an appointment request. The clinic team will confirm available times with you.'],
];

export const proofMetrics = [
  { value: 20, suffix: '+', label: 'Years in skin & hair care' },
  { value: 118, suffix: 'K', label: 'Instagram followers', href: 'https://www.instagram.com/dr.samanwaseem/?hl=en' },
  { value: googleReviewSnapshot.userRatingCount, suffix: '', label: 'Google patient reviews', href: googleReviewSnapshot.googleMapsUri },
  { value: 1, suffix: ':1', label: 'Personal consultation approach' },
];

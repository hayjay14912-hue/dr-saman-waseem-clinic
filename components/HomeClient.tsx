'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { clinic, faqs, proofMetrics, serviceGroups, treatments } from '@/lib/data';
import { googleReviewSnapshot } from '@/lib/google-reviews';
import { treatmentMedia } from '@/lib/treatment-media';

const bookingLink = `https://wa.me/${clinic.phoneE164}?text=${encodeURIComponent("Hello, I'd like to book a consultation with Dr. Saman Waseem.")}`;
const reels = [
  { src: '/media/reels/dr-saman-reel-01.mp4', poster: '/media/results/treatment-result-01.jpeg', label: 'Dr. Saman Waseem clinic reel 01' },
  { src: '/media/reels/dr-saman-reel-02.mp4', poster: '/media/results/treatment-result-02.jpeg', label: 'Dr. Saman Waseem clinic reel 02' },
  { src: '/media/reels/dr-saman-reel-03.mp4', poster: '/media/results/treatment-result-03.jpeg', label: 'Dr. Saman Waseem clinic reel 03' },
  { src: '/media/reels/dr-saman-reel-04.mp4', poster: '/media/results/treatment-result-04.jpeg', label: 'Dr. Saman Waseem clinic reel 04' },
];

const treatmentResults = Array.from({ length: 8 }, (_, index) => ({
  src: `/media/results/treatment-result-${String(index + 1).padStart(2, '0')}.jpeg`,
  alt: `Dr. Saman Waseem treatment result ${index + 1}`,
}));

export function Hero() {
  return <section id="home" className="hero"><Image priority fill sizes="100vw" className="hero-image" src="/clinic-hero.png" alt="Warm and serene DermaBliss clinic interior"/><div className="hero-overlay"/><div className="shell hero-content"><p className="hero-kicker">DermaBliss · Islamabad</p><h1>Beautiful skin,<br/><i>considered.</i></h1><p>A personal approach to skin health and aesthetic medicine, led by Dr. Saman Waseem.</p><div className="hero-actions"><a className="button button-light" href={bookingLink}>Book consultation <span>↗</span></a><a className="text-link on-dark" href="#treatments">Explore treatments <span>↓</span></a></div></div><div className="hero-bottom shell"><span>Consultation-first care</span><span>Scroll to discover <b>↓</b></span></div></section>;
}

export function Reels() {
  const autoplayTrack = [...reels, ...reels];
  return <section className="reels" aria-labelledby="reels-title"><div className="shell"><div className="reels-heading"><div><p className="section-eyebrow">From the clinic</p><h2 id="reels-title">Care, in <i>motion.</i></h2></div><p>Clinic reels, playing continuously.</p></div></div><div className="reel-window" aria-label="Continuously playing clinic reel gallery"><div className="reel-track">{autoplayTrack.map((reel, index) => <article className="reel" aria-hidden={index >= reels.length} key={`${reel.src}-${index}`}><video autoPlay loop muted playsInline preload="metadata" poster={reel.poster} tabIndex={-1} aria-label={reel.label}><source src={reel.src} type="video/mp4"/></video><span>DermaBliss · Islamabad</span></article>)}</div></div></section>;
}

export function Intro() {
  return <section className="intro section"><div className="shell intro-grid"><p className="section-eyebrow">A thoughtful approach</p><div><h2>Refinement that still feels <i>like you.</i></h2><p className="intro-copy">At DermaBliss, every treatment begins with listening. We take time to understand your concerns, assess what is appropriate and create a plan that respects your features, comfort and pace.</p><Link className="text-link" href="#about">Meet Dr. Saman <span>↗</span></Link></div></div></section>;
}

function CountUp({ value, suffix, active }: { value: number, suffix: string, active: boolean }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const start = performance.now();
    const duration = 1450;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);
  return <><span className="counter-number">{display.toLocaleString()}</span><span className={`counter-suffix${suffix.includes(':') ? ' counter-suffix-ratio' : ''}`}>{suffix}</span></>;
}

export function SocialProof() {
  const section = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const node = section.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } }, { threshold: 0.28 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <section className="social-proof" ref={section}><div className="shell"><div className="proof-heading"><div><p className="section-eyebrow">A trusted aesthetic practice</p><h2>Experience that<br/><i>shows.</i></h2></div><div><p>Thoughtful advice, aesthetic expertise and a consultation process that puts your skin first.</p><a className="button button-dark" href={bookingLink}>Book consultation <span>↗</span></a></div></div><div className="metric-grid">{proofMetrics.map((metric) => { const content = <><strong><CountUp value={metric.value} suffix={metric.suffix} active={active}/></strong><span>{metric.label}</span></>; return metric.href ? <a className="metric" href={metric.href} target="_blank" rel="noreferrer" key={metric.label}>{content}<i>↗</i></a> : <article className="metric" key={metric.label}>{content}</article>; })}</div><p className="proof-note">Instagram followers and Google review count captured 8 October 2026. These figures are not live.</p></div></section>;
}

export function ServiceFinder() {
  const groupSlugs = ['skin-rejuvenation', 'injectables', 'scalp-hair-care'];
  return <section className="service-finder"><div className="shell"><div className="section-heading"><div><p className="section-eyebrow">How can we help?</p><h2>Care for every<br/><i>chapter of your skin.</i></h2></div><p>Explore a considered range of aesthetic treatments. Your final plan always follows a personal clinical consultation.</p></div><div className="service-group-grid">{serviceGroups.map((group, index) => <article className={`service-group tone-${index}`} key={group.title}><TreatmentMedia slug={groupSlugs[index]} title={group.title}/><div className="service-group-copy"><span>0{index + 1}</span><h3>{group.title}</h3><ul>{group.items.map((item, itemIndex) => <li key={item}><Link href={`/treatments/${[['laser-skin-care', 'skin-rejuvenation', 'skin-rejuvenation'], ['injectables', 'injectables', 'thread-lift'], ['scalp-hair-care', 'scalp-hair-care', 'exosome-therapy']][index][itemIndex]}`}>{item}<b>↗</b></Link></li>)}</ul></div></article>)}</div></div></section>;
}

function TreatmentMedia({ slug, title }: { slug: string; title: string }) {
  const media = treatmentMedia[slug];
  const video = useRef<HTMLVideoElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const wanted = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  async function play() {
    if (!media.video || failed) return;
    wanted.current = true;
    const node = video.current;
    if (!node) return;
    // Defer downloading procedure footage until the first interaction.
    if (!node.getAttribute('src')) node.src = media.video;
    try {
      await node.play();
      if (wanted.current) setPlaying(true);
      else node.pause();
    } catch { setPlaying(false); }
  }
  function pause() {
    wanted.current = false;
    video.current?.pause();
    setPlaying(false);
  }
  useEffect(() => {
    const node = frame.current;
    if (!node) return;
    // Stop off-screen previews and background playback, including on mobile.
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        wanted.current = false;
        video.current?.pause();
        setPlaying(false);
      }
    });
    const onVisibility = () => {
      if (document.hidden) { wanted.current = false; video.current?.pause(); setPlaying(false); }
    };
    observer.observe(node);
    document.addEventListener('visibilitychange', onVisibility);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', onVisibility); };
  }, []);

  return <div ref={frame} className={`treatment-media${playing && loaded ? ' is-playing' : ''}${media.video && !failed ? ' has-video' : ''}`} onPointerEnter={(event) => {
    if (event.pointerType === 'mouse' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) void play();
  }} onPointerLeave={(event) => { if (event.pointerType === 'mouse') pause(); }}>
    <Image fill sizes="(max-width: 680px) 100vw, 33vw" src={media.image} alt={media.alt}/>
    {media.video && <video ref={video} muted loop playsInline preload="none" aria-label={`${title} procedure preview`} onLoadedData={() => setLoaded(true)} onError={() => { setFailed(true); pause(); }}/>} 
    <span className="media-caption">{playing && loaded ? 'From our clinic · muted preview' : media.caption}</span>
    {media.video && !failed ? <button className="media-play" type="button" aria-label={`${playing ? 'Pause' : 'Play'} ${title} preview`} aria-pressed={playing} onClick={() => { if (wanted.current) pause(); else void play(); }} onFocus={() => { if (window.matchMedia('(hover: hover)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) void play(); }} onBlur={pause}><span aria-hidden="true">{playing ? 'Ⅱ' : '▷'}</span><span>{playing ? 'Pause film' : 'Watch film'}</span></button> : <span className="media-coming-soon"><span aria-hidden="true">▷</span>Procedure film coming soon</span>}
  </div>;
}

export function Treatments() {
  return <section id="treatments" className="section treatments"><div className="shell"><div className="section-heading"><div><p className="section-eyebrow">Featured treatments</p><h2>Personalised care,<br/><i>beautifully precise.</i></h2></div><a className="text-link" href="#contact">Find your treatment <span>↗</span></a></div><div className="treatment-grid">{treatments.map((t, index) => <article className="treatment-card" key={t.slug}><TreatmentMedia slug={t.slug} title={t.name}/><Link className="treatment-card-copy" href={`/treatments/${t.slug}`}><div className="treatment-card-meta"><small>{t.eyebrow}</small><span>0{index + 1}</span></div><h3>{t.name}</h3><p>{t.summary}</p><b>Explore treatment <i>↗</i></b></Link></article>)}</div><p className="treatment-media-note">Real clinic images. Procedure films are on their way. Treatment suitability and results vary; your plan begins with a consultation.</p></div></section>;
}

export function About() {
  return <section id="about" className="about"><div className="shell about-grid"><div className="doctor-frame"><Image fill sizes="(max-width: 768px) 100vw, 50vw" src="/dr-saman-waseem-portrait-v2.jpg" className="doctor-image" alt="Dr. Saman Waseem at DermaBliss"/></div><div className="about-copy"><p className="section-eyebrow">Meet your doctor</p><h2>Dr. Saman<br/><i>Waseem</i></h2><p>Dr. Saman Waseem is a board-certified aesthetic physician, international speaker and founder of DermaBliss. Her approach balances clinical assessment with a belief that good aesthetic medicine should look natural, feel personal and evolve with every patient.</p><div className="credential-grid"><div><b>20+ years</b><span>Experience in skin and hair concerns</span></div><div><b>Board certified</b><span>Aesthetic physician</span></div><div><b>International speaker</b><span>Committed to continued learning</span></div></div><a className="button button-outline" href={bookingLink}>Arrange a consultation <span>↗</span></a></div></div></section>;
}

export function Results() {
  return <section id="results" className="results section"><div className="shell"><div className="results-intro"><div><p className="section-eyebrow">Treatment results</p><h2>Results that feel<br/><i>like you.</i></h2></div><p>Images supplied by the clinic. Every treatment is planned individually; outcomes and recovery vary between patients.</p></div><div className="result-gallery">{treatmentResults.map((result, index) => <figure className={`result-tile tile-${index + 1}`} key={result.src}><Image fill sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 25vw" src={result.src} alt={result.alt}/><figcaption>Patient result <span>0{index + 1}</span></figcaption></figure>)}</div></div></section>;
}

export function GoogleReviews() {
  const [visible, setVisible] = useState(6);
  const data = googleReviewSnapshot;
  const reviews = data.reviews.slice(0, visible);
  return <section id="reviews" className="google-reviews section"><div className="shell"><div className="reviews-intro"><div><p className="section-eyebrow">Patient voices · Google reviews</p><h2>Real experiences.<br/><i>In their own words.</i></h2></div><a className="rating-lockup" href={data.googleMapsUri} target="_blank" rel="noreferrer" aria-label={`${data.rating} out of 5 from ${data.userRatingCount} Google reviews, captured ${data.capturedAtLabel}. Read on Google Maps`}><strong>{data.rating.toFixed(1)}</strong><span aria-hidden="true">★★★★★</span><small>{data.userRatingCount.toLocaleString()} reviews on Google ↗</small></a></div><div className="review-grid" id="patient-review-grid">{reviews.map((review) => <article className="review-card" key={review.profileId}><div className="review-card-top"><span className="review-stars" aria-label={`${review.rating} out of 5 stars`}>{'★'.repeat(review.rating)}<span aria-hidden="true">{'☆'.repeat(5 - review.rating)}</span></span><span className="review-source">Google</span></div><blockquote><p>“{review.excerpt}”</p></blockquote><footer><div className="review-avatar" aria-hidden="true">{review.author.split(' ').map(part => part[0]).slice(0, 2).join('')}</div><div><b>{review.author}</b><small>{review.published}</small></div><a href={`https://www.google.com/maps/contrib/${review.profileId}/reviews?hl=en`} target="_blank" rel="noreferrer" aria-label={`View ${review.author}'s original reviews on Google`}>↗</a></footer></article>)}</div><div className="reviews-actions">{visible < data.reviews.length && <button className="button button-outline" aria-controls="patient-review-grid" onClick={() => setVisible(Math.min(visible + 6, data.reviews.length))}>More patient reviews <span>+</span></button>}<a className="text-link" href={data.googleMapsUri} target="_blank" rel="noreferrer">Read all on Google <span>↗</span></a><span className="review-count" role="status">Showing {reviews.length} of {data.reviews.length} excerpts</span></div><p className="reviews-snapshot-note">Review excerpts, original star ratings and the overall Google rating captured {data.capturedAtLabel}. This is a local snapshot, not a live feed. Individual experiences and treatment outcomes vary.</p></div></section>;
}

export function Visit() {
  const steps = ['Tell us what brings you in', 'Meet with Dr. Saman', 'Receive a tailored plan', 'Move forward with confidence'];
  return <section className="visit"><div className="shell"><div className="visit-heading"><p className="section-eyebrow">Your first visit</p><h2>A considered<br/><i>way forward.</i></h2></div><div className="visit-steps">{steps.map((step, index) => <article key={step}><span>0{index + 1}</span><h3>{step}</h3></article>)}</div></div></section>;
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return <section id="faqs" className="section faq"><div className="shell faq-grid"><div><p className="section-eyebrow">Questions, answered</p><h2>Everything begins<br/><i>with clarity.</i></h2></div><div>{faqs.map(([question, answer], index) => <article className="faq-item" key={question}><button onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index}><span>{question}</span><b>{open === index ? '−' : '+'}</b></button>{open === index && <p>{answer}</p>}</article>)}</div></div></section>;
}

export function Booking() {
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  async function submit(event: React.FormEvent<HTMLFormElement>) { event.preventDefault(); setState('loading'); const form = event.currentTarget; const response = await fetch('/api/booking', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Object.fromEntries(new FormData(form))) }); setState(response.ok ? 'success' : 'error'); if (response.ok) form.reset(); }
  return <section id="contact" className="booking"><div className="shell booking-grid"><div><p className="section-eyebrow on-dark-eyebrow">Begin your journey</p><h2>Let’s talk<br/><i>skin.</i></h2><p>{clinic.address}</p><a href={`tel:+${clinic.phoneE164}`}>{clinic.phoneDisplay}</a><p>{clinic.hours}</p><a className="booking-instagram" href={clinic.instagram} target="_blank" rel="noreferrer">Follow on Instagram <span>↗</span></a></div><form onSubmit={submit}><Field label="Your name" name="name"/><Field label="Phone number" name="phone" type="tel"/><label>Interested in<select name="treatment" required defaultValue=""><option value="" disabled>Select a treatment</option>{treatments.map((t) => <option value={t.name} key={t.slug}>{t.name}</option>)}</select></label><Field label="Preferred date and time" name="dateTime" type="datetime-local"/><label>Anything you&apos;d like us to know?<textarea name="message" rows={2}/></label><button className="button button-light" disabled={state === 'loading'}>{state === 'loading' ? 'Sending…' : 'Request appointment'} <span>↗</span></button>{state === 'success' && <p className="form-status success">Thank you. The clinic will be in touch shortly.</p>}{state === 'error' && <p className="form-status error">Please check the required fields and try again.</p>}</form></div></section>;
}

function Field({ label, name, type = 'text' }: { label: string, name: string, type?: string }) { return <label>{label}<input name={name} type={type} required/></label>; }

'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { clinic, treatments } from '@/lib/data';

const links = [
  ['Home', '/#home'],
  ['About', '/#about'],
  ['Results', '/#results'],
  ['FAQ', '/#faqs'],
  ['Contact', '/#contact'],
];

const bookingLink = `https://wa.me/${clinic.phoneE164}?text=${encodeURIComponent("Hello, I'd like to book a consultation with Dr. Saman Waseem.")}`;

export function Announcement() {
  return <div className="announcement">Consultations are by appointment · <a href={`tel:+${clinic.phoneE164}`}>{clinic.phoneDisplay}</a></div>;
}

export function Brand() {
  return <Link href="/#home" className="brand" aria-label="DermaBliss home"><span>Derma</span><em>Bliss</em><small>by Dr. Saman Waseem</small></Link>;
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const listener = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', listener, { passive: true });
    return () => window.removeEventListener('scroll', listener);
  }, []);
  return <>
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="shell nav" aria-label="Main navigation">
        <Brand />
        <div className="nav-links">
          <div className="nav-treatment-menu"><button type="button">Treatments <span>⌄</span></button><div className="treatment-popover">{treatments.map((t) => <Link href={`/treatments/${t.slug}`} key={t.slug}><small>{t.eyebrow}</small>{t.name}</Link>)}</div></div>
          {links.slice(1).map(([label, href]) => <Link href={href} key={label}>{label}</Link>)}
        </div>
        <a className="button button-dark nav-cta" href={bookingLink}>Book consultation <span>↗</span></a>
        <button className="menu-button" type="button" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(!open)}><i></i><i></i></button>
      </nav>
    </header>
    <aside className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <div className="shell"><div className="mobile-menu-top"><Brand /><button type="button" onClick={() => setOpen(false)} aria-label="Close menu">×</button></div>{links.map(([label, href]) => <Link onClick={() => setOpen(false)} href={href} key={label}>{label}</Link>)}<Link onClick={() => setOpen(false)} href="/#treatments">Treatments</Link><a className="button button-light" href={bookingLink}>Book consultation <span>↗</span></a></div>
    </aside>
  </>;
}

export function Footer() {
  return <footer className="footer"><div className="shell footer-grid"><div><Brand /><p className="footer-intro">Thoughtful aesthetic care guided by consultation, safety and a natural-looking approach.</p><a className="footer-instagram" href={clinic.instagram} target="_blank" rel="noreferrer">Instagram <span>↗</span></a></div><FooterList title="Treatments" items={treatments.slice(0, 4).map((t) => [t.name, `/treatments/${t.slug}`])}/><FooterList title="Visit" items={[[clinic.address, 'https://maps.google.com/?q=Pakland+Trade+Center+Islamabad'], [clinic.hours, '/#contact'], [clinic.phoneDisplay, `tel:+${clinic.phoneE164}`]]}/><FooterList title="Explore" items={[["About Dr. Saman", '/#about'], ['Patient results', '/#results'], ['Questions, answered', '/#faqs'], ['Contact', '/#contact']]}/></div><div className="shell footer-bottom"><p>© {new Date().getFullYear()} DermaBliss by Dr. Saman Waseem</p><p>Information on this website does not replace an individual medical consultation.</p></div></footer>;
}

function FooterList({ title, items }: { title: string, items: string[][] }) {
  return <div className="footer-list"><p>{title}</p>{items.map(([name, href]) => <a href={href} key={name}>{name}</a>)}</div>;
}

export function WhatsApp() {
  return <a className="whatsapp" href={bookingLink} aria-label="Book a consultation on WhatsApp"><span>◔</span> Book on WhatsApp</a>;
}

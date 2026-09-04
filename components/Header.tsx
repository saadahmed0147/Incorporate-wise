"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Chevron, Icon } from "./Icons";
import { Logo } from "./Logo";
import { navGroups } from "@/lib/navigation";

export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const close = (event: MouseEvent) => !headerRef.current?.contains(event.target as Node) && setOpen(null);
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const group = navGroups.find(item => item.label === open);
  return <>
    <div className="header-spacer" />
    <header ref={headerRef} className={`site-header${open ? " menu-open" : ""}`}>
      <nav className="nav-shell" aria-label="Main navigation">
        <Logo />
        <div className="desktop-nav">
          {navGroups.slice(0,2).map(item => <button className={open === item.label ? "active" : ""} key={item.label} onClick={() => setOpen(open === item.label ? null : item.label)} aria-expanded={open === item.label}>{item.label}<Chevron open={open === item.label}/></button>)}
          <Link href="/pricing">Pricing</Link>
          {navGroups.slice(2).map(item => <button className={open === item.label ? "active" : ""} key={item.label} onClick={() => setOpen(open === item.label ? null : item.label)} aria-expanded={open === item.label}>{item.label}<Chevron open={open === item.label}/></button>)}
        </div>
        <div className="nav-actions"><Link className="contact-link" href="/contact">Contact Us</Link><Link className="btn btn-dark btn-small" href="/contact#form">Get Started</Link><button className={`hamburger${mobileOpen ? " active" : ""}`} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu" aria-expanded={mobileOpen}><span/><span/></button></div>
      </nav>
      {group && <div className="mega-menu">
        <aside><div className="mega-art" aria-hidden="true">wise</div><p>{group.description}</p></aside>
        <div className="mega-content"><div className="mega-title">{group.label}</div><div className="mega-grid">{group.items.map(item => <Link href={item.href} key={item.href}><Icon name={item.icon}/><span><strong>{item.label}{item.badge && <b>{item.badge}</b>}</strong><small>{item.description}</small></span></Link>)}</div></div>
      </div>}
      {mobileOpen && <div className="mobile-nav">{navGroups.map(item => <details key={item.label}><summary>{item.label}<Chevron/></summary>{item.items.map(link => <Link key={link.href} href={link.href}><strong>{link.label}</strong><small>{link.description}</small></Link>)}</details>)}<Link href="/pricing">Pricing</Link><Link href="/contact">Contact Us</Link></div>}
    </header>
  </>;
}

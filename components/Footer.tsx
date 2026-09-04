import Link from "next/link";
import { Icon } from "./Icons";
import { Logo } from "./Logo";
import { legalLinks, navGroups } from "@/lib/navigation";

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-main page-frame">
      <div className="footer-grid">
        <div className="footer-contact"><p>Contact us</p><div className="contact-card"><Link href="/contact#form"><Icon name="form"/>Fill the form</Link><Link href="/meeting"><Icon name="calendar"/>Schedule a meeting</Link></div><div className="socials" aria-label="Social links"><span>f</span><span>𝕏</span><span>◎</span><span>in</span></div></div>
        {navGroups.map(group => <nav key={group.label} aria-label={group.label}><h3>{group.label}</h3>{group.items.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>)}
      </div>
      <div className="watermark" aria-hidden="true">incorporatewise</div>
      <div className="footer-brand-row"><Logo/><div className="trust-badges"><span className="badge-seal">✓ Verified Filing Partner</span><span className="badge-product">● Business Services</span></div></div>
    </div>
    <div className="footer-lower page-frame">
      <div className="legal-row"><p>© 2026 Incorporate Wise. All rights reserved</p><div>{legalLinks.map(([label,href], index) => <span className="legal-pair" key={href}><Link href={href}>{label}</Link>{index < legalLinks.length - 1 && <i>·</i>}</span>)}</div></div>
      <div className="disclaimer"><h3>Disclaimers and footnotes</h3><p>Incorporate Wise is a software-enabled document filing and compliance support service. Incorporate Wise is not a law firm, government agency, or financial institution, and does not provide legal or financial advice. Use of our services does not create an attorney-client, advisor-client, or fiduciary relationship.</p><p>All information and materials available on this website are for general informational purposes only and should not be relied upon as professional advice.</p></div>
    </div>
  </footer>;
}

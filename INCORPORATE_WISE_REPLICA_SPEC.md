# Incorporate Wise — Clemta Company Formation Page Replica Specification

## 1. Purpose and scope

This document is the implementation source of truth for rebuilding the following page in Next.js:

- Reference: https://clemta.com/usa-company-registration
- Reference contact page: https://clemta.com/contact-us
- Reviewed on: 4 September 2026
- Target brand: **Incorporate Wise**

The build is a high-fidelity replica of the referenced **US Company Formation landing page**, plus the contact/conversion flow required by Incorporate Wise. It is not an instruction to rebuild every page linked from Clemta's navigation. Linked product/service/legal pages are outside the initial implementation scope unless requested later.

Research was performed against the live rendered page at desktop (1440 px) and mobile (390 px), the server-rendered HTML, public stylesheet declarations, page metadata, link inventory, and public image inventory.

## 2. Non-negotiable product changes

Only these intentional differences are allowed:

1. Replace the Clemta brand with **Incorporate Wise** everywhere visible or machine-readable:
   - Header and footer logo/wordmark
   - All body copy occurrences
   - Metadata, Open Graph, Twitter metadata, JSON-LD, alt text, email templates, and copyright
   - Do not leave mixed Clemta/Incorporate Wise branding
2. Remove authentication completely:
   - No Login button in any viewport
   - No login route, login form, auth middleware, session logic, or auth-related footer link
3. Every registration/start CTA redirects to the contact form instead of an external app:
   - `Start Now`
   - `Get Started`
   - Any future `Register`, `Start`, or company-formation purchase CTA
   - Target route: `/contact`
4. Contact form submissions are sent with **Nodemailer**.
5. `Schedule a meeting` obtains its URL from a server-side environment variable. Do not hardcode the meeting link in source.

Although the request describes two changes, removal of Login is treated as part of the stated requirements and is mandatory.

## 3. Brand/content replacement rule

Use the reference copy verbatim except for brand substitutions needed to make it coherent:

- `Clemta` → `Incorporate Wise`
- `Clemta's` → `Incorporate Wise's`
- `© 2026 Clemta` → `© 2026 Incorporate Wise`
- `About Clemta` → `About Incorporate Wise`
- `Clemta Intelligence` should be reviewed before implementation. If this product does not exist for Incorporate Wise, use `Incorporate Wise Intelligence` only if the client confirms that offering exists.

Do not copy Clemta's legal entity statement, certifications, review badges, customer reviews, social links, performance statistics, regulated-partner claims, or trademarked logo as factual Incorporate Wise claims without written client confirmation. Specifically verify ownership/permission for:

- “20,000+ companies formed”
- “170+ countries”
- IRS Certified Acceptance Agent badge and claim
- Product Hunt badge
- G2/Trustpilot/X testimonials and customer names
- “over $1,000,000 in exclusive SaaS deals”
- “This website is operated by Startup Law Consultancy, Inc.”
- Member FDIC/partner-bank disclaimer
- Clemta illustrations, watermark, flags, and other hosted assets

For visual development these items may be represented as clearly marked placeholders. They must not ship as Incorporate Wise claims until approved.

## 4. Exact page anatomy

The section order must remain exactly as follows.

### 4.1 Fixed header

Desktop:

- Full-width fixed header on `#f6f6f6`, subtle bottom border `#ededed`
- Inner maximum width approximately 1308 px
- Height approximately 72 px, with a small outer inset on large screens
- Left: Incorporate Wise wordmark
- Center/left navigation:
  - Product (dropdown)
  - Services (dropdown)
  - Pricing
  - Resources (dropdown)
  - Company (dropdown)
- Right:
  - Contact Us
  - Get Started
- **Login must not appear**
- Get Started is a dark filled rounded button

Mobile:

- Logo on the left
- Keep the registration CTA visible if it fits cleanly
- Mobile menu control on the right for navigation items
- No Login item inside the mobile menu
- Reference switches desktop menus at the `lg` breakpoint (approximately 1024 px)

Dropdown contents:

- Product: Accounting, Invoicing, Taxation, Documents, Incorporate Wise Intelligence
- Services: US Company Formation, EIN Assistance, Business Bank Account Assistance, ITIN Assistance, Federal Tax Support, State Tax Support, Post-Incorporation, Trademark, Amendment to Articles of Organization, Resale Certificate, Certificate of Good Standing, Dissolution, Bookkeeping, Global
- Resources: Blog, Partners, Glossary, Business Tools, Perks, Wall of Love, Affiliates, Events
- Company: About Incorporate Wise, Careers, Contact Us

Initial single-page routing rule:

- Contact Us and all start/register CTAs work and go to `/contact`
- Schedule a meeting works and goes through `/meeting`
- Links for unimplemented internal pages should be kept in a central config and either disabled accessibly or mapped only after those routes are built; do not silently send users to Clemta.

### 4.2 Hero — “US Company Formation”

Desktop layout is a balanced two-column hero inside the bordered page container. Mobile stacks copy first and artwork second.

Copy:

- Eyebrow: `Company Formation`
- H1: `US Company Formation`
- Body: `Form your US LLC or C Corporation from anywhere in the world. Incorporate Wise helps international founders manage company registration, EIN applications, post-formation documents, compliance, and business banking support, all through one platform.`
- Primary CTA: `Start Now` → `/contact`
- Secondary CTA: `Contact Us` → `/contact`

Visual:

- Large, very pale blue/purple abstract background bloom
- Floating white incorporation-certificate card with soft shadow
- Secondary blurred card behind it
- Card mock copy includes ACME LABS, INC., Delaware · C-Corp, formation checklist, and filed date
- Reference asset path: `/img/service-hero_us-company-formation.webp`

### 4.3 “Everything You Need” introduction

- Centered dotted-pill eyebrow: `Everything You Need`
- H2: `Form Your US Company from Anywhere`
- Body: `You don't need to be a US resident to start a US business. Form your LLC or C Corporation remotely and access the tools and support you need to operate confidently from anywhere.`
- Pale dotted globe/map texture behind the centered heading

### 4.4 Seven service cards

Desktop: three-column grid; the final row contains the seventh card and two intentionally empty/fading grid cells. Mobile: single-column cards.

Cards, in order:

1. **Form Your Company and Get an EIN**  
   `Establish your LLC or C Corporation and obtain the federal tax ID needed to operate your business.`
2. **Open a US Business Bank Account**  
   `We complete the business bank account application on your behalf, so you can receive payments and manage company expenses.`
3. **Set Up Your Ownership and Governance**  
   `Put the right internal documents in place to define ownership, management, and decision-making.`
4. **Stay Compliant with State Requirements**  
   `Appoint a registered agent to receive official legal and government correspondence on your behalf.`
5. **Receive Your US Business Mail**  
   `Use a US business address and access your incoming mail securely through your dashboard.`
6. **Create Professional Invoices**  
   `Issue invoices, automate numbering, track records, and keep your business documents organized through your dashboard.`
7. **Keep Your Finances Organized**  
   `Use bookkeeping tools to record income and expenses, store supporting documents, and prepare for tax season.`

Card treatment:

- White cards, thin neutral border, 12–14 px corners
- Soft elevation plus a subtle purple glow between rows
- Purple outline icon at top left
- Roughly 20–24 px internal padding

### 4.5 Company structure comparison

- Centered H2: `Deciding on Company Structure`
- Body: `Choosing between an LLC and C-Corp affects your business's future. Each has unique benefits; understanding them helps align your choice with your goals. Determine which is right for your business.`
- Two equal desktop columns separated by a faint vertical rule; stacked on mobile
- Oversized pale background labels `LLC` and `C-Corp`
- Square line-art icon tile centered above each title

Left:

- Label: `LLC`
- Title: `Limited Liability Company`
- Flexible management and taxation
- Straightforward with less bureaucracy
- Great for small businesses, e-commerce sellers and freelancers

Right:

- Label: `C-Corp`
- Title: `C Corporation`
- Ready to access venture capital
- Potential for an initial public offering
- Great for fundraising startups and complex company structures

Bottom centered line:

- `Can't decide? Let us help you! Contact us`
- `Contact us` → `/contact`

### 4.6 State comparison

Intro:

- Pill: `Choose a State`
- H2: `Wyoming vs. Delaware: Which to Choose?`
- Body: `State selection can shape your business. With Wyoming's cost-effectiveness and Delaware's investor appeal, choose wisely to set your business on its path. Assess each state's benefits to find where your company fits best.`
- Dotted globe artwork behind the intro and comparison
- Reference background: `/img/services_state-comparison-bg.webp`

Wyoming column:

- Wyoming flag
- Quick company setup
- Flexible management with fewer formalities
- Low maintenance costs
- No franchise tax
- No personal or corporate income tax

Delaware column:

- Delaware flag
- Investor confidence as a global startup hub
- Flexible corporate structure
- Established, entrepreneur-friendly legal landscape
- Privacy protection
- No sales tax

Other-state strip:

- Title: `Other States That Fit Your Needs`
- Body: `While Wyoming and Delaware offer notable business advantages, other states may also provide benefits.`
- Horizontal flag rail to the right on desktop
- Horizontally scrollable/clipped flag rail on mobile, matching the reference rhythm
- Use the ordered flag assets listed in section 9

### 4.7 Four-step process

- Pill: `The Process`
- H2: `The Process Explained`
- Body: `With a team of committed experts, we ensure that your USA company registration will be a stress-free experience. We handle all the complicated paperwork, while you focus on your business.`
- Pale dotted globe behind the intro

Desktop uses four equal columns with icon/line connectors. Mobile stacks steps vertically with generous whitespace and horizontal separators.

1. Step 1 — **Choose a Company Type**  
   `LLC or C-Corp? Align your choice with your goals.`
2. Step 2 — **Select your company state**  
   `Delaware or Wyoming? Find your company's best fit.`
3. Step 3 — **Easy Form, Easier Process**  
   `Just provide the details; Incorporate Wise manages the rest.`
4. Step 4 — **Documents Delivered Fast**  
   `Claim your formation docs; the journey begins.`

### 4.8 FAQ

Desktop is a two-column block: heading/copy on the left and accordion on the right. Mobile centers the heading above a full-width accordion.

- Pill: `All Your Business Needs in One Place`
- H2 line 1: `Got Questions?`
- H2 line 2: `We got the answers`
- Body: `Everything you need to know about the product and plans. Can't find the answer you're looking for? Please contact us.`

Accordion questions and exact answers:

1. **Can I form a company if I am not a US citizen or resident?**  
   `Definitely! So far we have helped more than 20,000 companies for founders in over 170 countries - and you could be next. Specific requirements may apply depending on your country of residence, chosen state, and business structure, and we are always here to guide you along the way.`
2. **What information do I need to provide to get started?**  
   `No documents are needed upfront. We take you through a short form to collect your new company's details, and Incorporate Wise handles every step from there. After your company is formed, you'll need a passport to open a bank account, in line with KYC requirements.`
3. **How long does the company formation process take?**  
   `Formation typically takes between 1 and 5 business days, depending on the state you choose and your business structure. Expedited options may be available for an additional state fee.`
4. **What is a registered agent, and why do I need one?**  
   `A registered agent is a designated individual or entity responsible for receiving and forwarding legal documents and correspondence on behalf of your company. Most states require one to keep your business compliant with state regulations.`
5. **Can Incorporate Wise help me after my company is formed?**  
   `Of course. Incorporate Wise supports your business after formation with bank account applications, post-incorporation filings, yearly bookkeeping and tax assistance, plus access to over $1,000,000 in exclusive SaaS deals.`

Interaction:

- Closed by default
- Clicking a row toggles its answer and rotates/changes the chevron
- Animate height for about 280–300 ms and opacity for about 200 ms
- Keyboard-operable buttons with `aria-expanded` and associated panels

### 4.9 Testimonials

- Pill: `All Your Business Needs in One Place`
- H2: `Trusted Worldwide: Serving Across 170+ Countries`
- Intro: `Read success stories from small business owners to enterprises! Visit our clients' experiences below and discover how Incorporate Wise can help you turn your dream business into reality.`
- Soft pastel dotted/gradient background; reference asset `/img/testimonial-bg.webp`

Desktop masonry-like layout:

- Large featured card occupying the full left height
- Four smaller cards in a 2 × 2 grid on the right
- Thin borders, rounded corners, and soft shadow
- Featured card has a peach-to-blue glow near the bottom

Mobile:

- All five cards stack vertically
- Preserve order: Talal, Paul, Amr, Fatih, Sultan

Copy:

- **Talal Ahmed Raza — Fashion Retailer**  
  `I have always received an immediate response. The quick response time from Incorporate Wise has truly made a difference in my interactions with the company. From assistance with company formation to the seamless process of opening a bank account, my overall experience has been great. Incorporate Wise's dedication to efficient and responsive service has truly stood out to me.`
- **Paul M. — Small Business Owner**  
  `I had a tax penalty due to unfinished post incorporation process & income taxes. Incorporate Wise helped me to get my 83b form submitted and finish my post incorporation. Now with almost $400 I saved almost $10k in such a short time.`
- **Amr Maged — Amazon FBA**  
  `Incorporate Wise is excellent. All responses to my emails were quick, professional and to the point. When I needed arabic speaker to explain my query in deep, i immedialely got very good candidate.`  
  Show the green five-star `Excellent` treatment only if use is approved.
- **Fatih Kadir Akın — Creator**  
  `Incorporate Wise was very supportive during the establishment process of the US company I set up for my e-books. They have organized every step so well that you're left with no question marks in your mind. They deserve every user and more!`
- **Sultan Al Suwaidi — Ecommerce Founder**  
  `I recently used Incorporate Wise to set up my business in the United States, and I was very impressed with the service. The process was smooth and easy, and the customer support team was very helpful and responsive.`

### 4.10 Dark CTA panel

- Large rounded dark navy panel inside the main container
- Blue aurora/ring background, reference asset `/img/footer_cta-bg.webp`
- Centered white H2: `Start Your Journey With Us`
- Body: `Take your business to the next level with our team of experts, who will accompany you along the way. You can focus on your passion while we handle all the complicated paperwork.`
- Primary: `Get Started` → `/contact`
- Secondary: `Contact Us` → `/contact`

### 4.11 Footer

Desktop:

- Five-column upper area: contact module plus Product, Services, Resources, Company
- Large pale Incorporate Wise watermark underneath
- Bottom brand/certification/language row
- Copyright/legal links row
- Disclaimer text block

Mobile:

- All groups stack vertically with large vertical spacing
- Watermark remains oversized and partially cropped by the viewport
- Brand/badge/language group wraps
- Legal links wrap across lines

Contact module:

- Heading: `Contact us`
- Small white two-row card:
  - `Fill the form` → `/contact#form`
  - `Schedule a meeting` → `/meeting`
- Social icon row: Facebook, X/Twitter, Instagram, LinkedIn. Use Incorporate Wise URLs only; omit any unavailable network instead of linking to Clemta.

Footer columns repeat the header inventories from section 4.1.

Bottom content:

- `© 2026 Incorporate Wise. All rights reserved`
- Privacy Policy
- Terms of Use
- Refund and Cancellation Policy
- Cookie Policy
- `Disclaimers and footnotes`
- The final legal paragraphs must be supplied/approved for Incorporate Wise; do not copy Startup Law Consultancy, Inc. or banking claims by default.

The reference also shows an optional cookie-consent bar fixed to the bottom, with privacy copy and reject/customize/accept controls. Implement it only when real analytics/non-essential cookies are introduced, and persist the choice.

## 5. Visual design system

### 5.1 Typography

- Primary font: **Inter Tight**, variable weight 100–900
- Fallback sequence: BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, Noto Sans, sans-serif
- Body weight: 400
- Navigation/body: typically 14–16 px
- H1 desktop: approximately 42–48 px with tight tracking; mobile approximately 34–38 px
- Major section headings desktop: approximately 30–36 px; mobile approximately 26–30 px
- Cards use 16–18 px titles and 14–16 px supporting copy
- Use tight negative tracking on large headings and compact line heights

### 5.2 Core colors

- Page/header background: `#f6f6f6`
- Primary blue: `#2563eb`
- Main ink: `#111927`
- Body/muted ink: `#4d5761`
- Secondary/legal text: `#6a717d`
- Divider/border: `#ededed`
- Card background: `#ffffff`
- Primary dark CTA/button: near `#071426` / `#111927`
- Service icon purple: approximately `#a855f7`
- Success green in hero mock: approximately `#16a34a`
- Dark mode background present in the source stylesheet: `#070a0f`, but dark mode is not necessary unless explicitly requested.

### 5.3 Geometry and spacing

- Main bordered content width: approximately 1188–1190 px (`74.25rem`)
- Header inner maximum: approximately 1308 px
- Main content has subtle left/right borders on desktop
- Section vertical spacing is deliberately generous, commonly 96–160 px
- Standard card radius: 12–14 px
- CTA panel radius: approximately 14–16 px
- Button radius: approximately 8–10 px
- Pills are fully rounded with white background, faint border/shadow, blue dot, blue text
- Reference uses a 4 px base spacing scale

### 5.4 Shadows and gradients

- Standard cards use a very light 1 px neutral outline plus soft low-opacity drop shadow
- Featured testimonial reference shadow:
  - `0 20px 20px -10px rgba(23,23,23,.04)`
  - `0 10px 10px -5px rgba(23,23,23,.04)`
  - `0 6px 6px -3px rgba(23,23,23,.04)`
  - `0 3px 3px -1.5px rgba(23,23,23,.04)`
  - `0 1px 1px -.5px rgba(23,23,23,.04)`
  - `0 0 0 1px rgba(23,23,23,.16)`
- Featured card glow:
  - `radial-gradient(80% 90% at 25% 100%, rgba(254,215,170,.41) 0, transparent 70%)`
  - `radial-gradient(80% 90% at 75% 100%, rgba(37,99,235,.12) 0, transparent 70%)`

## 6. Responsive behavior

Minimum verification widths:

- 1440 px desktop
- 1280 px laptop
- 1024 px tablet/desktop transition
- 768 px tablet
- 390 px mobile
- 360 px small mobile

Rules:

- Desktop navigation is hidden below approximately 1024 px and replaced by a mobile menu.
- Hero changes from two columns to stacked content.
- Service grid changes from three columns to one.
- LLC/C-Corp and Wyoming/Delaware comparisons stack.
- Four-step process stacks.
- FAQ changes from side-by-side to stacked.
- Testimonial masonry becomes a single-column list.
- Footer columns stack.
- State flags remain a horizontal rail.
- No page-level horizontal scrollbar should ship. The current reference render clips some long content around a 390 px viewport; reproduce the visual structure but constrain copy/cards to the viewport so the implementation remains usable.

## 7. Contact page and conversion behavior

### 7.1 `/contact` page

Match the reference contact-page visual language:

- Same fixed header and footer
- Pale dotted blue backdrop
- Small label: `Contact Us`
- Supporting prompt list:
  - `Which is better for me - LLC or C-Corp?`
  - `Can I do this from outside the US?`
  - `What happens after my company is formed?`
  - `Which plan covers what I actually need?`
- H1: `How would you like to continue?`
- Body: `Choose the best way to connect with our team based on your request.`
- Choice cards:
  - `Fill out a form` — `Tell us what you need. We reply within one business day.`
  - `Book a meeting` — `30 minutes with a formation specialist. Free, no obligation.`
- Do not include Clemta's WhatsApp or email address. Add Incorporate Wise contact details only when supplied.

The registration CTA may go directly to `/contact#form` so the form is immediately visible/focused.

### 7.2 Contact form fields

Required:

- Full name
- Email address
- Country of residence
- What do you need help with? (select)
- Message
- Consent checkbox linking to the privacy policy

Recommended optional fields:

- Phone/WhatsApp number
- Preferred entity: Not sure / LLC / C Corporation
- Preferred state: Not sure / Wyoming / Delaware / Other

Form UX:

- Inline labels and validation
- Server-side validation remains authoritative
- Disable submit and show progress while sending
- On success, show a confirmation without losing the page context
- On failure, retain entered values and show a human-readable retry message
- Add an invisible honeypot and basic IP/email rate limiting
- Never expose SMTP credentials to the browser

### 7.3 Nodemailer architecture

Recommended Next.js App Router implementation:

- Client form component for field state and accessible feedback
- `POST /api/contact` Route Handler for validation and email dispatch
- Zod schema (or equivalent) on the server
- Nodemailer transporter created in a server-only module
- Plain-text and escaped HTML email variants
- `replyTo` set to the visitor's validated email
- Return structured JSON with safe errors; do not return raw SMTP errors
- Log request IDs and outcomes, but never SMTP credentials or full sensitive submissions

Environment variables:

```dotenv
SMTP_HOST=
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=
SMTP_PASS=
MAIL_FROM="Incorporate Wise <no-reply@example.com>"
CONTACT_TO_EMAIL=
MEETING_URL=
```

Create `.env.example` with empty/example values. Actual `.env.local` secrets must remain gitignored.

### 7.4 Meeting URL

- Public route: `/meeting`
- Server route handler reads `process.env.MEETING_URL`
- Validate that it is an absolute `https:` URL
- Redirect with a temporary redirect
- If missing/invalid, redirect to `/contact?meeting=unavailable` and show a useful fallback message
- Do not use a `NEXT_PUBLIC_` variable unless client-side access is genuinely required

## 8. SEO and accessibility

Suggested metadata after brand replacement:

- Title: `US Company Formation - Get Your LLC & EIN Fast | Incorporate Wise`
- Description: `Looking for USA company registration? Incorporate Wise simplifies LLC and C-Corp formation for non-US residents. Easily start a US business online.`
- Canonical: final production URL + `/usa-company-registration`
- Theme color: `#2563eb`
- Open Graph image: an approved Incorporate Wise version, not Clemta's image

Structured data:

- `Service`
- `BreadcrumbList`
- `FAQPage` using the exact visible questions/answers
- Organization/provider must identify Incorporate Wise

Accessibility requirements:

- One H1 only
- Semantic section headings in order
- Keyboard-operable dropdowns, mobile menu, accordions, and form
- Visible focus states
- Correct `aria-expanded`, `aria-controls`, dialog/menu semantics
- Decorative art uses empty alt text; meaningful flags/badges use accurate alt text
- Minimum 44 × 44 px touch targets
- Respect `prefers-reduced-motion`
- Maintain WCAG AA contrast

## 9. Reference asset inventory

Primary page assets discovered on the live page:

- `/img/service-hero_us-company-formation.webp`
- `/img/services_state-comparison-bg.webp`
- `/img/testimonial-bg.webp`
- `/img/footer_cta-bg.webp`
- `/img/footer_irs-badge.webp`
- `/img/og/usa-company-registration.png`
- Clemta watermark SVG (must be recreated as Incorporate Wise)

State/territory flags loaded by the page:

- District of Columbia
- Delaware
- Maryland
- Massachusetts
- Michigan
- Minnesota
- Mississippi
- Missouri
- Montana
- Nebraska
- Nevada
- New Hampshire
- New Jersey
- New Mexico
- New York
- North Carolina
- North Dakota
- Northern Mariana Islands
- Ohio
- Oklahoma
- Oregon
- Pennsylvania
- Puerto Rico
- Rhode Island
- South Carolina
- South Dakota
- Tennessee
- Texas
- US Virgin Islands
- Utah
- Vermont
- Virginia
- Washington
- West Virginia
- Wisconsin
- Wyoming

Testimonial flag assets include rounded USA, Saudi Arabia, Turkey, and UAE flags.

Implementation rule: download/recreate only assets the client has the right to use. Do not hotlink Clemta production files.

## 10. Suggested Next.js structure

```text
app/
  layout.tsx
  page.tsx                         # optional redirect or home
  usa-company-registration/
    page.tsx
  contact/
    page.tsx
  meeting/
    route.ts
  api/
    contact/
      route.ts
components/
  layout/
    Header.tsx
    Footer.tsx
    MobileMenu.tsx
  formation/
    Hero.tsx
    FeatureGrid.tsx
    EntityComparison.tsx
    StateComparison.tsx
    ProcessSteps.tsx
    FaqSection.tsx
    Testimonials.tsx
    JourneyCta.tsx
  contact/
    ContactForm.tsx
lib/
  mailer.ts
  validation.ts
  navigation.ts
  content.ts
public/
  images/
  icons/
```

Use server components by default. Add client components only for dropdown/menu state, FAQ state, and contact form behavior.

## 11. Acceptance checklist

### Visual fidelity

- [ ] Matches 1440 px reference section order, widths, alignment, spacing, borders, cards, shadows, and backgrounds
- [ ] Matches responsive stacking at 1024, 768, 390, and 360 px
- [ ] Uses Inter Tight and the documented color system
- [ ] All seven feature cards, both comparisons, four process steps, five FAQs, five testimonials, CTA, and complete footer exist
- [ ] No accidental horizontal overflow
- [ ] Artwork has approved local equivalents and is not hotlinked

### Brand and routes

- [ ] No visible or metadata occurrence of `Clemta`
- [ ] No Clemta URLs remain in navigation, social links, forms, metadata, or structured data
- [ ] No Login button or auth functionality exists
- [ ] Every Start/Register/Get Started CTA resolves to `/contact` or `/contact#form`
- [ ] Contact links resolve to `/contact`
- [ ] Meeting links resolve through `/meeting` and `MEETING_URL`

### Form/backend

- [ ] Required fields validate on client and server
- [ ] Nodemailer sends to `CONTACT_TO_EMAIL`
- [ ] Visitor email is used only as `replyTo`, never as an untrusted `from`
- [ ] Success, failure, loading, missing-config, and rate-limit states are tested
- [ ] SMTP secrets are server-only and `.env.local` is gitignored
- [ ] `.env.example` is committed without secrets

### Quality

- [ ] Keyboard and screen-reader behavior verified
- [ ] Reduced motion verified
- [ ] Lighthouse accessibility/SEO/performance review completed
- [ ] No major layout shift from fonts/images
- [ ] Images use correct dimensions and modern formats
- [ ] Legal claims, customer reviews, certifications, badges, and third-party marks are approved before release

## 12. Definition of done

The implementation is complete only when the referenced landing page is visually indistinguishable at the agreed desktop and mobile widths except for the Incorporate Wise branding, absence of Login/authentication, and the new contact/Nodemailer/meeting conversion flow. Every section must be compared side-by-side with the live reference before sign-off.

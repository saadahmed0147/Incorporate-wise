# Vercel deployment

The project is ready for Vercel as a standard Next.js application.

## Required environment variables

Add these in **Vercel → Project Settings → Environment Variables** for Production, Preview, and Development as appropriate:

```text
SMTP_HOST
SMTP_PORT
SMTP_SECURE
SMTP_USER
SMTP_PASS
MAIL_FROM
CONTACT_TO_EMAIL
MEETING_URL
```

`MEETING_URL` must be a complete HTTPS address. `SMTP_SECURE` should normally be `false` for port 587 and `true` for port 465.

## Deployment

1. Import the repository in Vercel.
2. Vercel will detect Next.js automatically.
3. Add the environment variables above.
4. Deploy. No custom build or output-directory setting is required.

## Verification after deployment

- Open `/` and confirm the homepage loads without a redirect.
- Open each navigation mega menu.
- Submit `/contact` and confirm receipt at `CONTACT_TO_EMAIL`.
- Open `/meeting` and confirm it redirects to `MEETING_URL`.
- Confirm the Incorporate Wise icon appears in the browser tab.

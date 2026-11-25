# Sheru Bhai Official

A cinematic, mobile-first Next.js storefront for the Sheru Bhai Mega Video Bundle.

## Stack

- Next.js 15 App Router
- React 19 + TypeScript
- Custom responsive CSS
- Vercel deployment target

## Local development

\`\`\`bash
npm install
npm run dev
\`\`\`

## Launch configuration

The current site is in pre-checkout mode. It intentionally does not collect payments or expose the Google Drive folder.

Before enabling checkout:

1. Confirm the final product files, file count, and redistribution permissions.
2. Complete payment-provider merchant onboarding through an eligible adult merchant.
3. Add payment credentials as encrypted Vercel environment variables.
4. Implement the provider's server-side payment creation, webhook authentication, status verification, idempotency and order persistence.
5. Store the Drive delivery URL server-side only and reveal it only after verified payment.
6. Test successful, failed, pending, duplicate and delayed webhook scenarios in sandbox/UAT.
7. Complete final privacy, terms, refund and digital-delivery policies.

## Environment variables

- \`NEXT_PUBLIC_SITE_URL\` — canonical website URL after deployment.

Payment secrets and the private Google Drive URL must never use a \`NEXT_PUBLIC_\` prefix.

## Important

The current launch page displays the planned ₹149 price and 5,000+ collection size as supplied for the project. Replace these if the final offer changes. The checkout CTA is deliberately disabled until payment verification and automatic delivery are implemented.
# WyvernStack

## Multi-page portfolio structure

The site now uses Next.js App Router routes instead of section anchors:

- `/` — landing page with concise previews
- `/services` — all services
- `/services/ai-integration` — service detail
- `/services/nextjs-platforms` — service detail
- `/services/design-systems` — service detail
- `/services/edge-infrastructure` — service detail
- `/work` — all projects
- `/work/neuroflow-ai` — case study
- `/work/apex-financial` — case study
- `/testimonials` — testimonials
- `/contact` — full contact form

The existing WYVERNSTACK visual language, colors, gradients, cards, spacing, and navigation style have been retained.

### Email setup

Create `.env.local` from `.env.local.example` and add your Resend API key:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_RECEIVER_EMAIL=hello@wyvernstack.dev
```

Then run:

```bash
npm install
npm run dev
```

```
Test
```

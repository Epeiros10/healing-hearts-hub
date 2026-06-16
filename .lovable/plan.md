## Goal

When a new visitor lands on the homepage, show a modal asking for their email. After submitting, store the email in the database and immediately trigger a download of the Breakup Recovery Guide PDF.

## What I'll build

### 1. PDF asset
- Save the uploaded `Breakup_Recovery_Guide-2.pdf` to `public/breakup-recovery-guide.pdf` so it's served as a static file and can be linked for direct download.

### 2. Database
- New table `public.lead_emails` to store captured emails:
  - `id uuid primary key default gen_random_uuid()`
  - `email text not null`
  - `source text default 'homepage_popup'`
  - `created_at timestamptz default now()`
- Enable RLS. Allow anonymous `INSERT` only (no public read). Add proper GRANTs (`INSERT` to `anon` + `authenticated`, `ALL` to `service_role`).
- Unique index on `lower(email)` so duplicates from the same person don't pile up (insert uses upsert/ignore on conflict).

### 3. Popup component
- New `src/components/LeadMagnetPopup.tsx`:
  - Uses the existing `Dialog` UI primitive (matches the site's style).
  - Headline + short empathetic copy + email input + submit button.
  - On submit: zod-validates the email, inserts into `lead_emails` via the Supabase client, then triggers download of `/breakup-recovery-guide.pdf` (anchor with `download` attribute) and closes the modal.
  - Shows success/error toast using the existing Sonner toaster.
  - Sets `localStorage` flag `leadMagnetSeen=true` after dismissal or successful submit so it doesn't reappear.
  - Appears ~3 seconds after landing on the homepage, only once per visitor.

### 4. Mount on homepage only
- Render `<LeadMagnetPopup />` inside `src/pages/Index.tsx` (homepage only — not in `App.tsx`).

## Visual design
- Matches existing site language: warm off-white background, dark brown text, coral accent button, rounded-xl, soft shadow. Uses `font-display` for the headline and `font-body` for body copy. Small "No spam, instant download" reassurance line under the input.

## Out of scope
- No email service / no autoresponder (PDF downloads directly).
- No changes to other pages, navbar, or hero.

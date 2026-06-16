
CREATE TABLE public.lead_emails (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  source text NOT NULL DEFAULT 'homepage_popup',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX lead_emails_email_source_unique ON public.lead_emails (lower(email), source);

GRANT INSERT ON public.lead_emails TO anon, authenticated;
GRANT ALL ON public.lead_emails TO service_role;

ALTER TABLE public.lead_emails ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead email"
ON public.lead_emails
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

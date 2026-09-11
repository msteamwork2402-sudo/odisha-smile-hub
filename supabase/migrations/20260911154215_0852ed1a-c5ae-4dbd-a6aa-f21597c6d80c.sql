CREATE TABLE public.consultation_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  phone TEXT NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 20),
  city TEXT CHECK (city IS NULL OR char_length(city) <= 100),
  message TEXT CHECK (message IS NULL OR char_length(message) <= 2000),
  source TEXT NOT NULL DEFAULT 'homepage' CHECK (char_length(source) <= 100),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT ALL ON public.consultation_leads TO service_role;

ALTER TABLE public.consultation_leads ENABLE ROW LEVEL SECURITY;

COMMENT ON TABLE public.consultation_leads IS 'Patient consultation enquiries submitted through the public website.';
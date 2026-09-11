CREATE POLICY "Trusted server manages consultation leads"
ON public.consultation_leads
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);
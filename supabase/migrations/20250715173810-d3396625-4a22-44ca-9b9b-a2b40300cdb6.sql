
-- Update the RLS policy to allow anonymous users to submit contact forms
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON public.contact_submissions;

CREATE POLICY "Anyone can submit contact forms" 
  ON public.contact_submissions 
  FOR INSERT 
  TO anon, authenticated
  WITH CHECK (true);

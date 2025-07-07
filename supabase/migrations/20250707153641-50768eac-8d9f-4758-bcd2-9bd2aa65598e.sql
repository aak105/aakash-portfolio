
-- Create table for storing contact form messages
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'responded'))
);

-- Add Row Level Security (RLS)
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to insert messages (for contact form)
CREATE POLICY "Anyone can submit contact messages" 
  ON public.contact_messages 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy that allows admins to view all messages
CREATE POLICY "Admins can view contact messages" 
  ON public.contact_messages 
  FOR SELECT 
  USING (EXISTS ( 
    SELECT 1 FROM admin_users 
    WHERE admin_users.email = (auth.jwt() ->> 'email'::text) 
    AND admin_users.is_admin = true
  ));

-- Create policy that allows admins to update message status
CREATE POLICY "Admins can update contact messages" 
  ON public.contact_messages 
  FOR UPDATE 
  USING (EXISTS ( 
    SELECT 1 FROM admin_users 
    WHERE admin_users.email = (auth.jwt() ->> 'email'::text) 
    AND admin_users.is_admin = true
  ));

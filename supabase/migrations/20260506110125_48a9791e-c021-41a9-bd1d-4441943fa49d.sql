
-- Timestamp helper
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$;

-- ============ admin_users ============
CREATE TABLE public.admin_users (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email text NOT NULL UNIQUE,
  is_admin boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Admin check function (created after admin_users exists)
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.admin_users
    WHERE email = (SELECT auth.jwt() ->> 'email') AND is_admin = true
  );
$$;

CREATE POLICY "Admins can view admin_users" ON public.admin_users
  FOR SELECT USING (public.is_admin());
CREATE POLICY "Admins can manage admin_users" ON public.admin_users
  FOR ALL USING (public.is_admin()) WITH CHECK (public.is_admin());

-- ============ blog_posts ============
CREATE TABLE public.blog_posts (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  content text,
  excerpt text,
  image_url text,
  published boolean DEFAULT false,
  tags text[],
  reading_time integer,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view published blog posts" ON public.blog_posts
  FOR SELECT USING (published = true OR public.is_admin());
CREATE POLICY "Admins can manage blog posts" ON public.blog_posts
  FOR ALL USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ============ contact_messages ============
CREATE TABLE public.contact_messages (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'unread',
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a contact message" ON public.contact_messages
  FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins can view contact messages" ON public.contact_messages
  FOR SELECT USING (public.is_admin());
CREATE POLICY "Admins can update contact messages" ON public.contact_messages
  FOR UPDATE USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "Admins can delete contact messages" ON public.contact_messages
  FOR DELETE USING (public.is_admin());

-- ============ data_assets ============
CREATE TABLE public.data_assets (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  description text,
  dataset_url text,
  visualization_url text,
  category text,
  tags text[],
  file_size text,
  format text,
  last_updated timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);
ALTER TABLE public.data_assets ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view data assets" ON public.data_assets
  FOR SELECT USING (true);
CREATE POLICY "Admins can manage data assets" ON public.data_assets
  FOR ALL USING (public.is_admin()) WITH CHECK (public.is_admin());

-- ============ projects ============
CREATE TABLE public.projects (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  description text,
  long_description text,
  tech_stack text[],
  image_url text,
  project_url text,
  github_url text,
  category text,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view projects" ON public.projects
  FOR SELECT USING (true);
CREATE POLICY "Admins can manage projects" ON public.projects
  FOR ALL USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON public.projects
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ============ site_content ============
CREATE TABLE public.site_content (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  section text NOT NULL UNIQUE,
  content jsonb NOT NULL,
  updated_at timestamptz DEFAULT now()
);
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view site content" ON public.site_content
  FOR SELECT USING (true);
CREATE POLICY "Admins can manage site content" ON public.site_content
  FOR ALL USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE TRIGGER update_site_content_updated_at BEFORE UPDATE ON public.site_content
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

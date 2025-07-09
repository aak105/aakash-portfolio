
-- Create tables for content management
CREATE TABLE public.projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  long_description TEXT,
  tech_stack TEXT[],
  image_url TEXT,
  project_url TEXT,
  github_url TEXT,
  category TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE public.blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT,
  excerpt TEXT,
  image_url TEXT,
  published BOOLEAN DEFAULT false,
  tags TEXT[],
  reading_time INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE public.data_assets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  dataset_url TEXT,
  visualization_url TEXT,
  category TEXT,
  tags TEXT[],
  file_size TEXT,
  format TEXT,
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE public.site_content (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  section TEXT NOT NULL UNIQUE,
  content JSONB NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create admin user table for CMS access
CREATE TABLE public.admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  is_admin BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.data_assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Anyone can view projects" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Anyone can view published blog posts" ON public.blog_posts FOR SELECT USING (published = true);
CREATE POLICY "Anyone can view data assets" ON public.data_assets FOR SELECT USING (true);
CREATE POLICY "Anyone can view site content" ON public.site_content FOR SELECT USING (true);

-- Create policies for admin access
CREATE POLICY "Admins can manage projects" ON public.projects FOR ALL USING (
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE email = auth.jwt() ->> 'email' AND is_admin = true
  )
);

CREATE POLICY "Admins can manage blog posts" ON public.blog_posts FOR ALL USING (
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE email = auth.jwt() ->> 'email' AND is_admin = true
  )
);

CREATE POLICY "Admins can manage data assets" ON public.data_assets FOR ALL USING (
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE email = auth.jwt() ->> 'email' AND is_admin = true
  )
);

CREATE POLICY "Admins can manage site content" ON public.site_content FOR ALL USING (
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE email = auth.jwt() ->> 'email' AND is_admin = true
  )
);

-- Insert initial site content
INSERT INTO public.site_content (section, content) VALUES
('hero', '{
  "title": "Solving Public Problems with Data, Design, and Grit",
  "subtitle": "I''m Aakash Sharma – a technologist-turned-governance consultant blending data systems, AI tools, and policy to drive change on the ground.",
  "quote": "Here''s someone who cares deeply, works quietly, thinks structurally, and builds for people.",
  "cta": "Let''s build better systems together"
}'),
('about', '{
  "title": "About Me",
  "content": "I work at the intersection of data, governance, and social impact, bringing a small-town, grounded perspective to complex public challenges. My journey spans from computer science to rural management, from governance consulting to data analytics – always with the goal of building systems that serve people better.",
  "values": ["Clarity", "Impact", "Simplicity", "Sincerity", "Curiosity"],
  "mission": "To leverage ethical technology and data-driven insights for meaningful social change"
}');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for auto-updating timestamps
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON public.projects FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON public.blog_posts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_data_assets_updated_at BEFORE UPDATE ON public.data_assets FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_site_content_updated_at BEFORE UPDATE ON public.site_content FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

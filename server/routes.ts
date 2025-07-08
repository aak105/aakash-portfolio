import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertProjectSchema, insertBlogPostSchema, insertDataAssetSchema, 
  insertContactMessageSchema, insertAdminUserSchema, insertSiteContentSchema 
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Projects API
  app.get("/api/projects", async (req, res) => {
    try {
      const projects = await storage.getProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch projects" });
    }
  });

  app.get("/api/projects/:id", async (req, res) => {
    try {
      const project = await storage.getProject(req.params.id);
      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }
      res.json(project);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch project" });
    }
  });

  app.post("/api/projects", async (req, res) => {
    try {
      const validatedData = insertProjectSchema.parse(req.body);
      const project = await storage.createProject(validatedData);
      res.status(201).json(project);
    } catch (error) {
      res.status(400).json({ error: "Invalid project data" });
    }
  });

  app.put("/api/projects/:id", async (req, res) => {
    try {
      const validatedData = insertProjectSchema.partial().parse(req.body);
      const project = await storage.updateProject(req.params.id, validatedData);
      res.json(project);
    } catch (error) {
      res.status(400).json({ error: "Invalid project data" });
    }
  });

  app.delete("/api/projects/:id", async (req, res) => {
    try {
      await storage.deleteProject(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete project" });
    }
  });

  // Blog posts API
  app.get("/api/blog-posts", async (req, res) => {
    try {
      const published = req.query.published === 'true';
      const posts = published ? await storage.getPublishedBlogPosts() : await storage.getBlogPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog-posts/:id", async (req, res) => {
    try {
      const post = await storage.getBlogPost(req.params.id);
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch blog post" });
    }
  });

  app.get("/api/blog-posts/slug/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch blog post" });
    }
  });

  app.post("/api/blog-posts", async (req, res) => {
    try {
      const validatedData = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(validatedData);
      res.status(201).json(post);
    } catch (error) {
      res.status(400).json({ error: "Invalid blog post data" });
    }
  });

  app.put("/api/blog-posts/:id", async (req, res) => {
    try {
      const validatedData = insertBlogPostSchema.partial().parse(req.body);
      const post = await storage.updateBlogPost(req.params.id, validatedData);
      res.json(post);
    } catch (error) {
      res.status(400).json({ error: "Invalid blog post data" });
    }
  });

  app.delete("/api/blog-posts/:id", async (req, res) => {
    try {
      await storage.deleteBlogPost(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete blog post" });
    }
  });

  // Data assets API
  app.get("/api/data-assets", async (req, res) => {
    try {
      const assets = await storage.getDataAssets();
      res.json(assets);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch data assets" });
    }
  });

  app.get("/api/data-assets/:id", async (req, res) => {
    try {
      const asset = await storage.getDataAsset(req.params.id);
      if (!asset) {
        return res.status(404).json({ error: "Data asset not found" });
      }
      res.json(asset);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch data asset" });
    }
  });

  app.post("/api/data-assets", async (req, res) => {
    try {
      const validatedData = insertDataAssetSchema.parse(req.body);
      const asset = await storage.createDataAsset(validatedData);
      res.status(201).json(asset);
    } catch (error) {
      res.status(400).json({ error: "Invalid data asset data" });
    }
  });

  app.put("/api/data-assets/:id", async (req, res) => {
    try {
      const validatedData = insertDataAssetSchema.partial().parse(req.body);
      const asset = await storage.updateDataAsset(req.params.id, validatedData);
      res.json(asset);
    } catch (error) {
      res.status(400).json({ error: "Invalid data asset data" });
    }
  });

  app.delete("/api/data-assets/:id", async (req, res) => {
    try {
      await storage.deleteDataAsset(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete data asset" });
    }
  });

  // Contact messages API
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contact messages" });
    }
  });

  app.post("/api/contact-messages", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.status(201).json(message);
    } catch (error) {
      res.status(400).json({ error: "Invalid contact message data" });
    }
  });

  app.put("/api/contact-messages/:id", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.partial().parse(req.body);
      const message = await storage.updateContactMessage(req.params.id, validatedData);
      res.json(message);
    } catch (error) {
      res.status(400).json({ error: "Invalid contact message data" });
    }
  });

  // Admin users API
  app.get("/api/admin-users", async (req, res) => {
    try {
      const users = await storage.getAdminUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch admin users" });
    }
  });

  app.get("/api/admin-users/email/:email", async (req, res) => {
    try {
      const user = await storage.getAdminUserByEmail(req.params.email);
      if (!user) {
        return res.status(404).json({ error: "Admin user not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch admin user" });
    }
  });

  app.post("/api/admin-users", async (req, res) => {
    try {
      const validatedData = insertAdminUserSchema.parse(req.body);
      const user = await storage.createAdminUser(validatedData);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: "Invalid admin user data" });
    }
  });

  // Site content API
  app.get("/api/site-content", async (req, res) => {
    try {
      const content = await storage.getSiteContent();
      res.json(content);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch site content" });
    }
  });

  app.get("/api/site-content/:section", async (req, res) => {
    try {
      const content = await storage.getSiteContentBySection(req.params.section);
      if (!content) {
        return res.status(404).json({ error: "Site content not found" });
      }
      res.json(content);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch site content" });
    }
  });

  app.post("/api/site-content", async (req, res) => {
    try {
      const validatedData = insertSiteContentSchema.parse(req.body);
      const content = await storage.createSiteContent(validatedData);
      res.status(201).json(content);
    } catch (error) {
      res.status(400).json({ error: "Invalid site content data" });
    }
  });

  app.put("/api/site-content/:id", async (req, res) => {
    try {
      const validatedData = insertSiteContentSchema.partial().parse(req.body);
      const content = await storage.updateSiteContent(req.params.id, validatedData);
      res.json(content);
    } catch (error) {
      res.status(400).json({ error: "Invalid site content data" });
    }
  });

  app.put("/api/site-content/section/:section", async (req, res) => {
    try {
      const validatedData = insertSiteContentSchema.partial().parse(req.body);
      const content = await storage.updateSiteContentBySection(req.params.section, validatedData);
      res.json(content);
    } catch (error) {
      res.status(400).json({ error: "Invalid site content data" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

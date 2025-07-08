import { pgTable, text, serial, integer, boolean, timestamp, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const projects = pgTable("projects", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  description: text("description"),
  long_description: text("long_description"),
  tech_stack: text("tech_stack").array(),
  image_url: text("image_url"),
  project_url: text("project_url"),
  github_url: text("github_url"),
  category: text("category"),
  featured: boolean("featured").default(false),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export const blogPosts = pgTable("blog_posts", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content"),
  excerpt: text("excerpt"),
  image_url: text("image_url"),
  published: boolean("published").default(false),
  tags: text("tags").array(),
  reading_time: integer("reading_time"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export const dataAssets = pgTable("data_assets", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  description: text("description"),
  dataset_url: text("dataset_url"),
  visualization_url: text("visualization_url"),
  category: text("category"),
  tags: text("tags").array(),
  file_size: text("file_size"),
  format: text("format"),
  last_updated: timestamp("last_updated").defaultNow(),
  created_at: timestamp("created_at").defaultNow(),
});

export const contactMessages = pgTable("contact_messages", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  created_at: timestamp("created_at").defaultNow(),
  status: text("status").default("unread"),
});

export const adminUsers = pgTable("admin_users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  is_admin: boolean("is_admin").default(false),
  created_at: timestamp("created_at").defaultNow(),
});

export const siteContent = pgTable("site_content", {
  id: uuid("id").primaryKey().defaultRandom(),
  section: text("section").notNull().unique(),
  content: text("content").notNull(), // JSON stored as text
  updated_at: timestamp("updated_at").defaultNow(),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
  created_at: true,
  updated_at: true,
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  created_at: true,
  updated_at: true,
});

export const insertDataAssetSchema = createInsertSchema(dataAssets).omit({
  id: true,
  created_at: true,
  last_updated: true,
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  created_at: true,
  status: true,
});

export const insertAdminUserSchema = createInsertSchema(adminUsers).omit({
  id: true,
  created_at: true,
});

export const insertSiteContentSchema = createInsertSchema(siteContent).omit({
  id: true,
  updated_at: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertDataAsset = z.infer<typeof insertDataAssetSchema>;
export type DataAsset = typeof dataAssets.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertAdminUser = z.infer<typeof insertAdminUserSchema>;
export type AdminUser = typeof adminUsers.$inferSelect;
export type InsertSiteContent = z.infer<typeof insertSiteContentSchema>;
export type SiteContent = typeof siteContent.$inferSelect;

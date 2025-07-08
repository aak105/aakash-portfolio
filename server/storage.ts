import { 
  users, projects, blogPosts, dataAssets, contactMessages, adminUsers, siteContent,
  type User, type InsertUser, type Project, type InsertProject,
  type BlogPost, type InsertBlogPost, type DataAsset, type InsertDataAsset,
  type ContactMessage, type InsertContactMessage, type AdminUser, type InsertAdminUser,
  type SiteContent, type InsertSiteContent
} from "@shared/schema";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Project operations
  getProjects(): Promise<Project[]>;
  getProject(id: string): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: string, project: Partial<InsertProject>): Promise<Project>;
  deleteProject(id: string): Promise<void>;
  
  // Blog post operations
  getBlogPosts(): Promise<BlogPost[]>;
  getPublishedBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: string): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: string, post: Partial<InsertBlogPost>): Promise<BlogPost>;
  deleteBlogPost(id: string): Promise<void>;
  
  // Data asset operations
  getDataAssets(): Promise<DataAsset[]>;
  getDataAsset(id: string): Promise<DataAsset | undefined>;
  createDataAsset(asset: InsertDataAsset): Promise<DataAsset>;
  updateDataAsset(id: string, asset: Partial<InsertDataAsset>): Promise<DataAsset>;
  deleteDataAsset(id: string): Promise<void>;
  
  // Contact message operations
  getContactMessages(): Promise<ContactMessage[]>;
  getContactMessage(id: string): Promise<ContactMessage | undefined>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  updateContactMessage(id: string, message: Partial<InsertContactMessage>): Promise<ContactMessage>;
  
  // Admin user operations
  getAdminUsers(): Promise<AdminUser[]>;
  getAdminUser(id: string): Promise<AdminUser | undefined>;
  getAdminUserByEmail(email: string): Promise<AdminUser | undefined>;
  createAdminUser(user: InsertAdminUser): Promise<AdminUser>;
  updateAdminUser(id: string, user: Partial<InsertAdminUser>): Promise<AdminUser>;
  
  // Site content operations
  getSiteContent(): Promise<SiteContent[]>;
  getSiteContentBySection(section: string): Promise<SiteContent | undefined>;
  createSiteContent(content: InsertSiteContent): Promise<SiteContent>;
  updateSiteContent(id: string, content: Partial<InsertSiteContent>): Promise<SiteContent>;
  updateSiteContentBySection(section: string, content: Partial<InsertSiteContent>): Promise<SiteContent>;
}

import { db } from "./db";
import { eq, and } from "drizzle-orm";

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username)).limit(1);
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  // Project operations
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects).orderBy(projects.created_at);
  }

  async getProject(id: string): Promise<Project | undefined> {
    const result = await db.select().from(projects).where(eq(projects.id, id)).limit(1);
    return result[0];
  }

  async createProject(project: InsertProject): Promise<Project> {
    const result = await db.insert(projects).values(project).returning();
    return result[0];
  }

  async updateProject(id: string, project: Partial<InsertProject>): Promise<Project> {
    const result = await db.update(projects).set({ ...project, updated_at: new Date() }).where(eq(projects.id, id)).returning();
    return result[0];
  }

  async deleteProject(id: string): Promise<void> {
    await db.delete(projects).where(eq(projects.id, id));
  }

  // Blog post operations
  async getBlogPosts(): Promise<BlogPost[]> {
    return await db.select().from(blogPosts).orderBy(blogPosts.created_at);
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return await db.select().from(blogPosts).where(eq(blogPosts.published, true)).orderBy(blogPosts.created_at);
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    const result = await db.select().from(blogPosts).where(eq(blogPosts.id, id)).limit(1);
    return result[0];
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const result = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug)).limit(1);
    return result[0];
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const result = await db.insert(blogPosts).values(post).returning();
    return result[0];
  }

  async updateBlogPost(id: string, post: Partial<InsertBlogPost>): Promise<BlogPost> {
    const result = await db.update(blogPosts).set({ ...post, updated_at: new Date() }).where(eq(blogPosts.id, id)).returning();
    return result[0];
  }

  async deleteBlogPost(id: string): Promise<void> {
    await db.delete(blogPosts).where(eq(blogPosts.id, id));
  }

  // Data asset operations
  async getDataAssets(): Promise<DataAsset[]> {
    return await db.select().from(dataAssets).orderBy(dataAssets.created_at);
  }

  async getDataAsset(id: string): Promise<DataAsset | undefined> {
    const result = await db.select().from(dataAssets).where(eq(dataAssets.id, id)).limit(1);
    return result[0];
  }

  async createDataAsset(asset: InsertDataAsset): Promise<DataAsset> {
    const result = await db.insert(dataAssets).values(asset).returning();
    return result[0];
  }

  async updateDataAsset(id: string, asset: Partial<InsertDataAsset>): Promise<DataAsset> {
    const result = await db.update(dataAssets).set({ ...asset, last_updated: new Date() }).where(eq(dataAssets.id, id)).returning();
    return result[0];
  }

  async deleteDataAsset(id: string): Promise<void> {
    await db.delete(dataAssets).where(eq(dataAssets.id, id));
  }

  // Contact message operations
  async getContactMessages(): Promise<ContactMessage[]> {
    return await db.select().from(contactMessages).orderBy(contactMessages.created_at);
  }

  async getContactMessage(id: string): Promise<ContactMessage | undefined> {
    const result = await db.select().from(contactMessages).where(eq(contactMessages.id, id)).limit(1);
    return result[0];
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const result = await db.insert(contactMessages).values(message).returning();
    return result[0];
  }

  async updateContactMessage(id: string, message: Partial<InsertContactMessage>): Promise<ContactMessage> {
    const result = await db.update(contactMessages).set(message).where(eq(contactMessages.id, id)).returning();
    return result[0];
  }

  // Admin user operations
  async getAdminUsers(): Promise<AdminUser[]> {
    return await db.select().from(adminUsers).orderBy(adminUsers.created_at);
  }

  async getAdminUser(id: string): Promise<AdminUser | undefined> {
    const result = await db.select().from(adminUsers).where(eq(adminUsers.id, id)).limit(1);
    return result[0];
  }

  async getAdminUserByEmail(email: string): Promise<AdminUser | undefined> {
    const result = await db.select().from(adminUsers).where(eq(adminUsers.email, email)).limit(1);
    return result[0];
  }

  async createAdminUser(user: InsertAdminUser): Promise<AdminUser> {
    const result = await db.insert(adminUsers).values(user).returning();
    return result[0];
  }

  async updateAdminUser(id: string, user: Partial<InsertAdminUser>): Promise<AdminUser> {
    const result = await db.update(adminUsers).set(user).where(eq(adminUsers.id, id)).returning();
    return result[0];
  }

  // Site content operations
  async getSiteContent(): Promise<SiteContent[]> {
    return await db.select().from(siteContent).orderBy(siteContent.updated_at);
  }

  async getSiteContentBySection(section: string): Promise<SiteContent | undefined> {
    const result = await db.select().from(siteContent).where(eq(siteContent.section, section)).limit(1);
    return result[0];
  }

  async createSiteContent(content: InsertSiteContent): Promise<SiteContent> {
    const result = await db.insert(siteContent).values(content).returning();
    return result[0];
  }

  async updateSiteContent(id: string, content: Partial<InsertSiteContent>): Promise<SiteContent> {
    const result = await db.update(siteContent).set({ ...content, updated_at: new Date() }).where(eq(siteContent.id, id)).returning();
    return result[0];
  }

  async updateSiteContentBySection(section: string, content: Partial<InsertSiteContent>): Promise<SiteContent> {
    const result = await db.update(siteContent).set({ ...content, updated_at: new Date() }).where(eq(siteContent.section, section)).returning();
    return result[0];
  }
}

export const storage = new DatabaseStorage();

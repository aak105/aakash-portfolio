
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

// Create a mock storage for development when no database is available
export class MockStorage implements IStorage {
  private mockData = {
    users: [] as User[],
    projects: [] as Project[],
    blogPosts: [] as BlogPost[],
    dataAssets: [] as DataAsset[],
    contactMessages: [] as ContactMessage[],
    adminUsers: [] as AdminUser[],
    siteContent: [] as SiteContent[],
  };

  async getUser(id: number): Promise<User | undefined> {
    return this.mockData.users.find(u => u.id === id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.mockData.users.find(u => u.username === username);
  }

  async createUser(user: InsertUser): Promise<User> {
    const newUser = { ...user, id: Date.now() };
    this.mockData.users.push(newUser);
    return newUser;
  }

  async getProjects(): Promise<Project[]> {
    return [...this.mockData.projects];
  }

  async getProject(id: string): Promise<Project | undefined> {
    return this.mockData.projects.find(p => p.id === id);
  }

  async createProject(project: InsertProject): Promise<Project> {
    const newProject: Project = { 
      id: crypto.randomUUID(),
      title: project.title,
      description: project.description ?? null,
      long_description: project.long_description ?? null,
      tech_stack: project.tech_stack ?? null,
      image_url: project.image_url ?? null,
      project_url: project.project_url ?? null,
      github_url: project.github_url ?? null,
      category: project.category ?? null,
      featured: project.featured ?? null,
      created_at: new Date(),
      updated_at: new Date()
    };
    this.mockData.projects.push(newProject);
    return newProject;
  }

  async updateProject(id: string, project: Partial<InsertProject>): Promise<Project> {
    const index = this.mockData.projects.findIndex(p => p.id === id);
    if (index === -1) throw new Error('Project not found');
    
    this.mockData.projects[index] = { 
      ...this.mockData.projects[index], 
      ...project,
      updated_at: new Date()
    };
    return this.mockData.projects[index];
  }

  async deleteProject(id: string): Promise<void> {
    const index = this.mockData.projects.findIndex(p => p.id === id);
    if (index !== -1) {
      this.mockData.projects.splice(index, 1);
    }
  }

  async getBlogPosts(): Promise<BlogPost[]> { return [...this.mockData.blogPosts]; }
  async getPublishedBlogPosts(): Promise<BlogPost[]> { return this.mockData.blogPosts.filter(p => p.published); }
  async getBlogPost(id: string): Promise<BlogPost | undefined> { return this.mockData.blogPosts.find(p => p.id === id); }
  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> { return this.mockData.blogPosts.find(p => p.slug === slug); }
  
  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> { 
    const newPost: BlogPost = {
      id: crypto.randomUUID(),
      title: post.title,
      slug: post.slug,
      image_url: post.image_url ?? null,
      content: post.content ?? null,
      excerpt: post.excerpt ?? null,
      published: post.published ?? null,
      tags: post.tags ?? null,
      reading_time: post.reading_time ?? null,
      created_at: new Date(),
      updated_at: new Date()
    };
    this.mockData.blogPosts.push(newPost);
    return newPost;
  }
  
  async updateBlogPost(id: string, post: Partial<InsertBlogPost>): Promise<BlogPost> {
    const index = this.mockData.blogPosts.findIndex(p => p.id === id);
    if (index === -1) throw new Error('Blog post not found');
    this.mockData.blogPosts[index] = { ...this.mockData.blogPosts[index], ...post, updated_at: new Date() };
    return this.mockData.blogPosts[index];
  }
  
  async deleteBlogPost(id: string): Promise<void> {
    const index = this.mockData.blogPosts.findIndex(p => p.id === id);
    if (index !== -1) this.mockData.blogPosts.splice(index, 1);
  }

  async getDataAssets(): Promise<DataAsset[]> { return [...this.mockData.dataAssets]; }
  async getDataAsset(id: string): Promise<DataAsset | undefined> { return this.mockData.dataAssets.find(d => d.id === id); }
  
  async createDataAsset(asset: InsertDataAsset): Promise<DataAsset> {
    const newAsset: DataAsset = {
      id: crypto.randomUUID(),
      title: asset.title,
      description: asset.description ?? null,
      category: asset.category ?? null,
      tags: asset.tags ?? null,
      dataset_url: asset.dataset_url ?? null,
      visualization_url: asset.visualization_url ?? null,
      file_size: asset.file_size ?? null,
      format: asset.format ?? null,
      created_at: new Date(),
      last_updated: new Date()
    };
    this.mockData.dataAssets.push(newAsset);
    return newAsset;
  }
  
  async updateDataAsset(id: string, asset: Partial<InsertDataAsset>): Promise<DataAsset> {
    const index = this.mockData.dataAssets.findIndex(d => d.id === id);
    if (index === -1) throw new Error('Data asset not found');
    this.mockData.dataAssets[index] = { ...this.mockData.dataAssets[index], ...asset, last_updated: new Date() };
    return this.mockData.dataAssets[index];
  }
  
  async deleteDataAsset(id: string): Promise<void> {
    const index = this.mockData.dataAssets.findIndex(d => d.id === id);
    if (index !== -1) this.mockData.dataAssets.splice(index, 1);
  }

  async getContactMessages(): Promise<ContactMessage[]> { return [...this.mockData.contactMessages]; }
  async getContactMessage(id: string): Promise<ContactMessage | undefined> { return this.mockData.contactMessages.find(m => m.id === id); }
  
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const newMessage: ContactMessage = {
      id: crypto.randomUUID(),
      name: message.name,
      email: message.email,
      message: message.message,
      status: 'unread',
      created_at: new Date()
    };
    this.mockData.contactMessages.push(newMessage);
    return newMessage;
  }
  
  async updateContactMessage(id: string, message: Partial<InsertContactMessage>): Promise<ContactMessage> {
    const index = this.mockData.contactMessages.findIndex(m => m.id === id);
    if (index === -1) throw new Error('Contact message not found');
    this.mockData.contactMessages[index] = { ...this.mockData.contactMessages[index], ...message };
    return this.mockData.contactMessages[index];
  }

  async getAdminUsers(): Promise<AdminUser[]> { return [...this.mockData.adminUsers]; }
  async getAdminUser(id: string): Promise<AdminUser | undefined> { return this.mockData.adminUsers.find(u => u.id === id); }
  async getAdminUserByEmail(email: string): Promise<AdminUser | undefined> { return this.mockData.adminUsers.find(u => u.email === email); }
  
  async createAdminUser(user: InsertAdminUser): Promise<AdminUser> {
    const newUser: AdminUser = {
      id: crypto.randomUUID(),
      email: user.email,
      is_admin: user.is_admin ?? null,
      created_at: new Date()
    };
    this.mockData.adminUsers.push(newUser);
    return newUser;
  }
  
  async updateAdminUser(id: string, user: Partial<InsertAdminUser>): Promise<AdminUser> {
    const index = this.mockData.adminUsers.findIndex(u => u.id === id);
    if (index === -1) throw new Error('Admin user not found');
    this.mockData.adminUsers[index] = { ...this.mockData.adminUsers[index], ...user };
    return this.mockData.adminUsers[index];
  }

  async getSiteContent(): Promise<SiteContent[]> { return [...this.mockData.siteContent]; }
  async getSiteContentBySection(section: string): Promise<SiteContent | undefined> { return this.mockData.siteContent.find(s => s.section === section); }
  
  async createSiteContent(content: InsertSiteContent): Promise<SiteContent> {
    const newContent: SiteContent = {
      id: crypto.randomUUID(),
      section: content.section,
      content: content.content,
      updated_at: new Date()
    };
    this.mockData.siteContent.push(newContent);
    return newContent;
  }
  
  async updateSiteContent(id: string, content: Partial<InsertSiteContent>): Promise<SiteContent> {
    const index = this.mockData.siteContent.findIndex(s => s.id === id);
    if (index === -1) throw new Error('Site content not found');
    this.mockData.siteContent[index] = { ...this.mockData.siteContent[index], ...content, updated_at: new Date() };
    return this.mockData.siteContent[index];
  }
  
  async updateSiteContentBySection(section: string, content: Partial<InsertSiteContent>): Promise<SiteContent> {
    const index = this.mockData.siteContent.findIndex(s => s.section === section);
    if (index === -1) throw new Error('Site content not found');
    this.mockData.siteContent[index] = { ...this.mockData.siteContent[index], ...content, updated_at: new Date() };
    return this.mockData.siteContent[index];
  }
}

// Use mock storage in development when no database is available
export const storage = process.env.DATABASE_URL ? new DatabaseStorage() : new MockStorage();

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
  status: string;
}

// For static site, we'll handle contact form submissions differently
// This is just for type definitions
export const contactMessages: ContactMessage[] = [];
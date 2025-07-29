export interface Project {
  id: string;
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
  technologies: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface AboutInfo {
  title: string;
  content: string;
}
import type { LucideIcon } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "frontend" | "backend" | "fullstack";
  github: string;
  demo: string;
}

export interface Skill {
  name: string;
  level: number;
  color: string;
}

export type ContactInfo = {
  icon: LucideIcon;
  text: string;
  href: string;
  action: "email" | "call" | "map";
};

export interface NavItem {
  path: string;
  icon: React.ComponentType<{ size?: number }>;
  label: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "frontend" | "backend" | "fullstack";
  github: string;
  demo: string;
  featured?: boolean;
  year?: string;
}

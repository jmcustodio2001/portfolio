export interface Project { 
   id: number; 
   title: string; 
   description: string; 
   image: string; 
   tags: string[]; 
   category: 'frontend' | 'backend' | 'fullstack'; 
   github: string; 
   demo: string; 
 } 
 
 export interface Skill { 
   name: string; 
   level: number; 
   color: string; 
 } 
 
 export interface ContactInfo { 
   icon: React.ComponentType<{ size?: number; className?: string }>; 
   text: string; 
   href: string; 
 } 
 
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

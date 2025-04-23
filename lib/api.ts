const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

// أنواع البيانات
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface GeneralSettings{
  id: string,
  site_name?: string,
  site_description?: string,
  site_logo?: string,
  site_favicon?: string,
  theme_color?: string,
  support_email?:string,
  support_phone?: string,
  google_analytics_id?: string,
  posthog_html_snippet?: string,
  seo_title?: string,
  seo_keywords?: string,
  seo_metadata?: string[],
  email_settings?: string,
  email_from_address?: string,
  email_from_name?: string,
  social_network?: {
    tiktok?: string,
    youtube?: string,
    facebook?: string,
    linkedin?: string,
    whatsapp?: string,
    instagram?: string,
    pinterest?: string,
    x_twitter?: string
  },
  more_configs?: string,
}
// وظائف API
export async function fetchProjects(): Promise<Project[]> {
  const response = await fetch(`${API_URL}/projects`);
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  return response.json();
}

export async function fetchServices(): Promise<Service[]> {
  const response = await fetch(`${API_URL}/services`);
  if (!response.ok) {
    throw new Error('Failed to fetch services');
  }
  return response.json();
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
  const response = await fetch(`${API_URL}/testimonials`);
  if (!response.ok) {
    throw new Error('Failed to fetch testimonials');
  }
  return response.json();
}

export async function fetchSkills(): Promise<Skill[]> {
  const response = await fetch(`${API_URL}/skills`);
  if (!response.ok) {
    throw new Error('Failed to fetch skills');
  }
  return response.json();
}

export async function fetchTeamMembers() {
  const response = await fetch(`${API_URL}/team-members`);
  if (!response.ok) {
    throw new Error('Failed to fetch team members');
  }
  return response.json();
}

export async function fetchMetadata(): Promise<GeneralSettings> {
  const response = await fetch(`${API_URL}/general-settings`);
  if (!response.ok) {
    throw new Error('Failed to fetch website metadata');
  }
  // console.log(response.json());
  return response.json();
}

export const fetchHomeData = async () => {
  try {
    const res = await fetch(`${API_URL}/home`); // Make sure the URL matches your backend route
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return await res.json();
  } catch (error) {
    console.error('Error fetching home data:', error);
    return { services: [], projects: [], members: [] };
  }
};

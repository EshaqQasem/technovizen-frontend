
# Open Sources Profile V.1.2

live Demo https://react-profile-gilt.vercel.app/


#  React Profile

This project is a **React-based portfolio profile** showcasing various sections like **Home**, **About Me**, **Blog**, **Skills**, **Projects**, **Testimonials**, and more. It is built using **Next.js**, **TypeScript**, and **Tailwind CSS** to provide a fast, optimized, and responsive web experience.

Screenshots
Here are some screenshots showcasing the design of the profile:


<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/9ffb5d9e-238d-46b5-ba1a-6ef3943bfa63" alt="Home Page" style="width: 100%; height: auto; border-radius: 8px;"/></td>
    <td><img src="https://github.com/user-attachments/assets/f29bbf3d-b1f5-4703-ae9f-ad181747a3d6" alt="Blog Page" style="width: 100%; height: auto; border-radius: 8px;"/></td>
    <td><img src="https://github.com/user-attachments/assets/c9c5d0ca-a512-4fe4-90de-bc5b394c2ac0" alt="Blog Page" style="width: 100%; height: auto; border-radius: 8px;"/></td>
    <td><img src="https://github.com/user-attachments/assets/76267968-d73a-4f8e-93aa-7b7c3778e601" alt="About Page" style="width: 100%; height: auto; border-radius: 8px;"/></td>
    <td><img src="https://github.com/user-attachments/assets/99d3986b-6549-48f1-8fc8-e654a7e8f642" alt="Blog Page" style="width: 100%; height: auto; border-radius: 8px;"/></td>
    <td><img src="https://github.com/user-attachments/assets/0485d445-8430-41f2-b8a5-23ac79ab1a66" alt="Blog Page" style="width: 100%; height: auto; border-radius: 8px;"/></td>
    <td><img src="https://github.com/user-attachments/assets/79b7d691-1ed6-463a-9477-f026e084b8b7" alt="Blog Page" style="width: 100%; height: auto; border-radius: 8px;"/></td>
  </tr>

  
</table>

## Project Structure

The project is structured in a modular way, ensuring scalability and easy maintainability. Here’s a brief overview of the important files and folders:

```
yacoubal-hardari-react-profile/  
│  
├── app/                            # Main application files (pages, layout, etc.)
│   ├── client.tsx                  # Client-side rendering entry point
│   ├── globals.css                 # Global styles
│   ├── hero-section.tsx            # Hero section component
│   ├── layout.tsx                  # Layout component
│   ├── page.tsx                    # Main landing page
│   ├── about/                      # About page components
│   │   └── page.tsx                # About page content
│   ├── blog/                       # Blog page components
│   │   ├── loading.tsx             # Loading state for blog posts
│   │   └── page.tsx                # Blog page content
│   │   └── [id]/                   # Dynamic route for individual blog posts
│   │       └── page.tsx            # Individual blog post content
│   ├── projects/                   # Projects page components
│   │   ├── loading.tsx             # Loading state for projects
│   │   ├── page.tsx                # Projects page content
│   │   └── [id]/                   # Dynamic route for individual project pages
│   │       └── page.tsx            # Individual project page content
│   ├── not-found.tsx               # 404 page component (default "not found" page)
│   ├── [...not-found]/             # Catch-all route for undefined routes
│   │   └── page.tsx                # Page for undefined routes (custom 404 page)
│  
├── components/                     # Reusable components
│   ├── about-me-section.tsx        # About Me section, for introducing the individual or company
│   ├── animated-background.tsx     # Animated background component for visual appeal
│   ├── animated-section.tsx        # Section component with animations
│   ├── animated-text.tsx           # Animated text component for dynamic content
│   ├── blog-card.tsx               # Blog card component, used for displaying individual blog posts in a grid
│   ├── blog-section.tsx            # Blog section, container for blog-related content
│   ├── career-timeline-section.tsx # Career timeline section displaying milestones or history
│   ├── color-theme-switcher.tsx    # Switcher component for toggling color themes or modes (dark/light)
│   ├── courses-section.tsx         # Section for displaying courses or educational content
│   ├── cta-section.tsx             # Call-to-action section to prompt user interaction (e.g., sign-up or buy)
│   ├── education-certifications-section.tsx  # Section showcasing education and certifications
│   ├── experience-item.tsx         # Component for displaying an individual experience item (e.g., job role)
│   ├── experience-section.tsx      # Section for displaying professional experience or work history
│   ├── footer.tsx                  # Footer component with links and copyright information
│   ├── hero-section.tsx            # Hero section, usually the first impression area on the homepage
│   ├── interests-section.tsx       # Section for showcasing personal interests or hobbies
│   ├── mode-toggle.tsx             # Mode toggle component, e.g., for light/dark mode switch
│   ├── navbar.tsx                  # Navigation bar component
│   ├── project-card.tsx            # Component for displaying individual project cards
│   ├── projects-section.tsx        # Section for listing and displaying projects
│   ├── section-heading.tsx         # Heading component for sections, used for titles
│   ├── service-card.tsx            # Service card component, for displaying services offered
│   ├── services-section.tsx        # Section for displaying services
│   ├── skill-icons.tsx             # Component for displaying skill icons (e.g., programming languages)
│   ├── skills-section.tsx          # Section for showcasing skills
│   ├── technologies-section.tsx    # Section for displaying technologies used or knowledge
│   ├── technology-slider.tsx       # Slider component for showcasing various technologies or tools
│   ├── testimonial-card.tsx        # Component for displaying individual testimonials
│   ├── testimonials-section.tsx    # Section for displaying client or user testimonials
│   ├── theme-provider.tsx          # Provides theme context to the application, manages global theme state
│   ├── theme-test.tsx              # Component for testing theme changes or settings
│   ├── theme-toggle.tsx            # Toggle component for switching between light/dark themes
│   ├── whatsapp-button.tsx         # Button for integrating WhatsApp for easy contact
│   ├── service-request/            # Service request components
│   │   ├── index.tsx               # Main service request component
│   │   ├── service-form-step1.tsx  # First step of the service request form
│   │   ├── service-form-step2.tsx  # Second step of the service request form
│   │   ├── service-form-step3.tsx  # Third step of the service request form
│   │   ├── service-form-success.tsx # Success message after form submission
│   │   ├── service-request-button.tsx # Button to trigger the service request
│   │   ├── service-request-context.tsx # Context provider for managing service request state
│   │   ├── service-request-modal.tsx # Modal window for service request
│   │   └── service-utils.ts        # Utility functions for handling service requests
│   └── ui/                         # UI components (buttons, inputs, cards, etc.)
│       ├── badge.tsx               # Badge component for showing small labels (e.g., "new", "hot")
│       ├── button.tsx              # Button component
│       ├── card.tsx                # Card component for grouping content
│       ├── dropdown-menu.tsx       # Dropdown menu component
│       ├── input.tsx               # Input field component
│       └── progress.tsx            # Progress bar component
│       ├── alert.tsx               # Alert component for displaying important messages like success, warnings, or errors
│       ├── dialog.tsx              # Dialog component for modal popups that focus user attention on specific tasks  
│       ├── label.tsx               # Label component for associating text descriptions with form elements, enhancing accessibility  
│       ├── select.tsx              # Select component for dropdown list selection of predefined options  
│       ├── tabs.tsx                # Tabs component for allowing users to switch between different views or sections  
│       └── textarea.tsx            # Textarea component for multiline text input, typically for longer messages or descriptions
│  
├── lib/                            # Utility functions
│   └── utils.ts                    # Helper functions, for commonly used tasks
│  
├── public/                         # Public static files (images, etc.)
│   └── imags/                      # Blog images stored here for public access
│       ├── 1.webp                  # Blog image 1
│       ├── 5.webp                  # Blog image 5
│       └── 7.webp                  # Blog image 7
│  
├── package.json                    # Project dependencies and scripts
├── tailwind.config.js              # Tailwind CSS configuration (JS)
├── tailwind.config.ts              # Tailwind CSS configuration (TS)
├── tsconfig.json                   # TypeScript configuration for compiling the project
├── next.config.ts                  # Next.js configuration for the app
├── postcss.config.mjs              # PostCSS configuration for processing CSS
├── eslint.config.mjs               # ESLint configuration for linting JavaScript/TypeScript code
└── components.json                 # Component list (used for documentation)

```

## Getting Started

To get started with this project, follow the steps below:

### 1. Clone the repository

Clone the repository to your local machine:

```bash
git clone https://github.com/YacoubAl-hardari/react-profile.git
cd react-profile
```

### 2. Install dependencies

Make sure **Node.js** is installed on your system. Then, install the project dependencies using one of the following commands:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Run the development server

Start the development server with the following command:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Now, open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

### 4. Start editing the pages

To begin modifying the application, you can edit the following files:

- **Home Page**: `app/page.tsx`
- **About Me Page**: `app/about/page.tsx`
- **Blog Page**: `app/blog/page.tsx`

Changes to these pages will be automatically reflected when you save the files.

---

## Pages Overview

### **Home Page**

The Home page is the entry point of your profile, featuring a welcome message, a brief introduction, and links to other sections like About Me and Blog.

### **About Me Page**

The About Me page showcases personal information, including your background, skills, experiences, and career highlights.

### **Blog Page**

The Blog page lists all blog posts and articles, with each post linked to a detailed view.

---

## Technologies Used

This project is built using the following technologies:

- **Next.js**: React framework for building static and server-rendered web applications.
- **TypeScript**: A statically typed superset of JavaScript that provides type safety.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **PostCSS**: For processing the CSS with plugins.
- **ESLint**: A tool for identifying and fixing problems in JavaScript/TypeScript code.

---

## Learn More

To learn more about **Next.js**, check out these resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and APIs.
- [Learn Next.js](https://nextjs.org/learn) - Interactive tutorial for building Next.js applications.

For more information about **Tailwind CSS**, check out the [official documentation](https://tailwindcss.com/docs).

---

## Deploy on Vercel

Deploy your Next.js app to production on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

For more details, refer to the [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying).

Feel free to modify the content, layout, and styles to suit your personal preferences or project requirements!

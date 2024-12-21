import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "CastDev-J | Front-Developer",
  DESCRIPTION: "Welcome to my personal website. I am a frontend developer with a passion for web development and design.",
  AUTHOR: "CastDev-J",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  // { 
  //   TEXT: "Blog", 
  //   HREF: "/blog", 
  // },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "andres2004_cj@outlook.com",
    HREF: "mailto:andres2004_cj@outlook.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "CastDev-j",
    HREF: "https://github.com/CastDev-j"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "andres-castillo",
    HREF: "https://www.linkedin.com/in/andres-castillo-jimenez-249210292/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "CastDev_J",
    HREF: "https://x.com/CastDev_J",
  },
]


const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];
// updated
const blogPosts = [
  {
    id: 1,
    date: "Jan 10, 2026",
    title:
      "Building Scalable MERN Stack Applications: Architecture & Best Practices",
    image: "/images/blog1.png",
    link: "https://vishal-jangid-portfolio.vercel.app/#project",
  },
  {
    id: 2,
    date: "Dec 22, 2025",
    title:
      "React Native Performance Optimization: From Beginner to Production Ready",
    image: "/images/blog2.png",
    link: "https://vishal-jangid-portfolio.vercel.app/#project",
  },
  {
    id: 3,
    date: "Dec 05, 2025",
    title:
      "Mastering TypeScript with React: Clean Code & Scalable Patterns",
    image: "/images/blog3.png",
    link: "https://vishal-jangid-portfolio.vercel.app/#project",
  },
];


// terminal tech sttack updated

const techStack = [
  {
    category: "Frontend Development",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)"],
  },
  {
    category: "Mobile Development",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling & UI",
    items: ["Tailwind CSS", "CSS3", "Responsive Design"],
  },
  {
    category: "Backend Development",
    items: ["Node.js", "Express.js", "REST APIs", "JWT", "Clerk Auth"],
  },
  {
    category: "Database",
    items: ["MongoDB", "Mongoose"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
];

// updated
const socials = [
  {
    id: 1,
    text: "GitHub",
    icon: "/icons/github.svg",
    bg: "#181717",
    link: "https://github.com/vishaljangid786",
  },
  {
    id: 2,
    text: "Portfolio",
    icon: "/icons/atom.svg",
    bg: "#4f46e5",
    link: "https://vishal-jangid-portfolio.netlify.app/",
  },
  {
    id: 3,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#0A66C2",
    link: "https://www.linkedin.com/in/your-linkedin-username/",
  },
  {
    id: 4,
    text: "Email",
    icon: "/icons/mail.svg",
    bg: "#EA4335",
    link: "mailto:vishaljangid786@gmail.com",
  },
];
// updated
const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.jpg",
  },
  {
    id: 2,
    img: "/images/gal2.jpg",
  },
  {
    id: 3,
    img: "/images/gal3.jpg",
  },
  {
    id: 4,
    img: "/images/gal4.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};
const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1 – Fitness App
    {
      id: 5,
      name: "AI Fitness Tracking App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "Fitness-App.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A real-time fitness tracking mobile application built using React Native and Expo.",
            "Tracks user activities, stores performance data securely in MongoDB, and provides live progress monitoring.",
            "Designed scalable backend APIs using Node.js and Express with JWT-based authentication.",
            "Focused on performance optimization, clean UI, and real-time data synchronization.",
          ],
        },
        {
          id: 2,
          name: "Fitness App",
          icon: "/images/download.png",
          kind: "file",
          fileType: "url",
          href: "https://drive.google.com/uc?export=download&id=1grjHsiiPBTNxpdEWWsIuPulV6_bVCFW8",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "fitness-app.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/fitness-app.png",
        },
      ],
    },

    // ▶ Project 2 – Real-Time Chat App
    {
      id: 6,
      name: "Real-Time Chat Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Chat-App.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "A full-stack real-time chat platform supporting one-to-one and group messaging.",
            "Implemented secure authentication using JWT and Clerk Auth.",
            "Enabled seamless media sharing and dynamic group creation.",
            "Built using MERN stack with optimized backend routing and scalable architecture.",
          ],
        },
        {
          id: 2,
          name: "download app",
          icon: "/images/download.png",
          kind: "file",
          fileType: "url",
          href: "https://drive.google.com/uc?export=download&id=1QdY_j96xlsztMOyCgCOyhHSJd31jEzJf",
          position: "top-20 left-20",
        },
        {
          id: 3,
          name: "chat-app.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/chat-app.png",
        },
      ],
    },

    // ▶ Project 3 – VKMarketing E-commerce
    {
      id: 7,
      name: "VKMarketing E-commerce",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "VKMarketing.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A full-stack e-commerce web application built using the MERN stack.",
            "Includes product management, authentication, and responsive UI with Tailwind CSS.",
            "Designed secure REST APIs and implemented scalable MongoDB schema design.",
            "Focused on modern UI/UX principles and optimized performance.",
          ],
        },
        {
          id: 2,
          name: "vkmarketing-demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://vkallinmarketing.com",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "vkmarketing.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/vkmarketing.png",
        },
      ],
    },
  ],
};

// updated
const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/me.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/casual.jpg",
    },
    // {
    //     id: 3,
    //     name: "conference-me.png",
    //     icon: "/images/image.png",
    //     kind: "file",
    //     fileType: "img",
    //     position: "top-52 left-80",
    //     imageUrl: "/images/adrian-3.jpeg",
    // },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Full Stack Developer & Mobile App Builder",

      image: "/images/me copy.jpg",

      description: [
        "Hey! I'm Vishal 👋 — a passionate Full Stack Developer from Jaipur, Rajasthan, focused on building scalable web and mobile applications.",

        "I specialize in the MERN stack, React Native, and modern JavaScript ecosystems, crafting applications that are fast, secure, and user-focused.",

        "From real-time fitness tracking apps to fully functional chat platforms with authentication and media sharing, I enjoy turning ideas into production-ready solutions.",

        "I care deeply about clean architecture, smooth UI/UX, and writing maintainable code that solves real-world problems efficiently.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };

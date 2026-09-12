const BASE = import.meta.env.BASE_URL;

export const filters = ["All Projects", "Web Apps", "Portfolio"];

export const projects = [
  {
    id: 1,
    title: "Larana - Jewelry Store",
    desc: "An elegant jewelry e-commerce concept with a rose-gold aesthetic, product highlights, and a clean shopping experience for rings, necklaces, and watches.",
    tags: ["HTML", "CSS", "JavaScript", "UX Design"],
    img: `${BASE}projects/image_568e7e1f.jpg`,
    href: "https://github.com/marinaatif13-ship-it/LARANA-JEWELRY",
    category: "Web Apps",
  },
  {
    id: 2,
    title: "Donut & Coffee - Bakery Shop",
    desc: "A cozy bakery & coffee shop landing page with a warm hero section, menu highlights, and a gallery showcasing fresh donuts and coffee blends.",
    tags: ["HTML5", "CSS3"],
    img: `${BASE}projects/Screenshot_2026-09-08_181507.png`,
    href: "https://github.com/marinaatif13-ship-it/Donut-coffee",
    category: "Web Apps",
  },
  {
    id: 3,
    title: "Bloom - Flower Shop",
    desc: "A farm-fresh flower shop landing page with curated bouquet collections, same-day delivery highlights, and a warm, inviting layout.",
    tags: ["HTML", "CSS", "Bootstrap"],
    img: `${BASE}projects/Gemini_Generated_Image_7psbou7psbou7psb.jpg`,
    href: "https://github.com/marinaatif13-ship-it/bloom-store",
    category: "Web Apps",
  },
  {
    id: 4,
    title: "Velora - Watches Shop",
    desc: "A premium watch store concept with a cinematic hero, product storytelling, and a heritage-inspired dark theme.",
    tags: ["HTML", "CSS", "JavaScript"],
    img: `${BASE}projects/image_ea8d752f.jpg`,
    href: "https://github.com/marinaatif13-ship-it/VELORA",
    category: "Web Apps",
  },
  {
    id: 5,
    title: "Floresta - Flowers Store",
    desc: "A romantic flower store landing page with a bold rose-themed hero, a \"why choose us\" section, and a clear pricing table.",
    tags: ["HTML", "CSS", "TailwindCSS"],
    img: `${BASE}projects/image_90972a9e.jpg`,
    href: "https://github.com/marinaatif13-ship-it/floresta-website",
    category: "Web Apps",
  },
  {
    id: 6,
    title: "Dev Portfolio - Personal Site",
    desc: "A fully responsive personal portfolio site built with React and Tailwind CSS, featuring animated sections, a project showcase, skills proficiency rings, and a contact form.",
    tags: ["React", "Tailwind", "CSS", "Vite"],
    img: `${BASE}projects/p6.png`,
    href: "#",
    category: "Portfolio",
  },
];

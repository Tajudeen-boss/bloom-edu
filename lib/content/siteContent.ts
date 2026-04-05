export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type Service = {
  title: string;
  description: string;
  href: string;
};

export type MethodStep = {
  title: string;
  detail: string;
};

export type Program = {
  title: string;
  audience: string;
  format: string;
  duration: string;
  outcome: string;
};

export type GalleryPhoto = {
  src: string;
  alt: string;
  caption: string;
  photographer: string;
  sourceLabel: string;
  sourceUrl: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  sections: BlogSection[];
  takeaways: string[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export const heroStats: Stat[] = [
  { value: "280+", label: "Schools Supported" },
  { value: "4,700+", label: "Educators Trained" },
  { value: "96%", label: "Client Renewal Rate" },
  { value: "12", label: "Regional Hubs" }
];

export const credibilityPoints = [
  "Whole-school strategy for Montessori and non-Montessori institutions",
  "Curriculum sequencing from toddler through lower elementary",
  "On-site and virtual coaching for teachers and school leaders",
  "Procurement and deployment of high-quality learning materials"
];

export const serviceCards: Service[] = [
  {
    title: "School Launch & Accreditation",
    description:
      "End-to-end consultancy for visioning, environment design, staffing models, compliance, and opening readiness.",
    href: "/about"
  },
  {
    title: "Teacher Training & Coaching",
    description:
      "Practical, mentor-led pathways for assistant, lead guide, and instructional leadership development.",
    href: "/training"
  },
  {
    title: "Materials & Classroom Setup",
    description:
      "Age-aligned classroom shelves, sensorial materials, language resources, and rollout plans for each level.",
    href: "/materials"
  },
  {
    title: "Books & Curriculum Resources",
    description:
      "High-quality teaching guides, classroom handbooks, and literacy/numeracy resources for consistent delivery.",
    href: "/books"
  }
];

export const methodSteps: MethodStep[] = [
  {
    title: "Discover",
    detail:
      "We map your current classroom reality, leadership goals, and learner profile to design a practical improvement roadmap."
  },
  {
    title: "Design",
    detail:
      "We build a tailored implementation plan with staffing, material lists, training pathways, and measurable milestones."
  },
  {
    title: "Deploy",
    detail:
      "We launch with side-by-side support for school leaders and teachers, including lesson modeling and classroom observation."
  },
  {
    title: "Deepen",
    detail:
      "We sustain quality through coaching cycles, assessment data reviews, and family engagement frameworks."
  }
];

export const programs: Program[] = [
  {
    title: "Montessori Foundation Certificate",
    audience: "New assistants and aspiring classroom guides",
    format: "Hybrid: weekend live sessions + guided practicum",
    duration: "8 weeks",
    outcome: "Confident classroom setup, material presentation flow, and child observation routines"
  },
  {
    title: "Lead Guide Advancement Lab",
    audience: "Experienced teachers seeking stronger outcomes",
    format: "In-person intensive + coaching sprints",
    duration: "12 weeks",
    outcome: "Sharper lesson precision, stronger behavior normalization, and better parent communication"
  },
  {
    title: "School Leadership Accelerator",
    audience: "Founders, principals, and academic coordinators",
    format: "Executive advisory + strategic implementation",
    duration: "16 weeks",
    outcome: "Sustainable systems for team performance, classroom fidelity, enrollment growth, and retention"
  }
];

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: "https://images.pexels.com/photos/31864415/pexels-photo-31864415.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Children using Montessori stacking materials in a classroom",
    caption: "Sensorial concentration cycle with tower sequencing material",
    photographer: "Bhupindra International Public School",
    sourceLabel: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/children-participating-in-montessori-learning-activity-31864415/"
  },
  {
    src: "https://images.pexels.com/photos/31864433/pexels-photo-31864433.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Young learners working with geometric Montessori materials",
    caption: "Collaborative geometry work in an early learning environment",
    photographer: "Bhupindra International Public School",
    sourceLabel: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/children-engaged-in-montessori-learning-activities-31864433/"
  },
  {
    src: "https://images.pexels.com/photos/31864403/pexels-photo-31864403.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Children concentrating on Montessori manipulatives",
    caption: "Fine-motor and sequencing tasks with guided independence",
    photographer: "Bhupindra International Public School",
    sourceLabel: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/kids-learning-through-montessori-activities-31864403/"
  },
  {
    src: "https://images.pexels.com/photos/8535190/pexels-photo-8535190.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Teacher guiding children with blocks in a bright learning space",
    caption: "Teacher-facilitated problem solving with manipulatives",
    photographer: "Ksenia Chernaya",
    sourceLabel: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/a-teacher-playing-with-the-kids-in-the-school-8535190/"
  },
  {
    src: "https://images.pexels.com/photos/8535198/pexels-photo-8535198.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Teacher and children painting together in an early years classroom",
    caption: "Expressive arts block supervised by a trained guide",
    photographer: "Ksenia Chernaya",
    sourceLabel: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/children-and-teacher-painting-in-classroom-8535198/"
  },
  {
    src: "https://images.pexels.com/photos/8535165/pexels-photo-8535165.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Teacher supporting children in a table-based activity",
    caption: "Focused small-group work with direct teacher observation",
    photographer: "Ksenia Chernaya",
    sourceLabel: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/teacher-and-children-doing-craft-activity-8535165/"
  }
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Bloom Edu-care helped us move from a beautiful idea to a functioning school system. Our classrooms now feel calm, purposeful, and deeply child-centered.",
    author: "Dr. Adaeze N.",
    role: "Founder, Lighthouse Montessori Academy"
  },
  {
    quote:
      "The consultancy did not just train teachers. They transformed leadership habits, lesson quality, and family confidence in our program.",
    author: "Michael R.",
    role: "School Director, Oakfield Learning Hub"
  },
  {
    quote:
      "Their materials plan and coaching cadence eliminated waste and gave us a clear path to consistency across all classrooms.",
    author: "Chioma E.",
    role: "Academic Coordinator, Riverstone Early Years"
  }
];

export const faqItems: FAQ[] = [
  {
    question: "Do you work with new schools or only established schools?",
    answer:
      "Both. We support founders building from scratch and established schools across Montessori and non-Montessori models."
  },
  {
    question: "Can training be delivered to our in-house team?",
    answer:
      "Yes. We offer in-house cohorts, live virtual sessions, and blended models depending on your timeline and staff availability."
  },
  {
    question: "Do you provide material procurement support?",
    answer:
      "Yes. We produce age-level procurement guides, quality checks, and staged rollout schedules to help you avoid unnecessary costs."
  },
  {
    question: "How quickly can we start?",
    answer:
      "Discovery calls are usually booked within 48 hours, and implementation planning can begin within one week after kickoff."
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: "Amara Bassey",
    role: "Founder & Lead Consultant",
    bio: "Education strategist with 14 years of experience in school launch advisory, curriculum architecture, and teacher development."
  },
  {
    name: "Daniel K. Obi",
    role: "Director of Training",
    bio: "Former classroom lead and mentor coach specializing in practical demonstration cycles, assessment routines, and guide performance."
  },
  {
    name: "Grace Holloway",
    role: "Head of Family Partnership",
    bio: "Builds parent communication systems that align home and school support around concentration, independence, and social development."
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: "what-makes-a-montessori-classroom-high-performing",
    title: "What Makes a Montessori Classroom High-Performing",
    excerpt:
      "A practical framework schools can use to audit environment readiness, material flow, and teaching consistency.",
    coverImage: "https://images.pexels.com/photos/31864415/pexels-photo-31864415.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "School Quality",
    date: "2026-03-14",
    readTime: "7 min read",
    author: "Amara Bassey",
    sections: [
      {
        heading: "Prepared Environment Before Perfect Lessons",
        paragraphs: [
          "High-performing Montessori classrooms begin with intentional physical setup. Children should be able to access materials independently, return them to exact positions, and move through activities without crowding.",
          "When flow is blocked by poor shelf logic or mixed-age clutter, guides spend too much time redirecting. A clear environment lowers friction and increases concentration windows."
        ]
      },
      {
        heading: "Guide Precision Changes Everything",
        paragraphs: [
          "In top classrooms, presentations are concise, sequenced, and consistent across guides. Teachers know exactly what mastery indicators to observe and when to re-present.",
          "Consistency matters more than charisma. A stable lesson language across staff helps children feel secure and confident in each work cycle."
        ]
      },
      {
        heading: "Leadership Is a Classroom Variable",
        paragraphs: [
          "School leaders who observe classrooms weekly and coach from evidence create faster quality gains. Leadership should monitor not only outcomes, but fidelity to process.",
          "When leadership routines are predictable, classroom teams improve with less burnout and fewer emergency interventions."
        ]
      }
    ],
    takeaways: [
      "Audit shelf flow before introducing new teacher initiatives.",
      "Standardize presentation checkpoints across guides.",
      "Build leadership observation into the weekly rhythm."
    ]
  },
  {
    slug: "how-to-train-teachers-for-real-classroom-consistency",
    title: "How to Train Teachers for Real Classroom Consistency",
    excerpt:
      "Move beyond workshop-only training and build a coaching system that actually changes classroom behavior.",
    coverImage: "https://images.pexels.com/photos/8535198/pexels-photo-8535198.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Teacher Development",
    date: "2026-02-25",
    readTime: "6 min read",
    author: "Daniel K. Obi",
    sections: [
      {
        heading: "Training Without Coaching Does Not Stick",
        paragraphs: [
          "Many schools run excellent workshops but see little transfer into daily practice. Without observation and feedback cycles, habits remain unchanged.",
          "A stronger model combines short theory modules with immediate classroom practice and mentor check-ins."
        ]
      },
      {
        heading: "Use Demonstration Ladders",
        paragraphs: [
          "Guides need to see the same concept demonstrated at novice, competent, and advanced levels. This gives teachers a practical path for growth instead of abstract standards.",
          "Demonstration ladders also make peer learning easier because teams can name what level of execution they are currently delivering."
        ]
      },
      {
        heading: "Measure What You Coach",
        paragraphs: [
          "If concentration time, transition smoothness, and material completion are priorities, they should be tracked consistently. Coaching should refer directly to those metrics.",
          "Simple scorecards can drive major improvements when used weekly and paired with specific next actions."
        ]
      }
    ],
    takeaways: [
      "Pair every training module with live coaching.",
      "Make expectations visible through demonstration ladders.",
      "Track metrics that matter to classroom quality."
    ]
  },
  {
    slug: "materials-procurement-without-budget-waste",
    title: "Materials Procurement Without Budget Waste",
    excerpt:
      "How school founders can stage Montessori material purchases while still delivering authentic classroom experiences.",
    coverImage: "https://images.pexels.com/photos/31864433/pexels-photo-31864433.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Operations",
    date: "2026-01-30",
    readTime: "8 min read",
    author: "Grace Holloway",
    sections: [
      {
        heading: "Start With Learning Progressions",
        paragraphs: [
          "Procurement decisions should follow curriculum progression, not catalog order. Prioritize materials that unlock the highest number of core lessons first.",
          "This approach ensures your classroom can run effectively even before your full inventory is complete."
        ]
      },
      {
        heading: "Buy for Durability, Not Just Price",
        paragraphs: [
          "Low-cost materials often degrade quickly in high-use environments, forcing repeat purchases and disrupting classroom consistency.",
          "Schools that define durability and replacement benchmarks usually spend less over a two-year cycle."
        ]
      },
      {
        heading: "Protect the Rollout With Training",
        paragraphs: [
          "New materials only improve outcomes when guides know presentation sequence, control of error, and shelf positioning standards.",
          "Procurement and training should be planned together so each material is introduced with confidence and purpose."
        ]
      }
    ],
    takeaways: [
      "Procure in curriculum phases, not all at once.",
      "Use total cost over lifecycle as your budget metric.",
      "Synchronize material delivery with teacher readiness."
    ]
  }
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

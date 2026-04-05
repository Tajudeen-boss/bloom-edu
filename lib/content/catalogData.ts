export type CatalogBook = {
  title: string;
  level: string;
  image: string;
  subject: string;
  price: string;
  slug: string;
};

export type BookCategory = {
  key: string;
  title: string;
  description: string;
  books: CatalogBook[];
};

export type TrainingHighlight = {
  title: string;
  detail: string;
};

export type TrainingCohort = {
  program: string;
  nextStart: string;
  duration: string;
  format: string;
  status: "Open" | "Almost Full";
};

export type MaterialCollection = {
  title: string;
  detail: string;
  focus: string;
};

export type CmsPanel = {
  title: string;
  summary: string;
  items: string[];
};

export const bookCatalogByCategory: BookCategory[] = [
  {
    key: "language",
    title: "Language",
    description:
      "Early literacy, vocabulary development, phonemic awareness, blending, and grammar progression for toddler and early years classrooms.",
    books: [
      {
        title: "Language for Toddlers",
        level: "Toddlers",
        image: "/books/catalog/language-for-toddlers.jpeg",
        subject: "Language",
        price: "$38",
        slug: "language-for-toddlers"
      },
      {
        title: "Language Blue Series",
        level: "Pre-reading",
        image: "/books/catalog/language-blue-series.jpeg",
        subject: "Language",
        price: "$34",
        slug: "language-blue-series"
      },
      {
        title: "Language Pink Series",
        level: "Word building",
        image: "/books/catalog/language-pink-series.jpeg",
        subject: "Language",
        price: "$34",
        slug: "language-pink-series"
      },
      {
        title: "Language Green Series and Early Grammar",
        level: "Early grammar",
        image: "/books/catalog/language-green-series-early-grammar.jpeg",
        subject: "Language",
        price: "$36",
        slug: "language-green-series-and-early-grammar"
      }
    ]
  },
  {
    key: "mathematics",
    title: "Mathematics",
    description:
      "Hands-on numeracy progressions from concrete manipulatives to structured early arithmetic for early years programs.",
    books: [
      {
        title: "Mathematics for Toddlers",
        level: "Toddlers",
        image: "/books/catalog/mathematics-for-toddlers.jpeg",
        subject: "Mathematics",
        price: "$39",
        slug: "mathematics-for-toddlers"
      },
      {
        title: "Mathematics Workbook 1",
        level: "Foundation",
        image: "/books/catalog/mathematics-workbook-1.jpeg",
        subject: "Mathematics",
        price: "$29",
        slug: "mathematics-workbook-1"
      },
      {
        title: "Mathematics Workbook 2",
        level: "Intermediate",
        image: "/books/catalog/mathematics-workbook-2.jpeg",
        subject: "Mathematics",
        price: "$29",
        slug: "mathematics-workbook-2"
      },
      {
        title: "Mathematics Workbook 3",
        level: "Advanced early years",
        image: "/books/catalog/mathematics-workbook-3.jpeg",
        subject: "Mathematics",
        price: "$31",
        slug: "mathematics-workbook-3"
      }
    ]
  },
  {
    key: "sensorial-colouring",
    title: "Sensorial and Colouring Book",
    description:
      "Visual discrimination, shape recognition, form exploration, and sensorial reinforcement activities for prepared environments.",
    books: [
      {
        title: "Sensorial and Colouring Book 1",
        level: "Foundation",
        image: "/books/catalog/sensorial-colouring-book-1.jpeg",
        subject: "Sensorial",
        price: "$27",
        slug: "sensorial-and-colouring-book-1"
      },
      {
        title: "Sensorial and Colouring Book 2",
        level: "Intermediate",
        image: "/books/catalog/sensorial-colouring-book-2.jpeg",
        subject: "Sensorial",
        price: "$27",
        slug: "sensorial-and-colouring-book-2"
      },
      {
        title: "Sensorial and Colouring Book 3",
        level: "Advanced early years",
        image: "/books/catalog/sensorial-colouring-book-3.jpeg",
        subject: "Sensorial",
        price: "$27",
        slug: "sensorial-and-colouring-book-3"
      }
    ]
  },
  {
    key: "cultural-world-knowledge",
    title: "Cultural and Knowledge of the World",
    description:
      "Geography, nature, community, and global awareness resources that build curiosity and cross-cultural understanding.",
    books: [
      {
        title: "Cultural and Knowledge of the World Toddlers",
        level: "Toddlers",
        image: "/books/catalog/cultural-knowledge-world-toddlers.jpeg",
        subject: "Culture",
        price: "$37",
        slug: "cultural-and-knowledge-of-the-world-toddlers"
      },
      {
        title: "Cultural and Knowledge of the World Book 1",
        level: "Book 1",
        image: "/books/catalog/cultural-knowledge-world-book-1.jpeg",
        subject: "Culture",
        price: "$32",
        slug: "cultural-and-knowledge-of-the-world-book-1"
      },
      {
        title: "Cultural and Knowledge of the World Book 2",
        level: "Book 2",
        image: "/books/catalog/cultural-knowledge-world-book-2.jpeg",
        subject: "Culture",
        price: "$32",
        slug: "cultural-and-knowledge-of-the-world-book-2"
      },
      {
        title: "Cultural and Knowledge of the World Book 3",
        level: "Book 3",
        image: "/books/catalog/cultural-knowledge-world-book-3.jpeg",
        subject: "Culture",
        price: "$32",
        slug: "cultural-and-knowledge-of-the-world-book-3"
      }
    ]
  }
];

export const trainingHighlights: TrainingHighlight[] = [
  {
    title: "Live Demonstration Cycles",
    detail: "Every cohort includes model lessons, observation notes, and guided reteach practice for higher consistency."
  },
  {
    title: "Mentor Coaching",
    detail: "Weekly coaching touchpoints help teachers translate training into day-to-day classroom routines."
  },
  {
    title: "Assessment and Certification",
    detail: "Progress rubrics, performance review checkpoints, and completion certificates for school documentation."
  },
  {
    title: "Leadership Reporting",
    detail: "School leaders receive structured implementation reports and next-step recommendations."
  }
];

export const trainingCohorts: TrainingCohort[] = [
  {
    program: "Montessori Foundation Certificate",
    nextStart: "May 20, 2026",
    duration: "8 weeks",
    format: "Hybrid",
    status: "Open"
  },
  {
    program: "Lead Guide Advancement Lab",
    nextStart: "June 10, 2026",
    duration: "12 weeks",
    format: "In-person + Coaching",
    status: "Almost Full"
  },
  {
    program: "School Leadership Accelerator",
    nextStart: "July 2, 2026",
    duration: "16 weeks",
    format: "Executive Advisory",
    status: "Open"
  }
];

export const materialCollections: MaterialCollection[] = [
  {
    title: "Practical Life Essentials",
    detail: "Pouring, spooning, dressing frames, grace and courtesy tools, and daily life task materials.",
    focus: "Toddler and Early Childhood"
  },
  {
    title: "Sensorial Core Set",
    detail: "Pink tower, broad stair, red rods, geometric solids, and extension activities.",
    focus: "Early Childhood"
  },
  {
    title: "Mathematics Shelf Bundle",
    detail: "Number rods, spindle boxes, bead stair, decimal board, and concrete operation materials.",
    focus: "Early Childhood and Lower Elementary"
  },
  {
    title: "Language Shelf Bundle",
    detail: "Sandpaper letters, movable alphabet, object boxes, grammar symbols, and reading extensions.",
    focus: "Early Childhood and Lower Elementary"
  }
];

export const cmsPanels: CmsPanel[] = [
  {
    title: "Blog CMS",
    summary: "Manage featured insights, publish dates, author metadata, and article cover media.",
    items: [
      "Editorial calendar with draft and publish status",
      "Slug-safe titles and SEO-ready descriptions",
      "Category tagging for school quality, operations, and training"
    ]
  },
  {
    title: "Books CMS",
    summary: "Track catalog entries by subject and level with category-specific publishing controls.",
    items: [
      "Language, Mathematics, Sensorial, and Cultural categories",
      "Cover image mapping and product-level pricing",
      "Subdomain-ready URLs and inventory visibility"
    ]
  },
  {
    title: "Training CMS",
    summary: "Coordinate program schedules, seats, booking availability, and cohort communication.",
    items: [
      "Program publishing and seat controls",
      "Upcoming intake and calendar management",
      "Cohort status tracking and confirmation workflow"
    ]
  },
  {
    title: "Materials CMS",
    summary: "Maintain product groups, stock posture, and procurement bundles for schools.",
    items: [
      "Category-level merchandising",
      "Variant and stock status controls",
      "Bundle recommendations by classroom level"
    ]
  }
];

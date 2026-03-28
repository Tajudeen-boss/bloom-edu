import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.trainingProgram.createMany({
    data: [
      {
        title: "Montessori Foundations (3-6)",
        description: "Core Montessori pedagogy for early childhood classrooms.",
        level: "Assistant Guide",
        startDate: new Date("2026-05-15"),
        endDate: new Date("2026-08-15"),
        price: 650,
        seats: 30,
        isPublished: true
      },
      {
        title: "Sensorial Deep Dive",
        description: "Advanced sensorial materials sequencing and lesson design.",
        level: "Lead Guide",
        startDate: new Date("2026-06-01"),
        endDate: new Date("2026-07-20"),
        price: 420,
        seats: 20,
        isPublished: true
      }
    ],
    skipDuplicates: true
  });

  await prisma.product.create({
    data: {
      name: "Pink Tower Set",
      slug: "pink-tower-set",
      description: "Premium hardwood pink tower with precision cubes.",
      category: "Sensorial",
      status: "ACTIVE",
      variants: {
        create: [
          { sku: "PT-STD", name: "Standard", price: 185, stock: 40 },
          { sku: "PT-CLS", name: "Classroom Bundle", price: 520, stock: 10 }
        ]
      }
    }
  });

  await prisma.book.createMany({
    data: [
      {
        title: "Montessori Language Pathways",
        slug: "montessori-language-pathways",
        description: "CEO-authored practical language progression manual.",
        subject: "Language",
        price: 45,
        isPublished: true
      },
      {
        title: "Numeracy Through Montessori Materials",
        slug: "numeracy-through-montessori-materials",
        description: "Concrete-to-abstract math progression from early years onward.",
        subject: "Numeracy",
        price: 49,
        isPublished: true
      }
    ],
    skipDuplicates: true
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });

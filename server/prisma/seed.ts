import { prisma } from "../src/lib/prisma.js";

async function main() {
  // Reset database
  await prisma.todo.deleteMany();
  console.log("Cleared existing todos.");
  // Create new todos
  const todo1 = await prisma.todo.create({
    data: {
      title: "Learn Prisma",
    },
  });
  const todo2 = await prisma.todo.create({
    data: {
      title: "Learn TypeScript",
    },
  });
  console.log("Created todos:", { todo1, todo2 });

  // Fetch all todos
  const allTodos = await prisma.todo.findMany();
  console.log("All todos:", JSON.stringify(allTodos, null, 2));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

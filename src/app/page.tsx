import prisma from "@/lib/prisma";

export default async function Home() {
  const entries = await prisma.entry.findMany();
  return (
    <>
      {entries.map((entry) => (
        <div key={entry.id}>
          <h1>{entry.title}</h1>
          <h1>{entry.content}</h1>
        </div>
      ))}
    </>
  );
}

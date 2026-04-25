import { Button } from "@/components/ui/button";
import ROUTES from "@/constant/routes";
import Link from "next/link";
import LocalSearch from "@/components/search/LocalSearch";

// placeholder data
const questions = [ { _id: "1", title: "How to learn React?", description: "I want to learn React, can anyone help me?", tags: [ { _id: "1", name: "React" }, { _id: "2", name: "JavaScript" }, ], author: { _id: "1", name: "John Doe" }, upvotes: 15, answers: 6, views: 120, createdAt: new Date(), }, { _id: "2", title: "Best way to master JavaScript fundamentals?", description: "Looking for a solid roadmap to learn JS deeply.", tags: [ { _id: "2", name: "JavaScript" }, { _id: "4", name: "Programming" }, ], author: { _id: "2", name: "Alice" }, upvotes: 20, answers: 8, views: 200, createdAt: new Date(), }, { _id: "3", title: "How does Next.js routing work?", description: "Confused between app router and pages router.", tags: [ { _id: "3", name: "Next" }, { _id: "1", name: "React" }, ], author: { _id: "3", name: "Bob" }, upvotes: 12, answers: 4, views: 150, createdAt: new Date(), }, { _id: "4", title: "Node.js vs Deno: which should I use?", description: "Trying to decide between Node and Deno for backend.", tags: [ { _id: "5", name: "Node" }, { _id: "6", name: "Deno" }, ], author: { _id: "4", name: "Charlie" }, upvotes: 18, answers: 7, views: 220, createdAt: new Date(), }, { _id: "5", title: "How to manage state in React apps?", description: "Redux vs Context API vs Zustand?", tags: [ { _id: "1", name: "React" }, { _id: "7", name: "Redux" }, ], author: { _id: "5", name: "David" }, upvotes: 25, answers: 10, views: 300, createdAt: new Date(), }, { _id: "6", title: "How to optimize performance in Next.js?", description: "My app feels slow, need optimization tips.", tags: [ { _id: "3", name: "Next" }, { _id: "8", name: "Performance" }, ], author: { _id: "6", name: "Eve" }, upvotes: 14, answers: 5, views: 180, createdAt: new Date(), }, { _id: "7", title: "MongoDB vs PostgreSQL: which is better?", description: "Confused about choosing a database for my project.", tags: [ { _id: "9", name: "MongoDB" }, { _id: "10", name: "PostgreSQL" }, ], author: { _id: "7", name: "Frank" }, upvotes: 22, answers: 9, views: 260, createdAt: new Date(), }, ]; interface SearchParams { searchParams: Promise<{ [key: string]: string }>; }

export default async function Home({ searchParams }: SearchParams) {
  const { query } = await searchParams;
  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(query?.toLowerCase()),
  );

  return (
    <>
      <section className="w-full flex flex-col-reverse sm:flex-row justify-between gap-4 sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          className="primary-gradient min-h-11.5 px-4 py-3 text-light-900!"
          asChild
        >
          <Link href={ROUTES.ASKQUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
          route="/"
          iconsPosition="left"
        />
      </section>
      HomeFilter
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((q) => (
          <h1 key={q._id}>{q.title}</h1>
        ))}
      </div>
      {!query && <div className="mt-10 flex w-full flex-col gap-6">
        {questions.map((q) => (
          <h1 key={q._id}>{q.title}</h1>
        ))}
      </div>
      }
    </>
  );
}

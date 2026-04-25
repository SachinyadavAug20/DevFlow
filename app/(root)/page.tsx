import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import { signOut } from "@/auth";
import ROUTES from "@/constant/routes";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  console.log(session);
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
      <section className="mt-11">LocalSearch</section>
      HomeFilter
      <div className="mt-10 flex w-full flex-col gap-6">
        <p>Question card 1</p>
        <p>Question card 2</p>
        <p>Question card 3</p>
        <p>Question card 4</p>
      </div>
    </>
  );
}

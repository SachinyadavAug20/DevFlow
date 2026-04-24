import ROUTES from "@/constant/routes";
import Link from "next/link";
import Image from "next/image";
import TagCard from "../card/TagCard";

const hotQuestion = [
  { id: "1", title: "How to create a react app" },
  { id: "2", title: "Where is the react next secret and envs" },
  { id: "3", title: "What is the use of react router" },
  { id: "4", title: "Who to make a navbar in react" },
  { id: "5", title: "What is the use of react context api" },
];
const popularTags = [
  {_id:"1",name:"React",NO_question:123},
  {_id:"2",name:"Next",NO_question:231},
  {_id:"3",name:"Node",NO_question:143},
  {_id:"4",name:"JavaScript",NO_question:297},
  {_id:"5",name:"TypeScript",NO_question:122},
  {_id:"6",name:"Redux",NO_question:12},
  {_id:"7",name:"MongoDB",NO_question:23},
  {_id:"8",name:"Tailwind",NO_question:12},
  {_id:"9",name:"Bootstrap",NO_question:13},
]

const RightSideBar = () => {
  return (
    <section className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-lg:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestion.map((e) => (
            <div key={e.id}>
              <Link className="flex cursor-pointer items-center justify-between gap-7" href={`${ROUTES.QUESTIONS}/${e.id}`} >
                <p className="body-medium text-dark500_light700">{e.title}</p>
                <Image
                  src="/icons/chevron-right.svg"
                  width={20}
                  height={20}
                  alt="chevron-right"
                  className="invert-colors"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex w-full flex-col gap-4">
          {popularTags.sort((a,b)=>b.NO_question-a.NO_question).map((e)=>{
            return(
              <TagCard key={e._id} _id={e._id} name={e.name} NO_question={e.NO_question} showCount={true} compact={true}/>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;

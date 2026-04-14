import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <div>
      <>
        <h1 className="text-light-500 bg-white align-middle"> Hello world </h1>
        <div className="card-of-info"> Detailed Box of TEXT!!! </div>
        <div className="card-of-info font-inter">
          {" "}
          Detailed Box of TEXT!!! (inter)
        </div>
        <div className="card-of-info font-diff">
          {" "}
          Detailed Box of TEXT!!! (diff)
        </div>
        <Button className="text-2xl mx-[45vw] my-10">Hello shadCN</Button>
      </>
    </div>
  );
}

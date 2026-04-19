import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import { signOut } from "@/auth"
import ROUTES from "@/constant/routes";

export default async function Home() {
  const session = await auth();
  console.log(session)
  return (
    <div>
      <>
        <h1 className="text-light-500 bg-white align-middle"> Hello world </h1>
        <div className="card-of-info"> Detailed Box of TEXT!!! </div>
        <div className="card-of-info font-inter">
          {" "}
          Detailed Box of TEXT!!! (inter)
        </div>
        {session &&
        <div className="card-of-info font-diff">
          {`Hello ${session.user?.name}, your image is:`}
          <img src={session.user?.image!} alt="User avatar" height={50} width={50} />
          <p>{session.user?.email}</p>
        </div>}
        <Button className="text-2xl mx-[45vw] my-10">Hello shadCN</Button>
        <form className="px-10 pt-25" action={async()=>{
          "use server"
          await signOut({redirectTo:ROUTES.SIGN_IN})
        }}>
          <Button type="submit">Log out</Button>
        </form>
      </>
    </div>
  );
}

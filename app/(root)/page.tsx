import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import { signOut } from "@/auth"
import ROUTES from "@/constant/routes";

export default async function Home() {
  const session = await auth();
  console.log(session)
  return (
    <div className="py-21">
        <form className="pt-1" action={async()=>{
          "use server"
          await signOut({redirectTo:ROUTES.SIGN_IN})
        }}>
          <Button type="submit">Log out</Button>
        </form>
    </div>
  );
}

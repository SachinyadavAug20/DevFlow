import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default async function Home() {
  return (
    <div>
      <>
        <div className="font-logofont border flex-between px-4 border-amber-300 rounded-1.5 font-bold text-6xl">
          DevFlow
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
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

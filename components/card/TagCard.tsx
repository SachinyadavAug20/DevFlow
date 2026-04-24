import ROUTES from "@/constant/routes";
import { Badge } from "lucide-react";
import Link from "next/link";

interface Props{
  _id:string;
  name:string;
  NO_question:number;
  showCount?:Boolean;
  compact?:Boolean;
}

const TagCard = ({_id,name,NO_question,showCount,compact}:Props) => {
  return (
    <>
      <Link href={`${ROUTES.TAGS}/${_id}`} className="flex justify-center gap-2">
        <Badge>
        </Badge>
      </Link>
    </>
  )
}

export default TagCard

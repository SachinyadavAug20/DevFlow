import ROUTES from "@/constant/routes";
import { getDeviconsClassName } from "@/lib/utils";
import { Badge } from "../ui/badge";
import Link from "next/link";

interface Props {
  _id: string;
  name: string;
  NO_question?: number;
  showCount?: Boolean;
  compact?: Boolean;
}

const TagCard = ({ _id, name, NO_question, showCount, compact }: Props) => {
  const iconClass = getDeviconsClassName(name);
  return (
      <Link
        href={`${ROUTES.TAGS}/${_id}`}
        className="flex justify-between gap-1"
      >
        <Badge className="subtle-medium background-light900_dark300! text-dark500_light700! rounded-md border-none px-2 py-3 uppercase"> 
        <div className="flex-center space-x-2 ">
            <i className={`${iconClass} text-sm`}></i>
            <span>{name}</span>
          </div>
        </Badge>
        {showCount && (
          <p className="small-medium text-dark500_light700">{NO_question}</p>
        )}
      </Link>
  );
};

export default TagCard;

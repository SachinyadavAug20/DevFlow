interface Tags{
  _id:string,
  name:string,
}
interface Author{
  _id:string,
  name:string,
  image?:string,
}
interface Question {
  _id: string;
  title: string;
  description: string;
  tags: Tags[];
  author: Author;
  upvotes: number;
  downvotes: number;
  answers: number;
  views: number;
  createdAt: Date;
}

import { model,Schema,models, Types } from "mongoose";


export interface ITagQuestion {
  tag:Types.ObjectId
  question:Types.ObjectId
}

const TagQuestionSchema = new Schema<ITagQuestion>({
  tag:{type:Schema.Types.ObjectId,ref:"Tag",require:true},
  question:{type:Schema.Types.ObjectId,ref:"Question",require:true},

},{timestamps:true});

const TagQuestion =models?.TagQuestion || model<ITagQuestion>("TagQuestion", TagQuestionSchema);
export default TagQuestion


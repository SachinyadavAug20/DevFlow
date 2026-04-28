import { model,Schema,models, Types } from "mongoose";


export interface ICollection{
  author:Types.ObjectId
  questions:Types.ObjectId[]
}

const CollectionSchema = new Schema<ICollection>({
  author:{type:Schema.Types.ObjectId,ref:"User",require:true},
  questions:[{type:Schema.Types.ObjectId,ref:"Question"}],
},{timestamps:true});

const Collection =models?.Collection || model<ICollection>("Collection", CollectionSchema);
export default Collection


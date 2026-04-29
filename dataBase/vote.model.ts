import { model,Schema,models, Types } from "mongoose";


export interface IVote {
  author:Types.ObjectId
  id:Types.ObjectId
  type:"question"|"answer"
  voteType:"upvote"|"downvote"
}

const VoteSchema = new Schema<IVote>({
  author:{type:Schema.Types.ObjectId,ref:"User",require:true},
  id:{type:Schema.Types.ObjectId,require:true}, // can be to answer or question
  type:{type:String,require:true,enum:["question","answer"]},
  voteType:{type:String,require:true,enum:["upvote","downvote"]},
},{timestamps:true});

const Vote =models?.Vote || model<IVote>("Vote", VoteSchema);
export default Vote


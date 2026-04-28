import { model,Schema,models, Types } from "mongoose";


export interface IAccount {
  userId: Types.ObjectId;
  name:string;
  image?:string;
  password?:string;
  provider:string;
  providerAccountId:string;
}

const AccountSchema = new Schema<IAccount>({
  userId: { type: Schema.Types.ObjectId, ref:'User',required:true },
  name:{type:String,require:true},
  image:{type:String},
  password:{type:String},
  provider:{type:String,require:true},
  providerAccountId:{type:String,require:true},
},{timestamps:true});

const Account =models?.Account || model<IAccount>("Account", AccountSchema);
export default Account

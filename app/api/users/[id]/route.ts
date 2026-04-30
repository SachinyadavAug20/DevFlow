import User from "@/dataBase/user.model";
import { NotFoundError } from "@/lib/http-error";
import dbConnect from "@/lib/mongoose";
import { NextResponse } from "next/server";
import { APIErrorResponse } from "@/types/global";
import handleError from "@/lib/handlers/error";
import { connect } from "http2";
import { UserSchema } from "@/lib/validation";
import { error } from "console";

// get user by ID
export async function GET( _: Request, { params }: { params: Promise<{ id: string }> },) {
  const { id } = await params;
  if (!id) throw new NotFoundError("UserID");
  try {
    await dbConnect();
    const user = await User.findOne({_id:id});
    if (!user)  throw new NotFoundError("user"); 
    return NextResponse.json({ sucess: true, data: user }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

// delete user by id
export async function DELETE( _: Request, { params }: { params: Promise<{ id: string }> },) {
  const { id } = await params;
  if (!id) throw new NotFoundError("UserID");
  try {
    await dbConnect();
    const user = await User.findOneAndDelete({_id:id});
    if (!user)  throw new NotFoundError("user"); 
    return NextResponse.json({ sucess: true, data: user }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

// update user
export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> },) {
  const {id}=await params;
  if(!id) throw new NotFoundError("UserID");
  try {
    await dbConnect()
    const body=await req.json()
    const validatedData=await UserSchema.partial().parse(body)
    const updatedUser=await User.findOneAndUpdate({_id:id},validatedData,{new:true})
    if(!updatedUser) throw new NotFoundError("User")
    return NextResponse.json({sucess:true,data:updatedUser},{status:200});
  } catch (error) {
    return handleError(error,"api") as APIErrorResponse
  }
}

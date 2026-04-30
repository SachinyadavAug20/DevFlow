import Account from "@/dataBase/account.model";
import handleError from "@/lib/handlers/error";
import { NotFoundError, ValidationError } from "@/lib/http-error";
import dbConnect from "@/lib/mongoose";
import { AccountSchema } from "@/lib/validation";
import { APIErrorResponse } from "@/types/global";
import { NextResponse } from "next/server";

// get account
export async function GET( _: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    if (!id) throw new NotFoundError("AccountID");
    await dbConnect();
    const account = await Account.findOne({ _id: id });
    if (!account) throw new NotFoundError("Account");
    return NextResponse.json({ sucess: true, data: account }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

// delete account
export async function DELETE( _: Request, { params }: { params: Promise<{ id: string }>}) {
  try {
    const { id } = await params;
    if (!id) throw new NotFoundError("AccountID");
    await dbConnect();
    const account = await Account.findOneAndDelete({ _id: id });
    if (!account) throw new NotFoundError("Account");
    return NextResponse.json({ sucess: true, data: account }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

// update account
export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    if (!id) throw new NotFoundError("AccountID");
    const body = await req.json();
    await dbConnect();
    const validatedData = AccountSchema.partial().safeParse(body);
    if(!validatedData.success) throw new ValidationError(validatedData.error.flatten().fieldErrors)
    const updatedAccount = await Account.findOneAndUpdate({_id:id},validatedData,{new:true});
    if(!updatedAccount) throw new NotFoundError("Account")
    return NextResponse.json({ sucess: true, data: updatedAccount }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

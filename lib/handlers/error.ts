import { NextResponse } from "next/server"
import { RequestError, ValidationError } from "../http-error";
import { ZodError } from "zod";

export type ResponseType="api"|"server" // handling 2 types of error api or server action

const formatResponse=(responseType:ResponseType,status:number,message:string,errors?:Record<string,string[]>|string |undefined)=>{
  const responseContent={
    success:false,
    error:{
      message:message,
      details:errors
    }
  }

  return responseType==='api'?NextResponse.json(responseContent,{status}):{status:status,...responseContent};
}

const handleError=(error:unknown, responseType:ResponseType="server")=>{
  if(error instanceof RequestError){
    return formatResponse(responseType,error.statusCode,error.message,error.errors)
  }
  if(error instanceof ZodError){
    const validationErrors=new ValidationError(error.flatten().fieldErrors as Record<string,string[]>) // flatteb convert array of arrau into single array
    return formatResponse(responseType,validationErrors.statusCode,validationErrors.message,validationErrors.errors)
  }
  if(error instanceof Error){
    return formatResponse(responseType,500,error.message) //general
  }
  return formatResponse(responseType,500,"Unexpected error occured")
}

export default handleError

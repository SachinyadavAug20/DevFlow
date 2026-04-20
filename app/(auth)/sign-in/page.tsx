"use client"
import AuthFormOfUsername from "@/components/forms/AuthForm"
import { SignInSchema } from "@/lib/validation"

const page = () => {
  return (
    <>
    <AuthFormOfUsername 

    formtype="SIGN_IN" 
    schema={SignInSchema}
    defaultValues={{email:"",password:""}} 
    onSubmit={(data)=>Promise.resolve({success:true})}

    />
    </>
  )
}

export default page

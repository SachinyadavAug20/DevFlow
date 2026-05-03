"use client"
import AuthFormOfUsername from "@/components/forms/AuthForm"
import { signUpWithCredentials } from "@/lib/actions/auth.action"
import { SignUpSchema } from "@/lib/validation"

const page = () => {
  return (
    <div>

    <AuthFormOfUsername

    formtype="SIGN_UP" 
    schema={SignUpSchema}
    defaultValues={{email:"",password:"",name:"",username:""}}
    onSubmit={signUpWithCredentials}

    />
    </div>
  )
}

export default page

"use client"
import AuthFormOfUsername from "@/components/forms/AuthForm"
import { SignUpSchema } from "@/lib/validation"

const page = () => {
  return (
    <div>

    <AuthFormOfUsername

    formtype="SIGN_UP" 
    schema={SignUpSchema}
    defaultValues={{email:"",password:"",name:"",username:""}}
    onSubmit={(data)=>Promise.resolve({success:true})}

    />
    </div>
  )
}

export default page

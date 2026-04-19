import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import NextAuth from "next-auth"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub,Google],
})

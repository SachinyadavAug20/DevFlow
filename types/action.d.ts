export interface SignInWithOAuthParams{
  provider:'github'|'google'|'apple',
  providerAccountId:string,
  user:{name:string;username:string;email:string;image:string}
}

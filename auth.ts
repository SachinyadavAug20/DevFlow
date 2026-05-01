import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import NextAuth from "next-auth";
import { api } from "./lib/api";
import { Provider } from "@radix-ui/react-toast";
import { ActionResponse } from "./types/global";
import { IAccount } from "./dataBase/account.model";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google],
  callbacks: {
    // do after oauth
    async session({ session, token }) {
      session.user.id = token.sub as string;
      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        const { data: ExistingAccount, success } =
          (await api.account.getByProviderAccountId(
            account.type === "credentials"
              ? token.email!
              : account.providerAccountId,
          )) as ActionResponse<IAccount>;
        if (!success || !ExistingAccount) return token;
        const userId = ExistingAccount.userId;
        if (userId) token.sub = userId.toString();
      }
      return token;
    },
    async signIn({ user, account, profile }) {
      if (account?.type == "credentials") return true;
      if (!account || !user) return false;
      const userInfo = {
        name: user.name!, // information not null
        username:
          account.provider === "github"
            ? (profile?.login as string)
            : (user.name?.toLowerCase() as string),
        email: user.email!,
        image: user.image!,
      };
      const { success } = (await api.auth.oAuthSignIn({
        user: userInfo,
        provider: account.provider as "github" | "google" | "apple",
        providerAccountId: account.providerAccountId as string,
      })) as ActionResponse;
      return !success ? false : true;
    },
  },
});

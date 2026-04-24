"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import ROUTES from "@/constant/routes";
import { useSession } from "next-auth/react";
import NavLinks from "./navbar/NavLinks";

const Leftsidebar = () => {
  const session = useSession();
  return (
    <section className="custom-scrollbar background-light900_dark300 light-border sticky top-0 left-0 h-screen flex flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks />
      </div>
      <div className="flex flex-col gap-3">
        {session.status === "unauthenticated" && (
          <div className="flex flex-col gap-3">
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none" asChild>
              <Link href={ROUTES.SIGN_IN}>
                <Image
                  src="/icons/account.svg"
                  alt="account"
                  width={20}
                  height={20}
                  className="invert-colors lg:hidden"
                />
                <span className="primary-text-gradient max-lg:hidden">
                  Log In
                </span>
              </Link>
            </Button>

            <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none" asChild>
              <Link href={ROUTES.SIGN_UP}>
                <Image
                  src="/icons/sign-up.svg"
                  alt="signup"
                  width={20}
                  height={20}
                  className="invert-colors lg:hidden"
                />
              <span className="max-lg:hidden">Sign Up</span>
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Leftsidebar;

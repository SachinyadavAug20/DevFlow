import Link from "next/link";
import Image from "next/image";
import Theme from "./Theme";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full p-6 dark:shadow-none sm:px-12 shadow-light-300">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/site-logo.svg"
          alt="Devflow logo"
          width={23}
          height={23}
        />
        <p className="h2-bold font-logofont text-dark-100 dark:text-light-900 max-sm:hidden">
          Base<span className="text-primary-500">Case</span>
        </p>
      </Link>
      <p>Global Search</p>
      <div className="flex-between gap-5"><Theme/></div>
      <MobileNavbar/>
    </nav>
  );
};

export default Navbar;

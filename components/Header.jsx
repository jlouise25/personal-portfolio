/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="px-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo insert here */}
        <Link href="/">
        <h1 className="text-4xl font-semibold">
          Jolo <span className="text-accent">.</span>
        </h1>
        </Link>

        
        {/* desktop navigation and hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Let's Connect!</Button>
          </Link>
        </div>

        {/* mobile nav*/}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header

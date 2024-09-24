import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";

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
            <Button>Download CV</Button>
          </Link>
        </div>

        {/* mobuile nav*/}
        <div className="xl:hidden">Mobile Nav</div>


      </div>
    </header>
  );
};

export default Header

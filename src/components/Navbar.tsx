import { contact } from "@/data/contact";
import { routes } from "@/data/routes";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import Button from "./Button";
import Container from "./Container";
import Logo from "./Logo";
import Socials from "./Socials";

function Menu({
  isOpen,
  className,
}: {
  isOpen: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "fixed inset-0 z-30 h-screen w-screen bg-white transition-[opacity,visibility] duration-500",
        !isOpen && "invisible opacity-0",
        className
      )}
    >
      <Container className="flex flex-col gap-10 pt-28">
        <ul className="flex flex-col gap-6">
          {routes.map((route) => (
            <li
              key={route.name}
              className="text-xl font-semibold hover:opacity-70"
            >
              <Link href={route.href}>{route.name}</Link>
            </li>
          ))}
        </ul>
        <Socials />
      </Container>
    </div>
  );
}

export default function Navbar() {
  // Menu open state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation bar state
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const scrollThreshold = 100;

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      // Mění stav, pokud jsme posunutí o více je hodnota scrollThreshold
      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Skrývá a ukazuje navigaci podle scrollu
      const currentScrollPos = window.scrollY;
      const isScrollingDown = prevScrollPos < currentScrollPos;

      setIsHidden(
        isScrollingDown && currentScrollPos > scrollThreshold
      );

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed inset-x-0 top-0 z-30 w-full transition duration-500",
        isScrolled && "bg-white",
        isHidden && "translate-y-[-100%]",
        isScrolled &&
          !isHidden &&
          "shadow-2xl shadow-gray-900/10"
      )}
    >
      <Container className="flex items-center justify-between py-4 sm:py-7">
        <Logo className="relative z-40" />

        {/* Desktop navigation */}
        <ul className="mr-auto hidden items-center gap-4 pl-10 lg:flex lg:gap-8">
          {routes.map((route) => (
            <li
              key={route.name}
              className="text-sm transition-opacity duration-150 hover:opacity-70"
            >
              <Link href={route.href}>{route.name}</Link>
            </li>
          ))}
        </ul>

        <Socials className="hidden pr-10 lg:flex" />

        {/* Contact button */}
        <div className="hidden lg:block">
          <Button href={contact[0].href}>
            {contact[0].name}
          </Button>
        </div>

        {/* Menu button */}
        <button
          className="relative z-40 rounded-xl bg-transparent p-2 transition-colors duration-200 hover:bg-gray-200 lg:hidden"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <span className="sr-only">
            {isMenuOpen ? "Otevřít" : "Zavřít"} menu
          </span>
          {isMenuOpen ? (
            <RxCross2 className="h-6 w-6" />
          ) : (
            <RxHamburgerMenu className="h-6 w-6" />
          )}
        </button>
      </Container>

      {/* Menu */}
      <Menu isOpen={isMenuOpen} />
    </nav>
  );
}

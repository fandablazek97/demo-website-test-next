import { routes } from "@/data/routes";
import Link from "next/link";
import Container from "./Container";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer>
      <Container className="flex flex-col items-center justify-center gap-10 py-12 text-center md:flex-row md:justify-between md:text-left">
        <p>
          Copyright &copy; {new Date().getFullYear()} Company
          name
        </p>
        <ul className="flex flex-col gap-4 md:flex-row lg:gap-8">
          {routes.map((route) => (
            <li
              key={route.name}
              className="transition-opacity duration-150 hover:opacity-70"
            >
              <Link href={route.href}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}

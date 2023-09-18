import { routes } from "@/data/routes";
import Link from "next/link";
import Button from "./Button";
import Container from "./Container";
import Logo from "./Logo";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="fixed inset-x-0 top-0 w-full">
      <Container className="flex items-center justify-between py-4">
        <Logo />
        <ul className="flex items-center gap-4">
          {routes.map((route) => (
            <li key={route.name}>
              <Link href={route.href}>{route.name}</Link>
            </li>
          ))}
        </ul>
        <Button>Contact</Button>
      </Container>
    </nav>
  );
}

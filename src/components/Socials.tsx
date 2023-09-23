import { socials } from "@/data/socials";
import clsx from "clsx";

type Props = {
  className?: string;
};

export default function Socials({ className }: Props) {
  return (
    <ul className={clsx("flex gap-6", className)}>
      {socials.map((social) => (
        <li
          key={social.name}
          className="transition-colors duration-150 hover:text-primary-600"
        >
          <a
            href={social.href}
            target="_blank"
            rel="me noopener noreferrer"
          >
            <span className="sr-only">{social.name}</span>
            <social.icon className="h-5 w-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}

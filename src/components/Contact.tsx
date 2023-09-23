import { contact } from "@/data/contact";
import clsx from "clsx";
import Container from "./Container";
import Heading from "./Heading";

type Props = {
  className?: string;
};

export default function Contact({ className }: Props) {
  return (
    <section id="contact" className={clsx("py-32", className)}>
      <Container>
        <Heading as="h2" size="md" hasMarginBottom>
          Contact
        </Heading>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Laborum, repellat?
        </p>
        <div className="pt-12">
          <ul className="flex flex-wrap gap-12">
            {contact.map((item) => (
              <li
                key={item.name}
                className="flex flex-col gap-2"
              >
                <span className="text-sm uppercase opacity-70">
                  {item.title}
                </span>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl font-semibold text-primary-600 hover:opacity-70"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

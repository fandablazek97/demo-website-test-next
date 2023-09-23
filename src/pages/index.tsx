import Accordion from "@/components/Accordion";
import Button from "@/components/Button";
import Contact from "@/components/Contact";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import Seo from "@/components/Seo";
import { faq } from "@/data/faq";
import { routes } from "@/data/routes";
import { services } from "@/data/services";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Seo
        title="Home page"
        description="home page description"
      />

      {/* Hero section */}
      <Hero
        as="div"
        badgeText="Lorem ipsum"
        title="Lorem ipsum dolor sit amet"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sunt similique voluptates nulla iusto, tempora veniam rem temporibus ipsam provident."
      >
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="#services">Learn more</Button>
          <Button href={routes[2].href} intent="secondary">
            Try our app
          </Button>
        </div>
      </Hero>

      {/* Services section */}
      <section
        id="services"
        className="bg-primary-700 py-32 text-primary-100"
      >
        <Container className="pb-12">
          <Heading
            as="h2"
            size="md"
            hasMarginBottom
            color="white"
          >
            Services
          </Heading>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Id, beatae.
          </p>
        </Container>

        <Container>
          <ul className="grid flex-wrap gap-8 pb-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <li
                key={service.name}
                className="flex w-full flex-col gap-3 rounded-xl bg-primary-800 p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-900">
                  {service.icon}
                </div>
                <Heading as="h3" size="sm" color="white">
                  {service.name}
                </Heading>
                <p className="text-sm">{service.description}</p>
              </li>
            ))}
          </ul>
          <Link
            href="/services"
            className="flex w-full items-center justify-center rounded-xl bg-white py-20 text-center text-xl font-bold text-primary-600 transition duration-300 hover:scale-105 sm:text-2xl"
          >
            See all services
          </Link>
        </Container>
      </section>

      {/* FAQ section */}
      <section id="faq" className="bg-gray-100 py-32">
        <Container className="pb-12">
          <Heading as="h2" size="md" hasMarginBottom>
            FAQ
          </Heading>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Id, beatae.
          </p>
        </Container>
        <Container className="grid gap-x-10 md:grid-cols-2">
          <div className="col-span-1 flex flex-col">
            {faq.slice(0, 6).map((item, i) => (
              <Accordion
                key={item.question}
                question={item.question}
                answer={item.answer}
                isDefaultOpen={i === 0}
              />
            ))}
          </div>
          <div className="col-span-1 flex flex-col">
            {faq.slice(6, 12).map((item, i) => (
              <Accordion
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Contact section */}
      <Contact />
    </>
  );
}

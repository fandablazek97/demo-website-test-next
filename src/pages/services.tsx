import Contact from "@/components/Contact";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import Seo from "@/components/Seo";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <>
      <Seo title="Services" description="services description" />

      {/* Hero section */}
      <Hero
        as="div"
        title="Services"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sunt similique voluptates nulla iusto, tempora veniam rem temporibus ipsam provident."
      />

      {/* Services section */}
      <div className="bg-primary-700 py-32 text-primary-100">
        <Container className="pb-12">
          <Heading
            as="h2"
            size="md"
            className="mb-4"
            color="white"
          >
            All services
          </Heading>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Id, beatae.
          </p>
        </Container>

        <Container>
          <ul className="grid flex-wrap gap-8 pb-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
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
        </Container>
      </div>

      {/* Contact section */}
      <Contact />
    </>
  );
}

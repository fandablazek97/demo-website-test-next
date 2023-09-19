import Button from "@/components/Button";
import Hero from "@/components/Hero";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Hero
        as="div"
        badgeText="Lorem ipsum"
        title="Lorem ipsum dolor sit amet"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sunt similique voluptates nulla iusto, tempora veniam rem temporibus ipsam provident."
      >
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/">Click me</Button>
          <Button href="/" intent="secondary">
            Click me
          </Button>
        </div>
      </Hero>
      <div className="bg-gray-300 py-56">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Aut sunt similique voluptates nulla iusto, tempora veniam
        rem temporibus ipsam provident, quaerat quo corrupti
        optio inventore neque dicta nesciunt, sapiente
        repudiandae asperiores ratione quam perspiciatis et eum
        ipsum. Excepturi dolor nobis eveniet totam deserunt fuga
        officiis dolorem a ipsam alias quibusdam, illo nisi
        corrupti repellat. Illum dicta enim debitis culpa
        architecto officia impedit quaerat, quas at repellendus
        consectetur quis perferendis? Laboriosam error maiores
        voluptates libero quod incidunt doloribus necessitatibus
        ipsam illum, delectus, et aperiam enim perferendis nihil
        repellendus vitae soluta eius velit iure molestiae odit
        ipsum eos deleniti. Cupiditate, exercitationem
        repudiandae?
      </div>
      <div className="bg-gray-300 py-56">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Aut sunt similique voluptates nulla iusto, tempora veniam
        rem temporibus ipsam provident, quaerat quo corrupti
        optio inventore neque dicta nesciunt, sapiente
        repudiandae asperiores ratione quam perspiciatis et eum
        ipsum. Excepturi dolor nobis eveniet totam deserunt fuga
        officiis dolorem a ipsam alias quibusdam, illo nisi
        corrupti repellat. Illum dicta enim debitis culpa
        architecto officia impedit quaerat, quas at repellendus
        consectetur quis perferendis? Laboriosam error maiores
        voluptates libero quod incidunt doloribus necessitatibus
        ipsam illum, delectus, et aperiam enim perferendis nihil
        repellendus vitae soluta eius velit iure molestiae odit
        ipsum eos deleniti. Cupiditate, exercitationem
        repudiandae?
      </div>
    </div>
  );
}

import Button from "@/components/Button";
import Contact from "@/components/Contact";
import DemoApp from "@/components/DemoApp";
import Hero from "@/components/Hero";
import Seo from "@/components/Seo";

export default function DemoAppPage() {
  return (
    <>
      <Seo title="Demo app" description="demo app description" />

      {/* Hero section */}
      <Hero
        as="div"
        badgeText="Try out now!"
        title="This is our demo app"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sunt similique voluptates nulla iusto, tempora veniam rem temporibus ipsam provident."
      >
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="#demo-app" intent="primary">
            Let`s try
          </Button>
        </div>
      </Hero>

      {/* Services section */}
      <DemoApp id="demo-app" />

      {/* Contact section */}
      <Contact />
    </>
  );
}

import clsx from "clsx";
import Container from "./Container";

type Props = {
  as: React.ElementType;
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
};

export default function Hero({
  as: AsElement = "div",
  title,
  description,
  className,
  children,
}: Props) {
  return (
    <AsElement
      className={clsx(
        "flex items-center justify-center bg-white lg:h-96",
        className
      )}
    >
      <Container className="py-20 sm:py-28 lg:py-32">
        <div>
          <h1 className="text-2xl font-bold sm:text-4xl">
            {title}
          </h1>
          <p className="text-lg">{description}</p>
        </div>
        {children && <div>{children}</div>}
      </Container>
    </AsElement>
  );
}

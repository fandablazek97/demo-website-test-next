import clsx from "clsx";
import Container from "./Container";
import Heading from "./Heading";

function Badge({
  className,
  children,
  ...props
}: {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <div
      className={clsx(
        "inline-flex items-center justify-center rounded-xl bg-secondary-400 px-3 py-1 text-sm font-semibold text-secondary-950",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

type Props = {
  as: React.ElementType;
  badgeText?: string;
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
};

export default function Hero({
  as: AsElement = "div",
  badgeText,
  title,
  description,
  className,
  children,
}: Props) {
  return (
    <AsElement
      className={clsx(
        "isolate flex items-center justify-center overflow-hidden bg-white lg:h-[44rem]",
        className
      )}
    >
      <Container className="py-28 sm:py-32 lg:py-40">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          {badgeText && <Badge>{badgeText}</Badge>}
          <Heading as="h1" size="lg">
            {title}
          </Heading>
          <p className="max-w-prose text-lg">{description}</p>
          {children && <div className="w-full">{children}</div>}
        </div>
      </Container>
    </AsElement>
  );
}

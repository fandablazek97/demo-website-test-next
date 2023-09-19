import clsx from "clsx";
import Badge from "./Badge";
import Container from "./Container";
import Heading from "./Heading";

function Pattern({
  className,
  ...props
}: {
  className?: string;
  [key: string]: any;
}) {
  return (
    <svg
      className={clsx(
        "absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]",
        className
      )}
      aria-hidden="true"
      {...props}
    >
      <defs>
        <pattern
          id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
          width={200}
          height={200}
          x="50%"
          y={-1}
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
      />
    </svg>
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
        "relative isolate flex items-center justify-center overflow-hidden bg-white lg:h-[44rem]",
        className
      )}
    >
      <Pattern />
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

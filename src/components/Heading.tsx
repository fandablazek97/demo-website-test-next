import clsx from "clsx";

type Props = {
  as?: React.ElementType;
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
};

const sizes = {
  sm: "text-xl md:text-2xl",
  md: "text-2xl md:text-3xl",
  lg: "text-3xl sm:text-4xl md:text-5xl lg:text-7xl",
};

export default function Heading({
  as: AsElement = "h2",
  size = "md",
  className,
  children,
}: Props) {
  return (
    <AsElement
      className={clsx(
        "font-sans font-bold",
        sizes[size],
        className
      )}
    >
      {children}
    </AsElement>
  );
}

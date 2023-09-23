import clsx from "clsx";

type Props = {
  as?: React.ElementType;
  size?: "sm" | "md" | "lg";
  color?: "white" | "gray";
  hasMarginBottom?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const sizes = {
  sm: "text-lg md:text-xl",
  md: "text-2xl md:text-4xl",
  lg: "text-3xl sm:text-4xl md:text-5xl lg:text-7xl",
};

const colors = {
  white: "text-white",
  gray: "text-gray-900",
};

export default function Heading({
  as: AsElement = "h2",
  size = "md",
  color = "gray",
  hasMarginBottom = false,
  className,
  children,
}: Props) {
  return (
    <AsElement
      className={clsx(
        "font-sans font-bold",
        sizes[size],
        colors[color],
        hasMarginBottom && "mb-5",
        className
      )}
    >
      {children}
    </AsElement>
  );
}

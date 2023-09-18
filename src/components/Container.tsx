import clsx from "clsx";

type Props = {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
};

export default function Container({
  as: AsElement = "div",
  className,
  children,
}: Props) {
  return (
    <AsElement
      className={clsx(
        "mx-auto w-full max-w-7xl px-3 sm:px-6",
        className
      )}
    >
      {children}
    </AsElement>
  );
}

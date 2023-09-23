import clsx from "clsx";
import Link from "next/link";

type Props = {
  href: string;
  intent?: "primary" | "secondary" | "white";
  isExternal?: boolean;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
};

const intentClasses = {
  primary:
    "bg-primary-600 hover:bg-primary-500 text-primary-100",
  secondary:
    "bg-transparent ring-2 ring-inset ring-primary-600 text-primary-600 hover:bg-primary-600 hover:text-primary-100",
  white: "bg-white text-primary-600 hover:bg-gray-100",
};

export default function Button({
  href,
  intent = "primary",
  isExternal = false,
  className,
  children,
  ...props
}: Props) {
  const Component = isExternal ? "a" : Link;
  return (
    <Component
      href={href}
      className={clsx(
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-2.5 font-semibold transition-colors duration-200",
        intentClasses[intent],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

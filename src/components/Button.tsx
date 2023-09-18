import clsx from "clsx";

type Props = {
  className?: string;
  children?: React.ReactNode;
  intent?: "primary" | "secondary";
  href?: string;
  [key: string]: any;
};

const intentClasses = {
  primary: "bg-blue-500 hover:bg-blue-600",
  secondary: "bg-gray-500 hover:bg-gray-600",
};

export default function Button({
  className,
  children,
  intent = "primary",
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center gap-2 px-4 py-2 text-sm",
        intentClasses[intent],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

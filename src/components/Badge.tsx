import clsx from "clsx";

type Props = {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
};

export default function Badge({
  className,
  children,
  ...props
}: Props) {
  return (
    <div
      className={clsx(
        "bg-secondary-400 text-secondary-950 inline-flex items-center justify-center rounded-xl px-3 py-1 text-sm font-semibold",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

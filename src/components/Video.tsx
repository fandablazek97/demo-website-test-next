import clsx from "clsx";

type Props = {
  className?: string;
};

export default function Video({ className }: Props) {
  return (
    <div className={clsx("", className)}>
      <div></div>
    </div>
  );
}

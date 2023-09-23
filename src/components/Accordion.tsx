import clsx from "clsx";
import { useState } from "react";
import { RxMinus, RxPlus } from "react-icons/rx";

type Props = {
  question: string;
  answer: string;
  isDefaultOpen?: boolean;
  className?: string;
};

export default function Accordion({
  question,
  answer,
  isDefaultOpen = false,
  className,
}: Props) {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);
  return (
    <div
      className={clsx(
        "w-full border-b border-b-gray-300",
        className
      )}
    >
      <button
        className="flex w-full items-center justify-between py-4 text-left text-lg font-semibold leading-tight text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? (
          <RxMinus className="h-4 w-4 shrink-0" />
        ) : (
          <RxPlus className="h-4 w-4 shrink-0" />
        )}
      </button>
      <div className={clsx("pb-8 pt-2", isOpen ? "" : "hidden")}>
        {answer}
      </div>
    </div>
  );
}

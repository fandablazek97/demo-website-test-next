import { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Container from "./Container";
import Heading from "./Heading";

function ResultNumber({
  result,
  onCloseButtonClick,
}: {
  result: number;
  onCloseButtonClick: () => void;
}) {
  return (
    <li className="relative flex aspect-square h-16 w-16 items-center justify-center rounded-xl bg-primary-800 text-lg font-bold">
      <span>{result}</span>
      <button
        onClick={onCloseButtonClick}
        className="absolute right-1 top-1"
      >
        <RxCross2 className="h-3 w-3 opacity-80" />
      </button>
    </li>
  );
}

type Props = {
  id: string;
};

export default function DemoApp({ id }: Props) {
  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [results, setResults] = useState<number[]>([]);

  // recieve results from local storage and update the state
  useEffect(() => {
    const resultsFromLocalStorage =
      localStorage.getItem("results");
    if (resultsFromLocalStorage) {
      setResults(JSON.parse(resultsFromLocalStorage));
    }
  }, []);

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const firstInput = firstInputRef.current;
    const secondInput = secondInputRef.current;
    const form = formRef.current;

    if (!firstInput || !secondInput || !form) return;

    const firstNumber = Number(firstInput.value);
    const secondNumber = Number(secondInput.value);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
      alert("Please enter a valid number");
      return;
    }

    const result = firstNumber + secondNumber;

    setResults((prevResults) => {
      const newResults = [...prevResults, result];
      localStorage.setItem(
        "results",
        JSON.stringify(newResults)
      );
      return newResults;
    });

    form.reset();
  }

  function deleteThisResult(index: number) {
    setResults((prevResults) => {
      const newResults = [
        ...prevResults.slice(0, index),
        ...prevResults.slice(index + 1),
      ];
      localStorage.setItem(
        "results",
        JSON.stringify(newResults)
      );
      return newResults;
    });
  }

  return (
    <section
      id={id}
      className="bg-primary-700 py-32 text-primary-100"
    >
      <Container className="pb-12">
        <Heading as="h2" size="md" hasMarginBottom color="white">
          Demo App
        </Heading>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Id, beatae.
        </p>
      </Container>

      <Container className="flex flex-col gap-5">
        <ul className="flex flex-wrap gap-5">
          {results.map((result, index) => (
            <ResultNumber
              key={index}
              result={result}
              onCloseButtonClick={() => deleteThisResult(index)}
            />
          ))}
        </ul>
        <form
          action=""
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid gap-5 md:grid-cols-3"
        >
          <input
            ref={firstInputRef}
            type="text"
            className="col-span-1 rounded-xl bg-white px-3 py-2 text-lg font-medium text-gray-900 md:text-xl"
          />
          <input
            ref={secondInputRef}
            type="text"
            className="col-span-1 rounded-xl bg-white px-3 py-2 text-lg font-medium text-gray-900 md:text-xl"
          />
          <button
            type="submit"
            className="col-span-1 flex items-center justify-center rounded-xl bg-white px-4 py-2 text-lg font-semibold text-primary-600 hover:bg-opacity-80 md:text-xl"
          >
            calculate the sum
          </button>
        </form>
      </Container>
    </section>
  );
}

import Image from "next/image";

export default function Logo({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`h-[50px] w-[200px] ${className}`}>
      <Image
        src="/placeholder-logo.svg"
        alt="Placeholder logo"
        width="200"
        height="50"
        className="object-contain"
      />
    </div>
  );
}

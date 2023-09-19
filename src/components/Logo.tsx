import Image from "next/image";

export default function Logo({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`h-[40px] w-[160px] ${className}`}>
      <Image
        src="/placeholder-logo.svg"
        alt="Placeholder logo"
        width="160"
        height="40"
        className="object-contain"
      />
    </div>
  );
}

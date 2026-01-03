import Image from "next/image";

export default function PolaroidCard({
  src,
  label,
  rotate,
}: {
  src: string;
  label: string;
  rotate: string;
}) {
  return (
    <div
      style={{ transform: `rotate(${rotate})` }}
      className="bg-white w-[360px] md:w-[300px] p-4 pb-6 rounded-sm shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
    >
      <div className="relative w-full h-[290px] overflow-hidden">
        <Image src={src} alt={label} fill className="object-cover" />
      </div>

      <span
        className="block mt-3 text-end text-black text-[20px]"
        style={{ fontFamily: "var(--font-shadow-light)" }}
      >
        {label}
      </span>
    </div>
  );
}

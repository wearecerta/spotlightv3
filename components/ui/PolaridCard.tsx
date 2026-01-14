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
      className="bg-(--spotlight-50) w-[196px] md:w-[383px] h-[239px] md:h-[450px] p-4 pb-6 "
    >
      <div className="relative w-[164px] md:w-[351] h-[178px] md:h-[379px] overflow-hidden">
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

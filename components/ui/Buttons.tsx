import Image from "next/image";

const Buttons = ({ children }: any) => {
  return (
    <div
      className="flex justify-center items-center font-(--font-secondary)"
      style={{ marginTop: "var(--space-xl)" }}
    >
      <button
        className="border cursor-pointer border-(--spotlight-50)
 font-medium flex gap-2 items-center px-16 py-5 text-sm uppercase tracking-wide "
      >
        <Image src="/Icons/dot.svg" alt="arrow" width={8} height={8} />
        <span className="text-(--spotlight-50)">{children}</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M18.258 13.5428L1.31537e-06 13.5428L1.45025e-06 10.4572L18.258 10.4572L10.212 2.18154L12.333 -5.09981e-07L24 12L12.333 24L10.212 21.8185L18.258 13.5428Z"
            fill="#F7F7F8"
          />
        </svg>
      </button>
    </div>
  );
};

export default Buttons;

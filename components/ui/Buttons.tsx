import Image from "next/image";

const Buttons = ({ children }: any) => {
  return (
    <div className="flex justify-center items-center font-[var(--font-secondary)] mt-[var(--space-xl)]">
      <button className="relative group overflow-hidden border cursor-pointer font-medium uppercase tracking-wide text-sm flex items-center gap-2 px-12 md:px-16 py-5 text-(--spotlight-50) hover:text-(--spotlight-950)   bg-(--spotlight-50) transform transition-transform duration-200 ">
        {/* Skewed sliding background */}
        <span className="absolute top-0 left-[-10%] w-[120%] h-full bg-(--spotlight-950) skew-x-[30deg] transition-transform duration-400 ease-[cubic-bezier(0.3,1,0.8,1)] group-hover:translate-x-full"></span>

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group"
          >
            <circle
              cx="4"
              cy="4"
              r="4"
              className="fill-current text-(--spotlight-50) group-hover:text-(--spotlight-950)"
            />
          </svg>

          <span>{children}</span>
          <svg
            className="w-6 h-6 fill-current transition-colors duration-300 text-(--spotlight-50) group-hover:text-(--spotlight-950)"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M18.258 13.5428L1.31537e-06 13.5428L1.45025e-06 10.4572L18.258 10.4572L10.212 2.18154L12.333 -5.09981e-07L24 12L12.333 24L10.212 21.8185L18.258 13.5428Z" />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Buttons;

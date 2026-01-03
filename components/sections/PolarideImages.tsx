"use client";
import PolaroidCard from "@/components/ui/PolaridCard";

type QuoteConfig = {
  text: string;
  side: "left" | "right";
  top: string;
  rotate: string;
  align?: "left" | "right";
};

const QUOTES: QuoteConfig[] = [
  //left cote
  {
    text: "We don’t follow trends — we forecast them.",
    side: "left",
    top: "150px",
    rotate: "15deg",
  },
  {
    text: "If it’s never been done, that’s our starting point.",
    side: "left",
    top: "600px",
    rotate: "15deg",
  },
  {
    text: "Spotlight ideas don’t whisper — they roar.",
    side: "left",
    top: "1070px",
    rotate: "-15deg",
  },
  {
    text: "Limits? We call them launchpads.",
    side: "left",
    top: "1500px",
    rotate: "15deg",
  },
  {
    text: "We don’t follow trends — we forecast them.",
    side: "left",
    top: "1850px",
    rotate: "15deg",
  },
  {
    text: "If it’s never been done, that’s our starting point.",
    side: "left",
    top: "2340px",
    rotate: "-15deg",
  },
  {
    text: "Spotlight ideas don’t whisper — they roar.",
    side: "left",
    top: "2750px",
    rotate: "-15deg",
  },
  {
    text: "Limits? We call them launchpads.",
    side: "left",
    top: "3200px",
    rotate: "15deg",
  },

  // right cote
  {
    text: "We move at the speed of culture.",
    side: "right",
    top: "160px",
    rotate: "-15deg",
    align: "right",
  },
  {
    text: "Playing it safe isn’t in our DNA.",
    side: "right",
    top: "580px",
    rotate: "-15deg",
    align: "right",
  },
  {
    text: "Playing it safe isn’t in our DNA.",
    side: "right",
    top: "1080px",
    rotate: "15deg",
    align: "right",
  },
  {
    text: "Playing it safe isn’t in our DNA.",
    side: "right",
    top: "1480px",
    rotate: "-15deg",
    align: "right",
  },
  {
    text: "We move at the speed of culture.",
    side: "right",
    top: "1850px",
    rotate: "-15deg",
    align: "right",
  },
  {
    text: "Playing it safe isn’t in our DNA.",
    side: "right",
    top: "2280px",
    rotate: "-15deg",
    align: "right",
  },
  {
    text: "Playing it safe isn’t in our DNA.",
    side: "right",
    top: "2750px",
    rotate: "15deg",
    align: "right",
  },
  {
    text: "Playing it safe isn’t in our DNA.",
    side: "right",
    top: "3120px",
    rotate: "-15deg",
    align: "right",
  },
];

const POLAROIDS = [
  { src: "/Culture/culture-1.png", label: "Creative", rotate: "9deg" },
  { src: "/Culture/culture-2.png", label: "Playful", rotate: "-6deg" },
  { src: "/Culture/culture-3.png", label: "Vibrant", rotate: "8deg" },
  { src: "/Culture/culture-4.png", label: "Bold", rotate: "-8deg" },
  { src: "/Culture/culture-1.png", label: "Creative", rotate: "9deg" },
  { src: "/Culture/culture-2.png", label: "Playful", rotate: "-8deg" },
  { src: "/Culture/culture-3.png", label: "Vibrant", rotate: "6deg" },
  { src: "/Culture/culture-4.png", label: "Bold", rotate: "-8deg" },
];

export default function PolaroidImages() {
  return (
    <main className="relative min-h-screen bg-[#0C0C0E] overflow-hidden">
      <section className="relative min-h-screen px-[120px] py-[120px] flex justify-center">
        <div className="relative w-full max-w-[900px]">
          {/* Quotes */}
          {QUOTES.map((quote, i) => (
            <Quote key={i} {...quote} />
          ))}

          {/* Polaroid stack */}
          <div className="flex flex-col items-center gap-20">
            {POLAROIDS.map((card, i) => (
              <PolaroidCard key={i} {...card} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Quote({
  text,
  side,
  top,
  rotate,
  align = "left",
}: {
  text: string;
  side: "left" | "right";
  top: string;
  rotate: string;
  align?: "left" | "right";
}) {
  return (
    <p
      className={`hidden lg:block absolute ${side}-0 max-w-60 text-white opacity-90 text-[24px] leading-relaxed ${
        align === "right" ? "text-right" : ""
      }`}
      style={{
        top,
        transform: `rotate(${rotate})`,
        fontFamily: "var(--font-shadow-light)",
      }}
    >
      {text}
    </p>
  );
}

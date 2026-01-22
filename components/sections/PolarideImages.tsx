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
  // Left side quotes
  {
    text: "We don't follow trends — we forecast them.",
    side: "left",
    top: "150px",
    rotate: "15deg",
    align: "left",
  },
  {
    text: "If it's never been done, that's our starting point.",
    side: "left",
    top: "600px",
    rotate: "15deg",
    align: "left",
  },
  {
    text: "Spotlight ideas don't whisper — they roar.",
    side: "left",
    top: "1090px",
    rotate: "-15deg",
    align: "left",
  },
  {
    text: "Limits? We call them launchpads.",
    side: "left",
    top: "1600px",
    rotate: "15deg",
    align: "left",
  },
  {
    text: "Innovation is our native language.",
    side: "left",
    top: "1950px",
    rotate: "15deg",
    align: "left",
  },
  {
    text: "Breaking molds is our daily routine.",
    side: "left",
    top: "2440px",
    rotate: "15deg",
    align: "left",
  },
  {
    text: "We see possibilities where others see walls.",
    side: "left",
    top: "2900px",
    rotate: "-15deg",
    align: "left",
  },
  {
    text: "Every challenge is a creative opportunity.",
    side: "left",
    top: "3400px",
    rotate: "15deg",
    align: "left",
  },

  // Right side quotes
  {
    text: "We move at the speed of culture.",
    side: "right",
    top: "160px",
    rotate: "-15deg",
    align: "right",
  },
  {
    text: "Playing it safe isn't in our DNA.",
    side: "right",
    top: "580px",
    rotate: "-15deg",
    align: "right",
  },
  {
    text: "Bold vision requires fearless execution.",
    side: "right",
    top: "1080px",
    rotate: "15deg",
    align: "right",
  },
  {
    text: "We rewrite the rules of engagement.",
    side: "right",
    top: "1480px",
    rotate: "-15deg",
    align: "right",
  },
  {
    text: "Culture is our canvas, creativity our brush.",
    side: "right",
    top: "1950px",
    rotate: "-15deg",
    align: "right",
  },
  {
    text: "The future doesn't wait - we build it.",
    side: "right",
    top: "2380px",
    rotate: "-15deg",
    align: "right",
  },
  {
    text: "Originality is our only standard.",
    side: "right",
    top: "2950px",
    rotate: "15deg",
    align: "right",
  },
  {
    text: "We measure impact, not just activity.",
    side: "right",
    top: "3300px",
    rotate: "-15deg",
    align: "right",
  },
];



const POLAROIDS = [
  { src: "/Culture/cultures/c7.webp", label: "Creative", rotate: "9deg" },
  { src: "/Culture/cultures/c8.webp", label: "Playful", rotate: "-6deg" },
  { src: "/Culture/cultures/c9.webp", label: "Vibrant", rotate: "8deg" },
  { src: "/Culture/cultures/c10.webp", label: "Bold", rotate: "-8deg" },
  { src: "/Culture/cultures/c11.webp", label: "Creative", rotate: "9deg" },
  { src: "/Culture/cultures/c12.webp", label: "Playful", rotate: "-8deg" },
  { src: "/Culture/cultures/c14.webp", label: "Vibrant", rotate: "6deg" },
  { src: "/Culture/cultures/c1.webp", label: "Bold", rotate: "-8deg" },
];

export default function PolaroidImages() {
  //group the images in four to overlap one other
  const GROUP_SIZE = 4;
  const groupedPolaroids = [];
  for (let i = 0; i < POLAROIDS.length; i += GROUP_SIZE) {
    groupedPolaroids.push(POLAROIDS.slice(i, i + GROUP_SIZE));
  }

  return (
    <main className="relative max-w-[1440px] w-[350px] md:w-[700px] lg:w-[1000px] mx-auto min-h-screen bg-[#0C0C0E] overflow-hidden">
      <section className="relative min-h-screen  py-[120px] flex justify-center">
        <div className="relative w-full ">
          {/* Quotes */}
          {QUOTES.map((quote, i) => (
            <Quote key={i} {...quote} />
          ))}

          {/* Polaroid images   */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-24">
            {groupedPolaroids.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="relative flex flex-col items-center"
              >
                {group.map((card, i) => (
                  <div
                    key={i}
                    className="relative"
                    style={{
                      marginTop: i === 0 ? 0 : "-10px", // overlap on one another image
                      zIndex: group.length - i,
                    }}
                  >
                    <PolaroidCard {...card} />
                  </div>
                ))}
              </div>
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
    <div
      className={`hidden lg:block absolute ${side === "left" ? "left-0" : "right-0"} z-0 max-w-60`}
      style={{
        top,
        transform: `rotate(${rotate})`,
      }}
    >
      <p
        className={`text-white opacity-90 text-[24px] leading-relaxed ${
          align === "right" ? "text-right" : ""
        }`}
        style={{
          fontFamily: "var(--font-shadow-light)",
        }}
      >
        {text}
      </p>
    </div>
  );
}

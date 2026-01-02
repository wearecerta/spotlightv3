"use client";

import Image from "next/image";


export default function PolaroidImages() {

  return (
    <main className="relative min-h-screen bg-[#0C0C0E] overflow-hidden">
      {/* ================= INTRO OVERLAY ================= */}
      <div >
        <section className="relative min-h-screen px-[120px] py-[120px] flex justify-center">
          <div className="relative w-full max-w-[1200px]">
            {/* ================= QUOTES ================= */}
           <p
  className="hidden lg:block absolute left-[-40px] top-[100px] max-w-[240px] text-white opacity-90 text-[18px] leading-relaxed"
  style={{ fontFamily: "var(--font-shadow-light)" }}
>
  We don’t follow trends — we forecast them.
</p>


            <p className="hidden lg:block absolute left-[-40px] top-[520px] max-w-[240px] text-white opacity-90 text-[18px] leading-relaxed font-[Caveat]">
              Spotlight ideas don’t whisper — they roar.
            </p>

            <p className="hidden lg:block absolute right-[-40px] top-[180px] max-w-[240px] text-right text-white opacity-90 text-[18px] leading-relaxed font-[Caveat]">
              We move at the speed of culture.
            </p>

            <p className="hidden lg:block absolute right-[-40px] top-[700px] max-w-[240px] text-right text-white opacity-90 text-[18px] leading-relaxed font-[Caveat]">
              Playing it safe isn’t in our DNA.
            </p>

            {/* ================= POLAROID STACK ================= */}
            <div className="flex flex-col items-center gap-[80px]">
              {[
                { src: "/Culture/culture-1.png", label: "Creative", rotate: "9deg" },
                { src: "/Culture/culture-2.png", label: "Playful", rotate: "-6deg" },
                { src: "/Culture/culture-3.png", label: "Vibrant", rotate: "8deg" },
                { src: "/Culture/culture-4.png", label: "Bold", rotate: "-8deg" },
              ].map((card, i) => (
                <div
                  key={i}
                  style={{ transform: `rotate(${card.rotate})` }}
                  className="bg-white w-[360px] lg:w-[360px] md:w-[300px] p-4 pb-6 rounded-sm shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                >
                  <div className="relative w-full h-[260px] overflow-hidden">
                    <Image
                      src={card.src}
                      alt={card.label}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <span className="block mt-3 text-end text-black text-[20px] font-[Caveat]">
                    {card.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

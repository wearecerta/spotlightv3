"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PolaroidImages from "../../components/sections/PolarideImages";

gsap.registerPlugin(ScrollTrigger);

export default function Culture() {

  const images = [
    "/Culture/culture-1.png",
    "/Culture/culture-2.png",
    "/Culture/culture-3.png",
    "/Culture/culture-4.png",
    "/Culture/culture-5.jpg",
    "/Culture/culture-6.png",
  ];

  const codes = [
    {
      id: 1,
      title: "FUTURE-FIRST",
      subtitle: "ENERGY",
      image: "/Culture/futurefirst.jpg",
    },
    {
      id: 2,
      title: "CREATIVE",
      subtitle: "SWAGGER",
      image: "/Culture/creativeswagger.jpg",
    },
    {
      id: 3,
      title: "RADICAL",
      subtitle: "COLLABORATION",
      image: "/Culture/Radicalcollabration.jpg",
    },
    {
      id: 4,
      title: "BUILT",
      subtitle: "DIFFERENT",
      image: "/Culture/Builtdifrent.jpg",
    },
  ];

  useEffect(() => {
    const leftX = [-700, -800, -300];
    const rightX = [700, 800, 300];
    const rotationLeft = [-30, -20, -35];
    const rotationRight = [30, 20, 35];
    const yValues = [100, -150, -400];

    gsap.utils.toArray(".row").forEach((row: any, i) => {
      const left = row.querySelector(".card-left");
      const right = row.querySelector(".card-right");

      gsap.to(left, {
        x: leftX[i],
        y: yValues[i],
        rotation: rotationLeft[i],
        scrollTrigger: {
          trigger: ".main",
          start: "top center",
          end: "150% bottom",
          scrub: true,
        },
      });

      gsap.to(right, {
        x: rightX[i],
        y: yValues[i],
        rotation: rotationRight[i],
        scrollTrigger: {
          trigger: ".main",
          start: "top center",
          end: "150% bottom",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <main className="relative min-h-screen -mt-16 md:-mt-24 lg:-mt-26 overflow-hidden bg-[#0C0C0E] z-0">
      {/* Hero Section */}
      <section className="main mt-56 relative  min-h-screen flex flex-col justify-center items-center gap-16">
        {images.map(
          (src, index) =>
            index % 2 === 0 && (
              <div
                key={index}
                className="row flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
              >
                <div className="card-left will-change-transform">
                  <img
                    src={src}
                    alt=""
                    className="w-[433px] h-[325px] object-cover aspect-square"
                  />
                </div>
                {images[index + 1] && (
                  <div className="card-right will-change-transform">
                    <img
                      src={images[index + 1]}
                      alt=""
                      className="w-[433px] h-[325px] object-cover aspect-square"
                    />
                  </div>
                )}
              </div>
            )
        )}

        <div className="absolute flex flex-col items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <h2
            style={{
              color: "#FFF",
              fontFamily: 'var(--font-primary, "Bebas Neue")',
              fontSize: "192px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "100%",
              letterSpacing: "0%",
              textTransform: "uppercase",
              textAlign: "center",
              margin: 0,
            }}
          >
            OUR CULTURE
          </h2>
          <p className="text-white font-(--font-secondary) text-xl md:text-2xl lg:text-4xl  mb-8">
            This is No Ordinary Workplace, It's
          </p>
          <div className="inline-flex rotate-3  items-center gap-3 trans bg-white px-30 py-3 rounded-full shadow-lg">
            <span className="w-3 h-3 rounded-full bg-black" />
            <span className="text-2xl font-bebas text-black">
              A Creative Playground
            </span>
          </div>
        </div>
      </section>

      <PolaroidImages />

     {/* Sacred Codes Section */}
       <section className="flex flex-col px-8 md:px-24 py-32 gap-16 bg-[#0C0C0E]">
        <div className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full">
          <div className="w-2 h-2 rounded-full bg-black" />
          <span className="text-black text-sm font-medium font-outfit">The Codes we Live By</span>
        </div>
        <h2 className="text-white font-bebas uppercase text-[clamp(48px,8vw,96px)] max-w-5xl">
          IN THIS HOUSE, WE LIVE BY THESE SACRED CODES.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {codes.map((code, i) => (
            <div
              key={code.id}
              // ref={(el) => (cardsRef.current[i] = el)}
              className="relative aspect-square rounded-xl overflow-hidden"
              style={{
                backgroundImage: `url(${code.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-2">
                <h3 className="text-white font-bebas uppercase text-[clamp(32px,4vw,48px)]">{code.title}</h3>
                <p className="text-white/70 font-outfit uppercase tracking-wider">{code.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

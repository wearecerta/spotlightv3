"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PolaroidImages from "../../../components/sections/PolarideImages";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Culture() {
  const images = [
    "/Culture/cultures/c1.jpg",
    "/Culture/cultures/c2.jpg",
    "/Culture/cultures/c3.jpg",
    "/Culture/cultures/c4.jpg",
    "/Culture/cultures/c5.jpg",
    "/Culture/cultures/c6.jpg",
    
    ];

  const WeDontStopeVideos = [
    "/Culture/wedontstop1.mp4",
    "/Culture/wedontstop2.mp4",
    "/Culture/wedontstop3.mp4",
    "/Culture/wedontstop4.mp4",
    "/Culture/wedontstop5.mp4",
    "/Culture/wedontstop6.mp4",
    "/Culture/wedontstop7.mp4",
    "/Culture/wedontstop8.mp4",
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
    const mm = gsap.matchMedia();

    /* ================= DESKTOP (≥1024px) ================= */
    mm.add("(min-width: 1024px)", () => {
      const leftX = [-700, -800, -300];
      const rightX = [700, 800, 300];
      const rotationLeft = [-30, -20, -35];
      const rotationRight = [30, 20, 35];
      const yValues = [100, -150, -400];

      gsap.utils.toArray<HTMLElement>(".row").forEach((row, i) => {
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
    });

    /* ================= TABLET (768px – 1023px) ================= */
    mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
      const leftX = [-400, -500, -200];
      const rightX = [400, 500, 200];
      const rotationLeft = [-20, -15, -25];
      const rotationRight = [20, 15, 25];
      const yValues = [50, -80, -150];

      gsap.utils.toArray<HTMLElement>(".row").forEach((row, i) => {
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
    });

    /* ================= MOBILE (<768px) ================= */
    mm.add("(max-width: 767px)", () => {
      const leftX = [-100, -200, -110];
      const rightX = [100, 200, 110];
      const rotationLeft = [-30, -20, -35];
      const rotationRight = [30, 20, 35];
      const yValues = [0, 0, 0];

      gsap.utils.toArray<HTMLElement>(".row").forEach((row, i) => {
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
    });

    return () => mm.revert();
  }, []);

  return (
    <main className="relative min-h-screen -mt-20 md:-mt-26 overflow-hidden bg-[#0C0C0E] z-0">
      {/* Hero Section */}
      <section className="main md:mt-56 relative  min-h-screen flex flex-col justify-center items-center gap-3 md:gap-16">
        {images.map(
          (src, index) =>
            index % 2 === 0 && (
              <div
                key={index}
                className="row flex ]flex-row items-center justify-center md:gap-12 z-10 md:z-0  h-40 md:h-82"
              >
                <div className="card-left will-change-transform">
                  <img
                    src={src}
                    alt=""
                    className="md:w-[433px] w-[158px] md:h-[325px] h-[118px] rounded-3xl object-cover aspect-square"
                  />
                </div>
                {images[index + 1] && (
                  <div className="card-right will-change-transform z-10">
                    <img
                      src={images[index + 1]}
                      alt=""
                      className="md:w-[433px] w-[158px] md:h-[325px] h-[118px]  rounded-3xl object-cover aspect-square"
                    />
                  </div>
                )}
              </div>
            )
        )}

        <div className="absolute  w-full flex flex-col items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center ">
          <h2
            style={{
              color: "#FFF",
              fontFamily: 'var(--font-primary, "Bebas Neue")',
              // fontSize: "192px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "100%",
              letterSpacing: "0%",
              textTransform: "uppercase",
              margin: 0,
            }}
            className="text-[92px] md:text-[192px] flex flex-col items-center "
          >
            <span>OUR</span>
            <span>CULTURE</span>
          </h2>
          <p className="text-white font-(--font-secondary) text-xl leading-[120%] md:text-2xl lg:text-4xl  mb-8">
            This is No Ordinary Workplace, It's
          </p>
          <div className="inline-flex -rotate-3 -mt-5 items-center gap-2 md:gap-3  bg-white px-6 md:px-30 py-3 rounded-full shadow-lg">
            <Image
              src={"/Icons/black-dot.svg"}
              width={20}
              height={20}
              alt="dot icon"
            />
            <span className="text-xl md:text-2xl font-[var(--font-outfit, 'Outfit')] text-black">
              A Creative Playground
            </span>
          </div>
        </div>
      </section>

      <PolaroidImages />

      <section className="max-w-[1440px] w-full mx-auto p-6 md:p-[64px] lg:p-[120px] ">
        <div className="bg-[#4A4A5A4D]   border border-[#4A4A5A4D] flex flex-col gap-(--space-xl) rounded-3xl md:rounded-[48px] px-6 py-12 md:p-[64px] lg:[120px] ">
          <div className="flex flex-col">
            <h2
              style={{
                color: "#FFF",
                fontFamily: 'var(--font-primary, "Bebas Neue")',
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "100%",
                letterSpacing: "0%",
                textTransform: "uppercase",
                margin: 0,
              }}
              className="text-[68px] md:text-[148px]"
            >
              We Don't Stop!
            </h2>

            <p className="text-white text-lg font-(--font-secondary)  ">
              Good enough” isn’t in our vocabulary. Our fire rages with an
              insatiable hunger to learn, explore uncharted territories, and dig
              up fresh truths that’ll blow minds. We never stop questioning,
              learning and evolving to perpetually push the creative envelope.
            </p>
          </div>

          {/* videos  */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-(--space-lg)">
            {WeDontStopeVideos.map((video, index) => (
              <video
                key={index}
                src={video}
                autoPlay
                muted
                loop
                playsInline
                className="rounded-3xl"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sacred Codes Section */}
      <section className="flex flex-col mx-auto max-w-[1440px] p-6 md:p-[64px] lg:p-[120px] py-32 gap-16 bg-[#0C0C0E]">
        <div className="inline-flex w-fit -rotate-3 -mb-15  items-center gap-1 md:gap-3  bg-white px-6 md:px-30 py-3 rounded-full shadow-lg">
          <Image
            src={"/Icons/black-dot.svg"}
            width={20}
            height={20}
            alt="dot icon"
          />
          <span className="text-xl md:text-2xl font-[var(--font-outfit, 'Outfit')] text-black">
            The Codes we Live By
          </span>
        </div>
        <h2
          style={{
            color: "#FFF",
            fontFamily: 'var(--font-primary, "Bebas Neue")',
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "100%",
            letterSpacing: "0%",
            textTransform: "uppercase",
            margin: 0,
          }}
          className="text-white font-bebas uppercase text-[68px] md:text-[148px] max-w-5xl"
        >
          IN THIS HOUSE, WE LIVE BY THESE SACRED CODES.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-17">
          {codes.map((code, i) => (
            <div className="relative flex justify-center aspect-square" key={i}>
              <Image
                alt={code.title + "image"}
                src={code.image}
                width={568}
                height={624}
                className="rounded-4xl object-cover"
              />
              {/* gradient */}
              <div
                style={{
                  background:
                    "linear-gradient(180deg, #0C0C0E00 0%, #4A4A5A 100%)",
                }}
                className=" absolute top-0 flex flex-col justify-end items-center w-full h-full rounded-4xl "
              />

              <div
                style={{
                  color: "linear-gradient(180deg, #FFFFFF 0%, #4A4A5A 100%)",
                  fontFamily: 'var(--font-primary, "Bebas Neue")',
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textTransform: "uppercase",
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "absolute",
                  bottom: "26px",
                }}
                className="text-[32px] md:text-[58px]"
              >
                <h3
                  style={{
                    background:
                      "linear-gradient(180deg, #FFFFFF 0%, #4A4A5A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <span>{code.title}</span>
                  <span>{code.subtitle}</span>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

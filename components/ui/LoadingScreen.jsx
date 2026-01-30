"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(null);
  const waveRefs = useRef([]);
  const containerRef = useRef(null);
  const innerCircleRef = useRef(null);

  useEffect(() => {
    // Animate inner circle
    gsap.fromTo(
      innerCircleRef.current,
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, delay: 0.2, ease: "power2.out" },
    );

    // Setup wave animation
    const waveTl = gsap.timeline({ repeat: -1 });
    waveRefs.current.forEach((char, i) => {
      if (char) {
        waveTl
          .to(
            char,
            {
              y: -8,
              opacity: 1,
              ease: "power2.inOut",
              duration: 0.3,
            },
            i * 0.05,
          )
          .to(
            char,
            {
              y: 0,
              opacity: 0.6,
              ease: "power2.inOut",
              duration: 0.3,
            },
            i * 0.05 + 0.3,
          );
      }
    });

    return () => {
      waveTl.kill();
    };
  }, []);

  useEffect(() => {
    // Progress animation timeline
    const progressTl = gsap.timeline();

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newValue = Math.min(prev + Math.random() * 8 + 2, 100);

        gsap.to(progressRef.current, {
          scale: 1.1,
          duration: 0.15,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(progressRef.current, {
              scale: 1,
              duration: 0.2,
              ease: "power2.in",
            });
          },
        });

        // Smooth progress ring animation
        gsap.to(".progress-ring", {
          "--progress": `${newValue}%`,
          duration: 0.5,
          ease: "power2.out",
          overwrite: true,
        });

        if (newValue >= 100) {
          clearInterval(interval);

          // Completion sequence
          setTimeout(() => {
            // Smooth exit animation
            gsap.to(containerRef.current, {
              yPercent: -100, // move screen up
              duration: 0.8,
              ease: "power4.inOut",
              onComplete: () => {
                window.dispatchEvent(new CustomEvent("loadingComplete"));
              },
            });
          }, 300);

          return 100;
        }
        return newValue;
      });
    }, 120);

    return () => {
      clearInterval(interval);
      progressTl.kill();
    };
  }, []);


  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black text-white"
    >
      <div className="relative">
        <div
          className="progress-ring h-[300px] w-[300px] rounded-full transition-all duration-300 ease-out"
          style={{
            background: `conic-gradient(#fff var(--progress, 0%), #333 var(--progress, 0%))`,
          }}
        >
          <div
            ref={innerCircleRef}
            className="flex h-[298px] w-[298px] flex-col items-center justify-center rounded-full bg-black"
          >
            {/* Percentage with smooth animation */}
            <span
              ref={progressRef}
              style={{ fontFamily: "var(--font-primary)" }}
              className="mb-2 text-(length:--h4-size) font-normal transition-transform duration-200"
            >
              {Math.round(progress)}%
            </span>

            {/* Wave loading text */}
            <div
              className="flex text-[20px]"
              style={{ fontFamily: "var(--font-secondary)" }}
            >
              {"Loading...".split("").map((char, index) => (
                <span
                  key={index}
                  ref={(el) => (waveRefs.current[index] = el)}
                  className="inline-block p-[1px] opacity-60"
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

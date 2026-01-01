"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const TextRevealEffect = ({
  paragraphText,
  fontSize,
}: {
  paragraphText: string;
  fontSize: string;
}) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);

  // Function to add refs to the array
  const addToRefs = (el: HTMLSpanElement | null) => {
    if (el && !lettersRef.current.includes(el)) {
      lettersRef.current.push(el);
    }
  };

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top 70%",
        end: "bottom 10%",
      },
      color: "rgba(247, 247, 248, 1)",
      duration: 5,
      stagger: 1,
      ease: "power1.inOut",
    });

    return () => {
      anim.kill();
    };
  }, []);

  return (
    <div className="">
      <div
        ref={triggerRef}
        className="font-secondary"
        style={{
          fontFamily: "var(--font-outfit)",
          fontSize: fontSize,
          fontWeight: 300,
          fontStyle: "normal",
          lineHeight: "120%",
          letterSpacing: "0%",
        }}
      >
        <div>
          {paragraphText.split("").map((letter, index) => (
            <span
              key={index}
              ref={addToRefs}
              style={{
                color: "var(--spotlight-700)",
                transition: "color 0.2s ease-out",
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextRevealEffect;

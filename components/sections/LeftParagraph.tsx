"use client"
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const paragraphText = `Spotlight communications and Marketing is one of the best advertising
            and marketing agencies in Addis Ababa, Ethiopia specializing in marketing,
            advertising, branding & design, production, and PR. Trusted by brands like
            the European Union, Ethiopian Airlines, and Safaricom Ethiopia, we create
            bold, youthful, and unforgettable brand experiences that connect, inspire,
            and drive real impact.`;

const LeftParagraph = () => {
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
    <div className="max-w-lg">
      <div
        ref={triggerRef}
        className="font-secondary"
        style={{
          fontFamily: "var(--font-outfit)",
          fontSize: "var(--accent-small-size)",
          fontWeight: 300,
          fontStyle: "normal",
          lineHeight: "120%",
          letterSpacing: "0%",
          transition: "color 0.3s ease-out",
        }}
      >
        <div>
          {paragraphText.split("").map((letter, index) => (
            <span 
              key={index} 
              ref={addToRefs}
              style={{ color: "var(--spotlight-700)" }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftParagraph;
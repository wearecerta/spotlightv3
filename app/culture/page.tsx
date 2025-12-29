"use client";

import Image from "next/image";
import CultureCard from "../../components/ui/CultureCard";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Culture() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const heroImagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const heroSectionRef = useRef<HTMLElement | null>(null);

  // Images and colors for the culture section
  const images = [
    '/Culture/culture-1.png',
    '/Culture/culture-2.png',
    '/Culture/culture-3.png',
    '/Culture/culture-4.png',
    '/Culture/culture-5.png',
    '/Culture/culture-6.png',
  ];
  
  // Gradient colors for fallback backgrounds




  // Polaroid images with captions
  const polaroidImages = [
    {
      id: 1,
      image: "/Culture/c1.png",
      leftCaption: "We don't always meet in the office, but we always have fun!",
      rightCaption: "We make art, we make culture!",
    },
    {
      id: 2,
      image: "/Culture/c2.png",
      leftCaption: "We are an open team, ready for anything! Let's get to work!",
      rightCaption: "We live for team spirit and new challenges!",
    },
    {
      id: 3,
      image: "/Culture/c3.png",
      leftCaption: "Culture is what we are when nobody is looking!",
      rightCaption: "We work hard, we play hard, we grow!",
    },
    {
      id: 4,
      image: "/Culture/c4.png",
      leftCaption: "We're always learning something new, and we're always improving!",
      rightCaption: "Working in teams is what makes us strong, we achieve great things!",
    },
  ];

  // Sacred codes data
  const codes = [
    {
      id: 1,
      title: 'FUTURE-FIRST',
      subtitle: 'ENERGY',
      image: '/Culture/futurefirst.jpg',
    },
    {
      id: 2,
      title: 'CREATIVE',
      subtitle: 'SWAGGER',
      image: '/Culture/creativeswagger.jpg',
    },
    {   
      id: 3,
      title: 'RADICAL',
      subtitle: 'COLLABORATION',
      image: '/Culture/Radicalcollabration.jpg',
    },
    {
      id: 4,
      title: 'BUILT',
      subtitle: 'DIFFERENT',
      image: '/Culture/Builtdifrent.jpg',
    },
  ];

  // Work details videos for "WE DON'T STOP!" section
  const workImages = [
    "/Culture/wedontstop1.mp4",
    "/Culture/wedontstop2.mp4",
    "/Culture/wedontstop3.mp4",
    "/Culture/wedontstop4.mp4",
    "/Culture/wedontstop5.mp4",
    "/Culture/wedontstop6.mp4",
    "/Culture/wedontstop7.mp4",
    "/Culture/wedontstop8.mp4",
  ];

  // Initial grid configuration (6 images in 2x3 grid - first display, minimal rotation)
  const initialGridConfig = [
    {
      imageIndex: 1,
      position: { top: '10%', left: '5%' },
      rotation: 0,
      zIndex: 2,
    },
    {
      imageIndex: 2,
      position: { top: '10%', left: '35%' },
      rotation: 0,
      zIndex: 2,
    },
    {
      imageIndex: 3,
      position: { top: '10%', right: '5%' },
      rotation: 0,
      zIndex: 2,
    },
    {
      imageIndex: 4,
      position: { bottom: '15%', left: '5%' },
      rotation: 0,
      zIndex: 2,
    },
    {
      imageIndex: 1,
      position: { bottom: '15%', left: '35%' },
      rotation: 0,
      zIndex: 2,
    },
    {
      imageIndex: 2,
      position: { bottom: '15%', right: '5%' },
      rotation: 0,
      zIndex: 2,
    },
  ];

  // Final collage configuration (5 images in scattered arrangement - after animation)
  const finalCollageConfig = [
    {
      imageIndex: 1,
      position: { top: '5%', left: '5%' },
      rotation: 12,
      zIndex: 2,
    },
    {
      imageIndex: 2,
      position: { bottom: '15%', left: '10%' },
      rotation: -8,
      zIndex: 2,
    },
    {
      imageIndex: 3,
      position: { top: '8%', right: '8%' },
      rotation: -15,
      zIndex: 2,
    },
    {
      imageIndex: 4,
      position: { top: '45%', right: '15%' },
      rotation: 10,
      zIndex: 2,
    },
    {
      imageIndex: 1,
      position: { bottom: '8%', right: '12%' },
      rotation: -12,
      zIndex: 2,
    },
  ];

  useEffect(() => {
    // Set initial state to grid layout (6 images, minimal rotation)
    heroImagesRef.current.forEach((img, index) => {
      if (img && index < initialGridConfig.length) {
        const config = initialGridConfig[index];
        gsap.set(img, {
          opacity: 1,
          scale: 1,
          rotation: config.rotation,
          immediateRender: true,
        });
      }
    });

    // After 3 seconds, animate to collage layout (5 images, scattered)
    const timer = setTimeout(() => {
      heroImagesRef.current.forEach((img, index) => {
        if (img) {
          if (index < finalCollageConfig.length) {
            // Animate existing images to new positions and rotations
            const config = finalCollageConfig[index];
            
            // Animate position and rotation together
            gsap.to(img, {
              ...config.position,
              rotation: config.rotation,
              zIndex: config.zIndex,
              duration: 1.2,
              ease: 'back.out(1.7)',
              delay: index * 0.1,
            });
          } else {
            // Hide images beyond the 5 in collage
            gsap.to(img, {
              opacity: 0,
              scale: 0.3,
              duration: 0.8,
              ease: 'power2.in',
            });
          }
        }
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      className="-mt-16 md:-mt-24 lg:-mt-26 overflow-hidden z-0"
      style={{
        minHeight: '100vh',
        background: '#0C0C0E',
        position: 'relative',
      }}
    >
      {/* Hero Section: OUR CULTURE */}
       <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 md:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-white/5 to-transparent -top-48 -left-48 animate-float" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-white/3 to-transparent -bottom-40 -right-40 animate-float animation-delay-2000" />
      </div>
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl lg:text-[192px] font-bebas text-white uppercase leading-none mb-6">
          OUR CULTURE
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl font-outfit font-light text-white mb-12">
          This is No Ordinary Workplace, It's
        </p>
        
        <div className="inline-flex items-center gap-3 bg-white px-12 py-3 rounded-full shadow-lg">
          <span className="w-3 h-3 rounded-full bg-black"></span>
          <span className="text-2xl font-bebas text-black">A Creative Playground</span>
        </div>
      </div>
    </section>
    {/* Culture Cards Section */}
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {

            image: "/Culture/culture-1.png"
          },
          {

            image: "/Culture/culture-2.png"
          },
          {

            image: "/Culture/culture-3.png"
          },
          {

            image: "/Culture/culture-4.png"
          },
          {

            image: "/Culture/culture-5.jpg"
          },
          {
      
            image: "/Culture/culture-6.png"
          }
        ].map((card, index) => (
          <div 
            key={index}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-900"
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bebas text-white mb-2">{card.title}</h3>
              <p className="text-gray-300 text-sm font-outfit">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    {/* Add global styles */}
    <style jsx global>{`
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
      .animate-float {
        animation: float 8s ease-in-out infinite;
      }
      .animation-delay-2000 {
        animation-delay: 2s;
      }
    `}</style>

      {/* WE DON'T STOP! Section */}
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '120px 120px',
          gap: '48px',
          background: '#0C0C0E',
          position: 'relative',
        }}
      >
        {/* Title */}
        <h2
          style={{
            color: '#FFF',
            fontFamily: 'var(--font-primary, "Bebas Neue")',
            fontSize: 'clamp(48px, 8vw, 96px)',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '100%',
            letterSpacing: '0%',
            textTransform: 'uppercase',
            textAlign: 'left',
            margin: 0,
          }}
        >
          WE DON'T STOP!
        </h2>

        {/* Paragraph */}
        <p
          style={{
            color: '#FFF',
            fontFamily: 'var(--font-secondary, "Outfit")',
            fontSize: 'clamp(16px, 1.5vw, 20px)',
            fontStyle: 'normal',
            fontWeight: '300',
            lineHeight: '150%',
            letterSpacing: '0%',
            textAlign: 'left',
            margin: 0,
            maxWidth: '800px',
          }}
        >
          Every day we grow more and more, we celebrate our victories and learn from our mistakes, always striving for excellence in everything we do. We learn, we grow, we experiment, and we don't stop.
        </p>

        {/* Video Grid - 4 columns × 2 rows = 8 videos */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
            gap: '24px',
            width: '100%',
            marginTop: '48px',
          }}
        >
          {workImages.map((videoSrc: string, index: number) => (
            <div
              key={`video-${index}`}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '3/4',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              <video
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* SACRED CODES Section */}
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '120px 120px',
          gap: '64px',
          background: '#0C0C0E',
          position: 'relative',
        }}
      >
        {/* Label */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: '#FFFFFF',
            padding: '8px 24px',
            borderRadius: '50px',
            width: 'fit-content',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#000',
            }}
          />
          <span
            style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#000',
              fontFamily: 'var(--font-secondary, "Outfit")',
            }}
          >
            The Codes we Live By
          </span>
        </div>

        {/* Title */}
        <h2
          style={{
            color: '#FFF',
            fontFamily: 'var(--font-primary, "Bebas Neue")',
            fontSize: 'clamp(48px, 8vw, 96px)',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '100%',
            letterSpacing: '0%',
            textTransform: 'uppercase',
            textAlign: 'left',
            margin: 0,
            maxWidth: '1000px',
          }}
        >
          IN THIS HOUSE, WE LIVE BY THESE SACRED CODES.
        </h2>

        {/* Cards Grid 2x2 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '64px',
            width: '100%',
            marginTop: '32px',
          }}
        >
          {codes.map((code, index) => (
            <div
              key={code.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              style={{
                position: 'relative',
                aspectRatio: '1/1',
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundImage: `url(${code.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
                }}
              />

              {/* Content */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <h3
                  style={{
                    color: '#FFF',
                    fontFamily: 'var(--font-primary, "Bebas Neue")',
                    fontSize: 'clamp(32px, 4vw, 48px)',
                    fontWeight: '400',
                    lineHeight: '100%',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    margin: 0,
                  }}
                >
                  {code.title}
                </h3>
                <p
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontFamily: 'var(--font-secondary, "Outfit")',
                    fontSize: 'clamp(14px, 1.5vw, 18px)',
                    fontWeight: '500',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    margin: 0,
                  }}
                >
                  {code.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

     
    </main>
  );
}

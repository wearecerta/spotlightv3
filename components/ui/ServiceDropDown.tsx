"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

interface ServicesDropdownProps {
  open: boolean;
  services: any[];
  pathname: string;
  dropDownBg: string;
  serviceColor: string;
  ActiveServiceColor: string;
  onClose: () => void;
}

export default function ServicesDropdown({
  open,
  services,
  pathname,
  dropDownBg,
  serviceColor,
  ActiveServiceColor,
  onClose,
}: ServicesDropdownProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLAnchorElement[]>([]);
  const tl = useRef<gsap.core.Timeline | null>(null);

  itemsRef.current = [];

  const addToRefs = (el: HTMLAnchorElement | null) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  // Initialize GSAP timeline
  useEffect(() => {
    if (!panelRef.current) return;

    tl.current = gsap.timeline({ paused: true });

    tl.current
      .fromTo(
        panelRef.current,
        { yPercent: -100 },
        {
          yPercent: 0,
          duration: 0.5,
          ease: "power3.out",
        }
      )
      .fromTo(
        itemsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power3.out",
        },
        "-=0.2"
      );
  }, []);

  // Play/reverse animation on open state
  useEffect(() => {
    if (!tl.current) return;

    if (open) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [open]);

  useEffect(() => {
  if (!open) return;

  const handleClickOutside = (e: MouseEvent) => {
    if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleScroll = () => {
    onClose();
  };

  document.addEventListener("mousedown", handleClickOutside);
  window.addEventListener("scroll", handleScroll, true);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
    window.removeEventListener("scroll", handleScroll, true);
  };
}, [open, onClose]);


  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 top-20 bg-black/40 z-[9999]"
    >
      <div
        ref={panelRef}
        style={{ backgroundColor: dropDownBg }}
        className="absolute left-0 w-full h-52 py-(--space-xl) flex justify-center"
      >
        <div className="grid grid-cols-4 gap-[var(--space-xxl)]">
          {services.map((service) => (
            <Link
              ref={addToRefs}
              key={service.slug.current}
              href={`/services/${service.slug.current}`}
              onClick={onClose}
              style={{
                fontFamily: "var(--font-primary)",
                color: pathname.includes(service.slug.current)
                  ? ActiveServiceColor
                  : serviceColor,
              }}
              className="text-[20px] leading-[120%] uppercase"
            >
              {service.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

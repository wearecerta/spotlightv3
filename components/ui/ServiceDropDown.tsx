"use client";

import { useEffect, useRef, useState } from "react";
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
  const [activeService, setActiveService] = useState<string | null>(null);

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
        },
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
        "-=0.2",
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
    <div ref={overlayRef} className="fixed inset-0 top-20 bg-black/40 z-[9999]">
      <div
        ref={panelRef}
        style={{ backgroundColor: dropDownBg }}
        className="absolute left-0 w-full h-52 py-(--space-xl) flex justify-center"
      >
        <div className="grid grid-cols-4 gap-[var(--space-xxl)]">
          {services.map((service, index) => {
            const isDigitalMarketing =
              service.title.toLowerCase() === "digital marketing";

            return (
              <div
                key={service?._id || index}
                className="relative "
                onMouseEnter={() =>
                  isDigitalMarketing && setActiveService("digital-marketing")
                }
                onMouseLeave={() => setActiveService(null)}
              >
                <Link
                  ref={addToRefs}
                  href={
                    service?.slug?.current
                      ? `/services/${service.slug.current}`
                      : "/"
                  }
                  onClick={onClose}
                  style={{
                    fontFamily: "var(--font-primary)",
                    color: pathname.includes(service?.slug?.current)
                      ? ActiveServiceColor
                      : serviceColor,
                  }}
                  className="text-[20px] leading-[120%] uppercase flex items-center gap-3"
                >
                  {service.title}

                  {isDigitalMarketing && (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      className="-rotate-90"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 11.462L12.077 8.385H5.923L9 11.462ZM9.003 18C7.75833 18 6.58833 17.764 5.493 17.292C4.39767 16.8193 3.44467 16.178 2.634 15.368C1.82333 14.558 1.18167 13.606 0.709 12.512C0.236333 11.418 0 10.2483 0 9.003C0 7.75767 0.236333 6.58767 0.709 5.493C1.181 4.39767 1.82133 3.44467 2.63 2.634C3.43867 1.82333 4.391 1.18167 5.487 0.709C6.583 0.236333 7.753 0 8.997 0C10.241 0 11.411 0.236333 12.507 0.709C13.6023 1.181 14.5553 1.82167 15.366 2.631C16.1767 3.44033 16.8183 4.39267 17.291 5.488C17.7637 6.58333 18 7.753 18 8.997C18 10.241 17.764 11.411 17.292 12.507C16.82 13.603 16.1787 14.556 15.368 15.366C14.5573 16.176 13.6053 16.8177 12.512 17.291C11.4187 17.7643 10.249 18.0007 9.003 18ZM9 17C11.2333 17 13.125 16.225 14.675 14.675C16.225 13.125 17 11.2333 17 9C17 6.76667 16.225 4.875 14.675 3.325C13.125 1.775 11.2333 1 9 1C6.76667 1 4.875 1.775 3.325 3.325C1.775 4.875 1 6.76667 1 9C1 11.2333 1.775 13.125 3.325 14.675C4.875 16.225 6.76667 17 9 17Z"
                        fill={serviceColor}
                      />
                    </svg>
                  )}
                </Link>

                {isDigitalMarketing &&
                  activeService === "digital-marketing" && (
                    <div
                      className="absolute top-0 left-25 mt-4
                        place-items-center  rounded-xl 
                       grid gap-4 min-w-[140px] z-50"
                    >
                      {service.subServices?.map((sub: any) => {
                        if (!sub.slug?.current) return null;

                        const isSEO = sub.title.includes(
                          "Search Engine Optimization",
                        );
                        const isSMO = sub.title.includes(
                          "Social Media Optimization",
                        );

                        if (!isSEO && !isSMO) return null;

                        const displayTitle = isSEO ? "SEO" : "SMO";

                        return (
                          <Link
                            key={sub.slug.current}
                            href={`/services/${sub.slug.current}`}
                            onClick={onClose}
                            className="text-[20px] uppercase tracking-wide
                 transition-colors hover:text-[var(--accent-color)]"
                            style={{ color: serviceColor,                    fontFamily: "var(--font-primary)",
 }}
                          >
                            {displayTitle}
                          </Link>
                        );
                      })}
                    </div>
                  )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

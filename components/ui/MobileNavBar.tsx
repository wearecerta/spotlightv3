"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

interface NavItem {
  label: string;
  href: string;
}

interface MobileNavbarProps {
  pathname: string;
  setOpen: (open: boolean) => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ pathname, setOpen }) => {
  const itemsRef = useRef<HTMLAnchorElement[]>([]);
  const menuRef = useRef<HTMLDivElement | null>(null);

  itemsRef.current = [];

  const addToRefs = (el: HTMLAnchorElement | null) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Works", href: "/works" },
    { label: "Culture", href: "/culture" },
    { label: "Blogs", href: "/blog" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
   const tl = gsap.timeline();

tl.fromTo(
  menuRef.current,
  { yPercent: -100 },
  {
    yPercent: 0,
    duration: 0.5,
    ease: "power3.out",
  }
)
.fromTo(
  itemsRef.current,
  { y: -50, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 0.6,
    stagger: {
      each: 0.05,
      from: "start",
    },
    ease: "power3.out",
  }
);

  }, []);

  return (
    <div
      ref={menuRef}
      className="md:hidden fixed top-0 w-full h-screen bg-[var(--spotlight-950)] px-[var(--section-margin-x)] flex items-center -z-10"
    >
      <div className="flex flex-col gap-(--space-lg) w-full">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            ref={addToRefs}
            onClick={() => setOpen(false)}
            style={{ fontFamily: "var(--font-primary)" }}
            className={` text-[48px] uppercase leading-[100%] px-4  flex justify-center transition-colors duration-200 ${
              pathname === item.href
                ? "text-[var(--spotlight-50)]"
                : "text-[var(--spotlight-700)]"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;

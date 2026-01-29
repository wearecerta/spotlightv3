'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

interface NavItem {
  label: string;
  href: string;
}

interface MobileNavbarProps {
  pathname: string;
  setOpen: (open: boolean) => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ pathname, setOpen }) => {
  // Ref array for navbar items
  const itemsRef = useRef<HTMLAnchorElement[]>([]);

  // Reset refs on re-render
  itemsRef.current = [];

  const addToRefs = (el: HTMLAnchorElement | null) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Works', href: '/works' },
    { label: 'Culture', href: '/culture' },
    { label: 'Blogs', href: '/blog' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    // Animate navbar items on mount
    gsap.fromTo(
      itemsRef.current,
      { y: -50 , opacity: 0 },
       {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: {
          each: 0.05, 
          from: 'start', 
        },
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <div className="md:hidden fixed top-0 w-full h-screen bg-[var(--spotlight-950)] px-[var(--section-margin-x)] flex items-center -z-10">
      <div className="flex flex-col w-full">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            ref={addToRefs}
            onClick={() => setOpen(false)}
            style={{ fontFamily: 'var(--font-secondary)' }}
            className={`block text-[20px] font-medium leading-[150%] tracking-wide py-3 px-4 text-[var(--spotlight-50)] transition-colors duration-200 ${
              pathname === item.href
                ? 'bg-[var(--spotlight-700)] w-full flex justify-between items-center'
                : ''
            }`}
          >
            {item.label}

            {pathname === item.href && (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.172 9.02854L0 9.02854L0 6.97146L12.172 6.97146L6.808 1.45436L8.222 0L16 8L8.222 16L6.808 14.5456L12.172 9.02854Z"
                  fill="#F7F7F8"
                />
              </svg>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;

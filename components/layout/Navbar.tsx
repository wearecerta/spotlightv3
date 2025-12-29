"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "SERVICES", href: "/service" },
  { label: "ABOUT", href: "/about" },
  { label: "WORKS", href: "/work" },
  { label: "CULTURE", href: "/culture" },
  { label: "BLOGS", href: "/Blog" },
];

// Pages that use the white version (light colors)
const whiteVersionPages = ["/", "/about", "/culture"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  
  // Determine which version to use based on current page
  const isWhiteVersion = whiteVersionPages.includes(pathname);
  
  // Color schemes
  const logoColor = isWhiteVersion ? "#F7F7F8" : "#0C0C0E";
  const textColor = isWhiteVersion ? "#F7F7F8" : "#0C0C0E";
  const buttonBgColor = isWhiteVersion ? "#F7F7F8" : "#0C0C0E";
  const buttonTextColor = isWhiteVersion ? "#0C0C0E" : "#F7F7F8";
  const mobileBgColor = isWhiteVersion ? "bg-gray-900" : "bg-gray-100";
  const mobileTextColor = isWhiteVersion ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900";
  const mobileBorderColor = isWhiteVersion ? "border-gray-700" : "border-gray-300";

  return (
    <header className="w-full z-10"> {/* Removed faulty gradient class for transparent bg; add back if needed */}
      <div className="w-full mx-auto py-4 px-20 flex items-center justify-between"> {/* Applied Figma styles: width:1440px, padding:16px 80px (py-4 px-20), flex, justify-between, items-center */}
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="160" height="42" viewBox="0 0 160 42" fill="none">
            <path d="M44.0393 20.9445C44.0199 14.4151 49.29 9.08691 55.8194 9.06754C62.3488 9.04816 67.677 14.3182 67.6964 20.8476C67.7157 27.377 62.4457 32.7052 55.9163 32.7246C55.8775 32.7246 55.8582 32.7246 55.8194 32.7246C49.3287 32.6858 44.0587 27.4352 44.0393 20.9445Z" fill={logoColor}/>
            <path d="M101.332 33.4027L106.544 32.0077C106.622 32.2595 106.66 32.4727 106.738 32.6664C107.358 34.6814 109.063 35.9602 111.349 36.0377C112.182 36.0571 112.996 35.9602 113.79 35.7664C115.476 35.3596 116.542 34.2358 117.026 32.5695C117.413 31.2908 117.355 29.9733 117.355 28.6364C117.278 28.6751 117.239 28.6751 117.22 28.6945C116.057 30.2445 114.43 30.942 112.57 31.1552C109.702 31.4845 107.087 30.787 104.858 28.9076C103.018 27.3576 101.797 25.1682 101.468 22.7657C100.964 19.6463 101.507 16.7401 103.425 14.1825C105.517 11.3925 108.365 10.1331 111.833 10.2688C112.531 10.2881 113.228 10.4044 113.907 10.5788C115.36 10.9081 116.638 11.7994 117.433 13.0588V10.6756H123.052C123.052 10.6756 123.071 10.8694 123.09 10.9469V30.167C123.129 32.2983 122.606 34.3908 121.579 36.2314C120.107 38.8277 117.82 40.3196 114.933 40.9009C112.047 41.4821 109.257 41.3659 106.563 40.0871C103.87 38.8083 102.068 36.7933 101.39 33.8677C101.371 33.7902 101.351 33.7127 101.351 33.6158C101.351 33.5383 101.351 33.4608 101.351 33.3833M107.203 20.8088C107.203 23.8507 108.85 25.8464 111.756 26.2145C113.965 26.4858 116.193 25.4589 117.065 23.0564C117.394 22.0876 117.51 21.0607 117.394 20.0532C117.2 17.2632 114.798 15.1707 112.008 15.345C111.446 15.3838 110.884 15.5194 110.361 15.7519C108.365 16.5463 107.203 18.4063 107.203 20.8282" fill={logoColor}/>
            <path d="M26.4474 40.5327H20.6349V10.695H26.273V13.1169H26.3893C27.5324 11.5281 29.1405 10.7144 31.0006 10.385C33.8875 9.88125 36.6 10.3269 38.9637 12.1675C40.94 13.6982 42.025 15.7907 42.5288 18.2126C43.1875 21.4482 42.9938 24.6257 41.405 27.5901C39.4869 31.1164 36.4643 32.7826 32.4731 32.7439C30.5162 32.7439 28.7143 32.2208 27.203 30.9226C26.9705 30.7095 26.738 30.4964 26.4862 30.2833V40.5133L26.4474 40.5327ZM26.3311 21.8357C26.4086 22.4751 26.5443 23.1338 26.6993 23.7538C27.2805 25.9239 29.218 27.4545 31.4462 27.532C33.9068 27.6095 35.825 26.3307 36.6387 24.0832C37.1812 22.6107 37.2393 20.9832 36.8325 19.4719C36.3093 17.5344 35.1468 16.12 33.1318 15.6163C31.1168 15.1125 29.3537 15.5388 27.9005 17.05C26.738 18.2707 26.3699 19.8013 26.3118 21.8357" fill={logoColor}/>
            <path d="M131.79 12.3614C134.657 9.88135 137.815 9.51322 141.167 10.8114C143.783 11.8189 145.023 14.0083 145.469 16.682C145.585 17.4377 145.643 18.2127 145.643 18.9877C145.643 23.2308 145.643 27.474 145.643 31.7171V32.2402H139.792V19.8014C139.792 19.2202 139.733 18.6389 139.598 18.0577C139.036 16.0233 137.389 15.2483 135.49 15.4226C133.262 15.6358 131.828 17.3408 131.828 19.7045V32.2209H125.977V0.542534H131.809V12.3614H131.79Z" fill={logoColor}/>
            <path d="M0 26.234L4.97941 25.1489C4.99879 25.2652 5.03754 25.3621 5.03754 25.459C5.28942 27.0671 6.6263 28.2877 8.25381 28.3652C8.95132 28.404 9.64882 28.3652 10.327 28.1715C11.1407 27.9971 11.722 27.2996 11.7801 26.4665C11.877 25.7496 11.5282 25.0521 10.8695 24.7227C10.4045 24.4902 9.92008 24.3158 9.4357 24.1802C8.07944 23.8121 6.68443 23.5408 5.32817 23.1533C4.03003 22.7852 2.86752 22.0489 1.97627 21.022C0.0387503 18.7358 0.0968761 15.2095 2.15064 12.8457C3.56503 11.2182 5.56067 10.2107 7.71131 10.0751C9.57132 9.86197 11.4507 10.1526 13.1557 10.947C15.3064 11.9157 16.8176 13.9114 17.147 16.2558L12.3032 17.3601C12.3032 17.3601 12.2451 17.2633 12.2257 17.2051C11.877 15.3064 10.3076 14.3182 8.38944 14.512C7.84694 14.5895 7.30443 14.7639 6.83943 15.0545C6.20005 15.4226 5.8513 16.1589 5.98692 16.8758C6.06442 17.5539 6.5488 18.1158 7.20756 18.2902C8.15694 18.5808 9.1257 18.7745 10.0945 18.9877C11.4895 19.2783 12.8651 19.6077 14.1245 20.3245C16.6239 21.7777 17.6314 24.0639 17.3795 26.4277C17.0889 29.2177 15.5582 31.1746 12.9814 32.1627C9.78445 33.3834 6.56818 33.2284 3.56503 31.5234C1.68564 30.4771 0.406878 28.6752 0.0581255 26.6021C0.0387503 26.4858 0.0193752 26.389 0 26.2146" fill={logoColor}/>
            <path d="M150.429 4.24311C150.622 4.24311 150.758 4.22374 150.894 4.22374H155.253C155.582 4.22374 155.699 4.30124 155.699 4.66937C155.699 6.49063 155.699 8.29252 155.699 10.1138V10.6563H159.981V15.8294H155.699C155.699 16.0232 155.679 16.1588 155.679 16.3138V24.6258C155.679 24.9551 155.679 25.2651 155.718 25.5945C155.892 26.7376 156.609 27.3189 157.907 27.3383C158.586 27.3383 159.264 27.2802 159.981 27.2414C159.981 27.3189 160 27.4158 160 27.4933V31.6977C160 31.9302 159.961 32.0658 159.709 32.1239C157.539 32.7052 155.389 32.7827 153.316 31.8527C151.184 30.8839 150.099 29.1014 149.944 26.8345C149.809 24.9164 149.867 22.9789 149.867 21.0414V15.8488H146.031V10.6563H147.154C149.053 10.6563 150.235 9.59065 150.39 7.69189C150.467 6.70376 150.429 5.735 150.448 4.76624V4.24311" fill={logoColor}/>
            <path d="M72.2108 15.8876H68.8589C68.4972 15.8876 68.3164 15.7067 68.3164 15.3451V11.0632C68.3164 10.7338 68.4326 10.6369 68.7426 10.6369C69.3239 10.6563 69.9051 10.6369 70.4864 10.5207C71.9008 10.2107 72.7339 9.00941 72.7533 7.3819V4.22375H73.3151C74.7877 4.22375 76.2602 4.22375 77.7133 4.185C78.062 4.185 78.0814 4.34 78.0814 4.61125V10.6175H82.0533C82.344 10.6175 82.4602 10.695 82.4408 11.005V15.5001C82.4408 15.7907 82.344 15.8876 82.0533 15.8876H78.1008C78.1008 16.0426 78.0814 16.1782 78.0814 16.2945C78.0814 19.1039 78.0814 21.9132 78.0427 24.7226C78.0427 26.6795 78.7596 27.377 80.6971 27.3577C81.2396 27.3577 81.7821 27.2802 82.344 27.2414C82.344 27.3383 82.3633 27.4352 82.3827 27.5514V31.6589C82.3827 31.9302 82.3246 32.0658 82.0533 32.1433C80.0383 32.7052 78.0233 32.7633 76.047 32.0077C73.877 31.1746 72.6564 29.5277 72.3658 27.2608C72.2495 26.0014 72.1914 24.742 72.2301 23.502C72.2108 21.1382 72.2301 18.7745 72.2301 16.4107C72.2301 16.2557 72.2301 16.0813 72.1914 15.8876" fill={logoColor}/>
            <path d="M90.6757 0.542534H84.8631V32.2209H90.6757V0.542534Z" fill={logoColor}/>
            <path d="M99.6666 10.6951H93.8928V32.2209H99.6666V10.6951Z" fill={logoColor}/>
            <path d="M100.323 3.62315C100.323 5.61879 98.696 7.22692 96.7003 7.22692C94.7241 7.18817 93.1159 5.59941 93.0772 3.60377C93.0966 1.60814 94.7241 0 96.7197 0H96.7585C98.7153 0 100.323 1.58876 100.323 3.56502V3.62315Z" fill={logoColor}/>
          </svg>
        </Link>

        {/* Navlinks (center, uppercase, even spacing) */}
        <nav className="hidden md:flex items-center gap-2">
        {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
            <p 
                className="text-2xl p-4 font-normal uppercase"
                style={{ 
                fontFamily: 'Bebas Neue', 
                lineHeight: '150%',
                color: textColor
                }}
            >
                {item.label}
            </p>
            </Link>
        ))}
        </nav>

        {/* Contact button */}
        <div className="flex items-center">
        <Link
            href="/contact"
            className="hidden py-4 px-10 justify-center items-center sm:flex text-sm font-semibold uppercase tracking-wide transition-colors duration-200 shadow-sm"
            style={{
              backgroundColor: buttonBgColor,
              color: buttonTextColor,
            }}
        >
            CONTACT
        </Link>

        

          {/* Mobile menu button */}
          <button
            className={`md:hidden ml-4 inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 ${
              isWhiteVersion 
                ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
            }`}
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className={`md:hidden border-t ${mobileBorderColor} ${mobileBgColor}`}>
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block text-sm font-medium uppercase tracking-wide transition-colors duration-200 py-2 ${mobileTextColor}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-4 px-6 py-3 rounded-md text-sm font-semibold uppercase tracking-wide text-center transition-colors duration-200"
              style={{
                backgroundColor: buttonBgColor,
                color: buttonTextColor,
              }}
              onClick={() => setOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
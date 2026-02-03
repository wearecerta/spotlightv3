"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import MobileNavbar from "../ui/MobileNavBar";
import { client } from "@/sanity/lib/client";
import { SERVICES_QUERY } from "@/sanity/queries/serviceQuery";
import ServicesDropdown from "../ui/ServiceDropDown";

const navItems = [
  // { label: "SERVICES", href: "/services" },
  { label: "ABOUT", href: "/about" },
  { label: "WORKS", href: "/works" },
  { label: "CULTURE", href: "/culture" },
  { label: "BLOGS", href: "/blog" },
];

// Pages that use the white version (light colors)
const whiteVersionPages = ["/", "/about", "/culture"];

export default function Navbar() {
  const [services, setServices] = useState([]);
  const [open, setOpen] = useState(false);
  const [serviceDropOpen, setServiceDropOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await client.fetch(SERVICES_QUERY);
        setServices(data);
      } catch (error) {
        console.log("Error fetching services");
      }
    };
    fetchServices();
  }, []);

  // Determine which version to use based on current page
  const isWhiteVersion = whiteVersionPages.includes(pathname);

  // Color schemes
  const logoColor = isWhiteVersion ? "#F7F7F8" : "#0C0C0E";
  const dropDownBg = isWhiteVersion ? "#0C0C0E" : "#ffffff";

  const textColor = isWhiteVersion ? "#F7F7F8" : "#0C0C0E";
  const serviceColor = isWhiteVersion ? "#B6B7C3" : "#4A4A5A";
  const ActiveServiceColor = isWhiteVersion ? "#B6B7C3" : "#0C0C0E";

  const buttonBgColor = isWhiteVersion ? "#F7F7F8" : "#0C0C0E";
  const buttonTextColor = isWhiteVersion ? "#0C0C0E" : "#F7F7F8";
  const mobileBgColor = isWhiteVersion ? "bg-gray-900" : "bg-gray-100";
  const mobileTextColor = isWhiteVersion
    ? "text-gray-400 hover:text-white"
    : "text-gray-600 hover:text-gray-900";
  const mobileBorderColor = isWhiteVersion
    ? "border-gray-700"
    : "border-gray-300";

  return (
    <>
      <header
        className={`w-full z-50 ${serviceDropOpen && isWhiteVersion ? "bg-(--spotlight-950)" : ""} ${open ? "bg-(--spotlight-950)" : ""} `}
      >
        {" "}
        <div className="w-full mx-auto py-4 px-6 md:px-16 lg:px-20 flex items-center justify-between">
          {" "}
          {/* Applied Figma styles: width:1440px, padding:16px 80px (py-4 px-20), flex, justify-between, items-center */}
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* mobile logos */}
            {!open && !isWhiteVersion ? (
              <Image
                src="/Home/spotlight-logo-black.svg"
                alt="Spotlight Logo"
                width={150}
                height={42}
                className="w-24 h-6 md:w-36 md:h-10 md:hidden "
              />
            ) : (
              <Image
                src="/Home/spotlight-logo-white.svg"
                alt="Spotlight Logo"
                width={150}
                height={42}
                className="w-24 h-6 md:w-36 md:h-10 md:hidden"
              />
            )}

            {!isWhiteVersion ? (
              <Image
                src="/Home/spotlight-logo-black.svg"
                alt="Spotlight Logo"
                width={150}
                height={42}
                className="w-24 h-6 md:w-36 md:h-10 hidden md:block "
              />
            ) : (
              <Image
                src="/Home/spotlight-logo-white.svg"
                alt="Spotlight Logo"
                width={150}
                height={42}
                className="w-24 h-6 md:w-36 md:h-10 hidden md:block"
              />
            )}
          </Link>
          {/* Navlinks (center, uppercase, even spacing) */}
          <nav className="hidden md:flex items-center gap-2">
            <div
              style={{ color: textColor }}
              className={`hover:border-b ${pathname == "/services"|| serviceDropOpen ? "border-b" : ""} outline-none transition-all flex gap-3 justify-center items-center duration-75 ease-in-out  px-4 py-2 h-[54px]`}
            >
              <Link
                href={"/services"}
                className="text-2xl font-normal uppercase"
                style={{
                  fontFamily: "Bebas Neue",
                  lineHeight: "150%",
                  color: textColor,
                }}
              >
                Services
              </Link>

              <svg
                onClick={() => setServiceDropOpen((prev) => !prev)}
                onMouseEnter={()=>setServiceDropOpen(true)}
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 11.462L12.077 8.385H5.923L9 11.462ZM9.003 18C7.75833 18 6.58833 17.764 5.493 17.292C4.39767 16.8193 3.44467 16.178 2.634 15.368C1.82333 14.558 1.18167 13.606 0.709 12.512C0.236333 11.418 0 10.2483 0 9.003C0 7.75767 0.236333 6.58767 0.709 5.493C1.181 4.39767 1.82133 3.44467 2.63 2.634C3.43867 1.82333 4.391 1.18167 5.487 0.709C6.583 0.236333 7.753 0 8.997 0C10.241 0 11.411 0.236333 12.507 0.709C13.6023 1.181 14.5553 1.82167 15.366 2.631C16.1767 3.44033 16.8183 4.39267 17.291 5.488C17.7637 6.58333 18 7.753 18 8.997C18 10.241 17.764 11.411 17.292 12.507C16.82 13.603 16.1787 14.556 15.368 15.366C14.5573 16.176 13.6053 16.8177 12.512 17.291C11.4187 17.7643 10.249 18.0007 9.003 18ZM9 17C11.2333 17 13.125 16.225 14.675 14.675C16.225 13.125 17 11.2333 17 9C17 6.76667 16.225 4.875 14.675 3.325C13.125 1.775 11.2333 1 9 1C6.76667 1 4.875 1.775 3.325 3.325C1.775 4.875 1 6.76667 1 9C1 11.2333 1.775 13.125 3.325 14.675C4.875 16.225 6.76667 17 9 17Z"
                  fill={textColor}
                />
              </svg>
            </div>

            {navItems.map((item) => (
              <Link
                style={{ color: textColor }}
                key={item.href}
                href={item.href}
                className={`hover:border-b ${pathname == item.href ? "border-b" : ""} transition-all duration-75 ease-in-out  px-4 py-2 h-[54px]`}
              >
                <p
                  className="text-2xl font-normal uppercase"
                  style={{
                    fontFamily: "Bebas Neue",
                    lineHeight: "150%",
                    color: textColor,
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
              href="#contact"
              className="hidden py-2 px-7 text-xl justify-center items-center sm:flex font-normal uppercase tracking-wide transition-colors duration-200 shadow-sm"
              style={{
                backgroundColor: buttonBgColor,
                color: buttonTextColor,
                fontFamily: "Bebas Neue",
              }}
            >
              CONTACT
            </Link>

            {/* mobile logo */}

            {/* Mobile menu button */}
            <button
              className={`md:hidden ml-4 inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 ${
                isWhiteVersion
                  ? "text-gray-400 hover:text-white hover:bg-gray-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
              }`}
              aria-label="Toggle menu"
              onClick={() => setOpen((s) => !s)}
            >
              {open ? (
                <svg
                  className="w-9 h-6"
                  fill="none"
                  stroke="white"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // <svg
                //   width="64"
                //   height="24"
                //   viewBox="0 0 64 24"
                //   fill="none"
                //   xmlns="http://www.w3.org/2000/svg"
                // >
                //   <path
                //     d="M12 17.27C11.6213 17.27 11.3049 17.2217 11.0507 17.125C10.7965 17.0283 10.6685 16.9093 10.6667 16.768C10.6649 16.6267 10.7929 16.508 11.0507 16.412C11.3085 16.316 11.6249 16.2683 12 16.269H52C52.3787 16.269 52.6951 16.317 52.9493 16.413C53.2053 16.509 53.3333 16.628 53.3333 16.77C53.3333 16.912 53.2053 17.0307 52.9493 17.126C52.6933 17.2213 52.3769 17.269 52 17.269L12 17.27ZM12 12.5C11.6213 12.5 11.3049 12.452 11.0507 12.356C10.7965 12.26 10.6685 12.141 10.6667 11.999C10.6649 11.857 10.7929 11.7383 11.0507 11.643C11.3085 11.5477 11.6249 11.5 12 11.5H52C52.3787 11.5 52.6951 11.548 52.9493 11.644C53.2036 11.74 53.3316 11.859 53.3333 12.001C53.3351 12.143 53.2071 12.2617 52.9493 12.357C52.6916 12.4523 52.3751 12.5 52 12.5H12ZM12 7.73C11.6213 7.73 11.3049 7.68233 11.0507 7.587C10.7947 7.491 10.6667 7.372 10.6667 7.23C10.6667 7.088 10.7947 6.96933 11.0507 6.874C11.3067 6.77867 11.6231 6.731 12 6.731H52C52.3787 6.731 52.6951 6.779 52.9493 6.875C53.2036 6.971 53.3316 7.08933 53.3333 7.23C53.3351 7.37067 53.2071 7.48933 52.9493 7.586C52.6916 7.68267 52.3751 7.73067 52 7.73H12Z"
                //     fill={isWhiteVersion ? "#F7F7F8" : "black"}
                //   />
                // </svg>

                <svg
                  width="26"
                  height="11"
                  viewBox="0 0 26 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.75 0.75H24.75M0.75 5.36538H24.75M0.75 9.98077H24.75"
                    stroke={isWhiteVersion ? "#F7F7F8" : "#000"}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile dropdown */}
        {open && <MobileNavbar pathname={pathname} setOpen={setOpen} />}
      </header>

      {serviceDropOpen && (
        <ServicesDropdown
          open={serviceDropOpen}
          services={services}
          pathname={pathname}
          dropDownBg={dropDownBg}
          serviceColor={serviceColor}
          ActiveServiceColor={ActiveServiceColor}
          onClose={() => setServiceDropOpen(false)}
        />
      )}
    </>
  );
}

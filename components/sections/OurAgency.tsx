"use client";

import Image from "next/image";

export default function OurAgency() {
  const agencies = [
    { id: 1, name: "Urban", logo: "/Home/urban.svg" },
    { id: 2, name: "Domino Marketing Solutions", logo: "/Home/domino.png" },
    { id: 3, name: "Certa", logo: "/Home/certa.svg" },
    { id: 4, name: "Making Events", logo: "/Home/maxima.png" },
    { id: 5, name: "On A Rebel", logo: "/Home/onarebel.svg" },
  ];

  return (
    <section
      style={{
        padding:
          "var(--section-margin-y, 120px) var(--section-margin-x, 120px)",
        flexDirection: "column",
        alignItems: "center",
        background: "#ffffff",
        display: "flex",
        gap: "48px",
      }}
    >
      <div className=" flex flex-col items-center gap-2">

      {/* Title */}
      <h2
        style={{
          color: "#777",
          textAlign: "center",
          fontFamily: 'var(--font-primary, "Bebas Neue")',
          fontSize: "56px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "100%",
          textTransform: "uppercase",
        }}
      >
        OUR AGENCY NETWORKS
      </h2>

      {/* Description */}
      <p
        style={{
          color: "var(--spotlight-950, #0C0C0E)",
          textAlign: "center",
          fontFamily: "var(--font-secondary, Outfit)",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "150%",
          maxWidth: "900px",
        }}
      >
        A multi-industry creative ecosystem powering everything from
        storytelling to technology and experiences.
      </p>

            </div>


      {/* Agencies Grid */}
      <div
        style={{
          gap: "var(--space-xs, 32px)",
        }}
        className="grid md:grid-cols-5 grid-cols-2 w-full max-w-[1440px]"
      >
        {agencies.map((agency) => (
          <div
            key={agency.id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "var(--space-xl, 48px) var(--space-lg, 32px)",
              // background: "",
              aspectRatio: "4 / 3",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            className="agency-card bg-[#F5F6F7] gap-4"
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={agency.logo}
                alt={agency.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
              />
            </div>
          </div>
        ))}
      </div>

     
    </section>
  );
}

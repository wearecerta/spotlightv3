import Image from "next/image";
import AwardsCard from "../ui/AwardsCard";

export default function Awards() {
  const awards = [
    {
      id: 1,
      organization: "Edelman African Network",
      award: "Excellence In Design Award, Safaricom",
      imageSrc: "/Home/award-1.webp",
    },
    {
      id: 2,
      organization: "Africa Marketing Confederation",
      award: "Most Effective Campaign of the Year 2025, Safaricom",
      imageSrc: "/Home/award-5.webp",
    },
    {
      id: 3,
      organization: "Edelman African Network",
      award: "Storytelling Mastery Award Abbot Laboratories",
      imageSrc: "/Home/award-2.webp",
    },
    {
      id: 4,
      organization: "Edelman African Network",
      award: "Best Campaign of the Year 2024, Safaricom",
      imageSrc: "/Home/award-3.webp",
    },
    {
      id: 5,
      organization: "Africa Marketing Confederation",
      award: "Not for profit/public sector of the year, Min of Health & Blood Bank ETH",
      imageSrc: "/Home/awards-4.webp",
    },
    {
      id: 6,
      organization: "Edelman African Network",
      award:"Outstanding Collaboration Award, Safaricom",
      imageSrc: "/Home/award-6.webp",
    },
  ];
  const firstRow = awards.slice(0, 3);
  const secondRow = awards.slice(3, 6);
  return (
    <section
      className="flex w-full overflow-hidden "
      style={{
        display: "flex",
        padding:
          "var(--section-margin-y, 120px) var(--section-margin-x, 120px)",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "var(--space-xxl, 64px)",
        alignSelf: "stretch",
        background: "#000000",
      }}
    >
      {/* Header Content Wrapper */}
      <div
        className="flex flex-col items-center w-full"
        style={{ gap: "var(--space-small, 20px)" }}
      >
        {/* Title */}
        <h1
          className="text-center"
          style={{
            fontSize: "clamp(4rem, 12vw, var(--h2-size))",
            fontFamily: "var(--font-primary)",
            lineHeight: "var(--h2-line)",
            fontWeight: "400",
            background:
              "linear-gradient(180deg, var(--spotlight-50) 0%, var(--spotlight-500) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textTransform: "uppercase",
            letterSpacing: "0.02em",
          }}
        >
          AWARDS
        </h1>

        {/* Quote/Description */}
        <p
          className="text-center max-w-4xl"
          style={{
            color: "var(--spotlight-50, #F7F7F8)",
            textAlign: "center",
            fontFamily: "var(--font-secondary, Outfit)",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "300",
            lineHeight: "120%",
          }}
        >
          "We're proud of the trust and recognition we've earned along the way.
          From impactful public sector initiatives to highly effective brand
          campaigns, our work has been honored for driving real results and
          meaningful change."
        </p>
      </div>

      {/* Awards Container on Desktop  */}

      {/* first row */}
      <div
        className="w-full  hidden md:flex justify-center items-center max-w-[1440px] mx-auto"
        style={{
          gap: "var(--space-lg, 32px)",
          alignSelf: "stretch",
        }}
      >
        {firstRow.map((award, index) => {
          // Left and Right cards
          if (index === 0 || index === 2) {
            return (
              <div
                key={award.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "16px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                }}
              >
                <AwardsCard
                  organization={award.organization}
                  award={award.award}
                  imageSrc={award.imageSrc}
                  className="w-full"
                />
              </div>
            );
          }

          // Middle card (index 1) - with trophy
          return (
            <div
              key={award.id}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--space-xxl, 64px)",
                flex: "1 0 0",
              }}
            >
              {/* Trophy Icon */}

              <Image
                src="/Icons/trophy.svg"
                alt="Trophy Icon"
                width={230}
                height={250}
              />

              {/* Middle Award Card */}
              <AwardsCard
                organization={award.organization}
                award={award.award}
                imageSrc={award.imageSrc}
                className="w-full"
              />
            </div>
          );
        })}
      </div>

      {/* second row */}
      <div
        className="w-full  hidden md:flex justify-center items-center max-w-[1440px] mx-auto"
        style={{
          gap: "var(--space-lg, 32px)",
          alignSelf: "stretch",
        }}
      >
        {secondRow.map((award, index) => {
          // Left and Right cards
          if (index === 0 || index === 2) {
            return (
              <div
                key={award.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "16px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                }}
                className="-mt-96"
              >
                <AwardsCard
                  organization={award.organization}
                  award={award.award}
                  imageSrc={award.imageSrc}
                  className="w-full"
                />
              </div>
            );
          }

          // Middle card
          return (
            <div
              key={award.id}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--space-xxl, 64px)",
                flex: "1 0 0",
              }}
            >
              {/* Middle Award Card */}
              <AwardsCard
                organization={award.organization}
                award={award.award}
                imageSrc={award.imageSrc}
                className="w-full"
              />
            </div>
          );
        })}
      </div>
      {/* Awards container on mobile */}
      <div
        className="w-full flex flex-col md:hidden justify-center items-center max-w-[1440px] mx-auto"
        style={{
          gap: "var(--space-lg, 32px)",
          alignSelf: "stretch",
        }}
      >
        <Image
          src="/Icons/trophy.svg"
          alt="Trophy Icon"
          width={230}
          height={250}
        />
        {awards.map((award) => (
          <div
            key={award.id}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "16px",
              flex: "1 0 0",
              alignSelf: "stretch",
            }}
          >
            <AwardsCard
              organization={award.organization}
              award={award.award}
              imageSrc={award.imageSrc}
              className="w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

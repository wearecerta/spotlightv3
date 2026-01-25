import { client } from "@/sanity/lib/client";
import { TeamMemberCard } from "../ui/TeamMemberCard";
import { LEADERSHIP_TEAM_QUERY } from "@/sanity/queries/AboutUsQuery";
import { urlFor } from "@/sanity/lib/image";
export default async function Leadership() {
  const Teams = await client.fetch(
    LEADERSHIP_TEAM_QUERY,
    {},
    { next: { revalidate: 60 } },
  );

  if (!Teams) return null;

  return (
    <section
      style={{
        display: "flex",
        // padding: 'var(--section-margin-y, 120px) var(--section-margin-x, 120px)',
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--space-xxl, 64px)",
        alignSelf: "stretch",
        background: "var(--spotlight-950, #0C0C0E)",
      }}
      className="p-6 md:p-(--space-xxl) lg:p-(--section-margin-y)"
    >
      {/* Title */}
      <h2
        style={{
          fontSize: "clamp(3.5rem, 10vw, var(--h2-size))",
          fontFamily: "var(--font-primary)",
          lineHeight: "var(--h2-line)",
          display: "inline-block",
          width: "100%",
          background:
            "linear-gradient(180deg, var(--spotlight-50) 0%, var(--spotlight-700) 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
        }}
      >
        LEADERSHIP TEAM
      </h2>

      {/* Team Grid - 3 rows, 5 columns */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-(--space-lg) w-full max-w-[1400px]">
        {Teams.teamMembers.map((member: any, index: number) => (
          <TeamMemberCard
            key={index}
            name={member?.name || ""}
            position={member?.position || ""}
            imageSrc={
              member?.mainImage
                ? urlFor(member.mainImage)
                    .width(400)
                    .height(600)
                    .quality(80)
                    .format("webp")
                    .url()
                : ""
            }
            imageHoverSrc={
              member?.secondaryImage
                ? urlFor(member.secondaryImage)
                    .width(400)
                    .height(600)
                    .quality(80)
                    .format("webp")
                    .url()
                : ""
            }
          />
        )) || []}
      </div>
    </section>
  );
}

import ServicesCard from "@/components/ui/ServicesCard";
import { client } from "@/sanity/lib/client";
import { SERVICES_QUERY } from "@/sanity/queries/serviceQuery";

export default async function Service() {
  const services =
    (await client.fetch(SERVICES_QUERY, {}, { next: { revalidate: 60 } })) ||
    [];
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        minHeight: "100vh",
        background: "#F7F7F8",
        paddingBottom: "160px",
      }}
    >
      {/* Services Heading */}
      <div className="max-w-[1440px] flex flex-col gap-2 p-[24px] md:p-(--space-xxl) mx-auto">
        <h2
          style={{
            color: "var(--spotlight-950, #0C0C0E)",
            fontFamily: 'var(--font-primary, "Bebas Neue")',
            fontSize: "var(--h2-size)",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "100%",
            textTransform: "uppercase",
            textAlign: "left",
          }}
        >
          SERVICES
        </h2>

        {/* Description Paragraph */}
        <p
          style={{
            color: "#000",
            fontFamily: "var(--font-secondary, Outfit)",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "300",
            lineHeight: "120%",
            textAlign: "left",
          }}
        >
          We are storytellers and brand advocates. We craft compelling
          narratives that grow brands, nurture meaningful connections, and
          inspire audiences through experiences across the full spectrum of
          strategy, marketing, advertising, branding, production, and event
          services.
        </p>
      </div>

      {/* Three Videos Side by Side - Full Width, No Gaps */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-0 gap-0">
        {/* Video 1 */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            overflow: "hidden",
            background: "#000",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/F3GetToXalk?autoplay=1&mute=1&loop=1&playlist=F3GetToXalk&controls=0&modestbranding=1&rel=0&showinfo=0"
            className="absolute inset-0 w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ border: "none" ,pointerEvents:"none"}}
            title="Video 1"
          />
        </div>

        {/* Video 2 */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            overflow: "hidden",
            background: "#000",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/AgzBUr90f2w?autoplay=1&mute=1&loop=1&playlist=AgzBUr90f2w&controls=0&modestbranding=1&rel=0&showinfo=0"
            className="absolute inset-0 w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ border: "none",pointerEvents:"none" }}
            title="Video 2"
          />
        </div>

        {/* Video 3 */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            overflow: "hidden",
            background: "#000",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/dVc7QGh_Q-E?autoplay=1&mute=1&loop=1&playlist=dVc7QGh_Q-E&controls=0&modestbranding=1&rel=0&showinfo=0"
            className="absolute inset-0 w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ border: "none", pointerEvents:"none" }}
            title="Video 3"
          />
        </div>
      </div>

      {/* Service Cards Section */}
      <div className="flex flex-col">
        {services?.map((service: any) => (
          <ServicesCard
            key={service?._id}
            title={service?.title || ""}
            description={service?.description || ""}
            services={service?.subServices || []}
            imageSrc1={service?.images?.[0]?.asset?.url || ""}
            alt1={service.images?.[0]?.alt || ""}
            imageSrc2={service?.images?.[1]?.asset?.url || ""}
            alt2={service.images?.[1]?.alt || ""}
            href={`/services/${service?.slug?.current}` || "#"}
          />
        ))}
      </div>
    </main>
  );
}

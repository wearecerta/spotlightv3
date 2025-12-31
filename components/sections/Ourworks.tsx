import Buttons from "../ui/Buttons";
import ProjectCard from "../ui/ProjectCard";

export default function Ourworks() {
  return (
    <section 
      className="w-full min-h-screen py-[var(--space-xxl)]"
      style={{
        background: "var(--spotlight-950)",
        paddingLeft: "var(--section-margin-x)",
        paddingRight: "var(--section-margin-x)",
      }}
    >
      {/* Title */}
      <h1 
        className="text-center mb-[var(--space-xxl)]"
        style={{
          fontSize: 'clamp(3.5rem, 10vw, var(--h2-size))',
          fontFamily: 'var(--font-primary)',
          lineHeight: 'var(--h2-line)',
          display: 'inline-block',
          width: '100%',
          background: 'linear-gradient(180deg, var(--spotlight-50) 0%, var(--spotlight-700) 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textAlign: 'center',
        }}
      >
        OUR WORKS
      </h1>

      {/* Project Cards Grid */}
      <div className="w-full max-w-7xl mx-auto space-y-6">
        {/* First Card - Full Width */}
        <ProjectCard
          className="w-full"
          title="SAFARICOM ETHIOPIA"
          tags={["BRANDING", "MARKETING", "PRODUCTION"]}
          videoSrc="https://www.youtube.com/watch?v=c5iitHD0bNg"
          href="/work/safaricom-ethiopia"
        />

        {/* Second Row - Two Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            className="w-full"
            title="ADEY MUSIC AND STUDIO"
            tags={["BRANDING", "MARKETING", "PRODUCTION"]}
            videoSrc="https://www.youtube.com/watch?v=c5iitHD0bNg"
            href="/work/adey-music"
          />

          <ProjectCard
            className="w-full"
            title="ST. GEORGE"
            tags={["BRANDING", "MARKETING", "PRODUCTION"]}
            videoSrc="https://www.youtube.com/watch?v=c5iitHD0bNg"
            href="/work/st-george"
          />
        </div>

        {/* Third Row - Two Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            className="w-full"
            title="GRV SUMMIT"
            tags={["BRANDING", "MARKETING", "PRODUCTION"]}
            videoSrc="https://www.youtube.com/watch?v=c5iitHD0bNg"
            href="/work/grv-summit"
          />

          <ProjectCard
            className="w-full"
            title="EU & AFRICA"
            tags={["BRANDING", "MARKETING", "PRODUCTION"]}
            videoSrc="https://www.youtube.com/watch?v=c5iitHD0bNg"
            href="/work/eu-africa"
          />
        </div>

        {/* Fourth Row - Two Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            className="w-full"
            title="ADEY MUSIC AND STUDIO"
            tags={["BRANDING", "MARKETING", "PRODUCTION"]}
            videoSrc="https://www.youtube.com/watch?v=c5iitHD0bNg"
            href="/work/adey-music-2"
          />

          <ProjectCard
            className="w-full"
            title="ST. GEORGE"
            tags={["BRANDING", "MARKETING", "PRODUCTION"]}
            videoSrc="https://www.youtube.com/watch?v=c5iitHD0bNg"
            href="/work/st-george-2"
          />
        </div>
      </div>

     <Buttons>
      explore now
     </Buttons>
    </section>
  );
}
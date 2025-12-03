import ProjectCard from "../ui/ProjectCard";

export default function Ourworks() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-(--spotlight-950) font-sans">
      <h1 className="font-primary leading-[0.85] tracking-tight text-(--spotlight-50)  lg:text-left"
            style={{
              fontSize: 'clamp(3.5rem, 10vw, var(--h2-size))',
              fontFamily: 'var(--font-primary)',
              display: 'inline-block',
              background: 'linear-gradient(180deg, var(--color-Spotlight-Color-Spotlight-White, #F7F7F8) 0%, var(--color-Spotlight-Color-Dark-Gray, #4A4A5A) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }} >Our Works
      </h1>
      <ProjectCard
        className="w-[1100px] mt-10"
        title="Project Title"
        tags={["BRANDING", "MARKETING", "PRODUCTION"]}
        videoSrc="https://www.youtube.com/watch?v=c5iitHD0bNg"
        href="https://www.youtube.com/watch?v=c5iitHD0bNg"
      />
    </div>
  );
}
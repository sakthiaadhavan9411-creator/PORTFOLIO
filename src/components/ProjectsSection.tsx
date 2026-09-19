import FadeIn from './FadeIn';
import ProjectCard, { type ProjectData } from './ProjectCard';

const PROJECTS: ProjectData[] = [
  {
    number: '01',
    category: 'Client',
    name: 'Strategy & Product Work',
    col1Image1: '/images/strategy-feature-chart.png',
    col1Image2: '/images/strategy-user-segments.png',
    col2Image: '/images/strategy-personas.png',
  },
  {
    number: '02',
    category: 'Personal',
    name: 'Digital Presence & Growth',
    col1Image1: '/images/digital-growth-tuition-banner.png',
    col1Image2: '/images/digital-growth-landing-page.png',
    col2Image: '/images/digital-growth-analytics.png',
    imageFit: 'contain',
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 w-full rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
    >
      <FadeIn>
        <h2
          className="hero-heading mb-16 sm:mb-20 md:mb-28 text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-6xl">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            totalCards={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
}

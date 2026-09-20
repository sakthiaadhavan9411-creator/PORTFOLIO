import FadeIn from './FadeIn';
import Magnet from './Magnet';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  {
    label: 'Contact',
    href: 'https://www.linkedin.com/in/sakthi-aadhavan-3023b2313/',
    external: true,
  },
];

const PORTRAIT_URL = '/images/sakthi-hero-avatar-short-hair-transparent.png';

export default function HeroSection() {
  return (
    <section
      className="relative h-screen w-full flex flex-col"
      style={{ overflowX: 'clip' }}
    >
      <FadeIn delay={0} y={-20} as="nav">
        <div className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              className="text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </div>
      </FadeIn>

      <div className="relative flex-1 flex flex-col justify-between">
        <div className="overflow-hidden">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading mt-6 sm:mt-4 md:-mt-5 w-full whitespace-nowrap text-center text-[11vw] sm:text-[11.5vw] md:text-[12vw] lg:text-[12vw] font-black uppercase leading-none tracking-tight">
              Hi, i&apos;m sakthi
            </h1>
          </FadeIn>
        </div>

        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:bottom-0 sm:translate-y-0 z-10 w-[340px] sm:w-[440px] md:w-[560px] lg:w-[680px]"
        >
          <FadeIn delay={0.6} y={30}>
            <img
              src={PORTRAIT_URL}
              alt="Sakthi illustrated portrait"
              className="w-full h-auto select-none pointer-events-none"
              draggable={false}
            />
          </FadeIn>
        </Magnet>

        <div className="flex items-end justify-between px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-20">
          <FadeIn delay={0.35} y={20}>
            <p
              className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px] font-light uppercase tracking-wide leading-snug text-[#D7E2EA]"
              style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
            >
              The greatest investment you can make is in yourself.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

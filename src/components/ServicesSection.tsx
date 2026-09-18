import FadeIn from './FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'Automotive Parts Sourcer & Garage Owner',
    description:
      'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
    images: [
      { src: '/images/pistons-logo.png', alt: 'PISTONS premium car parts sourcing' },
      { src: '/images/automotive-revenue.png', alt: 'Automotive revenue growth result' },
    ],
  },
  {
    number: '02',
    name: 'Business Development Associate — Quill Audits',
    description:
      'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
    images: [
      { src: '/images/quill-audits.png', alt: 'A day at Quill Audits timeline' },
    ],
  },
  {
    number: '03',
    name: 'Business Development Intern — GTM Labs',
    description:
      'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
    images: [
      { src: '/images/gtm-labs.png', alt: 'GTM Labs proof of work results' },
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="price"
      className="w-full rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] bg-white px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn>
        <h2
          className="mb-16 sm:mb-20 md:mb-28 text-center font-black uppercase leading-none text-[#0C0C0C]"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1}>
            <div
              className="flex items-start gap-6 sm:gap-10 py-8 sm:py-10 md:py-12"
              style={{
                borderBottom:
                  i === SERVICES.length - 1
                    ? undefined
                    : '1px solid rgba(12, 12, 12, 0.15)',
                borderTop: i === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : undefined,
              }}
            >
              <span
                className="shrink-0 font-black leading-none text-[#0C0C0C]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </span>
              <div className="min-w-0 flex-1 flex flex-col gap-3 sm:gap-4">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed text-[#0C0C0C]"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    opacity: 0.6,
                  }}
                >
                  {service.description}
                </p>
                <div className="mt-3 flex flex-col gap-4 sm:mt-5">
                  {service.images.map((image) => (
                    <img
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full rounded-xl border border-black/10 object-contain shadow-sm"
                    />
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';

const ALL_GIFS = [
  '/images/quill-audits-letter.png',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  '/images/gtm-labs-experience-letter.png',
];

const ROW_1 = ALL_GIFS.slice(0, 11);
const ROW_2 = ALL_GIFS.slice(11);

function tripled(arr: string[]) {
  return [...arr, ...arr, ...arr];
}

const ROW_1_TILES = tripled(ROW_1);
const ROW_2_TILES = tripled(ROW_2);

function MarqueeRow({
  tiles,
  translateX,
}: {
  tiles: string[];
  translateX: number;
}) {
  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-3"
        style={{
          transform: `translateX(${translateX}px)`,
          willChange: 'transform',
        }}
      >
        {tiles.map((src, i) => (
          <img
            key={`${src}-${i}`}
            src={src}
            alt=""
            loading="lazy"
            className={`h-[270px] w-[420px] shrink-0 rounded-2xl ${
              src.startsWith('/images/')
                ? 'bg-white object-contain'
                : 'object-cover'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      const value =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(value);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10"
    >
      <div className="flex flex-col gap-3">
        <MarqueeRow tiles={ROW_1_TILES} translateX={offset - 200} />
        <MarqueeRow tiles={ROW_2_TILES} translateX={-(offset - 200)} />
      </div>
    </section>
  );
}

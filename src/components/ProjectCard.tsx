import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LiveProjectButton from './LiveProjectButton';

export interface ProjectData {
  number: string;
  category: string;
  name: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  imageFit?: 'cover' | 'contain';
  liveProjectUrl?: string;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
}

export default function ProjectCard({
  project,
  index,
  totalCards,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const imageFitClass =
    project.imageFit === 'contain' ? 'object-contain' : 'object-cover';

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32 h-[85vh]"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        style={{ scale }}
        className="flex h-full w-full flex-col gap-4 overflow-hidden rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:gap-6 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black leading-none text-[#D7E2EA]"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60">
                {project.category}
              </span>
              <span className="text-lg sm:text-2xl md:text-3xl font-medium uppercase text-[#D7E2EA]">
                {project.name}
              </span>
            </div>
          </div>
          {project.liveProjectUrl ? (
            <LiveProjectButton href={project.liveProjectUrl} />
          ) : null}
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-3 overflow-hidden sm:gap-4">
          <div className="grid min-h-0 grid-rows-[minmax(0,2fr)_minmax(0,3fr)] gap-3 overflow-hidden sm:gap-4">
            <img
              src={project.col1Image1}
              alt=""
              loading="lazy"
              className={`h-full min-h-0 w-full rounded-[28px] ${imageFitClass} sm:rounded-[40px] md:rounded-[50px]`}
            />
            <img
              src={project.col1Image2}
              alt=""
              loading="lazy"
              className={`h-full min-h-0 w-full rounded-[28px] ${imageFitClass} sm:rounded-[40px] md:rounded-[50px]`}
            />
          </div>
          <div className="min-h-0 overflow-hidden">
            <img
              src={project.col2Image}
              alt=""
              loading="lazy"
              className={`h-full min-h-0 w-full rounded-[28px] ${imageFitClass} sm:rounded-[40px] md:rounded-[50px]`}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

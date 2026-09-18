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

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32 h-[85vh]"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        style={{ scale }}
        className="h-full w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6"
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
          <LiveProjectButton />
        </div>

        <div className="flex flex-1 gap-3 sm:gap-4">
          <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
            <img
              src={project.col1Image1}
              alt=""
              loading="lazy"
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.col1Image2}
              alt=""
              loading="lazy"
              className="w-full flex-1 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <div className="w-[60%]">
            <img
              src={project.col2Image}
              alt=""
              loading="lazy"
              className="h-full w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

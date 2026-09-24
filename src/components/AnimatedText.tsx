import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

function Character({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useTransform<number, number>>;
}) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{ visibility: 'hidden' }}>{char === ' ' ? '\u00A0' : char}</span>
      <motion.span
        style={{ position: 'absolute', left: 0, top: 0, opacity }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(/\s+/);
  const totalCharacters = Array.from(words.join('')).length;

  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      <span aria-hidden="true">
        {words.map((word, wordIndex) => {
          const precedingCharacterCount = words
            .slice(0, wordIndex)
            .reduce((count, precedingWord) => count + Array.from(precedingWord).length, 0);

          return (
            <span key={`${word}-${wordIndex}`} className="inline-block whitespace-nowrap">
              {Array.from(word).map((char, charIndex) => (
                <Character
                  key={`${char}-${charIndex}`}
                  char={char}
                  index={precedingCharacterCount + charIndex}
                  total={totalCharacters}
                  progress={scrollYProgress}
                />
              ))}
              {wordIndex < words.length - 1 ? ' ' : null}
            </span>
          );
        })}
      </span>
    </p>
  );
}

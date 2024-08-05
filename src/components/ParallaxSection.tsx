import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ParallaxSectionProps = {
  imgUrl: string;
  heading: string;
  subheading: string;
  children?: React.ReactNode;
};

const IMAGE_PADDING = 12;

export function ParallaxSection({
  imgUrl,
  subheading,
  heading,
  children,
}: ParallaxSectionProps) {
  return (
    <div style={{ paddingInline: IMAGE_PADDING }}>
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
}

export function StickyImage({ imgUrl }: { imgUrl: string }) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={targetRef}
      className="bg-cover bg-center sticky z-0 overflow-hidden rounded-3xl"
      style={{
        backgroundImage: `url(${imgUrl})`,
        height: `calc(100vh - ${IMAGE_PADDING * 2}px)`,
        top: IMAGE_PADDING,
        scale,
      }}
    >
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-neutral-950/70"
      />
    </motion.div>
  );
}

function OverlayCopy({
  heading,
  subheading,
}: {
  heading: string;
  subheading: string;
}) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      ref={targetRef}
      className="absolute inset-0 flex flex-col items-center justify-center h-screen w-full text-neutral-100"
      style={{ y, opacity }}
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
}

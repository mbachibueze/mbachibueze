"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

type GalleryVideoProps = {
  src: string;
};

export default function GalleryVideo({ src }: GalleryVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(wrapperRef, {
    amount: 0.6,
    margin: "0% 0px",
  });

  useEffect(() => {
    if (!videoRef.current) return;

    if (isInView) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <motion.main
      ref={wrapperRef}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="hover:scale-102 transition-transform duration-300 cursor-pointer rounded-2xl
      "
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        className="
          rounded-2xl row-span-2 
        "
      />
    </motion.main>
  );
}

"use client";
import { FC, useRef } from "react";
import { AppContainer } from "../global";
import { TypographyH1, TypographyP } from "../ui/typographies";
// import { Button } from "../ui/button";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

export const HomeBanner: FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.3, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  return (
    <motion.section ref={targetRef} style={{ opacity }}>
      <AppContainer className="relative max-w-full grid md:grid-cols-2 lg:grid-cols-3 h-[85vh]">
        <div className="absolute top-0 bottom-0 right-0 left-0 md:static grid items-center justify-cente backdrop-blur-sm hover:backdrop-blur-none transition-transform text-primary-foreground md:text-secondary-foreground">
          <div className="text-center space-y-4 p-4 md:p-0">
            <TypographyH1>Iconic Gifts since 1837</TypographyH1>
            <TypographyP className="text-sm md:max-w-sm mx-auto">
              Celebrate every facet of love this holiday with iconic gifts from
              Tiffany & Co.
            </TypographyP>
            <motion.button
              className="font-light text-base px-4 py-3 text-secondary-foreground border"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Shop Now
            </motion.button>
          </div>
        </div>
        <motion.div
          className="bg-red-50 overflow-hidden"
        >
          <motion.img
            src={"/home_banner_image1.jpeg"}
            alt="home banner image"
            height={1000}
            width={1000}
            className="object-cover h-full"
            style={{ scale }}
          />
        </motion.div>
        <div className="bg-muted/5 hidden lg:block">
          <Image
            src={"/home_banner_image4.jpeg"}
            alt="home banner image"
            height={1000}
            width={1000}
            className="object-cover h-full"
          />
        </div>
      </AppContainer>
    </motion.section>
  );
};

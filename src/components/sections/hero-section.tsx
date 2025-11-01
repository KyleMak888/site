"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button, Container } from "@/components/ui";
import { heroAnimation, heroTextAnimation, heroTextItem } from "@/lib/animations";
import type { HeroContent } from "@/types";

interface HeroSectionProps {
  hero: HeroContent;
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={hero.backgroundImage}
          alt="广州领燕科技 - 品牌与数字产品背景"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px]" />
      </div>
      <Container className="py-28 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroAnimation}
          className="mx-auto max-w-5xl"
        >
          <motion.p
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-6 py-2 text-sm font-medium text-primary shadow-lg shadow-primary/10 ring-1 ring-primary/20"
            variants={heroTextItem}
          >
            {hero.badgeLabel}
            <span className="h-1 w-1 rounded-full bg-primary"></span>
            {hero.badgeCaption}
          </motion.p>

          <motion.div variants={heroTextAnimation}>
            <motion.h1
              className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl"
              variants={heroTextItem}
            >
              {hero.headline}
              <br />
              <span className="text-primary">{hero.highlight}</span>
            </motion.h1>

            <motion.p
              className="mb-6 text-lg text-gray-600 md:text-xl"
              variants={heroTextItem}
            >
              {hero.subheadline}
            </motion.p>

            <motion.p
              className="mb-12 text-lg text-gray-700 md:text-xl"
              variants={heroTextItem}
            >
              <span className="font-semibold">{hero.description}</span>
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            variants={heroTextAnimation}
          >
            <motion.div variants={heroTextItem}>
              <Button size="lg" href={hero.primaryCta.href}>
                {hero.primaryCta.label}
              </Button>
            </motion.div>
            <motion.div variants={heroTextItem}>
              <Button size="lg" variant="outline" href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-16"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          >
            <svg
              className="mx-auto h-6 w-6 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

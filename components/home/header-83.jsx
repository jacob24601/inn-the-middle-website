"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll } from "motion/react";
import React, { useRef } from "react";

const useRelume = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["20% start", "end end"],
  });
  const opacityContent = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const opacityOverlay = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [3.2, 1]);

  return {
    opacityContent,
    opacityOverlay,
    scale,
    sectionRef,
  };
};

export function Header83() {
  const useActive = useRelume();
  return (
    <section ref={useActive.sectionRef} className="relative h-[300vh] scheme-1">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="flex h-full items-center justify-center"
          style={{ opacity: useActive.opacityContent }}
        >
          <div className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="relative z-10 mx-auto max-w-lg text-center">
              <h1 className="text-h1 mb-5 font-bold text-white md:mb-6">
                The heart of Langley Mill beats here
              </h1>
              <p className="text-medium text-white">
                Step into warmth and good company. Inn The Middle is where
                locals gather for honest pints, genuine conversation, and the
                kind of hospitality that makes you feel at home.
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Button title="Our Menu" variant="alternate">
                  Our Menu
                </Button>
                <Button title="Gallery" variant="secondary-alt">
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="absolute inset-0 z-0">
          <motion.div
            className="bg-neutral-darkest/50 absolute inset-0 z-10"
            style={{ opacity: useActive.opacityOverlay }}
          />
          <motion.div
            style={{ scale: useActive.scale }}
            className="grid size-full auto-cols-fr grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-3"
          >
            <div className="relative hidden md:block">
              <img
                src="/images/home-hero-header-section-0.jpg"
                alt="Relume placeholder image 1"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative">
              <img
                src="/images/home-hero-header-section-1.jpg"
                alt="Relume placeholder image 2"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="/images/home-hero-header-section-2.jpg"
                alt="Relume placeholder image 3"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="/images/home-hero-header-section-3.jpg"
                alt="Relume placeholder image 4"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative">
              <img
                src="/images/home-hero-header-section-4.jpg"
                alt="Relume placeholder image 5"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="/images/home-hero-header-section-5.jpg"
                alt="Relume placeholder image 6"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="/images/home-hero-header-section-6.jpg"
                alt="Relume placeholder image 7"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative">
              <img
                src="/images/home-hero-header-section-7.jpg"
                alt="Relume placeholder image 8"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="/images/home-hero-header-section-8.jpg"
                alt="Relume placeholder image 9"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

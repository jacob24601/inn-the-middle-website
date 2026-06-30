"use client";

import { Card } from "@/components/ui/card";
import React from "react";

export function Stats57() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Numbers</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">
            We've earned our place
          </h1>
          <p className="text-medium">Built on years of honest service</p>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-7 sm:gap-x-6 sm:gap-y-6 lg:grid-cols-[1fr_0.5fr] lg:gap-x-8 lg:gap-y-8">
          <div className="flex w-full flex-col items-center justify-center">
            <img
              src="/images/home-hero-header-section-2.jpg"
              alt="Relume placeholder image"
              className="aspect-[3/2] size-full rounded-image object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-x-6 gap-y-6 md:flex-row md:gap-y-8 lg:flex-col lg:gap-x-8">
            <Card className="flex w-full flex-col justify-center p-8 text-center">
              <h1 className="mb-2 text-h1 font-bold">4.6</h1>
              <h3 className="text-h6 font-bold">Average Google rating</h3>
            </Card>
            <Card className="flex w-full flex-col justify-center p-8 text-center">
              <h1 className="mb-2 text-h1 font-bold">300+</h1>
              <h3 className="text-h6 font-bold">Google reviews from our guests</h3>
            </Card>
            <Card className="flex w-full flex-col justify-center p-8 text-center">
              <h1 className="mb-2 text-h1 font-bold">Live</h1>
              <h3 className="text-h6 font-bold">Music most Saturday nights</h3>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

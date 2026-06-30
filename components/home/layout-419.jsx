"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout419() {
  return (
    <section className="pt-24 md:pt-0 scheme-2">
      <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-y-0">
        <div>
          <div className="md:sticky md:top-0 md:gap-y-0">
            <div className="flex flex-col items-end md:h-screen md:justify-center">
              <div className="mx-[5%] max-w-md md:mr-12 md:ml-[5vw] lg:mr-20">
                <p className="mb-3 font-semibold md:mb-4">What we offer</p>
                <h2 className="mb-5 text-h2 font-bold md:mb-6">
                  A proper pub for proper people
                </h2>
                <p className="text-medium">
                  We believe in the simple things done well. Good beer, good
                  food, and better company. That's what Inn The Middle has
                  always been about.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Our Menu" variant="secondary">
                    Our Menu
                  </Button>
                  <Button
                    title="Learn more"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-scheme-border bg-scheme-foreground px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="/images/home-hero-header-section-2.jpg"
                  alt="Relume placeholder image 1"
                  className="size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-3 text-h5 font-bold md:mb-4">Friendly staff</h3>
              <p>
                Our team knows your name and remembers how you like your drink.
                Service that comes from the heart, not a handbook.
              </p>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-scheme-border bg-scheme-foreground px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="/images/games-room.jpg"
                  alt="Relume placeholder image 2"
                  className="size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-3 text-h5 font-bold md:mb-4">Cozy interiors</h3>
              <p>
                Dark wood, warm lighting, and the kind of worn comfort that only
                comes with years of laughter and stories shared within these
                walls.
              </p>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-scheme-border bg-scheme-foreground px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="/images/beer-pump-2.jpg"
                  alt="Relume placeholder image 3"
                  className="size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-3 text-h5 font-bold md:mb-4">Quality ales</h3>
              <p>
                A carefully selected range of beers and ales from local
                breweries and beyond. Each pint poured with care and respect for
                the craft.
              </p>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-scheme-border bg-scheme-foreground px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="/images/balloons-interior.jpg"
                  alt="Relume placeholder image 4"
                  className="size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-3 text-h5 font-bold md:mb-4">Live music</h3>
              <p>
                Regular live performances bring the place alive. From acoustic
                sets to full bands, there's always something worth staying for.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

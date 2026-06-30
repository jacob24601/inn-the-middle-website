"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";

export function Cta39() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <Card className="grid auto-cols-fr grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 md:p-12">
            <div>
              <h2 className="mb-5 text-h2 font-bold md:mb-6">
                Ready to join us for a pint?
              </h2>
              <p className="text-medium">
                Book your table or get in touch with any questions
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Call to book" asChild>
                <a href="tel:+441773714888">Call to book</a>
              </Button>
              <Button title="Find us" variant="secondary" asChild>
                <a href="https://www.google.com/maps/place/Inn+The+Middle/@53.0183975,-1.3682802,14z/data=!4m10!1m2!2m1!1smill+inn!3m6!1s0x4879ecc19545905b:0x7860300803066dfe!8m2!3d53.0183975!4d-1.3332613" target="_blank" rel="noopener noreferrer">Find us</a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/images/home-cta-section.jpg"
              className="size-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}

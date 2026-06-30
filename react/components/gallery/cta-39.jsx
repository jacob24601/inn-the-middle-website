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
                Ready to visit us
              </h2>
              <p className="text-medium">
                Step through our doors and find out why locals keep coming back.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Reserve" asChild>
                <a href="tel:+441773714888">Call to book</a>
              </Button>
              <Button title="Menu" variant="secondary" asChild>
                <a href="/our-menu">Menu</a>
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

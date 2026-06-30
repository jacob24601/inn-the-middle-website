"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout19() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Signature</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Lunchtime food & carvery
            </h2>
            <p className="mb-5 text-medium md:mb-6">
              Generous, freshly cooked portions of pub classics, including
              our popular carvery and burgers, served at lunchtime. It's the
              kind of food guests keep coming back for.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>Carvery served lunchtimes</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Hearty pub classics, including our burgers</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Generous portions, freshly cooked</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Order" variant="secondary">
                Order
              </Button>
              <Button
                title="Learn"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Learn
              </Button>
            </div>
          </div>
          <div>
            <img
              src="/images/home-features-list-section-2.jpg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout358() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Menu</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Browse our full menu
            </h2>
            <p className="text-medium">
              Each dish is made with care and served with pride.
            </p>
          </div>
        </div>
        <Card className="grid auto-cols-fr grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center p-6 md:p-8 lg:p-12">
            <div>
              <p className="mb-2 text-small font-semibold">Pub classics</p>
              <h3 className="mb-5 text-h3 font-bold md:mb-6">
                Burger and curly fries
              </h3>
              <p>
                A hearty burger served with a generous side of curly fries —
                guests regularly mention the portion sizes here, especially
                on the burgers.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Add" variant="secondary">
                Add
              </Button>
              <Button
                title="View"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                View
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/images/home-features-list-section-2.jpg"
              className="size-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}

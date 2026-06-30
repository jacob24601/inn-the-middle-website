"use client";

import { Card } from "@/components/ui/card";
import React from "react";
import { StarFull } from "relume-icons";

function Stars({ count }) {
  return (
    <div className="mb-5 flex gap-1 md:mb-6">
      {Array.from({ length: count }).map((_, i) => (
        <div className="shrink-0" key={i}>
          <StarFull className="size-6 text-scheme-text" />
        </div>
      ))}
    </div>
  );
}

function Avatar({ initials }) {
  return (
    <div className="mb-4 flex size-12 min-h-12 min-w-12 items-center justify-center rounded-full bg-scheme-text/10 text-medium font-semibold md:mr-4 md:mb-0">
      {initials}
    </div>
  );
}

export function Testimonial17() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-h2 font-bold md:mb-6">Guest reviews</h2>
          <p className="text-medium">Straight from those who've been here</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
            <Stars count={5} />
            <h5 className="text-medium">
              "A big, clean, well-kept pub with a great beer selection, a
              loyalty stamp card for free pints, good food, and a spacious
              garden with a proper smoking shelter."
            </h5>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <Avatar initials="DC" />
              <div>
                <p className="font-semibold">Dale C.</p>
                <p>Tripadvisor review</p>
              </div>
            </div>
          </Card>
          <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
            <Stars count={5} />
            <h5 className="text-medium">
              "Since the new managers came in we've been back regularly —
              the live bands and drinks selection make the walk from the
              next town worth it."
            </h5>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <Avatar initials="PG" />
              <div>
                <p className="font-semibold">Paul Glover</p>
                <p>Google review</p>
              </div>
            </div>
          </Card>
          <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
            <Stars count={5} />
            <h5 className="text-medium">
              "Stopped in on a whim for lunch and were pleasantly surprised —
              friendly service, great value food, and spotlessly clean.
              We'll definitely be back."
            </h5>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <Avatar initials="LJ" />
              <div>
                <p className="font-semibold">Lady Jacq</p>
                <p>Tripadvisor review</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

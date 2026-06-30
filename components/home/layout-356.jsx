"use client";

import { Button } from "@/components/ui/button";
import React, { Fragment } from "react";
import { ChevronRight } from "relume-icons";

export function Layout356() {
  return (
    <section className="scheme-2">
      <div className="sticky top-0">
        <Fragment>
          <div className="relative -top-32 h-0" />
          <div className="relative border-t border-scheme-border bg-white pb-8 md:pb-14 lg:sticky lg:pb-0 top-0 lg:mb-32">
            <div className="px-[5%]">
              <div className="container">
                <a href="#" className="flex h-16 w-full items-center underline">
                  <span className="mr-5 text-medium font-semibold md:mr-6">
                    01
                  </span>
                  <h1 className="text-medium font-semibold">Food and drink</h1>
                </a>
                <div className="py-8 md:py-10 lg:py-12">
                  <div className="grid grid-cols-1 gap-y-12 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
                    <div>
                      <p className="mb-3 font-semibold md:mb-4">Sustenance</p>
                      <h2 className="mb-5 text-h2 font-bold md:mb-6">
                        Honest food and carefully poured pints
                      </h2>
                      <p className="text-medium">
                        From hearty classics to craft ales, we serve the kind of
                        fare that keeps people coming back. Every dish and drink
                        is prepared with respect for quality and tradition.
                      </p>
                      <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                        <Button title="Menu" variant="secondary">
                          Menu
                        </Button>
                        <Button
                          title="Explore"
                          variant="link"
                          size="link"
                          iconRight={
                            <ChevronRight className="text-scheme-text" />
                          }
                        >
                          Explore
                        </Button>
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        src="/images/home-features-list-section-2.jpg"
                        className="h-[25rem] w-full rounded-image object-cover sm:h-[30rem] lg:h-[60vh]"
                        alt="Relume placeholder image 1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
        <Fragment>
          <div className="relative -top-32 h-0" />
          <div className="relative border-t border-scheme-border bg-white pb-8 md:pb-14 lg:sticky lg:pb-0 lg:top-16 lg:-mt-16 lg:mb-16">
            <div className="px-[5%]">
              <div className="container">
                <a href="#" className="flex h-16 w-full items-center underline">
                  <span className="mr-5 text-medium font-semibold md:mr-6">
                    02
                  </span>
                  <h1 className="text-medium font-semibold">Live events</h1>
                </a>
                <div className="py-8 md:py-10 lg:py-12">
                  <div className="grid grid-cols-1 gap-y-12 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
                    <div>
                      <p className="mb-3 font-semibold md:mb-4">
                        Entertainment
                      </p>
                      <h2 className="mb-5 text-h2 font-bold md:mb-6">
                        Music and moments worth remembering
                      </h2>
                      <p className="text-medium">
                        Regular performances bring the place alive with energy
                        and soul. Whether it's acoustic sets or full bands,
                        there's always something worth staying for on our stage.
                      </p>
                      <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                        <Button title="Gallery" variant="secondary">
                          Gallery
                        </Button>
                        <Button
                          title="Discover"
                          variant="link"
                          size="link"
                          iconRight={
                            <ChevronRight className="text-scheme-text" />
                          }
                        >
                          Discover
                        </Button>
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        src="/images/games-room.jpg"
                        className="h-[25rem] w-full rounded-image object-cover sm:h-[30rem] lg:h-[60vh]"
                        alt="Relume placeholder image 2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
        <Fragment>
          <div className="relative -top-32 h-0" />
          <div className="relative border-t border-scheme-border bg-white pb-8 md:pb-14 lg:sticky lg:pb-0 lg:top-32 lg:mb-16">
            <div className="px-[5%]">
              <div className="container">
                <a href="#" className="flex h-16 w-full items-center underline">
                  <span className="mr-5 text-medium font-semibold md:mr-6">
                    03
                  </span>
                  <h1 className="text-medium font-semibold">
                    Private functions
                  </h1>
                </a>
                <div className="py-8 md:py-10 lg:py-12">
                  <div className="grid grid-cols-1 gap-y-12 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
                    <div>
                      <p className="mb-3 font-semibold md:mb-4">Occasions</p>
                      <h2 className="mb-5 text-h2 font-bold md:mb-6">
                        Your celebration deserves the right setting
                      </h2>
                      <p className="text-medium">
                        We host birthdays, anniversaries, and gatherings of all
                        kinds. Our team handles the details so you can focus on
                        the people and the moment.
                      </p>
                      <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                        <Button title="Inquire" variant="secondary">
                          Inquire
                        </Button>
                        <Button
                          title="Contact"
                          variant="link"
                          size="link"
                          iconRight={
                            <ChevronRight className="text-scheme-text" />
                          }
                        >
                          Contact
                        </Button>
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        src="/images/balloons-interior.jpg"
                        className="h-[25rem] w-full rounded-image object-cover sm:h-[30rem] lg:h-[60vh]"
                        alt="Relume placeholder image 3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      </div>
    </section>
  );
}

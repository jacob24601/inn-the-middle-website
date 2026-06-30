"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { Add } from "relume-icons";

export function Faq4() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container max-w-lg">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-h2 font-bold md:mb-6">Questions</h2>
          <p className="text-medium">
            Find answers to what matters most before your visit
          </p>
        </div>
        <Accordion type="multiple">
          <div className="grid items-start justify-items-stretch gap-4">
            <Card>
              <AccordionItem
                value="item-0"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  Do you have parking?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Yes, we have a free customer car park on site, with extra
                  street parking nearby. During busy live music and quiz
                  nights, we recommend arriving early to secure a spot.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-1"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  Are pets welcome here?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  We love dogs and welcome well-behaved pets in our bar area.
                  Please keep them on a lead and let our staff know when you
                  arrive. We provide water bowls and a friendly environment for
                  your furry friends.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-2"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  What are your opening hours?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  We're open Sunday to Thursday from noon until midnight,
                  and Friday and Saturday from noon until 1am. Bank holidays
                  may vary, so check ahead if you're planning a special
                  visit.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-3"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  Do you take card payments?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  We accept all major card payments and cash. Our tills are
                  modern and secure, making transactions quick and easy. We also
                  accept contactless payments for your convenience.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-4"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  Can we book a private event?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Absolutely. We host private functions for groups of all sizes.
                  Contact us directly to discuss your needs and we'll work with
                  you to create the perfect setting for your celebration or
                  gathering.
                </AccordionContent>
              </AccordionItem>
            </Card>
          </div>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-h4 font-bold md:mb-4">Need more help?</h4>
          <p className="text-medium">Get in touch with us directly</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary" asChild>
              <a href="tel:+441773714888">Call us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

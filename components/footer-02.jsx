"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { FacebookLogo } from "relume-icons";

export function Footer2() {
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20 scheme-2">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div className="grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 md:gap-x-8 lg:grid-cols-4">
            <a
              href="/"
              className="sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-2 lg:col-start-auto lg:col-end-auto lg:row-start-auto lg:row-end-auto text-h5 font-semibold" style={{ fontFamily: "Fraunces, serif" }}
            >
              Inn The Middle
            </a>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Explore</h2>
              <ul>
                <li className="py-2 text-small">
                  <a href="/our-menu" className="flex items-center gap-3">
                    Our Menu
                  </a>
                </li>
                <li className="py-2 text-small">
                  <a href="/gallery" className="flex items-center gap-3">
                    Gallery
                  </a>
                </li>
                <li className="py-2 text-small">
                  <a href="/reviews" className="flex items-center gap-3">
                    Reviews
                  </a>
                </li>
                <li className="py-2 text-small">
                  <a href="#" className="flex items-center gap-3">
                    Contact
                  </a>
                </li>
                <li className="py-2 text-small">
                  <a href="#" className="flex items-center gap-3">
                    Hours
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Connect</h2>
              <ul>
                <li className="py-2 text-small">
                  <a
                    href="https://www.facebook.com/people/Inn-The-Middle/61565662354486/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    Facebook
                  </a>
                </li>
                <li className="py-2 text-small">
                  <a
                    href="https://www.google.com/maps/place/Inn+The+Middle/@53.0183975,-1.3682802,14z/data=!4m10!1m2!2m1!1smill+inn!3m6!1s0x4879ecc19545905b:0x7860300803066dfe!8m2!3d53.0183975!4d-1.3332613"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    Find us on Google Maps
                  </a>
                </li>
                <li className="py-2 text-small">
                  <a href="tel:+441773714888" className="flex items-center gap-3">
                    Call: 01773 714888
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Legal</h2>
              <ul>
                <li className="py-2 text-small">
                  <a href="#" className="flex items-center gap-3">
                    Privacy
                  </a>
                </li>
                <li className="py-2 text-small">
                  <a href="#" className="flex items-center gap-3">
                    Terms
                  </a>
                </li>
                <li className="py-2 text-small">
                  <a href="#" className="flex items-center gap-3">
                    Cookies
                  </a>
                </li>
                <li className="py-2 text-small">
                  <a href="#" className="flex items-center gap-3">
                    Accessibility
                  </a>
                </li>
                <li className="py-2 text-small">
                  <a href="#" className="flex items-center gap-3">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="mb-3 font-semibold md:mb-4">Updates</h1>
            <p className="mb-3 text-small md:mb-4">
              Get the latest news and special offers delivered to your inbox
              each week.
            </p>
            <div className="w-full max-w-md">
              <form className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4">
                <Input id="email" type="email" placeholder="Enter email" />
                <Button title="Join" variant="secondary" size="sm">
                  Join
                </Button>
              </form>
              <p className="text-tiny">
                By subscribing you agree to our Privacy Policy and consent to
                receive updates.
              </p>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-scheme-border" />
        <div className="flex flex-col-reverse items-start pt-6 pb-4 text-small md:justify-start md:pt-8 md:pb-0 lg:flex-row lg:items-center lg:justify-between">
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:justify-center md:gap-x-6 md:gap-y-0 lg:text-left">
            <li className="mt-4 md:mt-0">
              © 2024 Inn The Middle. All rights reserved.
            </li>
            <li className="underline">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="underline">
              <a href="#">Terms of Service</a>
            </li>
            <li className="underline">
              <a href="#">Cookies Settings</a>
            </li>
          </ul>
          <div className="mb-8 flex items-center justify-center gap-3 lg:mb-0">
            <a
              href="https://www.facebook.com/people/Inn-The-Middle/61565662354486/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookLogo className="size-6 text-scheme-text" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

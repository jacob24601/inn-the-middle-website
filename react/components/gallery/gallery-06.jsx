"use client";

import React from "react";

export function Gallery6() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="md:mb-18 mb-12 text-center lg:mb-20">
          <h2 className="text-h2 mb-5 font-bold md:mb-6">Photo collection</h2>
          <p className="text-medium">
            Explore the character and charm of Inn The Middle
          </p>
        </div>
        <div className="grid grid-cols-2 items-start justify-center gap-6 md:gap-8 lg:grid-cols-4">
          <a href="#">
            <img
              src="/images/gallery-0.jpg"
              alt="The courtyard beer garden at Inn The Middle"
              className="rounded-image size-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src="/images/gallery-1.jpg"
              alt="Curly fries and a burger served at Inn The Middle"
              className="rounded-image size-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src="/images/gallery-2.jpg"
              alt="A pint of cask ale on the bar"
              className="rounded-image size-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src="/images/gallery-3.jpg"
              alt="Chalkboard listing the cask ales and ciders on tap"
              className="rounded-image size-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src="/images/gallery-4.jpg"
              alt="A bottle of prosecco and glasses set out for a celebration"
              className="rounded-image size-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src="/images/gallery-5.jpg"
              alt="Derby Brewing Hop Till You Drop pump clip on the bar"
              className="rounded-image size-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src="/images/gallery-6.jpg"
              alt="Inn The Middle pub sign above the front entrance"
              className="rounded-image size-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src="/images/gallery-7.jpg"
              alt="Inn The Middle interior bar seating"
              className="rounded-image size-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src="/images/gallery-8.jpg"
              alt="Inn The Middle pub sign listing carvery, cask ales and quiz night"
              className="rounded-image size-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src="/images/gallery-9.jpg"
              alt="Balloons decorating the pub for a celebration"
              className="rounded-image size-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src="/images/gallery-10.jpg"
              alt="A pint of Magpie Brewery cask ale on the bar"
              className="rounded-image size-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src="/images/gallery-11.jpg"
              alt="The decked beer garden at Inn The Middle"
              className="rounded-image size-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src="/images/gallery-12.jpg"
              alt="Pub games room with dartboard and seating"
              className="rounded-image size-full object-cover"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

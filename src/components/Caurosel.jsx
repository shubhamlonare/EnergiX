'use client';
import React from 'react'
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Carousel({ items, interval = 3000 }) {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) return; // pause on hover

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [hovered, interval, items.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  return (
    <div
      className="relative w-full h-72 overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {items.map((item, i) => (
          <div key={i} className="relative min-w-full h-full">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Buttons (visible only on hover) */}
      {hovered && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 btn btn-circle btn-ghost bg-white/70"
          >
            ❮
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 btn btn-circle btn-ghost bg-white/70"
          >
            ❯
          </button>
        </>
      )}
    </div>
  );
}

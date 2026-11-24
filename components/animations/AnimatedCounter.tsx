
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  separator?: boolean;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2.5,
  separator = false,
}: AnimatedCounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = counterRef.current;

    if (!element) return;

    const format = (num: number) => {
      const rounded = Math.round(num);

      return (
        prefix +
        (separator
          ? rounded.toLocaleString("en-US")
          : rounded.toString()) +
        suffix
      );
    };

    // Respect reduced-motion accessibility settings
    if (
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      element.textContent = format(value);
      return;
    }

    const counter = { number: 0 };

    const ctx = gsap.context(() => {
      gsap.to(counter, {
        number: value,
        duration: duration,
        ease: "power3.out",

        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          once: true,
        },

        onUpdate: () => {
          element.textContent = format(counter.number);
        },
      });
    }, element);

    return () => ctx.revert();
  }, [value, suffix, prefix, duration, separator]);

  return (
    <span ref={counterRef}>
      {prefix}0{suffix}
    </span>
  );
}

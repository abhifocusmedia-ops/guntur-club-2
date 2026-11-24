
"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll() {
  const pathname = usePathname();

  const lenisRef = useRef<Lenis | null>(null);
  const previousPath = useRef(pathname);
  const historyNavigation = useRef(false);

  /* Existing smooth scrolling engine */

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      autoRaf: false,
    });

    lenisRef.current = lenis;

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  /* Detect browser back and forward navigation */

  useEffect(() => {
    const onPopState = () => {
      historyNavigation.current = true;
    };

    window.addEventListener("popstate", onPopState);

    return () => {
      window.removeEventListener(
        "popstate",
        onPopState
      );
    };
  }, []);

  /* Synchronize scroll when the page changes */

  useLayoutEffect(() => {
    if (previousPath.current === pathname) return;

    previousPath.current = pathname;

    const isHistoryNavigation =
      historyNavigation.current;

    historyNavigation.current = false;

    const lenis = lenisRef.current;

    if (isHistoryNavigation) {
      const frame = requestAnimationFrame(() => {
        lenis?.resize();

        lenis?.scrollTo(window.scrollY, {
          immediate: true,
          force: true,
        });

        ScrollTrigger.refresh();
      });

      return () => cancelAnimationFrame(frame);
    }

    let frame = 0;
    let attempts = 0;

    function resetScroll() {
      lenisRef.current?.resize();

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });

      lenisRef.current?.scrollTo(0, {
        immediate: true,
        force: true,
      });
    }

    function positionPage() {
      const hash = window.location.hash;

      if (hash) {
        let id = hash.slice(1);

        try {
          id = decodeURIComponent(id);
        } catch {
          // Keep the original ID if decoding fails.
        }

        const target = document.getElementById(id);

        if (target) {
          target.scrollIntoView({
            behavior: "instant",
            block: "start",
          });

          lenisRef.current?.resize();

          lenisRef.current?.scrollTo(window.scrollY, {
            immediate: true,
            force: true,
          });

          ScrollTrigger.refresh();
          return;
        }

        if (attempts++ < 60) {
          frame = requestAnimationFrame(positionPage);
          return;
        }
      }

      resetScroll();
      ScrollTrigger.refresh();
    }

    if (!window.location.hash) {
      resetScroll();
    }

    frame = requestAnimationFrame(positionPage);

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}

"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function AdvancedMotion() {
  const pathname = usePathname();
  const curtain = useRef<HTMLDivElement>(null);
  const previous = useRef(pathname);
  useEffect(() => {
    const changed = previous.current !== pathname;
    previous.current = pathname;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (min-width: 769px)",
    );
    const root = document.querySelector<HTMLElement>(
      "#main-content .inner-page",
    );
    if (pathname === "/" || !root) return;
    let frame = 0;
    let observer: IntersectionObserver | undefined;
    const visible = new Set<HTMLElement>();
    const animated = new Set<Animation>();
    const cleanup: (() => void)[] = [];
    const photos = new Set<HTMLElement>();
    const buttons = new Set<HTMLElement>();
    function play(
      el: HTMLElement,
      frames: Keyframe[],
      options: KeyframeAnimationOptions,
    ) {
      const a = el.animate(frames, options);
      animated.add(a);
      a.onfinish = a.oncancel = () => animated.delete(a);
    }
    function update() {
      frame = 0;
      visible.forEach((el) => {
        const r = el.getBoundingClientRect();
        const progress = Math.max(
          -1,
          Math.min(
            1,
            (window.innerHeight / 2 - r.top - r.height / 2) /
              (window.innerHeight / 2 + r.height / 2),
          ),
        );
        el.style.setProperty("--gc-parallax", `${progress * 16}px`);
      });
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    function stop() {
      observer?.disconnect();
      observer = undefined;
      cancelAnimationFrame(frame);
      frame = 0;
      cleanup.splice(0).forEach((fn) => fn());
      animated.forEach((a) => a.cancel());
      animated.clear();
      photos.forEach((el) => {
        el.classList.remove("gc-parallax");
        el.style.removeProperty("--gc-parallax");
      });
      photos.clear();
      visible.clear();
      buttons.forEach((el) => {
        el.classList.remove("gc-magnetic");
        el.style.removeProperty("--gc-mx");
        el.style.removeProperty("--gc-my");
      });
      buttons.clear();
      root?.classList.remove("gc-advanced-active");
    }
    function start(transition = false) {
      stop();
      if (media.matches || !root) return;
      root.classList.add("gc-advanced-active");
      if (
        transition &&
        curtain.current &&
        !window.location.hash &&
        window.scrollY < 80
      ) {
        play(
          curtain.current,
          [{ transform: "scaleY(1)" }, { transform: "scaleY(0)" }],
          { duration: 650, easing: "cubic-bezier(.76,0,.24,1)" },
        );
      }
      if ("IntersectionObserver" in window) {
        observer = new IntersectionObserver(
          (entries) =>
            entries.forEach((entry) => {
              const el = entry.target as HTMLElement;
              if (photos.has(el)) {
                if (entry.isIntersecting) visible.add(el);
                else visible.delete(el);
                schedule();
              } else if (entry.isIntersecting) {
                observer?.unobserve(el);
                if (!el.contains(document.activeElement))
                  play(
                    el,
                    [
                      { opacity: 0.55, translate: "0 12px" },
                      { opacity: 1, translate: "0 0" },
                    ],
                    {
                      duration: 650,
                      delay: Number(el.dataset.gcFooterDelay || 0),
                      easing: "ease-out",
                    },
                  );
              }
            }),
          { threshold: 0 },
        );
        document
          .querySelectorAll<HTMLElement>("footer .foot-grid > div")
          .forEach((el, i) => {
            if (el.getBoundingClientRect().top < window.innerHeight) return;
            el.dataset.gcFooterDelay = String(i * 85);
            observer?.observe(el);
            cleanup.push(() => {
              delete el.dataset.gcFooterDelay;
            });
          });
      }
      if (!desktop.matches) return;
      root
        .querySelectorAll<HTMLElement>(
          ".about-intro .card-image, .inner-editorial .card-image",
        )
        .forEach((el) => {
          if (!el.querySelector("img") || !observer) return;
          photos.add(el);
          el.classList.add("gc-parallax");
          observer.observe(el);
        });
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
      cleanup.push(() => {
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
      });
      root.querySelectorAll<HTMLElement>("a.btn, button.btn").forEach((el) => {
        buttons.add(el);
        el.classList.add("gc-magnetic");
        const reset = () => {
          el.style.setProperty("--gc-mx", "0px");
          el.style.setProperty("--gc-my", "0px");
        };
        const move = (e: PointerEvent) => {
          if (e.pointerType !== "mouse" || el.matches(":focus-visible")) return;
          const r = el.getBoundingClientRect();
          const clamp = (n: number) => Math.max(-6, Math.min(6, n));
          el.style.setProperty(
            "--gc-mx",
            `${clamp((e.clientX - r.left - r.width / 2) * 0.12)}px`,
          );
          el.style.setProperty(
            "--gc-my",
            `${clamp((e.clientY - r.top - r.height / 2) * 0.18)}px`,
          );
        };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", reset);
        el.addEventListener("focus", reset);
        cleanup.push(() => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", reset);
          el.removeEventListener("focus", reset);
        });
      });
      schedule();
    }
    const refresh = () => start();
    start(changed);
    media.addEventListener("change", refresh);
    desktop.addEventListener("change", refresh);
    return () => {
      stop();
      media.removeEventListener("change", refresh);
      desktop.removeEventListener("change", refresh);
    };
  }, [pathname]);
  return <div ref={curtain} className="gc-route-curtain" aria-hidden="true" />;
}

"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const targets = [
  ".home-page .home-services .reference-service-card",
  ".home-page .home-services .service-card",
  ".home-page .home-explore a:has(.card-image)",
  ".amenities-page .amenities-directory-card",
  ".affiliations-inner .affiliation-card",
  ".gallery-inner .gc-gallery-grid .gallery-tile",
].join(",");

export default function CardRevealMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.querySelector<HTMLElement>("#main-content") ?? document.querySelector<HTMLElement>("main");
    if (!root || !window.IntersectionObserver || !HTMLElement.prototype.animate) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    let mutation: MutationObserver | undefined;
    let frame = 0;
    const seen = new WeakSet<HTMLElement>();
    const pending = new Set<HTMLElement>();
    const active = new Map<Animation, HTMLElement>();

    function play(el: HTMLElement, delay: number) {
      if (el.contains(document.activeElement)) return;
      // Framer Motion already owns opacity/transform on directory cards.
      // Animate their content instead, so filtering and layout remain independent.
      const isMotionCard = el.matches(".amenities-directory-card, .gallery-tile");
      const layers = isMotionCard
        ? Array.from(el.children).filter((child): child is HTMLElement => child instanceof HTMLElement)
        : [el];
      const mobile = window.innerWidth <= 768;
      for (const layer of layers) {
        const animation = layer.animate(
          [{ opacity: 0.25, translate: `0 ${mobile ? 14 : 28}px` }, { opacity: 1, translate: "0 0" }],
          { duration: mobile ? 500 : 750, delay, easing: "cubic-bezier(.22,1,.36,1)", fill: "backwards" }
        );
        active.set(animation, el);
        const release = () => { active.delete(animation); };
        animation.onfinish = release;
        animation.oncancel = release;
      }
    }

    function scan() {
      if (!root || !observer) return;
      for (const el of pending) {
        if (!root.contains(el)) { observer.unobserve(el); pending.delete(el); }
      }
      for (const [animation, el] of active) {
        if (!root.contains(el)) animation.cancel();
      }
      root.querySelectorAll<HTMLElement>(targets).forEach(el => {
        if (seen.has(el) || pending.has(el)) return;
        if (el.getBoundingClientRect().bottom <= 0) { seen.add(el); return; }
        pending.add(el);
        observer?.observe(el);
      });
    }

    function stop() {
      observer?.disconnect(); observer = undefined;
      mutation?.disconnect(); mutation = undefined;
      cancelAnimationFrame(frame);
      pending.clear();
      for (const animation of active.keys()) animation.cancel();
      active.clear();
    }

    function start() {
      stop();
      if (media.matches || !root) return;
      observer = new IntersectionObserver(entries => {
        const entering = entries.filter(entry => entry.isIntersecting && !seen.has(entry.target as HTMLElement));
        entering.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left);
        entering.forEach((entry, index) => {
          const el = entry.target as HTMLElement;
          observer?.unobserve(el); pending.delete(el); seen.add(el);
          if (root.contains(el)) play(el, Math.min(index * 85, 255));
        });
      }, { threshold: 0.12 });
      scan();
      mutation = new MutationObserver(() => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(scan);
      });
      mutation.observe(root, { childList: true, subtree: true });
    }

    function handleFocus(event: FocusEvent) {
      if (!(event.target instanceof Node)) return;
      const target = event.target;
      for (const [animation, el] of active) {
        if (el.contains(target)) animation.cancel();
      }
    }

    root.addEventListener("focusin", handleFocus);
    start();
    media.addEventListener("change", start);
    return () => {
      stop();
      root.removeEventListener("focusin", handleFocus);
      media.removeEventListener("change", start);
    };
  }, [pathname]);

  return null;
}

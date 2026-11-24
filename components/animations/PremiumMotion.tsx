"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Enhances only inner-page editorial elements. Never animates layout or filter state.
export default function PremiumMotion() {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/" || typeof IntersectionObserver === "undefined") return;
    const root = document.querySelector<HTMLElement>("#main-content");
    if (!root) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const seen = new WeakSet<HTMLElement>();
    const touched = new Set<HTMLElement>();
    const selector = [
      ".inner-page .inner-editorial .card-image",
      ".inner-page .about-intro .card-image",
      ".inner-page .section > .container > .section-heading",
      ".inner-page .section > .container > .eyebrow",
    ].join(",");
    let observer: IntersectionObserver | undefined;
    let changes: MutationObserver | undefined;
    let frame = 0;
    function clearMotion() {
      observer?.disconnect(); changes?.disconnect(); cancelAnimationFrame(frame);
      touched.forEach(el => el.classList.remove("pm-enter-left", "pm-enter-right", "pm-enter-text"));
      touched.clear();
    }
    function start() {
      clearMotion();
      if (media.matches) return;
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          observer?.unobserve(el);
          if (seen.has(el)) return;
          seen.add(el);
          // Do not replay or hide elements already visible at registration.
          const image = el.classList.contains("card-image");
          const editorial = el.closest(".inner-editorial, .editorial-grid");
          const right = editorial && el.getBoundingClientRect().left > editorial.getBoundingClientRect().left + editorial.clientWidth * .4;
          const cls = image ? (right ? "pm-enter-right" : "pm-enter-left") : "pm-enter-text";
          touched.add(el); el.classList.add(cls);
        });
      }, { threshold: .12 });
      function scan() {
        root!.querySelectorAll<HTMLElement>(selector).forEach(el => {
          if (seen.has(el)) return;
          // Avoid flashing on deep links, restored scroll positions and initial viewport.
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) { seen.add(el); return; }
          if (r.bottom <= 0) { seen.add(el); return; }
          observer?.observe(el);
        });
      }
      scan();
      changes = new MutationObserver(() => { cancelAnimationFrame(frame); frame = requestAnimationFrame(scan); });
      changes.observe(root!, { childList: true, subtree: true });
    }
    start(); media.addEventListener("change", start);
    return () => { clearMotion(); media.removeEventListener("change", start); };
  }, [pathname]);
  return null;
}

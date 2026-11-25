"use client";

import { useEffect, useId, useState } from "react";
import { usePathname } from "next/navigation";

const LOGO = "/images/guntur-club-intro.png";
const KEY = "guntur-club-intro-played-v2";

export default function CinematicEntrance() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const id = useId().replace(/:/g, "");
  const clip = (name: string) => `url(#${id}-${name})`;

  useEffect(() => {
    if (pathname !== "/" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      return;
    }
    try { if (sessionStorage.getItem(KEY)) return; } catch { return; }
    setVisible(true);
    const timer = window.setTimeout(() => {
      setVisible(false);
      try { sessionStorage.setItem(KEY, "true"); } catch { /* storage unavailable */ }
    }, 2750);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  if (!visible || pathname !== "/") return null;

  return (
    <div className="gc-cinematic-entrance gc-logo-assembly" aria-hidden="true">
      <div className="gc-intro-border" />
      <svg className="gc-assembly-logo" viewBox="0 0 540 470" xmlns="http://www.w3.org/2000/svg" focusable="false">
        <defs>
          <clipPath id={`${id}-left`}><path d="M134 86 L208 111 L210 144 L175 144 L134 114 Z" /></clipPath>
          <clipPath id={`${id}-right`}><path d="M402 86 L328 111 L326 144 L361 144 L402 114 Z" /></clipPath>
          <clipPath id={`${id}-face`}><path d="M198 69 H337 V116 L339 144 L333 295 H201 L198 145 L204 116 Z" /></clipPath>
          <clipPath id={`${id}-name`}><rect x="0" y="310" width="540" height="89" /></clipPath>
          <clipPath id={`${id}-date`}><rect x="0" y="400" width="540" height="70" /></clipPath>
          <mask id={`${id}-ring`} maskUnits="userSpaceOnUse" x="0" y="0" width="540" height="470">
            <ellipse className="gc-assembly-ring-trace" cx="268" cy="165.5" rx="159" ry="137" fill="none" stroke="white" strokeWidth="12" pathLength="1" />
          </mask>
        </defs>
        <g className="gc-assembly-horn-left" clipPath={clip("left")}><image href={LOGO} width="540" height="470" /></g>
        <g className="gc-assembly-horn-right" clipPath={clip("right")}><image href={LOGO} width="540" height="470" /></g>
        <g className="gc-assembly-face" clipPath={clip("face")}><image href={LOGO} width="540" height="470" /></g>
        <image href={LOGO} width="540" height="470" mask={clip("ring")} />
        <g className="gc-assembly-name" clipPath={clip("name")}><image href={LOGO} width="540" height="470" /></g>
        <g className="gc-assembly-date" clipPath={clip("date")}><image href={LOGO} width="540" height="470" /></g>
        <image className="gc-assembly-final" href={LOGO} width="540" height="470" />
      </svg>
    </div>
  );
}

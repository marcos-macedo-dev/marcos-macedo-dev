"use client";

import { useEffect, useRef } from "react";

export function BackgroundMotion() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = containerRef.current;

    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;

    const updatePointer = (clientX: number, clientY: number) => {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      frame = requestAnimationFrame(() => {
        const x = clientX / window.innerWidth - 0.5;
        const y = clientY / window.innerHeight - 0.5;

        element.style.setProperty("--pointer-x", x.toFixed(4));
        element.style.setProperty("--pointer-y", y.toFixed(4));
      });
    };

    const handlePointerMove = (event: PointerEvent) => {
      updatePointer(event.clientX, event.clientY);
    };

    const handlePointerLeave = () => {
      updatePointer(window.innerWidth / 2, window.innerHeight / 2);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave, { passive: true });

    return () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="background-motion" aria-hidden="true">
      <span className="background-beam" />
      <span className="background-orb background-orb-a" />
      <span className="background-orb background-orb-b" />
      <span className="background-noise" />
    </div>
  );
}

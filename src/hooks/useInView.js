// hooks/useInView.js — Scroll-triggered visibility using IntersectionObserver
import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, isInView].
 * Attach `ref` to any DOM element; `isInView` becomes true once it enters the viewport.
 * @param {number} threshold  - 0–1, fraction of element visible before triggering
 * @param {boolean} once      - If true, stays true after first trigger (default)
 */
export function useInView(threshold = 0.15, once = true) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return [ref, isInView];
}

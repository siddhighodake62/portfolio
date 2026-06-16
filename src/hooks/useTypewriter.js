// hooks/useTypewriter.js — Text scramble/typewriter effect cycling through phrases
import { useEffect, useState, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

/**
 * Cycles through `phrases` with a scramble-in effect.
 * @param {string[]} phrases
 * @param {object} opts
 * @returns {string} current display text
 */
export function useTypewriter(phrases, { scrambleDuration = 1200, holdDuration = 3000, disabled = false } = {}) {
  const [display, setDisplay] = useState(phrases[0] || "");
  const indexRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (disabled || phrases.length === 0) {
      setDisplay(phrases[0] || "");
      return;
    }

    let cancelled = false;

    function scrambleTo(target, onDone) {
      const len = target.length;
      const startTime = performance.now();

      function tick(now) {
        if (cancelled) return;
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / scrambleDuration, 1);

        // Number of characters resolved so far (left to right)
        const resolved = Math.floor(progress * len);

        let result = "";
        for (let i = 0; i < len; i++) {
          if (i < resolved) {
            result += target[i];
          } else {
            result += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }
        setDisplay(result);

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setDisplay(target);
          onDone();
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    function cycle() {
      if (cancelled) return;
      const phrase = phrases[indexRef.current];
      scrambleTo(phrase, () => {
        if (cancelled) return;
        setTimeout(() => {
          if (cancelled) return;
          indexRef.current = (indexRef.current + 1) % phrases.length;
          cycle();
        }, holdDuration);
      });
    }

    cycle();

    return () => {
      cancelled = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [phrases, scrambleDuration, holdDuration, disabled]);

  return display;
}

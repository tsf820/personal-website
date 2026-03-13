import { useState, useEffect, useRef, useMemo } from "react";

const BLOCKS = ["░", "▓", "█", "▒", "■", "▪", "●", "◆"];
const BINARY = ["0", "1"];
const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
const STABLE_CHARS = new Set([" ", "—", "–", "-", ".", ",", "'", '"', "(", ")", "/", ":", "@"]);

const CYCLE_MS = 80; // how long each random char holds before changing

// Simple hash for deterministic per-character-per-timeslot randomness
function hash(n: number): number {
  let x = n | 0;
  x = ((x >> 16) ^ x) * 0x45d9f3b;
  x = ((x >> 16) ^ x) * 0x45d9f3b;
  x = (x >> 16) ^ x;
  return Math.abs(x);
}

function pickFromPool(pool: string[], charIndex: number, timeSlot: number): string {
  return pool[hash(charIndex * 997 + timeSlot) % pool.length];
}

// Fisher-Yates shuffle with a seed for deterministic order
function shuffleIndices(length: number, seed: number): number[] {
  const indices = Array.from({ length }, (_, i) => i);
  let s = seed;
  for (let i = length - 1; i > 0; i--) {
    s = hash(s);
    const j = s % (i + 1);
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices;
}

interface UseTextScrambleOptions {
  delay?: number;
  duration?: number;
}

export function useTextScramble(
  targetText: string,
  options: UseTextScrambleOptions = {}
) {
  const { delay = 0, duration = 700 } = options;
  const [displayText, setDisplayText] = useState("");
  const [started, setStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const rafRef = useRef<number>(0);
  const timeoutRef = useRef<number>(0);

  // Pre-compute a shuffled order for the resolve phase (random lock-in order)
  const resolveOrder = useMemo(() => {
    // Map each non-stable char to its resolve threshold (0-1 within resolve window)
    const nonStableIndices: number[] = [];
    for (let i = 0; i < targetText.length; i++) {
      if (!STABLE_CHARS.has(targetText[i])) {
        nonStableIndices.push(i);
      }
    }
    const shuffled = shuffleIndices(nonStableIndices.length, targetText.length * 7 + delay);
    const thresholds = new Map<number, number>();
    for (let rank = 0; rank < shuffled.length; rank++) {
      const originalIndex = nonStableIndices[shuffled[rank]];
      thresholds.set(originalIndex, rank / nonStableIndices.length);
    }
    return thresholds;
  }, [targetText, delay]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayText(targetText);
      setStarted(true);
      setIsComplete(true);
      return;
    }

    timeoutRef.current = window.setTimeout(() => {
      setStarted(true);
      const startTime = performance.now();

      const animate = (now: number) => {
        const elapsed = now - startTime;
        const rawProgress = Math.min(elapsed / duration, 1);
        const timeSlot = Math.floor(elapsed / CYCLE_MS);

        let result = "";
        for (let i = 0; i < targetText.length; i++) {
          // Stable chars appear immediately
          if (STABLE_CHARS.has(targetText[i])) {
            result += targetText[i];
            continue;
          }

          // Per-character progress: offset by position so left chars lead
          const offset = (i / targetText.length) * 0.3; // 30% spread across text length
          const charProgress = Math.max(0, (rawProgress - offset) / (1 - offset));

          if (charProgress <= 0) {
            result += " ";
          } else if (charProgress < 0.20) {
            // Phase 1: Blocks
            result += pickFromPool(BLOCKS, i, timeSlot);
          } else if (charProgress < 0.45) {
            // Phase 2: Binary
            result += pickFromPool(BINARY, i, timeSlot);
          } else if (charProgress < 0.80) {
            // Phase 3: Alpha scramble
            result += pickFromPool(ALPHA, i, timeSlot);
          } else {
            // Phase 4: Resolve — use shuffled order for lock-in
            const resolveProgress = (charProgress - 0.80) / 0.20; // 0-1 within resolve window
            const charThreshold = resolveOrder.get(i) ?? 0;
            if (resolveProgress >= charThreshold) {
              result += targetText[i];
            } else {
              result += pickFromPool(ALPHA, i, timeSlot);
            }
          }
        }

        setDisplayText(result);

        if (rawProgress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          setDisplayText(targetText);
          setIsComplete(true);
        }
      };

      rafRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      window.clearTimeout(timeoutRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, [targetText, delay, duration, resolveOrder]);

  return { displayText, started, isComplete };
}

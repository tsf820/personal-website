import { useEffect, useRef, useCallback } from "react";

interface UseMagneticOptions {
  radius?: number;
  strength?: number;
  damping?: number;
  stiffness?: number;
  disabled?: boolean;
}

export function useMagnetic(options: UseMagneticOptions = {}) {
  const {
    radius = 150,
    strength = 25,
    damping = 0.15,
    stiffness = 0.1,
    disabled = false,
  } = options;

  const ref = useRef<HTMLSpanElement>(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);
  const isAnimating = useRef(false);

  const getRect = useCallback(() => {
    return ref.current?.getBoundingClientRect() ?? null;
  }, []);

  const startAnimation = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const animate = () => {
      const forceX = (targetPos.current.x - currentPos.current.x) * stiffness;
      const forceY = (targetPos.current.y - currentPos.current.y) * stiffness;

      velocity.current.x = (velocity.current.x + forceX) * (1 - damping);
      velocity.current.y = (velocity.current.y + forceY) * (1 - damping);

      currentPos.current.x += velocity.current.x;
      currentPos.current.y += velocity.current.y;

      if (ref.current) {
        ref.current.style.transform = `translate(${currentPos.current.x}px, ${currentPos.current.y}px)`;
      }

      const totalMotion =
        Math.abs(currentPos.current.x) +
        Math.abs(currentPos.current.y) +
        Math.abs(velocity.current.x) +
        Math.abs(velocity.current.y);

      if (totalMotion < 0.01) {
        isAnimating.current = false;
        if (ref.current) {
          ref.current.style.transform = "translate(0px, 0px)";
        }
        currentPos.current.x = 0;
        currentPos.current.y = 0;
        return;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);
  }, [stiffness, damping]);

  useEffect(() => {
    if (disabled || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = getRect();
      if (!rect) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const dist = Math.sqrt(distX * distX + distY * distY);

      if (dist < radius) {
        const pull = 1 - dist / radius;
        targetPos.current.x = distX * pull * (strength / radius) * 4;
        targetPos.current.y = distY * pull * (strength / radius) * 4;
      } else {
        targetPos.current.x = 0;
        targetPos.current.y = 0;
      }

      startAnimation();
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, [disabled, radius, strength, startAnimation, getRect]);

  return { ref };
}

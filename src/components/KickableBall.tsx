import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const BALL_SIZE_DESKTOP = 48;
const BALL_SIZE_MOBILE = 38;

// Physics constants
const GRAVITY = 800; // px/s²
const AIR_FRICTION = 0.995;
const GROUND_FRICTION = 0.98;
const RESTITUTION = 0.65;
const MIN_VELOCITY = 0.5;
const KICK_RADIUS = 150; // max distance from ball center to register a kick
const KICK_STRENGTH = 600; // max impulse speed
const IDLE_NUDGE_DELAY = 5000; // ms before idle nudge

function BallSVG({ size }: { size: number }) {
  // Classic soccer ball icon — properly sized pentagons with visible white hexagons between them
  // Geometry: center pentagon r=17, outer pentagons r=16 at distance 40 from center
  // 5 hexagonal panels drawn as outlined polygons create all seam lines
  const k = "#1a1a1a";
  const w = "2.5";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <defs>
        <clipPath id="ballClip">
          <circle cx="50" cy="50" r="46" />
        </clipPath>
      </defs>

      {/* White ball */}
      <circle cx="50" cy="50" r="46" fill="white" stroke={k} strokeWidth="3" />

      <g clipPath="url(#ballClip)">
        {/* ── Black filled pentagons ── */}
        {/* Center */}
        <polygon points="50,33 66,44 60,62 40,62 34,44" fill={k} />
        {/* Top */}
        <polygon points="50,26 65,15 59,-3 41,-3 35,15" fill={k} />
        {/* Upper-right */}
        <polygon points="73,43 79,25 97,25 103,43 88,54" fill={k} />
        {/* Lower-right */}
        <polygon points="65,69 83,69 89,87 74,98 59,87" fill={k} />
        {/* Lower-left */}
        <polygon points="35,69 41,87 26,98 11,87 17,69" fill={k} />
        {/* Upper-left */}
        <polygon points="27,43 12,54 -3,43 3,25 21,25" fill={k} />

        {/* ── Hexagon outlines (creates all seam lines) ── */}
        <polygon points="50,33 66,44 73,43 79,25 65,15 50,26"
          fill="none" stroke={k} strokeWidth={w} strokeLinejoin="round" />
        <polygon points="66,44 60,62 65,69 83,69 88,54 73,43"
          fill="none" stroke={k} strokeWidth={w} strokeLinejoin="round" />
        <polygon points="60,62 40,62 35,69 41,87 59,87 65,69"
          fill="none" stroke={k} strokeWidth={w} strokeLinejoin="round" />
        <polygon points="40,62 34,44 27,43 12,54 17,69 35,69"
          fill="none" stroke={k} strokeWidth={w} strokeLinejoin="round" />
        <polygon points="34,44 50,33 50,26 35,15 21,25 27,43"
          fill="none" stroke={k} strokeWidth={w} strokeLinejoin="round" />

        {/* ── Outer pentagon outlines (seams at ball edge) ── */}
        <polygon points="50,26 65,15 59,-3 41,-3 35,15"
          fill="none" stroke={k} strokeWidth={w} strokeLinejoin="round" />
        <polygon points="73,43 79,25 97,25 103,43 88,54"
          fill="none" stroke={k} strokeWidth={w} strokeLinejoin="round" />
        <polygon points="65,69 83,69 89,87 74,98 59,87"
          fill="none" stroke={k} strokeWidth={w} strokeLinejoin="round" />
        <polygon points="35,69 41,87 26,98 11,87 17,69"
          fill="none" stroke={k} strokeWidth={w} strokeLinejoin="round" />
        <polygon points="27,43 12,54 -3,43 3,25 21,25"
          fill="none" stroke={k} strokeWidth={w} strokeLinejoin="round" />
      </g>
    </svg>
  );
}

export function KickableBall() {
  const isMobile = useIsMobile();
  const ballSize = isMobile ? BALL_SIZE_MOBILE : BALL_SIZE_DESKTOP;
  const containerRef = useRef<HTMLDivElement>(null);

  // Physics state stored in refs to avoid React re-renders
  const pos = useRef({ x: 0, y: 0 });
  const vel = useRef({ x: 0, y: 0 });
  const rotation = useRef(0);
  const angularVel = useRef(0);
  const lastKickTime = useRef(Date.now());
  const rafId = useRef(0);
  const lastTime = useRef(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const size = isMobile ? BALL_SIZE_MOBILE : BALL_SIZE_DESKTOP;

    // Initialize position: bottom-right area
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    pos.current.x = vw - size - 60;
    pos.current.y = vh - size - 60;
    vel.current.x = 0;
    vel.current.y = 0;
    lastKickTime.current = Date.now();

    const applyTransform = () => {
      el.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) rotate(${rotation.current}deg)`;
    };

    applyTransform();

    const animate = (now: number) => {
      if (!lastTime.current) lastTime.current = now;
      const dt = Math.min((now - lastTime.current) / 1000, 0.05); // cap at 50ms
      lastTime.current = now;

      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // Apply gravity
      vel.current.y += GRAVITY * dt;

      // Determine if on ground
      const onGround = pos.current.y >= vh - size - 1;
      const friction = onGround ? GROUND_FRICTION : AIR_FRICTION;

      // Apply friction
      vel.current.x *= friction;
      vel.current.y *= friction;

      // Update position
      pos.current.x += vel.current.x * dt;
      pos.current.y += vel.current.y * dt;

      // Bounce off edges
      // Right wall
      if (pos.current.x > vw - size) {
        pos.current.x = vw - size;
        vel.current.x = -Math.abs(vel.current.x) * RESTITUTION;
      }
      // Left wall
      if (pos.current.x < 0) {
        pos.current.x = 0;
        vel.current.x = Math.abs(vel.current.x) * RESTITUTION;
      }
      // Floor
      if (pos.current.y > vh - size) {
        pos.current.y = vh - size;
        vel.current.y = -Math.abs(vel.current.y) * RESTITUTION;
        // Kill tiny bounces
        if (Math.abs(vel.current.y) < 20) {
          vel.current.y = 0;
        }
      }
      // Ceiling
      if (pos.current.y < 0) {
        pos.current.y = 0;
        vel.current.y = Math.abs(vel.current.y) * RESTITUTION;
      }

      // Angular velocity from horizontal movement
      angularVel.current = vel.current.x * 0.5;
      rotation.current += angularVel.current * dt;

      // Stop if velocity is negligible
      const speed = Math.sqrt(vel.current.x ** 2 + vel.current.y ** 2);
      if (speed < MIN_VELOCITY && onGround) {
        vel.current.x = 0;
        vel.current.y = 0;
      }

      // Idle nudge
      if (
        speed < MIN_VELOCITY &&
        Date.now() - lastKickTime.current > IDLE_NUDGE_DELAY
      ) {
        vel.current.x = (Math.random() - 0.5) * 100;
        vel.current.y = -150 - Math.random() * 100;
        lastKickTime.current = Date.now();
      }

      applyTransform();
      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    // Kick handler
    const handleKick = (clientX: number, clientY: number) => {
      const ballCenterX = pos.current.x + size / 2;
      const ballCenterY = pos.current.y + size / 2;

      const dx = ballCenterX - clientX;
      const dy = ballCenterY - clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > KICK_RADIUS) return;

      // Closer = stronger (inverse of distance, normalized)
      const strength = Math.max(0.3, 1 - dist / KICK_RADIUS);
      const angle = Math.atan2(dy, dx);

      // Apply impulse
      vel.current.x += Math.cos(angle) * KICK_STRENGTH * strength;
      vel.current.y += Math.sin(angle) * KICK_STRENGTH * strength;

      // Add upward bias so ball lifts off ground
      vel.current.y -= 150 * strength;

      // Clamp max velocity
      const maxSpeed = 1200;
      const currentSpeed = Math.sqrt(vel.current.x ** 2 + vel.current.y ** 2);
      if (currentSpeed > maxSpeed) {
        const scale = maxSpeed / currentSpeed;
        vel.current.x *= scale;
        vel.current.y *= scale;
      }

      lastKickTime.current = Date.now();
    };

    const onMouseDown = (e: MouseEvent) => {
      handleKick(e.clientX, e.clientY);
    };

    const onTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) {
        handleKick(touch.clientX, touch.clientY);
      }
    };

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("touchstart", onTouchStart, { passive: true });

    return () => {
      cancelAnimationFrame(rafId.current);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("touchstart", onTouchStart);
    };
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 50,
        pointerEvents: "none",
        willChange: "transform",
        filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.4))",
      }}
    >
      <div style={{ pointerEvents: "auto", cursor: "pointer" }}>
        <BallSVG size={ballSize} />
      </div>
    </div>
  );
}

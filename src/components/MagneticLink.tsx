import React from "react";
import { useMagnetic } from "@/hooks/use-magnetic";
import { useIsMobile } from "@/hooks/use-mobile";

interface MagneticLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  magneticRadius?: number;
  magneticStrength?: number;
}

export function MagneticLink({
  children,
  magneticRadius = 100,
  magneticStrength = 15,
  ...anchorProps
}: MagneticLinkProps) {
  const isMobile = useIsMobile();
  const { ref } = useMagnetic({
    radius: magneticRadius,
    strength: magneticStrength,
    disabled: isMobile,
  });

  return (
    <span ref={ref} style={{ display: "inline-block", willChange: "transform" }}>
      <a {...anchorProps}>{children}</a>
    </span>
  );
}

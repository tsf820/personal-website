import { useTextScramble } from "@/hooks/use-text-scramble";

interface ScrambleTextProps {
  text: string;
  delay?: number;
  duration?: number;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

export function ScrambleText({
  text,
  delay = 0,
  duration = 700,
  as: Tag = "span",
  className,
}: ScrambleTextProps) {
  const { displayText, started } = useTextScramble(text, { delay, duration });

  return (
    <Tag
      className={className}
      style={{
        opacity: started ? 1 : 0,
        transition: "opacity 0.15s ease",
      }}
    >
      {displayText}
    </Tag>
  );
}

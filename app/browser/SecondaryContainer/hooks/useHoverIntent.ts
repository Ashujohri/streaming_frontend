import { useRef, useState } from "react";

export default function useHoverIntent(delay = 300) {
  const [hovered, setHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const onEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setHovered(true);
    }, delay);
  };

  const onLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHovered(false);
  };

  return { hovered, onEnter, onLeave };
}

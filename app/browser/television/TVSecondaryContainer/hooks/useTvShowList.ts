import { useEffect, useRef, useState } from "react";

export default function useTvShowList() {
  const rowRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = rowRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);

    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  };

  const scroll = (dir: "left" | "right") => {
    if (!rowRef.current) return;

    rowRef.current.scrollBy({
      left: dir === "left" ? -800 : 800,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    checkScroll();

    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return {
    rowRef,
    scroll,
    canScrollLeft,
    canScrollRight,
  };
}
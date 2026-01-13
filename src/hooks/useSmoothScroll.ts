import { useEffect, useRef, type RefObject } from "react";

export const useSmoothScroll = (containerRef?: RefObject<HTMLElement | null>) => {
  const localRef = useRef<HTMLElement | null>(null);
  const targetRef = containerRef ?? localRef;

  useEffect(() => {
    const container = targetRef.current;
    if (!container) {
      return;
    }

    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented) {
        return;
      }

      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;

      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href");
      if (!href || href === "#") {
        return;
      }

      event.preventDefault();
      const id = href.slice(1);
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // Attach the listener to a scoped container instead of the global document.
    container.addEventListener("click", handleClick);
    return () => container.removeEventListener("click", handleClick);
  }, [targetRef]);

  return targetRef;
};

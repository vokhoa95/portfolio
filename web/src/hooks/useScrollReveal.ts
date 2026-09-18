import { useEffect, useRef } from "react";

export default function useScrollReveal() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !window.IntersectionObserver) return;
    // Watch visible content, not the section's empty top padding.
    const trigger = element.querySelector("h2") ?? element;

    const reveal = () => {
      element.dataset.revealed = "true";
      observer.disconnect();
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.65) reveal();
    }, { rootMargin: "0px 0px -15% 0px", threshold: 0.65 });

    element.dataset.revealed = "false";
    observer.observe(trigger);
    element.addEventListener("focusin", reveal);

    return () => {
      observer.disconnect();
      element.removeEventListener("focusin", reveal);
      delete element.dataset.revealed;
    };
  }, []);

  return ref;
}

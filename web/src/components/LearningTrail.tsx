import { useEffect, useId, useRef, useState } from "react";
import "./LearningTrail.css";

export default function LearningTrail() {
  const ref = useRef<HTMLDivElement>(null);
  const maskId = useId();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const path = "M5 42 C55 12 85 12 130 42 S210 68 255 40 C310 10 360 45 410 12";

  return (
    <div ref={ref} className="learning-trail" data-visible={visible}>
      <p className="learning-trail-words">
        <span>LEARN</span><span>BUILD</span><span>REPEAT</span>
      </p>
      <svg viewBox="0 0 420 80" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <defs>
          <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="420" height="80">
            <path className="learning-trail-reveal" d={path} pathLength="1" fill="none" stroke="white" strokeWidth="10" />
          </mask>
        </defs>
        <path d={path} mask={`url(#${maskId})`} fill="none" stroke="var(--color-yellow)" strokeWidth="4" strokeDasharray="8 8" strokeLinecap="round" />
        <path className="learning-trail-tip" d="M389 13 L410 12 L403 32" fill="none" stroke="var(--color-yellow)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

import { useEffect, useId, useRef, useState } from "react";
import "./EmailQr.css";

export default function EmailQr() {
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
    }, { threshold: 0.35 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const flightPath = "M105 110 C102 78 142 42 167 59 C185 71 188 105 171 117 C151 130 128 113 142 96 C167 64 204 67 253 82";
  const planeOutline = "M4 9 Q1 8 4 6.8 L21 2 Q24 1 23 4 L18 21 Q17 24 15.5 21 L11.5 14 Q11 13 10 12.5 Z";

  return (
    <div ref={ref} className="contact-qr" data-visible={visible}>
      <a href="mailto:khoavo.1895@gmail.com" aria-label="Email Khoa Vo">
        <img
          src={`${import.meta.env.BASE_URL}email-qr.svg`}
          alt="QR code to email khoavo.1895@gmail.com"
          width={300}
          height={300}
          loading="lazy"
        />
      </a>
      <svg className="qr-flight" viewBox="0 0 320 130" aria-hidden="true" focusable="false">
        <defs>
          <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="320" height="180">
            <path className="qr-flight-reveal" d={flightPath} pathLength="1" fill="none" stroke="white" strokeWidth="12" />
          </mask>
        </defs>
        <path d={flightPath} mask={`url(#${maskId})`} fill="none" stroke="var(--color-yellow)" strokeWidth="4" strokeDasharray="7 10" strokeLinecap="round" />
        <g className="qr-plane">
          <g transform="translate(247 42) rotate(8 28 28) scale(2.2)">
            {/* Paper-plane send icon, outlined like a small sticker. */}
            <path d={planeOutline} fill="white" stroke="white" strokeWidth="5" strokeLinejoin="round" />
            <path d={planeOutline} fill="var(--color-yellow)" stroke="var(--color-text)" strokeWidth="1.2" strokeLinejoin="round" />
            <path d="M20 5 Q16 8 11.5 13" fill="none" stroke="var(--color-text)" strokeWidth="1.2" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}

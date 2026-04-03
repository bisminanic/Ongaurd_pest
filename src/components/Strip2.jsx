import React, { useEffect, useRef, useState } from "react";

const G = "#3ade6e";

export default function Strip2() {
  const secRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (secRef.current) obs.observe(secRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

        /* ── Wrapper ── */
        .s2w-wrap {
          font-family: 'Lato', sans-serif;
          background: #f8f9f4;
          padding: 64px 48px;
          position: relative;
          overflow: hidden;
          border-top: 1px solid #f0f0f0;
          border-bottom: 1px solid #f0f0f0;
        }

        /* ── Orbs ── */
        .s2w-orb1 {
          position: absolute; right: -80px; top: -80px;
          width: 380px; height: 380px; border-radius: 50%;
          background: rgba(58,222,110,.06); pointer-events: none;
        }
        .s2w-orb2 {
          position: absolute; left: -40px; bottom: -60px;
          width: 240px; height: 240px; border-radius: 50%;
          background: rgba(58,222,110,.04); pointer-events: none;
        }

        /* ── Inner layout ── */
        .s2w-inner {
          display: flex;
          align-items: center;
          gap: 48px;
          position: relative;
          z-index: 1;
          max-width: 860px;
          margin: 0 auto;
        }

        /* ── Badge ── */
        .s2w-badge {
          flex-shrink: 0;
          width: 130px; height: 130px;
          border-radius: 50%;
          border: 2.5px solid ${G};
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          position: relative;
          background: #fff;
          opacity: 0;
          transform: scale(.72) rotate(-10deg);
          transition: opacity .65s .1s, transform .65s .1s cubic-bezier(.34,1.56,.64,1);
        }
        .s2w-badge.in { opacity: 1; transform: scale(1) rotate(0deg); }
        .s2w-badge::before {
          content: ''; position: absolute; inset: -7px;
          border-radius: 50%; border: 1px solid rgba(58,222,110,.2);
        }
        .s2w-badge::after {
          content: ''; position: absolute; inset: -14px;
          border-radius: 50%; border: 1px dashed rgba(58,222,110,.12);
        }
        .s2w-num {
          font-size: 44px; font-weight: 900;
          color: ${G}; line-height: 1;
          letter-spacing: -2px;
        }
        .s2w-unit {
          font-size: 10px; font-weight: 700;
          letter-spacing: 2.5px; text-transform: uppercase;
          color: #999; margin-top: 3px;
        }

        /* ── Divider ── */
        .s2w-div {
          width: 1px; height: 110px; flex-shrink: 0;
          background: linear-gradient(180deg, transparent, #d8d8d8, transparent);
        }

        /* ── Text block ── */
        .s2w-text {
          flex: 1;
          opacity: 0; transform: translateX(24px);
          transition: opacity .75s .3s, transform .75s .3s cubic-bezier(.22,1,.36,1);
        }
        .s2w-text.in { opacity: 1; transform: translateX(0); }

        .s2w-eyebrow {
          display: flex; align-items: center; gap: 10px;
          font-size: 10.5px; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          color: ${G}; margin-bottom: 13px;
        }
        .s2w-eyebrow::before {
          content: ''; display: block;
          width: 24px; height: 1.5px; background: ${G};
        }

        .s2w-headline {
          font-size: clamp(20px, 3vw, 40px);
          font-weight: 900; color: #0a0f0a;
          line-height: 1.1; letter-spacing: -.5px;
          margin: 0 0 18px;
        }
        .s2w-headline em { font-style: normal; color: ${G}; }

        /* ── Card ── */
        .s2w-card {
          display: inline-flex; align-items: flex-start; gap: 10px;
          padding: 12px 16px;
          border: 1px solid #d6f2e0;
          border-radius: 8px;
          background: #f4fdf7;
          max-width: 100%;
        }
        .s2w-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: ${G}; margin-top: 5px; flex-shrink: 0;
          animation: s2wpulse 1.8s ease-in-out infinite;
        }
        @keyframes s2wpulse {
          0%,100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.5); opacity: .5; }
        }
        .s2w-card p {
          font-size: 13px; color: #555;
          line-height: 1.6; margin: 0 !important;
        }
        .s2w-card strong { color: #1a1a1a; font-weight: 700; }

        /* ── Trust bar ── */
        .s2w-trustbar {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 16px 24px;
          max-width: 860px;
          margin: 28px auto 0;
          padding-top: 26px;
          border-top: 1px solid #f0f0f0;
          position: relative; z-index: 1;
          opacity: 0; transform: translateY(12px);
          transition: opacity .7s .55s, transform .7s .55s ease;
        }
        .s2w-trustbar.in { opacity: 1; transform: translateY(0); }

        .s2w-trust {
          display: flex; align-items: center; gap: 9px;
          font-size: 12px; font-weight: 700;
          color: #888; letter-spacing: .2px;
          white-space: nowrap;
        }
        .s2w-trust-ico {
          width: 28px; height: 28px; border-radius: 50%;
          background: #f4fdf7; border: 1px solid #cceedd;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .s2w-sep {
          width: 1px; height: 20px;
          background: #ebebeb; flex-shrink: 0;
        }

        /* ══════════════════════════════
           TABLET  768px – 1023px
        ══════════════════════════════ */
        @media (max-width: 1023px) {
          .s2w-wrap { padding: 56px 36px; }
          .s2w-inner { gap: 36px; }
          .s2w-badge { width: 116px; height: 116px; }
          .s2w-num { font-size: 38px; }
        }

        /* ══════════════════════════════
           MOBILE  ≤ 767px
        ══════════════════════════════ */
        @media (max-width: 767px) {
          .s2w-wrap { padding: 48px 20px; }

          /* Stack badge above text */
          .s2w-inner {
            flex-direction: column;
            text-align: center;
            gap: 28px;
          }
          .s2w-div { display: none; }

          /* Badge — centered, slightly smaller */
          .s2w-badge {
            width: 108px; height: 108px;
          }
          .s2w-num { font-size: 36px; }

          /* Text — centered */
          .s2w-text { transform: translateY(20px); }
          .s2w-text.in { transform: translateY(0); }
          .s2w-eyebrow { justify-content: center; }
          .s2w-headline { font-size: clamp(22px, 5.5vw, 32px); }

          /* Card — full width on very small screens */
          .s2w-card { width: 100%; box-sizing: border-box; }

          /* Trust bar — stack items, hide separators */
          .s2w-trustbar {
            flex-direction: column;
            align-items: center;
            gap: 14px;
          }
          .s2w-sep { display: none; }
          .s2w-trust { font-size: 13px; }
          .s2w-orb1{
              width: 200px;
    height: 200px;
          }
        }

        /* ══════════════════════════════
           SMALL MOBILE  ≤ 380px
        ══════════════════════════════ */
        @media (max-width: 380px) {
          .s2w-wrap { padding: 40px 16px; }
          .s2w-badge { width: 96px; height: 96px; }
          .s2w-num { font-size: 32px; }
          .s2w-headline { font-size: 20px; }
        }
      `}</style>

      <div className="s2w-wrap" ref={secRef}>
        <div className="s2w-orb1" />
        <div className="s2w-orb2" />

        <div className="s2w-inner">
          {/* Badge */}
          <div className={`s2w-badge${visible ? " in" : ""}`}>
            <span className="s2w-num">30</span>
            <span className="s2w-unit">Days</span>
          </div>

          <div className="s2w-div" />

          {/* Text */}
          <div className={`s2w-text${visible ? " in" : ""}`}>
            <div className="s2w-eyebrow">Our Promise</div>
            <h3 className="s2w-headline">
              Pests return? We re-treat
              <br />
              at absolutely <em>zero cost.</em>
            </h3>
            <div className="s2w-card">
              <span className="s2w-dot" />
              <p>
                <strong>No questions asked.</strong> No extra charges.&nbsp;
                That's the OnGuard guarantee.
              </p>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className={`s2w-trustbar${visible ? " in" : ""}`}>
          <div className="s2w-trust">
            <div className="s2w-trust-ico">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1L9 5.5H13.5L9.75 8.25L11.25 13L7 10L2.75 13L4.25 8.25L0.5 5.5H5L7 1Z"
                  fill="#3ade6e"
                />
              </svg>
            </div>
            Trusted by 10,000+ homes
          </div>

          <div className="s2w-sep" />

          <div className="s2w-trust">
            <div className="s2w-trust-ico">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect
                  x="2"
                  y="4"
                  width="10"
                  height="8"
                  rx="1.5"
                  stroke="#3ade6e"
                  strokeWidth="1"
                />
                <path
                  d="M5 4V3C5 1.9 5.9 1 7 1C8.1 1 9 1.9 9 3V4"
                  stroke="#3ade6e"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <circle cx="7" cy="8" r="1" fill="#3ade6e" />
              </svg>
            </div>
            Fully insured & certified
          </div>

          <div className="s2w-sep" />

          <div className="s2w-trust">
            <div className="s2w-trust-ico">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1.5L8.5 5H12L9 7.5L10 11L7 9L4 11L5 7.5L2 5H5.5L7 1.5Z"
                  stroke="#3ade6e"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div>
            4.9 / 5 customer rating
          </div>
        </div>
      </div>
    </>
  );
}

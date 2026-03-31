
import React from "react";
import { navy, green, TICKER_ITEMS } from "../constants";

export default function Ticker() {
  
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <>
      <style>{`
        @keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .ticker-wrap {
          background: #0d203f;
          padding: 24px 0;
          overflow: hidden;
          border-top: 4px solid ${green};
          border-bottom: 4px solid ${green};
          max-width:100% !important;
        }
        .ticker-track {
          display: flex;
          animation: ticker 32s linear infinite;
          width: max-content;
        }
        .ticker-item {
          display: inline-flex; align-items: center; gap: 14px; padding: 0 34px;
        }
        .ticker-text {
          font-family: 'Lato', sans-serif;
          font-size: clamp(14px, 2vw, 22px);
          font-weight: 700;
          color: rgba(255,255,255,.68);
          white-space: nowrap;
          letter-spacing: .2px;
        }
        .ticker-dot { color: ${green}; font-size: 9px; }
      `}</style>

      <div className="ticker-wrap">
        <div className="ticker-track">
          {items.map((t, i) => (
            <span key={i} className="ticker-item">
              <span className="ticker-text">{t}</span>
              <span className="ticker-dot">◆</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

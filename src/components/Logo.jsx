import React from "react";
import logoImg from "../Assets/bg-remove-Logo.png";
import logoWhite from "../Assets/Logo Variation-02.png";

export default function Logo({ tc = "#fff", white = false }) {
  return (
    <div style={{ position: "relative", height: 70, width: 130 }}>

      {/* Normal logo */}
      <img
        src={logoImg}
        alt="OnGuard Logo"
        className="LogoStyle"
        style={{
          position: "absolute", top: 0, left: 0,
          opacity: white ? 0 : 1,
          transition: "opacity 0.4s ease",
          pointerEvents: white ? "none" : "auto",
        }}
      />

      {/* White logo */}
      <img
        src={logoWhite}
        alt="OnGuard Logo"
        className="LogoStyle"
        style={{
          position: "absolute", top: 0, left: 0,
          opacity: white ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: white ? "auto" : "none",
        }}
      />

    </div>
  );
}
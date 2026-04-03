import React from "react";
import { navy, green } from "../constants";
import logoImg from "../Assets/bg-remove-Logo.png"
import logoWhite from "../Assets/Logo Variation-02.png"

export default function Logo({ sz = 38, tc = "#fff" }) {
  return (
    <div className="d-flex align-items-center gap-2" style={{ cursor: "pointer" }}>
      <img src={logoImg} alt="Logo" className="LogoStyle"/>
     
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   App.jsx — Root component
   Assembles all 12 section components in order
═══════════════════════════════════════════════════════ */
import React, { useEffect } from "react";

/* Import Bootstrap 5 CSS */
import "bootstrap/dist/css/bootstrap.min.css";

/* Global styles */
import "./index.css";

/* Section components */
import Navbar        from "./components/Navbar";
import Hero          from "./components/Hero";
import Services      from "./components/Services";
import Strip1        from "./components/Strip1";
import Ticker        from "./components/Ticker";
import About         from "./components/About";
import Process       from "./components/Process";
import Strip2        from "./components/Strip2";
import Stats         from "./components/Stats";
import Testimonials  from "./components/Testimonials";
import Contact       from "./components/Contact";
import Footer        from "./components/Footer";

export default function App() {
  useEffect(() => {
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.left = mouseX + "px";
      dot.style.top = mouseY + "px";
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      ring.style.left = ringX + "px";
      ring.style.top = ringY + "px";

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
     <div className="cursor-dot"></div>
      <div className="cursor-ring"></div>
      <Navbar />        {/* 01 — Fixed sticky navigation          */}
      <Hero />          {/* 02 — Full screen 6-layer parallax hero */}
      <Services />      {/* 03 — 6 cards with inner image parallax */}
      <Strip1 />        {/* 04 — Full-bleed action banner           */}
      <Ticker />        {/* 05 — Infinite CSS marquee               */}
      <About />         {/* 06 — 5-layer image parallax about       */}
      <Process />       {/* 07 — 4-step process cards               */}
      <Strip2 />        {/* 08 — 30-day guarantee banner            */}
      <Stats />         {/* 09 — Animated counters + 3D tilt        */}
      <Testimonials />  {/* 10 — Auto-rotating reviews              */}
      <Contact />       {/* 11 — Booking form + contact info        */}
      <Footer />        {/* 12 — 4-column footer + FAB call button  */}
    </>
  );
}

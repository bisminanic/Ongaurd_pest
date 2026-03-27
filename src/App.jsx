/* ═══════════════════════════════════════════════════════
   App.jsx — Root component
   ✦ Loader (image preloader)
   ✦ Lenis smooth scroll  →  npm install lenis
   ✦ GSAP ScrollTrigger proxy for Lenis
═══════════════════════════════════════════════════════ */
import React, { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* Bootstrap */
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

/* Loader */
import Loader from "./components/Loader";

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

gsap.registerPlugin(ScrollTrigger);

export default function App() {

  /* ── Lenis smooth scroll + GSAP proxy ── */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,          /* scroll speed feel              */
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    /* Proxy so ScrollTrigger uses Lenis scroll position */
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    /* Re-calculate ScrollTrigger after loader completes */
    const onLoaderDone = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("loaderDone", onLoaderDone);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      window.removeEventListener("loaderDone", onLoaderDone);
    };
  }, []);

  /* ── Custom cursor ── */
  useEffect(() => {
    const dot  = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;
    let rafId;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + "px";
      dot.style.top  = mouseY + "px";
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = ringX + "px";
      ring.style.top  = ringY + "px";
      rafId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* ── Loader (renders on top, fades out when images ready) ── */}
      <Loader />

      <div className="cursor-dot"  />
      <div className="cursor-ring" />

      <Navbar />
      <Hero />
      <About />
    
      <Strip1 />
      <Ticker />
        <Services />
      <Process />
      <Strip2 />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
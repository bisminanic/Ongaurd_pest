import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Strip1 from "./components/Strip1";
import Ticker from "./components/Ticker";
import About from "./components/About";
import Process from "./components/Process";
import Strip2 from "./components/Strip2";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutPage from "./Pages/AboutPage";
import ServiceDetailPage from "./Pages/ServiceDetailPage";
import Associates from "./components/Associates";
import Blog from "./components/Blog";
import BlogDetail from "./Pages/BlogDetails";

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  return (
    <>
      {/* <Loader /> */}
      <Navbar />
      <Hero />
      <About />
      {/* <Strip1 /> */}
      {/* <Ticker /> */}
      <Services />
      <Process />
      <Strip2 />
      <Associates /> {/* dark navy — international associates */}
      <Blog />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const raf = (time) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const onLoaderDone = () => ScrollTrigger.refresh();
    window.addEventListener("loaderDone", onLoaderDone);

    // ✅ HANDLE HASH + REFRESH
    // BEFORE:
    if (window.location.hash) {
      setTimeout(() => {
        lenis.scrollTo(window.location.hash);
      }, 500);
    } else {
      lenis.scrollTo(0);
    }

    // AFTER:
    lenis.scrollTo(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
      window.removeEventListener("loaderDone", onLoaderDone);
    };
  }, []);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]);
  console.log(location.hash);

  useEffect(() => {
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    if (!dot || !ring) return;
    let mouseX = 0,
      mouseY = 0,
      ringX = 0,
      ringY = 0,
      rafId;
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
      <div className="cursor-dot" />
      <div className="cursor-ring" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
    </>
  );
}

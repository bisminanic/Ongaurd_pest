import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navy, green, gd, muted } from "../constants";
import banner1 from "../Assets/HomeBanner1.jpeg";
import icon1 from "../Assets/kerala.png";
import icon2 from "../Assets/ladybug.png";
import icon3 from "../Assets/happy.png";
import icon4 from "../Assets/24-hours.png";
import medal from "../Assets/badge.png";
gsap.registerPlugin(ScrollTrigger);

const IconShield = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"
      fill="currentColor"
      opacity=".18"
    />
    <path
      d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinejoin="round"
    />
    <path
      d="M9 12l2 2 4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const IconStar = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#F5A623">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const IconCheck = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="currentColor" opacity=".18" />
    <path
      d="M8 12l3 3 5-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Hero() {
  const secRef = useRef();
  const bgL1 = useRef();
  const ov1 = useRef();
  const orb1 = useRef(),
    orb2 = useRef(),
    orb3 = useRef();
  const ring1 = useRef(),
    ring2 = useRef(),
    ring3 = useRef();
  const cards = useRef();
  const txtWrap = useRef();
  const badge = useRef();
  const h1Words = useRef([]);
  const subRef = useRef();
  const subRef1 = useRef();
  const ctaRef = useRef();
  const statsBar = useRef();
  const statItems = useRef([]);
  const cardRefs = useRef([]);
useEffect(() => {
  // Bootstrap 5 tooltip init
  const tooltipEls = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltips = [...tooltipEls].map(
    (el) => new window.bootstrap.Tooltip(el, { trigger: "hover" })
  );
  return () => tooltips.forEach((t) => t.dispose());
}, []);
  /* ── Entry animation ───────────────────────────────────── */
  useEffect(() => {
    gsap.set([badge.current, subRef.current, subRef1.current, ctaRef.current], {
      autoAlpha: 0,
      y: 22,
    });
    gsap.set(h1Words.current, { autoAlpha: 0, y: 70, rotateX: -28 });
    gsap.set(cardRefs.current, { autoAlpha: 0, x: 55, y: 18 });
    gsap.set(statsBar.current, { autoAlpha: 0, y: 55 });
    gsap.set(statItems.current, { autoAlpha: 0, y: 24 });
    gsap.set([ring1.current, ring2.current, ring3.current], {
      autoAlpha: 0,
      scale: 0.5,
    });
    gsap.set(ov1.current, { opacity: 1 });

    const tl = gsap.timeline({ delay: 0.2 });
    tl.to(ov1.current, { opacity: 0.85, duration: 1.6, ease: "power2.inOut" });
    tl.to(
      [ring1.current, ring2.current, ring3.current],
      {
        autoAlpha: 1,
        scale: 1,
        duration: 1.4,
        ease: "expo.out",
        stagger: 0.15,
      },
      "-=1.2",
    );
    tl.to(
      badge.current,
      { autoAlpha: 1, y: 0, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.9",
    );
    tl.to(
      subRef1.current,
      { autoAlpha: 1, y: 0, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.9",
    );
    tl.to(
      h1Words.current,
      {
        autoAlpha: 1,
        y: 0,
        rotateX: 0,
        duration: 0.75,
        ease: "expo.out",
        stagger: 0.09,
      },
      "-=0.3",
    );
    tl.to(
      subRef.current,
      { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.25",
    );
    tl.to(
      ctaRef.current,
      { autoAlpha: 1, y: 0, duration: 0.55, ease: "power3.out" },
      "-=0.35",
    );
    tl.to(
      cardRefs.current,
      {
        autoAlpha: 1,
        x: 0,
        y: 0,
        duration: 0.75,
        ease: "expo.out",
        stagger: 0.12,
      },
      "-=0.9",
    );
    tl.to(
      statsBar.current,
      { autoAlpha: 1, y: 0, duration: 0.65, ease: "power3.out" },
      "-=0.5",
    );
    tl.to(
      statItems.current,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.45,
        ease: "back.out(1.5)",
        stagger: 0.1,
      },
      "-=0.5",
    );

    return () => tl.kill();
  }, []);

  /* ── Parallax / mouse ──────────────────────────────────── */
  useEffect(() => {
    const mouse = { x: 0, y: 0 };
    const onMouse = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    const ctx = gsap.context(() => {
      const vh = window.innerHeight;
      ScrollTrigger.create({
        trigger: secRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.3,
        onUpdate: (self) => {
          const p = self.progress,
            sy = p * vh;
          gsap.set(bgL1.current, { y: sy * 0.55, x: mouse.x * -18 });
          gsap.set(orb1.current, {
            y: -sy * 0.5 + mouse.y * 28,
            x: mouse.x * 55,
          });
          gsap.set(orb2.current, {
            y: -sy * 0.35 + mouse.y * 18,
            x: mouse.x * -38,
          });
          gsap.set(orb3.current, {
            y: -sy * 0.45 + mouse.y * 22,
            x: mouse.x * 30,
          });
          gsap.set(ring1.current, {
            y: -sy * 0.6 + mouse.y * -14,
            x: mouse.x * 24,
          });
          gsap.set(ring3.current, {
            y: -sy * 0.7 + mouse.y * 10,
            x: mouse.x * -18,
          });
          gsap.set(cards.current, {
            y: sy * 0.22 + mouse.y * 9,
            x: mouse.x * 10,
          });
          gsap.set(txtWrap.current, {
            y: sy * 0.1,
            opacity: Math.max(1 - p * 1.7, 0),
          });
        },
      });
    }, secRef);

    return () => {
      window.removeEventListener("mousemove", onMouse);
      ctx.revert();
    };
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const words = [
    ["Kerala's", "#fff"],
    ["#1", green],
    ["Pest", "#fff"],
    ["Control", "#fff"],
    ["Service.", green],
  ];

  const stats = [
    [icon1, "15+", "Years in Kerala"],
    [icon2, "10K+", "Pests Eliminated"],
    [icon3, "500+", "Happy Families"],
    [icon4, "24 Hrs", "Always Open"],
  ];

  const ratingBars = [
    [5, "85%"],
    [4, "10%"],
    [3, "4%"],
    [2, "1%"],
    [1, "0%"],
  ];

  const services = [
    "Cockroach Treatment",
    "Termite Control",
    "Rodent Management",
    "Mosquito Fogging",
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900&display=swap');

        @keyframes pulse       { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.22;transform:scale(2.3)} }
        @keyframes floatA      { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-9px)} }
        @keyframes floatB      { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-6px)} }
        @keyframes floatC      { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-11px)} }
        @keyframes floatD      { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-5px)} }
        @keyframes rotateSlow  { from{transform:rotate(0deg)}   to{transform:rotate(360deg)} }
        @keyframes rotateSlow2 { from{transform:rotate(0deg)}   to{transform:rotate(-360deg)} }
        @keyframes shimmer     { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes liveGlow    { 0%,100%{box-shadow:0 0 0 0 rgba(91,199,40,.5)} 50%{box-shadow:0 0 0 7px rgba(91,199,40,0)} }

        /* ── BASE ───────────────────────────────────────── */
        #home {
          position:relative; height:100vh; min-height:700px;
          overflow:hidden; display:flex; align-items:center;
        }
        .hero-layer { position:absolute; will-change:transform; }
        .hero-bg    { inset:0; width:100%; height:100%; overflow:hidden; }
        .hero-bg img{ width:100%; height:100%; object-fit:cover; transform:scale(1.13); will-change:transform; }
        .hero-orb   { position:absolute; border-radius:50%; pointer-events:none; will-change:transform; }
        .hero-ring  { position:absolute; border-radius:50%; pointer-events:none; will-change:transform; }

        .hero-txt { position:relative; z-index:8; will-change:transform,opacity; }

        .hero-badge {
          display:inline-flex; align-items:center; gap:10px;
          background:rgba(91,199,40,.13); border:1px solid rgba(91,199,40,.45);
          border-radius:50px; padding:8px 22px; backdrop-filter:blur(14px);
        }
        .hero-pulse-dot { width:7px;height:7px;border-radius:50%;background:#fff;animation:pulse 2s infinite; }

        .hero-h1 { font-family:'Lato',sans-serif;font-weight:900;line-height:.9;perspective:600px; }
        .hw      { display:inline-block;margin-right:.2em;transform-style:preserve-3d; }
        .hw-shimmer {
          background:linear-gradient(90deg,#fff 0%,#fff 28%,${green} 48%,#fff 68%,#fff 100%);
          background-size:200% auto;
          -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;
          animation:shimmer 4.5s linear infinite;animation-delay:2.5s;
        }

        /* ── CTAs ───────────────────────────────────────── */
        .btn-primary-og {
          background:${green};color:#fff;border:none;border-radius:50px;
          font-family:'Lato',sans-serif;font-size:15px;font-weight:900;
          padding:17px 44px;letter-spacing:.3px;cursor:pointer;
          box-shadow:0 12px 40px rgba(91,199,40,.35);transition:all .35s;
        }
        .btn-primary-og:hover { background:${gd};transform:translateY(-4px) scale(1.04);box-shadow:0 22px 54px rgba(91,199,40,.5); }
        .btn-outline-og {
          background:rgba(255,255,255,.08);color:#fff;cursor:pointer;
          border:1.5px solid rgba(255,255,255,.28);border-radius:50px;
          font-family:'Lato',sans-serif;font-size:15px;font-weight:700;
          padding:17px 44px;backdrop-filter:blur(10px);transition:all .35s;
        }
        .btn-outline-og:hover { background:rgba(255,255,255,.18);border-color:#fff; }

        /* ── AVAILABILITY TAG ───────────────────────────── */
        .kerala-avail {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(255,255,255,.1); border:1px solid rgba(255,255,255,.2);
          border-radius:6px; padding:7px 16px;
          font-family:'Lato',sans-serif; font-size:11px; font-weight:700;
          color:rgba(255,255,255,.82); letter-spacing:.8px; text-transform:uppercase;
          backdrop-filter:blur(8px);
        }
        .kerala-dot { width:6px;height:6px;border-radius:50%;background:${green};animation:pulse 2s infinite; }

        /* ── DATA CARDS ─────────────────────────────────── */
        .hc-panel {
          display:grid; gap:10px;
          width:465px; grid-template-columns:1fr 1fr;
        }
        .hc-card {
          background:rgba(6,16,44,.74);
          backdrop-filter:blur(24px) saturate(160%);
          border:1px solid rgba(255,255,255,.1);
          border-radius:18px; overflow:hidden; position:relative;
        }
        .hc-card::before {
          content:''; position:absolute; inset:0;
          background:linear-gradient(138deg,rgba(255,255,255,.07) 0%,transparent 58%);
          pointer-events:none;
        }

        /* Card 1 — Live Protection */
        .hc-live { padding:18px 20px; }
        .hc-live-top { display:flex;justify-content:space-between;align-items:center;margin-bottom:16px; }
        .hc-live-badge {
          display:inline-flex;align-items:center;gap:6px;
          background:rgba(91,199,40,.16);border:1px solid rgba(91,199,40,.38);
          border-radius:50px;padding:5px 12px;
          font-family:'Lato',sans-serif;font-size:10px;font-weight:900;
          color:${green};letter-spacing:1.1px;text-transform:uppercase;
          animation:liveGlow 2.5s ease-in-out infinite;
        }
        .hc-live-dot  { width:6px;height:6px;border-radius:50%;background:${green};animation:pulse 1.8s infinite; }
        .hc-stat-row  { display:flex;align-items:flex-end;gap:14px;margin-bottom:14px; }
        .hc-big-num   { font-family:'Lato',sans-serif;font-size:46px;font-weight:900;color:#fff;line-height:1;letter-spacing:-2px; }
        .hc-big-num em{ font-size:22px;color:${green};font-style:normal; }
        .hc-num-label { font-family:'Lato',sans-serif;font-size:11px;color:rgba(255,255,255,.45);line-height:1.5;padding-bottom:4px; }
        .hc-services  { display:flex;flex-direction:column;gap:6px; }
        .hc-svc       { display:flex;align-items:center;gap:8px;font-family:'Lato',sans-serif;font-size:11px;color:rgba(255,255,255,.68);font-weight:700; }
        .hc-svc svg   { color:${green};flex-shrink:0; }

        /* Card 2 — Rating */
        .hc-rating { padding:15px 18px; }
        .hc-stars  { display:flex;gap:2px;margin-bottom:6px; }
        .hc-rnum   { font-family:'Lato',sans-serif;font-size:30px;font-weight:900;color:#fff;line-height:1;letter-spacing:-1px; }
        .hc-rsub   { font-family:'Lato',sans-serif;font-size:10px;color:rgba(255,255,255,.4);margin-top:3px; }
        .hc-bars   { margin-top:12px;display:flex;flex-direction:column;gap:5px; }
        .hc-bar-row{ display:flex;align-items:center;gap:7px; }
        .hc-bar-lbl{ font-family:'Lato',sans-serif;font-size:10px;color:rgba(255,255,255,.38);width:10px;text-align:right; }
        .hc-bar-track{ flex:1;height:4px;background:rgba(255,255,255,.1);border-radius:2px;overflow:hidden; }
        .hc-bar-fill { height:100%;border-radius:2px;background:${green}; }
        .hc-bar-pct  { font-family:'Lato',sans-serif;font-size:10px;color:rgba(255,255,255,.28);width:26px; }

        /* Card 4 — Cert */
        .hc-cert { padding:13px 17px;display:flex;align-items:center;gap:13px; }
        .hc-cert-icon {
          width:44px;height:44px;border-radius:11px;flex-shrink:0;
          background:linear-gradient(135deg,rgba(91,199,40,.25),rgba(91,199,40,.08));
          border:1px solid rgba(91,199,40,.32);
          display:flex;align-items:center;justify-content:center;font-size:20px;
        }
        .hc-cert-name{ font-family:'Lato',sans-serif;font-size:13px;font-weight:900;color:#fff; }
        .hc-cert-sub { font-family:'Lato',sans-serif;font-size:10px;color:rgba(255,255,255,.4);margin-top:3px;line-height:1.4; }

        /* ── STATS BAR ──────────────────────────────────── */
        .stats-bar {
          position:absolute; bottom:0; left:0; right:0; z-index:10;
          background:rgba(255,255,255,.97); backdrop-filter:blur(22px);
          border-top:3px solid ${green};
        }
        .stat-item { border-right:1px solid rgba(27,58,107,.07); transition:background .3s; }
        .stat-item:last-child { border-right:none; }
        .stat-item:hover { background:rgba(91,199,40,.05); }

        /* ── DECORATIVE ─────────────────────────────────── */
        .ring-spin  { animation:rotateSlow  34s linear infinite; }
        .ring-spin2 { animation:rotateSlow2 24s linear infinite; }
        .fa { animation:floatA 4.8s ease-in-out infinite; }
        .fb { animation:floatB 6.4s ease-in-out infinite .7s; }
        .fc { animation:floatC 5.4s ease-in-out infinite 1.3s; }
        .fd { animation:floatD 7.2s ease-in-out infinite .4s; margin-bottom:12px; }

        /* ══════════════════════════════════════════════════
           RESPONSIVE
        ══════════════════════════════════════════════════ */
@media(min-width:1200px) and (max-width:1600px){
.hero-h1{
font-size: clamp(36px, 6.8vw, 78px) !important;
}
.hero-sub-p{
margin-bottom: 17px !important;
}
}
        /* ── Laptop  861–1100px ─────────────────────────── */
        @media(max-width:1100px){
          .hero-cards-panel { right:1%!important; }
          .hc-panel         { width:360px!important; }
          .hc-big-num       { font-size:34px!important; }
          .hc-big-num em    { font-size:18px!important; }
          .hc-rnum          { font-size:22px!important; }
          .hc-live          { padding:14px 14px!important; }
          .hc-rating        { padding:12px 14px!important; }
          .hc-cert          { padding:10px 12px!important; }
          .hc-cert-icon     { width:36px!important; height:36px!important; font-size:16px!important; }
          .hc-cert-name     { font-size:11px!important; }
          .hc-cert-sub      { font-size:9px!important; }
        }

        /* ── Tablet  601–860px ──────────────────────────── */
        @media(max-width:860px){
          #hero              { height:auto; min-height:100svh; align-items:flex-start; padding-top:130px; padding-bottom:100px; }
          .hero-txt          { padding:0 40px!important; max-width:100%!important; }
          .hero-h1           { letter-spacing:-1px!important; }
          .hero-cards-panel  { display:none!important; }
          .stats-bar         { display:none;}
          .greenStrip {display:none;}
        }

        /* ── Mobile  ≤600px ─────────────────────────────── */
        @media(max-width:600px){
          #hero              { padding-top:110px; padding-bottom:0; }
          .hero-txt          { padding:0 20px!important; }

          .hero-badge        { padding:6px 14px; }
          .hero-badge span:last-child { font-size:9px!important; letter-spacing:1px!important; }

          .kerala-avail      { font-size:9px; padding:6px 12px; letter-spacing:.5px; }

          .hero-h1           { letter-spacing:-1px!important; line-height:1!important; }
          .hw                { margin-right:.15em!important; }

          .hero-sub-p        { font-size:13px!important; line-height:1.75!important; margin-bottom:28px!important; }

          .hero-cta-wrap     { flex-direction:column!important; gap:12px!important; }
          .btn-primary-og,
          .btn-outline-og    { width:100%; text-align:center; padding:15px 24px; font-size:14px; }

          .hero-cards-panel  { display:none!important; }

          /* rings & orbs — tone down on mobile */
          .hero-ring         { display:none!important; }

          .stats-bar         { display:none; }
          .greenStrip {display:none;}
        }

        /* ── Stats 2-col on small mobile ────────────────── */
        @media(max-width:480px){
          .stat-item         { border-right:1px solid rgba(27,58,107,.07)!important; }
          .stat-item:nth-child(even){ border-right:none!important; }
          .stat-item         { border-bottom:1px solid rgba(27,58,107,.06); }
        }
          .hc-clickable {
  cursor: pointer;
  transition: transform .25s, border-color .25s, box-shadow .25s;
}
.hc-clickable:hover {
  transform: translateY(-4px) scale(1.02);
  border-color: rgba(91,199,40,.45) !important;
  box-shadow: 0 12px 32px rgba(91,199,40,.18);
}
.hc-clickable:hover .hc-rsub {
  color: rgba(91,199,40,.8) !important;
}
  .og-review-tooltip .tooltip-inner {
  background: rgba(10, 20, 50, 0.95) !important;
  border: 1px solid rgba(91,199,40,.45) !important;
  color: #fff !important;
  font-family: 'Lato', sans-serif !important;
  font-size: 12px !important;
  font-weight: 700 !important;
  letter-spacing: .3px !important;
  padding: 7px 14px !important;
  border-radius: 8px !important;
  backdrop-filter: blur(10px) !important;
}
.og-review-tooltip .tooltip-arrow::before {
  border-top-color: rgba(91,199,40,.45) !important;
}
      `}</style>

      <section id="home" ref={secRef}>
        {/* ── BG ── */}
        <div ref={bgL1} className="hero-layer hero-bg" style={{ zIndex: 0 }}>
          <img src={banner1} alt="OnGuard Kerala pest control technician" />
        </div>

        {/* ── Vignette ── */}
        <div
          className="hero-layer"
          style={{
            inset: 0,
            zIndex: 2,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 65% 85% at 16% 58%,rgba(0,70,40,.3) 0%,transparent 62%)",
          }}
        />

        {/* ── Dark overlay ── */}
        <div
          ref={ov1}
          className="hero-layer"
          style={{
            inset: 0,
            zIndex: 3,
            background:
              "linear-gradient(108deg,rgba(4,10,28,.97) 0%,rgba(8,32,68,.78) 50%,rgba(4,10,28,.16) 100%)",
          }}
        />

        {/* ── Grain ── */}
        <div
          className="hero-layer"
          style={{
            inset: 0,
            zIndex: 4,
            opacity: 0.025,
            pointerEvents: "none",
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px",
          }}
        />

        {/* ── Green accent stripe ── */}
        <div
          className="hero-layer greenStrip"
          style={{
            bottom: 82,
            left: 0,
            width: "40%",
            height: "3px",
            zIndex: 7,
            pointerEvents: "none",
            background: `linear-gradient(90deg,${green} 0%,rgba(91,199,40,0) 100%)`,
          }}
        />

        {/* ── Orbs ── */}
        <div
          ref={orb1}
          className="hero-orb"
          style={{
            top: "5%",
            right: "3%",
            width: 520,
            height: 520,
            zIndex: 5,
            background:
              "radial-gradient(circle,rgba(91,199,40,.13) 0%,transparent 65%)",
          }}
        />
        <div
          ref={orb2}
          className="hero-orb"
          style={{
            bottom: "15%",
            left: "2%",
            width: 330,
            height: 330,
            zIndex: 5,
            background:
              "radial-gradient(circle,rgba(0,90,50,.2) 0%,transparent 65%)",
          }}
        />
        <div
          ref={orb3}
          className="hero-orb"
          style={{
            top: "42%",
            right: "32%",
            width: 210,
            height: 210,
            zIndex: 5,
            background:
              "radial-gradient(circle,rgba(27,58,107,.18) 0%,transparent 65%)",
          }}
        />

        {/* ── Rings ── */}
        <div
          ref={ring1}
          className="hero-ring ring-spin"
          style={{
            top: "11%",
            right: "15%",
            width: 300,
            height: 300,
            zIndex: 5,
            border: "1px dashed rgba(91,199,40,.2)",
          }}
        />
        <div
          ref={ring2}
          className="hero-ring ring-spin2"
          style={{
            top: "9%",
            right: "13%",
            width: 355,
            height: 355,
            zIndex: 5,
            border: "0.5px solid rgba(255,255,255,.06)",
          }}
        />
        <div
          ref={ring3}
          className="hero-ring"
          style={{
            bottom: "23%",
            right: "7%",
            width: 80,
            height: 80,
            zIndex: 5,
            border: "1.5px solid rgba(91,199,40,.22)",
          }}
        />

        {/* ── Data cards (desktop / laptop only) ── */}
        <div
          ref={cards}
          className="hero-layer hero-cards-panel"
          style={{
            position: "absolute",
            right: "4%",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 9,
          }}
        >
          {/* Cert card */}
          <div>
            <div
              ref={(el) => (cardRefs.current[3] = el)}
              className="hc-card hc-cert fd"
            >
              <div className="hc-cert-icon">
                <img
                  src={medal}
                  alt="medal"
                  style={{ height: 28, width: 28 }}
                />
              </div>
              <div>
                <div className="hc-cert-name">Govt. Certified</div>
                <div className="hc-cert-sub">
                  Kerala PCO Licence · ISO 9001:2015
                  <br />
                  Eco-friendly &amp; Child-safe Treatments
                </div>
              </div>
            </div>
          </div>

          <div className="hc-panel">
            {/* Card 1 — Live Protection */}
            <div
              ref={(el) => (cardRefs.current[0] = el)}
              className="hc-card hc-live fa"
            >
              <div className="hc-live-top">
                <div className="hc-live-badge">
                  <span className="hc-live-dot" /> Live Protection
                </div>
                <span style={{ color: green }}>
                  <IconShield />
                </span>
              </div>
              <div className="hc-stat-row">
                <div className="hc-big-num">
                  98<em>%</em>
                </div>
                <div className="hc-num-label">
                  Elimination
                  <br />
                  Success Rate
                </div>
              </div>
              <div className="hc-services">
                {services.map((s) => (
                  <div key={s} className="hc-svc">
                    <IconCheck /> {s}
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2 — Star Ratings */}
            <a
               href="https://share.google/x6J8uG4oOYX1t0p7j"
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: "none" }}
  data-bs-toggle="tooltip"
  data-bs-placement="top"
  data-bs-custom-class="og-review-tooltip"
  title="Click to view our Google Reviews ↗"
>
              <div
                ref={(el) => (cardRefs.current[1] = el)}
                className="hc-card hc-rating fb hc-clickable"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div className="hc-stars">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <IconStar key={i} />
                      ))}
                    </div>
                    <div className="hc-rnum">5.0</div>
                    <div className="hc-rsub">397+ reviews on Google ↗</div>
                  </div>
                  <div
                    style={{
                      background: "rgba(91,199,40,.15)",
                      borderRadius: 10,
                      border: "1px solid rgba(91,199,40,.3)",
                      padding: "8px 12px",
                      textAlign: "center",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Lato',sans-serif",
                        fontSize: 18,
                        fontWeight: 900,
                        color: green,
                      }}
                    >
                      397
                    </div>
                    <div
                      style={{
                        fontFamily: "'Lato',sans-serif",
                        fontSize: 9,
                        color: "rgba(255,255,255,.4)",
                        marginTop: 2,
                      }}
                    >
                      Reviews
                    </div>
                  </div>
                </div>
                <div className="hc-bars">
                  {ratingBars.map(([n, w]) => (
                    <div key={n} className="hc-bar-row">
                      <div className="hc-bar-lbl">{n}</div>
                      <div className="hc-bar-track">
                        <div className="hc-bar-fill" style={{ width: w }} />
                      </div>
                      <div className="hc-bar-pct">{w}</div>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* ── Text content ── */}
        <div
          ref={txtWrap}
          className="hero-txt"
          style={{
            padding: "0 68px",
            maxWidth: 800,
            zIndex: 8,
            position: "relative",
          }}
        >
          {/* Badge */}
          <div ref={badge} className="hero-badge mb-3">
            <span className="hero-pulse-dot" />
            <span
              style={{
                color: "rgba(255,255,255,.9)",
                fontFamily: "'Lato',sans-serif",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 1.8,
              }}
            >
              KERALA'S #1 PEST CONTROL · EST. 2010
            </span>
          </div>

          {/* Availability tag */}
          <div ref={subRef1} className="kerala-avail mb-4">
            <span className="kerala-dot" />
            All over Kerala &amp; South Tamil Nadu — Open 24 Hours
          </div>

          {/* H1 */}
          <h1
            className="hero-h1 mb-4"
            style={{
              fontSize: "clamp(36px,6.8vw,96px)",
              letterSpacing: -2,
              color: "#fff",
            }}
          >
            {words.map(([w, c], i) => (
              <span
                key={i}
                ref={(el) => (h1Words.current[i] = el)}
                className={`hw${i === 0 ? " hw-shimmer" : ""}`}
                style={i !== 0 ? { color: c } : {}}
              >
                {w}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p
            ref={subRef}
            className="hero-sub-p"
            style={{
              color: "rgba(255,255,255,.56)",
              fontFamily: "'Lato',sans-serif",
              fontSize: "clamp(13px,1.6vw,17px)",
              lineHeight: 1.95,
              maxWidth: 490,
              fontWeight: 300,
              marginBottom: 44,
            }}
          >
            Professional eco-friendly pest elimination across all of Kerala and
            South Tamil Nadu. Govt. certified technicians, child &amp; pet-safe
            treatments, guaranteed results — available 24 hours a day, every
            day.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className="hero-cta-wrap d-flex flex-wrap gap-3 align-items-center"
          >
            <button
              className="btn-primary-og"
              onClick={() => scrollTo("contact")}
            >
              Get Free Inspection
            </button>
            <button
              className="btn-outline-og"
              onClick={() => scrollTo("services")}
            >
              View Services →
            </button>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div ref={statsBar} className="stats-bar">
          <div className="row g-0">
            {stats.map(([ic, n, l], i) => (
              <div
                key={i}
                ref={(el) => (statItems.current[i] = el)}
                className="col-6 col-sm-3 stat-item text-center py-3"
              >
                <div>
                  <img
                    src={ic}
                    alt=""
                    style={{ width: 26, height: 26, objectFit: "contain" }}
                  />
                </div>
                <div
                  style={{
                    fontFamily: "'Lato',sans-serif",
                    fontSize: "clamp(18px,2.4vw,28px)",
                    fontWeight: 900,
                    color: navy,
                    lineHeight: 1,
                  }}
                >
                  {n}
                </div>
                <div
                  style={{
                    fontFamily: "'Lato',sans-serif",
                    fontSize: 11,
                    color: muted,
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

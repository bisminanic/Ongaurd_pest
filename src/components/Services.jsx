/* ═══════════════════════════════════════════════════════
   SECTION 03 — Services  (Parallax White-Gap Fixed)

   FIXES:
   ✦ Image height 120% → 140% (enough buffer for parallax)
   ✦ Image position:absolute + top:-20% (centered, shifts cleanly)
   ✦ Parallax multiplier 0.13 → 0.08 (smaller shift = no white edge)
   ✦ Single shared RAF loop (no 12 individual scroll listeners)
   ✦ GSAP context cleanup on unmount
═══════════════════════════════════════════════════════ */
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navy, green, muted, off } from "../constants";
import icon1  from "../Assets/rat.jpg";
import icon2  from "../Assets/cockroach.png";
import icon3  from "../Assets/bedbug.jpg";
import icon4  from "../Assets/mosquito.jpg";
import icon5  from "../Assets/housefly.jpg";
import icon6  from "../Assets/terminate.jpg";
import icon7  from "../Assets/wood.jpg";
import icon8  from "../Assets/honeybee.jpg";
import icon9  from "../Assets/snake.jpg";
import icon10 from "../Assets/deepcleaning.jpg";
import icon11 from "../Assets/distincfection.jpg";
import icon12 from "../Assets/bird.jpg";

gsap.registerPlugin(ScrollTrigger);

/* ─── SERVICES DATA ─── */
const SERVICES = [
  {
    t: "Rodent Control Services",
    d: "Effective removal of rats and mice using safe Kerala-approved methods.",
    img: icon1,
    ic: "🐭",
  },
  {
    t: "Cockroach Control Services",
    d: "Odorless and eco-friendly cockroach elimination for homes and offices.",
    img: icon2,
    ic: "🪳",
  },
  {
    t: "Bed Bug Control Services",
    d: "Advanced heat and chemical treatment for complete bed bug removal.",
    img: icon3,
    ic: "🛏️",
  },
  {
    t: "Mosquito Control Services",
    d: "Fogging and larval treatment to prevent mosquito breeding.",
    img: icon4,
    ic: "🦟",
  },
  {
    t: "Housefly Services",
    d: "Effective control solutions for flies in homes and commercial spaces.",
    img: icon5,
    ic: "🪰",
  },
  {
    t: "Termite Control Services",
    d: "Long-lasting anti-termite protection for buildings and furniture.",
    img: icon6,
    ic: "🐜",
  },
  {
    t: "Wood Borer Control",
    d: "Specialized treatment to protect wooden furniture from borers.",
    img: icon7,
    ic: "🪵",
  },
  {
    t: "Honey Bee Removal Service",
    d: "Safe relocation of honey bees without harming the ecosystem.",
    img: icon8,
    ic: "🐝",
  },
  {
    t: "Snake Control Service",
    d: "Professional snake rescue and relocation services across Kerala.",
    img: icon9,
    ic: "🐍",
  },
  {
    t: "Deep Cleaning Services",
    d: "Complete deep cleaning for homes, offices, and commercial areas.",
    img: icon10,
    ic: "🧼",
  },
  {
    t: "Disinfection & Sanitization",
    d: "Professional sanitization services to eliminate germs, bacteria, and viruses from your space.",
    img: icon11,
    ic: "🧴",
  },
  {
    t: "Bird Control Services",
    d: "Safe and humane solutions to prevent bird nesting and droppings in residential and commercial areas.",
    img: icon12,
    ic: "🐦",
  },
];

/* ═══════════════════════════════════════════════════════
   SINGLE CARD
   No individual scroll listener.
   Parallax handled by parent's shared RAF via registerImg().
═══════════════════════════════════════════════════════ */
function SvcCard({ s, i, registerImg }) {
  const cardRef = useRef();
  const imgRef  = useRef();
  const [hov, setHov] = useState(false);

  /* Register this card's refs into parent shared RAF */
  useEffect(() => {
    if (imgRef.current && cardRef.current) {
      registerImg({ imgEl: imgRef.current, cardEl: cardRef.current });
    }
  }, [registerImg]);

  /* Entrance animation — ScrollTrigger, fires once */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { y: 70, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.75,
          delay: (i % 4) * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 92%",
            once: true,
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, [i]);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={() =>
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
      }
      style={{
        borderRadius: 20,
        overflow: "hidden",
        background: "#fff",
        cursor: "pointer",
        transform: hov
          ? "translateY(-12px) scale(1.02)"
          : "translateY(0) scale(1)",
        boxShadow: hov
          ? "0 40px 80px rgba(0,0,0,0.15)"
          : "0 5px 25px rgba(0,0,0,0.08)",
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
        willChange: "transform",
      }}
    >
      {/* ── IMAGE CONTAINER ── */}
      {/*
        position:relative is REQUIRED so the absolute image
        is contained within this box and overflow:hidden clips it.
      */}
      <div
        style={{
          height: 220,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          ref={imgRef}
          src={s.img}
          alt={s.t}
          loading="lazy"
          style={{
            /* ✅ FIX 1: absolute so top offset works correctly */
            position: "absolute",
            left: 0,
            /* ✅ FIX 2: start 20% above the container top
               so parallax movement is centered — equal room
               to shift up OR down without hitting the edge    */
            top: "-20%",
            width: "100%",
            /* ✅ FIX 3: 140% tall = 20% headroom top + 20% bottom
               The parallax shift (max ~18px) stays well inside  */
            height: "140%",
            objectFit: "cover",
            willChange: "transform",
            transform: hov ? "scale(1.08)" : "scale(1)",
            transition: "transform 0.6s ease",
          }}
        />
      </div>

      {/* ── CONTENT ── */}
      <div style={{ padding: 20 }}>
        <div style={{ fontSize: 28 }}>{s.ic}</div>
        <h3
          style={{
            fontSize: 18,
            fontWeight: 900,
            color: navy,
            marginTop: 8,
          }}
        >
          {s.t}
        </h3>
        <p
          style={{
            fontSize: 13,
            color: muted,
            marginTop: 10,
            lineHeight: 1.7,
          }}
        >
          {s.d}
        </p>
        <div style={{ color: green, marginTop: 12, fontWeight: 700 }}>
          Learn More →
        </div>
      </div>
    </div>
  );
}


export default function Services() {
  const headerRef  = useRef();
  const sectionRef = useRef();

  
  const imgRegistry = useRef([]);

  const registerImg = (entry) => {
    imgRegistry.current.push(entry);
  };

  
  useEffect(() => {
    let rafId;

    const tick = () => {
      imgRegistry.current.forEach(({ imgEl, cardEl }) => {
        const rect = cardEl.getBoundingClientRect();

        /* Skip cards that are far off-screen — saves GPU/CPU */
        if (rect.bottom < -300 || rect.top > window.innerHeight + 300) return;

        const mid = window.innerHeight / 2 - rect.top - rect.height / 2;

       
        gsap.set(imgEl, { y: mid * 0.08 });
      });

      rafId = requestAnimationFrame(tick);
    };

    const startRAF = () => {
      rafId = requestAnimationFrame(tick);
    };

    /* Start after loader finishes; fall back immediately if no loader */
    if (!document.body.style.overflow || document.body.style.overflow !== "hidden") {
      startRAF();
    } else {
      window.addEventListener("loaderDone", startRAF, { once: true });
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("loaderDone", startRAF);
    };
  }, []);

  /* ── Header entrance animation ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current.children, {
        y: 40,
        autoAlpha: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 82%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      style={{ padding: "80px 60px 100px", background: off }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>

        {/* ── HEADER ── */}
        <div ref={headerRef} className="mb-5">
          <div className="d-flex align-items-center gap-2 mb-3">
            <div
              style={{
                width: 44,
                height: 3,
                background: green,
                borderRadius: 2,
              }}
            />
            <span
              style={{
                fontFamily: "'Lato',sans-serif",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 2.2,
                color: green,
                textTransform: "uppercase",
              }}
            >
              What We Do
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Lato',sans-serif",
              fontSize: "clamp(32px,4.8vw,66px)",
              fontWeight: 900,
              color: navy,
              margin: 0,
              lineHeight: 1.04,
            }}
          >
            Complete Pest Control{" "}
            <span style={{ color: green }}>Services</span>
          </h2>

          <p
            style={{
              fontFamily: "'Lato',sans-serif",
              fontSize: 15,
              color: muted,
              marginTop: 16,
              maxWidth: 510,
              lineHeight: 1.8,
            }}
          >
            Certified solutions for every pest — latest technology, safe
            chemicals, expert professionals.
          </p>
        </div>

        {/* ── GRID — 4 per row on large screens ── */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-2">
          {SERVICES.map((s, i) => (
            <div key={i} className="col">
              <SvcCard s={s} i={i} registerImg={registerImg} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navy, green, muted, off } from "../constants";
import icon2 from "../Assets/ladybug.png";
gsap.registerPlugin(ScrollTrigger);

/* ─── SERVICES DATA (ALL FROM YOUR DROPDOWN) ─── */
const SERVICES = [
  { t: "Rodent Control Services", d: "Effective removal of rats and mice using safe Kerala-approved methods.", img: icon2, ic: "🐭" },
  { t: "Cockroach Control Services", d: "Odorless and eco-friendly cockroach elimination for homes and offices.", img: icon2, ic: "🪳" },
  { t: "Bed Bug Control Services", d: "Advanced heat and chemical treatment for complete bed bug removal.", img: icon2, ic: "🛏️" },
  { t: "Mosquito Control Services", d: "Fogging and larval treatment to prevent mosquito breeding.", img: icon2, ic: "🦟" },
  { t: "Housefly Services", d: "Effective control solutions for flies in homes and commercial spaces.", img: icon2, ic: "🪰" },
  { t: "Termite Control Services", d: "Long-lasting anti-termite protection for buildings and furniture.", img: icon2, ic: "🐜" },
  { t: "Wood Borer Control", d: "Specialized treatment to protect wooden furniture from borers.", img: icon2, ic: "🪵" },
  { t: "Honey Bee Removal Service", d: "Safe relocation of honey bees without harming the ecosystem.", img: icon2, ic: "🐝" },
  { t: "Snake Control Service", d: "Professional snake rescue and relocation services across Kerala.", img: icon2, ic: "🐍" },
  { t: "Deep Cleaning Services", d: "Complete deep cleaning for homes, offices, and commercial areas.", img: icon2, ic: "🧼" }
];

/* ─── SINGLE CARD ─── */
function SvcCard({ s, i }) {
  const cardRef = useRef();
  const imgRef = useRef();
  const [hov, setHov] = useState(false);

  useEffect(() => {
    const tick = () => {
      if (!cardRef.current || !imgRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const prog = window.innerHeight / 2 - rect.top - rect.height / 2;
      gsap.set(imgRef.current, { y: prog * 0.18 });
    };
    window.addEventListener("scroll", tick);

    gsap.fromTo(
      cardRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: (i % 3) * 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        },
      }
    );

    return () => window.removeEventListener("scroll", tick);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
      style={{
        borderRadius: 20,
        overflow: "hidden",
        background: "#fff",
        cursor: "pointer",
        transform: hov ? "translateY(-12px) scale(1.02)" : "none",
        boxShadow: hov
          ? "0 40px 80px rgba(0,0,0,0.15)"
          : "0 5px 25px rgba(0,0,0,0.08)",
        transition: "all 0.4s ease",
      }}
    >
      {/* IMAGE */}
      <div style={{ height: 220, overflow: "hidden", position: "relative" }}>
        <img
          ref={imgRef}
          src={s.img}
          alt={s.t}
          style={{
            width: "100%",
            height: "120%",
            objectFit: "cover",
            transform: hov ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.6s ease",
          }}
        />
      </div>

      {/* CONTENT */}
      <div style={{ padding: 20 }}>
        <div style={{ fontSize: 28 }}>{s.ic}</div>

        <h3 style={{ fontSize: 18, fontWeight: 900, color: navy }}>
          {s.t}
        </h3>

        <p style={{ fontSize: 13, color: muted, marginTop: 10 }}>
          {s.d}
        </p>

        <div style={{ color: green, marginTop: 10, fontWeight: 700 }}>
          Learn More →
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN SECTION ─── */
export default function Services() {
  const headerRef = useRef();

  useEffect(() => {
    gsap.from("#services", {
      opacity: 0,
      y: 80,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from(headerRef.current.children, {
      y: 50,
      opacity: 1,
      stagger: 0.15,
      duration: 0.8,
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section id="services" style={{ padding: "20px 60px", background: off }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        
        {/* HEADER */}
        {/* Section Header */}
          <div ref={headerRef} className="mb-5">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div style={{ width: 44, height: 3, background: green, borderRadius: 2 }} />
              <span style={{ fontFamily:"'Lato',sans-serif", fontSize:12, fontWeight:700,
                letterSpacing:2.2, color:green, textTransform:"uppercase" }}>What We Do</span>
            </div>
            <h2 style={{ fontFamily:"'Lato',sans-serif", fontSize:"clamp(32px,4.8vw,66px)",
              fontWeight:900, color:navy, margin:0, lineHeight:1.04, letterSpacing:-1 }}>
              Complete Pest Control <span style={{ color:green }}>Services</span>
            </h2>
            <p style={{ fontFamily:"'Lato',sans-serif", fontSize:15, color:muted,
              marginTop:16, maxWidth:510, lineHeight:1.82, fontWeight:400 }}>
              Certified solutions for every pest — latest technology, safe chemicals, expert professionals.
            </p>
          </div>

        {/* GRID */}
        <div className="row g-4">
          {SERVICES.map((s, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4">
              <SvcCard s={s} i={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
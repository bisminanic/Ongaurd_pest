/* ═══════════════════════════════════════════════════════
   SECTION 03 — Services  (Parallax White-Gap Fixed)
   + Learn More → navigates to /services/:slug
═══════════════════════════════════════════════════════ */
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navy, green, muted, off } from "../constants";
import { TITLE_TO_SLUG } from "../service";
import icon1 from "../Assets/rat.jpg";
import icon2 from "../Assets/cockroach.png";
import icon3 from "../Assets/bedbug.jpg";
import icon4 from "../Assets/mosquito.jpg";
import icon5 from "../Assets/housefly.jpg";
import icon6 from "../Assets/termit.png";
import icon7 from "../Assets/wood.jpg";
import icon8 from "../Assets/honeybee.jpg";
import icon9 from "../Assets/snake.jpg";
import icon10 from "../Assets/deepcleaning.jpg";
import icon11 from "../Assets/distincfection.jpg";
import icon12 from "../Assets/terminate.jpg";
import termite from "../Assets/termite.png";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  { t: "Rodent Control Services",       d: "Effective removal of rats and mice using safe Kerala-approved methods.",                                              img: icon1,  ic: "🐭", type: "icon" },
  { t: "Cockroach Control Services",    d: "Odorless and eco-friendly cockroach elimination for homes and offices.",                                             img: icon2,  ic: "🪳", type: "icon" },
  { t: "Bed Bug Control Services",      d: "Advanced heat and chemical treatment for complete bed bug removal.",                                                 img: icon3,  ic: "🛏️", type: "icon" },
  { t: "Mosquito Control Services",     d: "Fogging and larval treatment to prevent mosquito breeding.",                                                         img: icon4,  ic: "🦟", type: "icon" },
  { t: "Housefly Services",             d: "Effective control solutions for flies in homes and commercial spaces.",                                              img: icon5,  ic: "🪰", type: "icon" },
  { t: "Termite Control Services",      d: "Long-lasting anti-termite protection for buildings and furniture.",                                                  img: icon6,  ic: termite, type: "image" },
  { t: "Wood Borer Control",            d: "Specialized treatment to protect wooden furniture from borers.",                                                     img: icon7,  ic: "🪵", type: "icon" },
  { t: "Honey Bee Removal Service",     d: "Safe relocation of honey bees without harming the ecosystem.",                                                      img: icon8,  ic: "🐝", type: "icon" },
  { t: "Snake Control Service",         d: "Professional snake rescue and relocation services across Kerala.",                                                   img: icon9,  ic: "🐍", type: "icon" },
  { t: "Deep Cleaning Services",        d: "Complete deep cleaning for homes, offices, and commercial areas.",                                                   img: icon10, ic: "🧼", type: "icon" },
  { t: "Disinfection & Sanitization",   d: "Professional sanitization services to eliminate germs, bacteria, and viruses from your space.",                      img: icon11, ic: "🧴", type: "icon" },
  { t: "Ant Control Services",          d: "Effective solutions to eliminate ants and prevent infestations in residential and commercial areas.",                 img: icon12, ic: "🐜", type: "icon" },
];

function SvcCard({ s, i, registerImg }) {
  const navigate = useNavigate();
  const cardRef = useRef();
  const imgRef  = useRef();
  const [hov, setHov] = useState(false);

  useEffect(() => {
    if (imgRef.current && cardRef.current) {
      registerImg({ imgEl: imgRef.current, cardEl: cardRef.current });
    }
  }, [registerImg]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { y: 70, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.75,
          delay: (i % 4) * 0.08, ease: "power3.out",
          scrollTrigger: { trigger: cardRef.current, start: "top 92%", once: true },
        },
      );
    }, cardRef);
    return () => ctx.revert();
  }, [i]);

  const handleLearnMore = (e) => {
    e.stopPropagation();
    const slug = TITLE_TO_SLUG[s.t];
    if (slug) navigate(`/services/${slug}`);
    else document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        borderRadius: 20, overflow: "hidden", background: "#fff", cursor: "pointer",
        transform: hov ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)",
        boxShadow: hov ? "0 40px 80px rgba(0,0,0,0.15)" : "0 5px 25px rgba(0,0,0,0.08)",
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
        willChange: "transform",
      }}
    >
      {/* Image */}
      <div style={{ height: 220, overflow: "hidden", position: "relative" }}>
        <img
          ref={imgRef}
          src={s.img}
          alt={s.t}
          loading="lazy"
          style={{
            position: "absolute", left: 0, top: "-20%",
            width: "100%", height: "140%",
            objectFit: "cover", willChange: "transform",
            transform: hov ? "scale(1.08)" : "scale(1)",
            transition: "transform 0.6s ease",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: 20 }}>
        <div>
          {s.type === "image"
            ? <img src={s.ic} alt={s.t} style={{ width: 28, height: 28, objectFit: "contain" }} />
            : <span style={{ fontSize: 28 }}>{s.ic}</span>
          }
        </div>
        <h3 style={{ fontSize: 18, fontWeight: 900, color: navy, marginTop: 8 }}>{s.t}</h3>
        <p style={{ fontSize: 13, color: muted, marginTop: 10, lineHeight: 1.7 }}>{s.d}</p>

        {/* Learn More button */}
        <button
          onClick={handleLearnMore}
          style={{
            marginTop: 14,
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "none", border: "none", cursor: "pointer", padding: 0,
            color: green, fontWeight: 700, fontSize: 14,
            fontFamily: "'Lato',sans-serif",
            transition: "gap .25s",
          }}
          onMouseEnter={e => { e.currentTarget.style.gap = "10px"; }}
          onMouseLeave={e => { e.currentTarget.style.gap = "6px"; }}
        >
          Learn More <span>→</span>
        </button>
      </div>
    </div>
  );
}

export default function Services() {
  const headerRef  = useRef();
  const sectionRef = useRef();
  const imgRegistry = useRef([]);

  const registerImg = (entry) => { imgRegistry.current.push(entry); };

  useEffect(() => {
    let rafId;
    const tick = () => {
      imgRegistry.current.forEach(({ imgEl, cardEl }) => {
        const rect = cardEl.getBoundingClientRect();
        if (rect.bottom < -300 || rect.top > window.innerHeight + 300) return;
        const mid = window.innerHeight / 2 - rect.top - rect.height / 2;
        gsap.set(imgEl, { y: mid * 0.08 });
      });
      rafId = requestAnimationFrame(tick);
    };
    if (!document.body.style.overflow || document.body.style.overflow !== "hidden") {
      rafId = requestAnimationFrame(tick);
    } else {
      window.addEventListener("loaderDone", () => { rafId = requestAnimationFrame(tick); }, { once: true });
    }
    return () => cancelAnimationFrame(rafId);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current.children, {
        y: 40, autoAlpha: 0, stagger: 0.12, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 82%", once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" style={{ padding: "80px 60px 100px", background: off }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>

        {/* Header */}
        <div ref={headerRef} className="mb-5">
          <div className="d-flex align-items-center gap-2 mb-3">
            <div style={{ width: 44, height: 3, background: green, borderRadius: 2 }} />
            <span style={{ fontFamily: "'Lato',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 2.2, color: green, textTransform: "uppercase" }}>
              What We Do
            </span>
          </div>
          <h2 style={{ fontFamily: "'Lato',sans-serif", fontSize: "clamp(32px,4.8vw,66px)", fontWeight: 900, color: navy, margin: 0, lineHeight: 1.04 }}>
            Complete Pest Control <span style={{ color: green }}>Services</span>
          </h2>
          <p style={{ fontFamily: "'Lato',sans-serif", fontSize: 15, color: muted, marginTop: 16, maxWidth: 510, lineHeight: 1.8 }}>
            Certified solutions for every pest — latest technology, safe chemicals, expert professionals.
          </p>
        </div>

        {/* Grid */}
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
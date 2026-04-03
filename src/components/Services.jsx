/* ═══════════════════════════════════════════════════════
   SECTION 03 — Services
   • Mobile: horizontal snap carousel with dots
   • Desktop: responsive grid
   • Simple single fade-up animation (no per-card stagger)
   • Clean image (no parallax — fixes stuck image bug)
   • CSS hover only — no React re-renders
═══════════════════════════════════════════════════════ */
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navy, green, muted, off } from "../constants";
import { TITLE_TO_SLUG } from "../service";
import icon1  from "../Assets/rat.jpg";
import icon2  from "../Assets/cockroach.png";
import icon3  from "../Assets/bedbug.jpg";
import icon4  from "../Assets/mosquito.jpg";
import icon5  from "../Assets/housefly.jpg";
import icon6  from "../Assets/termit.png";
import icon7  from "../Assets/wood.jpg";
import icon8  from "../Assets/honeybee.jpg";
import icon9  from "../Assets/snake.jpg";
import icon10 from "../Assets/deepcleaning.jpg";
import icon11 from "../Assets/distincfection.jpg";
import icon12 from "../Assets/terminate.jpg";
import termite from "../Assets/termite.png";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  { t: "Rodent Control Services",      d: "Effective removal of rats and mice using safe Kerala-approved methods.",                                          img: icon1,  ic: "🐭",   type: "icon"  },
  { t: "Cockroach Control Services",   d: "Odorless and eco-friendly cockroach elimination for homes and offices.",                                         img: icon2,  ic: "🪳",   type: "icon"  },
  { t: "Bed Bug Control Services",     d: "Advanced heat and chemical treatment for complete bed bug removal.",                                             img: icon3,  ic: "🛏️",  type: "icon"  },
  { t: "Mosquito Control Services",    d: "Fogging and larval treatment to prevent mosquito breeding.",                                                     img: icon4,  ic: "🦟",   type: "icon"  },
  { t: "Housefly Services",            d: "Effective control solutions for flies in homes and commercial spaces.",                                          img: icon5,  ic: "🪰",   type: "icon"  },
  { t: "Termite Control Services",     d: "Long-lasting anti-termite protection for buildings and furniture.",                                              img: icon6,  ic: termite, type: "image" },
  { t: "Wood Borer Control",           d: "Specialized treatment to protect wooden furniture from borers.",                                                 img: icon7,  ic: "🪵",   type: "icon"  },
  { t: "Honey Bee Removal Service",    d: "Safe relocation of honey bees without harming the ecosystem.",                                                  img: icon8,  ic: "🐝",   type: "icon"  },
  { t: "Snake Control Service",        d: "Professional snake rescue and relocation services across Kerala.",                                               img: icon9,  ic: "🐍",   type: "icon"  },
  { t: "Deep Cleaning Services",       d: "Complete deep cleaning for homes, offices, and commercial areas.",                                               img: icon10, ic: "🧼",   type: "icon"  },
  { t: "Disinfection & Sanitization",  d: "Professional sanitization services to eliminate germs, bacteria, and viruses from your space.",                  img: icon11, ic: "🧴",   type: "icon"  },
  { t: "Ant Control Services",         d: "Effective solutions to eliminate ants and prevent infestations in residential and commercial areas.",             img: icon12, ic: "🐜",   type: "icon"  },
];

/* ─── Inject CSS once ────────────────────────────────────────────────────── */
const CARD_STYLE_ID = "svc-card-styles";
function injectCardStyles(navy, green, muted) {
  if (document.getElementById(CARD_STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = CARD_STYLE_ID;
  style.textContent = `
    /* ── Card ── */
    .svc-card {
      border-radius: 20px;
      overflow: hidden;
      background: #fff;
      cursor: pointer;
      box-shadow: 0 5px 25px rgba(0,0,0,0.08);
      transition: transform 0.4s ease, box-shadow 0.4s ease;
      will-change: transform;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .svc-card:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 30px 60px rgba(0,0,0,0.14);
    }

    /* ── Image — clean, no overflow tricks ── */
    .svc-card__img-wrap {
      height: 200px;
      overflow: hidden;
      flex-shrink: 0;
    }
    .svc-card__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.5s ease;
    }
    .svc-card:hover .svc-card__img {
      transform: scale(1.07);
    }

    /* ── Body ── */
    .svc-card__body {
      padding: 20px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .svc-card__title {
      font-size: 17px;
      font-weight: 900;
      color: ${navy};
      margin-top: 8px;
      margin-bottom: 0;
      font-family: 'Lato', sans-serif;
    }
    .svc-card__desc {
      font-size: 13px;
      color: ${muted};
      margin-top: 10px;
      line-height: 1.7;
      font-family: 'Lato', sans-serif;
      flex: 1;
    }
    .svc-card__btn {
      margin-top: 14px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      color: ${green};
      font-weight: 700;
      font-size: 14px;
      font-family: 'Lato', sans-serif;
      transition: gap 0.25s ease;
      align-self: flex-start;
    }
    .svc-card__btn:hover { gap: 10px; }

    /* ══════════════════════════════════════
       MOBILE  — horizontal snap carousel
    ══════════════════════════════════════ */
    @media (max-width: 767px) {
      #services {
        padding: 60px 0 80px !important;
      }
      .svc-section-inner {
        padding: 0 20px;
      }
      .svc-track-wrapper {
        /* stretch past the padded inner container */
        margin-left: -20px;
        margin-right: -20px;
      }
      .svc-carousel-track {
        display: flex !important;
        grid-template-columns: unset !important;
        gap: 14px;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        padding: 8px 20px 16px 20px;
      }
      .svc-carousel-track::-webkit-scrollbar { display: none; }

      .svc-carousel-item {
        flex: 0 0 78vw;
        max-width: 290px;
        scroll-snap-align: start;
      }

      /* dots */
      .svc-carousel-dots {
        display: flex;
        justify-content: center;
        gap: 7px;
        margin-top: 4px;
        padding: 0 20px;
        flex-wrap: wrap;
      }
      .svc-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #d0d0d0;
        border: none;
        padding: 0;
        cursor: pointer;
        transition: background 0.3s ease, transform 0.3s ease;
      }
      .svc-dot.active {
        background: ${green};
        transform: scale(1.4);
      }
    }

    /* ══════════════════════════════════════
       DESKTOP — responsive grid
    ══════════════════════════════════════ */
    @media (min-width: 768px) {
      .svc-carousel-track {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 24px;
      }
      .svc-carousel-item {
        width: 100%;
      }
      .svc-carousel-dots { display: none; }
    }
  `;
  document.head.appendChild(style);
}

/* ─── Card component ─────────────────────────────────────────────────────── */
function SvcCard({ s }) {
  const navigate = useNavigate();

  const handleLearnMore = (e) => {
    e.stopPropagation();
    const slug = TITLE_TO_SLUG[s.t];
    if (slug) navigate(`/services/${slug}`);
    else document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="svc-card">
      <div className="svc-card__img-wrap">
        <img
          src={s.img}
          alt={s.t}
          loading="eager"
          decoding="async"
          className="svc-card__img"
        />
      </div>
      <div className="svc-card__body">
        <div>
          {s.type === "image" ? (
            <img
              src={s.ic}
              alt={s.t}
              style={{ width: 28, height: 28, objectFit: "contain" }}
            />
          ) : (
            <span style={{ fontSize: 28 }}>{s.ic}</span>
          )}
        </div>
        <h3 className="svc-card__title">{s.t}</h3>
        <p className="svc-card__desc">{s.d}</p>
        <button className="svc-card__btn" onClick={handleLearnMore}>
          Learn More <span>→</span>
        </button>
      </div>
    </div>
  );
}

/* ─── Main Section ───────────────────────────────────────────────────────── */
export default function Services() {
  const sectionRef = useRef();
  const headerRef  = useRef();
  const gridRef    = useRef();
  const trackRef   = useRef();
  const dotsRef    = useRef([]);

  /* Inject styles */
  useEffect(() => {
    injectCardStyles(navy, green, muted);
  }, []);

  /* ── Dot sync: highlights active dot as user scrolls carousel ── */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateDots = () => {
      if (window.innerWidth >= 768) return;
      const items = track.querySelectorAll(".svc-carousel-item");
      if (!items.length) return;
      const itemWidth = items[0].offsetWidth + 14; // gap = 14px
      const activeIndex = Math.min(
        Math.round(track.scrollLeft / itemWidth),
        SERVICES.length - 1
      );
      dotsRef.current.forEach((dot, i) => {
        if (!dot) return;
        dot.classList.toggle("active", i === activeIndex);
      });
    };

    track.addEventListener("scroll", updateDots, { passive: true });
    window.addEventListener("resize", updateDots);
    updateDots();

    return () => {
      track.removeEventListener("scroll", updateDots);
      window.removeEventListener("resize", updateDots);
    };
  }, []);

  /* ── Dot click: smooth-scroll to that card ── */
  const scrollToCard = (index) => {
    const track = trackRef.current;
    if (!track) return;
    const items = track.querySelectorAll(".svc-carousel-item");
    if (items[index]) {
      items[index].scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }
  };

  /* ── Entrance animations — after loaderDone ── */
  useEffect(() => {
    const header = headerRef.current;
    const grid   = gridRef.current;
    if (!header || !grid) return;

    let st1, st2;

    function initAnimations() {
      ScrollTrigger.refresh();

      /* Whole grid fades up as one — no per-card stagger */
      gsap.set(grid, { y: 40, opacity: 0 });
      st1 = ScrollTrigger.create({
        trigger: grid,
        start: "top 88%",
        once: true,
        onEnter: () => {
          gsap.to(grid, {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: "power3.out",
            clearProps: "transform,opacity",
          });
        },
      });

      /* Header lines fade up */
      gsap.set(header.children, { y: 30, autoAlpha: 0 });
      st2 = ScrollTrigger.create({
        trigger: header,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(header.children, {
            y: 0,
            autoAlpha: 1,
            stagger: 0.1,
            duration: 0.7,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
          });
        },
      });
    }

    const alreadyLoaded =
      document.readyState === "complete" &&
      document.body.style.overflow === "";

    let timer;
    if (alreadyLoaded) {
      timer = setTimeout(initAnimations, 80);
    } else {
      window.addEventListener("loaderDone", initAnimations, { once: true });
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("loaderDone", initAnimations);
      st1?.kill();
      st2?.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      style={{ padding: "80px 60px 100px", background: off }}
    >
      <div className="svc-section-inner" style={{ maxWidth: 1400, margin: "0 auto" }}>

        {/* Header */}
        <div ref={headerRef} className="mb-5">
          <div className="d-flex align-items-center gap-2 mb-3">
            <div style={{ width: 44, height: 3, background: green, borderRadius: 2 }} />
            <span
              style={{
                fontFamily: "'Lato', sans-serif",
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
              fontFamily: "'Lato', sans-serif",
              fontSize: "clamp(32px, 4.8vw, 66px)",
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
              fontFamily: "'Lato', sans-serif",
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

        {/* Cards grid / carousel */}
        <div ref={gridRef}>
          <div className="svc-track-wrapper">
            <div ref={trackRef} className="svc-carousel-track mt-2">
              {SERVICES.map((s, i) => (
                <div key={i} className="svc-carousel-item">
                  <SvcCard s={s} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots — hidden on desktop via CSS */}
          <div className="svc-carousel-dots">
            {SERVICES.map((_, i) => (
              <button
                key={i}
                ref={(el) => (dotsRef.current[i] = el)}
                className={`svc-dot${i === 0 ? " active" : ""}`}
                aria-label={`Go to service ${i + 1}`}
                onClick={() => scrollToCard(i)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
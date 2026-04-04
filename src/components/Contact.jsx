import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navy, green, gd, muted, IMG } from "../constants";
import icon1 from "../Assets/phone-call.png";
import icon2 from "../Assets/map.png";
import icon3 from "../Assets/gmail.png";
import icon4 from "../Assets/clock.png";
import icon5 from "../Assets/pin.png"


gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const secRef = useRef();
  const l1Ref = useRef(),
    l2Ref = useRef();
  const infoRef = useRef(),
    formRef = useRef();

  const [done, setDone] = useState(false);
  const [f, setF] = useState({ name: "", phone: "", svc: "", msg: "" });

  useEffect(() => {
    /* ── 3-layer bg parallax ── */
    const tick = () => {
      if (!secRef.current) return;
      const rect = secRef.current.getBoundingClientRect();
      const mid = window.innerHeight / 2 - rect.top - rect.height / 2;
      gsap.set(l1Ref.current, { y: mid * 0.48 });
      gsap.set(l2Ref.current, { y: mid * 0.28 });
    };
    window.addEventListener("scroll", tick, { passive: true });

    /* ── entrance from opposite x ── */
    gsap.fromTo(
      infoRef.current.children,
      { x: -82, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: secRef.current, start: "top 70%" },
      },
    );
    gsap.fromTo(
      formRef.current,
      { x: 82, opacity: 0, scale: 0.95 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: secRef.current, start: "top 70%" },
      },
    );

    return () => window.removeEventListener("scroll", tick);
  }, []);

  const inp = {
    width: "100%",
    background: "rgba(255,255,255,.94)",
    border: "1.5px solid rgba(27,58,107,.1)",
    borderRadius: 10,
    padding: "14px 18px",
    fontFamily: "'Lato',sans-serif",
    fontSize: 14,
    color: "#0a1628",
    outline: "none",
    transition: "border-color .3s,box-shadow .3s,background .3s",
  };
  const fo = (e) => {
    e.target.style.borderColor = green;
    e.target.style.boxShadow = "0 0 0 3.5px rgba(91,199,40,.13)";
    e.target.style.background = "#fff";
  };
  const fb = (e) => {
    e.target.style.borderColor = "rgba(27,58,107,.1)";
    e.target.style.boxShadow = "none";
    e.target.style.background = "rgba(255,255,255,.94)";
  };

  const contactInfo = [
    [icon1, "Call Us", "+91 79074 96956", "tel:+917907496956"],
    [
      icon3,
      "Email",
      "Onguardpestcontrols@gmail.com",
      "mailto:Onguardpestcontrols@gmail.com",
    ],
    [
      icon2,
      "Head Office",
      "KOTTOOR PLAZA\nTC 24/1033, Third Floor\nThycaud P.O\nThiruvananthapuram – 695014",
      "https://maps.google.com/?q=KOTTOOR+PLAZA+TC+24/1033+Thycaud+Thiruvananthapuram",
    ],
    [
      icon5,
      "Branch Office",
      "Sri Narasimha Shopping Complex\nNear Govt. Secretariat, Opp. YMCA Road\nStatue, Palayam\nThiruvananthapuram – 695001",
      "https://maps.google.com/?q=Narasimha+Shopping+Complex+Palayam+Thiruvananthapuram",
    ],
    [icon4, "Hours", "Mon–Sun | Open 24 hours", null],
  ];
  return (
    <>
      <style>{`
        #contact { position:relative; overflow:hidden; }

        .contact-layer { position:absolute; inset:-22% 0 -22%; will-change:transform; }
        .contact-layer img { width:100%; height:100%; object-fit:cover; }
        .contact-overlay { position:absolute; inset:0; background:rgba(5,9,26,.94); z-index:2; }
        .contact-glow {
          position:absolute; top:12%; left:8%; width:380px; height:380px;
          border-radius:50%; z-index:3; pointer-events:none;
          background:radial-gradient(circle,rgba(91,199,40,.07) 0%,transparent 68%);
        }
        .contact-content { position:relative; z-index:4; padding:140px 60px; }

        .info-icon {
          width:50px; height:50px; border-radius:13px; flex-shrink:0;
          background:rgba(91,199,40,.12); border:1px solid rgba(91,199,40,.28);
          display:flex; align-items:center; justify-content:center;
          font-size:20px; transition:all .3s;
        }
        .info-icon:hover {
          background:rgba(91,199,40,.24);
          transform:scale(1.1);
        }

        .form-card {
          background:rgba(255,255,255,.97); border-radius:22px;
          padding:52px 46px; box-shadow:0 44px 110px rgba(0,0,0,.34);
        }
        .form-label-og {
          display:block; font-family:'Lato',sans-serif; font-size:11px;
          font-weight:700; letter-spacing:1px; color:${muted};
          margin-bottom:8px; text-transform:uppercase;
        }
        .form-submit-btn {
          width:100%; background:${green}; color:#fff; border:none;
          border-radius:50px; font-family:'Lato',sans-serif;
          font-size:15px; font-weight:900; padding:17px;
          box-shadow:0 10px 34px rgba(91,199,40,.46);
          transition:all .35s; letter-spacing:.3px; cursor:pointer;
        }
        .form-submit-btn:hover {
          background:${gd};
          transform:translateY(-3px) scale(1.02);
        }

        .success-card {
          background:#fff; border-radius:22px; padding:72px;
          text-align:center; box-shadow:0 44px 110px rgba(0,0,0,.34);
        }
.info-row:hover .info-icon {
  background: rgba(91,199,40,.24);
  transform: scale(1.1);
}
        @media(max-width:960px){ .contact-grid{ flex-direction:column !important; } }
        @media(max-width:600px){ .contact-content{ padding:80px 20px !important; } }
      `}</style>

      <section id="contact" ref={secRef}>
        {/* L1 city photo */}
        <div ref={l1Ref} className="contact-layer" style={{ zIndex: 0 }}>
          <img src={IMG.contactBg} alt="" />
        </div>

        {/* L2 blended */}
        <div
          ref={l2Ref}
          className="contact-layer"
          style={{ zIndex: 1, mixBlendMode: "multiply", opacity: 0.4 }}
        >
          <img src={IMG.contactL2} alt="" />
        </div>

        <div className="contact-overlay" />
        <div className="contact-glow" />

        <div className="contact-content">
          <div style={{ maxWidth: 1220, margin: "0 auto" }}>
            <div className="row g-5 align-items-start">
              {/* ── Info Column ── */}
              <div className="col-lg-6">
                <div ref={infoRef}>
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
                      Reach Out
                    </span>
                  </div>
                  <h2
                    style={{
                      fontFamily: "'Lato',sans-serif",
                      fontSize: "clamp(28px,3.8vw,58px)",
                      fontWeight: 900,
                      color: "#fff",
                      margin: "0 0 18px",
                      lineHeight: 1.05,
                      letterSpacing: -0.8,
                    }}
                  >
                    Book Your <span style={{ color: green }}>Free</span>
                    <br />
                    Inspection Today
                  </h2>
                  <p
                    style={{
                      fontFamily: "'Lato',sans-serif",
                      fontSize: 15,
                      color: "rgba(255,255,255,.5)",
                      lineHeight: 1.88,
                      margin: "0 0 15px",
                    }}
                  >
                    Pests multiply fast — don't wait. Our experts inspect at
                    zero cost and give an honest quote with no obligation.
                  </p>

                  {contactInfo.map(([ic, l, v, href], i) => (
                    <div
                      key={i}
                      className="d-flex gap-3 mb-4"
                      onClick={() => href && window.open(href, "_blank")}
                      style={{ cursor: href ? "pointer" : "default" }}
                    >
                      <div
                        className="info-icon"
                        style={
                          l === "Branch Office"
                            ? {
                                background: "rgba(91,199,40,.07)",
                                border: "1px solid rgba(91,199,40,.18)",
                              }
                            : {}
                        }
                      >
                       <img src={ic} alt="logo" style={{width:20, height:20}}/> 
                      </div>
                      <div>
                        <div
                          style={{
                            fontFamily: "'Lato',sans-serif",
                            fontSize: 10,
                            fontWeight: 700,
                            letterSpacing: 1.8,
                            color: green,
                            marginBottom: 4,
                            textTransform: "uppercase",
                          }}
                        >
                          {l}
                        </div>
                        <div
                          style={{
                            fontFamily: "'Lato',sans-serif",
                            fontSize: 14,
                            color: "rgba(255,255,255,.78)",

                            lineHeight: 1.7,
                            textDecoration: "none",
                            transition: "color .2s, text-decoration .2s",
                          }}
                          onMouseEnter={(e) => {
                            if (href) {
                              e.currentTarget.style.textDecoration =
                                "underline";
                              e.currentTarget.style.textDecorationColor =
                                "rgba(91,199,40,.5)";
                              e.currentTarget.style.textUnderlineOffset = "3px";
                              e.currentTarget.style.color =
                                "rgba(255,255,255,1)";
                            }
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.textDecoration = "none";
                            e.currentTarget.style.color =
                              "rgba(255,255,255,.78)";
                          }}
                        >
                          {v}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Form Column ── */}
              <div className="col-lg-6">
                <div ref={formRef}>
                  {done ? (
                    <div className="success-card">
                      <div style={{ fontSize: 68, marginBottom: 18 }}>🎉</div>
                      <h3
                        style={{
                          fontFamily: "'Lato',sans-serif",
                          fontSize: 28,
                          fontWeight: 900,
                          color: green,
                          margin: "0 0 12px",
                        }}
                      >
                        Inspection Booked!
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Lato',sans-serif",
                          fontSize: 15,
                          color: muted,
                        }}
                      >
                        We'll call within 2 hours to confirm your free slot.
                      </p>
                    </div>
                  ) : (
                    <div className="form-card">
                      <h3
                        style={{
                          fontFamily: "'Lato',sans-serif",
                          fontSize: 23,
                          fontWeight: 900,
                          color: navy,
                          margin: "0 0 30px",
                          letterSpacing: -0.3,
                        }}
                      >
                        Schedule Free Inspection
                      </h3>

                      <div className="row g-3 mb-3">
                        {[
                          ["Full Name *", "text", "Your Name", "name"],
                          ["Phone *", "tel", "+91 XXXXX XXXXX", "phone"],
                        ].map(([l, t, p, k]) => (
                          <div key={k} className="col-6">
                            <label className="form-label-og">{l}</label>
                            <input
                              required
                              type={t}
                              placeholder={p}
                              value={f[k]}
                              onChange={(e) =>
                                setF({ ...f, [k]: e.target.value })
                              }
                              style={inp}
                              onFocus={fo}
                              onBlur={fb}
                            />
                          </div>
                        ))}
                      </div>

                      <div className="mb-3">
                        <label className="form-label-og">Service Needed</label>
                        <select
                          value={f.svc}
                          onChange={(e) => setF({ ...f, svc: e.target.value })}
                          style={{
                            ...inp,
                            appearance: "none",
                            cursor: "pointer",
                          }}
                          onFocus={fo}
                          onBlur={fb}
                        >
                          <option value="">Select a service...</option>
                          <option>🐭 Rodent Control Services</option>
                          <option>🪳 Cockroach Control Services</option>
                          <option>🛏️ Bed Bug Control Services</option>
                          <option>🦟 Mosquito Control Services</option>
                          <option>🪰 Housefly Services</option>
                          <option>🐛 Termite Control Services</option>
                          <option>🪵 Wood Borer Control</option>
                          <option>🐝 Honey Bee Removal Service</option>
                          <option>🐍 Snake Control Service</option>
                          <option>🧼 Deep Cleaning Services</option>
                          <option>🧴 Disinfection & Sanitization</option>
                          <option>🐜 Ant Control Services</option>
                        </select>
                      </div>

                      <div className="mb-4">
                        <label className="form-label-og">Message</label>
                        <textarea
                          placeholder="Describe your pest problem..."
                          rows={4}
                          value={f.msg}
                          onChange={(e) => setF({ ...f, msg: e.target.value })}
                          style={{ ...inp, resize: "vertical" }}
                          onFocus={fo}
                          onBlur={fb}
                        />
                      </div>

                      <button
                        className="form-submit-btn"
                        onClick={() => {
                          if (!f.name || !f.phone) {
                            alert("Please enter your name and phone number.");
                            return;
                          }
                          const msg = encodeURIComponent(
                            `Hello OnGuard! 👋\n\nI'd like to book a Free Inspection.\n\n` +
                              `*Name:* ${f.name}\n` +
                              `*Phone:* ${f.phone}\n` +
                              `*Service:* ${f.svc || "Not specified"}\n` +
                              `*Message:* ${f.msg || "—"}`,
                          );
                          window.open(
                            `https://wa.me/917907496956?text=${msg}`,
                            "_blank",
                          );
                        }}
                      >
                        Book Free Inspection Now
                      </button>
                      <p
                        style={{
                          textAlign: "center",
                          fontFamily: "'Lato',sans-serif",
                          fontSize: 12,
                          color: muted,
                          marginTop: 16,
                        }}
                      >
                        100% confidential. No spam, ever.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

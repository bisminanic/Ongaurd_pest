/* ═══════════════════════════════════════════════════════
   SECTION 12 — Footer
   4-column footer with hover effects
   Dependencies: React, Bootstrap 5
═══════════════════════════════════════════════════════ */
import React from "react";
import Logo from "./Logo";
import { green, navy } from "../constants";

export default function Footer() {
  const services = ["🪳 Cockroach Control","🐀 Rodent Control","🦟 Mosquito Control","🐜 Termite Treatment","🛏️ Bed Bug Treatment"];
  const company  = ["About Us","Our Process","Certifications","Blog","Careers"];
  const contact  = ["+91 98765 43210","info@onguardpest.com","Delhi · Noida · Gurgaon","Faridabad · Gr. Noida"];
  const socials  = ["F","IN","TW","YT"];

  const linkStyle = {
    fontFamily:"'Lato',sans-serif", fontSize:13,
    color:"rgba(255,255,255,.28)", marginBottom:11,
    cursor:"pointer", display:"block",
    transition:"color .25s,transform .25s", fontWeight:400,
  };

  return (
    <>
      <style>{`
        @keyframes ripple {
          0%  { box-shadow:0 0 0 0 rgba(91,199,40,.65); }
          70% { box-shadow:0 0 0 24px rgba(91,199,40,0); }
          100%{ box-shadow:0 0 0 0 rgba(91,199,40,0); }
        }

        #footer {
          background:#04091a;
          border-top:3px solid ${green};
          padding:76px 60px 34px;
          position:relative; overflow:hidden;
        }
        #footer::after {
          content:''; position:absolute; bottom:0; right:0;
          width:380px; height:380px; border-radius:50%;
          background:radial-gradient(circle,rgba(27,58,107,.28) 0%,transparent 68%);
          pointer-events:none;
        }

        .footer-col-title {
          font-family:'Lato',sans-serif; font-size:13px; font-weight:900;
          color:#fff; margin-bottom:20px; padding-bottom:12px;
          border-bottom:1px solid rgba(91,199,40,.18); letter-spacing:.3px;
        }

        .social-icon {
          width:38px; height:38px; border-radius:10px;
          background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.08);
          display:flex; align-items:center; justify-content:center;
          cursor:pointer; font-family:'Lato',sans-serif; font-size:11px;
          font-weight:900; color:rgba(255,255,255,.28);
          transition:all .3s; text-decoration:none;
        }
        .social-icon:hover {
          background:${green}; color:#fff !important;
          border-color:${green}; transform:translateY(-3px);
        }

        .footer-link:hover {
          color:${green} !important;
          transform:translateX(5px) !important;
        }

        .footer-bottom {
          border-top:1px solid rgba(255,255,255,.05);
          padding-top:26px; margin-top:56px;
        }

        .call-fab {
          position:fixed; bottom:32px; right:32px; z-index:9999;
          width:62px; height:62px; border-radius:50%;
          background:${green}; display:flex; align-items:center;
          justify-content:center; font-size:28px; text-decoration:none;
          animation:ripple 2.5s infinite;
          box-shadow:0 10px 38px rgba(91,199,40,.58);
          transition:transform .5s cubic-bezier(.34,1.56,.64,1);
        }
        .call-fab:hover { transform:scale(1.1); }

        @media(max-width:960px){ #footer{ padding:52px 24px 26px !important; } }
      `}</style>

      <footer id="footer">
        <div style={{ maxWidth:1220, margin:"0 auto", position:"relative", zIndex:1 }}>
          <div className="row g-5 mb-4">

            {/* Brand column */}
            <div className="col-lg-4">
              <div className="mb-3">
                <Logo sz={40} tc="#fff" />
              </div>
              <p style={{ fontFamily:"'Lato',sans-serif", fontSize:13,
                color:"rgba(255,255,255,.27)", lineHeight:1.9, maxWidth:238, marginBottom:24 }}>
                Delhi NCR's trusted pest control experts since 2010. Eco-friendly, certified, always on guard.
              </p>
              <div className="d-flex gap-2">
                {socials.map((s) => (
                  <a key={s} href="#" className="social-icon">{s}</a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="col-6 col-lg-2">
              <div className="footer-col-title">Services</div>
              {services.map((x) => (
                <div key={x} className="footer-link" style={linkStyle}>{x}</div>
              ))}
            </div>

            {/* Company */}
            <div className="col-6 col-lg-2">
              <div className="footer-col-title">Company</div>
              {company.map((x) => (
                <div key={x} className="footer-link" style={linkStyle}>{x}</div>
              ))}
            </div>

            {/* Contact */}
            <div className="col-lg-3">
              <div className="footer-col-title">Contact</div>
              {contact.map((x) => (
                <div key={x} className="footer-link" style={linkStyle}>{x}</div>
              ))}
            </div>

          </div>

          {/* Bottom bar */}
          <div className="footer-bottom d-flex justify-content-between flex-wrap gap-3">
            <span style={{ fontFamily:"'Lato',sans-serif", fontSize:12,
              color:"rgba(255,255,255,.15)" }}>
              © 2025 OnGuard Pest Controls. All rights reserved.
            </span>
            <div className="d-flex gap-4">
              {["Privacy Policy","Terms","Sitemap"].map((t) => (
                <span key={t} style={{ fontFamily:"'Lato',sans-serif", fontSize:12,
                  color:"rgba(255,255,255,.15)", cursor:"pointer", transition:"color .25s" }}
                  onMouseEnter={(e)=>e.target.style.color=green}
                  onMouseLeave={(e)=>e.target.style.color="rgba(255,255,255,.15)"}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Call Button */}
      <a href="tel:+919876543210" className="call-fab">📞</a>
    </>
  );
}

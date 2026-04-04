import React from "react";
import Logo from "./Logo";
import { green, navy } from "../constants";
import { TITLE_TO_SLUG } from "../service";
import { useNavigate } from "react-router-dom";
import icon1 from "../Assets/phone-call.png";
import icon2 from "../Assets/map.png";
import icon3 from "../Assets/gmail.png";
import icon4 from "../Assets/clock.png";
import icon5 from "../Assets/pin.png";
import icon6 from "../Assets/facebook.png";
import icon7 from "../Assets/instagram.png";
import icon8 from "../Assets/town.jpg";
import icon9 from "../Assets/quick.jpg";
import whatsapp from "../Assets/whatsapp.png";
export default function Footer() {
  const navigate = useNavigate();
  const services = [
    "🐭 Rodent Control Services",
    "🪳 Cockroach Control Services",

    "🦟 Mosquito Control Services",
    "🪰 Housefly Services",
    "🐛 Termite Control Services",

    "🐜 Ant Control Services",
  ];

  const company = [
    {
      label: "About Us",
      action: () => {
        navigate("/about-us");
        setTimeout(
          () =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" }),
          100,
        );
      },
    },
    {
      label: "Our Process",
      action: () => {
        navigate("#process");
        setTimeout(
          () =>
            document
              .getElementById("process")
              ?.scrollIntoView({ behavior: "smooth" }),
          100,
        );
      },
    },
    {
      label: "Review",
      action: () => {
        navigate("#review");
        setTimeout(
          () =>
            document
              .getElementById("review")
              ?.scrollIntoView({ behavior: "smooth" }),
          100,
        );
      },
    },
    {
      label: "Blog",
      action: () => {
        navigate("#blog");
        setTimeout(
          () =>
            document
              .getElementById("blog")
              ?.scrollIntoView({ behavior: "smooth" }),
          100,
        );
      },
    },
  ];

  const contact = [
    { ic: icon1, label: "+91 79074 96956", href: "tel:+917907496956" },
    {
      ic: icon3,
      label: "Onguardpestcontrols@gmail.com",
      href: "mailto:Onguardpestcontrols@gmail.com",
    },
    {
      ic: icon2,
      label:
        "KOTTOOR PLAZA, TC 24/1033\nThird Floor, Thycaud P.O\nThiruvananthapuram – 695014",
      href: "https://maps.google.com/?q=KOTTOOR+PLAZA+TC+24/1033+Thycaud+Thiruvananthapuram",
    },
    {
      ic: icon5,
      label:
        "Sri Narasimha Shopping Complex\nOpp. YMCA Road, Statue, Palayam\nThiruvananthapuram – 695001",
      href: "https://maps.google.com/?q=Narasimha+Shopping+Complex+Palayam+Thiruvananthapuram",
    },
    { ic: icon4, label: "Mon–Sun | Open 24 hours", href: null },
  ];

  const socials = [
    {
      img: icon6,
      href: "https://www.facebook.com/onguardpestcontrols",
      label: "Facebook",
    },
    {
      img: icon7,
      href: "https://www.instagram.com/onguardpestcontrols/",
      label: "Instagram",
    },
    {
      img: icon8,
      href: "https://townin.com/Thiruvananthapuram/search/48399/onguard-pest-controls",
      label: "Townscript",
    },
    {
      img: icon9,
      href: "https://www.quickerala.com/trivandrum/palayam/onguard-pest-controls/461055",
      label: "Quick Kerala",
    },
  ];

  const linkStyle = {
    fontFamily: "'Lato',sans-serif",
    fontSize: 13,
    color: "rgba(255,255,255,.28)",
    marginBottom: 11,
    cursor: "pointer",
    display: "block",
    transition: "color .25s,transform .25s",
    fontWeight: 400,
  };

  return (
    <>
      <style>{`
        @keyframes ripple {
          0%  { box-shadow: 0 0 0 0 rgba(91,199,40,.65); }
          70% { box-shadow: 0 0 0 24px rgba(91,199,40,0); }
          100%{ box-shadow: 0 0 0 0 rgba(91,199,40,0); }
        }

        #footer {
          background: #04091a;
          border-top: 3px solid ${green};
          padding: 76px 60px 34px;
          position: relative; overflow: hidden;
        }
        #footer::after {
          content: ''; position: absolute; bottom: 0; right: 0;
          width: 380px; height: 380px; border-radius: 50%;
          background: radial-gradient(circle, rgba(27,58,107,.28) 0%, transparent 68%);
          pointer-events: none;
        }

        .footer-col-title {
          font-family: 'Lato',sans-serif; font-size: 13px; font-weight: 900;
          color: #fff; margin-bottom: 20px; padding-bottom: 12px;
          border-bottom: 1px solid rgba(91,199,40,.18); letter-spacing: .3px;
        }

        .social-icon {
          width: 38px; height: 38px; border-radius: 10px;
          background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; font-family: 'Lato',sans-serif; font-size: 11px;
          font-weight: 900; color: rgba(255,255,255,.28);
          transition: all .3s; text-decoration: none;
        }
        .social-icon:hover {
          background: ${green}; color: #fff !important;
          border-color: ${green}; transform: translateY(-3px);
        }

        .footer-link:hover {
          color: ${green} !important;
          transform: translateX(5px) !important;
        }

        .footer-contact-item {
          display: flex; gap: 10px; align-items: flex-start;
          margin-bottom: 14px; cursor: pointer;
          transition: opacity .25s;
        }
        .footer-contact-item:hover { opacity: 1 !important; }
        .footer-contact-item:hover .footer-contact-text {
          color: ${green} !important;
        }
        .footer-contact-ic {
          font-size: 15px; flex-shrink: 0; margin-top: 1px;
        }
        .footer-contact-text {
          font-family: 'Lato',sans-serif; font-size: 13px;
          color: rgba(255,255,255,.28); line-height: 1.7;
          white-space: pre-line;
          transition: color .25s;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,.05);
          padding-top: 26px; margin-top: 56px;
        }

        .call-fab {
          position: fixed; bottom: 32px; right: 32px; z-index: 9999;
          width: 62px; height: 62px; border-radius: 50%;
          background: ${green}; display: flex; align-items: center;
          justify-content: center; font-size: 28px; text-decoration: none;
          animation: ripple 2.5s infinite;
          box-shadow: 0 10px 38px rgba(91,199,40,.58);
          transition: transform .5s cubic-bezier(.34,1.56,.64,1);
        }
        .call-fab:hover { transform: scale(1.1); }

        @media (max-width: 960px) {
          #footer { padding: 52px 24px 26px !important; }
        }
      `}</style>

      <footer id="footer">
        <div
          style={{
            maxWidth: 1220,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div className="row g-5 mb-4">
            {/* ── Brand column ── */}
            <div className="col-lg-3">
              <div className="mb-3">
                <Logo  tc="#fff" white  />
              </div>
              <p
                style={{
                  fontFamily: "'Lato',sans-serif",
                  fontSize: 13,
                  color: "rgba(255,255,255,.27)",
                  lineHeight: 1.9,
                  maxWidth: 238,
                  marginBottom: 24,
                }}
              >
                Kerala's trusted pest control experts since 2010. Eco-friendly,
                certified, always on guard.
              </p>
              <div className="d-flex gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    title={s.label}
                  >
                    <img
                      src={s.img}
                      alt={s.label}
                      style={{
                        width: 20,
                        height: 20,
                        objectFit: "contain",
                        borderRadius: "4px",
                        opacity: 0.6,
                        transition: "opacity .3s",
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* ── Services ── */}

            <div className="col-6 col-lg-3">
              <div className="footer-col-title">Services</div>
              <div>
                {services.map((x) => {
                  // strip the emoji to get the clean title for slug lookup
                  const cleanTitle = x.replace(/^\S+\s/, "");
                  const slug = TITLE_TO_SLUG[cleanTitle];
                  return (
                    <div
                      key={x}
                      className="footer-link"
                      style={linkStyle}
                      onClick={() => {
                        if (slug) {
                          navigate(`/services/${slug}`);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                    >
                      {x}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── Company ── */}

            <div className="col-6 col-lg-2">
              <div className="footer-col-title">Company</div>
              {company.map((item) => (
                <div
                  key={item.label}
                  className="footer-link"
                  style={linkStyle}
                  onClick={item.action}
                >
                  {item.label}
                </div>
              ))}
            </div>

            {/* ── Contact ── */}

            <div className="col-lg-4">
              <div className="footer-col-title">Contact</div>
              {contact.map((item, i) => (
                <div
                  key={i}
                  className="footer-contact-item"
                  onClick={() => item.href && window.open(item.href, "_blank")}
                  style={{ cursor: item.href ? "pointer" : "default" }}
                >
                  <img
                    src={item.ic}
                    alt=""
                    style={{
                      width: 18,
                      height: 18,
                      objectFit: "contain",
                      flexShrink: 0,
                      marginTop: 2,
                      opacity: 0.3,
                    }}
                  />
                  <span className="footer-contact-text">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="footer-bottom d-flex justify-content-between flex-wrap gap-3">
            <span
              style={{
                fontFamily: "'Lato',sans-serif",
                fontSize: 12,
                color: "rgba(255,255,255,.15)",
              }}
            >
              © 2025 OnGuard Pest Controls. All rights reserved.
            </span>
            <div className="d-flex gap-4">
              {["Privacy Policy", "Terms", "Sitemap"].map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "'Lato',sans-serif",
                    fontSize: 12,
                    color: "rgba(255,255,255,.15)",
                    cursor: "pointer",
                    transition: "color .25s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = green)}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgba(255,255,255,.15)")
                  }
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}

      <a
        href="https://wa.me/9179074 96956"
        target="_blank"
        rel="noopener noreferrer"
        className="call-fab"
        title="Chat on WhatsApp"
      >
        <img
          src={whatsapp}
          alt="WhatsApp"
          style={{
            width: 34,
            height: 34,
            objectFit: "contain",
          }}
        />
      </a>
    </>
  );
}

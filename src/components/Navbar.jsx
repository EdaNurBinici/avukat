import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { T, GLOBAL_CSS } from "../theme";
import { useW } from "../hooks/useW";

const LINKS = [
  { label: "Ana Sayfa",   path: "/" },
  { label: "Biz Kimiz?", path: "/about" },
  { label: "Hizmetler",  path: "/services" },
  { label: "Ekibimiz",   path: "/team" },
  { label: "Makaleler",  path: "/articles" },
  { label: "İletişim",   path: "/contact" },
];

export default function Navbar() {
  const { isMobile, isDesktop, px } = useW();
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 55);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => { 
    if (isDesktop) setOpen(false); 
  }, [isDesktop]);

  useEffect(() => { 
    setOpen(false); 
    window.scrollTo(0, 0); 
  }, [location.pathname]);

  const active = (p) => location.pathname === p;

  return (
    <>
      <style>{GLOBAL_CSS}{`
        .nb-link {
          font-family:'Outfit',sans-serif; font-size:0.78rem; font-weight:500;
          letter-spacing:0.06em; color:${T.textDark}; text-decoration:none;
          padding:4px 0; border-bottom:2px solid transparent;
          transition:color .22s, border-color .22s; white-space:nowrap;
        }
        .nb-link:hover,.nb-link.act { color:${T.gold}; border-bottom-color:${T.gold}; }
        .nb-mob {
          font-family:'Outfit',sans-serif; font-size:0.92rem; font-weight:500;
          color:${T.textDark}; text-decoration:none; display:block;
          padding:0.9rem 0; border-bottom:1px solid ${T.border};
          transition:color .22s, padding-left .22s;
        }
        .nb-mob:hover,.nb-mob.act { color:${T.gold}; padding-left:0.4rem; }
      `}</style>

      {/* TOP BAR */}
      <div style={{ background: T.navy, padding: "0.5rem 0" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:`0 ${px}`, display:"flex", justifyContent:"space-between", alignItems:"center", gap:"0.5rem", flexWrap:"wrap" }}>
          <div style={{ display:"flex", gap: isMobile?"1rem":"2rem", flexWrap:"wrap" }}>
            <span className="out" style={{ display:"flex", alignItems:"center", gap:"0.4rem", color:"rgba(255,255,255,0.65)", fontSize:"0.72rem" }}>
              <span style={{ color:T.gold }}>◷</span> 09:00 – 22:00
            </span>
            {!isMobile && (
              <span className="out" style={{ display:"flex", alignItems:"center", gap:"0.4rem", color:"rgba(255,255,255,0.65)", fontSize:"0.72rem" }}>
                <span style={{ color:T.gold }}>◎</span> Beyoğlu · Beşiktaş · Kadıköy / İstanbul
              </span>
            )}
          </div>
          <a href="tel:0850XXXXXXX" className="out" style={{ display:"flex", alignItems:"center", gap:"0.45rem", color:T.gold, fontWeight:600, fontSize:"0.78rem", textDecoration:"none", letterSpacing:"0.04em" }}>
            <span>📞</span><span>0850 XXX XX XX</span>
          </a>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav style={{
        position:"sticky", top:0, zIndex:200,
        background: scrolled ? "rgba(255,255,255,0.97)" : T.white,
        borderBottom:`1px solid ${scrolled ? "rgba(13,27,46,0.12)" : "rgba(13,27,46,0.06)"}`,
        backdropFilter: scrolled ? "blur(18px)" : "none",
        boxShadow: scrolled ? "0 2px 28px rgba(13,27,46,0.09)" : "none",
        transition:"all .3s",
        padding: isMobile ? "0.75rem 0" : "0",
      }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:`0 ${px}`, display:"flex", alignItems:"center", justifyContent:"space-between", minHeight: isMobile ? 0 : 74 }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration:"none", display:"flex", alignItems:"center", gap:"0.85rem", flexShrink:0 }}>
            <div style={{ width: isMobile?38:44, height: isMobile?38:44, background:T.navy, borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, position:"relative" }}>
              <span style={{ fontSize: isMobile?"1.2rem":"1.4rem" }}>⚖</span>
              <div style={{ position:"absolute", bottom:-3, right:-3, width:12, height:12, background:T.gold, borderRadius:"50%", border:`2px solid ${T.white}` }}/>
            </div>
            <div>
              <div className="cin" style={{ fontSize: isMobile?"0.5rem":"0.58rem", letterSpacing:"0.2em", color:T.gold, lineHeight:1 }}>İSTANBUL HUKUK BÜROSU</div>
              <div className="cg" style={{ fontSize: isMobile?"1rem":"1.15rem", fontWeight:700, color:T.navy, lineHeight:1.2, marginTop:3 }}>Hukuk & Danışmanlık</div>
            </div>
          </Link>

          {/* Desktop links */}
          {isDesktop && (
            <div style={{ display:"flex", gap:"1.6rem", alignItems:"center" }}>
              {LINKS.map(l => (
                <Link key={l.path} to={l.path} className={`nb-link${active(l.path)?" act":""}`}>
                  {l.label}
                </Link>
              ))}
            </div>
          )}

          {/* Desktop CTAs */}
          {isDesktop && (
            <div style={{ display:"flex", gap:"0.65rem", alignItems:"center" }}>
              <a href="tel:0850XXXXXXX" style={{ textDecoration:"none" }}>
                <button className="btn-ghost-dark" style={{ padding:"0.65rem 1.2rem", display:"flex", alignItems:"center", gap:"0.4rem" }}>
                  <span>📞</span> Ara
                </button>
              </a>
              <Link to="/contact" style={{ textDecoration:"none" }}>
                <button className="btn-gold" style={{ padding:"0.7rem 1.4rem" }}>🗓 Randevu Al</button>
              </Link>
            </div>
          )}

          {/* Mobile burger */}
          {!isDesktop && (
            <button onClick={() => setOpen(o => !o)} style={{ background:"none", border:"none", fontSize:"1.5rem", cursor:"pointer", color:T.navy, padding:"0.2rem", lineHeight:1 }}>
              {open ? "✕" : "☰"}
            </button>
          )}
        </div>

        {/* Mobile drawer */}
        {!isDesktop && open && (
          <div style={{ background:T.white, borderTop:`3px solid ${T.gold}`, padding:`0.5rem ${px} 1.5rem` }}>
            {LINKS.map(l => (
              <Link key={l.path} to={l.path} className={`nb-mob${active(l.path)?" act":""}`}>
                {l.label}
              </Link>
            ))}
            <div style={{ display:"flex", flexDirection:"column", gap:"0.75rem", marginTop:"1.25rem" }}>
              <Link to="/contact" style={{ textDecoration:"none" }}>
                <button className="btn-gold" style={{ width:"100%", padding:"0.9rem", fontSize:"0.85rem" }}>🗓 Ücretsiz Randevu Al</button>
              </Link>
              <a href="tel:0850XXXXXXX" style={{ textDecoration:"none" }}>
                <button className="btn-navy" style={{ width:"100%", padding:"0.88rem", fontSize:"0.85rem" }}>📞 Hemen Ara: 0850 XXX XX XX</button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

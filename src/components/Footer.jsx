import { Link } from "react-router-dom";
import { T } from "../theme";
import { useW } from "../hooks/useW";

const LINKS = [
  { label: "Ana Sayfa",   path: "/" },
  { label: "Biz Kimiz?", path: "/about" },
  { label: "Hizmetler",  path: "/services" },
  { label: "Ekibimiz",   path: "/team" },
  { label: "Makaleler",  path: "/articles" },
  { label: "İletişim",   path: "/contact" },
];

const SERVICES = ["Aile & Boşanma", "Ceza Hukuku", "İcra Hukuku", "Kira & Tahliye", "İş Hukuku", "Ticaret Hukuku", "Gayrimenkul Hukuku"];
const SOCIAL = ["fb", "𝕏", "ig", "yt", "li"];

export default function Footer() {
  const { isMobile, isTablet, px } = useW();
  const cols = isMobile ? "1fr" : isTablet ? "1fr 1fr" : "2fr 1fr 1fr 1.2fr";

  return (
    <footer style={{ background: T.dark, borderTop: `3px solid ${T.gold}` }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding: isMobile?"3rem 1.25rem 2rem":isTablet?"4rem 2rem 2rem":`4.5rem 2.5rem 2rem` }}>
        <div style={{ display:"grid", gridTemplateColumns: cols, gap: isMobile?"2.5rem":"2.75rem", marginBottom:"3rem" }}>
          {/* Brand */}
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:"0.85rem", marginBottom:"1.25rem" }}>
              <div style={{ width:42, height:42, background:T.navyMid, border:`1px solid ${T.gold}33`, borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.3rem" }}>⚖</div>
              <div>
                <div className="cin" style={{ fontSize:"0.55rem", letterSpacing:"0.2em", color:T.gold }}>İSTANBUL HUKUK BÜROSU</div>
                <div className="cg" style={{ fontSize:"1.05rem", fontWeight:700, color:T.white }}>Hukuk & Danışmanlık</div>
              </div>
            </div>
            <p className="out" style={{ color:"rgba(255,255,255,0.42)", fontSize:"0.88rem", lineHeight:1.8, marginBottom:"1.5rem", maxWidth:300, fontWeight:300 }}>
              İstanbul Barosu'na kayıtlı uzman avukat kadromuzla 15 yıldır hukuki süreçlerinizde güvenilir çözüm ortağınız.
            </p>
            <div style={{ display:"flex", gap:"0.55rem", flexWrap:"wrap" }}>
              {SOCIAL.map((s,i) => (
                <div key={i} style={{ width:32, height:32, background:"rgba(200,169,110,0.08)", border:`1px solid rgba(200,169,110,0.18)`, borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", fontSize:"0.75rem", color:T.gold, transition:"background .2s" }}
                onMouseOver={e => e.currentTarget.style.background="rgba(200,169,110,0.22)"}
                onMouseOut={e => e.currentTarget.style.background="rgba(200,169,110,0.08)"}>{s}</div>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <div className="cin" style={{ fontSize:"0.6rem", letterSpacing:"0.18em", color:T.gold, marginBottom:"1.2rem" }}>SAYFALAR</div>
            {LINKS.map(l => (
              <Link key={l.path} to={l.path} className="out" style={{ display:"block", color:"rgba(255,255,255,0.42)", fontSize:"0.88rem", marginBottom:"0.6rem", textDecoration:"none", transition:"color .2s", fontWeight:300 }}
              onMouseOver={e => e.target.style.color = T.gold}
              onMouseOut={e => e.target.style.color = "rgba(255,255,255,0.42)"}>{l.label}</Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <div className="cin" style={{ fontSize:"0.6rem", letterSpacing:"0.18em", color:T.gold, marginBottom:"1.2rem" }}>HİZMETLER</div>
            {SERVICES.map((s,i) => (
              <div key={i} className="out" style={{ color:"rgba(255,255,255,0.42)", fontSize:"0.88rem", marginBottom:"0.6rem", cursor:"pointer", fontWeight:300, transition:"color .2s" }}
              onMouseOver={e => e.target.style.color = T.gold}
              onMouseOut={e => e.target.style.color = "rgba(255,255,255,0.42)"}>{s}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div className="cin" style={{ fontSize:"0.6rem", letterSpacing:"0.18em", color:T.gold, marginBottom:"1.2rem" }}>İLETİŞİM</div>
            {[
              { icon:"📍", t:"Beyoğlu · Beşiktaş · Kadıköy\nİstanbul, Türkiye" },
              { icon:"📞", t:"0850 XXX XX XX" },
              { icon:"💬", t:"0532 XXX XX XX (WhatsApp)" },
              { icon:"✉️", t:"info@istanbulhukuk.av.tr" },
              { icon:"🕐", t:"Her gün 09:00 – 22:00" },
            ].map((item,i) => (
              <div key={i} style={{ display:"flex", gap:"0.6rem", marginBottom:"0.75rem", alignItems:"flex-start" }}>
                <span style={{ flexShrink:0, fontSize:"0.9rem", marginTop:1 }}>{item.icon}</span>
                <span className="out" style={{ color:"rgba(255,255,255,0.42)", fontSize:"0.85rem", lineHeight:1.5, whiteSpace:"pre-line", fontWeight:300 }}>{item.t}</span>
              </div>
            ))}
            <Link to="/contact" style={{ textDecoration:"none", display:"inline-block", marginTop:"0.75rem" }}>
              <button className="btn-gold" style={{ padding:"0.7rem 1.4rem", fontSize:"0.78rem" }}>Randevu Al →</button>
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop:"1px solid rgba(255,255,255,0.06)", paddingTop:"1.5rem", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"0.75rem" }}>
          <span className="out" style={{ color:"rgba(255,255,255,0.18)", fontSize:"0.78rem", fontWeight:300 }}>© 2025 İstanbul Hukuk Bürosu — Tüm Hakları Saklıdır.</span>
          <span className="out" style={{ color:"rgba(255,255,255,0.18)", fontSize:"0.78rem", fontWeight:300 }}>Bu site hukuki danışmanlık niteliği taşımaz.</span>
        </div>
      </div>
    </footer>
  );
}

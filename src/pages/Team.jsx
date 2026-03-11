import { Link } from "react-router-dom";
import { T, GLOBAL_CSS } from "../theme";
import { useW } from "../hooks/useW";

const TEAM = [
  { initials:"AY", name:"Av. [İsim] Yılmaz", area:"Ceza Hukuku",     title:"Kurucu Ortak", exp:"15 yıl", bio:"İstanbul Barosu üyesi. Ağır ceza davaları ve soruşturma aşamasından Yargıtay'a kadar etkin savunuculuk." },
  { initials:"SK", name:"Av. [İsim] Kaya",   area:"Aile Hukuku",     title:"Ortak",        exp:"11 yıl", bio:"İstanbul Barosu üyesi. Boşanma, velayet ve nafaka davalarında uzman; müvekkil odaklı ve empatik yaklaşım." },
  { initials:"MÇ", name:"Av. [İsim] Çelik",  area:"Ticaret Hukuku",  title:"Ortak",        exp:"9 yıl",  bio:"İstanbul Barosu üyesi. Şirketler hukuku, ticari uyuşmazlık ve sözleşme hukukunda kapsamlı deneyim." },
];

const OPEN = [
  { area:"İş Hukuku",       note:"Deneyimli avukat aranıyor" },
  { area:"Gayrimenkul",     note:"Stajyer avukat pozisyonu" },
];

export default function Team() {
  const { isMobile, isTablet, px } = useW();

  return (
    <div style={{ width:"100%", background:T.white }}>
      <style>{GLOBAL_CSS}</style>

      {/* Header */}
      <div className="page-header" style={{ padding: isMobile?"3.5rem 0 5rem":"5rem 0 6rem" }}>
        <div className="grid-bg" style={{ position:"absolute", inset:0 }}/>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:`0 ${px}`, position:"relative", zIndex:1 }}>
          <div className="cin" style={{ fontSize:"0.58rem", letterSpacing:"0.22em", color:T.gold, marginBottom:"0.75rem" }}>EKİBİMİZ</div>
          <h1 className="cg" style={{ fontSize: isMobile?"2.4rem":"3.5rem", fontWeight:700, color:T.white, lineHeight:1.15 }}>Uzman Avukat <span style={{ fontStyle:"italic", color:T.goldHover }}>Kadromuz</span></h1>
        </div>
      </div>

      {/* Team cards */}
      <section style={{ padding: isMobile?"4rem 0":"6rem 0", background:T.cream }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:`0 ${px}` }}>
          <div style={{ display:"grid", gridTemplateColumns: isMobile?"1fr":isTablet?"repeat(2,1fr)":"repeat(3,1fr)", gap:"1.5rem", marginBottom:"4rem" }}>
            {TEAM.map((m,i) => (
              <div key={i} className="card-hover" style={{ background:T.white, borderRadius:12, overflow:"hidden", border:`1px solid ${T.border}` }}>
                {/* Top gradient with avatar */}
                <div style={{ background:`linear-gradient(135deg,${T.navy},${T.navyMid})`, padding:"2rem", textAlign:"center", position:"relative", minHeight:200, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
                  <div style={{ position:"absolute", top:12, right:16 }}>
                    <span className="cin" style={{ fontSize:"0.6rem", letterSpacing:"0.14em", color:T.gold, opacity:0.6 }}>{m.exp}</span>
                  </div>
                  {/* Avatar placeholder - Lawyer emoji */}
                  <div style={{ width:110, height:110, background:`linear-gradient(135deg, ${T.gold}, ${T.goldHover})`, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 1rem", border:`3px solid rgba(255,255,255,0.2)`, position:"relative", overflow:"hidden", fontSize:"3rem" }}>
                    👨‍⚖️
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding:"1.5rem 1.75rem" }}>
                  <div className="cg" style={{ fontSize:"1.2rem", fontWeight:700, color:T.white, marginBottom:"0.2rem", background:`linear-gradient(135deg,${T.navy},${T.navyMid})`, padding:"0.5rem 0.75rem", borderRadius:4, textAlign:"center" }}>{m.name}</div>
                  <div className="cin" style={{ fontSize:"0.6rem", color:T.gold, letterSpacing:"0.1em", textAlign:"center", marginTop:"0.5rem" }}>{m.title.toUpperCase()} — {m.area.toUpperCase()}</div>
                  
                  <p className="out" style={{ fontSize:"0.88rem", color:T.textLight, lineHeight:1.75, fontWeight:300, marginBottom:"1.25rem", marginTop:"1rem" }}>{m.bio}</p>
                  
                  <div style={{ display:"flex", gap:"0.5rem", flexWrap:"wrap", marginBottom:"1.25rem" }}>
                    <span className="out" style={{ background:T.cream, border:`1px solid ${T.border}`, borderRadius:4, padding:"0.25rem 0.7rem", fontSize:"0.72rem", fontWeight:500, color:T.textMid }}>{m.area}</span>
                    <span className="out" style={{ background:"rgba(200,169,110,0.1)", border:`1px solid rgba(200,169,110,0.25)`, borderRadius:4, padding:"0.25rem 0.7rem", fontSize:"0.72rem", fontWeight:500, color:T.goldDark }}>{m.exp} deneyim</span>
                  </div>
                  
                  <Link to="/contact" style={{ textDecoration:"none" }}>
                    <button className="btn-gold" style={{ width:"100%", padding:"0.75rem", fontSize:"0.78rem" }}>Bu Avukatla Görüş →</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Open positions */}
          <div style={{ background:`linear-gradient(135deg,${T.navyMid},${T.navy})`, borderRadius:12, padding: isMobile?"2rem":"3rem" }}>
            <div style={{ marginBottom:"1.75rem" }}>
              <div className="cin" style={{ fontSize:"0.6rem", letterSpacing:"0.2em", color:T.gold, marginBottom:"0.6rem" }}>AÇIK POZİSYONLAR</div>
              <h3 className="cg" style={{ fontSize: isMobile?"1.6rem":"2rem", fontWeight:700, color:T.white, fontStyle:"italic" }}>Ekibimize Katılın</h3>
            </div>
            <div style={{ display:"grid", gridTemplateColumns: isMobile?"1fr":"repeat(2,1fr)", gap:"1rem", marginBottom:"2rem" }}>
              {OPEN.map((p,i) => (
                <div key={i} style={{ background:"rgba(255,255,255,0.06)", border:`1px solid rgba(200,169,110,0.2)`, borderRadius:8, padding:"1.25rem 1.5rem", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <div>
                    <div className="out" style={{ fontWeight:600, color:T.white, marginBottom:"0.2rem" }}>{p.area}</div>
                    <div className="out" style={{ fontSize:"0.8rem", color:"rgba(255,255,255,0.45)", fontWeight:300 }}>{p.note}</div>
                  </div>
                  <span style={{ color:T.gold, fontSize:"0.82rem", fontWeight:600 }}>→</span>
                </div>
              ))}
            </div>
            <Link to="/contact" style={{ textDecoration:"none" }}>
              <button className="btn-gold" style={{ padding:"0.9rem 2rem", fontSize:"0.84rem" }}>Başvuru Yap →</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

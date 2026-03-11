import { useState } from "react";

const T = {
  navy:    "#0B1628",
  navyMid: "#112040",
  copper:  "#D4956A",
  cream:   "#F5F1ED",
  white:   "#FFFFFF",
  gray:    "#6B6B75",
};

const TEAM = [
  { initials:"AY", name:"Av. [İsim] Yılmaz", title:"Kurucu Ortak — Ceza Hukuku" },
  { initials:"SK", name:"Av. [İsim] Kaya",   title:"Ortak — Aile Hukuku" },
  { initials:"MÇ", name:"Av. [İsim] Çelik",  title:"Ortak — Ticaret Hukuku" },
];

function useW() {
  const [w] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  return w;
}

export default function Team() {
  const w = useW();
  const isMobile = w < 640;
  const isTablet = w >= 640 && w < 1024;
  const px = isMobile ? "1.2rem" : "2rem";

  return (
    <div style={{ width: "100%", minHeight: "100vh", padding: isMobile?"4rem 0":"6rem 0", background: T.cream }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Josefin+Sans:wght@300;400;600;700&display=swap');
        .gara { font-family: 'EB Garamond', serif; }
        .jos { font-family: 'Josefin Sans', sans-serif; }
        .divider { width: 52px; height: 2px; background: ${T.copper}; margin: 0 auto; }
      `}</style>

      <div style={{ maxWidth:1200, margin:"0 auto", padding:`0 ${px}` }}>
        <div style={{ textAlign:"center", marginBottom: isMobile?"2.5rem":"3.5rem" }}>
          <div className="jos" style={{ fontSize:"0.62rem", letterSpacing:"0.22em", color: T.copper, textTransform:"uppercase", marginBottom:"0.5rem" }}>Ekibimiz</div>
          <h1 className="gara" style={{ fontSize: isMobile?"1.9rem":"2.8rem", fontWeight:700, color: T.navy }}>Uzman Avukat <span style={{ fontStyle:"italic", color: T.copper }}>Kadromuz</span></h1>
          <div className="divider" style={{ marginTop:"1.1rem" }}/>
        </div>

        <div style={{ display:"grid", gridTemplateColumns: isMobile?"1fr":isTablet?"repeat(2,1fr)":"repeat(3,1fr)", gap:"1.5rem" }}>
          {TEAM.map((m, i) => (
            <div key={i} style={{ background: T.white, padding:"2.25rem", textAlign:"center", border:`1px solid rgba(11,22,40,0.08)`, transition:"transform .3s, box-shadow .3s", cursor:"pointer" }}
            onMouseOver={e => { e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 14px 40px rgba(11,22,40,0.1)"; }}
            onMouseOut={e => { e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}>
              <div style={{ width:80, height:80, background:`linear-gradient(135deg, ${T.navy}, ${T.navyMid})`, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 1.25rem", border:`3px solid ${T.copper}` }}>
                <span className="jos" style={{ fontSize:"1.4rem", fontWeight:700, color: T.copper }}>{m.initials}</span>
              </div>
              <h3 className="gara" style={{ fontSize:"1.2rem", fontWeight:700, color: T.navy, marginBottom:"0.35rem" }}>{m.name}</h3>
              <p className="jos" style={{ fontSize:"0.68rem", color: T.copper, letterSpacing:"0.1em", textTransform:"uppercase" }}>{m.title}</p>
              <div style={{ width:32, height:1.5, background: T.copper, margin:"1rem auto", opacity:0.5 }}/>
              <p className="gara" style={{ fontSize:"0.92rem", color: T.gray, lineHeight:1.65 }}>İstanbul Barosu üyesi. Müvekkil odaklı ve sonuç yönelimli hizmet anlayışıyla çalışmaktadır.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

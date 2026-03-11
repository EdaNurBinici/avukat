import { useState } from "react";

const T = {
  navy:    "#0B1628",
  navyMid: "#112040",
  copper:  "#D4956A",
  white:   "#FFFFFF",
  gray:    "#6B6B75",
};

function useW() {
  const [w] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  return w;
}

export default function About() {
  const w = useW();
  const isMobile = w < 640;
  const isDesktop = w >= 1024;
  const px = isMobile ? "1.2rem" : "2rem";

  return (
    <div style={{ width: "100%", minHeight: "100vh", padding: isMobile?"4rem 0":"6.5rem 0", background: T.white }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Josefin+Sans:wght@300;400;600;700&display=swap');
        .gara { font-family: 'EB Garamond', serif; }
        .jos { font-family: 'Josefin Sans', sans-serif; }
      `}</style>

      <div style={{ maxWidth:1200, margin:"0 auto", padding:`0 ${px}` }}>
        <div style={{ display:"grid", gridTemplateColumns: isDesktop?"1fr 1fr":"1fr", gap: isMobile?"2.5rem":"5rem", alignItems:"center" }}>
          <div style={{ position:"relative" }}>
            <div style={{ background:`linear-gradient(145deg, ${T.navy} 0%, ${T.navyMid} 100%)`, padding: isMobile?"2rem":"3rem", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:0, right:0, width:80, height:80, borderTop:`3px solid ${T.copper}`, borderRight:`3px solid ${T.copper}` }}/>
              <div style={{ position:"absolute", bottom:0, left:0, width:80, height:80, borderBottom:`3px solid ${T.copper}`, borderLeft:`3px solid ${T.copper}` }}/>

              <div className="jos" style={{ fontSize:"0.62rem", letterSpacing:"0.2em", color: T.copper, marginBottom:"0.75rem" }}>BİZ KİMİZ?</div>
              <h2 className="gara" style={{ fontSize: isMobile?"1.8rem":"2.4rem", fontWeight:700, color: T.white, marginBottom:"1.25rem", lineHeight:1.2 }}>İstanbul Hukuk Bürosu<br/><span style={{ fontStyle:"italic", color: "#E8B896" }}>Neden Biz?</span></h2>
              <p className="gara" style={{ color: "#C8C4BC", lineHeight:1.85, fontSize:"1.05rem", marginBottom:"1.75rem" }}>İstanbul'un kültürel ve ticari kalbinde, Beyoğlu, Beşiktaş ve Kadıköy'de ofislerimizle müvekkillerimize ulaşıyoruz. Her davaya özgün stratejik yaklaşım, şeffaf iletişim ve sonuç odaklı hizmet anlayışımızla fark yaratıyoruz.</p>

              <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1rem", borderTop:`1px solid rgba(212,149,106,0.2)`, paddingTop:"1.5rem" }}>
                {[{ n:"15+", l:"Yıl" }, { n:"800+", l:"Dava" }, { n:"12", l:"Uzman" }].map(s => (
                  <div key={s.l} style={{ textAlign:"center" }}>
                    <div className="jos" style={{ fontSize: isMobile?"1.6rem":"2rem", fontWeight:700, color: T.copper }}>{s.n}</div>
                    <div className="jos" style={{ fontSize:"0.62rem", color: T.gray, letterSpacing:"0.1em" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div style={{ width:52, height:2, background: T.copper, marginBottom:"1.25rem" }}/>
            <h2 className="gara" style={{ fontSize: isMobile?"1.9rem":"2.5rem", fontWeight:700, lineHeight:1.2, marginBottom:"1.25rem" }}>Hukukta Stratejik<br/><span style={{ fontStyle:"italic", color: T.copper }}>Güç ve Deneyim</span></h2>
            <p className="gara" style={{ color:"#555", lineHeight:1.85, fontSize:"1.05rem", marginBottom:"1rem" }}>İstanbul Hukuk Bürosu olarak müvekkil odaklı çalışma prensibimizle her davada en iyi sonucu hedefleyerek hareket ediyoruz. Boşanma, ceza, iş ve ticaret hukuku başta olmak üzere geniş bir pratikte derinlemesine uzmanlık sunuyoruz.</p>
            <p className="gara" style={{ color:"#555", lineHeight:1.85, fontSize:"1.05rem", marginBottom:"2rem" }}>İstanbul Barosu'na kayıtlı avukat kadromuz, her müvekkili bireysel olarak değerlendirerek hukuki süreçlerin her adımında şeffaf ve etkin temsil sağlamaktadır.</p>

            {["Bireysel müvekkil-avukat ilişkisi, kalabalık ofis değil","Her davada yazılı strateji planı","7/24 WhatsApp iletişim kanalı","İstanbul Barosu üyesi uzman ekip",].map((item, i) => (
              <div key={i} style={{ display:"flex", gap:"0.75rem", alignItems:"flex-start", marginBottom:"0.75rem" }}>
                <div style={{ width:20, height:20, background: T.navy, borderRadius:"50%", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", marginTop:2 }}>
                  <span style={{ color: T.copper, fontSize:"0.65rem", fontWeight:700 }}>✓</span>
                </div>
                <span className="gara" style={{ fontSize:"1rem", color:"#444", lineHeight:1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

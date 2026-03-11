import { useState } from "react";

const T = {
  navy:    "#0B1628",
  navyMid: "#112040",
  copper:  "#D4956A",
  white:   "#FFFFFF",
  gray:    "#6B6B75",
};

const ARTICLES = [
  { tag:"Boşanma Hukuku", date:"12 Mayıs 2025",title:"İstanbul'da Anlaşmalı Boşanma Süreci: Adım Adım Rehber",excerpt:"Anlaşmalı boşanmada protokol hazırlığından mahkeme duruşmasına kadar bilmeniz gereken her şey." },
  { tag:"Ceza Hukuku", date:"3 Nisan 2025",title:"Gözaltında Haklarınız: Avukat Talep Etmek Neden Hayati?",excerpt:"Karakolda ifade verirken yapılan hatalar davayı kökten etkiler. Susma hakkı ve avukat talebi hakkında." },
  { tag:"İş Hukuku", date:"18 Mart 2025",title:"Haksız İşten Çıkarmada Tazminat Hesabı 2025",excerpt:"Kıdem ve ihbar tazminatı hesaplama yöntemleri, güncel Yargıtay içtihatları ve dikkat edilmesi gereken detaylar." },
];

function useW() {
  const [w] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  return w;
}

export default function Articles() {
  const w = useW();
  const isMobile = w < 640;
  const isTablet = w >= 640 && w < 1024;
  const px = isMobile ? "1.2rem" : "2rem";

  return (
    <div style={{ width: "100%", minHeight: "100vh", padding: isMobile?"4rem 0":"6.5rem 0", background: T.white }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Josefin+Sans:wght@300;400;600;700&display=swap');
        .gara { font-family: 'EB Garamond', serif; }
        .jos { font-family: 'Josefin Sans', sans-serif; }
        .art-card { cursor: pointer; transition: box-shadow .3s, transform .3s; }
        .art-card:hover { box-shadow: 0 12px 36px rgba(11,22,40,0.1); transform: translateY(-4px); }
        .art-card:hover .art-title { color: ${T.copper}; }
        .tag {
          font-family: 'Josefin Sans', sans-serif; font-size: 0.62rem;
          font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
          padding: 0.25rem 0.7rem; border-radius: 2px;
        }
      `}</style>

      <div style={{ maxWidth:1200, margin:"0 auto", padding:`0 ${px}` }}>
        <div style={{ textAlign:"center", marginBottom: isMobile?"2.5rem":"3.5rem" }}>
          <div className="jos" style={{ fontSize:"0.62rem", letterSpacing:"0.22em", color: T.copper, textTransform:"uppercase", marginBottom:"0.5rem" }}>Hukuk Blogu</div>
          <h1 className="gara" style={{ fontSize: isMobile?"1.9rem":"2.8rem", fontWeight:700, color: T.navy }}>Son <span style={{ fontStyle:"italic", color: T.copper }}>Yazılarımız</span></h1>
        </div>

        <div style={{ display:"grid", gridTemplateColumns: isMobile?"1fr":isTablet?"repeat(2,1fr)":"repeat(3,1fr)", gap:"1.75rem" }}>
          {ARTICLES.map((a, i) => (
            <article key={i} className="art-card" style={{ background: T.white, border:`1px solid rgba(11,22,40,0.08)`, overflow:"hidden" }}>
              <div style={{ height:4, background:`linear-gradient(90deg, ${T.navy}, ${T.copper})` }}/>
              <div style={{ background:`linear-gradient(135deg, ${T.navy} 0%, ${T.navyMid} 100%)`, padding: isMobile?"1.5rem":"2rem", minHeight:130, display:"flex", alignItems:"flex-end" }}>
                <div>
                  <span className="tag" style={{ background:"rgba(212,149,106,0.2)", border:`1px solid rgba(212,149,106,0.4)`, color: "#E8B896" }}>{a.tag}</span>
                  <div className="jos" style={{ fontSize:"0.65rem", color: T.gray, marginTop:"0.6rem", letterSpacing:"0.08em" }}>{a.date}</div>
                </div>
              </div>
              <div style={{ padding: isMobile?"1.25rem":"1.75rem" }}>
                <h3 className="gara art-title" style={{ fontSize:"1.2rem", fontWeight:700, color: T.navy, marginBottom:"0.75rem", lineHeight:1.35, transition:"color .3s" }}>{a.title}</h3>
                <p className="gara" style={{ fontSize:"0.97rem", color: T.gray, lineHeight:1.7, marginBottom:"1.25rem" }}>{a.excerpt}</p>
                <div style={{ display:"flex", alignItems:"center", gap:"0.4rem", color: T.copper, cursor:"pointer" }}>
                  <span className="jos" style={{ fontSize:"0.68rem", letterSpacing:"0.12em" }}>DEVAMINI OKU</span>
                  <span>→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

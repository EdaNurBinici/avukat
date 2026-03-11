import { Link } from "react-router-dom";
import { T, GLOBAL_CSS } from "../theme";
import { useW } from "../hooks/useW";

const CHECK_ITEMS = [
  "Bireysel müvekkil-avukat ilişkisi — kalabalık ofis değil",
  "Her davada yazılı strateji ve süreç planı",
  "7/24 WhatsApp & telefon iletişim kanalı",
  "İstanbul Barosu üyesi deneyimli uzman ekip",
  "Şeffaf ücretlendirme, gizli maliyet yok",
  "Aynı gün randevu ve hızlı yanıt garantisi",
];

const VALUES = [
  { icon:"🎯", title:"Sonuç Odaklılık",  desc:"Her davada somut ve ölçülü hedefler belirler, müvekkilimiz lehine en iyi sonucu alırız." },
  { icon:"🤝", title:"Güven",            desc:"Avukat-müvekkil ilişkisinin temeli güvene dayanır. Her bilgi ve süreci şeffaflıkla paylaşırız." },
  { icon:"💡", title:"Güncel Bilgi",      desc:"Değişen mevzuatı ve Yargıtay içtihatlarını sürekli takip eder, en güncel stratejiyi sunarız." },
  { icon:"⚡", title:"Hız & Proaktiflik", desc:"Hukuki süreçlerde zaman kritiktir. Hızlı aksiyon ve öngörülü yaklaşımımızla fark yaratırız." },
];

export default function About() {
  const { isMobile, isTablet, isDesktop, px } = useW();

  return (
    <div style={{ width:"100%", background:T.white }}>
      <style>{GLOBAL_CSS}</style>

      {/* Header */}
      <div className="page-header" style={{ padding: isMobile?"3.5rem 0 5rem":"5rem 0 6rem" }}>
        <div className="grid-bg" style={{ position:"absolute", inset:0 }}/>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:`0 ${px}`, position:"relative", zIndex:1 }}>
          <div className="cin" style={{ fontSize:"0.58rem", letterSpacing:"0.22em", color:T.gold, marginBottom:"0.75rem" }}>BİZ KİMİZ?</div>
          <h1 className="cg" style={{ fontSize: isMobile?"2.4rem":"3.5rem", fontWeight:700, color:T.white, lineHeight:1.15 }}>İstanbul'un <span style={{ fontStyle:"italic", color:T.goldHover }}>Güvenilir</span><br/>Hukuk Bürosu</h1>
        </div>
      </div>

      {/* Main section */}
      <section style={{ padding: isMobile?"4rem 0":"6.5rem 0", background:T.cream }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:`0 ${px}` }}>
          <div style={{ display:"grid", gridTemplateColumns: isDesktop?"1fr 1fr":"1fr", gap: isMobile?"2.5rem":"5rem", alignItems:"center" }}>
            {/* Visual card with lawyer avatar */}
            <div style={{ position:"relative" }}>
              <div style={{ background:`linear-gradient(145deg,${T.navy},${T.navyMid})`, padding: isMobile?"2.5rem":"3.5rem", borderRadius:14, position:"relative", overflow:"hidden", minHeight:400, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
                <div style={{ position:"absolute", top:0, right:0, width:90, height:90, borderTop:`3px solid ${T.gold}`, borderRight:`3px solid ${T.gold}`, borderTopRightRadius:14 }}/>
                <div style={{ position:"absolute", bottom:0, left:0, width:90, height:90, borderBottom:`3px solid ${T.gold}`, borderLeft:`3px solid ${T.gold}`, borderBottomLeftRadius:14 }}/>

                {/* Large lawyer avatar */}
                <div style={{ width:160, height:160, background:`linear-gradient(135deg, ${T.gold}, ${T.goldHover})`, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", border:`4px solid rgba(255,255,255,0.2)`, fontSize:"5rem", marginBottom:"2rem", position:"relative", zIndex:1 }}>
                  👨‍⚖️
                </div>

                <div className="cin" style={{ fontSize:"0.58rem", letterSpacing:"0.2em", color:T.gold, marginBottom:"0.8rem", position:"relative", zIndex:1 }}>İSTANBUL HUKUK BÜROSU</div>
                <h2 className="cg" style={{ fontSize: isMobile?"1.8rem":"2.5rem", fontWeight:700, color:T.white, marginBottom:"1.25rem", lineHeight:1.2, textAlign:"center", position:"relative", zIndex:1 }}>15 Yıldır<br/><span style={{ fontStyle:"italic", color:T.goldHover }}>Yanınızdayız</span></h2>
                <p className="out" style={{ color:"rgba(248,244,239,0.65)", lineHeight:1.85, fontSize:"0.95rem", marginBottom:"2rem", fontWeight:300, textAlign:"center", position:"relative", zIndex:1, maxWidth:300 }}>İstanbul'un kültürel ve ticari kalbinde, Beyoğlu, Beşiktaş ve Kadıköy'deki ofislerimizle her müvekkilimize özel, stratejik ve şeffaf hukuki hizmet sunuyoruz.</p>

                <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1rem", borderTop:`1px solid rgba(200,169,110,0.18)`, paddingTop:"1.75rem", width:"100%", position:"relative", zIndex:1 }}>
                  {[{ n:"15+", l:"Yıl" }, { n:"800+", l:"Dava" }, { n:"12", l:"Uzman" }].map(s => (
                    <div key={s.l} style={{ textAlign:"center" }}>
                      <div className="cg" style={{ fontSize: isMobile?"1.8rem":"2.3rem", fontWeight:700, color:T.gold }}>{s.n}</div>
                      <div className="cin" style={{ fontSize:"0.55rem", color:"rgba(255,255,255,0.35)", letterSpacing:"0.12em" }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {!isMobile && <div style={{ position:"absolute", bottom:-16, right:-16, width:110, height:110, background:T.gold, borderRadius:10, zIndex:-1, opacity:0.1 }}/>}
            </div>

            {/* Text */}
            <div>
              <div className="gold-line" style={{ marginBottom:"1.4rem" }}/>
              <h2 className="cg" style={{ fontSize: isMobile?"2rem":"2.6rem", fontWeight:700, lineHeight:1.2, marginBottom:"1.25rem" }}>Hukukta Stratejik<br/><span style={{ fontStyle:"italic", color:T.gold }}>Güç ve Deneyim</span></h2>
              <p className="out" style={{ color:T.textMid, lineHeight:1.85, fontSize:"0.95rem", marginBottom:"1rem", fontWeight:300 }}>İstanbul Hukuk Bürosu olarak, müvekkil odaklı çalışma prensibimizle her davada en iyi sonucu hedefleyerek hareket ediyoruz. Boşanma, ceza, iş ve ticaret hukuku başta olmak üzere geniş bir pratikte derin uzmanlık sunuyoruz.</p>
              <p className="out" style={{ color:T.textMid, lineHeight:1.85, fontSize:"0.95rem", marginBottom:"2rem", fontWeight:300 }}>İstanbul Barosu'na kayıtlı avukat kadromuz, her müvekkili bireysel olarak değerlendirerek hukuki süreçlerin her adımında şeffaf ve etkin temsil sağlamaktadır.</p>

              {CHECK_ITEMS.map((item,i) => (
                <div key={i} style={{ display:"flex", gap:"0.75rem", alignItems:"flex-start", marginBottom:"0.75rem" }}>
                  <div style={{ width:22, height:22, background:T.navy, borderRadius:"50%", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", marginTop:1 }}>
                    <span style={{ color:T.gold, fontSize:"0.65rem", fontWeight:700 }}>✓</span>
                  </div>
                  <span className="out" style={{ fontSize:"0.9rem", color:T.textMid, lineHeight:1.55, fontWeight:300 }}>{item}</span>
                </div>
              ))}

              <div style={{ display:"flex", gap:"0.9rem", marginTop:"2.25rem", flexWrap:"wrap" }}>
                <Link to="/contact" style={{ textDecoration:"none" }}>
                  <button className="btn-gold" style={{ padding:"0.9rem 2rem" }}>🗓 Randevu Al</button>
                </Link>
                <Link to="/team" style={{ textDecoration:"none" }}>
                  <button className="btn-ghost-dark" style={{ padding:"0.88rem 1.8rem" }}>Ekibimiz →</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: isMobile?"4rem 0":"5.5rem 0", background:T.white }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:`0 ${px}` }}>
          <div style={{ textAlign:"center", marginBottom: isMobile?"2.5rem":"3.5rem" }}>
            <div className="cin" style={{ fontSize:"0.6rem", letterSpacing:"0.22em", color:T.gold, marginBottom:"0.5rem" }}>DEĞERLERİMİZ</div>
            <h2 className="cg" style={{ fontSize: isMobile?"1.9rem":"2.6rem", fontWeight:700, color:T.navy }}>Bizi <span style={{ fontStyle:"italic", color:T.gold }}>Farklı Kılan</span></h2>
          </div>

          <div style={{ display:"grid", gridTemplateColumns: isMobile?"1fr":isTablet?"repeat(2,1fr)":"repeat(4,1fr)", gap:"1.5rem" }}>
            {VALUES.map((v,i) => (
              <div key={i} className="card-hover" style={{ background:T.cream, padding:"2rem 1.75rem", borderRadius:10, textAlign:"center", border:`1px solid ${T.border}` }}>
                <div style={{ fontSize:"2.5rem", marginBottom:"1rem" }}>{v.icon}</div>
                <h3 className="out" style={{ fontSize:"1rem", fontWeight:700, color:T.navy, marginBottom:"0.6rem" }}>{v.title}</h3>
                <p className="out" style={{ fontSize:"0.86rem", color:T.textLight, lineHeight:1.75, fontWeight:300 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:T.navy, padding: isMobile?"3.5rem 0":"5rem 0", textAlign:"center" }}>
        <div style={{ maxWidth:600, margin:"0 auto", padding:`0 ${px}` }}>
          <h2 className="cg" style={{ fontSize: isMobile?"2rem":"2.7rem", fontWeight:700, color:T.white, marginBottom:"1rem", lineHeight:1.15 }}>Davayı Birlikte <span style={{ fontStyle:"italic", color:T.goldHover }}>Değerlendirelim</span></h2>
          <p className="out" style={{ color:"rgba(255,255,255,0.55)", marginBottom:"2rem", lineHeight:1.85, fontWeight:300 }}>İlk görüşme ücretsizdir. 30 dakikada hukuki durumunuzu değerlendirin.</p>
          <div style={{ display:"flex", gap:"0.9rem", justifyContent:"center", flexWrap:"wrap" }}>
            <Link to="/contact" style={{ textDecoration:"none" }}>
              <button className="btn-gold" style={{ padding:"1rem 2.4rem", fontSize:"0.88rem" }}>🗓 Ücretsiz Görüşme Al</button>
            </Link>
            <a href="tel:0850XXXXXXX" style={{ textDecoration:"none" }}>
              <button className="btn-ghost-white" style={{ padding:"0.97rem 1.8rem", fontSize:"0.86rem" }}>📞 Hemen Ara</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

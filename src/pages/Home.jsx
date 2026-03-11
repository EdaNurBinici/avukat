import { Link } from "react-router-dom";
import { T, GLOBAL_CSS } from "../theme";
import { useW } from "../hooks/useW";
import Themis from "../components/Themis";

const STATS = [
  { n:"15+",  l:"Yıllık Deneyim" },
  { n:"800+", l:"Başarılı Dava" },
  { n:"%96",  l:"Müvekkil Memnuniyeti" },
  { n:"12",   l:"Uzman Avukat" },
];

const SERVICES_PREV = [
  { emoji:"👨‍👩‍👧", title:"Aile & Boşanma Hukuku",    short:"Anlaşmalı & çekişmeli boşanma, velayet, nafaka." },
  { emoji:"⚖️",    title:"Ceza Hukuku",               short:"Karakoldan Yargıtay'a her aşamada etkin savunma." },
  { emoji:"📋",    title:"İcra & İflas Hukuku",        short:"Alacak takibi, haciz, itiraz ve iflas süreçleri." },
  { emoji:"🏠",    title:"Kira & Tahliye Hukuku",      short:"Kira uyuşmazlıkları ve tahliye davaları." },
  { emoji:"💼",    title:"İş & Sosyal Güvenlik",       short:"Kıdem, ihbar, haksız fesih ve iş kazası." },
  { emoji:"🏢",    title:"Ticaret & Şirketler Hukuku", short:"Şirket kuruluşu, sözleşme ve ticari uyuşmazlık." },
  { emoji:"🗺️",   title:"Gayrimenkul Hukuku",         short:"Tapu iptali, imar ve kamulaştırma davaları." },
];

const WHY = [
  { icon:"🎯", title:"Sonuç Odaklı",   desc:"Her davada somut hedefler belirler, müvekkilimizin lehine en iyi sonucu alırız." },
  { icon:"🔒", title:"Tam Gizlilik",   desc:"Paylaştığınız her bilgi avukat-müvekkil sırrı çerçevesinde korunur." },
  { icon:"📱", title:"7/24 Erişim",    desc:"WhatsApp, telefon ve e-posta ile her zaman ulaşabilirsiniz." },
  { icon:"💰", title:"Şeffaf Ücret",   desc:"Gizli maliyet yok. Başlangıçta net fiyat, net hizmet kapsamı." },
];

const TESTIMONIALS = [
  { q:"Boşanma sürecimde hem hukuki hem insani açıdan muhteşem destek aldım. Velayet davamı en iyi şekilde sonuçlandırdılar.", name:"M. K.", role:"Müvekkil" },
  { q:"Ceza davamda karakoldan Yargıtay'a her aşamada yanımdaydılar. Beraat kararıyla sonuçlandı.", name:"A. T.", role:"Müvekkil" },
  { q:"Şirketimizin ticari anlaşmazlığında hızlı ve etkili çözüm ürettiler. Kesinlikle tavsiye ederim.", name:"E. B.", role:"Şirket Ortağı" },
];

export default function Home() {
  const { isMobile, isTablet, isDesktop, px } = useW();

  return (
    <div style={{ width:"100%" }}>
      <style>{GLOBAL_CSS}</style>

      {/* ══ HERO ══ */}
      <section style={{
        background:`linear-gradient(135deg,${T.dark} 0%,${T.navy} 50%,${T.navyMid} 100%)`,
        color:T.white, position:"relative", overflow:"hidden",
        minHeight: isMobile ? "auto" : 660, display:"flex", alignItems:"center",
      }}>
        <div className="grid-bg" style={{ position:"absolute", inset:0 }}/>
        <div style={{ position:"absolute", right:"4%", top:"15%", width:520, height:520, background:`radial-gradient(circle,${T.goldGlow} 0%,transparent 65%)`, pointerEvents:"none" }}/>
        <div style={{ position:"absolute", bottom:-2, left:0, right:0, height:80, background:T.cream, clipPath:"polygon(0 100%,100% 5%,100% 100%)", zIndex:2 }}/>

        <div style={{ maxWidth:1200, margin:"0 auto", padding:`${isMobile?"4.5rem":"5.5rem"} ${px} ${isMobile?"5.5rem":"7rem"}`, display:"grid", gridTemplateColumns: isDesktop?"1fr 360px":"1fr", gap: isDesktop?"4rem":"0", alignItems:"center", position:"relative", zIndex:1, width:"100%" }}>
          <div className="fu">
            {/* Badge */}
            <div style={{ display:"inline-flex", alignItems:"center", gap:"0.5rem", background:"rgba(200,169,110,0.12)", border:`1px solid rgba(200,169,110,0.28)`, borderRadius:4, padding:"0.4rem 1rem", marginBottom:"2rem" }}>
              <span style={{ fontSize:"0.8rem" }}>📍</span>
              <span className="cin" style={{ fontSize:"0.58rem", letterSpacing:"0.16em", color:T.goldHover }}>BEYOĞLU · BEŞİKTAŞ · KADIKÖY — İSTANBUL</span>
            </div>

            <h1 className="cg" style={{ fontWeight:700, lineHeight:1.08, marginBottom:"1.5rem" }}>
              <span style={{ fontSize: isMobile?"2.3rem":isTablet?"3rem":"3.9rem", display:"block", fontStyle:"italic", color:T.goldHover }}>İstanbul'un</span>
              <span style={{ fontSize: isMobile?"2.7rem":isTablet?"3.5rem":"4.6rem", display:"block" }}>Güvenilir</span>
              <span style={{ fontSize: isMobile?"2.7rem":isTablet?"3.5rem":"4.6rem", display:"block" }}>Hukuk Bürosu</span>
            </h1>

            <div className="gold-line" style={{ marginBottom:"1.5rem" }}/>

            <p className="out" style={{ fontSize: isMobile?"1rem":"1.08rem", color:"rgba(248,244,239,0.7)", lineHeight:1.9, marginBottom:"2.25rem", maxWidth:530, fontWeight:300 }}>
              15 yılı aşkın deneyimimiz ve uzman avukat kadromuzla <strong style={{ color:"rgba(248,244,239,0.95)", fontWeight:500 }}>Aile, Ceza, İş ve Ticaret Hukuku</strong> başta olmak üzere her hukuki süreçte yanınızdayız.
            </p>

            <div style={{ display:"flex", gap:"0.9rem", flexWrap:"wrap", marginBottom:"2rem" }}>
              <Link to="/contact" style={{ textDecoration:"none" }}>
                <button className="btn-gold" style={{ padding: isMobile?"0.9rem 1.6rem":"1rem 2.2rem", fontSize:"0.84rem" }}>🗓 Ücretsiz Ön Görüşme</button>
              </Link>
              <Link to="/services" style={{ textDecoration:"none" }}>
                <button className="btn-ghost-white" style={{ padding: isMobile?"0.88rem 1.5rem":"0.97rem 2rem", fontSize:"0.84rem" }}>Hizmetlerimiz →</button>
              </Link>
            </div>

            {/* Trust chips */}
            <div style={{ display:"flex", gap:"1.25rem", flexWrap:"wrap" }}>
              {["✅ İstanbul Barosu Üyesi", "🔒 Gizlilik Garantisi", "📞 Aynı Gün Yanıt"].map((b,i) => (
                <span key={i} className="out" style={{ fontSize:"0.76rem", color:"rgba(248,244,239,0.45)", fontWeight:300 }}>{b}</span>
              ))}
            </div>
          </div>

          {/* Themis */}
          {!isMobile && (
            <div className="float fu2" style={{ display:"flex", justifyContent:"center", alignItems:"flex-end" }}>
              <Themis maxWidth={isTablet ? 260 : 340} />
            </div>
          )}
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section style={{ background:T.navy }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:`0 ${px}`, display:"grid", gridTemplateColumns: isMobile?"repeat(2,1fr)":"repeat(4,1fr)" }}>
          {STATS.map((s,i) => (
            <div key={i} className="stat-sep" style={{ textAlign:"center", padding: isMobile?"1.5rem 0.5rem":"2.25rem 1rem" }}>
              <div className="cg" style={{ fontSize: isMobile?"2.2rem":"2.9rem", fontWeight:700, color:T.gold, letterSpacing:"-0.02em" }}>{s.n}</div>
              <div className="cin" style={{ fontSize:"0.58rem", color:"rgba(255,255,255,0.38)", letterSpacing:"0.16em", marginTop:"0.3rem" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ SERVICES PREVIEW ══ */}
      <section style={{ padding: isMobile?"4rem 0":"6.5rem 0", background:T.cream }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:`0 ${px}` }}>
          <div style={{ textAlign:"center", marginBottom: isMobile?"2.5rem":"4rem" }}>
            <div className="cin" style={{ fontSize:"0.6rem", letterSpacing:"0.22em", color:T.gold, marginBottom:"0.65rem" }}>ÇALIŞMA ALANLARIMIZ</div>
            <h2 className="cg" style={{ fontSize: isMobile?"2rem":"2.9rem", fontWeight:700, color:T.navy, lineHeight:1.2 }}>Her Hukuki Meselede<br/><span style={{ fontStyle:"italic", color:T.gold }}>Stratejik Çözüm</span></h2>
            <div className="gold-line gold-line-c" style={{ marginTop:"1.25rem" }}/>
          </div>

          <div style={{ display:"grid", gridTemplateColumns: isMobile?"1fr 1fr":isTablet?"repeat(3,1fr)":"repeat(4,1fr)", gap: isMobile?"0.9rem":"1.25rem" }}>
            {SERVICES_PREV.map((s,i) => (
              <Link key={i} to="/services" style={{ textDecoration:"none" }}>
                <div className="card-hover" style={{ background:T.white, border:`1px solid ${T.border}`, borderRadius:10, padding: isMobile?"1.2rem":"1.65rem", height:"100%", cursor:"pointer" }}>
                  <div style={{ fontSize: isMobile?"1.7rem":"2.1rem", marginBottom:"0.7rem" }}>{s.emoji}</div>
                  <h3 className="out" style={{ fontSize: isMobile?"0.8rem":"0.9rem", fontWeight:700, color:T.textDark, marginBottom:"0.5rem", lineHeight:1.35 }}>{s.title}</h3>
                  <p className="out" style={{ fontSize:"0.8rem", color:T.textLight, lineHeight:1.65, fontWeight:300 }}>{s.short}</p>
                  <div style={{ marginTop:"0.85rem", color:T.gold, fontSize:"0.72rem", fontWeight:600, display:"flex", alignItems:"center", gap:"0.25rem" }}>Detaylar →</div>
                </div>
              </Link>
            ))}

            {/* CTA tile */}
            <div style={{ background:`linear-gradient(135deg,${T.navy},${T.navyMid})`, borderRadius:10, padding: isMobile?"1.2rem":"1.65rem", display:"flex", flexDirection:"column", justifyContent:"space-between", gap:"1rem" }}>
              <div>
                <div style={{ fontSize:"1.8rem", marginBottom:"0.6rem" }}>📌</div>
                <h3 className="cg" style={{ fontSize: isMobile?"1rem":"1.15rem", color:T.white, fontStyle:"italic", lineHeight:1.3 }}>Tüm hizmet alanlarımızı keşfedin</h3>
              </div>
              <Link to="/services" style={{ textDecoration:"none" }}>
                <button className="btn-gold" style={{ width:"100%", padding:"0.8rem", fontSize:"0.78rem" }}>Tüm Hizmetler →</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY US ══ */}
      <section style={{ padding: isMobile?"4rem 0":"5.5rem 0", background:T.white }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:`0 ${px}` }}>
          <div style={{ textAlign:"center", marginBottom: isMobile?"2rem":"3.5rem" }}>
            <div className="cin" style={{ fontSize:"0.6rem", letterSpacing:"0.22em", color:T.gold, marginBottom:"0.5rem" }}>NEDEN BİZ?</div>
            <h2 className="cg" style={{ fontSize: isMobile?"1.9rem":"2.6rem", fontWeight:700, color:T.navy }}>Bizi <span style={{ fontStyle:"italic", color:T.gold }}>Farklı Kılan</span> Nedir?</h2>
          </div>

          <div style={{ display:"grid", gridTemplateColumns: isMobile?"1fr":isTablet?"repeat(2,1fr)":"repeat(4,1fr)", gap:"1.5rem" }}>
            {WHY.map((w,i) => (
              <div key={i} className="card-hover" style={{ textAlign:"center", padding:"2rem 1.5rem", border:`1px solid ${T.border}`, borderRadius:10, background:T.white }}>
                <div style={{ fontSize:"2.5rem", marginBottom:"1rem" }}>{w.icon}</div>
                <h3 className="out" style={{ fontSize:"1rem", fontWeight:700, color:T.navy, marginBottom:"0.6rem" }}>{w.title}</h3>
                <p className="out" style={{ fontSize:"0.86rem", color:T.textLight, lineHeight:1.75, fontWeight:300 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section style={{ padding: isMobile?"4rem 0":"5.5rem 0", background:T.cream }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:`0 ${px}` }}>
          <div style={{ textAlign:"center", marginBottom: isMobile?"2.5rem":"3.5rem" }}>
            <div className="cin" style={{ fontSize:"0.6rem", letterSpacing:"0.22em", color:T.gold, marginBottom:"0.5rem" }}>MÜVEKKİL GÖRÜŞLERİ</div>
            <h2 className="cg" style={{ fontSize: isMobile?"1.9rem":"2.6rem", fontWeight:700, color:T.navy }}>Müvekkillerimiz <span style={{ fontStyle:"italic", color:T.gold }}>Ne Diyor?</span></h2>
          </div>

          <div style={{ display:"grid", gridTemplateColumns: isMobile?"1fr":isTablet?"repeat(2,1fr)":"repeat(3,1fr)", gap:"1.5rem" }}>
            {TESTIMONIALS.map((t,i) => (
              <div key={i} style={{ background:T.white, border:`1px solid ${T.border}`, borderRadius:10, padding: isMobile?"1.5rem":"2rem" }}>
                <div className="cg" style={{ fontSize:"2.8rem", color:T.gold, opacity:0.2, lineHeight:1, marginBottom:"0.5rem" }}>"</div>
                <p className="cg" style={{ fontSize:"1.08rem", color:T.textMid, lineHeight:1.8, fontStyle:"italic", marginBottom:"1.25rem" }}>{t.q}</p>
                <div style={{ display:"flex", alignItems:"center", gap:"0.75rem" }}>
                  <div style={{ width:38, height:38, background:T.navy, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <span className="cin" style={{ fontSize:"0.72rem", color:T.gold, fontWeight:700 }}>{t.name[0]}</span>
                  </div>
                  <div>
                    <div className="out" style={{ fontSize:"0.84rem", fontWeight:600, color:T.navy }}>{t.name}</div>
                    <div className="out" style={{ fontSize:"0.72rem", color:T.textMuted }}>{t.role}</div>
                  </div>
                  <div style={{ marginLeft:"auto", color:T.gold, fontSize:"0.82rem" }}>★★★★★</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <section style={{ background:`linear-gradient(135deg,${T.dark},${T.navy})`, padding: isMobile?"3.5rem 0":"5rem 0", position:"relative", overflow:"hidden" }}>
        <div className="grid-bg" style={{ position:"absolute", inset:0 }}/>
        <div style={{ maxWidth:760, margin:"0 auto", padding:`0 ${px}`, textAlign:"center", position:"relative" }}>
          <div style={{ fontSize:"2.5rem", marginBottom:"0.75rem" }}>⚖️</div>
          <h2 className="cg" style={{ fontSize: isMobile?"2rem":"3rem", fontWeight:700, color:T.white, marginBottom:"1rem", lineHeight:1.15 }}>Hukuki Sorununuzu Bugün<br/><span style={{ fontStyle:"italic", color:T.goldHover }}>Çözmeye Başlayın</span></h2>
          <p className="out" style={{ color:"rgba(248,244,239,0.6)", fontSize:"1.05rem", lineHeight:1.85, marginBottom:"2.5rem", fontWeight:300 }}>İlk görüşme tamamen ücretsizdir. Uzman avukatımızla 30 dakikada durumunuzu değerlendirin.</p>
          <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
            <Link to="/contact" style={{ textDecoration:"none" }}>
              <button className="btn-gold" style={{ padding:"1.05rem 2.4rem", fontSize:"0.9rem" }}>🗓 Ücretsiz Randevu Al</button>
            </Link>
            <a href="tel:0850XXXXXXX" style={{ textDecoration:"none" }}>
              <button className="btn-ghost-white" style={{ padding:"1.02rem 2.1rem", fontSize:"0.88rem" }}>📞 Hemen Ara</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

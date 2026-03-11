import { useState } from "react";

const T = {
  navy:    "#0B1628",
  navyMid: "#112040",
  copper:  "#D4956A",
  cream:   "#F5F1ED",
  white:   "#FFFFFF",
  gray:    "#6B6B75",
  dark:    "#050A12",
};

const SERVICES = [
  { id:"01", icon:"👨‍👩‍👧", title:"Aile ve Boşanma Hukuku",short:"Anlaşmalı & çekişmeli boşanma, velayet, nafaka, mal rejimi tasfiyesi.",items:["Anlaşmalı Boşanma Davası","Çekişmeli Boşanma","Velayet & Nafaka","Mal Rejimi Tasfiyesi","Koruma Kararı"] },
  { id:"02", icon:"⚖️", title:"Ceza Hukuku",short:"Soruşturma & kovuşturmanın her aşamasında etkin savunma.",items:["Karakoldan Yargıtay'a Takip","Müşteki & Sanık Vekilliği","Ceza Danışmanlığı","Sabıka Kaydı Silme","İstinaf & Temyiz"] },
  { id:"03", icon:"🏛️", title:"İcra ve İflas Hukuku",short:"Alacak takibi, haciz, itiraz ve iflas süreçleri.",items:["İcra Takibi Başlatma","Haciz İşlemleri","İtiraz & İptal","İflas Davası","Alacak Tahsili"] },
  { id:"04", icon:"🏠", title:"Kira & Tahliye Hukuku",short:"Kira uyuşmazlıkları, tahliye, kira tespit davaları.",items:["Tahliye Davası","Kira Tespit Davası","Kira Artış Uyuşmazlığı","Depozito İadesi","Ecrimisil"] },
  { id:"05", icon:"💼", title:"İş ve Sosyal Güvenlik Hukuku",short:"Kıdem, ihbar, haksız fesih ve iş kazası tazminatları.",items:["Kıdem & İhbar Tazminatı","Haksız Fesih Davası","İş Kazası Tazminatı","Mobbing Davaları","SGK Uyuşmazlığı"] },
  { id:"06", icon:"🏢", title:"Ticaret & Şirketler Hukuku",short:"Şirket kuruluşu, sözleşmeler ve ticari uyuşmazlıklar.",items:["Şirket Kuruluşu","Ticari Sözleşme","Ortaklık Uyuşmazlığı","Rekabet Hukuku","Marka & Patent"] },
  { id:"07", icon:"🗺️", title:"Gayrimenkul Hukuku",short:"Tapu iptali, imar, kıyı ve inşaat hukuku davaları.",items:["Tapu İptali & Tescil","Kat Mülkiyeti","İmar İtirazı","Kamulaştırma","Şufa Davası"] },
];

function useW() {
  const [w] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  return w;
}

export default function Services() {
  const w = useW();
  const isMobile = w < 640;
  const isTablet = w >= 640 && w < 1024;
  const [openSvc, setOpenSvc] = useState(null);
  const px = isMobile ? "1.2rem" : "2rem";

  return (
    <div style={{ width: "100%", minHeight: "100vh", padding: isMobile?"4rem 0":"6.5rem 0", background: T.cream }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Josefin+Sans:wght@300;400;600;700&display=swap');
        .gara { font-family: 'EB Garamond', serif; }
        .jos { font-family: 'Josefin Sans', sans-serif; }
        .svc-card {
          background: ${T.white}; border: 1px solid rgba(11,22,40,0.1);
          transition: box-shadow .3s, transform .3s, border-color .3s;
          cursor: pointer;
        }
        .svc-card:hover { box-shadow: 0 16px 48px rgba(11,22,40,0.12); transform: translateY(-5px); border-color: ${T.copper}; }
        .divider { width: 52px; height: 2px; background: ${T.copper}; margin: 0 auto; }
      `}</style>

      <div style={{ maxWidth:1200, margin:"0 auto", padding:`0 ${px}` }}>
        <div style={{ textAlign:"center", marginBottom: isMobile?"2.5rem":"4rem" }}>
          <div className="jos" style={{ fontSize:"0.65rem", letterSpacing:"0.22em", color: T.copper, textTransform:"uppercase", marginBottom:"0.6rem" }}>Çalışma Alanlarımız</div>
          <h1 className="gara" style={{ fontSize: isMobile?"2rem":isTablet?"2.5rem":"3.2rem", fontWeight:700, color: T.navy, lineHeight:1.2 }}>Hangi Hukuki Meselede<br/><span style={{ fontStyle:"italic", color: T.copper }}>Yardımcı Olabiliriz?</span></h1>
          <div className="divider" style={{ marginTop:"1.25rem" }}/>
          <p className="gara" style={{ color: T.gray, fontSize:"1.1rem", marginTop:"1.1rem", maxWidth:540, margin:"1.1rem auto 0", lineHeight:1.75 }}>İstanbul'da avukatlık ve danışmanlık hizmeti verdiğimiz başlıca alanlar aşağıda listelenmiştir.</p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns: isMobile?"1fr 1fr":isTablet?"repeat(3,1fr)":"repeat(4,1fr)", gap: isMobile?"1rem":"1.5rem" }}>
          {SERVICES.map((s, i) => (
            <div key={i} className="svc-card" style={{ padding: isMobile?"1.25rem":"1.75rem", position:"relative", overflow:"hidden" }}
            onClick={() => setOpenSvc(openSvc===i ? null : i)}>
              <div className="jos" style={{ position:"absolute", top:10, right:14, fontSize: isMobile?"2.2rem":"3rem", fontWeight:900, lineHeight:1, color: "rgba(212,149,106,0.15)", transition: "color .3s" }}>{s.id}</div>
              <div style={{ fontSize: isMobile?"1.8rem":"2.2rem", marginBottom:"0.85rem" }}>{s.icon}</div>
              <h3 className="jos" style={{ fontSize: isMobile?"0.82rem":"0.92rem", fontWeight:700, color: T.navy, marginBottom:"0.6rem", lineHeight:1.35, paddingRight:isMobile?"1.5rem":"2rem" }}>{s.title}</h3>
              <p className="gara" style={{ fontSize: isMobile?"0.88rem":"0.95rem", color: T.gray, lineHeight:1.65 }}>{s.short}</p>

              {openSvc === i && (
                <div style={{ marginTop:"1rem", paddingTop:"1rem", borderTop:`1px solid rgba(212,149,106,0.2)` }}>
                  {s.items.map((item, j) => (
                    <div key={j} style={{ display:"flex", alignItems:"flex-start", gap:"0.5rem", marginBottom:"0.4rem" }}>
                      <span style={{ color: T.copper, fontSize:"0.75rem", marginTop:"0.1rem", flexShrink:0 }}>›</span>
                      <span className="gara" style={{ fontSize:"0.9rem", color: T.navy, lineHeight:1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              )}

              <div style={{ marginTop:"1rem", display:"flex", alignItems:"center", gap:"0.35rem", color: T.copper }}>
                <span className="jos" style={{ fontSize:"0.62rem", letterSpacing:"0.12em" }}>{openSvc===i?"Kapat":"Detaylar"}</span>
                <span style={{ fontSize:"0.8rem" }}>{openSvc===i?"↑":"→"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";

const T = {
  navy:    "#0B1628",
  navyMid: "#112040",
  copper:  "#D4956A",
  white:   "#FFFFFF",
  gray:    "#6B6B75",
  grayLight:"#A8A3A0",
  dark:    "#050A12",
};

function useW() {
  const [w] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  return w;
}

export default function Contact() {
  const w = useW();
  const isMobile = w < 640;
  const isDesktop = w >= 1024;
  const px = isMobile ? "1.2rem" : "2rem";

  const [form, setForm] = useState({ name:"", phone:"", email:"", subject:"", message:"" });
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name:"", phone:"", email:"", subject:"", message:"" });
  };

  return (
    <div style={{ width: "100%", minHeight: "100vh", padding: isMobile?"4rem 0":"6.5rem 0", background:`linear-gradient(160deg, ${T.dark} 0%, ${T.navy} 100%)`, color: T.white }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Josefin+Sans:wght@300;400;600;700&display=swap');
        .gara { font-family: 'EB Garamond', serif; }
        .jos { font-family: 'Josefin Sans', sans-serif; }
        .inp {
          width: 100%; padding: 0.85rem 1rem;
          border: 1px solid rgba(11,22,40,0.15);
          font-family: 'EB Garamond', serif; font-size: 1rem;
          color: ${T.navy}; background: #FAFAF8; outline: none;
          transition: border-color .25s, background .25s;
          border-radius: 2px;
        }
        .inp:focus { border-color: ${T.copper}; background: ${T.white}; }
        .inp::placeholder { color: #AAA5A0; }
        select.inp option { background: ${T.white}; }
        .btn-copper {
          background: ${T.copper}; color: ${T.white}; border: none;
          font-family: 'Josefin Sans', sans-serif; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          cursor: pointer; transition: background .25s, transform .2s, box-shadow .2s;
          padding: 1rem; font-size: 0.82rem; border-radius: 3px; width: 100%;
        }
        .btn-copper:hover { background: #E8B896; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(212,149,106,0.35); }
      `}</style>

      <div style={{ maxWidth:1200, margin:"0 auto", padding:`0 ${px}` }}>
        <div style={{ textAlign:"center", marginBottom: isMobile?"2.5rem":"4rem" }}>
          <div className="jos" style={{ fontSize:"0.62rem", letterSpacing:"0.22em", color: T.copper, textTransform:"uppercase", marginBottom:"0.5rem" }}>Bize Ulaşın</div>
          <h1 className="gara" style={{ fontSize: isMobile?"2rem":"3rem", fontWeight:700, lineHeight:1.2 }}>Hukuki Danışmanlık<br/><span style={{ fontStyle:"italic", color: "#E8B896" }}>Talebi Oluşturun</span></h1>
          <div style={{ width:52, height:2, background: T.copper, margin:"1.25rem auto 0" }}/>
          <p className="gara" style={{ color: T.grayLight, marginTop:"1rem", maxWidth:500, margin:"1rem auto 0", lineHeight:1.75, fontSize:"1.05rem" }}>İlk görüşme tamamen <strong style={{ color: "#E8B896" }}>ücretsizdir</strong>. Formdan, telefonla veya WhatsApp üzerinden randevu alabilirsiniz.</p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns: isDesktop?"1fr 1fr":"1fr", gap: isMobile?"2.5rem":"5rem", alignItems:"start" }}>
          {/* Info */}
          <div>
            <div style={{ display:"flex", flexDirection:"column", gap:"1.5rem", marginBottom:"2.5rem" }}>
              {[{ icon:"📍", label:"Ofislerimiz", val:"Beyoğlu · Beşiktaş · Kadıköy / İstanbul" },{ icon:"📞", label:"Randevu Hattı", val:"0850 XXX XX XX" },{ icon:"✉️", label:"E-posta", val:"info@istanbulhukuk.av.tr" },{ icon:"🕐", label:"Çalışma Saatleri", val:"Hafta içi & hafta sonu 09:00 – 22:00" },].map(item => (
                <div key={item.label} style={{ display:"flex", gap:"1rem", alignItems:"flex-start" }}>
                  <div style={{ width:44, height:44, background:`rgba(212,149,106,0.15)`, border:`1px solid rgba(212,149,106,0.3)`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:"1.1rem" }}>{item.icon}</div>
                  <div>
                    <div className="jos" style={{ fontSize:"0.6rem", letterSpacing:"0.16em", color: T.copper, marginBottom:"0.2rem" }}>{item.label.toUpperCase()}</div>
                    <div className="gara" style={{ color: T.grayLight, fontSize:"1.02rem", lineHeight:1.5 }}>{item.val}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background:"rgba(255,255,255,0.04)", border:`1px solid rgba(212,149,106,0.2)`, padding:"1.25rem 1.5rem", display:"flex", alignItems:"center", gap:"1rem" }}>
              <div style={{ fontSize:"2rem" }}>⚖️</div>
              <div>
                <div className="jos" style={{ fontSize:"0.65rem", letterSpacing:"0.12em", color: T.copper }}>İSTANBUL BAROSU ÜYESİ</div>
                <div className="gara" style={{ color: T.grayLight, fontSize:"0.92rem", marginTop:"0.2rem" }}>Tüm avukatlarımız İstanbul Barosu'na kayıtlıdır.</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{ background:"rgba(255,255,255,0.04)", border:`1px solid rgba(212,149,106,0.18)`, padding: isMobile?"1.75rem":"2.75rem" }}>
            {sent ? (
              <div style={{ textAlign:"center", padding:"3rem 0" }}>
                <div style={{ fontSize:"3rem", marginBottom:"1rem" }}>✓</div>
                <div className="gara" style={{ fontSize:"1.5rem", color: T.copper, fontStyle:"italic", marginBottom:"0.5rem" }}>Talebiniz Alındı</div>
                <div className="gara" style={{ color: T.gray }}>En kısa sürede sizinle iletişime geçeceğiz.</div>
              </div>
            ) : (
              <div style={{ display:"flex", flexDirection:"column", gap:"1.1rem" }}>
                <div className="jos" style={{ fontSize:"0.68rem", letterSpacing:"0.18em", color: T.copper, marginBottom:"0.25rem" }}>DANIŞMA FORMU</div>
                <div style={{ display:"grid", gridTemplateColumns: isMobile?"1fr":"1fr 1fr", gap:"1rem" }}>
                  <div>
                    <label className="jos" style={{ fontSize:"0.58rem", letterSpacing:"0.14em", color: T.gray, display:"block", marginBottom:"0.4rem" }}>ADI SOYADI *</label>
                    <input className="inp" placeholder="Adınız Soyadınız" value={form.name} onChange={e => setForm({...form, name:e.target.value})}/>
                  </div>
                  <div>
                    <label className="jos" style={{ fontSize:"0.58rem", letterSpacing:"0.14em", color: T.gray, display:"block", marginBottom:"0.4rem" }}>TELEFON *</label>
                    <input className="inp" type="tel" placeholder="0500 000 00 00" value={form.phone} onChange={e => setForm({...form, phone:e.target.value})}/>
                  </div>
                </div>
                <div>
                  <label className="jos" style={{ fontSize:"0.58rem", letterSpacing:"0.14em", color: T.gray, display:"block", marginBottom:"0.4rem" }}>E-POSTA</label>
                  <input className="inp" type="email" placeholder="ornek@email.com" value={form.email} onChange={e => setForm({...form, email:e.target.value})}/>
                </div>
                <div>
                  <label className="jos" style={{ fontSize:"0.58rem", letterSpacing:"0.14em", color: T.gray, display:"block", marginBottom:"0.4rem" }}>KONU</label>
                  <select className="inp" value={form.subject} onChange={e => setForm({...form, subject:e.target.value})}>
                    <option value="">Hukuki alan seçiniz</option>
                    <option>Aile ve Boşanma Hukuku</option>
                    <option>Ceza Hukuku</option>
                    <option>İcra ve İflas Hukuku</option>
                    <option>Kira ve Tahliye</option>
                    <option>İş Hukuku</option>
                    <option>Ticaret Hukuku</option>
                    <option>Gayrimenkul Hukuku</option>
                    <option>Diğer</option>
                  </select>
                </div>
                <div>
                  <label className="jos" style={{ fontSize:"0.58rem", letterSpacing:"0.14em", color: T.gray, display:"block", marginBottom:"0.4rem" }}>MESAJINIZ</label>
                  <textarea className="inp" rows={4} placeholder="Hukuki durumunuzu kısaca açıklayınız..." value={form.message} onChange={e => setForm({...form, message:e.target.value})} style={{ resize:"vertical" }}/>
                </div>
                <p className="gara" style={{ fontSize:"0.82rem", color: T.gray, lineHeight:1.6 }}>* Paylaştığınız tüm bilgiler gizlilik ilkemiz çerçevesinde korunmaktadır.</p>
                <button className="btn-copper" onClick={handleSend}>DANIŞMA TALEBİ GÖNDER</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

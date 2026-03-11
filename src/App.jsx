import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { GLOBAL_CSS, T } from "./theme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home     from "./pages/Home";
import About    from "./pages/About";
import Services from "./pages/Services";
import Team     from "./pages/Team";
import Articles from "./pages/Articles";
import Contact  from "./pages/Contact";

function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return show ? (
    <button
      onClick={scrollUp}
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9997,
        width: "48px",
        height: "48px",
        background: T.gold,
        border: "none",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontSize: "1.2rem",
        boxShadow: "0 4px 16px rgba(200,169,110,0.4)",
        transition: "transform .25s, box-shadow .25s",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(200,169,110,0.5)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 16px rgba(200,169,110,0.4)";
      }}
      title="Yukarı Çık"
    >
      ↑
    </button>
  ) : null;
}

function WAButton() {
  return (
    <>
      <a href="https://wa.me/905320000000" target="_blank" rel="noopener noreferrer" className="wa-fab" title="WhatsApp ile Ulaşın">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.845L.057 23.785l6.057-1.516A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.796 9.796 0 01-5.001-1.372l-.36-.213-3.712.929.972-3.594-.234-.372A9.774 9.774 0 012.182 12C2.182 6.579 6.579 2.182 12 2.182S21.818 6.579 21.818 12 17.421 21.818 12 21.818z"/>
        </svg>
      </a>
      <a href="tel:0850XXXXXXX" className="phone-sticky" title="Şimdi Ara">
        <span>📞</span>
        <span>0850 XXX XX XX</span>
      </a>
    </>
  );
}

export default function App() {
  return (
    <div style={{ width:"100%", minHeight:"100vh", overflowX:"hidden" }}>
      <style>{GLOBAL_CSS}</style>
      <ScrollToTop />
      <WAButton />
      <Navbar />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/about"    element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team"     element={<Team />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact"  element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

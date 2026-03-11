export const T = {
  navy:      "#0D1B2E",
  navyMid:   "#152440",
  navyLight: "#1E3460",
  gold:      "#C8A96E",
  goldHover: "#DFC08A",
  goldDark:  "#A8893E",
  goldGlow:  "rgba(200,169,110,0.15)",
  cream:     "#F8F4EF",
  creamDark: "#EEE8E0",
  white:     "#FFFFFF",
  textDark:  "#0D1B2E",
  textMid:   "#374151",
  textLight: "#6B7280",
  textMuted: "#9CA3AF",
  dark:      "#060F1C",
  border:    "rgba(13,27,46,0.10)",
  borderGold:"rgba(200,169,110,0.30)",
};

export const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=Outfit:wght@300;400;500;600;700&family=Cinzel:wght@400;600&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { overflow-x: hidden; }

.cg  { font-family: 'Cormorant Garamond', Georgia, serif; }
.out { font-family: 'Outfit', sans-serif; }
.cin { font-family: 'Cinzel', serif; }

::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: #0D1B2E; }
::-webkit-scrollbar-thumb { background: #C8A96E; border-radius: 3px; }

.btn-gold {
  background: #C8A96E; color: #0D1B2E; border: none;
  font-family: 'Outfit', sans-serif; font-weight: 700;
  font-size: 0.82rem; letter-spacing: 0.09em; text-transform: uppercase;
  cursor: pointer; border-radius: 4px;
  transition: background .22s, transform .2s, box-shadow .22s;
}
.btn-gold:hover { background: #DFC08A; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(200,169,110,0.38); }

.btn-ghost-dark {
  background: transparent; color: #0D1B2E;
  border: 1.5px solid rgba(13,27,46,0.35);
  font-family: 'Outfit', sans-serif; font-weight: 600;
  font-size: 0.82rem; letter-spacing: 0.07em;
  cursor: pointer; border-radius: 4px;
  transition: all .22s;
}
.btn-ghost-dark:hover { background: #0D1B2E; color: #fff; border-color: #0D1B2E; transform: translateY(-2px); }

.btn-ghost-white {
  background: transparent; color: #fff;
  border: 1.5px solid rgba(255,255,255,0.40);
  font-family: 'Outfit', sans-serif; font-weight: 600;
  font-size: 0.82rem; letter-spacing: 0.07em;
  cursor: pointer; border-radius: 4px;
  transition: all .22s;
}
.btn-ghost-white:hover { border-color: #DFC08A; color: #DFC08A; background: rgba(255,255,255,0.05); transform: translateY(-2px); }

.btn-navy {
  background: #0D1B2E; color: #fff; border: none;
  font-family: 'Outfit', sans-serif; font-weight: 700;
  font-size: 0.82rem; letter-spacing: 0.09em; text-transform: uppercase;
  cursor: pointer; border-radius: 4px;
  transition: background .22s, transform .2s, box-shadow .22s;
}
.btn-navy:hover { background: #152440; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(13,27,46,0.3); }

.card-hover { transition: box-shadow .3s, transform .3s, border-color .3s; }
.card-hover:hover { box-shadow: 0 16px 48px rgba(13,27,46,0.11); transform: translateY(-5px); }

.page-header {
  background: linear-gradient(135deg, #060F1C 0%, #0D1B2E 55%, #152440 100%);
  position: relative; overflow: hidden;
}
.page-header::after {
  content: ''; position: absolute; bottom: -2px; left: 0; right: 0; height: 72px;
  background: #F8F4EF; clip-path: polygon(0 100%, 100% 20%, 100% 100%);
  z-index: 2;
}

.grid-bg {
  background-image:
    linear-gradient(rgba(200,169,110,0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(200,169,110,0.035) 1px, transparent 1px);
  background-size: 60px 60px;
}

.inp {
  width: 100%; padding: 0.85rem 1rem;
  border: 1.5px solid rgba(13,27,46,0.12);
  font-family: 'Cormorant Garamond', serif; font-size: 1rem;
  color: #0D1B2E; background: #FAFAF8; outline: none;
  border-radius: 6px;
  transition: border-color .22s, background .22s, box-shadow .22s;
}
.inp:focus { border-color: #C8A96E; background: #fff; box-shadow: 0 0 0 3px rgba(200,169,110,0.12); }
.inp::placeholder { color: #B0ABA5; font-style: italic; }

.stat-sep { border-right: 1px solid rgba(255,255,255,0.10); }
@media (max-width:639px) {
  .stat-sep { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.10); }
}

.gold-line { width: 52px; height: 3px; background: #C8A96E; border-radius: 2px; }
.gold-line-c { margin: 0 auto; }

@keyframes fadeUp { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
.fu  { animation: fadeUp .7s ease both; }
.fu2 { animation: fadeUp .7s .12s ease both; }
.fu3 { animation: fadeUp .7s .24s ease both; }
.fu4 { animation: fadeUp .7s .36s ease both; }

@keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-11px)} }
.float { animation: floatY 4.8s ease-in-out infinite; }

.wa-fab {
  position: fixed; bottom: 24px; right: 24px; z-index: 9999;
  width: 56px; height: 56px; background: #25D366;
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 20px rgba(37,211,102,0.42); cursor: pointer;
  transition: transform .25s, box-shadow .25s;
}
.wa-fab:hover { transform: scale(1.1); box-shadow: 0 8px 30px rgba(37,211,102,0.52); }

.phone-sticky {
  position: fixed; bottom: 88px; right: 24px; z-index: 9998;
  background: #0D1B2E; color: #C8A96E;
  border: 1.5px solid rgba(200,169,110,0.35);
  border-radius: 28px; padding: 0.55rem 1.1rem;
  display: flex; align-items: center; gap: 0.5rem;
  box-shadow: 0 4px 20px rgba(13,27,46,0.35); cursor: pointer;
  transition: transform .22s, box-shadow .22s;
  font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 0.82rem;
}
.phone-sticky:hover { transform: scale(1.04); box-shadow: 0 8px 28px rgba(13,27,46,0.42); }
`;

import { T } from "../theme";

export default function Themis({ maxWidth = 340 }) {
  return (
    <svg viewBox="0 0 300 510" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%", maxWidth, height: "auto", filter: "drop-shadow(0 24px 64px rgba(0,0,0,0.55))" }}>
      {/* Aura */}
      <circle cx="160" cy="230" r="155" fill={T.gold} opacity="0.07"/>
      <circle cx="160" cy="230" r="115" fill={T.gold} opacity="0.06"/>

      {/* Robe */}
      <path d="M108 195 C88 242 72 348 82 480 L222 480 C232 348 216 242 196 195Z"
      fill={T.navyMid} stroke={T.navyLight} strokeWidth="1.4"/>
      <path d="M135 213C131 278 129 374 131 480" stroke={T.navyLight} strokeWidth="2.2" opacity="0.55"/>
      <path d="M153 208C150 272 148 370 148 480" stroke={T.navyLight} strokeWidth="1.5" opacity="0.38"/>
      <path d="M170 210C170 274 169 372 170 480" stroke={T.navyLight} strokeWidth="2.2" opacity="0.55"/>
      <path d="M82 480 Q152 470 222 480" stroke={T.gold} strokeWidth="1.4" opacity="0.45"/>

      {/* Head */}
      <ellipse cx="152" cy="100" rx="27" ry="31" fill="#C08565"/>
      <rect x="145" y="129" width="14" height="23" rx="3" fill="#AE7352"/>

      {/* Blindfold */}
      <path d="M126 93 Q152 87 178 93 Q178 103 152 106 Q126 103 126 93Z" fill="#5C3C22" opacity="0.95"/>

      {/* Hair & crown pins */}
      <path d="M127 92 C128 70 152 62 176 70 C178 92" fill="#2A1810"/>
      <path d="M136 69L133 55 M146 64L144 50 M152 62L152 48 M159 64L161 50 M169 69L172 55"
      stroke={T.gold} strokeWidth="1.8" strokeLinecap="round"/>

      {/* Shoulders */}
      <path d="M86 175 C98 157 136 147 152 147 C168 147 206 157 218 175 L209 195 C188 181 116 181 96 195Z"
      fill={T.navy} stroke={T.navyLight} strokeWidth="1.1"/>
      <path d="M86 175 C98 157 136 147 152 147 C168 147 206 157 218 175"
      stroke={T.gold} strokeWidth="1.2" opacity="0.4"/>

      {/* Right arm — scales */}
      <path d="M216 180 C228 162 239 134 247 96" stroke="#C08565" strokeWidth="13" strokeLinecap="round"/>
      <ellipse cx="248" cy="91" rx="8" ry="10" fill="#AE7352"/>

      {/* Scale pole */}
      <line x1="248" y1="81" x2="248" y2="51" stroke={T.gold} strokeWidth="2.8"/>
      <line x1="210" y1="51" x2="286" y2="51" stroke={T.gold} strokeWidth="2.5"/>
      <circle cx="248" cy="51" r="3.5" fill={T.gold}/>

      {/* Left pan */}
      <line x1="214" y1="51" x2="200" y2="73" stroke={T.gold} strokeWidth="1.5"/>
      <line x1="210" y1="51" x2="206" y2="73" stroke={T.gold} strokeWidth="1.5"/>
      <path d="M193 75 Q203 85 213 75" stroke={T.gold} strokeWidth="2" fill={`${T.gold}1A`}/>

      {/* Right pan */}
      <line x1="282" y1="51" x2="296" y2="73" stroke={T.gold} strokeWidth="1.5"/>
      <line x1="286" y1="51" x2="290" y2="73" stroke={T.gold} strokeWidth="1.5"/>
      <path d="M285 75 Q292 85 299 75" stroke={T.gold} strokeWidth="2" fill={`${T.gold}1A`}/>

      {/* Left arm — sword */}
      <path d="M90 182 C80 204 74 236 71 268" stroke="#C08565" strokeWidth="12" strokeLinecap="round"/>
      <line x1="71" y1="268" x2="66" y2="358" stroke="#8A9BB0" strokeWidth="4.5" strokeLinecap="round"/>
      <line x1="55" y1="278" x2="82" y2="278" stroke={T.gold} strokeWidth="5.5" strokeLinecap="round"/>
      <ellipse cx="65" cy="364" rx="5" ry="7.5" fill={T.gold}/>
      <line x1="69" y1="272" x2="63" y2="355" stroke="#B8C8D5" strokeWidth="1.2" opacity="0.45"/>

      {/* Base */}
      <path d="M118 476 L113 492 L136 492 L139 476Z" fill={T.navyMid}/>
      <path d="M161 476 L159 492 L180 492 L176 476Z" fill={T.navyMid}/>
      <ellipse cx="152" cy="486" rx="50" ry="7" fill="rgba(0,0,0,0.32)"/>
    </svg>
  );
}

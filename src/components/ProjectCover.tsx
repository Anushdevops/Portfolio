/**
 * Original abstract cover art (pure SVG). These are deliberately NOT screenshots
 * or logos of the real applications.
 */
type Props = { variant: "traffic" | "migration" };

export default function ProjectCover({ variant }: Props) {
  return variant === "traffic" ? <Traffic /> : <Migration />;
}

function Traffic() {
  const nodes = [
    [90, 70], [90, 150], [90, 230], [530, 60], [530, 150], [530, 240],
  ];
  return (
    <svg viewBox="0 0 620 388" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Abstract illustration of traffic routing through a protective gateway">
      <defs>
        <linearGradient id="t-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3a1d12" />
          <stop offset="1" stopColor="#1d1d1b" />
        </linearGradient>
        <radialGradient id="t-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#c65d32" stopOpacity="0.75" />
          <stop offset="1" stopColor="#c65d32" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="620" height="388" fill="url(#t-bg)" />
      <circle cx="310" cy="194" r="190" fill="url(#t-glow)" />
      {[70, 110, 150, 190].map((r, i) => (
        <circle key={r} cx="310" cy="194" r={r} fill="none" stroke="#e8946a" strokeOpacity={0.5 - i * 0.1} strokeDasharray={i % 2 ? "2 8" : "none"} />
      ))}
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <path d={`M${x} ${y + 40} C ${x < 300 ? x + 110 : x - 110} ${y + 40}, ${x < 300 ? 220 : 400} 194, 310 194`} fill="none" stroke="#e8946a" strokeOpacity="0.65" strokeWidth="1.4" strokeDasharray="4 7">
            <animate attributeName="stroke-dashoffset" from="0" to={x < 300 ? "-22" : "22"} dur="2.4s" repeatCount="indefinite" />
          </path>
          <rect x={x - 22} y={y + 22} width="44" height="36" rx="8" fill="#272623" stroke="#c65d32" strokeOpacity="0.8" />
          <circle cx={x} cy={y + 40} r="4" fill="#e8946a" />
        </g>
      ))}
      <path d="M310 142 l46 20 v40 c0 26 -20 42 -46 54 c-26 -12 -46 -28 -46 -54 v-40 z" fill="#c65d32" fillOpacity="0.2" stroke="#f6f0e6" strokeWidth="1.6" />
      <path d="M290 196 l14 14 l28 -30" fill="none" stroke="#f6f0e6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Migration() {
  const cell = (ox: number, oy: number, lit: number[]) =>
    Array.from({ length: 9 }, (_, i) => {
      const x = ox + (i % 3) * 56;
      const y = oy + Math.floor(i / 3) * 56;
      const on = lit.includes(i);
      return <rect key={`${ox}-${i}`} x={x} y={y} width="44" height="44" rx="10" fill={on ? "#c65d32" : "#272623"} fillOpacity={on ? 0.9 : 1} stroke={on ? "#e8946a" : "#4a4742"} />;
    });
  return (
    <svg viewBox="0 0 620 388" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Abstract illustration of workloads moving between two clusters">
      <defs>
        <linearGradient id="m-bg" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4a2214" />
          <stop offset="1" stopColor="#1d1d1b" />
        </linearGradient>
      </defs>
      <rect width="620" height="388" fill="url(#m-bg)" />
      <g opacity="0.55">{cell(52, 110, [1, 4])}</g>
      <g>{cell(400, 110, [0, 1, 4, 8])}</g>
      <path d="M232 160 C 290 90, 330 90, 392 150" fill="none" stroke="#f6f0e6" strokeOpacity="0.85" strokeWidth="1.6" strokeDasharray="3 8">
        <animate attributeName="stroke-dashoffset" from="22" to="0" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M232 230 C 290 300, 330 300, 392 240" fill="none" stroke="#e8946a" strokeOpacity="0.8" strokeWidth="1.6" strokeDasharray="3 8">
        <animate attributeName="stroke-dashoffset" from="22" to="0" dur="2.6s" repeatCount="indefinite" />
      </path>
      <path d="M382 142 l12 8 l-13 6" fill="none" stroke="#f6f0e6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M382 232 l12 8 l-13 6" fill="none" stroke="#e8946a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="310" cy="194" r="26" fill="none" stroke="#c65d32" strokeWidth="1.4" />
      <circle cx="310" cy="194" r="7" fill="#e8946a" />
      <text x="52" y="86" fill="#a9a39a" fontFamily="JetBrains Mono, monospace" fontSize="13" letterSpacing="2">PROJECT A</text>
      <text x="400" y="86" fill="#e8946a" fontFamily="JetBrains Mono, monospace" fontSize="13" letterSpacing="2">PROJECT B</text>
    </svg>
  );
}

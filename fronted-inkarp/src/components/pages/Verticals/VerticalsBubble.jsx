import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import VerticalsPage from "./VerticalsPage";
import VerticalsBubbleNew from "./VerticalsBubbleNew";
import VerticalProducts from "./VerticalProducts";
import Micro from '/Microscope.png';

const verticalsList = [
  { name: "Synthesis and Flow Chemistry", key: "synthesis-and-flow-chemistry" },
  { name: "Analytical and Chromatography Solutions", key: "analytical-and-chromatography-solutions" },
  { name: "Analytical Chemistry and Weighing", key: "analytical-chemistry-and-weighing" },
  { name: "Material Science and Battery", key: "material-science-and-battery" },
  { name: "General Laboratory Instrument", key: "general-laboratory-instrument" },
  { name: "Lifesciences", key: "lifesciences" },
  { name: "Extrusion and Homogenization", key: "extrusion-and-homogenization" },
  { name: "Rheology and Thermal Analysis", key: "rheology-and-thermal-analysis" },
  { name: "Pilot Plants and Automation", key: "pilot-plants-and-automation" },
];

const BUBBLE_SIZE = 150; // px
const CONTAINER_HEIGHT = 70; // vh
const CONTAINER_WIDTH = 80; // percent
const SMALL_BUBBLES = 25;

// Falling background animation (more visible)
const FallingBackground = () => {
  const items = Array.from({ length: 18 }); // more items
  const randoms = React.useMemo(() =>
    items.map(() => ({
      left: Math.random() * 95, // 0-95% for better spread
      size: 48 + Math.random() * 72, // 48px to 120px
      duration: 14 + Math.random() * 16, // 14s to 30s for slow fall
      delay: Math.random() * 12, // 0-12s
      rotate: Math.random() * 360, // random initial rotation
    })),
    []
  );
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      {items.map((_, index) => (
        <span
          key={index}
          className="absolute animate-fall-bg"
          style={{
            left: `${randoms[index].left}%`,
            animationDuration: `${randoms[index].duration}s`,
            animationDelay: `${randoms[index].delay}s`,
            transform: `rotate(${randoms[index].rotate}deg)`
          }}
        >
          <img
            src={Micro}
            style={{
              width: `${randoms[index].size}px`,
              height: 'auto',
              objectFit: 'contain',
              borderRadius: '50%',
              opacity: 0.28, // more visible
              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.10))',
            }}
            alt="Microscope"
          />
        </span>
      ))}
      <style>{`
        @keyframes fall-bg {
          0% {
            transform: translateY(-120%) scale(1) rotate(0deg);
            opacity: 0.28;
          }
          100% {
            transform: translateY(110vh) scale(1) rotate(360deg);
            opacity: 0.28;
          }
        }
        .animate-fall-bg {
          animation-name: fall-bg;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};

// Helper to get a random number in a range
const randomInRange = (min, max) => Math.random() * (max - min) + min;

const VerticalsBubble = () => {
  // Arrange bubbles into two rows: 5 in first, 4 in second, bottom row centered between top row bubbles
  const staticPositions = React.useMemo(() => {
    const row1 = 5, row2 = 4;
    const margin = 5; // percent
    const width = CONTAINER_WIDTH;
    const spacing1 = (width - 2 * margin) / (row1 - 1);
    const spacing2 = (width - 2 * margin) / row1; // for centering between
    // First row (higher)
    const pos1 = Array.from({ length: row1 }).map((_, i) => ({
      top: 28,
      left: margin + i * spacing1,
    }));
    // Second row (lower, centered between top row)
    const pos2 = Array.from({ length: row2 }).map((_, i) => ({
      top: 52,
      left: margin + spacing2 / 2 + i * spacing1,
    }));
    return [...pos1, ...pos2];
  }, []);

  // Small decorative bubbles (unchanged)
  const smallBubbles = Array.from({ length: SMALL_BUBBLES }).map((_, i) => {
    const left = randomInRange(2, 98);
    const size = randomInRange(14, 36);
    const duration = randomInRange(7, 18);
    const delay = randomInRange(0, 10);
    const color = 'rgba(180, 220, 255, 0.13)';
    return (
      <span
        key={i}
        className="small-bubble"
        style={{
          left: `${left}%`,
          width: size,
          height: size,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          bottom: `-${size + 10}px`,
          background: color,
          boxShadow: `0 2px 8px 0 ${color}`,
        }}
      />
    );
  });

  return (
    <>
      <Helmet>
        <title>Verticals - Inkarp Instruments Private Ltd</title>
        <meta name="keywords" content='default, keywords' />
        <meta name="description" content="Explore Verticals by Inkarp Instruments Pvt Ltd. Discover innovative solutions tailored to your needs. Elevate your projects with our expert instruments." />
      </Helmet>
      {/* <VerticalsPage /> */}
      <main className="min-h-screen w-full overflow-hidden relative px-4 bg-white">
        {/* Falling background animation */}
        <FallingBackground />
        {/* Decorative small bubbles */}
        <div className="absolute inset-0 pointer-events-none z-0">{smallBubbles}</div>
        {/* Decorative water/wave at bottom */}
        <div className="text-center mb-10 relative z-10">
          <h1 className="text-3xl font-[MaxOT] mb-4 text-[#e63946] drop-shadow">Explore Our Scientific Focus Areas</h1>
          <p className="text-lg font-[Roboto] text-[#e63946]">From research to production, explore how our technologies support every lab need.</p>
        </div>
        <div
          className="relative w-full h-[70vh] overflow-hidden z-10"
        >
          {verticalsList.map((vertical, index) => (
            <Link
              key={index}
              to={`/verticals/${vertical.key}`}
              className={`absolute flex items-center justify-center rounded-full bubble-glassy-red bubble-shake-hover font-[MaxOT]`}
              style={{
                top: `${staticPositions[index].top}%`,
                left: `${staticPositions[index].left}%`,
                zIndex: 2,
                cursor: 'pointer',
                width: BUBBLE_SIZE,
                height: BUBBLE_SIZE,
                userSelect: 'none',
                textAlign: 'center',
                fontWeight: 500,
                fontSize: '1rem',
                padding: 0,
                color: '#E63946',
                background: 'none',
                border: 'none',
                boxShadow: '0 0 32px 8px rgba(230,57,70,0.18), 0 2px 16px 0 rgba(230,57,70,0.10)',
                filter: 'none',
                opacity: 1,
                position: 'absolute',
                overflow: 'visible',
              }}
            >
              <span className="w-full px-2 z-10" style={{ lineHeight: 1.2, position: 'relative' }}>{vertical.name}</span>
            </Link>
          ))}
        </div>
        {/* <VerticalsBubbleNew />
        <VerticalProducts /> */}
        <style>{`
          .bubble-glassy-red {
            background: radial-gradient(circle at 50% 55%, rgba(255, 245, 245, 0.95) 30%, rgba(255, 230, 230, 0.85) 55%, rgba(230,57,70,0.25) 80%, rgba(230,57,70,0.35) 100%);
            box-shadow: 0 0 32px 8px rgba(230,57,70,0.18), 0 2px 16px 0 rgba(230,57,70,0.10), 0 0 0 8px rgba(230,57,70,0.08) inset;
            position: absolute;
            animation: bubble-anim 2.5s ease-in-out infinite;
            will-change: transform;
          }
          .bubble-shake-hover:hover {
            animation: bubble-shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
            animation-iteration-count: 1;
          }
          @keyframes bubble-shake {
            10%, 90% { transform: translateX(-2px); }
            20%, 80% { transform: translateX(4px); }
            30%, 50%, 70% { transform: translateX(-8px); }
            40%, 60% { transform: translateX(8px); }
          }
          .bubble-glassy-red:before {
            content: "";
            position: absolute;
            top: 8%;
            left: 14%;
            width: 60%;
            height: 38%;
            border-radius: 100%;
            background: radial-gradient(circle at top, #fff 80%, rgba(255,255,255,0.2) 100%);
            filter: blur(2.5px);
            z-index: 2;
            pointer-events: none;
            opacity: 0.85;
          
          }
          .bubble-glassy-red:after {
            content: "";
            position: absolute;
            top: 60%;
            left: 30%;
            width: 40%;
            height: 18%;
            border-radius: 100%;
            background: radial-gradient(circle at 50% 80%, rgba(255,255,255,0), rgba(255,255,255,0) 74%, #fff 80%, #fff 84%, rgba(255,255,255,0) 100%);
            filter: blur(1.5px);
            z-index: 2;
            pointer-events: none;
            opacity: 0.7;
          }
          @keyframes bubble-anim {
            0% { transform: scale(1); }
            20% { transform: scaleY(0.95) scaleX(1.05); }
            48% { transform: scaleY(1.1) scaleX(0.9); }
            68% { transform: scaleY(0.98) scaleX(1.02); }
            80% { transform: scaleY(1.02) scaleX(0.98); }
            97%, 100% { transform: scale(1); }
          }
          .small-bubble {
            position: absolute;
            border-radius: 50%;
            animation: small-bubble-float linear infinite;
            pointer-events: none;
            background: rgba(230,57,70,0.07) !important;
            box-shadow: none !important;
            opacity: 0.13;
          }
          @keyframes small-bubble-float {
            0% { transform: translateY(0) scale(1); opacity: 0.13; }
            80% { opacity: 0.13; }
            100% { transform: translateY(-80vh) scale(1.1); opacity: 0; }
          }
        `}</style>
      </main>
    </>
  );
};

export default VerticalsBubble;
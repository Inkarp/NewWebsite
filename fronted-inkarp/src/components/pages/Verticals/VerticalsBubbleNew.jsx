import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import VerticalsPage from "./VerticalsPage";

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

// Helper to get a random number in a range
const randomInRange = (min, max) => Math.random() * (max - min) + min;

const BUBBLE_SIZE = 150; // px, for collision with edges
const CONTAINER_HEIGHT = 70; // vh
const CONTAINER_WIDTH = 100; // percent

const RAIN_DROPS = 30;
const SMALL_BUBBLES = 25;

const VerticalsBubbleNew = () => {
    // Each bubble has: {top, left, dx, dy, paused}
    const [bubbles, setBubbles] = useState(() =>
        verticalsList.map(() => ({
            top: randomInRange(0, CONTAINER_HEIGHT - 20),
            left: randomInRange(0, CONTAINER_WIDTH - 20),
            dx: randomInRange(-0.07, 0.07), // slower movement
            dy: randomInRange(-0.07, 0.07),
            paused: false,
        }))
    );
    const containerRef = useRef(null);

    useEffect(() => {
        let animationFrame;
        const animate = () => {
            setBubbles((prev) => {
                // Move bubbles
                let next = prev.map((bubble, i) => {
                    if (bubble.paused) return bubble;
                    let { top, left, dx, dy } = bubble;
                    top += dy;
                    left += dx;
                    // Bounce off edges
                    if (top < 0) {
                        top = 0;
                        dy = Math.abs(dy);
                    } else if (top > CONTAINER_HEIGHT - 20) {
                        top = CONTAINER_HEIGHT - 20;
                        dy = -Math.abs(dy);
                    }
                    if (left < 0) {
                        left = 0;
                        dx = Math.abs(dx);
                    } else if (left > CONTAINER_WIDTH - 20) {
                        left = CONTAINER_WIDTH - 20;
                        dx = -Math.abs(dx);
                    }
                    return { ...bubble, top, left, dx, dy };
                });
                // Collision detection (simple pairwise)
                for (let i = 0; i < next.length; i++) {
                    for (let j = i + 1; j < next.length; j++) {
                        const a = next[i];
                        const b = next[j];
                        // Convert % to px (assume container is 100vw x 70vh)
                        const containerW = window.innerWidth;
                        const containerH = window.innerHeight * (CONTAINER_HEIGHT / 100);
                        const ax = (a.left / 100) * containerW + BUBBLE_SIZE / 2;
                        const ay = (a.top / 100) * containerH + BUBBLE_SIZE / 2;
                        const bx = (b.left / 100) * containerW + BUBBLE_SIZE / 2;
                        const by = (b.top / 100) * containerH + BUBBLE_SIZE / 2;
                        const dist = Math.sqrt((ax - bx) ** 2 + (ay - by) ** 2);
                        if (dist < BUBBLE_SIZE - 8) { // 8px buffer
                            // Swap directions
                            let tdx = next[i].dx;
                            let tdy = next[i].dy;
                            next[i].dx = next[j].dx;
                            next[i].dy = next[j].dy;
                            next[j].dx = tdx;
                            next[j].dy = tdy;
                            // Move them slightly apart
                            const angle = Math.atan2(ay - by, ax - bx);
                            next[i].left += Math.cos(angle) * 0.5;
                            next[i].top += Math.sin(angle) * 0.5;
                            next[j].left -= Math.cos(angle) * 0.5;
                            next[j].top -= Math.sin(angle) * 0.5;
                        }
                    }
                }
                return next;
            });
            animationFrame = requestAnimationFrame(animate);
        };
        animate();
        return () => cancelAnimationFrame(animationFrame);
    }, []);

    const handleMouseEnter = (i) => {
        setBubbles((prev) =>
            prev.map((b, idx) => (idx === i ? { ...b, paused: true } : b))
        );
    };
    const handleMouseLeave = (i) => {
        setBubbles((prev) =>
            prev.map((b, idx) => (idx === i ? { ...b, paused: false } : b))
        );
    };

    // Small decorative bubbles
    const smallBubbles = Array.from({ length: SMALL_BUBBLES }).map((_, i) => {
        const left = randomInRange(2, 98);
        const size = randomInRange(14, 36);
        const duration = randomInRange(7, 18);
        const delay = randomInRange(0, 10);
        // Subtle, light small bubbles
        const color = 'rgba(180, 220, 255, 0.13)';
        // return (
        //   <span
        //     key={i}
        //     className="small-bubble"
        //     style={{
        //       left: `${left}%`,
        //       width: size,
        //       height: size,
        //       animationDuration: `${duration}s`,
        //       animationDelay: `${delay}s`,
        //       bottom: `-${size + 10}px`,
        //       background: color,
        //       boxShadow: `0 2px 8px 0 ${color}`,
        //     }}
        //   />
        // );
    });

    return (
        <>
            <Helmet>
                <title>Verticals - Inkarp Instruments Private Ltd</title>
            </Helmet>


            <main className="min-h-screen w-full overflow-hidden relative px-4 bg-white">
                {/* Decorative small bubbles */}
                {/* <div className="absolute inset-0 pointer-events-none z-0">{smallBubbles}</div> */}
                {/* Decorative water/wave at bottom */}
                {/* <div className="absolute left-0 bottom-0 w-full z-0" style={{height: '120px', pointerEvents: 'none'}}>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="#f8bbbd" fillOpacity="0.5" d="M0,80 C360,120 1080,40 1440,100 L1440,120 L0,120 Z"/>
            <path fill="#e57373" fillOpacity="0.3" d="M0,100 C400,60 1040,140 1440,80 L1440,120 L0,120 Z"/>
            <path fill="#ffebee" fillOpacity="0.7" d="M0,110 C500,90 900,130 1440,110 L1440,120 L0,120 Z"/>
          </svg>
        </div> */}
                <div className="text-center mb-10 relative z-10">
                    <h1 className="text-4xl sm:text-5xl font-bold font-[MaxOT] mb-4 text-[#e63946] drop-shadow">Explore Our Scientific Focus Areas</h1>
                    <p className="text-lg font-[Roboto] text-[#e63946]">From research to production, explore how our technologies support every lab need.</p>
                </div>
                <div
                    className="relative w-full h-[70vh] overflow-hidden z-10"
                    ref={containerRef}
                >
                    {verticalsList.map((vertical, index) => (
                        <Link
                            key={index}
                            to={`/verticals/${vertical.key}`}
                            className={`absolute flex items-center justify-center rounded-full bubble-glassy-red`}
                            style={{
                                top: `${bubbles[index]?.top}%`,
                                left: `${bubbles[index]?.left}%`,
                                zIndex: bubbles[index]?.paused ? 10 : 1,
                                cursor: 'pointer',
                                width: BUBBLE_SIZE,
                                height: BUBBLE_SIZE,
                                userSelect: 'none',
                                textAlign: 'center',
                                fontWeight: 500,
                                fontSize: '1rem',
                                padding: 0,
                                color: 'white',
                                background: 'black', // handled by CSS
                                border: 'none',
                                boxShadow: '0 0 32px 8px rgba(230,57,70,0.3), 0 20px 16px 0 rgba(230,57,70,0.3)',

                    filter: 'none',
                    opacity: 1,
                    position: 'absolute',
                    overflow: 'visible',
                            }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                        >
                    <span className="w-full px-2 z-10" style={{ lineHeight: 1.2, position: 'relative' }}>{vertical.name}</span>
                </Link>
                    ))}
            </div>
            {/* Glassy Bubble, Small Bubble & Animation Style */}
            <style>{`
          .bubble-glassy-red {
            background: radial-gradient(circle at 50% 55%, rgba(159, 22, 22, 0.95) 30%, rgba(121, 12, 12, 0.85) 55%, rgba(230,57,70,0.25) 80%, rgba(230,57,70,0.35) 100%);
            box-shadow: 0 0 32px 8px rgba(230,57,70,0.18), 0 2px 16px 0 rgba(181, 24, 37, 0.1), 0 0 0 8px rgba(108, 14, 22, 0.08) inset;
            position: absolute;
            animation: bubble-anim 2.5s ease-in-out infinite;
            will-change: transform;
          }
          .bubble-glassy-red:before,
                .bubble-glassy-red:after {
                display: none;
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
            // background: rgba(230,57,70,0.07) !important;
            box-shadow: none !important;
            opacity: 0.13;
          }
          @keyframes small-bubble-float {
            0% { transform: translateY(0) scale(1); opacity: 0.13; }
            80% { opacity: 0.13; }
            100% { transform: translateY(-80vh) scale(1.1); opacity: 0; }
          }
        `}</style>
        </main >
        </>
    );
};

export default VerticalsBubbleNew;
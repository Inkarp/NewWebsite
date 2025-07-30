import React from 'react';
import Micro from '/Microscope.png';
import TestTube from '/TestTube.png';
import Beaker from '/Beaker.png';

const images = [Micro, TestTube, Beaker];

const FallingAnimation = () => {
    const items = Array.from({ length: 12 });

    // Precompute random values for each item to keep them stable between renders
    const randoms = React.useMemo(() =>
        items.map(() => ({
            left: Math.random() * 90, // 0-90% for better spread
            size: 32 + Math.random() * 64, // 32px to 96px
            duration: 10 + Math.random() * 10, // 10s to 20s for slow fall
            delay: Math.random() * 8, // 0-8s
            image: images[Math.floor(Math.random() * images.length)], // random image
        })),
        []
    );

    return (
        <div className="relative w-full h-screen overflow-hidden bg-white">
            {items.map((_, index) => (
                <span
                    key={index}
                    className="absolute animate-fall"
                    style={{
                        left: `${randoms[index].left}%`,
                        animationDuration: `${randoms[index].duration}s`,
                        animationDelay: `${randoms[index].delay}s`,
                    }}
                >
                    <img
                        src={randoms[index].image}
                        style={{
                            width: `${randoms[index].size}px`,
                            height: 'auto',
                            objectFit: 'contain',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            opacity: 0.85,
                            filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.08))',
                        }}
                        alt="Falling Lab Item"
                    />
                </span>
            ))}

            <style>
                {`
          @keyframes fall {
            0% {
              transform: translateY(-120%) scale(1);
              opacity: 1;
            }
            100% {
              transform: translateY(110vh) scale(1);
              opacity: 0.7;
            }
          }

          .animate-fall {
            animation-name: fall;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
        `}
            </style>
        </div>
    );
};

export default FallingAnimation;

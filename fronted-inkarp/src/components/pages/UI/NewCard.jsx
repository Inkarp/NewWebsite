import React from 'react';
import styled from 'styled-components';

const images = [
  'https://www.inkarp.co.in/assets/images/chairman-sir.jpg',
  'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=80',
  
    'https://images.unsplash.com/photo-1530577197743-7adf14294584?auto=format&fit=crop&w=801&q=80',
    'https://images.unsplash.com/photo-1598641795816-a84ac9eac40c?auto=format&fit=crop&w=801&q=80',
    'https://images.unsplash.com/photo-1484186139897-d5fc6b908812?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1618018352910-72bdafdc82a6?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?auto=format&fit=crop&w=801&q=80',
    'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?auto=format&fit=crop&w=812&q=80',
    'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=80',

    'https://images.unsplash.com/photo-1530577197743-7adf14294584?auto=format&fit=crop&w=801&q=80',
];

const NewCard = () => {
  return (
    <StyledWrapper>
      <div className="card-3d">
        {images.map((src, idx) => (
          <div key={idx} style={{ backgroundImage: `url(${src})` }} />
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  @keyframes autoRun3d {
    from {
      transform: perspective(800px) rotateY(-360deg);
    }
    to {
      transform: perspective(800px) rotateY(0deg);
    }
  }

  @keyframes animateBrightness {
    10% {
      filter: brightness(1);
    }
    50% {
      filter: brightness(0.1);
    }
    90% {
      filter: brightness(1);
    }
  }

  .card-3d {
    position: relative;
    width: 400px;
    height: 200px;
    transform-style: preserve-3d;
    transform: perspective(800px);
    animation: autoRun3d 20s linear infinite;
    will-change: transform;
    margin: 0 auto;
  }

  .card-3d div {
    position: absolute;
    width: 80px;
    height: 112px;
    background-size: cover;
    background-position: center;
    border: solid 2px lightgray;
    border-radius: 0.5rem;
    top: 50%;
    left: 50%;
    transform-origin: center center;
    animation: animateBrightness 20s linear infinite;
    transition-duration: 200ms;
    will-change: transform, filter;
  }

  .card-3d:hover {
    animation-play-state: paused !important;
  }

  .card-3d:hover div {
    animation-play-state: paused !important;
  }

  .card-3d div:nth-child(1)  { transform: translate(-50%, -50%) rotateY(0deg) translateZ(150px); animation-delay: -0s; }
  .card-3d div:nth-child(2)  { transform: translate(-50%, -50%) rotateY(36deg) translateZ(150px); animation-delay: -2s; }
  .card-3d div:nth-child(3)  { transform: translate(-50%, -50%) rotateY(72deg) translateZ(150px); animation-delay: -4s; }
  .card-3d div:nth-child(4)  { transform: translate(-50%, -50%) rotateY(108deg) translateZ(150px); animation-delay: -6s; }
  .card-3d div:nth-child(5)  { transform: translate(-50%, -50%) rotateY(144deg) translateZ(150px); animation-delay: -8s; }
  .card-3d div:nth-child(6)  { transform: translate(-50%, -50%) rotateY(180deg) translateZ(150px); animation-delay: -10s; }
  .card-3d div:nth-child(7)  { transform: translate(-50%, -50%) rotateY(216deg) translateZ(150px); animation-delay: -12s; }
  .card-3d div:nth-child(8)  { transform: translate(-50%, -50%) rotateY(252deg) translateZ(150px); animation-delay: -14s; }
  .card-3d div:nth-child(9)  { transform: translate(-50%, -50%) rotateY(288deg) translateZ(150px); animation-delay: -16s; }
  .card-3d div:nth-child(10) { transform: translate(-50%, -50%) rotateY(324deg) translateZ(150px); animation-delay: -18s; }
`;

export default NewCard;

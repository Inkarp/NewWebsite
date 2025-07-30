import React from "react";
import InkarpNotation from '/src/assets/PrincipalLogos/InkarpNotation.svg';

export default function DroppingText() {
  return (
    <div className="w-auto flex items-center justify-center overflow-hidden relative">
      {/* Inline Keyframes */}
      <style>{`
        @keyframes roll {
          0% {
            font-size: 0px;
            opacity: 0;
            margin-left: -30px;
            margin-top: 0px;
            transform: rotate(-25deg);
          }
          3% {
            opacity: 1;
            transform: rotate(0deg);
          }
          5% {
            font-size: inherit;
            opacity: 1;
            margin-left: 0px;
            margin-top: 0px;
          }
          20% {
            font-size: inherit;
            opacity: 1;
            margin-left: 0px;
            margin-top: 0px;
            transform: rotate(0deg);
          }
          27% {
            font-size: 0px;
            opacity: 0.5;
            margin-left: 20px;
            margin-top: 100px;
          }
          100% {
            font-size: 0px;
            opacity: 0;
            margin-left: -30px;
            margin-top: 0px;
            transform: rotate(15deg);
          }
        }

        @keyframes roll2 {
          0% {
            font-size: 0px;
            opacity: 0;
            margin-left: -30px;
            margin-top: 0px;
            transform: rotate(-25deg);
          }
          3% {
            opacity: 1;
            transform: rotate(0deg);
          }
          5% {
            font-size: inherit;
            opacity: 1;
            margin-left: 0px;
            margin-top: 0px;
          }
          30% {
            font-size: inherit;
            opacity: 1;
            margin-left: 0px;
            margin-top: 0px;
            transform: rotate(0deg);
          }
          37% {
            font-size: 1500px;
            opacity: 0;
            margin-left: -1000px;
            margin-top: -800px;
          }
          100% {
            font-size: 0px;
            opacity: 0;
            margin-left: -30px;
            margin-top: 0px;
            transform: rotate(15deg);
          }
        }

        .dropping-texts > div {
          font-size: 1.5rem;
          opacity: 0;
          margin-top: 3px;
          margin-left: -30px;
          position: absolute;
          font-weight: 600;
          box-shadow: 0px 60px 25px -20px rgba(0,0,0,0.5);
          width: 100%;
          text-align: left;
        }

        .dropping-texts > div:nth-child(1) {
          animation: roll 7s linear infinite 0s;
        }
        .dropping-texts > div:nth-child(2) {
          animation: roll 7s linear infinite 1s;
        }
        .dropping-texts > div:nth-child(3) {
          animation: roll 7s linear infinite 2s;
        }
        .dropping-texts > div:nth-child(4) {
          animation: roll 7s linear infinite 3s;
        }
        .dropping-texts > div:nth-child(5) {
          animation: roll 7s linear infinite 4s;
        }
        .dropping-texts > div:nth-child(6) {
          animation: roll2 7s linear infinite 5s;
        }
      `}</style>

      <h1 className="text-black font-[MaxOT] text-4xl font-semibold z-10 relative flex items-center gap-1 flex-wrap">
        <img
          src={InkarpNotation}
          alt="Inkarp Logo"
          className="h-[50px] w-auto object-cover"
        />
      <span className="text-xl">lives by</span> 
      <span className="text-lg"> {" "}</span>
        <span className="dropping-texts relative w-[240px] h-[50px] block">
          <div>
            <span className="text-[#E63946]">I</span><span className="text-black">nnovation</span>
          </div>
          <div>
            <span className="text-[#E63946]">N</span><span className="text-black">urturing</span>
          </div>
          <div>
            <span className="text-[#E63946]">K</span><span className="text-black">nowledge</span>
          </div>
          <div>
            <span className="text-[#E63946]">A</span><span className="text-black">ccountability</span>
          </div>
          <div>
            <span className="text-[#E63946]">R</span><span className="text-black">eliability</span>
          </div>
          <div>
            <span className="text-[#E63946]">P</span><span className="text-black">assion</span>
          </div>
        </span>
      </h1>
    </div>
  );
}

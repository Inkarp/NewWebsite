import React from "react";
import InkarpLogo from "/inkarp old.svg";
import DroppingText from "./DroppingText";
import GroupLogo1 from '/src/assets/Logos/InkarpGroupLogo.png'
import GroupLogo from '/src/assets/Logos/GroupLogo.png'
import Inkarp from "/inkarp.png";
import Spark from "/Spark.svg";
import InkarpTelecom from "/InkarpTelecom.svg";
import InkarpServices from "/InkarpServices.svg";
import Verder from "/Verder.svg";
import Advion from "/src/assets/PrincipalLogos/RowOne/advion.png";

const subsidiaries = [
  { name: "Group Company", image: Spark },
  { name: "Group Company", image: InkarpTelecom },
  { name: "Group Company", image: InkarpServices },
  { name: "Collaborative Venture ", image: Verder },
  { name: "Collaborative Venture ", image: Advion },
];

export default function Companies() {
  return (
    <div className="circular-reviews__void" id="void">
      <style>{`
        .circular-reviews__void {
          width: 100%;
          max-width: 1024px;
          margin: auto;
          position: relative;
          aspect-ratio: 1.8 / 1;
        }

        // .circular-reviews__void ul:hover * {
        //   animation-play-state: paused;
        // }

        .circular-reviews__void ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          z-index: 1;
        }

        .circular-reviews__void li {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
          animation: circular-reviews-rotateCW 40s cubic-bezier(0.000, 0.37, 1.000, 0.63) infinite;
        }

        .circular-reviews__void .card {
          width: 20%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px 24px;
          gap: 8px;
          background: #FFFFFF;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1), 0px 16px 32px rgba(0, 0, 0, 0.1);
          border-radius: 20px;
          font-family: MaxOT;
          // font-weight: 800;
          font-size: 16px;
          color: #E63946;
          animation: circular-reviews-rotateCCW 40s cubic-bezier(0.000, 0.37, 1.000, 0.63) infinite;
        }

        .circular-reviews__void .inkarp-meaning {
          font-size: 14px;
          line-height: 1.4;
          text-align: center;
          color: #333;
        }

        .circular-reviews__void .inkarp-meaning p {
          margin: 2px 0;
        }

        .circular-reviews__void a {
          text-decoration: none;
          color: unset;
        }

        .circular-reviews__void .model-name {
          font-family: MaxOT;
          font-weight: bold;
          font-size: 18px;
          color: #E63949;
          display: block;
          text-align: center;
        }

        .circular-reviews__void li:nth-child(2),
        .circular-reviews__void li:nth-child(2) .card {
          animation-delay: -6.666s;
        }
        .circular-reviews__void li:nth-child(3),
        .circular-reviews__void li:nth-child(3) .card {
          animation-delay: -13.333s;
        }
        .circular-reviews__void li:nth-child(4),
        .circular-reviews__void li:nth-child(4) .card {
          animation-delay: -20s;
        }
        .circular-reviews__void li:nth-child(5),
        .circular-reviews__void li:nth-child(5) .card {
          animation-delay: -26.666s;
        }
        // .circular-reviews__void li:nth-child(6),
        // .circular-reviews__void li:nth-child(6) .card {
        //   animation-delay: -33.333s;
        // }

        @keyframes circular-reviews-rotateCW {
          from { transform: translate3d(0px, -50%, -1px) rotate(-45deg); }
          to { transform: translate3d(0px, -50%, 0px) rotate(315deg); }
        }

        @keyframes circular-reviews-rotateCCW {
          from { transform: rotate(45deg); }
          to { transform: rotate(-315deg); }
        }

        .circular-reviews__void .center-circle {
          position: absolute;
          width: 200px;
          aspect-ratio: 1 / 1;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background: #FFFFFF;
          box-shadow: 0px 18px 36px -18px rgba(46, 5, 15, 0.3), 0px 30px 60px -12px 
          rgba(12, 5, 46, 0.25);
          border-radius: 50%;
        }

        .circular-reviews__void .second-circle {
          position: absolute;
          width: 40%;
          aspect-ratio: 1 / 1;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          // background: #F5F5F5;
          opacity: 1;
          // box-shadow: 0px 18px 36px -18px rgba(208, 205, 219, 0.3), 0px 30px 60px -12px rgba(12, 5, 46, 0.25);
          border-radius: 50%;
        }

        .circular-reviews__void .last-circle {
          position: absolute;
          width: 66%;
          aspect-ratio: 1 / 1;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background:rgb(207, 205, 220);
          opacity: 0.25;
          box-shadow: 0px 18px 36px -18px rgba(12, 5, 46, 0.3), 0px 30px 60px -12px rgba(12, 5, 46, 0.25);
          border-radius: 50%;
        }

        //   .top-left-content {
        //   position: absolute;
        //   top: 5%;
        //   left: 0;
        //   width: 40%;
        //   z-index: 10;
        //   padding-left: 24px;
        //   padding-right: 12px;
        //   color: #222;
        //   font-family: Roboto;
        //   font-size: 32px;
        //   line-height: ;
        // }


        .circular-reviews__void .crop {
          -webkit-mask-image: linear-gradient(30deg, rgba(19, 15, 15, 0), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1));
        }
      `}</style>

      <div className="text-center mb-8">
        <button className="px-4 py-1 mt-5 text-center text-sm font-semibold uppercase border border-[#E63946] text-black rounded-full mb-4 font-[MaxOT]">
          Our Group Companies & Collaborations
        </button>
        <h3 className="text-3xl font-[MaxOT] text-[#E63946] mb-2 leading-tight">
          At INKARP, innovation is at the core of everything we do.
        </h3>
        <p className="text-base text-lg font-[Roboto] max-w-3xl mx-auto">
          Explore our subsidiaries and joint ventures that drive our shared vision forward.
        </p>
      </div>
      <DroppingText />
      <div className="circular-reviews__void">
        <ul style={{ "--count": subsidiaries.length }} className="crop" >
          {subsidiaries.map((subsidiary, idx) => (
            <li key={idx}>
              <div className="card">
                <span className="model-name">{subsidiary.name}</span>
                {subsidiary.text ? (
                  <div className="inkarp-meaning">
                    {subsidiary.text.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                ) : (
                  <img src={subsidiary.image} alt={subsidiary.text} className="w-full h-auto object-cover" />
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="last-circle ">
        </div>
        <div className="second-circle flex items-center justify-center">
          {/* <img src={GroupLogo} alt="Inkarp Logo" className="w-full h-full object-cover" /> */}
          <img src={GroupLogo1} alt="Inkarp Logo" className="w-full h-auto object-cover" />
        </div>
        {/* <div className="center-circle flex items-center justify-center">
          
        </div> */}
      </div>
    </div>
  );
}

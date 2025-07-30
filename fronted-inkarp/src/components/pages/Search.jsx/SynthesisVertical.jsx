// Logo imports
import Heidolph from '/src/assets/PrincipalLogos/RowOne/Heidolph.svg';

// Rotary Evaporators
import HeiVapCore from "/images/products/heidolph/Hei-VAP-HL-G3.webp";
import HeiVapExpert from "/images/products/heidolph/Hei-VAP-Expert.webp";
import HeiVapUltimate from "/images/products/heidolph/Hei-VAP-Ultimate.webp";
import HeiVapExpertControl from "/images/products/heidolph/Hei-VAP-Expert-Control.webp";
import HeiVapUltimateControl from "/images/products/heidolph/Hei-VAP-Ultimate-Control.webp";

import HeiVacValveControl from "/images/products/heidolph/hei-vac-valve-control.webp";
import HeiVacValveTec from "/images/products/heidolph/hei-vac-valve-tec.webp";
import HeiVacVarioControl from "/images/products/heidolph/hei-vac-vario-control.webp";
import HeiVacVarioStation from "/images/products/heidolph/hei-vac-vario-station.webp";

import HeiConnect from "/images/products/heidolph/Hei-Connect.webp"
import HeiMixS from "/images/products/heidolph/Hei-Mix-S.webp"
import HeiPlateMix from "/images/products/heidolph/Hei-PLATE-Mix-20.webp"
import HeiPlateMixHeatCore from "/images/products/heidolph/Hei-PLATE-MixnHeat-Core.webp"
import HeiPlateMixHeatCorePlus from "/images/products/heidolph/Hei-PLATE-MixnHeat-Core-Plus.webp"
import HeiPlateMixHeatCoreUltimate from "/images/products/heidolph/hei-plate-mix-n-heat-ultimate.webp"
import HeiPlateMixHeatCoreExpert from "/images/products/heidolph/hei-plate-mix-n-heat-expert.webp"

import HeiFLowCore600 from "/images/products/heidolph/Hei-FLOW-Core-600.webp"
import HeiFLowExpert600 from "/images/products/heidolph/Hei-FLOW-Expert-600.webp"
import HeiFLowUltimate600 from "/images/products/heidolph/Hei-FLOW-Ultimate-600.webp"
import HeiFLowCore120 from "/images/products/heidolph/Hei-FLOW-Core-120.webp"
import HeiFLowExpert120 from "/images/products/heidolph/Hei-FLOW-Expert-120.webp"
import HeiFLowUltimate120 from "/images/products/heidolph/Hei-FLOW-Ultimate-120.webp"


const synthesisVertical = {
  vertical: "Synthesis and Flow Chemistry",
  principal: "Heidolph",
  logo: Heidolph,
  products: [
    {
      name: "Rotary Evaporators",
      slug: "rotary-evaporators",
      models: [
        { heading: "Standard Models" },
        { name: "Hei-VAP Core", slug: "hei-vap-core", image: HeiVapCore },
        { name: "Hei-VAP Expert", slug: "hei-vap-expert", image: HeiVapExpert },
        { name: "Hei-VAP Ultimate", slug: "hei-vap-ultimate", image: HeiVapUltimate },
        { heading: "Control Models" },
        { name: "Hei-VAP Expert Control", slug: "hei-vap-expert-control", image: HeiVapExpertControl },
        { name: "Hei-VAP Ultimate Control", slug: "hei-vap-ultimate-control", image: HeiVapUltimateControl }
      ]
    },
    {
      name: "Accessories",
      slug: "accessories",
      models: [
        { heading: "Vacuum Pumps" },
        { name: "Hei-VAC Valve Control", slug: "hei-vac-valve-control", image: HeiVacValveControl },
        { name: "Hei-VAC Valve Tec", slug: "hei-vac-valve-tec", image: HeiVacValveTec },
        { heading: "RPM-Regulated Vacuum Pumps" },
        { name: "Hei-VAC Vario Station", slug: "hei-vac-vario-station", image: HeiVacVarioStation },
        { name: "Hei-VAC Vario Control", slug: "hei-vac-vario-control", image: HeiVacVarioControl }
      ]
    },
    {
      name: "Magnetic Stirrers",
      slug: "magnetic-stirrers",
      models: [
        { name: "Hei-Connect", slug: "hei-connect", image: HeiConnect },
        { name: "Hei-Mix S", slug: "hei-mix-s", image: HeiMixS },
        { name: "Hei-Plate Mix 20 L", slug: "hei-plate-mix-20-l", image: HeiPlateMix },
        { name: "Hei-Plate Mix 'n' Heat Core", slug: "hei-plate-mix-n-heat-core", image: HeiPlateMixHeatCore },
        { name: "Hei-Plate Mix 'n' Heat Core +", slug: "hei-plate-mix-n-heat-core-+", image: HeiPlateMixHeatCorePlus },
        { name: "Hei-Plate Mix 'n' Heat Core Ultimate", slug: "hei-plate-mix-n-heat-core-ultimate", image: HeiPlateMixHeatCoreUltimate },
        { name: "Hei-Plate Mix 'n' Heat Core Expert", slug: "hei-plate-mix-n-heat-core-expert", image: HeiPlateMixHeatCoreExpert }
      ]
    },
    {
      name: "Peristaltic Pumps",
      slug: "peristaltic-pumps",
      models: [
        { heading: "Single Channel Pumps" },
        { name: "Hei-Flow Core 600", slug: "hei-flow-core-600", image: HeiFLowCore600 },
        { name: "Hei-Flow Expert 600", slug: "hei-flow-expert-600", image: HeiFLowExpert600 },
        { name: "Hei-Flow Ultimate 600", slug: "hei-flow-ultimate-600", image: HeiFLowUltimate600 },
        { heading: "Multi Channel Pumps" },
        { name: "Hei-Flow Core 120", slug: "hei-flow-core-120", image: HeiFLowCore120 },
        { name: "Hei-Flow Expert 120", slug: "hei-flow-expert-120", image: HeiFLowExpert120 },
        { name: "Hei-Flow Ultimate 120", slug: "hei-flow-ultimate-120", image: HeiFLowUltimate120 }
      ]
    },
    "Large-Scale Rotary Evaporators",
    "Continuous Automatic Distillation Module",
    "Overhead Stirrers",
    "Shakers & Mixers",
    "Processing Solutions",
    "Smart cell cultivation"
  ]
};

export { synthesisVertical };

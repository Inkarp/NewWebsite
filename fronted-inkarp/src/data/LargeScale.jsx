import React, { useState } from "react";
// Logos & Images
import Heidolph from '/src/assets/PrincipalLogos/RowOne/Heidolph.svg';

import HeiVapIndustrial from "/images/products/heidolph/Hei-VAP-Industrial.webp";
import HeiVapIndustrialBasic from "/images/products/heidolph/Hei-VAP-Industrial-Basic.webp"

import Banner1 from "/images/products/Banner/Banner1.jpg";
import Banner2 from "/images/products/Banner/Banner2.jpg";


export const LargeScale = {
    "hei-vap-industrial": {
        id: "hei-vap-industrial",
        name: "Hei-VAP Industrial Rotary Evaporator",
        image: HeiVapIndustrial,
        logo: Heidolph,
        bannerImg: Banner2,
        altText: "Hei-VAP Industrial Rotary Evaporator",
        videoId: "DBJ_Gs5H76Y",
        meta: {
            title: "Hei-VAP Industrial Rotary Evaporator Distributor And Service Provider In India | Heidolph | Inkarp",
            description: "Discover the Hei-VAP Industrial Rotary Evaporator from Heidolph – ideal for high-volume, safe, and GMP-compliant solvent evaporation. Distributed by Inkarp India with expert installation and nationwide support.",
            keywords: [
                "Heidolph rotary evaporator India, Hei-VAP Industrial, large scale rotary evaporator, solvent distillation system, GMP compliant evaporator, industrial rotavap, Heidolph distributor India, evaporation system pharma, chemical distillation unit, vacuum evaporation equipment, Hei VAP Industrial Rotary Evaporator Distributor In India, Hei VAP Industrial Rotary Evaporator Service Provider In India."
            ],
            altText: "HHei-VAP Industrial Rotary Evaporator",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Heidolph Website"]
        },
        description: `The Hei-VAP Industrial Rotary Evaporator by Heidolph is engineered for high-volume distillation processes in industrial laboratories, pilot plants, and production environments. With cutting-edge safety mechanisms, intuitive usability, and robust construction, it ensures seamless evaporation of solvents – even for challenging applications involving foaming, splashing, or heat-sensitive substances. The unit features a high-impact transparent PMMA safety door, non-fogging safety glass, and a metal-frame guard hood, offering exceptional operator protection. A large touch screen control panel simplifies control and monitoring of parameters like rotation speed, bath temperature (up to 180 °C), and vacuum.
Illumination of the evaporation flask during operation improves visibility and process accuracy. The universal heating bath supports both water and oil-based fluids, adding flexibility. It includes integrated water refill, spillover prevention, and a bottom-positioned release valve for easy fluid management. A GMP-compliant certification with IQ/OQ validation is also available. For added mobility and convenience, the optional Base Cart allows full maneuverability and smart storage for accessories like glassware, pumps, or solvents. When equipped with Glassware A, it includes a descending condenser, 20 L evaporating flask, 10 L receiving flask, and expansion vessel – ideal for applications where splashing or foaming must be managed efficiently.`,
        features: [
            {
                overview: "The Hei-VAP Industrial Rotary Evaporator stands out with its superior safety mechanisms, intuitive digital interface, and scalable performance. Designed for large-volume solvent evaporation, it integrates intelligent control systems, splash-resistant glassware assemblies, and rugged mechanical components for reliable long-term use. The PMMA door, safety glass guard, and programmable ramps ensure optimal safety, flexibility, and process repeatability. This system is designed to adapt to your workflow while complying with GMP validation requirements for regulated environments.",
            },
            {
                name: "Transparent PMMA Safety Door",
                description: "The large, impact-resistant PMMA front door ensures excellent user safety during operation by shielding the user from any glass breakage or chemical splash. Its transparency maintains clear visibility of the internal evaporation process without compromising protection."
            },
            {
                name: "Non-Fogging Glass with Metal Frame Hood",
                description: "Equipped with non-fogging safety glass and a robust metal frame guard hood, the unit provides a clear, uninterrupted view of the distillation process while ensuring high operator protection from hazardous splashes, vacuum implosions, or breakage."
            },
            {
                name: "Illuminated Evaporation Flask",
                description: "An integrated lighting system ensures the evaporation flask remains well-lit during operation, improving visibility and enabling users to monitor foaming, bubbling, or changes in contents for more controlled distillation and improved safety."
            },
            {
                name: "Universal Heating Bath (Up to 180 °C)",
                description: "The heating bath is compatible with both water and other thermal fluids, offering a wide range of applications. The user can set temperatures up to 180 °C, allowing effective evaporation of high-boiling solvents with excellent thermal distribution."
            },
            {
                name: "Integrated Water Refill and Spillover Prevention",
                description: "With a smartly integrated water refill system, the Hei-VAP Industrial avoids process interruption. The spillover prevention feature ensures no excess liquid floods the bath area, reducing clean-up and preventing potential hazards."
            },
            {
                name: "Bottom Release Valve",
                description: "A user-friendly release valve positioned at the base of the heating bath allows for effortless drainage of liquids, improving cleaning, maintenance, and safety during solvent or fluid changes."
            },
            {
                name: "Large Touch Screen Control Panel",
                description: "The intuitive, high-resolution touchscreen interface displays and allows full control of all key process parameters such as rotation speed, bath temperature, and vacuum settings. Users can program multi-step distillation ramps and monitor them in real time."
            },
            {
                name: "GMP Certification – IQ/OQ Validation Available",
                description: "This model can be supplied with full documentation and testing protocols compliant with Good Manufacturing Practice (GMP), including Installation Qualification (IQ) and Operational Qualification (OQ) for regulated industrial and pharma environments."
            },
            {
                name: "Optional Mobile Base Cart",
                description: "An optional, fully mobile base cart enhances laboratory workflow by allowing easy transport. It features removable side panels for the storage of accessories such as vacuum pumps, flasks, or tubing, making it a complete distillation station on wheels."
            },
            {
                name: "Glassware A – Ideal for Splashing and Foaming Substances",
                description: "The Hei-VAP Industrial with Glassware A includes a descending condenser, expansion vessel, and large-volume flasks. This setup is ideal for distilling challenging materials prone to foaming, splashing, or volume expansion, ensuring safe and efficient recovery."
            }
        ],

        advantages: [
            {
                overview: "The Hei-VAP Industrial Rotary Evaporator offers unmatched advantages for labs handling high-volume solvent recovery. It combines operational safety, digital control, and process adaptability to handle complex evaporation tasks efficiently. Its integrated safety mechanisms reduce operator risk, while the modular design allows customization for specific process needs. Whether you need GMP compliance or rapid solvent recovery without downtime, Hei-VAP Industrial delivers reliable performance and consistent results across a wide variety of applications."
            },
            {
                name: "Maximum User Safety",
                description: "Built with user safety in mind, the PMMA shield, non-fogging safety glass, and robust frame guard prevent accidents related to glassware failure or chemical splash—critical for high-volume solvent evaporation environments."
            },
            {
                name: "Enhanced Visibility",
                description: "With built-in flask illumination and a transparent safety cover, operators can monitor every stage of the evaporation process, helping them make real-time decisions and respond to foaming or splashing more effectively."
            },
            {
                name: "Flexible Process Control",
                description: "The programmable touchscreen offers advanced automation features, allowing for precise, repeatable distillation with ramp programming, adjustable speed, and temperature control—all tailored to user requirements."
            },
            {
                name: "Space-Saving Mobile Design",
                description: "With the optional mobile base cart, users can create a mobile distillation station. It enables storage of pumps and accessories, reduces clutter, and offers flexibility in large labs or changing production areas."
            },
            {
                name: "High Capacity Distillation",
                description: "Equipped with a 20 L evaporation flask and 10 L receiving flask, this system is perfect for industrial-scale operations, offering higher throughput and reduced downtime for solvent recovery and separation tasks."
            },
            {
                name: "Adaptability to Foaming Substances",
                description: "The Glassware A configuration is specifically designed to handle aggressive, foaming, or splashing materials, making it ideal for pharmaceutical, chemical, and food applications where such behavior is common."
            },
            {
                name: "Compliant with Regulatory Standards",
                description: "With optional GMP-compliant documentation and IQ/OQ validation, the Hei-VAP Industrial meets the strict requirements of regulated industries such as pharmaceuticals, biotech, and food production."
            },
            {
                name: "Ease of Cleaning and Maintenance",
                description: "The bottom-positioned drain valve and integrated spill control allow for safe and easy cleaning or solvent switching without the risk of spillage or manual lifting of heavy components."
            },
            {
                name: "Energy Efficiency and Cost Saving",
                description: "Intelligent heating and vacuum integration improve energy use, and optimized workflows minimize process times—resulting in significant operational savings over the long term."
            },
            {
                name: "Full-System Integration",
                description: "Pair the Hei-VAP Industrial with Heidolph's vacuum pumps, chillers, and control units to create a complete, harmonized distillation system from a single source, ensuring compatibility and streamlined service."
            }
        ],


        techSpecs: {
            overview: "The Hei-VAP Industrial Rotary Evaporator is an advanced large-scale evaporation system ideal for high-throughput labs, pilot plants, and production environments. Designed for efficiency and reliability, it simplifies solvent recovery, concentration, and purification processes in pharmaceutical, chemical, and biotech industries. With an intuitive 7-inch touchscreen control, robust safety features, and a highly efficient heating and cooling system, this rotary evaporator supports both aqueous and solvent-based applications. It delivers consistent performance, user-friendly operation, and scalable evaporation capacity, making it the perfect solution for demanding industrial workflows. As a trusted solution for precision evaporation, the Hei-VAP Industrial ensures safety, reproducibility, and compliance, all in a durable and space-optimized design. Suitable for continuous operation and high evaporation rates, it's the preferred choice for laboratories looking to enhance their processing capabilities with minimal downtime.",

            specs: {
                "Dimensions (W × H × D)": "998 × 2,225 × 694 mm",
                "Weight": "Approx. 120 kg (without glassware)",
                "Drive": "EC motor",
                "Speed Range": "6 – 160 rpm",
                "Heating Power": "4,000 W",
                "Acoustic Pressure": "< 85 dB(A) (IEC 61010 compliant)",
                "Rated Voltage": "3 × 400 V (50/60 Hz) or 1 × 230 V (50/60 Hz)",
                "Electrical Connection": "L1+L2+L3+N+PE or L+N+PE",
                "Protection Class": "I",
                "Overvoltage Category": "II",
                "Degree of Pollution": "2",
                "Power Input": "Max. 4,600 W",
                "Operating Temperature": "5–31 °C (≤80% RH) / 32–40 °C (≤50% RH, linear decrease)",
                "Installation Altitude": "Up to 2,000 m asl",
                "Stroke Flask Lift": "180 mm",
                "Lifting Speed Flask Lift": "45 mm/s",
                "Evaporation Rates (L/h, ΔT 40 °C)": "Toluene: 26.0 / Acetone: 25.9 / Ethanol: 12.9 / Water: 4.7",
                "Max Cooling Surface": "1.2 m² (depends on glass set)",
                "Heating Bath Dimensions": "Inner Ø: 397 mm / Outer Ø: 400 mm",
                "Heating Bath Material": "V4A steel (1.4404), X2CrNiMo 17-12-2",
                "Heating Bath Volume": "18 L (H₂O) / 14 L (oil)",
                "Temperature Range Heating Bath": "20–100 °C (H₂O) / 20–180 °C (oil)",
                "Overtemperature Protection": "Integrated, mechanical",
                "Overheat Protection": "Not applicable",
                "Control Interface": "Detachable 7\" touchscreen with control knobs",
                "Control Accuracy": "±1 °C",
                "Storage Conditions": "5–31 °C (≤80% RH) / 32–40 °C (≤50% RH)",
                "Permissible Leakage Rate": "1 mbar/min",
                "Device Protection Rating": "IP20",
                "Control Panel Protection": "IP45",
                "Heating Bath Temp. Control": "Microprocessor-based",
                "Required Pump Capacity": "1.5 – 3 m³/h",
                "Cooling Liquid Consumption": "150 – 250 L/h"
            }
        },

        faqs: [
            {
                question: "What is the Hei-VAP Industrial Rotary Evaporator used for?",
                answer:
                    "The Hei-VAP Industrial Rotary Evaporator is designed for large-scale solvent evaporation, recovery, and concentration in industrial and pharmaceutical laboratories. It supports high-throughput workflows involving volatile or heat-sensitive substances. Common applications include solvent distillation, sample concentration, extract purification, and solvent recovery. Its intuitive 7-inch touchscreen, modular accessories, and safety features make it suitable for GMP-compliant R&D, pilot-scale, and production labs."
            },
            {
                question: "How does the Hei-VAP Industrial ensure user safety during operation?",
                answer:
                    "Safety is integral to the Hei-VAP Industrial’s design. It includes a high-impact transparent PMMA front door, a safety glass hood, and enclosed glassware to prevent splashes or breakage. Mechanical overtemperature protection, spillover prevention, and a bottom-positioned drain valve reduce operational risks. These features provide a secure environment for large-scale solvent evaporation, especially in regulated labs handling hazardous substances."
            },
            {
                question: "What makes the Hei-VAP Industrial suitable for GMP-regulated environments?",
                answer:
                    "The Hei-VAP Industrial Rotary Evaporator is fully GMP-compatible, offering IQ/OQ validation packages, traceable process controls, and durable, certified materials. Digital precision ensures reproducibility and documentation, while professional setup and training from Inkarp Instruments help meet regulatory compliance. This makes the unit ideal for pharmaceutical, biotech, and chemical production under strict quality standards."
            },
            {
                question: "Can the Hei-VAP Industrial handle foaming or splashing solvents?",
                answer:
                    "Yes, the unit is engineered for challenging applications involving foaming or splashing. With Glassware A, it includes a descending condenser and expansion vessel to manage foam and volatile behavior. The illuminated evaporation flask aids real-time observation, while users can adjust parameters like vacuum and temperature to minimize splashing, ensuring safer and cleaner evaporation of difficult substances."
            },
            {
                question: "What is the evaporation capacity of the Hei-VAP Industrial?",
                answer:
                    "The Hei-VAP Industrial offers high evaporation rates: up to 26 L/h for toluene, 25.9 L/h for acetone, 12.9 L/h for ethanol, and 4.7 L/h for water, under optimal ΔT 40 °C conditions. This high throughput makes it ideal for continuous industrial use, reducing processing time while enhancing overall lab productivity."
            },
            {
                question: "What control features does the Hei-VAP Industrial offer for process automation?",
                answer:
                    "The detachable 7-inch touchscreen offers full control over rotation speed, bath temperature, and vacuum pressure. Programmable ramps allow multi-step automation for repeatable results. Real-time feedback, alerts, and precision controls reduce human error and improve consistency—making it a powerful tool for large-scale, automated solvent evaporation processes."
            },
            {
                question: "What accessories and peripherals are compatible with the Hei-VAP Industrial?",
                answer:
                    "The system is compatible with vacuum pumps, chillers, mobile carts, and various glassware sets (e.g., Glassware A). These accessories integrate seamlessly to form a complete evaporation station, improving workflow efficiency and enabling customization for different solvents, volumes, and safety requirements—all supplied and supported by Inkarp Instruments."
            },
            {
                question: "How easy is it to clean and maintain the Hei-VAP Industrial Rotary Evaporator?",
                answer:
                    "The Hei-VAP Industrial is designed for easy maintenance. It features a bottom-positioned drain valve for safe and quick fluid disposal, corrosion-resistant V4A steel heating baths, and a spillover prevention mechanism. Modular components and a detachable control panel allow easy access for servicing. Inkarp offers preventive maintenance to ensure long-term performance."
            },
            {
                question: "Is training and installation support available for Hei-VAP Industrial in India?",
                answer:
                    "Yes, Inkarp Instruments Pvt. Ltd. provides complete installation, training, and calibration support across India. Certified engineers assist with setup, safety procedures, software use, and preventive maintenance. Our nationwide support ensures quick response and minimal downtime for your lab operations."
            },
            {
                question: "Why choose Inkarp as your supplier for Hei-VAP Industrial in India?",
                answer:
                    "Inkarp is the authorized distributor of Heidolph products in India with over 40 years of experience. We offer a complete solution—equipment, configuration, training, maintenance, and technical support. Our extensive local presence ensures timely delivery, reliable service, and expert guidance, making Inkarp the preferred partner for industrial evaporation systems in India."
            }
        ]

    },
    
    "hei-vap-industrial-basic": {
        id: "hei-vap-industrial-basic",
        name: "Hei - VAP Industrial Rotary Evaporator Basic",
        image: HeiVapIndustrialBasic,
        logo: Heidolph,
        bannerImg: Banner2,
        altText: "Hei - VAP Industrial Rotary Evaporator Basic",
        videoId: "DBJ_Gs5H76Y",
        meta: {
            title: "Hei - VAP Industrial Rotary Evaporator Basic Distributor And Service Provider In India | Heidolph | Inkarp",
            description: " Explore Hei-VAP Industrial Rotary Evaporator Basic with GMP options and expert support from Inkarp, India’s trusted distributor for lab-scale evaporation systems.",
            keywords: [
                "Hei VAP Industrial Rotary Evaporator Basic, Hei VAP Industrial Rotary Evaporator Basic Distributor In India, Hei VAP Industrial Rotary Evaporator Basic Service Provider In India, Large Scale Rotary Evaporator, Heidolph Large Scale Rotary Evaporator, Industrial Rotary Evaporator, Heidolph Industrial Rotary Evaporator, Industrial rotovap, Rotary evaporator 50L, High volume distillation system"
            ],
            altText: "Hei - VAP Industrial Rotary Evaporator Basic",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Heidolph Website"]
        },
        description: `The Hei‑VAP Industrial Rotary Evaporator Basic delivers high-performance solvent evaporation tailored for labs and pilot plants operating under budget constraints. Featuring the same universal heating bath capable of reaching 180 °C with both water and oil, it includes protective receiver cassettes to minimize breakage risks. Standard features such as integrated water refill, spillover prevention, and a bottom drain valve simplify operation and maintenance. The system is equipped with a large, programmable touchscreen offering illuminated displays and multi‑step ramp profiles for repeatable distillation processes. Additionally, GMP‑compliant certification (IQ/OQ) is available to meet regulatory standards.
While the Basic version matches the core specifications of the full Industrial model, it streamlines safety elements to reduce cost. It omits the high-impact PMMA door, safety glass hood, and metal-frame guard, yet still ensures reliable performance and regulatory compliance for controlled lab environments. Optional mobile base cart enhances modularity—complete with storage for pumps, glassware, and solvents. The Hei‑VAP Industrial Basic is the perfect balance between functionality and affordability, delivering precise, programmable, large-scale evaporation without compromising on user convenience or process reliability.`,
        features: [
            {
                overview: "The Hei‑VAP Industrial Basic offers essential evaporation features in a compact, cost-effective package. With its universal heating bath, programmable control panel, spill-safe water integration, and GMP validation option, it balances affordability and automation. It supports scalable workflows with intuitive controls and durable engineering, even without advanced safety enclosures. The optional base cart further enhances functionality by providing mobility and accessory storage. Ideal for labs seeking robust evaporation capabilities without premium safety add-ons, it fits small to pilot-scale industrial applications with high repeatability and controllability.",
            },
            {
                name: "Universal Heating Bath up to 180 °C",
                description: "The Hei‑VAP Industrial Basic includes a high-capacity universal heating bath compatible with both water and heat transfer fluids. With operating temperatures reaching up to 180 °C, it enables efficient evaporation of high-boiling solvents. Robust design ensures even heat distribution and stable temperature control, which is essential for scalable, reproducible distillation processes."
            },
            {
                name: "Protective Receiver Cassettes",
                description: "Equipped with receiver cassettes, this model reduces the risk of breakage to the receiving flask. These cassettes stabilize the glassware during solvent transfer and shutdowns, ensuring safe containment and minimizing the chance of spillage or glass fracture—crucial for handling aggressive or hazardous chemicals."
            },
            {
                name: "Integrated Refill Water System",
                description: "To maintain optimal cooling, the unit features an integrated refill water system, automatically topping up coolant during long runs. This prevents evaporator downtime, eliminates manual refill needs, and guards against overpressure or overheating events, supporting seamless, unattended operation."
            },
            {
                name: "Spillover Prevention Features",
                description: "The system includes reservoir overflow protection to prevent fluid spills from entering electrical components. This feature enhances laboratory safety and minimizes maintenance by ensuring bath fluids stay within the bath housing—even during sudden temperature changes or rapid distillation cycles."
            },
            {
                name: "Bottom Drain Release Valve",
                description: "For safe and clean maintenance, the heating bath incorporates a bottom drain valve that enables easy fluid drainage. This eliminates the need for lifting or tilting the unit, reducing the risk of operator strain or spill incidents. Ideal for routine cleaning or fluid change-over processes."
            },
            {
                name: "Large Programmable Touchscreen",
                description: "A high-resolution, 7‑inch touchscreen panel displays key parameters—rotation speed, bath temp, vacuum—and offers programmable ramp control. It ensures precise, autocontrolled evaporation cycles with real-time monitoring. User-friendly interface allows lab technicians to automate complex protocols without manual intervention."
            },
            {
                name: "GMP Certification Option (IQ/OQ)",
                description: "This model supports GMP-level documentation with optional Installation Qualification (IQ) and Operational Qualification (OQ) packages. It facilitates compliance with pharmaceutical and regulatory standards—vital for labs producing APIs, biotech products, or other regulated materials requiring auditability and validation records."
            },
            {
                name: "Optional Mobile Base Cart",
                description: "For increased laboratory flexibility, this evaporator supports an optional base cart with wheels and storage space. The cart makes the system mobile, while removable panels accommodate accessories—ideal for multi-station labs that require mobility or limited bench space."
            },
            {
                name: "Core Industrial Specification Retained",
                description: "While safety enclosures are removed in this budget variant, the model retains core industrial features: EC motor drive, high-power heater, 20 L flask capacity, and vacuum capability—delivering large-scale evaporation without performance compromise."
            },
            {
                name: "Cost‑Effective Distillation Platform",
                description: "By reducing certain safety features yet maintaining automation, precision, and GMP compliance, the Hei‑VAP Industrial Basic is a cost-effective entry point into large-scale distillation. It appeals to labs that require high-throughput solvent recovery while operating within budget constraints, without sacrificing essential performance."
            }
        ],

        advantages: [
            {
                overview: "The Hei‑VAP Industrial Basic offers a cost-efficient solution for large-volume solvent evaporation without cutting essential capabilities. You get precise temperature control, vacuum compatibility, programmable operation, and GMP-ready certification—all built into a modular system that grows with your needs. Its simplified safety setup reduces cost but maintains performance, while easy maintenance features like bottom drainage and water refill optimize uptime. Ideal for budget-conscious labs, the Basic model ensures reliable evaporation, solvent recovery, and process standardization at a lower investment threshold."
            },
            {
                name: "Budget‑Friendly Scalability",
                description: "Offers large-scale evaporation capacity with key automated features at a lower price point. It helps labs scale up solvent processing without paying for advanced safety enclosures, striking a balance between investment and capability."
            },
            {
                name: "Reliable and Repeatable Ramps",
                description: "Programmable control panel enables consistent solvent evaporation cycles through multi-step ramping—ideal for repeatable batch protocols, reducing manual oversight and variability across runs in industrial or pilot plant settings."
            },
            {
                name: "Simplified Safety Without Trade‑off",
                description: "Although certain safety enclosures are absent, splash-resistant receiver cassettes, non-intrusive operating design, and stable mechanical base ensure safe operation with minimal exposure to solvents or breakage during routine use."
            },
            {
                name: "Low‑Maintenance Fluid Control",
                description: "Integrated refill and drain systems reduce manual handling, allowing operators to safely manage fluid levels and clean the unit between runs. Lab productivity increases as maintenance time and exposure risks decrease."
            },
            {
                name: "GMP Ready for Regulated Environments",
                description: "IQ/OQ documentation ensures easy integration into GMP-compliant processes—a cost-saving route for labs in pharma and biotech sectors seeking regulatory-ready distillation without full industrial features."
            },
            {
                name: "Enhanced Mobility and Lab Layout Flexibility",
                description: "The optional base cart allows repositioning the evaporator as needed, freeing up bench space and improving workflow efficiency across multiple stations—ideal for modular lab environments or pilot production setups."
            },
            {
                name: "Robust Industrial Performance",
                description: "Despite being a budget variant, it maintains a heavy-duty EC motor and high power heating bath, supporting industrial-grade evaporation rates and load capacities necessary for medium to large batch processes."
            },
            {
                name: "Energy‑Efficient Evaporation Cycles",
                description: "Programmable controls reduce energy waste by optimizing ramp profiles. Features like spill prevention and auto water refill also prolong operational thermostability—minimizing utility usage during long or repeated distillation runs."
            },
            {
                name: "Streamlined Process Integration",
                description: "Compatible with Heidolph vacuum pumps and chillers, this model integrates effortlessly into existing lab setups—offering labs a straightforward path to enhance distillation workflows without overhauling infrastructure."
            },
            {
                name: "Trusted Post‑Sale Support from Inkarp",
                description: "As Heidolph’s authorized India distributor, Inkarp provides certified installation, preventive maintenance, and responsive service across India. This ensures the Basic model stays reliable, safe, and well-supported throughout its lifecycle."
            }
        ],


        techSpecs: {
            overview: "The Hei-VAP Industrial Rotary Evaporator is a premium solution for high-throughput and large-scale distillation needs in pharmaceutical, chemical, and industrial research environments. Designed for efficiency and reliability, this robust evaporator supports continuous operation with excellent thermal performance and intuitive touch-panel controls. Whether you're working on solvent recovery, sample concentration, or purification, the Hei-VAP Industrial ensures maximum safety, reproducibility, and scalability. Its ergonomic design, combined with user-friendly features, makes it ideal for process development and routine operations in both R&D and production labs. Trust Hei-VAP for precision, performance, and long-term value in every application.",

            specs: {
                "Dimensions (W × H × D)": "998 × 2,225 × 694 mm",
                "Weight": "approx. 120 kg (without glassware)",
                "Drive": "EC motor",
                "Speed Range": "6 – 160 rpm",
                "Heating Power": "4,000 W",
                "Acoustic Pressure": "< 85 dB(A) (IEC 61010)",
                "Rated Voltage": "3 × 400 V (50/60 Hz) or 1 × 230 V (50/60 Hz)",
                "Electrical Connection": "L1+L2+L3+N+PE or L+N+PE",
                "Protection Class": "I",
                "Overvoltage Category": "II",
                "Degree of Pollution": "2",
                "Power Input": "4,600 W max.",
                "Operating Temperature": "5–31 °C @ 80% RH; 32–40 °C @ 50% RH (linear drop)",
                "Installation Altitude": "up to 2,000 m asl",
                "Stroke Flask Lift": "180 mm",
                "Lifting Speed Flask Lift": "45 mm/s",
                "Evaporation Rates (L/h, ΔT 40 °C)": "Toluene: 26.0 / Acetone: 25.9 / Ethanol: 12.9 / Water: 4.7",
                "Max Cooling Surface": "1.2 m² (glass set dependent)",
                "Heating Bath Dimensions": "Inner Ø: 397 mm / Outer Ø: 400 mm",
                "Heating Bath Material": "V4A steel (1.4404)",
                "Heating Bath Volume": "18 L (H₂O) / 14 L (oil)",
                "Temperature Range Heating Bath": "20–100 °C (H₂O) / 20–180 °C (oil)",
                "Overtemperature Protection": "Integrated, mechanical",
                "Overheat Protection": "Not applicable",
                "Control Interface": "Detachable 7\" touch panel with control knobs",
                "Control Accuracy": "±1 °C",
                "Storage Conditions": "Same as Operating Temp. (with same humidity limits)",
                "Permissible Leakage Rate": "1 mbar/min",
                "Device Protection Rating": "IP20",
                "Control Panel Protection": "IP45",
                "Heating Bath Temp. Control": "Microprocessor-based",
                "Required Pump Capacity": "1.5 – 3 m³/h",
                "Cooling Liquid Consumption": "150 – 250 L/h"
            }
        },

        faqs: [
            {
                question: "What is the Hei-VAP Industrial Rotary Evaporator Basic used for?",
                answer: "The Hei-VAP Industrial Rotary Evaporator Basic is designed for large-scale solvent evaporation in laboratories, pilot plants, and process development units. It is ideal for concentrating, distilling, and purifying chemical solutions, particularly in pharmaceutical, biotech, and chemical industries. With a programmable touchscreen, integrated refill system, and optional GMP compliance, it simplifies high-throughput evaporation while ensuring safety and reproducibility. Labs use it for recovering solvents, drying samples, and processing heat-sensitive materials. Its robust construction supports consistent batch operations, making it an essential tool for R&D and production environments where cost-effectiveness, performance, and automation are critical."
            },
            {
                question: "What makes the Hei-VAP Industrial Basic suitable for budget-conscious labs?",
                answer: "The Hei-VAP Industrial Basic retains all core functional specifications of the advanced industrial model but omits high-cost safety features like metal enclosures and protective doors. This strategic reduction allows labs to access high-performance evaporation capabilities—such as programmable ramping, large heating bath, and high-throughput solvent recovery—at a more affordable price point. By focusing on essential operations and minimizing non-critical extras, the Basic model balances affordability and reliability. It's ideal for labs that require scalable evaporation but operate within tighter budgets, particularly in academic, pilot, or low-to-medium risk environments where enclosure features are optional."
            },
            {
                question: "How does the integrated refill system in the Hei-VAP Industrial Basic work?",
                answer: "The integrated refill water system in the Hei-VAP Industrial Rotary Evaporator Basic allows the unit to automatically replenish its cooling circuit without manual intervention. This is particularly valuable during long, unattended distillation cycles, where continuous cooling is critical for performance and safety. The system maintains optimal coolant levels, reducing overheating risks and ensuring uninterrupted operation. This not only saves time but also prevents damage to the condenser or heating bath. It's a key feature that enhances uptime, reduces operator workload, and contributes to the unit's low-maintenance, high-efficiency design—especially in demanding industrial workflows."
            },
            {
                question: "What GMP compliance options are available for the Hei-VAP Industrial Basic?",
                answer: "The Hei-VAP Industrial Basic supports Good Manufacturing Practice (GMP) compliance through optional IQ (Installation Qualification) and OQ (Operational Qualification) certification packages. These documentation services ensure the equipment is properly installed, calibrated, and performing within validated parameters. GMP compliance is essential for pharmaceutical and biotech labs involved in regulated production or clinical research. With Inkarp as your authorized distributor, trained engineers provide full validation support, documentation, and post-sale service. This enables labs to confidently meet audit requirements and regulatory guidelines, even while using the more economical Basic model of the Hei-VAP Industrial series."
            },
            {
                question: "What are the heating capabilities of the Hei-VAP Industrial Rotary Evaporator Basic?",
                answer: "The unit features a high-capacity universal heating bath made from corrosion-resistant stainless steel, capable of reaching temperatures up to 180 °C. It is compatible with both water and oil, allowing flexible solvent evaporation based on boiling points. The microprocessor-controlled bath provides accurate temperature regulation (±1 °C), ensuring reproducible results across multiple runs. A bottom drain valve facilitates easy and safe disposal of bath fluid, while spillover prevention protects internal components. This high-power (4,000 W) heating system allows evaporation of both low- and high-boiling solvents, supporting a wide range of applications in chemical and pharmaceutical processing."
            },
            {
                question: "Can the Hei-VAP Industrial Basic handle hazardous solvents?",
                answer: "Yes, the Hei-VAP Industrial Rotary Evaporator Basic is capable of processing aggressive or hazardous solvents. It includes safety features such as protective receiver cassettes that reduce breakage risks during solvent recovery and shutdown. The unit's robust EC motor, spill-resistant design, and programmable ramp control further enhance safety and operational consistency. However, it does not come with protective enclosures (PMMA doors or glass hoods), so it is best used in controlled lab environments where exposure risks are managed. For labs handling particularly volatile or toxic materials, additional safety protocols or external fume hoods are recommended."
            },
            {
                question: "How user-friendly is the Hei-VAP Industrial Basic for daily lab operations?",
                answer: "The Hei-VAP Industrial Basic is engineered for ease of use with its intuitive 7-inch touchscreen interface that displays critical process parameters such as bath temperature, flask speed, and vacuum pressure. It supports programmable multi-step ramps, enabling automation of complex evaporation tasks without manual input. Features like automatic water refill, bottom drain valve, and optional mobility cart simplify day-to-day operation and maintenance. Its modular layout, quick-access controls, and clear UI reduce training requirements for new users. This makes it ideal for busy labs seeking a user-friendly, high-performance rotary evaporator with low operational complexity."
            },
            {
                question: "Is the Hei-VAP Industrial Rotary Evaporator Basic scalable for future lab needs?",
                answer: "Absolutely. The Hei-VAP Industrial Basic is designed with scalability in mind. It integrates smoothly with external vacuum pumps, chillers, and other distillation components. The optional mobile base cart enhances mobility and offers additional storage for accessories. Its robust build and programmable interface support a variety of applications, from sample preparation to pilot production. As your lab expands, the system can be upgraded with compatible safety accessories or moved across lab stations without disrupting workflows. It’s a long-term solution that adapts to evolving needs in pharma, chemistry, and industrial R&D environments."
            },
            {
                question: "What is the evaporation rate capacity of the Hei-VAP Industrial Basic?",
                answer: "The Hei-VAP Industrial Rotary Evaporator Basic delivers impressive evaporation rates across common solvents: approximately 26 L/h for toluene and acetone, 12.9 L/h for ethanol, and 4.7 L/h for water at a ΔT of 40 °C. These rates make it ideal for high-throughput applications such as bulk solvent recovery or sample concentration in large volumes. The combination of a 1.2 m² cooling surface and 20-liter flask capacity ensures efficient distillation, even during continuous or batch operations. Its consistent evaporation performance supports scale-up needs in industrial R&D, pharmaceutical formulation, and pilot plant settings."
            },
            {
                question: "Why should I choose Inkarp as the supplier for Hei-VAP Industrial Rotary Evaporator Basic?",
                answer: "Inkarp Instruments Pvt. Ltd. is the official authorized distributor for Heidolph in India, offering certified sales, installation, and post-sale service for the Hei-VAP Industrial Basic. With over four decades of experience, Inkarp provides localized technical support, preventive maintenance, and validation services (IQ/OQ) to ensure optimal performance and compliance. Our pan-India presence ensures fast delivery, expert consultation, and on-site assistance in all major industrial and research hubs. Choosing Inkarp means partnering with a trusted supplier that not only delivers equipment but also ensures long-term performance, service reliability, and regulatory peace of mind."
            }
        ],
    },

}
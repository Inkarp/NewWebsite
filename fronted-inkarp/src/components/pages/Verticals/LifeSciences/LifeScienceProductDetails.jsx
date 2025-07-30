// src/components/pages/Verticals/ProductDetail.jsx
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { Share2, Download, HelpCircle, CheckCircle, Wrench, Phone, Settings, FlaskConical, ZoomIn, } from "lucide-react";
import { HiOutlineClipboardList } from "react-icons/hi";
import RotaryFaqs from "../SynthesisAndFlowChemistry/RotaryFaqs";
import ME204 from "/images/products/Mettler/ME204.jpg";
import Mettler from "/src/assets/PrincipalLogos/RowTwo/Metller.svg";
import ME204T from "/images/products/Mettler/ME204t.jpg";
import ME1002 from "/images/products/Mettler/ME1002.jpg";



const SynthesisProductDetails = {

  "hei-vap-core": {
    id: "hei-vap-core",
    name: "Hei-VAP Core Rotary Evaporator",
    image: ME204,
    logo: Mettler,
    altText: "Hei VAP Core Rotary Evaporator",
    videoId: "DBJ_Gs5H76Y",
    description: `The Hei-VAP Core Rotary Evaporator is engineered for essential, everyday distillation tasks. It combines reliability, safety, and simplicity—making it the perfect choice for routine applications in research and industry.`,
    meta: {
      title: "Hei-VAP Core Rotary Evaporator – Distributor & Service Provider in India | Inkarp",
      description: "Authorized distributor of Heidolph Hei-VAP Core Rotary Evaporator in India. Inkarp offers installation, service, and technical support across all regions.",
      keywords: [
        "Rotary Evaporator",
        "Hei-VAP Core Rotary Evaporator",
        "Rotary evaporator for water distillation",
        "Pharmaceutical rotary evaporator",
        "Best Heidolph Rotary Evaporator In India",
        "Hei VAP Core Rotary Evaporator Service Provider In India",
        "Hei VAP Core Rotary Evaporator Distributor In India",
        "Water Distillation Unit For Laboratory",
        "Solvent Recovery Unit Distributor In India",
        "Hei-VAP Core hand lift model with G3 glassware"
      ],
      altText: "Hei VAP Core Rotary Evaporator In India",
      internalLinks: ["Internal Product Pages Links"],
      externalLinks: ["Heidolph Website"]
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Heidolph Hei-VAP Core Rotary Evaporator",
      image: "https://www.inkarp.co.in/assets/images/products/hei-vap-core.jpg",
      description: "The Hei-VAP Core Rotary Evaporator is ideal for routine distillation, offering essential control, safety, and efficiency in laboratories. Inkarp is the authorized distributor and service provider in India.",
      brand: {
        "@type": "Brand",
        name: "Heidolph"
      },
      sku: "HEI-VAP-CORE-HANDLIFT-G3",
      mpn: "HEI-VAP-CORE-G3-HL",
      review: {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        },
        author: {
          "@type": "Organization",
          name: "Inkarp Instruments"
        }
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "27"
      },
      offers: {
        "@type": "Offer",
        url: "https://www.inkarp.co.in/products/hei-vap-core",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition"
      }
    },
    features: [
      {
        name: "Clear Digital Display",
        description: "Easily monitor actual and set values for both rotation speed and heating bath temperature."
      },
      {
        name: "Dual Control Knobs with Dynamic Tuning",
        description: "Separate knobs provide intuitive control:\n\nFast rotation for quick changes\n\nSlow rotation for precision adjustments\nLock function prevents accidental value changes"
      },

      {
        name: "Intuitive LED Ring Light System",
        description: " Illuminated indicators show active functions from a distance—ensuring quick and clear status checks."
      },
      {
        name: "Manual Immersion and Inclination Adjustment",
        description: "Flexible immersion depth up to 155 mm and inclination angle from 20° to 80° to support a wide range of evaporation needs."
      },
      {
        name: "Standby Function & Residual Heat Warning",
        description: "Automatic safety features halt operations and warn the user when bath temperatures exceed 50 °C."
      },
      {
        name: "Available in Hand or Motor Lift Models",
        description: "Choose between a manual hand lift or automated motor lift version depending on your operational preferences."
      },
      {
        name: "Hand Lift Model with G3 Vertical Glassware",
        description: "The hand lift model with G3 vertical glassware offers efficient vertical condensation, ideal for standard distillation processes."
      }
    ],

    advantages: [
      {
        name: "Simplified operation",
        description: "Minimalistic yet effective controls reduce training time and improve workflow efficiency."
      },
      {
        name: "Enhanced Visibility & Safety",
        description: " LED ring and residual heat alerts keep users informed and safe during operations."
      },
      {
        name: "Precision Control",
        description: " Dynamic knobs allow both rapid and fine-tuned adjustments without navigating complex menus."
      },
      {
        name: "Space-Saving Vertical Glassware",
        description: "The G3 vertical glassware configuration ensures optimal use of lab space with excellent condensation performance."
      },
      {
        name: "Flexible & Adaptable",
        description: "Adjustable immersion depth and angle offer greater compatibility with various flask types and sample volumes."
      },
      {
        name: "Cost-Effective for Routine Applications",
        description: "A reliable and affordable solution for labs seeking efficiency without unnecessary extras."
      },
    ],

    techSpecs: {
      "Dimensions (W × H × D)": "- Motor Lift with G3 Glassware: 739 × 845 × 432 mm\n- Manual Lift with G3 Glassware: 739 × 845 × 487 mm",
      "Weight": "- Motor Lift Variant: 15 kg\n- Manual Lift Variant: 14.7 kg",
      "Drive Type": "EC motor",
      "Speed Range": "10 – 280 rpm",
      "Heating Power": "1300 W",
      "Acoustic Pressure": "< 85 dB(A) (IEC 61010)",
      "Rated Voltage": "230 V / 115 V, 50/60 Hz",
      "Protection Class (Device)": "IP 20",
      "Protection Class (Bath Cable)": "IP 67",
      "Power Input": "1,400 W",
      "Lifting Speed (Flask)": "25 mm/s",
      "Evaporation Rate (Toluol)": "8.5 L/h",
      "Evaporation Rate (Acetone)": "5.8 L/h",
      "Evaporation Rate (Ethanol)": "3.5 L/h",
      "Evaporation Rate (Water)": "1.2 L/h",
      "Cooling Surface": "0.22 m²",
      "Heating Bath (Inner Ø)": "253 mm",
      "Heating Bath (Outer Ø)": "291 mm",
      "Bath Material": "Stainless steel V4A (1.4404)",
      "Bath Volume": "4.5 L",
      "Bath Temp Range": "20–100 °C (H₂O), 20–210 °C (oil)",
      "Overtemperature Protection": "5 °C above set temperature",
      "Overheat Protection": "250 °C",
      "Control Type": "Electronic",
      "Control Accuracy": "±1 °C"
    },
    distributorInfo: {
      title: "Inkarp: Authorized Distributor and Service Provider for Heidolph Hei-VAP Core Rotary Evaporator in India",
      summary:
        "Inkarp is proud to be the authorized distributor and service provider for the Heidolph Hei-VAP Core Rotary Evaporator in India, offering nationwide coverage and unmatched technical expertise. Our extensive support network ensures prompt service, tailored installations, and reliable product delivery—helping laboratories achieve consistent and high-performance evaporation results.\n\nWith over 40 years of industry experience, Inkarp has earned the trust of top-tier pharmaceutical companies, research institutions, and academic laboratories across the country. Our mission is to empower scientific discovery by offering advanced rotary evaporator systems backed by responsive support and application guidance."
    },


    highlights: [
      "🔧 On-site installation, training & maintenance by experienced engineers",
      "📞 Personalized consultation for configuration and applications",
      "⚙️ Fast-response service and support for minimal downtime",
      "🧪 Trusted by India's leading labs for quality and precision",
    ],
    closingLine:
      "Partner with Inkarp to elevate your lab's evaporation performance—efficiently, reliably, and expertly.",
    faqs: [
      {
        question: "What is the Heidolph Hei-VAP Core Rotary Evaporator used for?",
        answer:
          "The Heidolph Hei-VAP Core Rotary Evaporator is primarily used for gentle removal of solvents through evaporation, particularly in chemical, pharmaceutical, and life science laboratories. It is ideal for routine applications that require precise and reliable solvent distillation, sample concentration, or drying under reduced pressure. Common use cases include preparing samples for chromatographic analysis, extracting plant materials, and recycling solvents in research and quality control environments. The Hei-VAP Core offers essential functionality without complexity, making it a practical and efficient tool for labs requiring dependable performance with straightforward operation. Its compact design, safety features, and compatibility with vacuum pumps and chillers make it an indispensable instrument in modern laboratory workflows."
      },
      {
        question: "What's the difference between hand lift and motor lift models in the Hei-VAP Core series?",
        answer:
          "In the Hei-VAP Core Rotary Evaporator product line, users can choose between hand lift and motor lift models based on their application requirements and budget. The hand lift model features a manual lever to raise or lower the evaporating flask, giving users full tactile control, which is ideal for simple, cost-effective operation. In contrast, the motor lift model automates the lifting process using a motorized mechanism, offering enhanced convenience, precision, and safety—especially useful in repetitive procedures or multi-step protocols. Both models share core functionalities such as digital temperature and speed display, LED status ring, and dynamic control knobs. However, the motor lift model is often preferred in high-throughput labs where automation can save time and reduce manual handling, minimizing risk and increasing consistency."
      },
      {
        question: "What is G3 vertical glassware, and why is it preferred with the Hei-VAP Core hand lift model?",
        answer:
          "G3 vertical glassware refers to a high-efficiency glass condenser with vertical alignment, designed to optimize vapor condensation in a compact footprint. When paired with the Hei-VAP Core hand lift model, this setup is particularly effective for solvent recovery and evaporation processes that require upright operation. The vertical design conserves benchtop space while promoting efficient distillate collection, making it ideal for standard lab setups. G3 condensers typically feature a large surface area and integrated safety features, such as vapor duct seals and drain valves, which enhance solvent recovery and reduce environmental exposure. Laboratories choose the hand lift model with G3 vertical glassware for its balance of cost-effectiveness, simplicity, and reliability—especially in settings where routine evaporation tasks are common and lab space is limited."
      },
      {
        question:
          "What range of immersion depth and inclination does the Hei-VAP Core allow, and how does this benefit lab applications?",
        answer:
          "The Heidolph Hei-VAP Core Rotary Evaporator offers an adjustable immersion depth of up to 155 mm and a variable inclination angle from 20° to 80°, providing unmatched flexibility for laboratory operations. This feature allows the evaporating flask to be positioned precisely based on the volume of the sample, flask size, and type of process (e.g., drying vs. concentration). The ability to fine-tune the immersion ensures better thermal exchange between the flask and the heating bath, improving distillation efficiency. Additionally, angle adjustment helps accommodate specialized distillation procedures or prevent bumping in certain solvent systems. This flexibility is especially important in research environments where multiple users and varied applications are common, allowing each operator to customize the rotary evaporator to their exact process requirements."
      },
      {
        question:
          "Can the Hei-VAP Core be used for large-scale distillation tasks, or is it limited to small-scale applications?",
        answer:
          "The Hei-VAP Core is specifically engineered for lab-scale and mid-scale distillation tasks, making it ideal for routine solvent evaporation, concentration, and drying in academic, pharmaceutical, and industrial labs. While it is not intended for large-scale industrial distillation (which requires high-volume evaporators such as the Hei-VAP Industrial models), it can still process moderate sample volumes efficiently using standard rotary flask sizes (e.g., 1L to 5L). For high-throughput needs or continuous operations, labs may upgrade to Heidolph’s Hei-VAP Advantage or Hei-VAP Precision lines. However, the Hei-VAP Core strikes the right balance between simplicity, performance, and cost for labs conducting daily evaporations, sample preparations, and solvent recycling. Its compatibility with vacuum pumps and recirculating chillers further enhances its capacity and efficiency, making it a versatile choice for most lab settings."
      },
      {
        question: "What safety features are integrated into the Hei-VAP Core Rotary Evaporator?",
        answer:
          "The Hei-VAP Core Rotary Evaporator is equipped with several critical safety features to protect both users and equipment during operation. A residual heat warning system alerts the user if the heating bath temperature remains above 50 °C after use, reducing the risk of accidental burns or overheating. A standby function allows all system functions to be paused instantly, which is especially useful in emergencies or when changing samples. Additionally, the system includes a value lock feature that prevents unintentional changes to the set rotation speed or bath temperature. The LED ring system provides visual status cues from a distance, letting users quickly determine if the system is running or in standby mode. Combined, these features ensure a safe working environment, particularly in busy labs or educational institutions where multiple users may share equipment"
      },
      {
        question: "Is the Hei-VAP Core compatible with vacuum pumps and recirculating chillers?",
        answer:
          "Yes, the Hei-VAP Core Rotary Evaporator is fully compatible with a wide range of vacuum pumps and recirculating chillers, allowing labs to configure a complete evaporation system tailored to their needs. By connecting a vacuum pump, users can lower the boiling point of solvents, enabling faster evaporation at lower temperatures, which is especially beneficial for heat-sensitive samples. A chiller, on the other hand, enhances condensation efficiency and minimizes solvent loss by maintaining the condenser temperature at optimal cooling levels. Heidolph also offers dedicated accessories and vacuum controllers that seamlessly integrate with the Hei-VAP series for streamlined operation. Inkarp provides full consultation and support for selecting and setting up the right peripheral equipment for your workflow, ensuring a complete, high-performance solution for solvent evaporation."
      },
      {
        question:
          "What does regular maintenance of the Hei-VAP Core involve, and how can Inkarp assist?",
        answer:
          "Routine maintenance of the Hei-VAP Core Rotary Evaporator involves a few key steps to ensure long-term performance and user safety. Operators should regularly clean all glass components, check seals and gaskets for wear or leaks, and inspect the heating bath for scale or fluid levels. It’s also advisable to verify the proper functioning of safety features like the lock function and LED indicators. Periodic calibration may be necessary to maintain accuracy in temperature and rotation speed readings. Inkarp, as the authorized service provider in India, offers comprehensive AMC (Annual Maintenance Contracts), on-site servicing, and calibration support. With a nationwide network of trained engineers, Inkarp ensures timely service visits, genuine spare parts, and ongoing technical support, helping your lab maximize uptime and performance."
      },
      {
        question:
          "Does Inkarp provide installation, training, and after-sales service across India?",
        answer:
          "Yes, Inkarp offers complete end-to-end support for all Heidolph Hei-VAP Core Rotary Evaporator units sold across India. Our team of trained engineers provides on-site installation, ensuring that the equipment is correctly assembled, tested, and ready for use. We also offer comprehensive training for your lab personnel covering safe operation, routine maintenance, and troubleshooting best practices. Post-installation, Inkarp’s nationwide service infrastructure guarantees timely support, spare parts availability, and preventive maintenance, minimizing downtime and extending equipment life. Whether you're based in a metro city or a remote research facility, Inkarp is committed to delivering prompt, professional, and responsive service throughout your ownership of the Hei-VAP Core."
      },
      {
        question:
          "How can I buy the Heidolph Hei-VAP Core Rotary Evaporator in India, and what support is included?",
        answer:
          "To purchase the Heidolph Hei-VAP Core Rotary Evaporator in India, you can directly reach out to Inkarp, the official authorized distributor and service provider. Inkarp provides a personalized consultation to understand your specific evaporation needs and help you configure the right model—be it hand lift or motor lift, with G3 vertical glassware or other glassware configurations. As part of our offering, we include quotation assistance, order processing, delivery coordination, installation, and full technical support. We also help you integrate accessories such as vacuum pumps and chillers for a turnkey solution. With over 40 years of experience and a deep understanding of lab workflows, Inkarp is your trusted partner for reliable, efficient, and expert support—before and after the purchase."
      }
    ]
  },
  "hei-vap-expert": {
    id: "hei-vap-expert",
    name: "Hei-VAP Expert",
    image: ME204T,
    logo: Mettler,
    altText: "Hei VAP Expert",
    videoId: "DBJ_Gs5H76Y",
    description: `The Hei VAP Expert Rotary Evaporator is a cutting-edge solution designed to simplify and streamline evaporation, distillation, and solvent recovery processes in modern laboratories. With advanced features, intuitive controls, and upgrade-ready architecture, it stands out as a reliable choice for high-performance applications.`,

    meta: {
      title: "Hei-VAP Expert Rotary Evaporator – Distributor & Service Provider in India | Inkarp",
      description: "Buy Hei VAP Expert Rotary Evaporator in India from Inkarp. Precision distillation, solvent recovery & water evaporation with expert support & nationwide service.",
      keywords: [
        "Hei VAP Expert Rotary Evaporator",
        "Rotary Evaporator for Lab",
        "Water Distillation Unit for Laboratory",
        "Solvent Recovery Unit Distributor in India",
        "Rotary Evaporator with Touchscreen",
        "Laboratory Evaporation System",
        "GMP Compliant Rotary Evaporator",
        "Rotary Evaporator with Vacuum Control",
        "Heidolph Hei-VAP Expert Price India",
        "Rotary Evaporator for Pharmaceutical Labs",
        "Hei VAP Expert Rotary Evaporator Distributor in India",
        "Hei VAP Expert Rotary Evaporator Service Provider In India"
      ],
      altText: "Hei VAP Expert Rotary Evaporator",
      internalLinks: ["Product Pages"],
      externalLinks: ["Heidolph Website"]
    },

    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Hei VAP Expert Rotary Evaporator",
      image: "https://www.inkarp.co.in/images/hei-vap-expert.jpg",
      description: "Hei VAP Expert Rotary Evaporator is a precision laboratory instrument for evaporation, water distillation, and solvent recovery. Distributed and supported in India by Inkarp.",
      brand: {
        "@type": "Brand",
        name: "Heidolph"
      },
      manufacturer: {
        "@type": "Organization",
        name: "Heidolph Instruments GmbH & Co. KG",
        url: "https://www.heidolph-instruments.com"
      },
      sku: "HEI-VAP-EXPERT-INDIA",
      mpn: "Hei-VAP-Expert",
      offers: {
        "@type": "Offer",
        url: "https://www.inkarp.co.in/products/hei-vap-expert-rotary-evaporator",
        priceCurrency: "INR",
        price: "Request for Quote",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: {
          "@type": "Organization",
          name: "Inkarp Instruments Pvt. Ltd.",
          url: "https://www.inkarp.co.in"
        }
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "26"
      }
    },

    features: [
      {
        name: "Precise Control of Rotation Speed and Heating",
        description: "Adjust rotation speed and heating bath temperature with high accuracy using the digital 5” touch display or conveniently via dedicated control knobs—ideal for quick changes during active processes."
      },
      {
        name: "User-Friendly Touchscreen Interface",
        description: "A centrally positioned touch control panel provides a clear and detailed overview of all process parameters. Operate easily in Basic or Advanced mode depending on your workflow needs."
      },
      {
        name: "Built-In Safety Functions",
        description: " Features a programmable timer, maximum temperature limiter, and multilingual interface with real-time error message display for enhanced safety and compliance."
      },
      {
        name: "Separate Control Knobs with Locking Mechanism",
        description: "Dedicated knobs for both heating and rotation include a locking function to prevent accidental adjustments, ensuring stable and secure operation."
      },
      {
        name: "Status Visibility from a Distance",
        description: " Integrated LED ring lights and pictograms offer visual confirmation of operational status—even from across the lab."
      },
      {
        name: "Integrated Solvent Library for Vacuum Control",
        description: "Automatically suggest optimal vacuum settings using the built-in solvent library, simplifying configuration with external vacuum controllers.."
      },
      {
        name: "Smart Connectivity",
        description: " Equipped with USB and Micro SD interfaces for easy data management, updates, and extended functionality.."
      },
      {
        name: "Optional Vapor Temperature Display",
        description: "Enhance process monitoring with an optional display for vapor temperature, ideal for sensitive distillation processes."
      },
      {
        name: "Upgradeable to Hei-VAP Expert Control",
        description: "Future-proof your lab setup by upgrading to include vacuum and chiller control, expanding functionality without replacing your system."
      },
    ],

    advantages: [
      {
        name: "Exceptional Process Control",
        description: "Delivers improved reproducibility and accelerates evaporation processes for faster results."
      },
      {
        name: "Compact and Ergonomic Design",
        description: "Optimized for space-limited laboratories while ensuring comfortable, user-friendly operation."
      },
      {
        name: "Supports GMP-Compliant Workflows",
        description: "Ideal for pharmaceutical and regulated environments where compliance and documentation are essential."
      },
      {
        name: "Quick Setup and Operation",
        description: "Designed for easy use with minimal training, saving time during implementation."
      },
      {
        name: "Reduces Solvent Waste",
        description: "Promotes safer lab practices and improves environmental sustainability through efficient recovery."
      },
      {
        name: "Wide Compatibility",
        description: "Works seamlessly with a broad range of glassware and lab accessories to suit various applications."
      },
      {
        name: "Ideal for Water Distillation and Solvent Recovery",
        description: "Provides reliable performance for common lab processes such as water distillation and solvent collection."
      }
    ],


    techSpecs: {
      "Dimensions (Motor Lift)": "Variant with motor driven lift & glassware G3: 739 × 887 × 477 mm; Variant with manual lift & glassware G3: 739 × 887 × 532 mm",
      "Weight ": "approx. 15 kg, without glassware",
      "Drive Type": "EC motor",
      "Speed Range": "10 – 280 rpm",
      "Heating Power": "1300 W",
      "Acoustic Pressure": "< 85 dB(A) (IEC 61010)",
      "Rated Voltage": "230 V / 115 V, 50/60 Hz",
      "Protection Class": "Device IP20; Control panel IP42; Control-Box IP42; Connection cable heating bath IP67; I (IEC 61140)",
      "Degree of Polution": "2",
      "Operating Temperature": "5 °C – 31 °C at up to 80 % rel. humidity | 32 °C – 40 °C at up to 50 % rel. humidity (linearly reducing)",
      "Power Input": "1,400 W",
      "Lifting Speed (Flask)": "25 mm/s",
      "Stroke flask lift": "155 mm",
      "Evaporation Rate (L/h) ΔT* 40 °C (for continuous operation)": "Toluene 8,5 | Acetone 5,8 | Ethanol 3,5 | Water 1,2",
      "Cooling Surface": "0.22 m²",
      "Heating Bath": "Inner Ø: 253 mm, outer Ø: 291 mm | Material: V4A steel (1.4404) X2CrNiMo 17-12-2 | Volume: 6 l",

      "Bath Temp Range": "20 – 100 C° H2O / 20 – 210 C° oil",
      "Overtemperature Protection": "5 °C above set temperature",
      "Overheat Protection": "Threshold value 250 °C",
      "Control Type": "Electronic",
      "Control Accuracy": "±1 °C",
      "Storage Conditions": "5 °C – 31 °C at up to 80 % rel. humidity | 32 °C – 40 °C at up to 50 % rel. humidity (linearly reducing)",
    },
    distributorInfo: {
      title: "Inkarp: Authorized Distributor and Service Provider for Heidolph Hei VAP Expert Rotary Evaporator in India",
      summary:
        "Inkarp is proud to be the authorized distributor and service provider for the Heidolph Hei VAP Expert Rotary Evaporator in India, offering pan-India coverage with unmatched technical expertise and responsive customer support. We ensure smooth, efficient evaporation workflows through tailored installations, hands-on training, and nationwide after-sales service.\n\nWith over four decades of experience, Inkarp is the preferred partner for leading pharmaceutical companies, research institutes, and academic laboratories across the country. Our focus is to empower innovation and reproducibility by delivering state-of-the-art rotary evaporator systems backed by fast, expert assistance and application-driven guidance."
    },


    highlights: [
      "🔧 On-site installation, training & maintenance by experienced engineers",
      "📞 Personalized consultation for configuration and applications",
      "⚙️ Fast-response service and support for minimal downtime",
      "🧪 Trusted by India's leading labs for quality and precision",
    ],

    faqs: [
      {
        question: "What is the Heidolph Hei-VAP Core Rotary Evaporator used for?",
        answer:
          "The Hei-VAP Core is used for gentle removal of solvents through evaporation in chemical, pharmaceutical, and life science labs. It's ideal for solvent distillation, sample concentration, and drying under reduced pressure."
      },
      {
        question: " What is the Hei VAP Expert Rotary Evaporator used for?",
        answer:
          "The Hei VAP Expert Rotary Evaporator is a high-performance laboratory instrument designed for gentle and efficient evaporation of solvents. It is widely used in applications such as sample concentration, solvent distillation, purification, and recovery processes. Ideal for pharmaceutical labs, chemical analysis, and academic research, it enables precise control over temperature and rotation speed to ensure reproducible results. Laboratories use this rotary evaporator for water distillation, organic synthesis, and extraction procedures where sensitive sample handling is required. Its intuitive interface, safety features, and upgradeable system architecture make it an essential tool for research environments that require both accuracy and efficiency in evaporation workflows."
      },
      {
        question: "What are the key features that make the Hei VAP Expert unique?",
        answer:
          "The Hei VAP Expert Rotary Evaporator stands out with its advanced digital 5” touch display, allowing users to clearly view and manage evaporation settings in either Basic or Advanced mode. Unlike standard evaporators, it includes separate control knobs with a locking mechanism to avoid accidental adjustments during active processes. It features integrated LED ring lights and activity pictograms for quick visual status recognition. The built-in solvent library simplifies vacuum adjustments with external controllers. Additionally, it offers USB and Micro SD connectivity for data transfer and firmware updates. Its future-ready design allows upgrades to Hei-VAP Expert Control for full vacuum and chiller integration, making it one of the most versatile rotary evaporators in its class."
      },
      {
        question:
          "Can the Hei VAP Expert Rotary Evaporator be used for water distillation in laboratories?",
        answer:
          "Yes, the Hei VAP Expert Rotary Evaporator is ideal for water distillation unit applications in laboratories. With a wide heating bath temperature range (20°C to 100°C with water), it enables precise and consistent water evaporation, concentration, and purification processes. The unit’s advanced control system ensures gentle heating to avoid sample degradation, making it suitable for delicate water-based applications. Its built-in safety mechanisms like maximum temperature limitation and overheat protection provide reliable operation in regulated environments. Many research institutions and pharmaceutical labs trust this system for water-based extractions and separations, benefiting from its reproducible performance, user-friendly design, and scalable configuration options."
      },
      {
        question:
          "Is the Hei VAP Expert Rotary Evaporator suitable for solvent recovery processes?",
        answer:
          "Absolutely. The Hei VAP Expert Rotary Evaporator is a preferred choice for solvent recovery applications in pharmaceutical, chemical, and environmental laboratories. Its robust construction and precise control system allow it to recover solvents like acetone, ethanol, toluene, and water with high efficiency and minimal loss. With evaporation rates such as 8.5 L/h for toluene and 5.8 L/h for acetone, it delivers reliable throughput for both small-scale and continuous operations. The system is compatible with a range of vacuum pumps and condensers, and its solvent library simplifies vacuum settings. Its ergonomic design and upgradeable controls make it a trusted tool for reducing waste and increasing cost-efficiency in solvent-intensive workflows."
      },
      {
        question: "Why choose Inkarp as your distributor for the Hei VAP Expert Rotary Evaporator?",
        answer:
          "Inkarp is the authorized distributor and service provider for Heidolph Hei VAP Expert Rotary Evaporator in India, delivering nationwide support with technical precision and industry expertise. With over 40 years of experience, Inkarp has earned the trust of India’s top pharmaceutical companies, research institutes, and academic laboratories. Our team provides on-site installation, hands-on training, and preventive maintenance, ensuring smooth lab operations from day one. We also offer personalized consultations to help you select and configure the right setup for your applications. Inkarp's fast-response service network ensures minimal downtime and consistent performance, making us a reliable partner for all your rotary evaporator requirements."
      },
      {
        question: "Can the Hei VAP Expert Rotary Evaporator be upgraded later for more advanced control?",
        answer:
          "Yes, one of the major advantages of the Hei VAP Expert Rotary Evaporator is its upgradeable architecture. Users can later enhance their system by upgrading to the Hei-VAP Expert Control version, which offers full integration with vacuum pumps and chillers for advanced automation and greater process efficiency. This future-proof approach is ideal for labs that may not require full control integration initially but want the flexibility to expand later. The upgrade enhances automation, safety, and reproducibility—critical for GMP-compliant environments and high-throughput research. This means your investment is protected and can grow with the evolving needs of your lab without replacing the entire system."
      },
      {
        question:
          "What types of solvents can be used with the Hei VAP Expert Rotary Evaporator?",
        answer:
          "The Hei VAP Expert Rotary Evaporator supports a wide range of solvents commonly used in chemical and pharmaceutical labs, including volatile and semi-volatile organic compounds. Typical solvents include acetone, ethanol, methanol, toluene, and water, with respective evaporation rates under optimal ΔT conditions like 8.5 L/h for toluene and 3.5 L/h for ethanol. The system is designed to handle corrosive and sensitive solvents through its stainless-steel heating bath and chemical-resistant materials. Paired with appropriate glassware and vacuum settings from the built-in solvent library, users can optimize evaporation performance for various protocols, making it versatile across multiple scientific applications."
      },
      {
        question:
          "What is the heating bath temperature range and material used?",
        answer:
          "The Hei VAP Expert Rotary Evaporator features a high-quality V4A stainless steel heating bath with an inner diameter of 253 mm and a capacity of 6 liters. It supports a wide temperature range: 20°C to 100°C for water and 20°C to 210°C for oil-based heating, making it adaptable for a wide spectrum of distillation needs. The material ensures excellent corrosion resistance, longevity, and uniform heat distribution. Overtemperature and overheat protection features safeguard your samples and maintain system integrity. The bath is electronically controlled with ±1°C accuracy, delivering reliable thermal stability for sensitive evaporation and concentration tasks in professional lab environments."
      },
      {
        question:
          "What technical specifications should I know before installation?",
        answer:
          "Before installing the Hei VAP Expert Rotary Evaporator, labs should consider key technical details: Dimensions: 739 × 887 × 477 mm (motor lift variant); Weight: ~15 kg without glassware; Speed range: 10–280 rpm via EC motor; Heating power: 1300 W; Rated voltage: 230 V or 115 V, 50/60 Hz; Protection class: IP20–IP67 (varies by component); Evaporation rates: Up to 8.5 L/h (Toluene), 5.8 L/h (Acetone); Ambient conditions: 5°C–31°C with up to 80% RH. Ensure a proper lab environment, ventilation, and space allocation for smooth installation and operation. Inkarp provides full technical guidance and on-site setup support."

      }
    ]
  },
  "hei-vap-ultimate": {
    id: "hei-vap-ultimate",
    name: "Hei-VAP Ultimate",
    image: ME1002,
    logo: Mettler,
    altText: "Hei VAP Ultimate",
    videoId: "DBJ_Gs5H76Y",
    description: `The Hei VAP Expert Rotary Evaporator is a cutting-edge solution designed to simplify and streamline evaporation, distillation, and solvent recovery processes in modern laboratories. With advanced features, intuitive controls, and upgrade-ready architecture, it stands out as a reliable choice for high-performance applications.`,

    meta: {
      title: "Hei-VAP Expert Rotary Evaporator – Distributor & Service Provider in India | Inkarp",
      description: "Buy Hei VAP Expert Rotary Evaporator in India from Inkarp. Precision distillation, solvent recovery & water evaporation with expert support & nationwide service.",
      keywords: [
        "Hei VAP Expert Rotary Evaporator",
        "Rotary Evaporator for Lab",
        "Water Distillation Unit for Laboratory",
        "Solvent Recovery Unit Distributor in India",
        "Rotary Evaporator with Touchscreen",
        "Laboratory Evaporation System",
        "GMP Compliant Rotary Evaporator",
        "Rotary Evaporator with Vacuum Control",
        "Heidolph Hei-VAP Expert Price India",
        "Rotary Evaporator for Pharmaceutical Labs",
        "Hei VAP Expert Rotary Evaporator Distributor in India",
        "Hei VAP Expert Rotary Evaporator Service Provider In India"
      ],
      altText: "Hei VAP Expert Rotary Evaporator",
      internalLinks: ["Product Pages"],
      externalLinks: ["Heidolph Website"]
    },

    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Hei VAP Expert Rotary Evaporator",
      image: "https://www.inkarp.co.in/images/hei-vap-expert.jpg",
      description: "Hei VAP Expert Rotary Evaporator is a precision laboratory instrument for evaporation, water distillation, and solvent recovery. Distributed and supported in India by Inkarp.",
      brand: {
        "@type": "Brand",
        name: "Heidolph"
      },
      manufacturer: {
        "@type": "Organization",
        name: "Heidolph Instruments GmbH & Co. KG",
        url: "https://www.heidolph-instruments.com"
      },
      sku: "HEI-VAP-EXPERT-INDIA",
      mpn: "Hei-VAP-Expert",
      offers: {
        "@type": "Offer",
        url: "https://www.inkarp.co.in/products/hei-vap-expert-rotary-evaporator",
        priceCurrency: "INR",
        price: "Request for Quote",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: {
          "@type": "Organization",
          name: "Inkarp Instruments Pvt. Ltd.",
          url: "https://www.inkarp.co.in"
        }
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "26"
      }
    },

    features: [
      {
        name: "Precise Control of Rotation Speed and Heating",
        description: "Adjust rotation speed and heating bath temperature with high accuracy using the digital 5” touch display or conveniently via dedicated control knobs—ideal for quick changes during active processes."
      },
      {
        name: "User-Friendly Touchscreen Interface",
        description: "A centrally positioned touch control panel provides a clear and detailed overview of all process parameters. Operate easily in Basic or Advanced mode depending on your workflow needs."
      },
      {
        name: "Built-In Safety Functions",
        description: " Features a programmable timer, maximum temperature limiter, and multilingual interface with real-time error message display for enhanced safety and compliance."
      },
      {
        name: "Separate Control Knobs with Locking Mechanism",
        description: "Dedicated knobs for both heating and rotation include a locking function to prevent accidental adjustments, ensuring stable and secure operation."
      },
      {
        name: "Status Visibility from a Distance",
        description: " Integrated LED ring lights and pictograms offer visual confirmation of operational status—even from across the lab."
      },
      {
        name: "Integrated Solvent Library for Vacuum Control",
        description: "Automatically suggest optimal vacuum settings using the built-in solvent library, simplifying configuration with external vacuum controllers.."
      },
      {
        name: "Smart Connectivity",
        description: " Equipped with USB and Micro SD interfaces for easy data management, updates, and extended functionality.."
      },
      {
        name: "Optional Vapor Temperature Display",
        description: "Enhance process monitoring with an optional display for vapor temperature, ideal for sensitive distillation processes."
      },
      {
        name: "Upgradeable to Hei-VAP Expert Control",
        description: "Future-proof your lab setup by upgrading to include vacuum and chiller control, expanding functionality without replacing your system."
      },
    ],

    advantages: [
      {
        name: "Exceptional Process Control",
        description: "Delivers improved reproducibility and accelerates evaporation processes for faster results."
      },
      {
        name: "Compact and Ergonomic Design",
        description: "Optimized for space-limited laboratories while ensuring comfortable, user-friendly operation."
      },
      {
        name: "Supports GMP-Compliant Workflows",
        description: "Ideal for pharmaceutical and regulated environments where compliance and documentation are essential."
      },
      {
        name: "Quick Setup and Operation",
        description: "Designed for easy use with minimal training, saving time during implementation."
      },
      {
        name: "Reduces Solvent Waste",
        description: "Promotes safer lab practices and improves environmental sustainability through efficient recovery."
      },
      {
        name: "Wide Compatibility",
        description: "Works seamlessly with a broad range of glassware and lab accessories to suit various applications."
      },
      {
        name: "Ideal for Water Distillation and Solvent Recovery",
        description: "Provides reliable performance for common lab processes such as water distillation and solvent collection."
      }
    ],


    techSpecs: {
      "Dimensions (Motor Lift)": "Variant with motor driven lift & glassware G3: 739 × 887 × 477 mm; Variant with manual lift & glassware G3: 739 × 887 × 532 mm",
      "Weight ": "approx. 15 kg, without glassware",
      "Drive Type": "EC motor",
      "Speed Range": "10 – 280 rpm",
      "Heating Power": "1300 W",
      "Acoustic Pressure": "< 85 dB(A) (IEC 61010)",
      "Rated Voltage": "230 V / 115 V, 50/60 Hz",
      "Protection Class": "Device IP20; Control panel IP42; Control-Box IP42; Connection cable heating bath IP67; I (IEC 61140)",
      "Degree of Polution": "2",
      "Operating Temperature": "5 °C – 31 °C at up to 80 % rel. humidity | 32 °C – 40 °C at up to 50 % rel. humidity (linearly reducing)",
      "Power Input": "1,400 W",
      "Lifting Speed (Flask)": "25 mm/s",
      "Stroke flask lift": "155 mm",
      "Evaporation Rate (L/h) ΔT* 40 °C (for continuous operation)": "Toluene 8,5 | Acetone 5,8 | Ethanol 3,5 | Water 1,2",
      "Cooling Surface": "0.22 m²",
      "Heating Bath": "Inner Ø: 253 mm, outer Ø: 291 mm | Material: V4A steel (1.4404) X2CrNiMo 17-12-2 | Volume: 6 l",

      "Bath Temp Range": "20 – 100 C° H2O / 20 – 210 C° oil",
      "Overtemperature Protection": "5 °C above set temperature",
      "Overheat Protection": "Threshold value 250 °C",
      "Control Type": "Electronic",
      "Control Accuracy": "±1 °C",
      "Storage Conditions": "5 °C – 31 °C at up to 80 % rel. humidity | 32 °C – 40 °C at up to 50 % rel. humidity (linearly reducing)",
    },
    distributorInfo: {
      title: "Inkarp: Authorized Distributor and Service Provider for Heidolph Hei VAP Expert Rotary Evaporator in India",
      summary:
        "Inkarp is proud to be the authorized distributor and service provider for the Heidolph Hei VAP Expert Rotary Evaporator in India, offering pan-India coverage with unmatched technical expertise and responsive customer support. We ensure smooth, efficient evaporation workflows through tailored installations, hands-on training, and nationwide after-sales service.\n\nWith over four decades of experience, Inkarp is the preferred partner for leading pharmaceutical companies, research institutes, and academic laboratories across the country. Our focus is to empower innovation and reproducibility by delivering state-of-the-art rotary evaporator systems backed by fast, expert assistance and application-driven guidance."
    },


    highlights: [
      "🔧 On-site installation, training & maintenance by experienced engineers",
      "📞 Personalized consultation for configuration and applications",
      "⚙️ Fast-response service and support for minimal downtime",
      "🧪 Trusted by India's leading labs for quality and precision",
    ],

    faqs: [
      {
        question: " What is the Hei-VAP Ultimate Rotary Evaporator and how does it enhance laboratory evaporation processes?",
        answer:
          "The Hei-VAP Ultimate Rotary Evaporator is a high-performance laboratory instrument designed by Heidolph to simplify and optimize the process of solvent evaporation. It combines digital control, safety features, and ergonomic design, making it suitable for a wide range of evaporation tasks in chemical, pharmaceutical, and academic labs. This system allows precise control of both rotation speed and heating bath temperature via a user-friendly 7” touchscreen display or manual knobs with locking features for safety\nWhat sets the Hei-VAP Ultimate apart is its integration-ready design. It supports USB, LAN, and RS 232 interfaces, making it fully Lab 4.0 compatible, and includes an optional vapor temperature display for real-time monitoring. Laboratories benefit from improved process reproducibility, reduced solvent waste, and faster evaporation cycles, making it the preferred choice for applications such as solvent recovery, water distillation, and sample concentration."
      },
      {
        question: "Is the Hei-VAP Ultimate Rotary Evaporator suitable for water distillation and solvent recovery?",
        answer:
          "Absolutely. The Hei-VAP Ultimate Rotary Evaporator is specifically engineered for precise and efficient water distillation and solvent recovery applications. With accurate temperature control and a powerful EC motor, the system ensures stable and uniform heating, essential for the controlled evaporation of water and solvents. Its solvent library also assists in adjusting vacuum levels for optimal evaporation rates.\nThe Hei-VAP Ultimate handles solvents like ethanol, acetone, and toluene with high efficiency, boasting evaporation rates up to 8.5 L/h depending on the solvent and conditions. It’s an excellent solution for laboratories looking to improve sustainability by recovering solvents for reuse, reducing costs, and maintaining environmentally responsible practices."
      },
      {
        question: " What safety features are included in the Hei-VAP Ultimate Rotary Evaporator?",
        answer:
          "Safety is a core aspect of the Hei-VAP Ultimate’s design. The system includes overtemperature protection (cuts off operation if the bath temperature exceeds the set point by 5°C), and an overheat protection threshold of 250°C to prevent thermal damage. The control knobs have a locking mechanism to avoid accidental changes during ongoing processes.\nAdditionally, the evaporator is IP-rated (Device: IP20; Control panel: IP42; Heating cable: IP67), ensuring resistance to dust and splashes. The LED ring lights and pictogram indicators provide at-a-glance visual cues about the machine's status from a distance, reducing operator error and improving lab safety protocols."
      },
      {
        question:
          "What types of laboratories typically use the Hei-VAP Ultimate Rotary Evaporator in India?",
        answer:
          "The Hei-VAP Ultimate is trusted across multiple industries in India, including pharmaceutical R&D labs, chemical processing units, academic research departments, food technology labs, and environmental testing centers. It supports various applications like evaporation of volatile solvents, recrystallization, sample drying, and concentration of extracts.\nWith Inkarp as the authorized distributor and service provider across India, labs benefit from localized support, timely installations, and expert application guidance. This widespread trust reflects Heidolph’s global reputation and Inkarp’s commitment to enabling research excellence through reliable equipment."
      },
      {
        question:
          "How does Inkarp support customers using the Hei-VAP Ultimate in India?",
        answer:
          "Inkarp offers end-to-end support for the Hei-VAP Ultimate as its authorized distributor and service provider in India. \nThis includes:On-site installation and commissioning\nUser training and process consultation\nPreventive maintenance and breakdown service\nApplication support for solvent recovery, distillation, and sample preparation\nWith over 40 years of experience and a pan-India service network, Inkarp ensures that laboratories achieve maximum uptime and optimal use of their Heidolph equipment. Their certified engineers and fast-response support help labs avoid delays and maintain consistent research productivity."
      },
      {
        question: "What are the connectivity and automation options available with the Hei-VAP Ultimate Rotary Evaporator?",
        answer:
          "The Hei-VAP Ultimate is designed to meet the demands of smart laboratories through full Lab 4.0 compatibility. It comes equipped with USB, MicroSD, LAN, and RS 232 interfaces, allowing integration with lab data systems or external controllers. Users can store process parameters, transfer data for reporting, or synchronize with vacuum controllers and chillers.\nAn optional upgrade to Hei-VAP Ultimate Control enables full automation, including control of connected vacuum pumps and cooling systems—ideal for labs that prioritize reproducibility and minimal manual intervention."
      },
      {
        question: "Can the Hei-VAP Ultimate be upgraded after purchase for enhanced capabilities?",
        answer:
          "Yes, the Hei-VAP Ultimate is built with upgradeability in mind. Laboratories can start with the standard configuration and later upgrade to Hei-VAP Ultimate Control, which offers integrated vacuum and chiller management. This ensures the equipment grows with your evolving research needs.\nThis modular approach saves on initial costs while future-proofing your investment. It’s ideal for labs planning to scale operations or automate processes for greater throughput."
      },
      {
        question:
          "9. How does the Hei-VAP Ultimate ensure reproducibility and efficiency in evaporation processes?",
        answer:
          "Reproducibility is crucial in research, and the Hei-VAP Ultimate addresses this by allowing precise control over every process parameter. Whether adjusting rotation speed, bath temperature, or vacuum settings, the system ensures stable and repeatable conditions across multiple runs. The multilingual interface and error logging also help in monitoring process deviations.\nThis accuracy, combined with high evaporation rates and optional vapor temperature monitoring, contributes to efficient workflows and consistent output—reducing trial-and-error and enhancing confidence in experimental results."
      },
      {
        question:
          "10. Where can I buy the Hei-VAP Ultimate Rotary Evaporator in India and get reliable service?",
        answer:
          "You can purchase the Hei-VAP Ultimate Rotary Evaporator in India exclusively through Inkarp, the authorized distributor and service provider for Heidolph products. Inkarp offers pan-India support, fast delivery, and certified engineers for installation, training, and after-sales service.\nWith local offices across major cities and decades of experience in laboratory equipment distribution, Inkarp ensures a seamless experience—from consultation to commissioning and long-term maintenance—making it the most trusted source for Heidolph systems in India"
      },
      {
        question:
          "What makes Hei-VAP Ultimate the best rotary evaporator choice in India?",
        answer:
          "The Hei-VAP Ultimate stands out as the best rotary evaporator in India due to its combination of German engineering, digital precision, safety features, and support from a local expert like Inkarp. It’s suitable for all major evaporation tasks while offering:\nTouchscreen and manual control options\nRobust build with stainless steel heating bath\nBuilt-in safety measures\nIndustry-leading service support across India\nIt’s this combination of performance, reliability, and support that makes it a preferred choice among India’s leading pharmaceutical and research labs."

      }
    ]
  },

}

export default function LifeScienceProductDetails() {
  const { productSlug } = useParams();
  const product = SynthesisProductDetails[productSlug];
  const meta = product?.meta;
  const [tab, setTab] = useState("overview");
  const [showModal, setShowModal] = useState(false)

  if (!product) {
    return (
      <div className="p-10 text-center bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-red-600 font-[MaxOT]">Product Not Found</h2>
        <p className="text-gray-600 mt-2 font-[Roboto]">The product you are looking for does not exist.</p>
      </div>

    );
  }

  return (
    <>

      {meta && (
        <Helmet>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
          <meta name="keywords" content={meta.keywords?.join(", ")} />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {meta.structuredData && (
            <script type="application/ld+json">
              {JSON.stringify(meta.structuredData)}
            </script>
          )}
        </Helmet>
      )}

      <div className="min-h-screen bg-white px-10 pb-10 pt-3 ">

        {/* Header */}
        <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white px-10 py-10">
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <img src={product.logo} alt="Logo" className="w-48 h-auto mx-auto mb-6 bg-white p-4 rounded-lg shadow-md" />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-[MaxOT]">{product.name}</h1>
          </div>
        </div>

        {/* Main Section */}
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-start px-10">
            {/* Overview */}
            <div className="flex flex-col justify-center w-full">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 font-[MaxOT] border-b-2 border-[#E63946] pb-2">Overview</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{product.description}</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
                <button className="flex items-center justify-center gap-2 bg-[#E63946] text-white px-4 py-3 rounded-md hover:bg-orange-600 transition-transform transform hover:scale-105 shadow-lg font-semibold font-[MaxOT] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                  <Share2 size={18} /> Share
                </button>
                <button className="flex items-center justify-center gap-2 bg-gray-700 text-white px-4 py-3 rounded-md hover:bg-gray-800 transition-transform transform hover:scale-105 shadow-lg font-semibold font-[MaxOT] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                  <Download size={18} /> Brochure
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative rounded-lg bg-gray-200  overflow-hidden flex flex-col items-center w-full">
                <img
                  src={product.image}
                  alt={product.altText}
                  className="w-full max-w-xs  h-full object-cover p-4 transition-transform duration-200 cursor-pointer"
                  onClick={() => setShowModal(true)}
                />
                <button
                  className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white p-2 rounded-full shadow hover:bg-opacity-80 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  onClick={() => setShowModal(true)}
                  title="View Full Image"
                >
                  <ZoomIn size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
            {/* Key Features Section */}
            <div className="bg-[#F5F5F5] p-8 rounded-3xl shadow-xl p-8 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300">
              <h3 className="text-3xl font-bold text-center text-[#E63946] font-[MaxOT] mb-8">
                Key Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {product.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start bg-white/60 backdrop-blur-lg p-4 rounded-xl shadow-sm hover:shadow-md transition hover:scale-103 hover:bg-gray-200"
                  >
                    <div className="p-3 rounded-full bg-gradient-to-tr from-red-400 to-red-600 rounded-[50%] flex items-center justify-center mr-4 ">
                      <CheckCircle color="white" size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{feature.name}</p>
                      <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Key Advantages Section */}
            <div className="bg-[#F5F5F5] p-8 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300">
              <h3 className="text-3xl font-bold text-center text-[#E63946] font-[MaxOT] mb-8">
                Key Advantages
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {product.advantages.map((advantage, i) => (
                  <div
                    key={i}
                    className="flex items-start bg-white/60 backdrop-blur-lg p-4 rounded-xl shadow-sm hover:shadow-md transition hover:scale-103 hover:bg-gray-200"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-red-400 to-red-600 text-white flex items-center justify-center mr-4 shadow-md">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{advantage.name}</p>
                      <p className="text-sm text-gray-600 mt-1">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Full Image */}
        {showModal && (
          <div className="fixed  inset-0 z-50 flex items-center justify-center" onClick={() => setShowModal(false)}>
            <div className="relative w-full flex flex-col items-center max-w-xl w-full mx-4" onClick={e => e.stopPropagation()}>
              <img
                src={product.image}
                alt={product.altText}
                className="w-full h-auto rounded-lg bg-gray-100 shadow-2xl max-w-md object-contain"
              />
              <button
                className="mt-6 px-6 py-2 bg-red-600 text-white rounded font-semibold shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
                onClick={() => setShowModal(false)}
                aria-label="Cancel full image"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Technical Specs */}
        <div className=" py-5 sm:px-6 lg:px-16 w-full max-w-7xl  ">
          <div className="bg-[#F5F5F5] shadow-xl overflow-hidden rounded-3xl px-2 border border-gray-200 ">
            <h3 className="text-3xl font-bold mt-5 text-center font-[MaxOT]">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 px-10 py-5">
              {Object.entries(product.techSpecs).map(([key, value], index) => (
                <div key={index} className="flex items-center gap-3 rounded-xl shadow-md px-3 py-5 bg-white/60 hover:scale-103 transition hover:bg-gray-100">
                  <HiOutlineClipboardList className="text-red-500 mt-1" size={24} />
                  <div className="flex justify-between gap-5 w-full">
                    <p className=" text-md text-gray-800">{key}</p>
                    <p className="text-sm text-gray-800 mt-1">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Distributor Info */}
        <div className="bg-[#F5F5F5] rounded-3xl ">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-10 px-16">
            <div className="text-center mb-5">
              <h3 className="text-2xl font-extrabold font-[MaxOT] text-gray-900 tracking-tight">
                {product.distributorInfo.title}
              </h3>
              <p className="mt-4  mx-auto text-lg text-gray-600 leading-relaxed">
                {product.distributorInfo.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.highlights.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start p-6 bg-white/60 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="h-14 w-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-red-400 to-red-600 text-white shadow-md group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                  </div>
                  <div className="ml-5">
                    <p className="text-lg font-semibold text-gray-800">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-xl font-semibold text-gray-800 mt-16">
              {product.closingLine}
            </p>
          </div>
        </div>

        {product?.videoId && (
          <div className="w-[50%] mx-auto mt-5 rounded-xl">
            <iframe
              className="rounded-xl"
              width="100%"
              height="320px"
              src={`https://www.youtube.com/embed/${product.videoId}?rel=0`}
              title={`${product.name} Video`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* FAQs */}
        <div className="bg-white">
          <RotaryFaqs faqs={product.faqs} />
        </div>
      </div>
    </>
  );
}
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link, useNavigate } from "react-router-dom";
import Gea from '/src/assets/PrincipalLogos/RowFive/GEA.png';
import Proscientific from '/src/assets/PrincipalLogos/RowFive/Proscientific.png';
import Evonik from '/src/assets/PrincipalLogos/RowFive/Evonik.png';

import ME204 from "/images/products/Mettler/ME204.jpg";
import ME204T from "/images/products/Mettler/ME204t.jpg";
import ME1002 from "/images/products/Mettler/ME1002.jpg";



const synthesisData = [
  {
    principal: "GEA",
    logo: Gea,
    name:"Homogenizers",
    products: [
      "Industrial Homogenizers",
      "Laboratory Homogenizers",
      "Skid Mounted Homogenizers",
    ],
  },
  {
    principal: "Proscientific",
    logo: Proscientific,
    name:"Homogenizers",
    products: [
      "Hand Held Homogenizer",
      "Digital Benchtop Homogenizer",
      "Automated Homogenizer",
      "Digital Homogenizer",
      "Programmable Benchtop Homogenizer",
    ],
  },
  {
    principal: "Evonik",
    logo: Evonik,
    name:"",
    products: [
      "Drug-delivery-Parental Drug Delivery",
    ],
  }
];

const synthesisProducts = {
  "industrial-homogenizers": {
    models: [
      { heading: "Standard Models" },
      {
        name: "Hei-VAP Core",
        slug: "hei-vap-core",
        image: ME204,
      },
      {
        name: "Hei-VAP Expert",
        slug: "hei-vap-expert",
        image: ME204T,
      },
      {
        name: "Hei-VAP Ultimate",
        slug: "hei-vap-ultimate",
        image: ME1002,
      },
    ],
    meta: {
      title: "Best Rotary Evaporator – Water Distillation & Solvent Recovery Unit Distributor And Service Provider In India | Inkarp",
      description: "Explore Heidolph Rotary Evaporators for precise water distillation and solvent recovery in laboratories. Distributed by Inkarp – India's trusted scientific equipment partner.",
      keywords: [
        "Rotary Evaporator",
        "Rotary evaporator for water distillation",
        "Pharmaceutical rotary evaporator",
        "Best Heidolph Rotary Evaporator In India",
        "Rotary Evaporator Service Provider In India",
        "Rotary Evaporator Distributor In India",
        "Water Distillation Unit For Laboratory",
        "Solvent Recovery Unit Distributor In India",
        "Solvent Recovery Unit Service Provider In India",
        "Water Distillation and Solvent Recovery Unit"
      ],
      altText: "Best Rotary Evaporator In India",
      internalLinks: ["Internal Product Pages Links"],
      externalLinks: ["Heidolph Website"]
    },
    pageData: {
      title: "Best Rotary Evaporator In India",
      intro:
        "Rotary evaporators are essential laboratory instruments used for gentle and efficient removal of solvents through evaporation. Commonly employed in chemical, pharmaceutical, and academic labs, rotary evaporators enable precise distillation under vacuum for concentration, purification, and solvent recovery.",
      highlight:
        "The Heidolph Rotary Evaporators are the best rotary evaporators in India, the series is engineered for reliability, safety, and superior performance—making it a preferred choice for laboratories worldwide. Whether you're conducting routine distillations or working with complex compounds, Heidolph evaporators deliver unmatched precision and ease of use.",

      modelHeading: "Model Categories",
      infoSection: {
        title: "Heidolph Rotary Evaporator",
        description: `Developed in close cooperation with laboratory professionals, the Heidolph Hei-VAP series focuses on the essentials of effective distillation: user-friendly operation, thoughtful design, and enhanced safety features.
          Every model in the series offers:
          - Intuitive control panels
          - Reliable performance in demanding conditions
          - High chemical resistance and durability
          - Modular design to suit your unique application needs

          With extensive combinations of glassware and accessories, Heidolph rotary evaporators provide scalable solutions for every lab environment—from education to R&D and manufacturing.`,
      },
      subSection: {
        title:
          "Rotary Evaporator for Laboratories – Water Distillation & Solvent Recovery Unit",
        description:
          "Designed for a wide range of distillation tasks, Heidolph rotary evaporators ensure efficient water distillation and solvent recovery. Whether you're removing low-boiling solvents or processing high-viscosity samples, these units offer full control, precision, and safety.",
      },
      industriesIntro:
        "Heidolph Rotary Evaporators are trusted across a wide range of industries and scientific domains. Their precision, reliability, and adaptability make them essential tools in the following sectors:",
      industries: [
        {
          title: "Academic & Research Institutions",
          description: "Widely used in universities and research centers for organic synthesis, sample concentration, and solvent removal in both undergraduate teaching labs and advanced R&D. Their intuitive design and safety features make them ideal for training students and streamlining academic research workflows.",
          benefits: [
            "Enables quick evaporation for multiple experiments",
            "Facilitates organic synthesis and method development",
            "Safe, intuitive controls"
          ]
        },
        {
          title: "Pharmaceutical & Biotechnology Companies",
          description: "Crucial for active pharmaceutical ingredient (API) purification, formulation testing, and compound isolation. Heidolph evaporators provide reproducible, GMP-compatible distillation processes, ensuring consistent results in drug discovery, development, and quality control.",
          benefits: [
            "Enhances efficiency in API purification",
            "Ensures reproducibility in formulation",
            "Integrates into GMP-compliant labs"
          ]
        },
        {
          title: "Chemical & Petrochemical Industries",
          description: "Enable high-precision separation of chemical mixtures, recovery of valuable solvents, and pilot-scale distillation under vacuum. Their corrosion-resistant components and scalability make them suitable for both analytical testing and industrial R&D.",
          benefits: [
            "Separates volatile components from mixtures",
            "High chemical resistance",
            "Scalable for pilot-scale processes"
          ]
        },
        {
          title: "Food & Beverage Industry",
          description: "Ideal for concentrating natural extracts, essential oils, and volatile compounds while preserving aroma and flavor integrity. Used in quality control labs and R&D to create new flavor profiles and test food additives in compliance with safety standards.",
          benefits: [
            "Ideal for flavor and aroma extraction",
            "Preserves volatile compounds",
            "Supports product innovation and quality testing"
          ]
        },
        {
          title: "Environmental Testing Laboratories",
          description: "Support pre-concentration of environmental samples such as water, soil, and air extracts. Facilitate trace-level detection of contaminants (e.g., pesticides, heavy metals) in regulatory and quality assurance applications with high reproducibility.",
          benefits: [
            "Concentrates pollutants for analysis",
            "Reduces sample prep time",
            "Enhances precision and consistency"
          ]
        },
        {
          title: "Cannabis & Herbal Extraction Facilities",
          description: "Used post-extraction to recover solvents safely and efficiently while preserving delicate cannabinoids and terpenes. Heidolph rotary evaporators help maintain compliance with purity standards and optimize product yield in commercial cannabis processing.",
          benefits: [
            "Gentle solvent recovery post-extraction",
            "Retains terpenes and cannabinoids",
            "Meets purity and compliance standards"
          ]
        },
        {
          title: "Contract Research Organizations (CROs)",
          description: "Provide scalable solvent recovery and purification processes to serve multiple client projects. Their flexibility allows for method development, custom formulation trials, and reproducible results across diverse industries.",
          benefits: [
            "Flexible for diverse sample types",
            "Supports high-throughput workflows",
            "Optimized for scalable method development"
          ]
        },
        {
          title: "Government Labs & Regulatory Bodies",
          description: "Essential in labs focused on public safety, quality enforcement, and policy testing. Used for validated methods in compliance testing, fraud detection, and monitoring of controlled substances with consistent, reliable performance.",
          benefits: [
            "Reproducible for compliance testing",
            "Durable for daily use",
            "Compatible with validated methods"
          ]
        },
        {
          title: "Cosmetic & Personal Care Manufacturers",
          description: "Facilitate development of serums, creams, and concentrated actives. Ensure formulation stability during evaporation and allow small-batch testing for R&D and pilot launches while preserving efficacy of bioactive ingredients.",
          benefits: [
            "Aids in concentrated actives development",
            "Maintains ingredient integrity",
            "Enables batch-scale testing"
          ]
        },
        {
          title: "Forensics & Toxicology Labs",
          description: "Critical for isolating and concentrating toxicological substances, drugs, and forensic samples. Ensure clean sample recovery for evidence analysis while minimizing degradation and contamination, supporting accurate legal investigations.",
          benefits: [
            "Isolates trace substances for analysis",
            "Minimizes contamination risk",
            "Ensures reproducible evidence processing"
          ]
        }
      ],
      distributor: {
        title:
          "Inkarp: Authorized Distributor and Service Provider for Heidolph Rotary Evaporators in India",
        text: `Inkarp stands out as a leading distributor and service provider of Heidolph Rotary Evaporators in India, supported by an extensive nationwide network. Our robust infrastructure ensures prompt technical support, timely service, and reliable distribution solutions tailored specifically to your laboratory's needs.

        With over 40 years of experience, Inkarp has proudly partnered with premier research institutions, pharmaceutical companies, and academic laboratories across India. We are committed to enabling scientific excellence by delivering cutting-edge rotary evaporator systems along with responsive and professional technical support.

        Whether you're optimizing routine distillations or deploying complex evaporation setups, Inkarp offers:
        - Personalized consultations for configuration and applications
        - On-site service and support by experienced engineers
        - Comprehensive installation, training, and maintenance

        Partner with Inkarp to elevate your lab's evaporation performance—efficiently, reliably, and expertly.`,
      },
      faqs: [
        {
          question: 'What is the Weighing balance?',
          answer: 'The principle of a rotary evaporator is based on reducing the pressure inside the system using a vacuum, which in turn lowers the boiling point of solvents. This allows evaporation to occur at significantly lower temperatures, making the process ideal for heat-sensitive materials. A round-bottom flask containing the solution is rotated in a heated water bath. The rotation increases the surface area of the liquid and ensures even heat distribution, preventing bumping or boiling over. As the solvent evaporates, it travels through a condenser where it is cooled and then collected in a separate receiving flask. This method is highly effective for concentrating, purifying, or recovering solvents in applications such as organic synthesis, natural product extraction, and analytical chemistry. The process preserves the integrity of delicate compounds and improves efficiency in laboratory workflows.'
        },
        {
          question: 'What is the working procedure of a rotary evaporator?',
          answer: 'The working procedure of a rotary evaporator involves several coordinated steps to achieve safe and efficient solvent evaporation. First, the solution is poured into a round-bottom flask, which is securely attached to the evaporator’s rotating motor. The flask is then partially immersed in a heated water bath to promote evaporation. At the same time, a vacuum pump is engaged to reduce the pressure within the system, lowering the boiling point of the solvent. The flask is rotated to maximize surface area, allowing uniform heating and faster evaporation. The solvent vapor then passes through a condenser where it is cooled and converted back into liquid, collected in a receiving flask. This process enables users to remove solvents at lower temperatures, reducing thermal stress on the sample. It is commonly used in pharmaceutical development, sample concentration, and chemical research.'
        },
        {
          question: 'What are the top 10 applications where a rotary evaporator can be used?',
          answer: `Rotary evaporators are widely used across diverse scientific and industrial fields due to their versatility and efficiency. Top 10 applications include:

1. Organic synthesis for removing solvents after reactions,
2. Pharmaceutical research for purifying APIs,
3. Cannabis and herbal industries for extracting and concentrating bioactives,
4. Food and beverage R&D for aroma and flavor concentration,
5. Environmental analysis for concentrating trace-level pollutants,
6. Toxicology and forensic labs for isolating and analyzing samples,
7. Cosmetic industry for formulating active ingredients and essential oils,
8. Contract Research Organizations (CROs) for standardized and scalable solvent removal,
9. Academic institutions for lab teaching and training,
10. Petrochemical sector for analyzing and refining chemical compounds.

These applications highlight the instrument's crucial role in both routine and complex processes.`
        }
        ,
        {
          question: 'What makes Heidolph Rotary Evaporators ideal for laboratory use?',
          answer: 'Heidolph Rotary Evaporators stand out in the laboratory space due to their high-quality construction, intelligent design, and user-focused features. Designed in collaboration with scientists, they offer superior performance, chemical resistance, and unmatched reliability. Intuitive digital interfaces simplify operation for beginners and experts alike, while the modular design allows compatibility with a wide range of glassware and accessories. Safety features such as dry-run protection, motorized lift, and over-temperature cutoffs make them ideal for regulated environments including GMP/GLP labs. Their low-noise operation and German engineering ensure long-term durability with minimal maintenance. Whether for routine distillation or advanced solvent recovery, Heidolph units are engineered to increase efficiency, minimize risk, and provide consistency in daily lab work. That’s why they are trusted by researchers and institutions worldwide.'
        },
        {
          question: 'How can I request a product demo or consultation from Inkarp?',
          answer: 'Requesting a product demo or technical consultation from Inkarp is easy and tailored to your specific needs. You can visit the official Inkarp website and fill out the contact form with your details, indicating interest in Heidolph Rotary Evaporators. Alternatively, reach out via email or phone to speak directly with our product specialists. Once your request is received, our team will schedule either an on-site demonstration or a virtual consultation based on your convenience. During this session, our experts will evaluate your lab’s requirements, discuss your application goals, and recommend the most suitable rotary evaporator model. Inkarp also provides post-demo support such as installation planning, user training, and assistance with compliance documentation. Our goal is to ensure you make an informed purchase decision that adds long-term value to your operations.'
        },
        {
          question: 'What glassware options are available with Heidolph rotary evaporators?',
          answer: 'Heidolph offers a comprehensive selection of high-quality borosilicate glassware for different evaporation tasks. Options include vertical condensers, ideal for space-saving setups and standard distillations; diagonal condensers, which are easy to clean and maintain; and dry-ice condensers for volatile solvent recovery. Cold traps and anti-splash adapters are available for specialty applications. Each glassware set is designed for maximum chemical resistance and thermal stability. Labs can also customize their configurations based on solvent type, application volume, and condensation needs. Modular glassware designs allow for easy switching between setups without disrupting ongoing workflows. Heidolph ensures each component is leak-proof, secure, and compatible with safety shields and accessories. This flexibility helps labs manage various protocols using a single rotary evaporator system, improving productivity and reducing downtime.'
        },
        {
          question: 'Can I integrate Heidolph rotary evaporators with automation systems?',
          answer: `Yes, Heidolph rotary evaporators—especially the Hei-VAP Expert Control and Ultimate Control models—are fully compatible with modern lab automation systems. These models feature digital interfaces, programmable functions, and connectivity options for remote monitoring and control.

They can be seamlessly integrated with external vacuum controllers, chillers, and solvent recovery units to create a complete automated distillation workflow. Automation enhances efficiency, reduces human error, and ensures reproducibility—critical for pharmaceutical manufacturing and other regulated environments.

Additionally, these systems support data logging and compliance reporting, which are essential for audits and quality control. Inkarp provides expert consultation and integration support to ensure a smooth setup. Whether you're scaling up operations or aiming for greater process consistency, automation-ready Heidolph evaporators deliver the flexibility and precision your lab requires.`
        }
        ,
        {
          question: 'Do rotary evaporators require special maintenance?',
          answer: 'Rotary evaporators require regular but simple maintenance to maintain optimal performance. This includes cleaning the evaporating and receiving flasks, checking vacuum seals and tubing for leaks, lubricating joints, and inspecting moving parts like the drive motor and lift mechanism. The water bath should be kept clean to prevent scaling, and sensors should be tested periodically for accuracy. For Heidolph units, maintenance is streamlined with easy-access components and automated safety shutdown features. Inkarp provides annual maintenance contracts, preventive service checkups, and emergency repair services across India. Our service team is trained to ensure minimal downtime and extend the life of your system. Maintaining your rotary evaporator not only improves reliability but also ensures consistent results in sensitive lab operations.'
        },
        {
          question: 'How do I choose the right rotary evaporator model for my lab?',
          answer: `Choosing the right Heidolph rotary evaporator depends on your lab's workflow, application complexity, solvent types, and desired level of automation.

For routine operations, the Hei-VAP Core or Expert models offer reliability and simplicity. For high-throughput laboratories or regulated environments, the Hei-VAP Expert Control and Ultimate Control models provide advanced automation, digital monitoring, and system integration capabilities.

Key factors to consider include glassware configuration, space availability, solvent volatility, and safety requirements. Inkarp offers personalized consultation to assess your specific needs and recommend a tailored model with the right accessories.

We also provide on-site demonstrations and training, ensuring you make an informed decision. Selecting the right model will enhance efficiency, safety, and scalability in your solvent distillation workflows.`
        }

      ],
    },


  },
  "laboratory-homogenizers": {
    models: [
      { heading: "Standard Models" },
      {
        name: "Hei-VAP Core",
        slug: "hei-vap-core",
        image: ME204,
      },
      {
        name: "Hei-VAP Expert",
        slug: "hei-vap-expert",
        image: ME204T,
      },
      {
        name: "Hei-VAP Ultimate",
        slug: "hei-vap-ultimate",
        image: ME1002,
      },
    ],
    meta: {
      title: "Best Rotary Evaporator – Water Distillation & Solvent Recovery Unit Distributor And Service Provider In India | Inkarp",
      description: "Explore Heidolph Rotary Evaporators for precise water distillation and solvent recovery in laboratories. Distributed by Inkarp – India's trusted scientific equipment partner.",
      keywords: [
        "Rotary Evaporator",
        "Rotary evaporator for water distillation",
        "Pharmaceutical rotary evaporator",
        "Best Heidolph Rotary Evaporator In India",
        "Rotary Evaporator Service Provider In India",
        "Rotary Evaporator Distributor In India",
        "Water Distillation Unit For Laboratory",
        "Solvent Recovery Unit Distributor In India",
        "Solvent Recovery Unit Service Provider In India",
        "Water Distillation and Solvent Recovery Unit"
      ],
      altText: "Best Rotary Evaporator In India",
      internalLinks: ["Internal Product Pages Links"],
      externalLinks: ["Heidolph Website"]
    },
    pageData: {
      title: "Best Rotary Evaporator In India",
      intro:
        "Rotary evaporators are essential laboratory instruments used for gentle and efficient removal of solvents through evaporation. Commonly employed in chemical, pharmaceutical, and academic labs, rotary evaporators enable precise distillation under vacuum for concentration, purification, and solvent recovery.",
      highlight:
        "The Heidolph Rotary Evaporators are the best rotary evaporators in India, the series is engineered for reliability, safety, and superior performance—making it a preferred choice for laboratories worldwide. Whether you're conducting routine distillations or working with complex compounds, Heidolph evaporators deliver unmatched precision and ease of use.",

      modelHeading: "Model Categories",
      infoSection: {
        title: "Heidolph Rotary Evaporator",
        description: `Developed in close cooperation with laboratory professionals, the Heidolph Hei-VAP series focuses on the essentials of effective distillation: user-friendly operation, thoughtful design, and enhanced safety features.
          Every model in the series offers:
          - Intuitive control panels
          - Reliable performance in demanding conditions
          - High chemical resistance and durability
          - Modular design to suit your unique application needs

          With extensive combinations of glassware and accessories, Heidolph rotary evaporators provide scalable solutions for every lab environment—from education to R&D and manufacturing.`,
      },
      subSection: {
        title:
          "Rotary Evaporator for Laboratories – Water Distillation & Solvent Recovery Unit",
        description:
          "Designed for a wide range of distillation tasks, Heidolph rotary evaporators ensure efficient water distillation and solvent recovery. Whether you're removing low-boiling solvents or processing high-viscosity samples, these units offer full control, precision, and safety.",
      },
      industriesIntro:
        "Heidolph Rotary Evaporators are trusted across a wide range of industries and scientific domains. Their precision, reliability, and adaptability make them essential tools in the following sectors:",
      industries: [
        {
          title: "Academic & Research Institutions",
          description: "Widely used in universities and research centers for organic synthesis, sample concentration, and solvent removal in both undergraduate teaching labs and advanced R&D. Their intuitive design and safety features make them ideal for training students and streamlining academic research workflows.",
          benefits: [
            "Enables quick evaporation for multiple experiments",
            "Facilitates organic synthesis and method development",
            "Safe, intuitive controls"
          ]
        },
        {
          title: "Pharmaceutical & Biotechnology Companies",
          description: "Crucial for active pharmaceutical ingredient (API) purification, formulation testing, and compound isolation. Heidolph evaporators provide reproducible, GMP-compatible distillation processes, ensuring consistent results in drug discovery, development, and quality control.",
          benefits: [
            "Enhances efficiency in API purification",
            "Ensures reproducibility in formulation",
            "Integrates into GMP-compliant labs"
          ]
        },
        {
          title: "Chemical & Petrochemical Industries",
          description: "Enable high-precision separation of chemical mixtures, recovery of valuable solvents, and pilot-scale distillation under vacuum. Their corrosion-resistant components and scalability make them suitable for both analytical testing and industrial R&D.",
          benefits: [
            "Separates volatile components from mixtures",
            "High chemical resistance",
            "Scalable for pilot-scale processes"
          ]
        },
        {
          title: "Food & Beverage Industry",
          description: "Ideal for concentrating natural extracts, essential oils, and volatile compounds while preserving aroma and flavor integrity. Used in quality control labs and R&D to create new flavor profiles and test food additives in compliance with safety standards.",
          benefits: [
            "Ideal for flavor and aroma extraction",
            "Preserves volatile compounds",
            "Supports product innovation and quality testing"
          ]
        },
        {
          title: "Environmental Testing Laboratories",
          description: "Support pre-concentration of environmental samples such as water, soil, and air extracts. Facilitate trace-level detection of contaminants (e.g., pesticides, heavy metals) in regulatory and quality assurance applications with high reproducibility.",
          benefits: [
            "Concentrates pollutants for analysis",
            "Reduces sample prep time",
            "Enhances precision and consistency"
          ]
        },
        {
          title: "Cannabis & Herbal Extraction Facilities",
          description: "Used post-extraction to recover solvents safely and efficiently while preserving delicate cannabinoids and terpenes. Heidolph rotary evaporators help maintain compliance with purity standards and optimize product yield in commercial cannabis processing.",
          benefits: [
            "Gentle solvent recovery post-extraction",
            "Retains terpenes and cannabinoids",
            "Meets purity and compliance standards"
          ]
        },
        {
          title: "Contract Research Organizations (CROs)",
          description: "Provide scalable solvent recovery and purification processes to serve multiple client projects. Their flexibility allows for method development, custom formulation trials, and reproducible results across diverse industries.",
          benefits: [
            "Flexible for diverse sample types",
            "Supports high-throughput workflows",
            "Optimized for scalable method development"
          ]
        },
        {
          title: "Government Labs & Regulatory Bodies",
          description: "Essential in labs focused on public safety, quality enforcement, and policy testing. Used for validated methods in compliance testing, fraud detection, and monitoring of controlled substances with consistent, reliable performance.",
          benefits: [
            "Reproducible for compliance testing",
            "Durable for daily use",
            "Compatible with validated methods"
          ]
        },
        {
          title: "Cosmetic & Personal Care Manufacturers",
          description: "Facilitate development of serums, creams, and concentrated actives. Ensure formulation stability during evaporation and allow small-batch testing for R&D and pilot launches while preserving efficacy of bioactive ingredients.",
          benefits: [
            "Aids in concentrated actives development",
            "Maintains ingredient integrity",
            "Enables batch-scale testing"
          ]
        },
        {
          title: "Forensics & Toxicology Labs",
          description: "Critical for isolating and concentrating toxicological substances, drugs, and forensic samples. Ensure clean sample recovery for evidence analysis while minimizing degradation and contamination, supporting accurate legal investigations.",
          benefits: [
            "Isolates trace substances for analysis",
            "Minimizes contamination risk",
            "Ensures reproducible evidence processing"
          ]
        }
      ],
      distributor: {
        title:
          "Inkarp: Authorized Distributor and Service Provider for Heidolph Rotary Evaporators in India",
        text: `Inkarp stands out as a leading distributor and service provider of Heidolph Rotary Evaporators in India, supported by an extensive nationwide network. Our robust infrastructure ensures prompt technical support, timely service, and reliable distribution solutions tailored specifically to your laboratory's needs.

        With over 40 years of experience, Inkarp has proudly partnered with premier research institutions, pharmaceutical companies, and academic laboratories across India. We are committed to enabling scientific excellence by delivering cutting-edge rotary evaporator systems along with responsive and professional technical support.

        Whether you're optimizing routine distillations or deploying complex evaporation setups, Inkarp offers:
        - Personalized consultations for configuration and applications
        - On-site service and support by experienced engineers
        - Comprehensive installation, training, and maintenance

        Partner with Inkarp to elevate your lab's evaporation performance—efficiently, reliably, and expertly.`,
      },
      faqs: [
        {
          question: 'What is the principle of a rotary evaporator?',
          answer: 'The principle of a rotary evaporator is based on reducing the pressure inside the system using a vacuum, which in turn lowers the boiling point of solvents. This allows evaporation to occur at significantly lower temperatures, making the process ideal for heat-sensitive materials. A round-bottom flask containing the solution is rotated in a heated water bath. The rotation increases the surface area of the liquid and ensures even heat distribution, preventing bumping or boiling over. As the solvent evaporates, it travels through a condenser where it is cooled and then collected in a separate receiving flask. This method is highly effective for concentrating, purifying, or recovering solvents in applications such as organic synthesis, natural product extraction, and analytical chemistry. The process preserves the integrity of delicate compounds and improves efficiency in laboratory workflows.'
        },
        {
          question: 'What is the working procedure of a rotary evaporator?',
          answer: 'The working procedure of a rotary evaporator involves several coordinated steps to achieve safe and efficient solvent evaporation. First, the solution is poured into a round-bottom flask, which is securely attached to the evaporator’s rotating motor. The flask is then partially immersed in a heated water bath to promote evaporation. At the same time, a vacuum pump is engaged to reduce the pressure within the system, lowering the boiling point of the solvent. The flask is rotated to maximize surface area, allowing uniform heating and faster evaporation. The solvent vapor then passes through a condenser where it is cooled and converted back into liquid, collected in a receiving flask. This process enables users to remove solvents at lower temperatures, reducing thermal stress on the sample. It is commonly used in pharmaceutical development, sample concentration, and chemical research.'
        },
        {
          question: 'What are the top 10 applications where a rotary evaporator can be used?',
          answer: `Rotary evaporators are widely used across diverse scientific and industrial fields due to their versatility and efficiency. Top 10 applications include:

1. Organic synthesis for removing solvents after reactions,
2. Pharmaceutical research for purifying APIs,
3. Cannabis and herbal industries for extracting and concentrating bioactives,
4. Food and beverage R&D for aroma and flavor concentration,
5. Environmental analysis for concentrating trace-level pollutants,
6. Toxicology and forensic labs for isolating and analyzing samples,
7. Cosmetic industry for formulating active ingredients and essential oils,
8. Contract Research Organizations (CROs) for standardized and scalable solvent removal,
9. Academic institutions for lab teaching and training,
10. Petrochemical sector for analyzing and refining chemical compounds.

These applications highlight the instrument's crucial role in both routine and complex processes.`
        }
        ,
        {
          question: 'What makes Heidolph Rotary Evaporators ideal for laboratory use?',
          answer: 'Heidolph Rotary Evaporators stand out in the laboratory space due to their high-quality construction, intelligent design, and user-focused features. Designed in collaboration with scientists, they offer superior performance, chemical resistance, and unmatched reliability. Intuitive digital interfaces simplify operation for beginners and experts alike, while the modular design allows compatibility with a wide range of glassware and accessories. Safety features such as dry-run protection, motorized lift, and over-temperature cutoffs make them ideal for regulated environments including GMP/GLP labs. Their low-noise operation and German engineering ensure long-term durability with minimal maintenance. Whether for routine distillation or advanced solvent recovery, Heidolph units are engineered to increase efficiency, minimize risk, and provide consistency in daily lab work. That’s why they are trusted by researchers and institutions worldwide.'
        },
        {
          question: 'How can I request a product demo or consultation from Inkarp?',
          answer: 'Requesting a product demo or technical consultation from Inkarp is easy and tailored to your specific needs. You can visit the official Inkarp website and fill out the contact form with your details, indicating interest in Heidolph Rotary Evaporators. Alternatively, reach out via email or phone to speak directly with our product specialists. Once your request is received, our team will schedule either an on-site demonstration or a virtual consultation based on your convenience. During this session, our experts will evaluate your lab’s requirements, discuss your application goals, and recommend the most suitable rotary evaporator model. Inkarp also provides post-demo support such as installation planning, user training, and assistance with compliance documentation. Our goal is to ensure you make an informed purchase decision that adds long-term value to your operations.'
        },
        {
          question: 'What glassware options are available with Heidolph rotary evaporators?',
          answer: 'Heidolph offers a comprehensive selection of high-quality borosilicate glassware for different evaporation tasks. Options include vertical condensers, ideal for space-saving setups and standard distillations; diagonal condensers, which are easy to clean and maintain; and dry-ice condensers for volatile solvent recovery. Cold traps and anti-splash adapters are available for specialty applications. Each glassware set is designed for maximum chemical resistance and thermal stability. Labs can also customize their configurations based on solvent type, application volume, and condensation needs. Modular glassware designs allow for easy switching between setups without disrupting ongoing workflows. Heidolph ensures each component is leak-proof, secure, and compatible with safety shields and accessories. This flexibility helps labs manage various protocols using a single rotary evaporator system, improving productivity and reducing downtime.'
        },
        {
          question: 'Can I integrate Heidolph rotary evaporators with automation systems?',
          answer: `Yes, Heidolph rotary evaporators—especially the Hei-VAP Expert Control and Ultimate Control models—are fully compatible with modern lab automation systems. These models feature digital interfaces, programmable functions, and connectivity options for remote monitoring and control.

They can be seamlessly integrated with external vacuum controllers, chillers, and solvent recovery units to create a complete automated distillation workflow. Automation enhances efficiency, reduces human error, and ensures reproducibility—critical for pharmaceutical manufacturing and other regulated environments.

Additionally, these systems support data logging and compliance reporting, which are essential for audits and quality control. Inkarp provides expert consultation and integration support to ensure a smooth setup. Whether you're scaling up operations or aiming for greater process consistency, automation-ready Heidolph evaporators deliver the flexibility and precision your lab requires.`
        }
        ,
        {
          question: 'Do rotary evaporators require special maintenance?',
          answer: 'Rotary evaporators require regular but simple maintenance to maintain optimal performance. This includes cleaning the evaporating and receiving flasks, checking vacuum seals and tubing for leaks, lubricating joints, and inspecting moving parts like the drive motor and lift mechanism. The water bath should be kept clean to prevent scaling, and sensors should be tested periodically for accuracy. For Heidolph units, maintenance is streamlined with easy-access components and automated safety shutdown features. Inkarp provides annual maintenance contracts, preventive service checkups, and emergency repair services across India. Our service team is trained to ensure minimal downtime and extend the life of your system. Maintaining your rotary evaporator not only improves reliability but also ensures consistent results in sensitive lab operations.'
        },
        {
          question: 'How do I choose the right rotary evaporator model for my lab?',
          answer: `Choosing the right Heidolph rotary evaporator depends on your lab's workflow, application complexity, solvent types, and desired level of automation.

For routine operations, the Hei-VAP Core or Expert models offer reliability and simplicity. For high-throughput laboratories or regulated environments, the Hei-VAP Expert Control and Ultimate Control models provide advanced automation, digital monitoring, and system integration capabilities.

Key factors to consider include glassware configuration, space availability, solvent volatility, and safety requirements. Inkarp offers personalized consultation to assess your specific needs and recommend a tailored model with the right accessories.

We also provide on-site demonstrations and training, ensuring you make an informed decision. Selecting the right model will enhance efficiency, safety, and scalability in your solvent distillation workflows.`
        }

      ],
    },


  },

  "skid-mounted-homogenizers": {
    models: [
      { heading: "Standard Models" },
      {
        name: "Hei-VAP Core",
        slug: "hei-vap-core",
        image: ME204,
      },
      {
        name: "Hei-VAP Expert",
        slug: "hei-vap-expert",
        image: ME204T,
      },
      {
        name: "Hei-VAP Ultimate",
        slug: "hei-vap-ultimate",
        image: ME1002,
      },
    ],
    meta: {
      title: "Best Rotary Evaporator – Water Distillation & Solvent Recovery Unit Distributor And Service Provider In India | Inkarp",
      description: "Explore Heidolph Rotary Evaporators for precise water distillation and solvent recovery in laboratories. Distributed by Inkarp – India's trusted scientific equipment partner.",
      keywords: [
        "Rotary Evaporator",
        "Rotary evaporator for water distillation",
        "Pharmaceutical rotary evaporator",
        "Best Heidolph Rotary Evaporator In India",
        "Rotary Evaporator Service Provider In India",
        "Rotary Evaporator Distributor In India",
        "Water Distillation Unit For Laboratory",
        "Solvent Recovery Unit Distributor In India",
        "Solvent Recovery Unit Service Provider In India",
        "Water Distillation and Solvent Recovery Unit"
      ],
      altText: "Best Rotary Evaporator In India",
      internalLinks: ["Internal Product Pages Links"],
      externalLinks: ["Heidolph Website"]
    },
    pageData: {
      title: "Best Rotary Evaporator In India",
      intro:
        "Rotary evaporators are essential laboratory instruments used for gentle and efficient removal of solvents through evaporation. Commonly employed in chemical, pharmaceutical, and academic labs, rotary evaporators enable precise distillation under vacuum for concentration, purification, and solvent recovery.",
      highlight:
        "The Heidolph Rotary Evaporators are the best rotary evaporators in India, the series is engineered for reliability, safety, and superior performance—making it a preferred choice for laboratories worldwide. Whether you're conducting routine distillations or working with complex compounds, Heidolph evaporators deliver unmatched precision and ease of use.",

      modelHeading: "Model Categories",
      infoSection: {
        title: "Heidolph Rotary Evaporator",
        description: `Developed in close cooperation with laboratory professionals, the Heidolph Hei-VAP series focuses on the essentials of effective distillation: user-friendly operation, thoughtful design, and enhanced safety features.
          Every model in the series offers:
          - Intuitive control panels
          - Reliable performance in demanding conditions
          - High chemical resistance and durability
          - Modular design to suit your unique application needs

          With extensive combinations of glassware and accessories, Heidolph rotary evaporators provide scalable solutions for every lab environment—from education to R&D and manufacturing.`,
      },
      subSection: {
        title:
          "Rotary Evaporator for Laboratories – Water Distillation & Solvent Recovery Unit",
        description:
          "Designed for a wide range of distillation tasks, Heidolph rotary evaporators ensure efficient water distillation and solvent recovery. Whether you're removing low-boiling solvents or processing high-viscosity samples, these units offer full control, precision, and safety.",
      },
      industriesIntro:
        "Heidolph Rotary Evaporators are trusted across a wide range of industries and scientific domains. Their precision, reliability, and adaptability make them essential tools in the following sectors:",
      industries: [
        {
          title: "Academic & Research Institutions",
          description: "Widely used in universities and research centers for organic synthesis, sample concentration, and solvent removal in both undergraduate teaching labs and advanced R&D. Their intuitive design and safety features make them ideal for training students and streamlining academic research workflows.",
          benefits: [
            "Enables quick evaporation for multiple experiments",
            "Facilitates organic synthesis and method development",
            "Safe, intuitive controls"
          ]
        },
        {
          title: "Pharmaceutical & Biotechnology Companies",
          description: "Crucial for active pharmaceutical ingredient (API) purification, formulation testing, and compound isolation. Heidolph evaporators provide reproducible, GMP-compatible distillation processes, ensuring consistent results in drug discovery, development, and quality control.",
          benefits: [
            "Enhances efficiency in API purification",
            "Ensures reproducibility in formulation",
            "Integrates into GMP-compliant labs"
          ]
        },
        {
          title: "Chemical & Petrochemical Industries",
          description: "Enable high-precision separation of chemical mixtures, recovery of valuable solvents, and pilot-scale distillation under vacuum. Their corrosion-resistant components and scalability make them suitable for both analytical testing and industrial R&D.",
          benefits: [
            "Separates volatile components from mixtures",
            "High chemical resistance",
            "Scalable for pilot-scale processes"
          ]
        },
        {
          title: "Food & Beverage Industry",
          description: "Ideal for concentrating natural extracts, essential oils, and volatile compounds while preserving aroma and flavor integrity. Used in quality control labs and R&D to create new flavor profiles and test food additives in compliance with safety standards.",
          benefits: [
            "Ideal for flavor and aroma extraction",
            "Preserves volatile compounds",
            "Supports product innovation and quality testing"
          ]
        },
        {
          title: "Environmental Testing Laboratories",
          description: "Support pre-concentration of environmental samples such as water, soil, and air extracts. Facilitate trace-level detection of contaminants (e.g., pesticides, heavy metals) in regulatory and quality assurance applications with high reproducibility.",
          benefits: [
            "Concentrates pollutants for analysis",
            "Reduces sample prep time",
            "Enhances precision and consistency"
          ]
        },
        {
          title: "Cannabis & Herbal Extraction Facilities",
          description: "Used post-extraction to recover solvents safely and efficiently while preserving delicate cannabinoids and terpenes. Heidolph rotary evaporators help maintain compliance with purity standards and optimize product yield in commercial cannabis processing.",
          benefits: [
            "Gentle solvent recovery post-extraction",
            "Retains terpenes and cannabinoids",
            "Meets purity and compliance standards"
          ]
        },
        {
          title: "Contract Research Organizations (CROs)",
          description: "Provide scalable solvent recovery and purification processes to serve multiple client projects. Their flexibility allows for method development, custom formulation trials, and reproducible results across diverse industries.",
          benefits: [
            "Flexible for diverse sample types",
            "Supports high-throughput workflows",
            "Optimized for scalable method development"
          ]
        },
        {
          title: "Government Labs & Regulatory Bodies",
          description: "Essential in labs focused on public safety, quality enforcement, and policy testing. Used for validated methods in compliance testing, fraud detection, and monitoring of controlled substances with consistent, reliable performance.",
          benefits: [
            "Reproducible for compliance testing",
            "Durable for daily use",
            "Compatible with validated methods"
          ]
        },
        {
          title: "Cosmetic & Personal Care Manufacturers",
          description: "Facilitate development of serums, creams, and concentrated actives. Ensure formulation stability during evaporation and allow small-batch testing for R&D and pilot launches while preserving efficacy of bioactive ingredients.",
          benefits: [
            "Aids in concentrated actives development",
            "Maintains ingredient integrity",
            "Enables batch-scale testing"
          ]
        },
        {
          title: "Forensics & Toxicology Labs",
          description: "Critical for isolating and concentrating toxicological substances, drugs, and forensic samples. Ensure clean sample recovery for evidence analysis while minimizing degradation and contamination, supporting accurate legal investigations.",
          benefits: [
            "Isolates trace substances for analysis",
            "Minimizes contamination risk",
            "Ensures reproducible evidence processing"
          ]
        }
      ],
      distributor: {
        title:
          "Inkarp: Authorized Distributor and Service Provider for Heidolph Rotary Evaporators in India",
        text: `Inkarp stands out as a leading distributor and service provider of Heidolph Rotary Evaporators in India, supported by an extensive nationwide network. Our robust infrastructure ensures prompt technical support, timely service, and reliable distribution solutions tailored specifically to your laboratory's needs.

        With over 40 years of experience, Inkarp has proudly partnered with premier research institutions, pharmaceutical companies, and academic laboratories across India. We are committed to enabling scientific excellence by delivering cutting-edge rotary evaporator systems along with responsive and professional technical support.

        Whether you're optimizing routine distillations or deploying complex evaporation setups, Inkarp offers:
        - Personalized consultations for configuration and applications
        - On-site service and support by experienced engineers
        - Comprehensive installation, training, and maintenance

        Partner with Inkarp to elevate your lab's evaporation performance—efficiently, reliably, and expertly.`,
      },
      faqs: [
        {
          question: 'What is the principle of a rotary evaporator?',
          answer: 'The principle of a rotary evaporator is based on reducing the pressure inside the system using a vacuum, which in turn lowers the boiling point of solvents. This allows evaporation to occur at significantly lower temperatures, making the process ideal for heat-sensitive materials. A round-bottom flask containing the solution is rotated in a heated water bath. The rotation increases the surface area of the liquid and ensures even heat distribution, preventing bumping or boiling over. As the solvent evaporates, it travels through a condenser where it is cooled and then collected in a separate receiving flask. This method is highly effective for concentrating, purifying, or recovering solvents in applications such as organic synthesis, natural product extraction, and analytical chemistry. The process preserves the integrity of delicate compounds and improves efficiency in laboratory workflows.'
        },
        {
          question: 'What is the working procedure of a rotary evaporator?',
          answer: 'The working procedure of a rotary evaporator involves several coordinated steps to achieve safe and efficient solvent evaporation. First, the solution is poured into a round-bottom flask, which is securely attached to the evaporator’s rotating motor. The flask is then partially immersed in a heated water bath to promote evaporation. At the same time, a vacuum pump is engaged to reduce the pressure within the system, lowering the boiling point of the solvent. The flask is rotated to maximize surface area, allowing uniform heating and faster evaporation. The solvent vapor then passes through a condenser where it is cooled and converted back into liquid, collected in a receiving flask. This process enables users to remove solvents at lower temperatures, reducing thermal stress on the sample. It is commonly used in pharmaceutical development, sample concentration, and chemical research.'
        },
        {
          question: 'What are the top 10 applications where a rotary evaporator can be used?',
          answer: `Rotary evaporators are widely used across diverse scientific and industrial fields due to their versatility and efficiency. Top 10 applications include:

1. Organic synthesis for removing solvents after reactions,
2. Pharmaceutical research for purifying APIs,
3. Cannabis and herbal industries for extracting and concentrating bioactives,
4. Food and beverage R&D for aroma and flavor concentration,
5. Environmental analysis for concentrating trace-level pollutants,
6. Toxicology and forensic labs for isolating and analyzing samples,
7. Cosmetic industry for formulating active ingredients and essential oils,
8. Contract Research Organizations (CROs) for standardized and scalable solvent removal,
9. Academic institutions for lab teaching and training,
10. Petrochemical sector for analyzing and refining chemical compounds.

These applications highlight the instrument's crucial role in both routine and complex processes.`
        }
        ,
        {
          question: 'What makes Heidolph Rotary Evaporators ideal for laboratory use?',
          answer: 'Heidolph Rotary Evaporators stand out in the laboratory space due to their high-quality construction, intelligent design, and user-focused features. Designed in collaboration with scientists, they offer superior performance, chemical resistance, and unmatched reliability. Intuitive digital interfaces simplify operation for beginners and experts alike, while the modular design allows compatibility with a wide range of glassware and accessories. Safety features such as dry-run protection, motorized lift, and over-temperature cutoffs make them ideal for regulated environments including GMP/GLP labs. Their low-noise operation and German engineering ensure long-term durability with minimal maintenance. Whether for routine distillation or advanced solvent recovery, Heidolph units are engineered to increase efficiency, minimize risk, and provide consistency in daily lab work. That’s why they are trusted by researchers and institutions worldwide.'
        },
        {
          question: 'How can I request a product demo or consultation from Inkarp?',
          answer: 'Requesting a product demo or technical consultation from Inkarp is easy and tailored to your specific needs. You can visit the official Inkarp website and fill out the contact form with your details, indicating interest in Heidolph Rotary Evaporators. Alternatively, reach out via email or phone to speak directly with our product specialists. Once your request is received, our team will schedule either an on-site demonstration or a virtual consultation based on your convenience. During this session, our experts will evaluate your lab’s requirements, discuss your application goals, and recommend the most suitable rotary evaporator model. Inkarp also provides post-demo support such as installation planning, user training, and assistance with compliance documentation. Our goal is to ensure you make an informed purchase decision that adds long-term value to your operations.'
        },
        {
          question: 'What glassware options are available with Heidolph rotary evaporators?',
          answer: 'Heidolph offers a comprehensive selection of high-quality borosilicate glassware for different evaporation tasks. Options include vertical condensers, ideal for space-saving setups and standard distillations; diagonal condensers, which are easy to clean and maintain; and dry-ice condensers for volatile solvent recovery. Cold traps and anti-splash adapters are available for specialty applications. Each glassware set is designed for maximum chemical resistance and thermal stability. Labs can also customize their configurations based on solvent type, application volume, and condensation needs. Modular glassware designs allow for easy switching between setups without disrupting ongoing workflows. Heidolph ensures each component is leak-proof, secure, and compatible with safety shields and accessories. This flexibility helps labs manage various protocols using a single rotary evaporator system, improving productivity and reducing downtime.'
        },
        {
          question: 'Can I integrate Heidolph rotary evaporators with automation systems?',
          answer: `Yes, Heidolph rotary evaporators—especially the Hei-VAP Expert Control and Ultimate Control models—are fully compatible with modern lab automation systems. These models feature digital interfaces, programmable functions, and connectivity options for remote monitoring and control.

They can be seamlessly integrated with external vacuum controllers, chillers, and solvent recovery units to create a complete automated distillation workflow. Automation enhances efficiency, reduces human error, and ensures reproducibility—critical for pharmaceutical manufacturing and other regulated environments.

Additionally, these systems support data logging and compliance reporting, which are essential for audits and quality control. Inkarp provides expert consultation and integration support to ensure a smooth setup. Whether you're scaling up operations or aiming for greater process consistency, automation-ready Heidolph evaporators deliver the flexibility and precision your lab requires.`
        }
        ,
        {
          question: 'Do rotary evaporators require special maintenance?',
          answer: 'Rotary evaporators require regular but simple maintenance to maintain optimal performance. This includes cleaning the evaporating and receiving flasks, checking vacuum seals and tubing for leaks, lubricating joints, and inspecting moving parts like the drive motor and lift mechanism. The water bath should be kept clean to prevent scaling, and sensors should be tested periodically for accuracy. For Heidolph units, maintenance is streamlined with easy-access components and automated safety shutdown features. Inkarp provides annual maintenance contracts, preventive service checkups, and emergency repair services across India. Our service team is trained to ensure minimal downtime and extend the life of your system. Maintaining your rotary evaporator not only improves reliability but also ensures consistent results in sensitive lab operations.'
        },
        {
          question: 'How do I choose the right rotary evaporator model for my lab?',
          answer: `Choosing the right Heidolph rotary evaporator depends on your lab's workflow, application complexity, solvent types, and desired level of automation.

For routine operations, the Hei-VAP Core or Expert models offer reliability and simplicity. For high-throughput laboratories or regulated environments, the Hei-VAP Expert Control and Ultimate Control models provide advanced automation, digital monitoring, and system integration capabilities.

Key factors to consider include glassware configuration, space availability, solvent volatility, and safety requirements. Inkarp offers personalized consultation to assess your specific needs and recommend a tailored model with the right accessories.

We also provide on-site demonstrations and training, ensuring you make an informed decision. Selecting the right model will enhance efficiency, safety, and scalability in your solvent distillation workflows.`
        }

      ],
    },


  },

  "hand-held-homogenizer": {
    models: [
      { heading: "Standard Models" },
      {
        name: "Hei-VAP Core",
        slug: "hei-vap-core",
        image: ME204,
      },
      {
        name: "Hei-VAP Expert",
        slug: "hei-vap-expert",
        image: ME204T,
      },
      {
        name: "Hei-VAP Ultimate",
        slug: "hei-vap-ultimate",
        image: ME1002,
      },
    ],
    meta: {
      title: "Best Rotary Evaporator – Water Distillation & Solvent Recovery Unit Distributor And Service Provider In India | Inkarp",
      description: "Explore Heidolph Rotary Evaporators for precise water distillation and solvent recovery in laboratories. Distributed by Inkarp – India's trusted scientific equipment partner.",
      keywords: [
        "Rotary Evaporator",
        "Rotary evaporator for water distillation",
        "Pharmaceutical rotary evaporator",
        "Best Heidolph Rotary Evaporator In India",
        "Rotary Evaporator Service Provider In India",
        "Rotary Evaporator Distributor In India",
        "Water Distillation Unit For Laboratory",
        "Solvent Recovery Unit Distributor In India",
        "Solvent Recovery Unit Service Provider In India",
        "Water Distillation and Solvent Recovery Unit"
      ],
      altText: "Best Rotary Evaporator In India",
      internalLinks: ["Internal Product Pages Links"],
      externalLinks: ["Heidolph Website"]
    },
    pageData: {
      title: "Best Rotary Evaporator In India",
      intro:
        "Rotary evaporators are essential laboratory instruments used for gentle and efficient removal of solvents through evaporation. Commonly employed in chemical, pharmaceutical, and academic labs, rotary evaporators enable precise distillation under vacuum for concentration, purification, and solvent recovery.",
      highlight:
        "The Heidolph Rotary Evaporators are the best rotary evaporators in India, the series is engineered for reliability, safety, and superior performance—making it a preferred choice for laboratories worldwide. Whether you're conducting routine distillations or working with complex compounds, Heidolph evaporators deliver unmatched precision and ease of use.",

      modelHeading: "Model Categories",
      infoSection: {
        title: "Heidolph Rotary Evaporator",
        description: `Developed in close cooperation with laboratory professionals, the Heidolph Hei-VAP series focuses on the essentials of effective distillation: user-friendly operation, thoughtful design, and enhanced safety features.
          Every model in the series offers:
          - Intuitive control panels
          - Reliable performance in demanding conditions
          - High chemical resistance and durability
          - Modular design to suit your unique application needs

          With extensive combinations of glassware and accessories, Heidolph rotary evaporators provide scalable solutions for every lab environment—from education to R&D and manufacturing.`,
      },
      subSection: {
        title:
          "Rotary Evaporator for Laboratories – Water Distillation & Solvent Recovery Unit",
        description:
          "Designed for a wide range of distillation tasks, Heidolph rotary evaporators ensure efficient water distillation and solvent recovery. Whether you're removing low-boiling solvents or processing high-viscosity samples, these units offer full control, precision, and safety.",
      },
      industriesIntro:
        "Heidolph Rotary Evaporators are trusted across a wide range of industries and scientific domains. Their precision, reliability, and adaptability make them essential tools in the following sectors:",
      industries: [
        {
          title: "Academic & Research Institutions",
          description: "Widely used in universities and research centers for organic synthesis, sample concentration, and solvent removal in both undergraduate teaching labs and advanced R&D. Their intuitive design and safety features make them ideal for training students and streamlining academic research workflows.",
          benefits: [
            "Enables quick evaporation for multiple experiments",
            "Facilitates organic synthesis and method development",
            "Safe, intuitive controls"
          ]
        },
        {
          title: "Pharmaceutical & Biotechnology Companies",
          description: "Crucial for active pharmaceutical ingredient (API) purification, formulation testing, and compound isolation. Heidolph evaporators provide reproducible, GMP-compatible distillation processes, ensuring consistent results in drug discovery, development, and quality control.",
          benefits: [
            "Enhances efficiency in API purification",
            "Ensures reproducibility in formulation",
            "Integrates into GMP-compliant labs"
          ]
        },
        {
          title: "Chemical & Petrochemical Industries",
          description: "Enable high-precision separation of chemical mixtures, recovery of valuable solvents, and pilot-scale distillation under vacuum. Their corrosion-resistant components and scalability make them suitable for both analytical testing and industrial R&D.",
          benefits: [
            "Separates volatile components from mixtures",
            "High chemical resistance",
            "Scalable for pilot-scale processes"
          ]
        },
        {
          title: "Food & Beverage Industry",
          description: "Ideal for concentrating natural extracts, essential oils, and volatile compounds while preserving aroma and flavor integrity. Used in quality control labs and R&D to create new flavor profiles and test food additives in compliance with safety standards.",
          benefits: [
            "Ideal for flavor and aroma extraction",
            "Preserves volatile compounds",
            "Supports product innovation and quality testing"
          ]
        },
        {
          title: "Environmental Testing Laboratories",
          description: "Support pre-concentration of environmental samples such as water, soil, and air extracts. Facilitate trace-level detection of contaminants (e.g., pesticides, heavy metals) in regulatory and quality assurance applications with high reproducibility.",
          benefits: [
            "Concentrates pollutants for analysis",
            "Reduces sample prep time",
            "Enhances precision and consistency"
          ]
        },
        {
          title: "Cannabis & Herbal Extraction Facilities",
          description: "Used post-extraction to recover solvents safely and efficiently while preserving delicate cannabinoids and terpenes. Heidolph rotary evaporators help maintain compliance with purity standards and optimize product yield in commercial cannabis processing.",
          benefits: [
            "Gentle solvent recovery post-extraction",
            "Retains terpenes and cannabinoids",
            "Meets purity and compliance standards"
          ]
        },
        {
          title: "Contract Research Organizations (CROs)",
          description: "Provide scalable solvent recovery and purification processes to serve multiple client projects. Their flexibility allows for method development, custom formulation trials, and reproducible results across diverse industries.",
          benefits: [
            "Flexible for diverse sample types",
            "Supports high-throughput workflows",
            "Optimized for scalable method development"
          ]
        },
        {
          title: "Government Labs & Regulatory Bodies",
          description: "Essential in labs focused on public safety, quality enforcement, and policy testing. Used for validated methods in compliance testing, fraud detection, and monitoring of controlled substances with consistent, reliable performance.",
          benefits: [
            "Reproducible for compliance testing",
            "Durable for daily use",
            "Compatible with validated methods"
          ]
        },
        {
          title: "Cosmetic & Personal Care Manufacturers",
          description: "Facilitate development of serums, creams, and concentrated actives. Ensure formulation stability during evaporation and allow small-batch testing for R&D and pilot launches while preserving efficacy of bioactive ingredients.",
          benefits: [
            "Aids in concentrated actives development",
            "Maintains ingredient integrity",
            "Enables batch-scale testing"
          ]
        },
        {
          title: "Forensics & Toxicology Labs",
          description: "Critical for isolating and concentrating toxicological substances, drugs, and forensic samples. Ensure clean sample recovery for evidence analysis while minimizing degradation and contamination, supporting accurate legal investigations.",
          benefits: [
            "Isolates trace substances for analysis",
            "Minimizes contamination risk",
            "Ensures reproducible evidence processing"
          ]
        }
      ],
      distributor: {
        title:
          "Inkarp: Authorized Distributor and Service Provider for Heidolph Rotary Evaporators in India",
        text: `Inkarp stands out as a leading distributor and service provider of Heidolph Rotary Evaporators in India, supported by an extensive nationwide network. Our robust infrastructure ensures prompt technical support, timely service, and reliable distribution solutions tailored specifically to your laboratory's needs.

        With over 40 years of experience, Inkarp has proudly partnered with premier research institutions, pharmaceutical companies, and academic laboratories across India. We are committed to enabling scientific excellence by delivering cutting-edge rotary evaporator systems along with responsive and professional technical support.

        Whether you're optimizing routine distillations or deploying complex evaporation setups, Inkarp offers:
        - Personalized consultations for configuration and applications
        - On-site service and support by experienced engineers
        - Comprehensive installation, training, and maintenance

        Partner with Inkarp to elevate your lab's evaporation performance—efficiently, reliably, and expertly.`,
      },
      faqs: [
        {
          question: 'What is the principle of a rotary evaporator?',
          answer: 'The principle of a rotary evaporator is based on reducing the pressure inside the system using a vacuum, which in turn lowers the boiling point of solvents. This allows evaporation to occur at significantly lower temperatures, making the process ideal for heat-sensitive materials. A round-bottom flask containing the solution is rotated in a heated water bath. The rotation increases the surface area of the liquid and ensures even heat distribution, preventing bumping or boiling over. As the solvent evaporates, it travels through a condenser where it is cooled and then collected in a separate receiving flask. This method is highly effective for concentrating, purifying, or recovering solvents in applications such as organic synthesis, natural product extraction, and analytical chemistry. The process preserves the integrity of delicate compounds and improves efficiency in laboratory workflows.'
        },
        {
          question: 'What is the working procedure of a rotary evaporator?',
          answer: 'The working procedure of a rotary evaporator involves several coordinated steps to achieve safe and efficient solvent evaporation. First, the solution is poured into a round-bottom flask, which is securely attached to the evaporator’s rotating motor. The flask is then partially immersed in a heated water bath to promote evaporation. At the same time, a vacuum pump is engaged to reduce the pressure within the system, lowering the boiling point of the solvent. The flask is rotated to maximize surface area, allowing uniform heating and faster evaporation. The solvent vapor then passes through a condenser where it is cooled and converted back into liquid, collected in a receiving flask. This process enables users to remove solvents at lower temperatures, reducing thermal stress on the sample. It is commonly used in pharmaceutical development, sample concentration, and chemical research.'
        },
        {
          question: 'What are the top 10 applications where a rotary evaporator can be used?',
          answer: `Rotary evaporators are widely used across diverse scientific and industrial fields due to their versatility and efficiency. Top 10 applications include:

1. Organic synthesis for removing solvents after reactions,
2. Pharmaceutical research for purifying APIs,
3. Cannabis and herbal industries for extracting and concentrating bioactives,
4. Food and beverage R&D for aroma and flavor concentration,
5. Environmental analysis for concentrating trace-level pollutants,
6. Toxicology and forensic labs for isolating and analyzing samples,
7. Cosmetic industry for formulating active ingredients and essential oils,
8. Contract Research Organizations (CROs) for standardized and scalable solvent removal,
9. Academic institutions for lab teaching and training,
10. Petrochemical sector for analyzing and refining chemical compounds.

These applications highlight the instrument's crucial role in both routine and complex processes.`
        }
        ,
        {
          question: 'What makes Heidolph Rotary Evaporators ideal for laboratory use?',
          answer: 'Heidolph Rotary Evaporators stand out in the laboratory space due to their high-quality construction, intelligent design, and user-focused features. Designed in collaboration with scientists, they offer superior performance, chemical resistance, and unmatched reliability. Intuitive digital interfaces simplify operation for beginners and experts alike, while the modular design allows compatibility with a wide range of glassware and accessories. Safety features such as dry-run protection, motorized lift, and over-temperature cutoffs make them ideal for regulated environments including GMP/GLP labs. Their low-noise operation and German engineering ensure long-term durability with minimal maintenance. Whether for routine distillation or advanced solvent recovery, Heidolph units are engineered to increase efficiency, minimize risk, and provide consistency in daily lab work. That’s why they are trusted by researchers and institutions worldwide.'
        },
        {
          question: 'How can I request a product demo or consultation from Inkarp?',
          answer: 'Requesting a product demo or technical consultation from Inkarp is easy and tailored to your specific needs. You can visit the official Inkarp website and fill out the contact form with your details, indicating interest in Heidolph Rotary Evaporators. Alternatively, reach out via email or phone to speak directly with our product specialists. Once your request is received, our team will schedule either an on-site demonstration or a virtual consultation based on your convenience. During this session, our experts will evaluate your lab’s requirements, discuss your application goals, and recommend the most suitable rotary evaporator model. Inkarp also provides post-demo support such as installation planning, user training, and assistance with compliance documentation. Our goal is to ensure you make an informed purchase decision that adds long-term value to your operations.'
        },
        {
          question: 'What glassware options are available with Heidolph rotary evaporators?',
          answer: 'Heidolph offers a comprehensive selection of high-quality borosilicate glassware for different evaporation tasks. Options include vertical condensers, ideal for space-saving setups and standard distillations; diagonal condensers, which are easy to clean and maintain; and dry-ice condensers for volatile solvent recovery. Cold traps and anti-splash adapters are available for specialty applications. Each glassware set is designed for maximum chemical resistance and thermal stability. Labs can also customize their configurations based on solvent type, application volume, and condensation needs. Modular glassware designs allow for easy switching between setups without disrupting ongoing workflows. Heidolph ensures each component is leak-proof, secure, and compatible with safety shields and accessories. This flexibility helps labs manage various protocols using a single rotary evaporator system, improving productivity and reducing downtime.'
        },
        {
          question: 'Can I integrate Heidolph rotary evaporators with automation systems?',
          answer: `Yes, Heidolph rotary evaporators—especially the Hei-VAP Expert Control and Ultimate Control models—are fully compatible with modern lab automation systems. These models feature digital interfaces, programmable functions, and connectivity options for remote monitoring and control.

They can be seamlessly integrated with external vacuum controllers, chillers, and solvent recovery units to create a complete automated distillation workflow. Automation enhances efficiency, reduces human error, and ensures reproducibility—critical for pharmaceutical manufacturing and other regulated environments.

Additionally, these systems support data logging and compliance reporting, which are essential for audits and quality control. Inkarp provides expert consultation and integration support to ensure a smooth setup. Whether you're scaling up operations or aiming for greater process consistency, automation-ready Heidolph evaporators deliver the flexibility and precision your lab requires.`
        }
        ,
        {
          question: 'Do rotary evaporators require special maintenance?',
          answer: 'Rotary evaporators require regular but simple maintenance to maintain optimal performance. This includes cleaning the evaporating and receiving flasks, checking vacuum seals and tubing for leaks, lubricating joints, and inspecting moving parts like the drive motor and lift mechanism. The water bath should be kept clean to prevent scaling, and sensors should be tested periodically for accuracy. For Heidolph units, maintenance is streamlined with easy-access components and automated safety shutdown features. Inkarp provides annual maintenance contracts, preventive service checkups, and emergency repair services across India. Our service team is trained to ensure minimal downtime and extend the life of your system. Maintaining your rotary evaporator not only improves reliability but also ensures consistent results in sensitive lab operations.'
        },
        {
          question: 'How do I choose the right rotary evaporator model for my lab?',
          answer: `Choosing the right Heidolph rotary evaporator depends on your lab's workflow, application complexity, solvent types, and desired level of automation.

For routine operations, the Hei-VAP Core or Expert models offer reliability and simplicity. For high-throughput laboratories or regulated environments, the Hei-VAP Expert Control and Ultimate Control models provide advanced automation, digital monitoring, and system integration capabilities.

Key factors to consider include glassware configuration, space availability, solvent volatility, and safety requirements. Inkarp offers personalized consultation to assess your specific needs and recommend a tailored model with the right accessories.

We also provide on-site demonstrations and training, ensuring you make an informed decision. Selecting the right model will enhance efficiency, safety, and scalability in your solvent distillation workflows.`
        }

      ],
    },


  },


};


export default function ExtrusionProducts() {
  const navigate = useNavigate();
  const { type = "weighing-balance" } = useParams();
  const selectedData = synthesisProducts[type];
  const meta = selectedData?.meta;
  const pageData = selectedData?.pageData || {};
  const products = selectedData?.models || selectedData || [];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = pageData?.faqs || [];

  const getPrincipalLogoByType = (type) => {
    const readableType = type.replaceAll("-", " ").toLowerCase();

    for (let principal of synthesisData) {
      const match = principal.products.find((product) =>
        product.toLowerCase().includes(readableType)
      );
      if (match) return principal.logo;
    }

    return null; // fallback if no match found
  };


  return (
    <>
      <div className="flex w-full h-full overflow-hidden">
        {meta && (
          <Helmet>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords?.join(", ")} />
            <meta property="og:title" content={meta.title} />
            <meta property="og:description" content={meta.description} />
            <meta name="robots" content="index, follow" />
          </Helmet>
        )}

        {/* Main Content */}
        <main className="w-full h-full overflow-y-auto py-2 px-5 font-[Roboto]">
          <div className="flex items-center justify-around mb-6 bg-gray-100 rounded-lg shadow-xl">
            <h2 className="text-4xl font-bold text-[#0a2540] capitalize font-[MaxOT]">
              {type.replaceAll("-", " ")}
            </h2>
            <img
              src={getPrincipalLogoByType(type)}
              alt="Synthesis Partner Logo"
              className="w-32 h-32 object-contain rounded"
            />
          </div>

          {/* Now load dynamic content here */}
          <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-center font-[MaxOT]">{pageData.title}</h1>
            <p className="mb-6">{pageData.intro}</p>
            <p>{pageData.highlight}</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
              <h2 className="text-2xl font-semibold font-[MaxOT]">{pageData.modelHeading}</h2>
              {products.map((product, index) =>
                product.slug ? (
                  <Link
                    key={index}
                    to={`/verticals/extrusion-and-homogenization/${type}/${product.slug}`}
                    className="bg-[#F5F5F5] rounded-xl shadow-xl hover:shadow-lg transition duration-300 p-4 flex flex-col items-center text-center hover:scale-[1.03] hover:translate-y-2 hover:bg-white font-[Roboto] text-[#0a2540] font-semibold"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto object-contain mb-4 rounded"
                    />
                    <h3 className="text-lg font-semibold text-[#0a2540] font-[MaxOT]">{product.name}</h3>
                    {/* {product.description && (
                      <p className="text-sm text-gray-600 mt-1 font-[Roboto]">{product.description}</p>
                    )} */}
                  </Link>
                ) : (
                  <div key={index} className="col-span-full">
                    <h3 className="text-xl font-semibold text-[#E63946] mt-8 mb-2 font-[MaxOT]">{product.heading}</h3>
                  </div>
                )
              )}
            </div>

            {pageData.infoSection && (
              <>
                <h2 className="text-2xl font-semibold mt-8 mb-2 font-[MaxOT]">{pageData.infoSection.title}</h2>
                <p className="mb-6 whitespace-pre-line">{pageData.infoSection.description}</p>
              </>
            )}

            {pageData.subSection && (
              <>
                <h2 className="text-2xl font-semibold mt-8 mb-2 font-[MaxOT]">{pageData.subSection.title}</h2>
                <p className="mb-6">{pageData.subSection.description}</p>
              </>
            )}

            {pageData.industries && (
              <section className="mt-16">
                <h2 className="text-3xl font-semibold mb-4 text-[#0a2540] font-[MaxOT]">Industries We Serve</h2>
                <p className="mb-8 text-gray-700 font-[Roboto]">{pageData.industriesIntro}</p>

                <div className="space-y-8">
                  {pageData.industries.map((item, idx) => (
                    <div key={idx}>
                      <h3 className="text-xl font-bold text-[#E63946] mb-2 font-[MaxOT]">{item.title}</h3>
                      <p className="text-gray-700 font-[Roboto]">{item.description}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-3xl font-semibold mt-16 mb-6 text-[#0a2540] font-[MaxOT]">
                  Key Advantages of Rotary Evaporators – Industry-wise Benefits
                </h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pageData.industries.map((industry, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition duration-300 p-6"
                    >
                      <h3 className="text-lg font-bold text-[#E63946] mb-3 font-[MaxOT]">{industry.title}</h3>
                      <ul className="list-disc list-inside text-gray-700 text-sm font-[Roboto] space-y-2">
                        {industry.benefits.map((benefit, i) => (
                          <li key={i}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {pageData.distributor && (
              <section className="mt-20">
                <h2 className="text-3xl font-semibold mb-3 text-[#0a2540] font-[MaxOT]">
                  {pageData.distributor.title}
                </h2>
                <p className="text-gray-700 font-[Roboto] whitespace-pre-line leading-relaxed">
                  {pageData.distributor.text}
                </p>
              </section>
            )}

            {/* FAQs */}
            {faqs.length > 0 && (
              <>
                <h2 className="text-2xl font-semibold text-center mb-1 font-[MaxOT] mt-10">Frequently Asked Questions</h2>
                <div className="w-full mx-auto p-4 md:p-8 rounded-xl">
                  <div id="accordion-collapse" data-accordion="collapse" className="space-y-0">
                    {faqs.map((faq, index) => (
                      <div key={index}>
                        <h2 id={`accordion-collapse-heading-${index}`}>
                          <button
                            type="button"
                            className={`flex items-center justify-between w-full p-5 font-medium text-left border-l-2 border border-[#E63946] ${index === 0 ? 'rounded-t-xl' : ''} ${openIndex === index ? 'text-black bg-gray-100' : 'text-gray-800 hover:bg-gray-100'}`}
                            onClick={() => toggleFAQ(index)}
                            aria-expanded={openIndex === index}
                            aria-controls={`accordion-collapse-body-${index}`}
                          >
                            <span className="text-xl font-semibold font-[MaxOT]">{faq.question}</span>
                            <svg
                              data-accordion-icon
                              className={`w-6 h-6 shrink-0 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </h2>
                        <div
                          id={`accordion-collapse-body-${index}`}
                          aria-labelledby={`accordion-collapse-heading-${index}`}
                          className={`${openIndex === index ? '' : 'hidden'}`}
                        >
                          <div className="p-5 border border-gray-200 border-t-0 bg-gray-50 text-gray-700 font-[Roboto]">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </>
  );
}


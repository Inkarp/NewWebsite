import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import Blog11 from "../../assets/Blogs/BlogEleven/Image1.jpeg";
import Blog11Img2 from "../../assets/Blogs/BlogEleven/Image2.webp";
import Blog11Img3 from "../../assets/Blogs/BlogEleven/Image3.jpeg";
import Blog11Img4 from "../../assets/Blogs/BlogEleven/Image4.jpeg";
import Blog11Img5 from "../../assets/Blogs/BlogEleven/Image5.jpeg";
import Blog11Img6 from "../../assets/Blogs/BlogEleven/Image6.jpeg";
import Blog11Img7 from "../../assets/Blogs/BlogEleven/Image7.jpeg";
import Blog11Img8 from "../../assets/Blogs/BlogEleven/Image8.jpeg";

import Blog12 from "../../assets/Blogs/BlogTwelve/Image1.jpeg";
import Blog12Img2 from "../../assets/Blogs/BlogTwelve/Image2.jpeg";
import Blog12Img3 from "../../assets/Blogs/BlogTwelve/Image3.png";


import Blog13 from "../../assets/Blogs/BlogThirteen/Image1.jpg";
import Blog13Img2 from "../../assets/Blogs/BlogThirteen/Image2.jpg";
import Blog13Img3 from "../../assets/Blogs/BlogThirteen/Image3.jpeg";
import Blog13Img4 from "../../assets/Blogs/BlogThirteen/Image4.jpeg";
import Blog13Img5 from "../../assets/Blogs/BlogThirteen/Image5.jpeg";
import Blog13Img6 from "../../assets/Blogs/BlogThirteen/Image6.jpeg";
import Blog13Img7 from "../../assets/Blogs/BlogThirteen/Image7.jpeg";
import Blog13Img8 from "../../assets/Blogs/BlogThirteen/Image8.jpeg";

import Blog14 from "../../assets/Blogs/BlogFourteen/Image1.jpg";
import Blog14Img2 from "../../assets/Blogs/BlogFourteen/Image2.jpg";
import Blog14Img3 from "../../assets/Blogs/BlogFourteen/Image3.jpeg";
import Blog14Img4 from "../../assets/Blogs/BlogFourteen/Image4.jpeg";

const BlogsDetailsTwo = [
    {
        id: 11,
        title: "Revolutionizing Semiconductor Failure Analysis with Nenovision’s LiteScope AFM-in-SEM",
        date: "2025-06-19",
        image: Blog11,
        sections: [
            {
                type: "text",
                heading: "Dynamic Viscoelastic Analysis of Polypropylene Homopolymer and Block Copolymer",
                content: `Polypropylene (PP) is a general-purpose resin widely used in industries for manufacturing everyday products such as automobile parts and household electrical goods. Three common types of PP utilized as industrial materials include polypropylene homopolymer (made of propylene only), polypropylene block copolymer (with ethylene), and random copolymer (with ethylene). Each type possesses distinct properties, and their application depends on the desired characteristics of the final product.

Figure 1 illustrates the molecular structures of these PP types. In addition to block PP, the polypropylene block copolymer incorporates polypropylene homopolymer, ethylene propylene rubber (EPR), and PE copolymer. The block copolymer features a sea-island structure, with a continuous matrix phase of PP and a dispersed phase of EPR and PE copolymer domains.

This brief focuses on dynamic viscoelastic measurement of polypropylene homopolymer and polypropylene block copolymer to evaluate their viscoelastic properties of polypropylene.`
            },
            {
                type: "text",
                heading: "Experiment",
                content: `The samples consisted of a commercially available polypropylene homopolymer and a polypropylene block copolymer containing approximately 6% ethylene. Measurements were conducted using the DMA200 Dynamic Mechanical Analyser and the measurement conditions included five frequencies (0.5, 1, 2, 5, and 10 Hz), a temperature range from low temperature (-120°C) to 150°C, and a heating rate of 2°C/min.`
            },
            {
                type: "image",
                imageUrl: Blog11Img2,
                caption: "Hitachi NEXTA® DMA200"
            },
            {
                type: "image",
                imageUrl: Blog11Img3,
            },
            {
                type: "text",
                heading: "Measurement Results",
                content: `Figures 2 and 3 present the Dynamic viscoelasticity spectrum of homopolymer and Dynamic viscoelasticity spectrum of copolymer, respectively. These results reflect simultaneous measurements of temperature and frequency dispersion in polymers, displaying Storage modulus (E’), Loss modulus (E”), and tanδ curves across five frequencies (0.5 to 10 Hz).

The polypropylene homopolymer results (Figure 2) reveal three dispersions: α (crystal relaxation), β (glass transition temperature), and γ (local mode relaxation). In contrast, the polypropylene block copolymer results (Figure 3) exhibit an additional peak between -50°C and -30°C on the E” and tanδ curves, likely corresponding to the glass transition temperature of ethylene propylene rubber in the block PP.

`
            },
            {
                type: "image",
                imageUrl: Blog11Img4,
                caption: "Figure 2 Dynamic viscoelasticity spectrum of homopolymer"
            },
            {
                type: "image",
                imageUrl: Blog11Img5,
                caption: "Figure 3 Dynamic viscoelasticity spectrum of copolymer"
            },
            {
                type: "text",
                content: `Figures 4 and 5 display the apparent activation energy derived from the tanδ dispersion peaks in Figures 2 and 3. Similar values were obtained for α-dispersion (crystal relaxation) and β-dispersion (glass transition temperature) for the PP component in both polypropylene homopolymer and polypropylene block copolymer. Additionally, the apparent activation energy of the dispersion peak between -50°C and -30°C in the block copolymer was 292.5 kJ/mol, supporting the attribution to the glass transition temperature of ethylene propylene rubber
                `
            },
            {
                type: "image",
                imageUrl: Blog11Img6,
                caption: "Figure 4 . Apparent Activation Energy for α- and β-dispersion of homopolymer"
            },
            {
                type: "image",
                imageUrl: Blog11Img7,
                caption: "Figure 5 . Apparent Activation Energy for α- and β-dispersion of copolymer"
            },

            {
                type: "text",
                content: `Figure 6 compares the E’ and tanδ curves at 10 Hz for polypropylene homopolymer and polypropylene block copolymer. Below -80°C, both exhibit similar Storage modulus transitions. However, post-EPR dispersion, the Storage modulus of the block copolymer is lower than that of the homopolymer, likely due to the influence of ethylene propylene rubber and PE copolymer domains. Additionally, the tanδ curves indicate higher vibrational absorption in the block copolymer at low temperature below the PP dispersion, attributed to the EPR and PE copolymer domains.`
            },
            {
                type: "image",
                imageUrl: Blog11Img8,
                caption: `
                Figure 6 . Comparison of E’ and tanδ Curves for homopolymer and copolymer
Frequency: 1Hz
: homopolymer
: copolymer`
            },



            {
                type: "text",
                heading: "Conclusion",
                content: `This application note demonstrates dynamic viscoelastic measurement of polypropylene homopolymer and polypropylene block copolymer to assess their viscoelastic properties of polypropylene. The polypropylene block copolymer results reveal the glass transition temperature of ethylene propylene rubber alongside the inherent relaxation of PP. Notably, differences in vibrational absorption were observed, particularly at low temperature, highlighting the impact of EPR and PE copolymer domains in enhancing vibrational absorption in block copolymers compared to homopolymers.

                Inkarp Instruments is a leading distributor and trusted service partner for Hitachi products in India. Committed to innovation and excellence, Inkarp provides cutting-edge scientific instruments backed by expert support, empowering researchers nationwide to advance their work with confidence.

                References:

                1. Yasaku. Wada, “Solid Properties of Polymers”, Baihukan (1971)

                2. N. Okubo, Application Brief DMS No.7, SII NanoTechnology (1990)`
            },
        ]
    },
    {
        id: 12,
        title: "Advancing Edible Oil Quality Control with FT-NIR Spectroscopy",
        date: "2025-06-19",
        image: Blog12,
        sections: [
            {
                type: "text",
                heading: "Advancing Edible Oil Quality Control with FT-NIR Spectroscopy",
                content: `In the food industry, ensuring the quality and safety of edible oils is critical for meeting consumer expectations and regulatory standards. From seed oil to finished products like sunflower oil, canola oil, and soybean oil, producers face challenges in maintaining consistent quality. Traditional analytical methods are often slow and involve hazardous chemicals. Bruker Optics revolutionizes edible oil quality testing with FT-NIR spectroscopy, a non-destructive testing method that delivers rapid, accurate results. This blog explores how FT-NIR analyzers enhance quality control across the entire edible oil production chain, from seed reception to by-product analysis, ensuring efficiency, safety, and compliance.
                
                m the Kolbe-Schmitt reaction on resorcinol (1,3-dihydroxybenzene) to yield β-resorcylic acid (2,4-hydroxybenzoic acid) through carboxylation in an aqueous sodium bicarbonate solution. The product is subsequently analyzed using benchtop NMR spectroscopy, including HSQC NMR experiments, to elucidate molecular structure and couplings in aromatic compounds. This experiment provides students with hands-on experience in spectral analysis and dynamic insights into the behavior of organic compounds through spectroscopy.`
            },
            {
                type: "text",
                heading: "The Power of FT-NIR Spectroscopy in Edible Oil Analysis",
                content: `Near-infrared spectroscopy is a well-established technique in agriculture, and its adoption in the food industry is growing. FT-NIR spectroscopy, pioneered by Bruker Optics, offers a non-destructive testing solution for analyzing both liquid and solid samples. Unlike traditional wet-chemical or chromatographic methods, which are time-consuming and require hazardous solvents, FT-NIR analyzers provide a safer, faster alternative. These systems deliver precise results without sample preparation, reducing costs and environmental impact, making them ideal for the edible oil industry.`
            },
            {
                type: "image",
                imageUrl: Blog12Img2,
                caption: "Figure 1. Production Chain"
            },
            {
                type: "text",
                heading: "Quality Control Across the Production Chain",
                content: `FT-NIR spectroscopy supports quality control at every stage of edible oil production, from seed reception to by-product utilization. Bruker Optics’ solutions ensure optimal quality and process efficiency`
            },
            {
                type: "text",
                heading: "Seed Reception",
                content: `Analyzing incoming oilseeds, such as sunflower seed oil, rapeseed, canola oil, soybeans, and sesame seed, at the reception bay is crucial for quality control and fair pricing. Traditional methods often involve sending samples to external laboratories, causing delays. FT-NIR analyzers enable rapid, on-site analysis, allowing tight quality control before seeds are discharged, ensuring only high-quality seeds proceed to processing.
                `
            },
            {
                type: "text",
                heading: "Storage",
                content: `Proper storage of oilseeds is essential to prevent bacterial, fungal, or mold growth, which can render seed oil unfit for consumption and lead to profit losses. FT-NIR spectroscopy monitors moisture content and storage conditions, ensuring optimal seed quality for processing. Regular analysis also supports drying processes, maintaining seed integrity over extended storage periods.`
            },
            {
                type: "text",
                heading: "Oil Extraction",
                content: `Cleaning, drying, dehulling, and flaking maximize oil yield from seeds. FT-NIR spectroscopy monitors moisture and oil levels in seeds and expeller cakes, providing quick insights into extraction efficiency. It also analyzes crude oil for parameters like free fatty acids, phospholipids, and waxes, optimizing conditions for the subsequent refining process.`
            },
            {
                type: "text",
                heading: "Oil Refining",
                content: `Refining removes undesirable substances like free fatty acids and colors but may eliminate valuable components like antioxidants. FT-NIR analyzers enable close monitoring of refining processes and final product testing, both in the lab and through real-time, online process analytical technology. This eliminates delays and costly rework, ensuring high-quality oils.`
            },
            {
                type: "text",
                heading: "Fat Modification",
                content: `Natural oils often require modification through fractionation, interesterification, or hydrogenation to meet food industry demands. FT-NIR spectroscopy monitors physical and chemical properties, including fatty acid profile, free fatty acids, trans fatty acids, iodine value, and solid fat content (SFC), ensuring the modified oils meet nutritional and functional requirements.`
            },
            {
                type: "text",
                heading: "By-Products",
                content: `By-products like hulls and expeller cakes are valuable for industries such as animal feed. FT-NIR analyzers assess parameters like moisture, oil, protein, fiber, and ash content in under a minute, helping determine market value and ensuring quality for secondary applications.`
            },
            {
                type: "text",
                heading: "Quality Control of Finished Edible Oils",
                content: `Edible oils, including sunflower oil, canola oil, soybean oil, corn oil, fish oil, tallow, and lard, require rigorous quality assessment. FT-NIR analyzers measure critical parameters such as free fatty acids, trans fatty acids, iodine value, peroxide value, anisidine value, fatty acid profile, triglyceride profile, SEC screening, saturation, and color. These measurements align with standards set by the American Oil Chemists’ Society (AOCS) and the German Society for Fat Science, replacing slow traditional methods with rapid, reliable results.`
            },
            {
                type: "text",
                heading: "Olive Oil Authentication: Ensuring Liquid Gold",
                content: `Extra virgin olive oil, produced through cold-pressing without chemicals, is prone to adulteration due to its premium value. FT-NIR spectroscopy provides a robust solution for olive oil authentication, monitoring the production process and detecting low-quality or adulterated oils, ensuring consumer trust and brand integrity.`
            },
            {
                type: "text",
                heading: "Optimizing Best Frying Oil Quality",
                content: `The quality of best frying oil significantly affects the taste, color, and safety of fried foods. FT-NIR spectroscopy monitors frying oil degradation, analyzing parameters like free fatty acids, total polar compounds, polymerized triglycerides, and anisidine value. Recognized by the German Society for Fat Science in their 2013 Standard Method, FT-NIR analyzers deliver accurate, rapid results, enabling consistent quality in fast-food and large-scale frying operations.`
            },
            {
                type: "text",
                heading: "Process Analytical Technology for Real-Time Control",
                content: `FT-NIR spectroscopy is integral to process analytical technology (PAT) in food processing technology. The Bruker Optics MATRIX-F spectrometer supports online process control for solid and liquid samples, using contact and non-contact sensors, including fiber optic probes that withstand temperatures up to 260°C. This enables continuous monitoring in industrial deep-fat frying, ensuring optimal oil quality, reducing waste, and enhancing economic efficiency`
            },
            {
                type: "image",
                imageUrl: Blog12Img3,
                caption: "Bruker MATRIX-F II FT-NIR Spectrometer"
            },
            {
                type: "text",
                heading: "State-of-the-Art Technology for Reliable Results",
                content: `Bruker Optics’ FT-NIR analyzers feature the RockSolid interferometer with cube corner mirrors, resistant to vibration and thermal effects. This ensures stability and reliability in harsh factory environments. The pre-aligned, user-replaceable light source minimizes downtime, and precise wavelength accuracy supports calibration transfer, making these analyzers ideal for both lab and production settings.`
            },

            {
                type: "text",
                heading: "Advanced Software Solutions",
                content: `The OPUS software suite enhances FT-NIR analyzers with tools for calibration development, raw material identification, and conformity testing. The Multi Evaluation (ME) function automates hierarchical analyses, combining identification, quantification, and conformity tests. OPUS/LAB offers an intuitive interface for routine operators, while OPUS/PROCESS supports automated process control with integration options like Profibus DP, Modbus, and OPC. The software ensures data security with GMP/GLP compliance, 21 CFR Part 11 conformity, and permanent online diagnostics.`
            },
            {
                type: "text",
                heading: "Conclusion",
                content: `FT-NIR spectroscopy from Bruker Optics transforms edible oil quality testing by providing a rapid, non-destructive testing solution across the production chain—from sunflower seed oil reception to olive oil authentication and by-product analysis. By integrating process analytical technology, producers achieve real-time control, reduce costs, and meet stringent standards. With robust technology, intuitive software, and comprehensive support, FT-NIR analyzers empower the edible oil industry to deliver high-quality products consistently. Embrace the future of food processing technology with Bruker Optics to elevate quality control to new heights.

                Inkarp Instruments is a premier distributor and dependable service partner for Bruker products in India. Committed to innovation and excellence, Inkarp supplies advanced scientific instruments along with expert support, enabling researchers across the country to drive groundbreaking discoveries.

                References: Bruker`
            },
        ]
    },
    {
        id: 13,
        title: "Analytical Validation of an Immunofluorescence Assay for ARv7 Protein Expression on Circulating Tumor Cells Using the RareCyte Platform",
        date: "2025-06-05",
        image: Blog13,
        sections: [
            {
                type: "text",
                heading: "Analytical Validation of an Immunofluorescence Assay for ARv7 Protein Expression on Circulating Tumor Cells Using the RareCyte Platform",
                content: `In the realm of precision oncology, the characterization of circulating tumor cells (CTCs) through non-invasive methods like liquid biopsy has gained significant traction. These advancements offer real-time insights into tumor heterogeneity, therapy resistance, and potential biomarker identification in various cancers, particularly prostate cancer. A growing area of focus is the detection of the androgen receptor splice variant ARv7, which has been associated with resistance to anti androgen therapies. This document outlines the analytical validation of an immunofluorescence assay developed to detect ARv7 protein expression on CTCs using the RareCyte Platform, thus providing a powerful tool for assessing treatment efficacy and guiding therapeutic decisions.z`
            },
            {
                type: "text",
                heading: "Study Background",
                content: `CTCs represent a valuable diagnostic resource by enabling blood sample analysis for assessing drug target expression and disease progression without invasive procedures. The presence of ARv7 in tumor cells derived from prostate cancer patients is linked to poor response to second-generation anti androgen therapies. This study aimed to validate a robust immunofluorescence-based assay to detect and quantify ARv7 expression using the RareCyte Platform, with the potential to refine treatment strategies and monitor patient response through liquid biopsy.`
            },

            {
                type: "text",
                heading: "Methods",
                content: `The study utilized blood samples from healthy donors, spiked with prostate cancer cell lines representing a range of ARv7 expression levels: 22RV1 (high), LNCAP (low), and BT-474 (negative). Sample preparation was executed using the AccuCyte Sample Preparation System.

Staining was conducted with an automated slide staining system, using the RarePlex ARv7 CTC Panel Kit. This panel incorporates:

A nuclear dye
Anti-CD45 (to exclude leukocytes)
Antibodies to cytokeratin and epithelial cell adhesion molecule (EpCAM)
An ARv7-specific antibody
Slides were then imaged using the CyteFinder Instrument, and CTC detection was performed via a machine learning-based algorithm followed by expert review. For quantification, mean fluorescence intensity (MFI) was used as a measure of ARv7 protein levels, providing an objective readout of expression.`
            },
            {
                type: "image",
                imageUrl: Blog13Img2,
                caption: "Rarecyte CyteFinder II"
            },
            {
                type: "text",
                heading: "Results",
                content: `The study successfully established an ARv7 MFI threshold that reliably distinguished ARv7-positive from ARv7-negative cells. The assay identified 83% of 22RV1 cells as positive and 98% of BT-474 cells as negative, demonstrating an overall accuracy of 90%. Importantly, ARv7-positive staining in clinical prostate cancer samples was appropriately localized to the nucleus, confirming the assay’s biological relevance.

When compared with a standard CTC detection assay, recovery rates using the ARv7 assay were at least equivalent, validating its efficiency. Furthermore, the ARv7 assay allowed for precise single cell analysis, contributing to a deeper understanding of tumor heterogeneity.
                `
            },
            {
                type: "image",
                imageUrl: Blog13Img3,
                caption: "Figure 1. The RareCyte ARv7 CTC assay workflow. Blood was collected into AccuCyte Blood Collection Tubes. Nucleated blood cells were processed to slides using the density-based AccuCyte Sample Preparation System. Slides were stained with the RarePlex ARv7 CTC Panel Kit using the Leica® BOND RX automated slide staining system. Slides were scanned using the CyteFinder II Instrument and images were analyzed using CyteMapper® software and analysis tools. CTCs were analyzed by a trained reviewer and CTC ARv7 status was determined with a fluorescence intensity threshold."
            },
            {
                type: "image",
                imageUrl: Blog13Img4,
                caption: "Figure 2. Sensitivity/specificity of ARv7 detection on cell lines. Method for determining ARv7 MFI intensity threshold. Sensitivity is graphed in two curves, one for cell line 22RV1 (ARv7-high) and one for LNCaP (ARv7-low). Bars and right axis values indicate Specificity for the biomarker-negative cell line BT-474. An MFI cutoff of 100 was selected that achieved a minimum Specificity value of 0.9. A cell with an MFI value greater than the 100 MFI threshold constitutes a positive test with the ARv7 assay for validation studies."
            },
            {
                type: "image",
                imageUrl: Blog13Img5,
                caption: "Figure 3. Accuracy of ARv7 detection on cell lines by stainer run. Distribution of ARv7 MFI for stainer run 1 (left), 2 (center), and 3 (right) for each cell line. Threshold dotted line at MFI=100 is used to determine biomarker expression status on a per-cell basis."
            },
            {
                type: "image",
                imageUrl: Blog13Img6,
                caption: "Table 1. Inter-stainer run mean and CV. ARv7 MFI and CV shown for each cell type and stainer run. Each run consisted of 7 slide replicates. ARv7 percent positivity was determined using an MFI cutoff of 100."
            },
            {
                type: "image",
                imageUrl: Blog13Img7,
                caption: "Figure 4. mCTC stained for ARv7. Representative images of mCTC identified with the ARv7 Panel Kit. Scale bars represent 5 μm."
            },
            {
                type: "image",
                imageUrl: Blog13Img8,
                caption: "Figure 5. Clinical CTC stained for ARv7. Representative images of clinical CTCs obtained by staining slides from prostate cancer patients with the ARv7 Staining Kit, with status indicated, and with ARv7 MFI shown on respective images. Scale bars represent 5 μm."
            },
            {
                type: "text",
                heading: "Conclusion",
                content: `This analytical validation confirms that the ARv7 immunofluorescence assay is a sensitive, specific, and reproducible method for detecting ARv7 expression in CTCs from blood samples. The assay performed robustly in differentiating ARv7-positive from negative cells, and its performance was on par with existing CTC detection technologies.

In clinical samples, both ARv7-positive and ARv7-negative CTCs were successfully identified, demonstrating its potential utility in early and advanced clinical study stages. However, a larger cohort is necessary to establish a definitive clinical threshold for ARv7 positivity.

Crucially, this assay facilitates androgen receptor status monitoring in a non-invasive manner and can serve as a predictive tool for therapeutic response. As ARv7 has been implicated in resistance to anti androgen therapies, the ability to track its expression through liquid biopsy holds promise for personalized treatment planning.

The ARv7 assay is also compatible with the RarePlex 488 Developer Kit, allowing researchers to incorporate an additional biomarker for multiplexing, thereby broadening the scope of fluorescence intensity-based analysis in immunofluorescence assays.

Inkarp Instruments is India’s leading distributor and trusted service partner for Rarecyte products. Driven by a commitment to innovation and excellence, Inkarp delivers state-of-the-art scientific equipment and dependable support to researchers across the nation.

Reference: Rarecyte`
            },
        ]
    },
    {
        id: 14,
        title: "Optimizing the Lyophilisation Process for Banana Slices Using BUCHI Lyovapor™ L-200",
        date: "2025-06-05",
        image: Blog14,
        sections: [
            {
                type: "text",
                heading: "Analytical Validation of an Immunofluorescence Assay for ARv7 Protein Expression on Circulating Tumor Cells Using the RareCyte Platform",
                content: `Freeze drying, also known as the lyophilisation process, is a highly efficient and gentle food drying technology used for preserving delicate food items without altering their taste, texture, or nutritional value. In this application, the focus is on the freeze drying of banana slices using advanced laboratory freeze drying equipment. This method involves freezing the food and then removing water through sublimation under reduced pressure. The freeze dried food obtained retains its original structure and is ideal for long-term storage. Commonly used in the production of freeze dried food products such as coffee, fruits, and vegetables, freeze drying offers distinct advantages in quality preservation. This study demonstrates the banana lyophilization process using the BUCHI Lyovapor™ L-200 Pro and evaluates the results using moisture analysis.`
            },
            {
                type: "text",
                heading: "Equipment Used",
                content: `-BUCHI Lyovapor™ L-200 Pro\n-BUCHI Lyovapor™ Software\n-Deep Freezer -40°C, tritec HANNOVER\n-Stainless steel tray\n-Mettler Toledo HR73 Halogen Moisture Analyser`
            },
            {
                type: "image",
                imageUrl: Blog14Img2,
                caption: "BUCHI LyovaporTM L-200"
            },
            {
                type: "text",
                heading: "Materials",
                content: `Fresh banana slices, sourced from a local supermarket.`
            },
            {
                type: "text",
                subheading: "1. Sample Preparation",
                heading: "Experimental Methodology",
                content: `Fresh bananas were sliced into uniform pieces approximately 5 mm thick. A total of eleven slices were evenly arranged on a stainless steel tray and placed into a deep freezer at -40°C (tritec HANNOVER) overnight to ensure thorough freezing. An alternative storage temperature of -20°C may also be used, depending on available infrastructure.`
            },
            {
                type: "image",
                imageUrl: Blog14Img3,
                caption: "Figure 1: Tray with fresh cut banana slices."
            },
            {
                type: "table",
                columns: ["Drying chamber type", "Standard", "Safety temperature below collapse [°C]", "	Inactivated"],

                rows: [
                    ["Sample collapse temperature [°C]", "Inactivated", "Gas type", "Ambient air"],

                ],
                caption: "Table 1: General settings for drying of banana slices in LyovaporTM L-200."
            },
            {
                type: "text",
                heading: "2. Freeze Drying with BUCHI Lyovapor™ L-200 Pro",
                content: `After 24 hours of deep freezing, the frozen banana slices were transferred into the Lyovapor™ L-200, a high-performance lyophilisation machine designed for precise food drying technology applications. Using the Lyovapor™ Software, both the primary and secondary drying phases were programmed.\nDuring primary drying, water removal from banana occurs via sublimation, while secondary drying eliminates adsorbed moisture. The shelf temperature was maintained below 25°C throughout the process to avoid sample collapse. Ambient air was used as the drying gas.`
            },
            {
                type: "table",
                columns: ["Step", "", "1", "2"],
                subcolumns: ["Phase", "", "Primary Drying", "Secondary Drying"],
                rows: [
                    ["Time", "hh:mm", "12:00", "03:00"],
                    ["Temperature set point", "°C", "25.0", "25.0"],
                    ["Temperature gradient", "°C/min", "0.07", "0.00"],
                    ["Pressure type", "", "Regulated", "Regulated"],
                    ["Pressure set point", "mbar", "0.370", "0.100"],
                    ["Safety pressure", "mbar", "1.500", "1.500"],
                    ["Safety pressure duration", "sec", "10", "10"]
                ],
                caption: "Table 2: Parameters of the primary and secondary drying steps, set on the LyovaporTM Software."
            },
            {
                type: "text",
                heading: "3. Halogen Moisture Analysis",
                content: `Post freeze drying banana slices, residual moisture content was measured to determine drying efficiency. Three banana slices were ground and quickly transferred (within 30 seconds) into the Mettler Toledo HR73 Halogen Moisture Analyser, a reliable instrument for moisture analysis of dried fruits. The analysis was conducted at 110°C, using a switch-off criterion of 5 (defined as a change of less than 1 mg in 140 seconds).`
            },
            {
                type: "table",
                rows: [
                    ["switch-off criterion", "5",],
                    ["Drying temperature [°C]", "110"]
                ],
                caption: "Table 3: Moisture analyser settings"
            },

            {
                type: "image",
                imageUrl: Blog14Img4,
                caption: "Figure 2: Tray with banana slices after freeze drying"
            },
            {
                type: "text",
                heading: "Results and Discussion",
                subheading: [
                    "1. Visual Evaluation",

                ],
                content: [
                    "As shown in comparative images, the freeze dried banana slices maintained their original shape, color, and size, indicating minimal structural change during the process. This confirms the effectiveness of the BUCHI Lyovapor™ L-200 in preserving physical properties of the sample.",

                ],

            },

            {
                type: "text",
                subheading: "2. Moisture Content Determination",
                content: ["Moisture analysis results are summarized in the table below: All samples exhibited moisture contents below 3.14%, with an average water removal from banana of over 95.92%. The initial moisture content of the fresh banana was 76.97 ± 1.24%."]
            },
            {
                type: "table",
                columns: ["Banana slice", "Weight of freeze dried sample [g]", "Weight of halogen dried sample [g]", "Moisture content [%]"],
                rows: [
                    ["1", "0.606", "0.587", "3.14"],
                    ["2", "0.843", "0.818", "2.97"],
                    ["3", "0.794", "0.770", "3.02"],
                ],
                caption: "Table 4: Results of the moisture analysis after freeze drying with LyovaporTM L-200."
            },
            {
                type: "text",
                heading: "Advantages of Freeze Drying Banana Slices",
                content: `Maintains flavor, color, aroma, and nutritional integrity.
Eliminates surface hardening.
Produces porous, lightweight freeze dried food that is easily rehydrated.
Reduces transportation costs due to lower weight and volume.
No preservatives or additives required.`
            },
            {
                type: "text",
                heading: "Limitations",
                content: `Exposure to ambient air may lead to rapid rehydration.
Requires vacuum-sealed or nitrogen-filled packaging.
Fragile texture may lead to cracking during handling.
Freeze drying is time and energy intensive, resulting in higher operational costs.`
            },
            {
                type: "text",
                heading: "Conclusion",
                content: `This study illustrates that the banana lyophilization process, when carried out using the BUCHI Lyovapor™ L-200 Pro, results in highly efficient water removal from banana slices while maintaining structural integrity. Supported by accurate measurements from the Mettler Toledo HR73 Halogen Moisture Analyser, the process ensures superior-quality freeze dried food products. The integration of the BUCHI Lyovapor™ Software provides precise control and reproducibility, making this method ideal for both research and industrial applications in food drying technology.

Inkarp Instruments is India’s leading distributor and trusted service partner for Buchi products. Driven by a commitment to innovation and excellence, Inkarp delivers cutting-edge scientific equipment and dependable support to researchers nationwide.

References:

1. G. W. Oetjen; Freeze drying; Ullmann's Encyclopedia of Industrial Chemistry (2004).

2. https://nuts.com/driedfruit/freeze dried/

3. http://www.chaucerfreezedried.com/

4. https://www.northbaytrading.com/dried-fruit/freeze dried-fruit/

5. H. Tse-Chao Hua, L. Bao-Lin, Z. Hua; Freeze drying of Pharmaceutical and Food Products, Woodhead Publishing Series in Food Science, Technology and Nutrition, pages 141–169 (2010).`
            },
        ]
    },
]

export default BlogsDetailsTwo;
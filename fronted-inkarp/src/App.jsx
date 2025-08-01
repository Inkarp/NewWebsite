import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import MainLayout from "./components/MainLayout";
// Main Pages
import Home from "./Main/Home";
import OurStory from "./Main/OurStory";
import Careers from "./Main/Careers";
import ContactUs from "./Main/ContactUs";
import Catalyst from "./Main/Catalyst";
import ProductProfile from "./Main/ProductProfile";
import NotFound from "./Main/NotFound";

import BlogDetails from "./components/pages/NewsAndEvents/BlogDetails";
// Footer Pages
import TermsAndConditions from "./components/pages/Footer/TermsAndConditions";

import BlogsPage from "./components/pages/NewsAndEvents/BlogsPage";
import EventsNew from "./components/pages/NewsAndEvents/EventsNew";
import EventDetails from "./components/pages/NewsAndEvents/EventDetails";

// Verticals Overview
import VerticalsPage from "./components/pages/Verticals/VerticalsPage";

// Individual Vertical Pages
import SynthesisAndFlowChemistry from "./components/pages/Verticals/SynthesisAndFlowChemistry";
import AnalyticalAndChromatographySolutions from "./components/pages/Verticals/AnalyticalAndChromatographySolutions";
import AnalyticalChemistryAndWeighing from "./components/pages/Verticals/AnalyticalChemistryAndWeighing";
import MaterialScienceAndBattery from "./components/pages/Verticals/MaterialScienceAndBattery";
import GeneralLaboratoryInstrument from "./components/pages/Verticals/GeneralLaboratoryInstruments";
import LifeSciences from "./components/pages/Verticals/LifeSciences";
import ExtrusionAndHomogenization from "./components/pages/Verticals/ExtrusionAndHomogenization";
import RheologyAndThermalAnalysis from "./components/pages/Verticals/RheologyAndThermalAnalysis";
import PilotPlantsAndAutomation from "./components/pages/Verticals/PilotPlantsAndAutomation";

// Analytical Chemistry & Weighing
import WeighingBalances from "./components/pages/Verticals/AnalyticalChemistry/WeighingBalances";
import ProductDetails from "./components/pages/Verticals/AnalyticalChemistry/ProductDetails";

// Synthesis and Flow Chemistry
import RotaryEvaporators from "./components/pages/Verticals/SynthesisAndFlowChemistry/RotaryEvaporators";
import RotaryProductDetails from "./components/pages/Verticals/SynthesisAndFlowChemistry/RotaryProductDetails";
import VerticalsBubble from "./components/pages/Verticals/VerticalsBubble";
import RheologyProducts from "./components/pages/Verticals/Rheology/RheologyProducts";
import RheologyProductDetails from "./components/pages/Verticals/Rheology/RheologyProductDetails";
import PilotPlantProducts from "./components/pages/Verticals/PilotPlants/PilotPlantProducts";
import PilotPlantProductDetails from "./components/pages/Verticals/PilotPlants/PilotPlantProductDetails";
import MaterialScienceProducts from "./components/pages/Verticals/MaterialScience/MaterialScienceProducts";
import MaterialScienceProductDetails from "./components/pages/Verticals/MaterialScience/MaterialScienceProductDetails";
import ExtrusionProducts from "./components/pages/Verticals/Extrusion/ExtrusionProducts";
import ExtrusionProductDetails from "./components/pages/Verticals/Extrusion/ExtrusionProductDetails";
import ChromotographyProducts from "./components/pages/Verticals/Chromatography/ChromatographyProducts";
import ChromatographyProducts from "./components/pages/Verticals/Chromatography/ChromatographyProducts";
import ChromatographyProductDetails from "./components/pages/Verticals/Chromatography/ChromatographyProductDetails";
import LifeScienceProducts from "./components/pages/Verticals/LifeSciences/LifeScienceProducts";
import LifeScienceProductDetails from "./components/pages/Verticals/LifeSciences/LifeScienceProductDetails";
import GeneralProducts from "./components/pages/Verticals/GeneneralLaboratory/GeneralProducts";
import GeneralProductDetails from "./components/pages/Verticals/GeneneralLaboratory/GeneralProductDetails";
import WebinarsNew from "./components/pages/NewsAndEvents/WebinarsPage";
import Webinars from "./components/pages/NewsAndEvents/Webinars";
import HomeNew from "./Main/HomeNew";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          {/* Main Routes */}
          <Route index element={<Home />} />

          <Route path="/about" element={<OurStory />} />
          <Route path="/careers" element={<Careers />} />
          {/* <Route path="/careers/positions" element={<CareersForm />} /> */}
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/catalystcue" element={<Catalyst />} />
          <Route path="/productProfile" element={<ProductProfile />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

          {/* Insights & Updates */}
          <Route path="/insights-and-updates" element={<EventsNew />} />
          <Route path="/insights-and-updates/blogs" element={<BlogsPage />} />
          <Route path="/insights-and-updates/blogs/:id" element={<BlogDetails />} />
          <Route path="/insights-and-updates/events/:id" element={<EventDetails />} />
          <Route path="/insights-and-updates/news-and-events" element={<EventsNew />} />
          <Route path="/insights-and-updates/webinars" element={<WebinarsNew />} />
          {/* <Route path="/insights-and-updates/webinars" element={<Webinars />} /> */}

          {/* General fallback */}
          {/* <Route path="/verticals/:subpage" element={<VerticalsPage />} /> */}
          {/* <Route path="/verticals" element={<VerticalsPage />} /> */}
          <Route path="/verticals" element={<VerticalsBubble />} />
          {/* Verticals Routes */}
          {/* Specific first */}
          <Route path="/verticals/synthesis-and-flow-chemistry" element={<SynthesisAndFlowChemistry />} />
          <Route path="/verticals/synthesis-and-flow-chemistry/:type" element={<RotaryEvaporators />} />
          <Route path="/verticals/synthesis-and-flow-chemistry/:type/:productSlug" element={<RotaryProductDetails />} />

          <Route path="/verticals/analytical-chemistry-and-weighing" element={<AnalyticalChemistryAndWeighing />} />
          <Route path="/verticals/analytical-chemistry-and-weighing/:type" element={<WeighingBalances />} />
          <Route path="/verticals/analytical-chemistry-and-weighing/:type/:productSlug" element={<ProductDetails />} />

          <Route path="/verticals/rheology-and-thermal-analysis" element={<RheologyAndThermalAnalysis />} />
          <Route path="/verticals/rheology-and-thermal-analysis/:type" element={<RheologyProducts />} />
          <Route path="/verticals/rheology-and-thermal-analysis/:type/:productSlug" element={<RheologyProductDetails />} />

          <Route path="/verticals/pilot-plants-and-automation" element={<PilotPlantsAndAutomation />} />
          <Route path="/verticals/pilot-plants-and-automation/:type" element={<PilotPlantProducts />} />
          <Route path="/verticals/pilot-plants-and-automation/:type/:productSlug" element={<PilotPlantProductDetails />} />

          <Route path="/verticals/material-science-and-battery" element={<MaterialScienceAndBattery />} />
          <Route path="/verticals/material-science-and-battery/:type" element={<MaterialScienceProducts />} />
          <Route path="/verticals/material-science-and-battery/:type/:productSlug" element={<MaterialScienceProductDetails />} />

          <Route path="/verticals/extrusion-and-homogenization" element={<ExtrusionAndHomogenization />} />
          <Route path="/verticals/extrusion-and-homogenization/:type" element={<ExtrusionProducts />} />
          <Route path="/verticals/extrusion-and-homogenization/:type/:productSlug" element={<ExtrusionProductDetails />} />

          <Route path="/verticals/analytical-and-chromatography-solutions" element={<AnalyticalAndChromatographySolutions />} />
          <Route path="/verticals/analytical-and-chromatography-solutions/:type" element={<ChromatographyProducts />} />
          <Route path="/verticals/analytical-and-chromatography-solutions/:type/:productSlug" element={<ChromatographyProductDetails />} />

          <Route path="/verticals/lifesciences" element={<LifeSciences />} />
          <Route path="/verticals/lifesciences/:type" element={<LifeScienceProducts />} />
          <Route path="/verticals/lifesciences/:type/:productSlug" element={<LifeScienceProductDetails />} />

          <Route path="/verticals/general-laboratory-instrument" element={<GeneralLaboratoryInstrument />} />
          <Route path="/verticals/general-laboratory-instrument/:type" element={<GeneralProducts />} />
          <Route path="/verticals/general-laboratory-instrument/:type/:productSlug" element={<GeneralProductDetails />} />

          {/* Fallback 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingContactWidget from './components/FloatingContactWidget';
import WhatsAppFloatingWidget from './components/WhatsAppFloatingWidget';
import BackToTopWidget from './components/BackToTopWidget';

// Import all pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BrandStoryPage from './pages/BrandStoryPage';
import CompanyProfilePage from './pages/CompanyProfilePage';
import ManufacturingCapabilitiesPage from './pages/ManufacturingCapabilitiesPage';
import QualityControlPage from './pages/QualityControlPage';
import ServicesPage from './pages/ServicesPage';
import OEMODMPage from './pages/OEMODMPage';
import ProductDesignPage from './pages/ProductDesignPage';
import ProductionAssemblyPage from './pages/ProductionAssemblyPage';
import PackagingLogisticsPage from './pages/PackagingLogisticsPage';
import IPLHairRemovalPage from './pages/IPLHairRemovalPage';
import ClientsPage from './pages/ClientsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import SitemapPage from './pages/SitemapPage';
import SapphirePage from './pages/SapphirePage';
import IceFeelingIPLPage from './pages/IceFeelingIPLPage';
import AppConnectIPLPage from './pages/AppConnectIPLPage';
import EmeraldIPLPage from './pages/EmeraldIPLPage';
import DualLampIPLPage from './pages/DualLampIPLPage';
import HandleThemisIPLPage from './pages/HandleThemisIPLPage';
import MetisSapphirePage from './pages/SapphireMetisIPLPage';
import WoodenIPLPage from './pages/WoodenIPLPage';
import EireneHandleIPLPage from './pages/HandleIEirenePLPage';
import HandheldNyxIPLPage from './pages/HandheldNyxIPLPage';

// Import Custom IPL pages
import OemOdmPage from './pages/custom-ipl/OemOdmPage';
import DesignPage from './pages/custom-ipl/DesignPage';
import MultiFunctionPage from './pages/custom-ipl/MultiFunctionPage';
import SmartAppPage from './pages/custom-ipl/SmartAppPage';
import CoolingPage from './pages/custom-ipl/CoolingPage';
import CompliancePage from './pages/custom-ipl/CompliancePage';
import LogoPrintPage from './pages/custom-ipl/LogoPrintPage';
import DualLampPage from './pages/custom-ipl/DualLampPage';
import PackagingPage from './pages/custom-ipl/PackagingPage';
import MultiHeadPage from './pages/custom-ipl/MultiHeadPage';
import MenPage from './pages/custom-ipl/MenPage';
import SkinSensorPage from './pages/custom-ipl/SkinSensorPage';
import CustomEnergyPage from './pages/custom-ipl/CustomEnergyPage';
import AfterSalesPage from './pages/custom-ipl/AfterSalesPage';
import MassProductionPage from './pages/custom-ipl/MassProductionPage';
import ExpertisePage from './pages/custom-ipl/ExpertisePage';
import StartupsPage from './pages/custom-ipl/StartupsPage';
import DtcSupportPage from './pages/custom-ipl/DtcSupportPage';
import PartnershipPage from './pages/custom-ipl/PartnershipPage';
import OneStepPage from './pages/custom-ipl/OneStepPage';
import FdaClearedPage from './pages/custom-ipl/FdaClearedPage';
import GlobalShippingPage from './pages/custom-ipl/GlobalShippingPage';

// Import Components pages
import LampCartridgesPage from './pages/components/LampCartridgesPage';
import OpticalFiltersPage from './pages/components/OpticalFiltersPage';
import CoolingSystemPage from './pages/components/CoolingSystemPage';
import CircuitBoardsPage from './pages/components/CircuitBoardsPage';
import HousingEnclosuresPage from './pages/components/HousingEnclosuresPage';
import PowerSupplyPage from './pages/components/PowerSupplyPage';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/brand-story" element={<BrandStoryPage />} />
              <Route path="/company-profile" element={<CompanyProfilePage />} />
              <Route path="/manufacturing-capabilities" element={<ManufacturingCapabilitiesPage />} />
              <Route path="/quality-control" element={<QualityControlPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/oem-odm" element={<OEMODMPage />} />
              <Route path="/product-design" element={<ProductDesignPage />} />
              <Route path="/production-assembly" element={<ProductionAssemblyPage />} />
              <Route path="/packaging-logistics" element={<PackagingLogisticsPage />} />
              <Route path="/ipl-hair-removal" element={<IPLHairRemovalPage />} />
              <Route path="/clients" element={<ClientsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/sitemap" element={<SitemapPage />} />

              {/* Custom IPL Routes */}
              <Route path="/custom-ipl/oem-odm" element={<OemOdmPage />} />
              <Route path="/custom-ipl/design" element={<DesignPage />} />
              <Route path="/custom-ipl/multi-function" element={<MultiFunctionPage />} />
              <Route path="/custom-ipl/smart-app" element={<SmartAppPage />} />
              <Route path="/custom-ipl/cooling" element={<CoolingPage />} />
              <Route path="/custom-ipl/compliance" element={<CompliancePage />} />
              <Route path="/custom-ipl/logo-print" element={<LogoPrintPage />} />
              <Route path="/custom-ipl/duallamp" element={<DualLampPage />} />
              <Route path="/custom-ipl/packaging" element={<PackagingPage />} />
              <Route path="/custom-ipl/multi-head" element={<MultiHeadPage />} />
              <Route path="/custom-ipl/men" element={<MenPage />} />
              <Route path="/custom-ipl/skinsensor" element={<SkinSensorPage />} />
              <Route path="/custom-ipl/customenery" element={<CustomEnergyPage />} />
              <Route path="/custom-ipl/aftersales" element={<AfterSalesPage />} />
              <Route path="/custom-ipl/massproduction" element={<MassProductionPage />} />
              <Route path="/custom-ipl/expertise" element={<ExpertisePage />} />
              <Route path="/custom-ipl/startups" element={<StartupsPage />} />
              <Route path="/custom-ipl/dtcsupport" element={<DtcSupportPage />} />
              <Route path="/custom-ipl/partnership" element={<PartnershipPage />} />
              <Route path="/custom-ipl/onestep" element={<OneStepPage />} />
              <Route path="/custom-ipl/fda-cleared" element={<FdaClearedPage />} />
              <Route path="/custom-ipl/globalshipping" element={<GlobalShippingPage />} />

              {/* Components Routes */}
              <Route path="/components/lamp-cartridges" element={<LampCartridgesPage />} />
              <Route path="/components/optical-filters" element={<OpticalFiltersPage />} />
              <Route path="/components/cooling-system" element={<CoolingSystemPage />} />
              <Route path="/components/circuit-boards" element={<CircuitBoardsPage />} />
              <Route path="/components/housing-enclosures" element={<HousingEnclosuresPage />} />
              <Route path="/components/power-supply" element={<PowerSupplyPage />} />
            </Routes>
          </main>
          <Footer />
          <FloatingContactWidget />
          <WhatsAppFloatingWidget />
          <BackToTopWidget />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
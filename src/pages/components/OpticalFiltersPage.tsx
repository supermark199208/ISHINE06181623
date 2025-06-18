import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { Zap, Battery, Shield, Gauge, Plug, Settings, ChevronRight } from 'lucide-react';

const OpticalFiltersPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Optical Filters & Lenses</span>
            <span className="block text-primary-600">Precision Light Control Technology</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500">
            High-quality optical filters and lenses for optimal IPL treatment performance and safety.
          </p>
        </div>

        {/* Key Features */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Product Features</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Eye className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Precision Optics</h3>
              </div>
              <p className="mt-4 text-gray-600">Advanced optical design for precise light wavelength control.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Shield className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Safety Features</h3>
              </div>
              <p className="mt-4 text-gray-600">UV protection and heat management for safe operation.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Sparkles className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Crystal Clear</h3>
              </div>
              <p className="mt-4 text-gray-600">Superior clarity for maximum light transmission.</p>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Technical Specifications</h2>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Optical Properties</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Transmission range: 510-1200nm</li>
                  <li>• UV blocking: <ChevronRight className="h-5 w-5" />99.9%</li>
                  <li>• Thermal resistance: Up to 200°C</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Physical Specifications</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Custom sizes available</li>
                  <li>• Anti-reflection coating</li>
                  <li>• Scratch-resistant surface</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Product Options */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Available Options</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Standard Filters</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• HR (Hair Removal) filter</li>
                <li>• SR (Skin Rejuvenation) filter</li>
                <li>• Universal compatibility</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Custom Solutions</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Customized wavelength ranges</li>
                <li>• Special coatings available</li>
                <li>• Specific size requirements</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Applications</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="flex items-center gap-4">
                <Settings className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Device Integration</h3>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Home-use IPL devices</li>
                <li>• Professional equipment</li>
                <li>• Medical-grade systems</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="flex items-center gap-4">
                <Target className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Treatment Types</h3>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Permanent hair reduction</li>
                <li>• Skin rejuvenation</li>
                <li>• Specialized treatments</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="py-12">
          <div className="rounded-2xl bg-primary-50 px-6 py-8 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900">Quality Metrics</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">99.9%</div>
                <div className="mt-2 text-sm text-gray-600">UV Protection</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">95%+</div>
                <div className="mt-2 text-sm text-gray-600">Light Transmission</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">100%</div>
                <div className="mt-2 text-sm text-gray-600">Quality Tested</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default OpticalFiltersPage;
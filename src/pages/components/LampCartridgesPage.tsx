import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { Zap, Lightbulb, Shield, Settings, BarChart3, Sparkles } from 'lucide-react';

const LampCartridgesPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">IPL Lamp Cartridges</span>
            <span className="block text-primary-600">High-Performance Light Technology</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500">
            Advanced IPL lamp cartridges designed for optimal performance and longevity.
          </p>
        </div>

        {/* Key Features */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Cartridge Features</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Zap className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">High Energy Output</h3>
              </div>
              <p className="mt-4 text-gray-600">Powerful light emission for effective hair removal treatment.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Lightbulb className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Long Lifespan</h3>
              </div>
              <p className="mt-4 text-gray-600">Extended operational life with consistent performance.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Shield className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Safety Features</h3>
              </div>
              <p className="mt-4 text-gray-600">Built-in safety mechanisms for reliable operation.</p>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Technical Specifications</h2>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Settings className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Performance Parameters</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Energy output: 4-6.5 J/cm²</li>
                  <li>• Wavelength range: 510-1200nm</li>
                  <li>• Flash rate: Up to 2 Hz</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <BarChart3 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Durability Metrics</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Lifetime flashes: 300,000+</li>
                  <li>• Operating temperature: 10-40°C</li>
                  <li>• Cooling system compatible</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Product Options */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Available Models</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Standard Cartridge</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• General purpose use</li>
                <li>• Standard energy output</li>
                <li>• Universal compatibility</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Professional Cartridge</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Enhanced performance</li>
                <li>• Extended lifespan</li>
                <li>• Advanced cooling system</li>
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
                <Sparkles className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Treatment Types</h3>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Hair removal</li>
                <li>• Skin rejuvenation</li>
                <li>• Photorejuvenation</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="flex items-center gap-4">
                <Settings className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Device Compatibility</h3>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Home-use devices</li>
                <li>• Professional equipment</li>
                <li>• Multi-function systems</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="py-12">
          <div className="rounded-2xl bg-primary-50 px-6 py-8 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900">Performance Metrics</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">300K+</div>
                <div className="mt-2 text-sm text-gray-600">Flash Lifetime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">99.9%</div>
                <div className="mt-2 text-sm text-gray-600">Quality Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">6.5</div>
                <div className="mt-2 text-sm text-gray-600">Max Energy (J/cm²)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default LampCartridgesPage;
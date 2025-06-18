import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { Layers, Zap, Maximize2, Settings2, Timer, ArrowRight } from 'lucide-react';

const MultiHeadPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Multi-Head Configuration</span>
            <span className="block text-primary-600">Versatile Treatment Solutions</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500">
            Customize your IPL device with multiple treatment heads for comprehensive beauty and skincare solutions.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Multi-Head Advantages</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Layers className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Versatility</h3>
              </div>
              <p className="mt-4 text-gray-600">Multiple treatment options with interchangeable heads for different applications.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Maximize2 className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Targeted Treatment</h3>
              </div>
              <p className="mt-4 text-gray-600">Specialized heads for different body areas and treatment types.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Timer className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Time Efficiency</h3>
              </div>
              <p className="mt-4 text-gray-600">Quick head changes for different treatment requirements.</p>
            </div>
          </div>
        </div>

        {/* Treatment Head Options */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Available Treatment Heads</h2>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Hair Removal Head</h3>
                <p className="mt-2 text-gray-600">Optimized for efficient and long-lasting hair removal treatments.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Settings2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Skin Rejuvenation Head</h3>
                <p className="mt-2 text-gray-600">Specialized for anti-aging and skin texture improvement treatments.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Technical Features</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Head Specifications</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Quick-change mechanism</li>
                <li>• Individual cooling systems</li>
                <li>• Specialized wavelength filters</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Treatment Parameters</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Adjustable energy levels</li>
                <li>• Multiple spot sizes</li>
                <li>• Treatment-specific settings</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Treatment Applications</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Body Areas</h3>
              <p className="mt-4 text-gray-600">Specialized heads for face, body, and sensitive areas with optimal spot sizes.</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Treatment Types</h3>
              <p className="mt-4 text-gray-600">Multiple treatment options including hair removal, skin rejuvenation, and more.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-12">
          <div className="rounded-2xl bg-primary-50 px-6 py-8 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900">Create Your Multi-Head IPL Device</h2>
            <p className="mt-4 text-lg text-gray-600">
              Ready to develop a versatile multi-head IPL device? Contact us to discuss your requirements.
            </p>
            <button className="mt-6 inline-flex items-center rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default MultiHeadPage;
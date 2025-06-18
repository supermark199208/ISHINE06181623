import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { Zap, Timer, Maximize2, Battery, Settings, ArrowRight } from 'lucide-react';

const DualLampPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Dual-Lamp Configuration</span>
            <span className="block text-primary-600">Enhanced Treatment Efficiency</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500">
            Experience superior performance and faster treatments with our innovative dual-lamp IPL technology.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Dual-Lamp Advantages</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Timer className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Faster Treatment</h3>
              </div>
              <p className="mt-4 text-gray-600">Reduced treatment time with dual-lamp technology for larger coverage area.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Maximize2 className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Larger Coverage</h3>
              </div>
              <p className="mt-4 text-gray-600">Increased treatment window size for more efficient body coverage.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Battery className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Energy Efficiency</h3>
              </div>
              <p className="mt-4 text-gray-600">Optimized energy distribution for consistent and effective treatments.</p>
            </div>
          </div>
        </div>

        {/* Technical Features */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Technical Features</h2>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Dual Energy System</h3>
                <p className="mt-2 text-gray-600">Independent energy control for each lamp ensures optimal treatment parameters.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Settings className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Synchronized Operation</h3>
                <p className="mt-2 text-gray-600">Advanced synchronization system for coordinated lamp firing.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Technical Specifications</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Lamp Configuration</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Dual high-performance IPL lamps</li>
                <li>• Independent cooling systems</li>
                <li>• Synchronized timing control</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Performance Metrics</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Enhanced coverage area</li>
                <li>• Reduced treatment time</li>
                <li>• Optimized energy efficiency</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Application Areas */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Application Areas</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Body Areas</h3>
              <p className="mt-4 text-gray-600">Ideal for larger treatment areas such as legs, back, and chest, with faster completion times.</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Treatment Types</h3>
              <p className="mt-4 text-gray-600">Suitable for various treatments including hair removal and skin rejuvenation.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-12">
          <div className="rounded-2xl bg-primary-50 px-6 py-8 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900">Upgrade to Dual-Lamp Technology</h2>
            <p className="mt-4 text-lg text-gray-600">
              Ready to enhance your IPL device with dual-lamp technology? Contact us to discuss your requirements.
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

export default DualLampPage;
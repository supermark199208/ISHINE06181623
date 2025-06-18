import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { Zap, Sparkles, Shield, Settings2, Wrench, ArrowRight } from 'lucide-react';

const MultiFunctionPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Product Function Customization</span>
            <span className="block text-primary-600">Multi-Function IPL Solutions</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500">
            Create versatile IPL devices with customized functions to meet your specific market needs and user requirements.
          </p>
        </div>

        {/* Key Functions */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Available Functions</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Zap className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Hair Removal</h3>
              </div>
              <p className="mt-4 text-gray-600">Advanced IPL technology for effective and long-lasting hair removal treatment.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Sparkles className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Skin Rejuvenation</h3>
              </div>
              <p className="mt-4 text-gray-600">Customizable wavelengths for various skin treatments and anti-aging effects.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Shield className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Safety Features</h3>
              </div>
              <p className="mt-4 text-gray-600">Built-in safety mechanisms and skin tone sensors for optimal treatment safety.</p>
            </div>
          </div>
        </div>

        {/* Customization Options */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Customization Options</h2>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Settings2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Energy Level Settings</h3>
                <p className="mt-2 text-gray-600">Adjustable power levels to suit different treatment needs and skin types.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Wrench className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Treatment Modes</h3>
                <p className="mt-2 text-gray-600">Multiple operation modes for different treatment areas and purposes.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Technical Specifications</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Wavelength Options</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• 530-1200nm for Hair Removal</li>
                <li>• 560-1200nm for Skin Rejuvenation</li>
                <li>• Custom wavelengths available</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Energy Settings</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Adjustable from 2-6.5 J/cm²</li>
                <li>• Multiple power levels</li>
                <li>• Smart energy adaptation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-12">
          <div className="rounded-2xl bg-primary-50 px-6 py-8 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900">Customize Your IPL Device</h2>
            <p className="mt-4 text-lg text-gray-600">
              Ready to create a multi-function IPL device? Contact us to discuss your specific requirements.
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

export default MultiFunctionPage;
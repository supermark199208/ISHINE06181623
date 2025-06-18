import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { Zap, Waves, Settings2, Shield, Target, ArrowRight } from 'lucide-react';

const CustomEnergyPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Custom Energy & Wavelengths</span>
            <span className="block text-primary-600">Optimized Performance Solutions</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500">
            Tailor your IPL device's energy output and wavelength specifications for optimal treatment results.
          </p>
        </div>

        {/* Key Features */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Customization Options</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Zap className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Energy Control</h3>
              </div>
              <p className="mt-4 text-gray-600">Precise energy level customization for different treatment needs.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Waves className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Wavelength Options</h3>
              </div>
              <p className="mt-4 text-gray-600">Customizable wavelength ranges for specific treatment applications.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Target className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Treatment Modes</h3>
              </div>
              <p className="mt-4 text-gray-600">Multiple operation modes with customized energy profiles.</p>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Technical Specifications</h2>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Settings2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Energy Settings</h3>
                <p className="mt-2 text-gray-600">Adjustable energy levels from 2-6.5 J/cm² with precise control.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Safety Features</h3>
                <p className="mt-2 text-gray-600">Built-in safety mechanisms for energy level monitoring and control.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Wavelength Options */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Available Wavelength Ranges</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Hair Removal</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• 530-1200nm standard range</li>
                <li>• Custom filters available</li>
                <li>• Optimized for various hair types</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Skin Treatment</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• 560-1200nm for rejuvenation</li>
                <li>• Specialized wavelengths</li>
                <li>• Multiple treatment modes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Energy Profiles */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Energy Profiles</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Treatment Modes</h3>
              <p className="mt-4 text-gray-600">Customizable pulse patterns and energy sequences for different treatment protocols.</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Energy Distribution</h3>
              <p className="mt-4 text-gray-600">Optimized energy delivery patterns for maximum treatment effectiveness.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-12">
          <div className="rounded-2xl bg-primary-50 px-6 py-8 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900">Customize Your IPL Technology</h2>
            <p className="mt-4 text-lg text-gray-600">
              Ready to develop an IPL device with custom energy and wavelength specifications? Contact us to discuss your requirements.
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

export default CustomEnergyPage;
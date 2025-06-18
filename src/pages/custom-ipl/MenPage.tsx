import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { User, Zap, Shield, Target, Settings, ArrowRight } from 'lucide-react';

const MenPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">IPL for Men</span>
            <span className="block text-primary-600">Specialized Male Grooming Solutions</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500">
            Custom-designed IPL devices specifically optimized for male hair removal and skincare needs.
          </p>
        </div>

        {/* Key Features */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Male-Specific Features</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Zap className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Enhanced Power</h3>
              </div>
              <p className="mt-4 text-gray-600">Optimized energy levels for coarse male body hair treatment.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Target className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Targeted Areas</h3>
              </div>
              <p className="mt-4 text-gray-600">Specialized treatment heads for male-specific body areas.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Shield className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Comfort Features</h3>
              </div>
              <p className="mt-4 text-gray-600">Enhanced cooling system for comfortable treatment of larger areas.</p>
            </div>
          </div>
        </div>

        {/* Treatment Areas */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Treatment Areas</h2>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <User className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Body Areas</h3>
                <p className="mt-2 text-gray-600">Effective treatment for chest, back, shoulders, and other male-specific areas.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Settings className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Customized Settings</h3>
                <p className="mt-2 text-gray-600">Adjustable parameters optimized for male hair and skin characteristics.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Technical Features</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Power Specifications</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Enhanced energy output</li>
                <li>• Multiple power levels</li>
                <li>• Rapid pulse technology</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Safety Features</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Skin tone sensor</li>
                <li>• Advanced cooling system</li>
                <li>• Comfort optimization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Design Features */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Design Elements</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Ergonomic Design</h3>
              <p className="mt-4 text-gray-600">Comfortable grip and easy handling for extended treatment sessions.</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Masculine Aesthetics</h3>
              <p className="mt-4 text-gray-600">Professional design appealing to male users with robust construction.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-12">
          <div className="rounded-2xl bg-primary-50 px-6 py-8 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900">Develop Your Men's IPL Device</h2>
            <p className="mt-4 text-lg text-gray-600">
              Ready to create an IPL device specifically for male users? Contact us to discuss your requirements.
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

export default MenPage;
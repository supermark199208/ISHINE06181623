import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { Scan, ShieldCheck, Zap, Settings2, Smartphone, ArrowRight } from 'lucide-react';

const SkinSensorPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Smart Skin Tone Sensors</span>
            <span className="block text-primary-600">Intelligent Safety Technology</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500">
            Advanced skin tone detection technology for safe and personalized IPL treatments.
          </p>
        </div>

        {/* Key Features */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Smart Sensor Features</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Scan className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Real-time Detection</h3>
              </div>
              <p className="mt-4 text-gray-600">Instant skin tone analysis for safe treatment parameters.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <ShieldCheck className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Safety Lock</h3>
              </div>
              <p className="mt-4 text-gray-600">Automatic treatment prevention for unsuitable skin tones.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Settings2 className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Auto-Adjustment</h3>
              </div>
              <p className="mt-4 text-gray-600">Intelligent energy level optimization based on skin tone.</p>
            </div>
          </div>
        </div>

        {/* Technology Details */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Sensor Technology</h2>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Advanced Sensors</h3>
                <p className="mt-2 text-gray-600">High-precision optical sensors for accurate skin tone measurement.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Smartphone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Smart Integration</h3>
                <p className="mt-2 text-gray-600">Connected features for treatment tracking and personalization.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Technical Features</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Sensor Specifications</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Multi-spectral analysis</li>
                <li>• Fitzpatrick scale detection</li>
                <li>• Millisecond response time</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Safety Features</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Automatic safety shutdown</li>
                <li>• Energy level optimization</li>
                <li>• Treatment history tracking</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Smart Features */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Smart Capabilities</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Personalization</h3>
              <p className="mt-4 text-gray-600">Customized treatment recommendations based on individual skin characteristics.</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Data Analysis</h3>
              <p className="mt-4 text-gray-600">Advanced algorithms for optimal treatment parameter selection.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-12">
          <div className="rounded-2xl bg-primary-50 px-6 py-8 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900">Implement Smart Skin Detection</h2>
            <p className="mt-4 text-lg text-gray-600">
              Ready to enhance your IPL device with smart skin tone sensors? Contact us to discuss your requirements.
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

export default SkinSensorPage;
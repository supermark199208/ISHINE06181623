import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { Snowflake, ThermometerSnowflake, Shield, Heart, Zap, ArrowRight } from 'lucide-react';

const CoolingPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Pain-Free Ice Cooling</span>
            <span className="block text-primary-600">Advanced Comfort Technology</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500">
            Experience the next generation of comfortable IPL treatments with our innovative ice-cooling technology.
          </p>
        </div>

        {/* Key Features */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Cooling Technology Benefits</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Snowflake className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Ice-Cool Comfort</h3>
              </div>
              <p className="mt-4 text-gray-600">Advanced cooling system maintains optimal skin temperature for comfortable treatments.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Shield className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Skin Protection</h3>
              </div>
              <p className="mt-4 text-gray-600">Temperature-controlled operation prevents skin irritation and ensures safety.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Heart className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Enhanced Experience</h3>
              </div>
              <p className="mt-4 text-gray-600">Painless treatment experience with maximum comfort for users.</p>
            </div>
          </div>
        </div>

        {/* Technology Details */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Cooling System Features</h2>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <ThermometerSnowflake className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Temperature Control</h3>
                <p className="mt-2 text-gray-600">Precise temperature monitoring and adjustment for optimal treatment conditions.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Energy Balance</h3>
                <p className="mt-2 text-gray-600">Perfect balance between cooling effect and treatment efficiency.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Technical Details</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Cooling System</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Contact cooling technology</li>
                <li>• Temperature range: 0-5°C</li>
                <li>• Rapid cooling response</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Safety Features</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Temperature sensors</li>
                <li>• Automatic shutdown protection</li>
                <li>• Real-time monitoring</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Customization Options */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Customization Options</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Cooling Levels</h3>
              <p className="mt-4 text-gray-600">Adjustable cooling intensity to match different skin sensitivities and treatment areas.</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Integration Options</h3>
              <p className="mt-4 text-gray-600">Compatible with various IPL device designs and configurations.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-12">
          <div className="rounded-2xl bg-primary-50 px-6 py-8 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900">Develop Your Cooling IPL Device</h2>
            <p className="mt-4 text-lg text-gray-600">
              Ready to create a pain-free IPL device with advanced cooling technology? Contact us to discuss your requirements.
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

export default CoolingPage;
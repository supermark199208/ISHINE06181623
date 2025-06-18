import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { Shield, Paintbrush, Sparkles, Box, Ruler, Wrench } from 'lucide-react';

const HousingEnclosuresPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Housing & Enclosures</span>
            <span className="block text-primary-600">Premium Device Aesthetics</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500">
            Expertly designed and manufactured housings that combine aesthetics with functionality for IPL devices.
          </p>
        </div>

        {/* Key Features */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Design Features</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Shield className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Durability</h3>
              </div>
              <p className="mt-4 text-gray-600">Impact-resistant materials and robust construction.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Paintbrush className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Aesthetics</h3>
              </div>
              <p className="mt-4 text-gray-600">Modern design with premium finish options.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Sparkles className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Premium Finish</h3>
              </div>
              <p className="mt-4 text-gray-600">Multiple surface treatments and color options.</p>
            </div>
          </div>
        </div>

        {/* Material Options */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Material Options</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Premium Plastics</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• High-grade ABS</li>
                <li>• PC materials</li>
                <li>• UV-resistant</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Metal Accents</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Aluminum details</li>
                <li>• Chrome finishes</li>
                <li>• Metallic coatings</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Design Process */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Design Process</h2>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Box className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Concept Development</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• 3D modeling</li>
                  <li>• Prototype creation</li>
                  <li>• Design iterations</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Ruler className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Engineering</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Thermal analysis</li>
                  <li>• Structural testing</li>
                  <li>• Assembly optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Customization Options */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Customization Options</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="flex items-center gap-4">
                <Paintbrush className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Surface Finishes</h3>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Matte finish</li>
                <li>• Glossy coating</li>
                <li>• Metallic effects</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="flex items-center gap-4">
                <Wrench className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Custom Features</h3>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Ergonomic grips</li>
                <li>• Cooling vents</li>
                <li>• Brand elements</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quality Metrics */}
        <div className="py-12">
          <div className="rounded-2xl bg-primary-50 px-6 py-8 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900">Quality Standards</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">IP54</div>
                <div className="mt-2 text-sm text-gray-600">Protection Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">100%</div>
                <div className="mt-2 text-sm text-gray-600">Drop Test Pass Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">UV80</div>
                <div className="mt-2 text-sm text-gray-600">UV Protection</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default HousingEnclosuresPage;
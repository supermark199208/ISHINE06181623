import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { Package, Palette, Box, ShieldCheck, Truck, ArrowRight } from 'lucide-react';

const PackagingPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Premium Packaging Design</span>
            <span className="block text-primary-600">Elevate Your Brand Presentation</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500">
            Create stunning, premium packaging solutions that enhance your brand value and provide superior product protection.
          </p>
        </div>

        {/* Key Features */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Packaging Solutions</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Package className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Custom Design</h3>
              </div>
              <p className="mt-4 text-gray-600">Tailored packaging designs that reflect your brand identity and market positioning.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <ShieldCheck className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Protection</h3>
              </div>
              <p className="mt-4 text-gray-600">Superior product protection during storage and transportation.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Palette className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Premium Materials</h3>
              </div>
              <p className="mt-4 text-gray-600">High-quality materials and finishes for luxury market positioning.</p>
            </div>
          </div>
        </div>

        {/* Design Process */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Design Process</h2>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold">Concept Development</h3>
                <p className="mt-2 text-gray-600">Creating unique designs aligned with your brand guidelines and market requirements.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold">Material Selection</h3>
                <p className="mt-2 text-gray-600">Choosing optimal materials for durability, aesthetics, and sustainability.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold">Prototype Testing</h3>
                <p className="mt-2 text-gray-600">Rigorous testing for protection, durability, and user experience.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Packaging Options */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Available Options</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <Box className="h-8 w-8 text-primary-600" />
              <h3 className="mt-4 text-xl font-semibold">Box Types</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Premium rigid boxes</li>
                <li>• Magnetic closure boxes</li>
                <li>• Custom-shaped packaging</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <Truck className="h-8 w-8 text-primary-600" />
              <h3 className="mt-4 text-xl font-semibold">Shipping Solutions</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Protective inner packaging</li>
                <li>• Transit-safe designs</li>
                <li>• Eco-friendly options</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Material Options */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Premium Materials</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Exterior Materials</h3>
              <p className="mt-4 text-gray-600">Premium papers, soft-touch laminates, metallic finishes, and luxury coatings.</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Interior Materials</h3>
              <p className="mt-4 text-gray-600">Custom foam inserts, velvet lining, and protective cushioning materials.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-12">
          <div className="rounded-2xl bg-primary-50 px-6 py-8 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900">Create Your Premium Packaging</h2>
            <p className="mt-4 text-lg text-gray-600">
              Ready to develop premium packaging for your IPL device? Contact us to discuss your requirements.
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

export default PackagingPage;
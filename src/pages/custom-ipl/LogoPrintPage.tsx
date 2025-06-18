import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { Printer, Palette, Image, Stamp, Layers, ArrowRight } from 'lucide-react';

const LogoPrintPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Branded Logo Printing</span>
            <span className="block text-primary-600">Your Brand Identity</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500">
            Customize your IPL devices with high-quality logo printing services that reflect your brand's identity and values.
          </p>
        </div>

        {/* Printing Services */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Printing Options</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Printer className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">UV Printing</h3>
              </div>
              <p className="mt-4 text-gray-600">High-resolution UV printing for durability and vibrant colors.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Stamp className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Laser Engraving</h3>
              </div>
              <p className="mt-4 text-gray-600">Permanent and precise logo engraving for premium appearance.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Layers className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Surface Treatments</h3>
              </div>
              <p className="mt-4 text-gray-600">Various surface finishing options to enhance logo appearance.</p>
            </div>
          </div>
        </div>

        {/* Design Process */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Logo Implementation Process</h2>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold">Design Consultation</h3>
                <p className="mt-2 text-gray-600">Review your brand guidelines and logo requirements for optimal placement.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold">Sample Production</h3>
                <p className="mt-2 text-gray-600">Create test prints to ensure perfect color matching and quality.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold">Quality Control</h3>
                <p className="mt-2 text-gray-600">Rigorous testing for durability and appearance consistency.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Technical Details</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <Image className="h-8 w-8 text-primary-600" />
              <h3 className="mt-4 text-xl font-semibold">Logo Requirements</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Vector format (AI, EPS, SVG)</li>
                <li>• High resolution (300 DPI minimum)</li>
                <li>• Color specifications (Pantone)</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <Palette className="h-8 w-8 text-primary-600" />
              <h3 className="mt-4 text-xl font-semibold">Printing Specifications</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Multiple color options</li>
                <li>• Various finish types</li>
                <li>• Durability testing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Quality Assurance</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Durability Tests</h3>
              <p className="mt-4 text-gray-600">All printed logos undergo extensive durability testing including scratch resistance, UV exposure, and chemical resistance.</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Quality Standards</h3>
              <p className="mt-4 text-gray-600">Our printing processes meet international quality standards for consistency and durability.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-12">
          <div className="rounded-2xl bg-primary-50 px-6 py-8 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900">Start Your Branding Project</h2>
            <p className="mt-4 text-lg text-gray-600">
              Ready to customize your IPL devices with your brand logo? Contact us to discuss your requirements.
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

export default LogoPrintPage;
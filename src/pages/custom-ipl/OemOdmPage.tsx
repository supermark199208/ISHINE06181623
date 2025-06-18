import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { ArrowRight, Check, Star, ShieldCheck, Truck, Package, Award } from 'lucide-react';

const OemOdmPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">OEM/ODM for Your Brand</span>
            <span className="block text-primary-600">Custom IPL Solutions</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500">
            Partner with iShine to create your unique IPL hair removal device. We work with brands, product managers, and sourcing specialists to deliver comprehensive OEM/ODM solutions.
          </p>
        </div>

        {/* Key Features */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Our OEM/ODM Service</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <ShieldCheck className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Quality Assurance</h3>
              </div>
              <p className="mt-4 text-gray-600">Rigorous testing and quality control processes ensure your products meet international standards.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Package className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Custom Design</h3>
              </div>
              <p className="mt-4 text-gray-600">Tailored solutions from concept to production, matching your brand identity and market requirements.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Award className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Expert Support</h3>
              </div>
              <p className="mt-4 text-gray-600">Professional guidance throughout the entire development process, from design to market launch.</p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Our OEM/ODM Process</h2>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold">Initial Consultation</h3>
                <p className="mt-2 text-gray-600">We discuss your requirements, target market, and brand positioning to understand your needs.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold">Design & Development</h3>
                <p className="mt-2 text-gray-600">Our team creates custom designs and prototypes based on your specifications.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold">Manufacturing</h3>
                <p className="mt-2 text-gray-600">Production begins with strict quality control measures throughout the process.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold">Quality Assurance</h3>
                <p className="mt-2 text-gray-600">Comprehensive testing and certification to ensure product safety and reliability.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-12">
          <div className="rounded-2xl bg-primary-50 px-6 py-8 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900">Start Your OEM/ODM Project</h2>
            <p className="mt-4 text-lg text-gray-600">
              Ready to create your custom IPL device? Contact us today to discuss your requirements and get started.
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

export default OemOdmPage;
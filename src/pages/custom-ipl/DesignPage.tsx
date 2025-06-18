import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { Paintbrush, Lightbulb, Ruler, Palette, Shapes, Settings, ArrowRight } from 'lucide-react';

const DesignPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Unique Device Design</span>
            <span className="block text-primary-600">Stand Out in the Market</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500">
            Create distinctive IPL devices that capture attention and deliver exceptional user experience. Our design team combines aesthetics with functionality.
          </p>
        </div>

        {/* Design Services */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Design Services</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Paintbrush className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Industrial Design</h3>
              </div>
              <p className="mt-4 text-gray-600">Professional industrial design focusing on aesthetics, ergonomics, and user experience.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Ruler className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">3D Modeling</h3>
              </div>
              <p className="mt-4 text-gray-600">Precise 3D modeling and prototyping to visualize and refine your product design.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Settings className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Engineering Design</h3>
              </div>
              <p className="mt-4 text-gray-600">Technical design optimization for performance, reliability, and manufacturability.</p>
            </div>
          </div>
        </div>

        {/* Design Process */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Design Process</h2>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold">Research & Concept</h3>
                <p className="mt-2 text-gray-600">Market analysis and concept development based on your requirements and target audience.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold">Design Development</h3>
                <p className="mt-2 text-gray-600">Iterative design process with regular feedback and refinements.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold">Prototyping</h3>
                <p className="mt-2 text-gray-600">Creating functional prototypes for testing and validation.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold">Final Design</h3>
                <p className="mt-2 text-gray-600">Detailed design documentation and specifications for manufacturing.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Design Features */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Design Features</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <Lightbulb className="h-8 w-8 text-primary-600" />
              <h3 className="mt-4 text-xl font-semibold">Innovative Aesthetics</h3>
              <p className="mt-2 text-gray-600">Modern, eye-catching designs that align with current market trends and user preferences.</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <Shapes className="h-8 w-8 text-primary-600" />
              <h3 className="mt-4 text-xl font-semibold">Ergonomic Design</h3>
              <p className="mt-2 text-gray-600">Comfortable handling and intuitive operation for enhanced user experience.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-12">
          <div className="rounded-2xl bg-primary-50 px-6 py-8 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900">Start Your Design Project</h2>
            <p className="mt-4 text-lg text-gray-600">
              Ready to create a unique IPL device design? Contact us to discuss your vision and requirements.
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

export default DesignPage;
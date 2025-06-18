import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { Factory, Settings, Package, Truck, CheckCircle2, ArrowRight } from 'lucide-react';

const OneStepPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">All-in-One Manufacturing</span>
            <span className="block text-primary-600">Complete IPL Device Solutions</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500">
            Comprehensive manufacturing solutions from concept to delivery, all under one roof.
          </p>
        </div>

        {/* Service Features */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">One-Stop Services</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Factory className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Manufacturing</h3>
              </div>
              <p className="mt-4 text-gray-600">State-of-the-art production facilities for high-quality IPL devices.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Settings className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Engineering</h3>
              </div>
              <p className="mt-4 text-gray-600">Expert engineering team for product design and optimization.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Package className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Packaging</h3>
              </div>
              <p className="mt-4 text-gray-600">Custom packaging solutions that enhance your brand presence.</p>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Manufacturing Process</h2>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <span className="text-lg font-semibold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Design & Development</h3>
                <p className="mt-2 text-gray-600">Product design, prototyping, and engineering optimization.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <span className="text-lg font-semibold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Production</h3>
                <p className="mt-2 text-gray-600">Efficient manufacturing with strict quality control.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <span className="text-lg font-semibold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Testing & Certification</h3>
                <p className="mt-2 text-gray-600">Comprehensive testing and regulatory compliance.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <span className="text-lg font-semibold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Packaging & Shipping</h3>
                <p className="mt-2 text-gray-600">Custom packaging and global logistics solutions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Control */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Quality Assurance</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Quality Standards</h3>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• ISO certified facilities</li>
                <li>• Strict quality control processes</li>
                <li>• Regular quality audits</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="flex items-center gap-4">
                <Truck className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Logistics</h3>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Global shipping network</li>
                <li>• Efficient delivery systems</li>
                <li>• Real-time tracking</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Manufacturing Stats */}
        <div className="py-12">
          <div className="rounded-2xl bg-primary-50 px-6 py-8 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900">Manufacturing Excellence</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">50K+</div>
                <div className="mt-2 text-sm text-gray-600">Monthly Production Capacity</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">99.9%</div>
                <div className="mt-2 text-sm text-gray-600">Quality Pass Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">100%</div>
                <div className="mt-2 text-sm text-gray-600">In-House Production</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-12">
          <div className="rounded-2xl bg-primary-600 px-6 py-8 md:px-8 lg:px-12 text-white">
            <h2 className="text-3xl font-bold">Start Your Manufacturing Journey</h2>
            <p className="mt-4 text-lg opacity-90">
              Ready to bring your IPL device concept to life? Let's discuss your manufacturing needs.
            </p>
            <button className="mt-6 inline-flex items-center rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Contact Us Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default OneStepPage;
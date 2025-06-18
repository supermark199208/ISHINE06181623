import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { HeadphonesIcon, Clock, Tool, Globe, Shield, ArrowRight } from 'lucide-react';

const AfterSalesPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Ongoing After-Sales Support</span>
            <span className="block text-primary-600">Comprehensive Care Solutions</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500">
            Reliable and professional after-sales support to ensure your IPL devices maintain peak performance.
          </p>
        </div>

        {/* Key Services */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Support Services</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <HeadphonesIcon className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Technical Support</h3>
              </div>
              <p className="mt-4 text-gray-600">24/7 technical assistance from our experienced support team.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Tool className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Maintenance Service</h3>
              </div>
              <p className="mt-4 text-gray-600">Regular maintenance and repair services to ensure device longevity.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Shield className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Warranty Coverage</h3>
              </div>
              <p className="mt-4 text-gray-600">Comprehensive warranty programs with flexible coverage options.</p>
            </div>
          </div>
        </div>

        {/* Support Features */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Support Features</h2>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Quick Response Time</h3>
                <p className="mt-2 text-gray-600">Rapid response to support requests with dedicated service teams.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Globe className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Global Coverage</h3>
                <p className="mt-2 text-gray-600">Worldwide support network for international clients.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Plans */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Service Plans</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Standard Support</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Basic technical support</li>
                <li>• Regular maintenance checks</li>
                <li>• Standard warranty coverage</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Premium Support</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Priority technical support</li>
                <li>• Extended warranty coverage</li>
                <li>• Preventive maintenance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Additional Services</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Training Programs</h3>
              <p className="mt-4 text-gray-600">Comprehensive training for technical staff and end-users.</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Documentation</h3>
              <p className="mt-4 text-gray-600">Detailed technical documentation and user guides in multiple languages.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-12">
          <div className="rounded-2xl bg-primary-50 px-6 py-8 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900">Get Support Now</h2>
            <p className="mt-4 text-lg text-gray-600">
              Need technical support or want to learn more about our after-sales services? Contact our support team.
            </p>
            <button className="mt-6 inline-flex items-center rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
              Contact Support
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default AfterSalesPage;
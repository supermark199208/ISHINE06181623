import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { Globe, Truck, Package, Clock, Shield, Map } from 'lucide-react';

const GlobalShippingPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Global Shipping Solutions</span>
            <span className="block text-primary-600">Worldwide Delivery Network</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500">
            Reliable and efficient global shipping solutions for your IPL devices.
          </p>
        </div>

        {/* Shipping Services */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Shipping Services</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Globe className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Global Coverage</h3>
              </div>
              <p className="mt-4 text-gray-600">Comprehensive shipping network covering major markets worldwide.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Truck className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Express Delivery</h3>
              </div>
              <p className="mt-4 text-gray-600">Fast and reliable delivery options to meet your timeline.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Package className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Custom Logistics</h3>
              </div>
              <p className="mt-4 text-gray-600">Tailored shipping solutions for your specific requirements.</p>
            </div>
          </div>
        </div>

        {/* Shipping Features */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Shipping Features</h2>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Real-Time Tracking</h3>
                <p className="mt-2 text-gray-600">Monitor your shipments 24/7 with our advanced tracking system.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Secure Transport</h3>
                <p className="mt-2 text-gray-600">Enhanced security measures to protect your valuable shipments.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Shipping Options */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Shipping Options</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Standard Shipping</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Cost-effective solution</li>
                <li>• Regular tracking updates</li>
                <li>• Reliable delivery times</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Express Shipping</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Priority handling</li>
                <li>• Faster transit times</li>
                <li>• Premium tracking service</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Global Network */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Global Network</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="flex items-center gap-4">
                <Map className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Coverage Areas</h3>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• North America</li>
                <li>• Europe</li>
                <li>• Asia Pacific</li>
                <li>• Middle East</li>
                <li>• South America</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="flex items-center gap-4">
                <Globe className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Service Network</h3>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Multiple carrier partnerships</li>
                <li>• Local logistics support</li>
                <li>• International customs expertise</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Shipping Stats */}
        <div className="py-12">
          <div className="rounded-2xl bg-primary-50 px-6 py-8 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900">Shipping Excellence</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">150+</div>
                <div className="mt-2 text-sm text-gray-600">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">99%</div>
                <div className="mt-2 text-sm text-gray-600">On-Time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">24/7</div>
                <div className="mt-2 text-sm text-gray-600">Tracking Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default GlobalShippingPage;
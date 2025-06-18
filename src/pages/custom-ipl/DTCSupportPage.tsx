import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { ShoppingBag, Truck, Package, Globe, BarChart3, Users } from 'lucide-react';

const DTCSupportPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">DTC Brand Launch Support</span>
            <span className="block text-primary-600">Your Direct-to-Consumer Success Partner</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500">
            Comprehensive support for launching and scaling your Direct-to-Consumer IPL beauty brand.
          </p>
        </div>

        {/* Key Services */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Launch Support Services</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <ShoppingBag className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Brand Development</h3>
              </div>
              <p className="mt-4 text-gray-600">Custom product development aligned with your brand identity and market positioning.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Package className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Product Strategy</h3>
              </div>
              <p className="mt-4 text-gray-600">Strategic product planning and positioning for DTC success.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Globe className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Market Entry</h3>
              </div>
              <p className="mt-4 text-gray-600">Guidance on market entry strategies and channel optimization.</p>
            </div>
          </div>
        </div>

        {/* Support Features */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">DTC Success Features</h2>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <BarChart3 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Growth Analytics</h3>
                <p className="mt-2 text-gray-600">Data-driven insights and analytics support for optimizing your DTC strategy.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Customer Experience</h3>
                <p className="mt-2 text-gray-600">Support in creating seamless customer experiences across all touchpoints.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Launch Package */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Launch Package Components</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Brand Launch Kit</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Custom product development</li>
                <li>• Brand-aligned packaging</li>
                <li>• Marketing materials</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Operational Support</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Inventory management</li>
                <li>• Fulfillment solutions</li>
                <li>• Customer service setup</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Logistics */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">DTC Logistics Solutions</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="flex items-center gap-4">
                <Truck className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Fulfillment Network</h3>
              </div>
              <p className="mt-4 text-gray-600">Global fulfillment solutions optimized for DTC operations.</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="flex items-center gap-4">
                <Package className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Inventory Management</h3>
              </div>
              <p className="mt-4 text-gray-600">Smart inventory solutions to maintain optimal stock levels.</p>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="py-12">
          <div className="rounded-2xl bg-primary-50 px-6 py-8 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900">DTC Success Metrics</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">30+</div>
                <div className="mt-2 text-sm text-gray-600">Successful DTC Launches</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">95%</div>
                <div className="mt-2 text-sm text-gray-600">Client Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">24/7</div>
                <div className="mt-2 text-sm text-gray-600">Launch Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default DTCSupportPage;
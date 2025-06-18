import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { Factory, TrendingUp, CheckCircle2, BarChart3, Truck, Settings } from 'lucide-react';

const MassProductionPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Scalable Mass Production</span>
            <span className="block text-primary-600">Efficient Manufacturing Solutions</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500">
            State-of-the-art manufacturing facilities and processes to meet your high-volume IPL device production needs.
          </p>
        </div>

        {/* Production Capabilities */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Production Capabilities</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Factory className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Advanced Facilities</h3>
              </div>
              <p className="mt-4 text-gray-600">Modern production lines equipped with the latest manufacturing technology.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <TrendingUp className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">High Volume Capacity</h3>
              </div>
              <p className="mt-4 text-gray-600">Capable of producing thousands of units per month with consistent quality.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Settings className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Flexible Production</h3>
              </div>
              <p className="mt-4 text-gray-600">Adaptable manufacturing processes to accommodate different product specifications.</p>
            </div>
          </div>
        </div>

        {/* Quality Control */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Quality Assurance</h2>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Rigorous Testing</h3>
                <p className="mt-2 text-gray-600">Comprehensive quality control procedures at every production stage.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <BarChart3 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Performance Monitoring</h3>
                <p className="mt-2 text-gray-600">Real-time production monitoring and performance tracking systems.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Production Process */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Production Process</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Assembly Line</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Automated component assembly</li>
                <li>• Precision calibration</li>
                <li>• Quality inspection points</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Testing Phase</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Functional testing</li>
                <li>• Safety certification</li>
                <li>• Performance validation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Logistics */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Logistics & Delivery</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="flex items-center gap-4">
                <Truck className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Global Distribution</h3>
              </div>
              <p className="mt-4 text-gray-600">Efficient worldwide shipping and logistics network for timely delivery.</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="flex items-center gap-4">
                <BarChart3 className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Inventory Management</h3>
              </div>
              <p className="mt-4 text-gray-600">Advanced inventory tracking and management systems.</p>
            </div>
          </div>
        </div>

        {/* Production Stats */}
        <div className="py-12">
          <div className="rounded-2xl bg-primary-50 px-6 py-8 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900">Production Capacity</h2>
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
                <div className="text-4xl font-bold text-primary-600">24/7</div>
                <div className="mt-2 text-sm text-gray-600">Production Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default MassProductionPage;
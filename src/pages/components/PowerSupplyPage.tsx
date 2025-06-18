import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { Zap, Battery, Shield, Gauge, Plug, Settings } from 'lucide-react';

const PowerSupplyPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Power Supply Units</span>
            <span className="block text-primary-600">Reliable Energy Solutions</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500">
            High-performance power supply units engineered for stable and efficient IPL device operation.
          </p>
        </div>

        {/* Key Features */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Core Features</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Zap className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">High Efficiency</h3>
              </div>
              <p className="mt-4 text-gray-600">Advanced power conversion with minimal energy loss.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Battery className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Stable Output</h3>
              </div>
              <p className="mt-4 text-gray-600">Consistent power delivery for reliable operation.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Shield className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Safety Features</h3>
              </div>
              <p className="mt-4 text-gray-600">Multiple protection mechanisms for safe operation.</p>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Technical Specifications</h2>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Gauge className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Performance Metrics</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Input: 100-240V AC</li>
                  <li>• Efficiency: >90%</li>
                  <li>• Power Factor: >0.95</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Protection Features</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Over-voltage protection</li>
                  <li>• Short-circuit protection</li>
                  <li>• Thermal protection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Available Models */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Available Models</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Standard Series</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• 30W - 100W options</li>
                <li>• Universal input voltage</li>
                <li>• Compact design</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Professional Series</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• 100W - 300W options</li>
                <li>• Enhanced efficiency</li>
                <li>• Advanced cooling</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Applications</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="flex items-center gap-4">
                <Plug className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Device Integration</h3>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Home IPL devices</li>
                <li>• Professional systems</li>
                <li>• Custom solutions</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="flex items-center gap-4">
                <Settings className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Customization</h3>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Custom output specs</li>
                <li>• Special form factors</li>
                <li>• Unique features</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="py-12">
          <div className="rounded-2xl bg-primary-50 px-6 py-8 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900">Performance Metrics</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">99.9%</div>
                <div className="mt-2 text-sm text-gray-600">Reliability Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">92%</div>
                <div className="mt-2 text-sm text-gray-600">Energy Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">50k+</div>
                <div className="mt-2 text-sm text-gray-600">Hours MTBF</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default PowerSupplyPage;
import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { Cpu, Wifi, Shield, Settings, Zap, Smartphone } from 'lucide-react';

const CircuitBoardsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Control Circuit Boards</span>
            <span className="block text-primary-600">Intelligent IPL Control Systems</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500">
            Advanced control circuit boards designed for precise IPL device operation and smart features.
          </p>
        </div>

        {/* Key Features */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Board Features</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Cpu className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Smart Control</h3>
              </div>
              <p className="mt-4 text-gray-600">Intelligent processing for precise energy control and timing.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Wifi className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Wireless Capability</h3>
              </div>
              <p className="mt-4 text-gray-600">Built-in wireless connectivity for smart device integration.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Shield className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Safety Systems</h3>
              </div>
              <p className="mt-4 text-gray-600">Multiple safety mechanisms and monitoring systems.</p>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Technical Specifications</h2>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Settings className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Control Features</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Precise energy control</li>
                  <li>• Multiple operation modes</li>
                  <li>• Advanced timing system</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Power Management</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Efficient power distribution</li>
                  <li>• Thermal protection</li>
                  <li>• Voltage monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Board Options */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Available Models</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Standard Control Board</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Basic IPL control</li>
                <li>• Safety features</li>
                <li>• Energy management</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Smart Control Board</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• WiFi connectivity</li>
                <li>• App integration</li>
                <li>• Advanced features</li>
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
                <Settings className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Device Integration</h3>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Home-use devices</li>
                <li>• Professional systems</li>
                <li>• Custom solutions</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="flex items-center gap-4">
                <Smartphone className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Smart Features</h3>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Mobile app control</li>
                <li>• Treatment tracking</li>
                <li>• Usage analytics</li>
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
                <div className="text-4xl font-bold text-primary-600">±1%</div>
                <div className="mt-2 text-sm text-gray-600">Energy Precision</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">10ms</div>
                <div className="mt-2 text-sm text-gray-600">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default CircuitBoardsPage;
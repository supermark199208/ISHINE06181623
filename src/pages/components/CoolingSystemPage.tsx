import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { Snowflake, Wind, Thermometer, Shield, Settings, BarChart3 } from 'lucide-react';

const CoolingSystemPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Cooling System Components</span>
            <span className="block text-primary-600">Advanced Thermal Management</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500">
            State-of-the-art cooling solutions for optimal IPL device performance and user comfort.
          </p>
        </div>

        {/* Key Features */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">System Features</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Snowflake className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Rapid Cooling</h3>
              </div>
              <p className="mt-4 text-gray-600">Quick temperature reduction for continuous operation.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Wind className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Efficient Airflow</h3>
              </div>
              <p className="mt-4 text-gray-600">Optimized air circulation for consistent cooling.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Shield className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Safety Design</h3>
              </div>
              <p className="mt-4 text-gray-600">Built-in protection mechanisms for reliable operation.</p>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Technical Specifications</h2>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Thermometer className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Cooling Performance</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Temperature range: 0-5°C</li>
                  <li>• Cooling speed: 2-3°C/second</li>
                  <li>• Continuous operation capable</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Settings className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">System Parameters</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Power consumption: 15-30W</li>
                  <li>• Noise level: <35dB</li>
                  <li>• Size options available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Cooling Options */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Available Solutions</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Contact Cooling</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Direct skin contact cooling</li>
                <li>• Sapphire crystal technology</li>
                <li>• Enhanced comfort</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Air Cooling</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Advanced ventilation system</li>
                <li>• Quiet operation</li>
                <li>• Efficient heat dissipation</li>
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
                <li>• Home-use IPL devices</li>
                <li>• Professional equipment</li>
                <li>• Custom solutions</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="flex items-center gap-4">
                <BarChart3 className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Performance Benefits</h3>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Enhanced treatment comfort</li>
                <li>• Improved device longevity</li>
                <li>• Consistent performance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="py-12">
          <div className="rounded-2xl bg-primary-50 px-6 py-8 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900">System Performance</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">5°C</div>
                <div className="mt-2 text-sm text-gray-600">Minimum Temperature</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">35dB</div>
                <div className="mt-2 text-sm text-gray-600">Max Noise Level</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">100%</div>
                <div className="mt-2 text-sm text-gray-600">Safety Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default CoolingSystemPage;
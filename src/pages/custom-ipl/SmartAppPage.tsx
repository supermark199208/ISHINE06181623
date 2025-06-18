import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { Smartphone, Wifi, BarChart, Bell, Calendar, Settings, ArrowRight } from 'lucide-react';

const SmartAppPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">App-Connected Devices</span>
            <span className="block text-primary-600">Smart IPL Solutions</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500">
            Transform your IPL device into a smart beauty solution with our custom app development and connectivity features.
          </p>
        </div>

        {/* App Features */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Smart App Features</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Smartphone className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">User-Friendly Interface</h3>
              </div>
              <p className="mt-4 text-gray-600">Intuitive app design with easy navigation and personalized user experience.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <BarChart className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Progress Tracking</h3>
              </div>
              <p className="mt-4 text-gray-600">Monitor treatment progress and results with detailed analytics and reports.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Calendar className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Treatment Schedule</h3>
              </div>
              <p className="mt-4 text-gray-600">Smart scheduling system with reminders for optimal treatment intervals.</p>
            </div>
          </div>
        </div>

        {/* Connectivity Features */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Smart Connectivity</h2>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Wifi className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Bluetooth Connection</h3>
                <p className="mt-2 text-gray-600">Stable and secure Bluetooth connectivity for seamless device control.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Settings className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Remote Control</h3>
                <p className="mt-2 text-gray-600">Adjust device settings and treatment parameters through the app.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Bell className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Smart Notifications</h3>
                <p className="mt-2 text-gray-600">Timely alerts for maintenance, updates, and treatment recommendations.</p>
              </div>
            </div>
          </div>
        </div>

        {/* App Customization */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">App Customization Options</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Branding Integration</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Custom app design and branding</li>
                <li>• Branded user interface elements</li>
                <li>• Personalized content and messaging</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Feature Customization</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Custom treatment protocols</li>
                <li>• Specialized tracking metrics</li>
                <li>• Market-specific features</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-12">
          <div className="rounded-2xl bg-primary-50 px-6 py-8 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900">Create Your Smart IPL Solution</h2>
            <p className="mt-4 text-lg text-gray-600">
              Ready to develop a smart app-connected IPL device? Contact us to discuss your requirements.
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

export default SmartAppPage;
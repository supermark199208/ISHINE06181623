import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { Rocket, Package, Coins, Users, LineChart, ShieldCheck } from 'lucide-react';

const StartupsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Low MOQ for Startups</span>
            <span className="block text-primary-600">Start Small, Grow Big</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500">
            Flexible minimum order quantities designed specifically for startups and emerging brands in the IPL market.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Startup Benefits</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Package className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Low MOQ Orders</h3>
              </div>
              <p className="mt-4 text-gray-600">Start with smaller quantities to test market response and minimize initial investment.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Coins className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Flexible Payment</h3>
              </div>
              <p className="mt-4 text-gray-600">Startup-friendly payment terms and financing options available.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Rocket className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Growth Support</h3>
              </div>
              <p className="mt-4 text-gray-600">Scalable production capacity to support your business growth.</p>
            </div>
          </div>
        </div>

        {/* Startup Package */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Startup Package Features</h2>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Dedicated Support Team</h3>
                <p className="mt-2 text-gray-600">Personal guidance throughout your product development journey.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <LineChart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Market Analysis</h3>
                <p className="mt-2 text-gray-600">Expert insights on market trends and opportunities.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Options */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Order Options</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Trial Order</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Minimum quantity: 100 units</li>
                <li>• Quick turnaround time</li>
                <li>• Full quality assurance</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Growth Order</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Flexible quantity options</li>
                <li>• Volume discounts available</li>
                <li>• Priority production</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Quality Guarantee</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="flex items-center gap-4">
                <ShieldCheck className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Same Quality Standards</h3>
              </div>
              <p className="mt-4 text-gray-600">All orders, regardless of size, undergo the same rigorous quality control process.</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="flex items-center gap-4">
                <Users className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Expert Support</h3>
              </div>
              <p className="mt-4 text-gray-600">Access to our technical team for product optimization and support.</p>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="py-12">
          <div className="rounded-2xl bg-primary-50 px-6 py-8 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6">
                <blockquote className="text-gray-600">
                  "The low MOQ option allowed us to launch our brand with minimal risk. Now we're scaling up production with confidence."
                </blockquote>
                <p className="mt-4 font-semibold">- Emerging Beauty Brand</p>
              </div>
              <div className="rounded-lg bg-white p-6">
                <blockquote className="text-gray-600">
                  "Starting small helped us test different markets before expanding. The flexible ordering system was perfect for our growth strategy."
                </blockquote>
                <p className="mt-4 font-semibold">- DTC Beauty Startup</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default StartupsPage;
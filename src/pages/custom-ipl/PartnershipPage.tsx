import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { Handshake, Shield, Users, Target, BarChart3, Globe } from 'lucide-react';

const PartnershipPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Trusted B2B Partnerships</span>
            <span className="block text-primary-600">Building Long-Term Success Together</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500">
            Partner with iShine for reliable, long-term B2B collaboration in IPL device manufacturing and development.
          </p>
        </div>

        {/* Partnership Benefits */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Partnership Benefits</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Handshake className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Strategic Alliance</h3>
              </div>
              <p className="mt-4 text-gray-600">Long-term partnership focused on mutual growth and success.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Shield className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Quality Assurance</h3>
              </div>
              <p className="mt-4 text-gray-600">Consistent high-quality products meeting international standards.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Target className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Custom Solutions</h3>
              </div>
              <p className="mt-4 text-gray-600">Tailored manufacturing solutions for your specific business needs.</p>
            </div>
          </div>
        </div>

        {/* Partnership Features */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Partnership Features</h2>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Dedicated Support Team</h3>
                <p className="mt-2 text-gray-600">Personal account management and technical support throughout our partnership.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Globe className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Global Reach</h3>
                <p className="mt-2 text-gray-600">International distribution network and market access.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Programs */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Partnership Programs</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Standard Partnership</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Regular order fulfillment</li>
                <li>• Technical support</li>
                <li>• Quality assurance</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Premium Partnership</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Priority production</li>
                <li>• Advanced R&D support</li>
                <li>• Market expansion assistance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Partner Success Stories</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <blockquote className="text-gray-600">
                "Our partnership with iShine has enabled us to expand our beauty device portfolio with innovative IPL solutions."
              </blockquote>
              <p className="mt-4 font-semibold">- Leading Beauty Brand</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <blockquote className="text-gray-600">
                "The dedicated support and consistent quality have made iShine our trusted manufacturing partner."
              </blockquote>
              <p className="mt-4 font-semibold">- Global Beauty Retailer</p>
            </div>
          </div>
        </div>

        {/* Partnership Metrics */}
        <div className="py-12">
          <div className="rounded-2xl bg-primary-50 px-6 py-8 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900">Partnership Success</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">50+</div>
                <div className="mt-2 text-sm text-gray-600">Global Partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">10+</div>
                <div className="mt-2 text-sm text-gray-600">Years Average Partnership</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">98%</div>
                <div className="mt-2 text-sm text-gray-600">Partner Retention Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default PartnershipPage;
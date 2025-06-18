import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { Shield, FileCheck, ClipboardCheck, Users, Clock, ArrowRight } from 'lucide-react';

const FDAClearedPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Earn Your Own FDA 510k</span>
            <span className="block text-primary-600">FDA Clearance Support Services</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500">
            Comprehensive support for obtaining FDA 510(k) clearance for your IPL devices.
          </p>
        </div>

        {/* Key Services */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">FDA Clearance Services</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Shield className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Regulatory Guidance</h3>
              </div>
              <p className="mt-4 text-gray-600">Expert guidance through FDA regulatory requirements and processes.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <FileCheck className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Documentation Support</h3>
              </div>
              <p className="mt-4 text-gray-600">Comprehensive documentation preparation and submission assistance.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <ClipboardCheck className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Testing Compliance</h3>
              </div>
              <p className="mt-4 text-gray-600">Complete testing services to meet FDA requirements.</p>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">FDA Clearance Process</h2>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <span className="text-lg font-semibold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Initial Assessment</h3>
                <p className="mt-2 text-gray-600">Evaluation of your device and regulatory requirements.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <span className="text-lg font-semibold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Documentation Preparation</h3>
                <p className="mt-2 text-gray-600">Comprehensive preparation of required documentation and testing reports.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <span className="text-lg font-semibold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Testing & Validation</h3>
                <p className="mt-2 text-gray-600">Conducting required tests and validating results.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <span className="text-lg font-semibold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Submission & Follow-up</h3>
                <p className="mt-2 text-gray-600">FDA submission and response management.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Support Features */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Support Features</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="flex items-center gap-4">
                <Users className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Expert Team</h3>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Regulatory specialists</li>
                <li>• Technical experts</li>
                <li>• Documentation professionals</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="flex items-center gap-4">
                <Clock className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Timeline Management</h3>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Efficient process management</li>
                <li>• Regular progress updates</li>
                <li>• Timeline optimization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Stats */}
        <div className="py-12">
          <div className="rounded-2xl bg-primary-50 px-6 py-8 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900">FDA Clearance Success</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">100+</div>
                <div className="mt-2 text-sm text-gray-600">Successful FDA Clearances</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">95%</div>
                <div className="mt-2 text-sm text-gray-600">First-Time Approval Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">4-6</div>
                <div className="mt-2 text-sm text-gray-600">Months Average Timeline</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-12">
          <div className="rounded-2xl bg-primary-600 px-6 py-8 md:px-8 lg:px-12 text-white">
            <h2 className="text-3xl font-bold">Start Your FDA Clearance Journey</h2>
            <p className="mt-4 text-lg opacity-90">
              Ready to obtain FDA clearance for your IPL device? Let our experts guide you through the process.
            </p>
            <button className="mt-6 inline-flex items-center rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default FDAClearedPage;
import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { ShieldCheck, Globe, FileCheck, Award, ClipboardCheck, ArrowRight } from 'lucide-react';

const CompliancePage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Global Safety Compliance</span>
            <span className="block text-primary-600">Certified Excellence</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500">
            Ensure your IPL devices meet international safety standards with our comprehensive compliance services.
          </p>
        </div>

        {/* Certification Types */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Global Certifications</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <ShieldCheck className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">CE Marking</h3>
              </div>
              <p className="mt-4 text-gray-600">European Union compliance for safety, health, and environmental protection standards.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Award className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">FDA Clearance</h3>
              </div>
              <p className="mt-4 text-gray-600">US Food and Drug Administration approval for medical device safety.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Globe className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">International Standards</h3>
              </div>
              <p className="mt-4 text-gray-600">Compliance with ISO, IEC, and other international safety standards.</p>
            </div>
          </div>
        </div>

        {/* Compliance Process */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Compliance Process</h2>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold">Assessment</h3>
                <p className="mt-2 text-gray-600">Comprehensive evaluation of device specifications and target markets.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold">Testing</h3>
                <p className="mt-2 text-gray-600">Rigorous testing according to required standards and regulations.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold">Documentation</h3>
                <p className="mt-2 text-gray-600">Complete technical documentation and compliance reports.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold">Certification</h3>
                <p className="mt-2 text-gray-600">Obtaining necessary certifications and approvals.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Standards Coverage */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Standards We Cover</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <FileCheck className="h-8 w-8 text-primary-600" />
              <h3 className="mt-4 text-xl font-semibold">Safety Standards</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• IEC 60601-1 Medical Electrical Equipment</li>
                <li>• IEC 60601-2-57 Light Source Safety</li>
                <li>• ISO 14971 Risk Management</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <ClipboardCheck className="h-8 w-8 text-primary-600" />
              <h3 className="mt-4 text-xl font-semibold">Quality Standards</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• ISO 13485 Quality Management</li>
                <li>• GMP Manufacturing Practices</li>
                <li>• Quality Control Systems</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-12">
          <div className="rounded-2xl bg-primary-50 px-6 py-8 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900">Ensure Global Compliance</h2>
            <p className="mt-4 text-lg text-gray-600">
              Ready to certify your IPL device for global markets? Contact us to discuss your compliance needs.
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

export default CompliancePage;
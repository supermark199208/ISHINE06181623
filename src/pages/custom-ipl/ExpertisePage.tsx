import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import { Lightbulb, GraduationCap, Users2, FileText, Brain, Target } from 'lucide-react';

const ExpertisePage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Expert Technical Guidance</span>
            <span className="block text-primary-600">Professional IPL Solutions</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500">
            Access our team of IPL technology experts for comprehensive guidance throughout your product development journey.
          </p>
        </div>

        {/* Expertise Areas */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Areas of Expertise</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Lightbulb className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Technology Innovation</h3>
              </div>
              <p className="mt-4 text-gray-600">Cutting-edge IPL technology development and implementation guidance.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Brain className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Product Development</h3>
              </div>
              <p className="mt-4 text-gray-600">Expert advice on product design, features, and optimization.</p>
            </div>
            <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <Target className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Market Strategy</h3>
              </div>
              <p className="mt-4 text-gray-600">Strategic guidance for market positioning and competitive advantage.</p>
            </div>
          </div>
        </div>

        {/* Technical Support */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Technical Support Services</h2>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Training Programs</h3>
                <p className="mt-2 text-gray-600">Comprehensive technical training for your team on IPL technology and device operation.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <Users2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Consultation Services</h3>
                <p className="mt-2 text-gray-600">One-on-one consultation with our technical experts for specific project needs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Documentation */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Technical Documentation</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="flex items-center gap-4">
                <FileText className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Comprehensive Resources</h3>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Detailed technical specifications</li>
                <li>• Operation manuals</li>
                <li>• Troubleshooting guides</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="flex items-center gap-4">
                <Brain className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold">Knowledge Base</h3>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Best practices documentation</li>
                <li>• Case studies</li>
                <li>• Technical updates</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Expert Team */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Expert Team</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">R&D Engineers</h3>
              <p className="mt-4 text-gray-600">Specialized in IPL technology innovation and development.</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Technical Advisors</h3>
              <p className="mt-4 text-gray-600">Experienced in product optimization and troubleshooting.</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold">Quality Specialists</h3>
              <p className="mt-4 text-gray-600">Focused on maintaining high product standards.</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="py-12">
          <div className="rounded-2xl bg-primary-50 px-6 py-8 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900">Get Expert Support</h2>
            <p className="mt-4 text-lg text-gray-600">
              Connect with our technical experts to discuss your IPL device development needs.
            </p>
            <button className="mt-6 inline-flex items-center rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default ExpertisePage;
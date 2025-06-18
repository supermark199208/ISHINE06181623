import React from 'react';
import { Shield, CheckCircle, Award, Target, Microscope, FileCheck } from 'lucide-react';

const QualityControlPage = () => {
  const qualityStats = [
    { icon: <CheckCircle className="h-8 w-8" />, value: "99.5%", label: "Pass Rate" },
    { icon: <Shield className="h-8 w-8" />, value: "100%", label: "Safety Testing" },
    { icon: <Award className="h-8 w-8" />, value: "6+", label: "Certifications" },
    { icon: <Target className="h-8 w-8" />, value: "<0.1%", label: "Defect Rate" }
  ];

  const testingProcedures = [
    {
      phase: "Incoming Materials",
      icon: <FileCheck className="h-8 w-8" />,
      tests: [
        "Component specification verification",
        "Material composition analysis",
        "Supplier certification validation",
        "Batch quality documentation"
      ]
    },
    {
      phase: "Production Testing",
      icon: <Microscope className="h-8 w-8" />,
      tests: [
        "Optical performance measurement",
        "Electrical safety testing",
        "Mechanical durability testing",
        "Assembly quality inspection"
      ]
    },
    {
      phase: "Final Inspection",
      icon: <CheckCircle className="h-8 w-8" />,
      tests: [
        "Functional performance testing",
        "Cosmetic quality inspection",
        "Packaging integrity check",
        "Documentation completeness"
      ]
    }
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System",
      scope: "Design, development, and manufacturing of IPL devices",
      validUntil: "2026"
    },
    {
      name: "ISO 13485:2016",
      description: "Medical Device Quality Management",
      scope: "Medical and cosmetic device manufacturing",
      validUntil: "2026"
    },
    {
      name: "CE Marking",
      description: "European Conformity",
      scope: "All IPL devices for European market",
      validUntil: "Ongoing"
    },
    {
      name: "FDA Registration",
      description: "US Food & Drug Administration",
      scope: "Medical device facility registration",
      validUntil: "2025"
    },
    {
      name: "FCC Certification",
      description: "Federal Communications Commission",
      scope: "Electronic device compliance",
      validUntil: "Ongoing"
    },
    {
      name: "RoHS Compliance",
      description: "Restriction of Hazardous Substances",
      scope: "Environmental compliance for all products",
      validUntil: "Ongoing"
    }
  ];

  const qualityPolicies = [
    {
      title: "Zero Defect Philosophy",
      description: "Our commitment to delivering products that meet or exceed customer expectations through rigorous quality control at every stage."
    },
    {
      title: "Continuous Improvement",
      description: "Regular review and enhancement of quality processes based on customer feedback, industry standards, and technological advances."
    },
    {
      title: "Supplier Partnership",
      description: "Working closely with certified suppliers to ensure consistent quality of components and materials throughout the supply chain."
    },
    {
      title: "Customer Satisfaction",
      description: "Measuring success through customer satisfaction metrics and maintaining long-term partnerships built on quality and reliability."
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Quality
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Control Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive quality control system ensures every device meets the highest 
              standards of performance, safety, and reliability through rigorous testing and certification.
            </p>
          </div>

          {/* Quality Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Procedures */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Testing Procedures</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multi-stage testing protocol ensuring quality at every step of the manufacturing process.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testingProcedures.map((procedure, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-6">
                  {procedure.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{procedure.phase}</h3>
                <ul className="space-y-3">
                  {procedure.tests.map((test, testIndex) => (
                    <li key={testIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{test}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Management System */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quality Management System</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive quality framework ensuring consistent excellence across all operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {qualityPolicies.map((policy, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{policy.title}</h3>
                <p className="text-gray-600 leading-relaxed">{policy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Compliance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              International certifications validating our commitment to quality, safety, and regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl mb-6 mx-auto">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{cert.name}</h3>
                <p className="text-gray-600 mb-4 text-center">{cert.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Scope: </span>
                    <span className="text-gray-600">{cert.scope}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Valid Until: </span>
                    <span className="text-gray-600">{cert.validUntil}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quality Assurance Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Step-by-step quality assurance ensuring every device meets our exacting standards.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="grid md:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Design Review", desc: "Quality by design principles" },
                { step: "02", title: "Material Testing", desc: "Component verification" },
                { step: "03", title: "Production QC", desc: "In-line quality checks" },
                { step: "04", title: "Final Testing", desc: "Comprehensive validation" },
                { step: "05", title: "Documentation", desc: "Quality certification" }
              ].map((item, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                  
                  {index < 4 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-teal-300 transform translate-x-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Our Quality Commitment</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We stand behind every device we manufacture with comprehensive quality assurance, 
            international certifications, and a commitment to continuous improvement.
          </p>
          <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <div className="grid md:grid-cols-3 gap-8 text-white">
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Quality Monitoring</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Testing Coverage</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Zero</div>
                <div className="text-blue-100">Compromise Policy</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QualityControlPage;
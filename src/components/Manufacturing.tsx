import React from 'react';
import { Factory, Shield, Users, TrendingUp, CheckCircle2, Award } from 'lucide-react';

const Manufacturing = () => {
  const capabilities = [
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Production Capacity",
      value: "500K+ units/month",
      description: "State-of-the-art facilities with scalable production lines"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Control",
      value: "99.5% pass rate",
      description: "Rigorous testing at every stage of manufacturing"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team",
      value: "200+ engineers",
      description: "Dedicated R&D and manufacturing specialists"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Lead Time",
      value: "15-30 days",
      description: "Fast turnaround for samples and production orders"
    }
  ];

  const certifications = [
    { name: "ISO 9001:2015", desc: "Quality Management System" },
    { name: "ISO 13485", desc: "Medical Device QMS" },
    { name: "CE Marking", desc: "European Conformity" },
    { name: "FDA Registration", desc: "US Food & Drug Administration" },
    { name: "FCC Certification", desc: "Federal Communications Commission" },
    { name: "RoHS Compliance", desc: "Restriction of Hazardous Substances" }
  ];

  const processes = [
    {
      step: "01",
      title: "Material Sourcing",
      description: "Premium components from certified suppliers",
      details: ["Optical grade materials", "Medical-grade plastics", "Certified electronic components"]
    },
    {
      step: "02",
      title: "Precision Assembly",
      description: "Automated assembly with human oversight",
      details: ["Clean room environment", "Precision robotics", "Quality checkpoints"]
    },
    {
      step: "03",
      title: "Testing & Calibration",
      description: "Comprehensive testing protocols",
      details: ["Optical performance", "Safety compliance", "Durability testing"]
    },
    {
      step: "04",
      title: "Quality Assurance",
      description: "Final inspection and certification",
      details: ["100% functional testing", "Cosmetic inspection", "Packaging verification"]
    }
  ];

  return (
    <section id="manufacturing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            World-Class
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Manufacturing Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our advanced manufacturing facilities and quality control processes ensure 
            every device meets the highest standards of performance and reliability.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
                <div className="text-blue-600 group-hover:text-teal-600 transition-colors duration-300">
                  {capability.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{capability.value}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{capability.title}</h3>
              <p className="text-gray-600 text-sm">{capability.description}</p>
            </div>
          ))}
        </div>

        {/* Manufacturing Process */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Manufacturing Process</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl font-bold text-blue-600 mb-4">{process.step}</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h4>
                  <p className="text-gray-600 mb-6">{process.description}</p>
                  
                  <ul className="space-y-2">
                    {process.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Connector Arrow */}
                {index < processes.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-teal-300 z-10">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-teal-300 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Certifications & Compliance</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to quality is validated by international certifications and 
              compliance with global safety standards.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-sm text-gray-600">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manufacturing;
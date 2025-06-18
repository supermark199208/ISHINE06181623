import React from 'react';
import { Cpu, Palette, Cog, Rocket, CheckCircle, ArrowRight } from 'lucide-react';

const OEMODMPage = () => {
  const services = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "OEM Manufacturing",
      description: "Complete manufacturing of your existing designs with our advanced production capabilities.",
      features: [
        "Existing design manufacturing",
        "Quality assurance & testing",
        "Scalable production volumes",
        "Cost-effective solutions"
      ]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "ODM Development",
      description: "Full product development from concept to market-ready devices with your brand identity.",
      features: [
        "Custom product design",
        "Technology integration",
        "Brand customization",
        "Market-ready solutions"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Consultation & Requirements",
      description: "Understanding your vision, target market, and technical requirements",
      details: [
        "Market analysis and positioning",
        "Technical specification review",
        "Budget and timeline planning",
        "Regulatory requirements assessment"
      ]
    },
    {
      step: "02",
      title: "Design & Development",
      description: "Creating innovative solutions tailored to your brand and market needs",
      details: [
        "Industrial design and aesthetics",
        "Technical engineering",
        "User interface development",
        "Prototype creation and testing"
      ]
    },
    {
      step: "03",
      title: "Testing & Validation",
      description: "Comprehensive testing to ensure quality, safety, and performance standards",
      details: [
        "Performance testing",
        "Safety compliance verification",
        "User experience validation",
        "Regulatory approval support"
      ]
    },
    {
      step: "04",
      title: "Production & Delivery",
      description: "Scalable manufacturing and quality assurance for market launch",
      details: [
        "Mass production setup",
        "Quality control implementation",
        "Packaging and logistics",
        "Post-launch support"
      ]
    }
  ];

  const capabilities = [
    {
      category: "Design Capabilities",
      items: [
        "Industrial design and aesthetics",
        "Mechanical engineering",
        "Electronic circuit design",
        "Software and app development",
        "User interface design",
        "Packaging design"
      ]
    },
    {
      category: "Manufacturing Services",
      items: [
        "Injection molding",
        "Electronic assembly",
        "Optical component integration",
        "Quality testing and validation",
        "Packaging and labeling",
        "Global logistics"
      ]
    },
    {
      category: "Customization Options",
      items: [
        "Brand logo integration",
        "Color and finish options",
        "Custom packaging design",
        "Multi-language support",
        "Regional compliance",
        "Marketing material creation"
      ]
    },
    {
      category: "Technology Integration",
      items: [
        "App connectivity (iOS/Android)",
        "Smart features and sensors",
        "Advanced cooling systems",
        "Safety mechanisms",
        "User-friendly interfaces",
        "Cloud connectivity options"
      ]
    }
  ];

  const successStories = [
    {
      title: "European Beauty Brand Launch",
      challenge: "New brand needed premium IPL device for European market entry",
      solution: "Complete ODM solution with CE certification and luxury packaging",
      result: "€2M revenue in first year, 95% customer satisfaction"
    },
    {
      title: "DTC Startup Scale-Up",
      challenge: "Growing startup needed to scale from 100 to 10,000 units monthly",
      solution: "Flexible OEM manufacturing with automated quality control",
      result: "10,000% growth achieved in 18 months"
    },
    {
      title: "Retail Giant Partnership",
      challenge: "Major retailer required cost-effective, high-quality IPL devices",
      solution: "Optimized design for mass production with maintained quality",
      result: "200K+ units delivered annually, long-term partnership"
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              OEM/ODM
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Complete manufacturing solutions from concept to market. Whether you need 
              manufacturing services for existing designs (OEM) or full product development (ODM), 
              we deliver excellence at every stage.
            </p>
          </div>

          {/* Service Types */}
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our OEM/ODM Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured approach ensuring successful project delivery from initial 
              consultation to market launch and beyond.
            </p>
          </div>

          <div className="space-y-16">
            {process.map((step, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 h-64 flex items-center justify-center">
                    <div className="text-center">
                      <Cog className="h-16 w-16 text-blue-600 mx-auto mb-4 animate-spin-slow" />
                      <div className="text-lg font-semibold text-gray-900">Step {step.step}</div>
                      <div className="text-gray-600">{step.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive capabilities covering every aspect of product development 
              and manufacturing for IPL devices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">{capability.category}</h3>
                <ul className="space-y-3">
                  {capability.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real examples of how our OEM/ODM solutions have helped brands 
              achieve their goals and succeed in the market.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{story.title}</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Challenge:</h4>
                    <p className="text-sm text-gray-600">{story.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Solution:</h4>
                    <p className="text-sm text-gray-600">{story.solution}</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Result:</h4>
                    <p className="text-sm font-medium text-green-700">{story.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Rocket className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Launch Your Product?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Whether you need OEM manufacturing or complete ODM development, 
            our team is ready to bring your vision to life with precision and quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Explore Technologies
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OEMODMPage;
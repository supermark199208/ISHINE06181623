import React from 'react';
import { Factory, Cog, Shield, TrendingUp, CheckCircle, Users } from 'lucide-react';

const ProductionAssemblyPage = () => {
  const productionCapabilities = [
    {
      icon: <Factory className="h-8 w-8" />,
      title: "High-Volume Production",
      capacity: "500K+ units/month",
      description: "Scalable manufacturing lines capable of handling large orders with consistent quality.",
      features: [
        "Automated assembly lines",
        "Flexible production scheduling",
        "Rapid scaling capabilities",
        "24/7 production monitoring"
      ]
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Precision Assembly",
      capacity: "99.5% accuracy rate",
      description: "Advanced assembly processes ensuring perfect component integration and functionality.",
      features: [
        "Robotic assembly systems",
        "Precision component placement",
        "Real-time quality monitoring",
        "Automated testing integration"
      ]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Assurance",
      capacity: "100% testing coverage",
      description: "Comprehensive quality control at every stage of production and assembly.",
      features: [
        "In-line quality checks",
        "Statistical process control",
        "Defect prevention systems",
        "Continuous improvement"
      ]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Flexible Manufacturing",
      capacity: "10-500K units",
      description: "Adaptable production systems accommodating various order sizes and requirements.",
      features: [
        "Modular production lines",
        "Quick changeover capability",
        "Custom assembly processes",
        "Lean manufacturing principles"
      ]
    }
  ];

  const assemblyProcess = [
    {
      step: "01",
      title: "Component Preparation",
      description: "Incoming inspection and preparation of all components for assembly",
      details: [
        "Component verification and testing",
        "Inventory management and tracking",
        "Pre-assembly quality checks",
        "Component staging and organization"
      ]
    },
    {
      step: "02",
      title: "Optical Assembly",
      description: "Precision assembly of optical components including IPL lamps and filters",
      details: [
        "Clean room optical assembly",
        "Precision alignment procedures",
        "Optical performance testing",
        "Calibration and adjustment"
      ]
    },
    {
      step: "03",
      title: "Electronic Integration",
      description: "Integration of electronic components, circuits, and control systems",
      details: [
        "PCB assembly and testing",
        "Electronic component integration",
        "Firmware installation",
        "Electrical safety testing"
      ]
    },
    {
      step: "04",
      title: "Mechanical Assembly",
      description: "Final mechanical assembly including housing, controls, and accessories",
      details: [
        "Housing assembly and sealing",
        "Control interface installation",
        "Accessory integration",
        "Mechanical testing"
      ]
    },
    {
      step: "05",
      title: "Final Testing",
      description: "Comprehensive testing and quality verification before packaging",
      details: [
        "Functional performance testing",
        "Safety compliance verification",
        "Cosmetic quality inspection",
        "Final calibration"
      ]
    }
  ];

  const productionFeatures = [
    {
      category: "Advanced Equipment",
      items: [
        "High-precision pick-and-place machines",
        "Automated optical inspection (AOI)",
        "Robotic assembly systems",
        "Environmental testing chambers",
        "Laser marking and engraving",
        "Automated packaging systems"
      ]
    },
    {
      category: "Quality Systems",
      items: [
        "Statistical Process Control (SPC)",
        "Real-time production monitoring",
        "Automated defect detection",
        "Traceability systems",
        "Continuous improvement programs",
        "ISO certified processes"
      ]
    },
    {
      category: "Production Flexibility",
      items: [
        "Multi-product assembly lines",
        "Quick changeover capabilities",
        "Custom tooling and fixtures",
        "Scalable production volumes",
        "Rush order accommodation",
        "Prototype to production transition"
      ]
    },
    {
      category: "Workforce Excellence",
      items: [
        "Skilled assembly technicians",
        "Continuous training programs",
        "Quality-focused culture",
        "Cross-functional teams",
        "Lean manufacturing expertise",
        "Problem-solving capabilities"
      ]
    }
  ];

  const qualityMetrics = [
    { metric: "First Pass Yield", value: "99.5%", description: "Products passing initial quality check" },
    { metric: "On-Time Delivery", value: "98.8%", description: "Orders delivered on schedule" },
    { metric: "Defect Rate", value: "<0.1%", description: "Field failure rate" },
    { metric: "Customer Satisfaction", value: "99.2%", description: "Customer approval rating" }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Production &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Assembly Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              State-of-the-art production and assembly capabilities delivering consistent quality, 
              scalable volumes, and reliable performance for IPL devices across global markets.
            </p>
          </div>
        </div>
      </section>

      {/* Production Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Production Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced manufacturing capabilities designed to meet diverse production 
              requirements with uncompromising quality standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productionCapabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-6">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{capability.title}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-4">{capability.capacity}</div>
                <p className="text-gray-600 mb-6">{capability.description}</p>
                
                <ul className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assembly Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Assembly Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic assembly process ensuring precision, quality, and consistency 
              in every IPL device we manufacture.
            </p>
          </div>

          <div className="space-y-12">
            {assemblyProcess.map((step, index) => (
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
                        <Cog className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-white rounded-3xl p-8 shadow-lg">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Factory className="h-12 w-12 text-white" />
                      </div>
                      <div className="text-lg font-semibold text-gray-900 mb-2">Assembly Stage {step.step}</div>
                      <div className="text-gray-600">{step.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Production Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive production capabilities covering equipment, quality systems, 
              flexibility, and workforce excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productionFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">{feature.category}</h3>
                <ul className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
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

      {/* Quality Metrics */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quality Metrics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable results demonstrating our commitment to production excellence 
              and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{metric.value}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{metric.metric}</h3>
                <p className="text-gray-600 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Production Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Skilled professionals dedicated to delivering exceptional production 
              and assembly results for every project.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Production Staff</div>
                <div className="text-gray-600">Skilled technicians and engineers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-600 mb-2">15+</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Years Experience</div>
                <div className="text-gray-600">Average team experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Operations</div>
                <div className="text-gray-600">Continuous production capability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Factory className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Production?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Whether you need 100 units or 100,000, our production and assembly 
            capabilities are ready to deliver exceptional results on time and on budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Request Production Quote
            </a>
            <a
              href="/manufacturing-capabilities"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              View All Capabilities
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductionAssemblyPage;
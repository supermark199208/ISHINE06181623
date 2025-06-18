import React from 'react';
import { Package, Truck, Globe, Shield, CheckCircle, Clock } from 'lucide-react';

const PackagingLogisticsPage = () => {
  const services = [
    {
      icon: <Package className="h-8 w-8" />,
      title: "Custom Packaging Design",
      description: "Tailored packaging solutions that protect your products and enhance your brand image.",
      features: [
        "Brand-aligned packaging design",
        "Protective packaging engineering",
        "Sustainable material options",
        "Cost-effective solutions"
      ]
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Global Logistics",
      description: "Comprehensive logistics management ensuring timely delivery worldwide.",
      features: [
        "International shipping expertise",
        "Customs clearance support",
        "Multi-modal transportation",
        "Real-time tracking"
      ]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Warehousing & Distribution",
      description: "Strategic warehousing and distribution services for efficient supply chain management.",
      features: [
        "Inventory management",
        "Order fulfillment",
        "Drop shipping services",
        "Regional distribution"
      ]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Assurance",
      description: "Rigorous quality control throughout packaging and shipping processes.",
      features: [
        "Packaging integrity testing",
        "Damage prevention protocols",
        "Quality documentation",
        "Insurance coverage"
      ]
    }
  ];

  const packagingOptions = [
    {
      type: "Retail Packaging",
      description: "Consumer-ready packaging for retail environments",
      features: [
        "Eye-catching design",
        "Product visibility windows",
        "Informational panels",
        "Anti-theft features",
        "Shelf-ready packaging"
      ]
    },
    {
      type: "E-commerce Packaging",
      description: "Optimized for online sales and direct shipping",
      features: [
        "Compact design for shipping",
        "Unboxing experience focus",
        "Damage protection",
        "Return-friendly design",
        "Branding opportunities"
      ]
    },
    {
      type: "Bulk Packaging",
      description: "Efficient packaging for wholesale and distribution",
      features: [
        "Cost-effective materials",
        "Space optimization",
        "Easy handling",
        "Inventory management",
        "Protective cushioning"
      ]
    },
    {
      type: "Premium Packaging",
      description: "Luxury packaging for high-end market positioning",
      features: [
        "Premium materials",
        "Sophisticated design",
        "Gift-ready presentation",
        "Brand differentiation",
        "Collector appeal"
      ]
    }
  ];

  const logisticsCapabilities = [
    {
      region: "Asia-Pacific",
      coverage: "15+ countries",
      transitTime: "3-7 days",
      services: ["Express delivery", "Standard shipping", "Customs clearance", "Local distribution"]
    },
    {
      region: "North America",
      coverage: "USA & Canada",
      transitTime: "5-10 days",
      services: ["Air freight", "Sea freight", "Door-to-door delivery", "Warehousing"]
    },
    {
      region: "Europe",
      coverage: "27 EU countries",
      transitTime: "7-14 days",
      services: ["Multi-modal transport", "Customs handling", "VAT services", "Local fulfillment"]
    },
    {
      region: "Other Regions",
      coverage: "50+ countries",
      transitTime: "10-21 days",
      services: ["Global network", "Flexible solutions", "Documentation support", "Insurance"]
    }
  ];

  const packagingProcess = [
    {
      step: "01",
      title: "Design Consultation",
      description: "Understanding packaging requirements and brand guidelines"
    },
    {
      step: "02",
      title: "Concept Development",
      description: "Creating packaging concepts and material selection"
    },
    {
      step: "03",
      title: "Prototype & Testing",
      description: "Prototyping and testing for functionality and durability"
    },
    {
      step: "04",
      title: "Production Setup",
      description: "Setting up production lines and quality controls"
    },
    {
      step: "05",
      title: "Quality Control",
      description: "Final inspection and packaging quality assurance"
    },
    {
      step: "06",
      title: "Logistics Coordination",
      description: "Coordinating shipping and delivery logistics"
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Packaging &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Logistics Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Complete packaging and logistics solutions ensuring your IPL devices reach 
              customers worldwide safely, efficiently, and with exceptional brand presentation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive packaging and logistics services designed to protect your products 
              and enhance your brand throughout the supply chain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
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

      {/* Packaging Options */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Packaging Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diverse packaging options tailored to different market segments, 
              distribution channels, and brand positioning strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packagingOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{option.type}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                
                <ul className="space-y-3">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Logistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Global Logistics Network</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Worldwide logistics capabilities ensuring reliable delivery to any destination 
              with comprehensive support and tracking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {logisticsCapabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{capability.region}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Coverage:</span>
                    <span className="font-semibold text-gray-900">{capability.coverage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Transit Time:</span>
                    <span className="font-semibold text-gray-900">{capability.transitTime}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Services:</h4>
                  <ul className="space-y-2">
                    {capability.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-sm text-gray-700">
                        <Truck className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic approach ensuring optimal packaging design and efficient 
              logistics execution for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packagingProcess.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive advantages that make us your ideal packaging and logistics partner.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Speed & Efficiency</h3>
              <p className="text-gray-600">
                Fast turnaround times and efficient processes ensuring your products 
                reach market quickly and reliably.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Protection & Quality</h3>
              <p className="text-gray-600">
                Advanced packaging protection and quality assurance ensuring products 
                arrive in perfect condition.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Reach</h3>
              <p className="text-gray-600">
                Worldwide logistics network with local expertise ensuring smooth 
                delivery to any destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Performance Metrics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable results demonstrating our commitment to packaging and logistics excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.8%</div>
              <div className="text-gray-600">On-Time Delivery</div>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-teal-600 mb-2">0.02%</div>
              <div className="text-gray-600">Damage Rate</div>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Package className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Optimize Your Supply Chain?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let our packaging and logistics experts help you deliver exceptional 
            products to customers worldwide with efficiency and style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Logistics Quote
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackagingLogisticsPage;
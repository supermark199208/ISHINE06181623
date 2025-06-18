import React from 'react';
import { Building, MapPin, Calendar, Users, Award, Globe, Zap, Lightbulb, Smartphone, Snowflake, Gem, Eye } from 'lucide-react';

const CompanyProfilePage = () => {
  const companyInfo = [
    { icon: <Building className="h-6 w-6" />, label: "Company Name", value: "Shenzhen iShine Technology Co., Ltd" },
    { icon: <Calendar className="h-6 w-6" />, label: "Founded", value: "2009" },
    { icon: <MapPin className="h-6 w-6" />, label: "Headquarters", value: "Shenzhen, Guangdong, China" },
    { icon: <Users className="h-6 w-6" />, label: "Employees", value: "500+ professionals" },
    { icon: <Globe className="h-6 w-6" />, label: "Global Reach", value: "50+ countries served" },
    { icon: <Award className="h-6 w-6" />, label: "Certifications", value: "ISO 9001, ISO 13485, CE, FDA" }
  ];

  const facilities = [
    {
      name: "Main Manufacturing Facility",
      location: "Shenzhen, China",
      area: "15,000 m²",
      capacity: "500K+ units/month",
      features: ["Automated assembly lines", "Clean room environment", "Quality control labs"]
    },
    {
      name: "R&D Center",
      location: "Shenzhen, China",
      area: "3,000 m²",
      capacity: "50+ engineers",
      features: ["Optical testing lab", "Product development", "Prototype manufacturing"]
    },
    {
      name: "Logistics Center",
      location: "Shenzhen, China",
      area: "5,000 m²",
      capacity: "Global shipping",
      features: ["Automated warehousing", "Quality packaging", "Express logistics"]
    }
  ];

  const businessScope = [
    {
      category: "Core Products",
      items: ["IPL Hair Removal Devices", "RF Beauty Devices", "Led Therapy Masks", "Hair Dryer"]
    },
    {
      category: "Services",
      items: ["OEM/ODM Manufacturing", "Product Design & Development", "Quality Control", "Packaging & Logistics"]
    },
    {
      category: "Markets",
      items: ["North America", "Europe", "Asia-Pacific", "Latin America"]
    },
    {
      category: "Industries",
      items: ["Beauty & Personal Care", "Consumer Electronics", "Medical Devices", "Cosmetics", "Retail & E-commerce"]
    }
  ];

  // IPL Technology Roadmap Data
  const technologyRoadmap = [
    {
      year: "2015",
      phase: "Foundation",
      title: "Basic IPL Technology",
      icon: <Zap className="h-8 w-8" />,
      description: "Established core IPL technology with essential safety features",
      technologies: [
        "Intense Pulsed Light (IPL) systems",
        "Basic skin contact sensors",
        "UV filter protection",
        "Multiple intensity levels",
        "Long-lasting xenon lamps"
      ],
      color: "from-blue-600 to-blue-800",
      status: "Established"
    },
    {
      year: "2016",
      phase: "Innovation",
      title: "Advanced Cooling Systems",
      icon: <Snowflake className="h-8 w-8" />,
      description: "Revolutionary cooling technology for enhanced comfort and safety",
      technologies: [
        "Thermoelectric cooling systems",
        "Temperature regulation (5-15°C)",
        "Continuous cooling operation",
        "Reduced skin irritation",
        "Enhanced user comfort"
      ],
      color: "from-cyan-600 to-cyan-800",
      status: "Perfected"
    },
    {
      year: "2017-2019",
      phase: "Intelligence",
      title: "Smart App-Controlled IPL",
      icon: <Smartphone className="h-8 w-8" />,
      description: "First-generation smart IPL devices with mobile connectivity",
      technologies: [
        "Bluetooth 5.0 connectivity",
        "iOS & Android app integration",
        "Treatment tracking & scheduling",
        "Progress monitoring",
        "Remote device control"
      ],
      color: "from-teal-600 to-teal-800",
      status: "Market Leader"
    },
    {
      year: "2020-2022",
      phase: "Premium",
      title: "Sapphire Ice Point Technology",
      icon: <Gem className="h-8 w-8" />,
      description: "Premium sapphire crystal cooling for luxury market segment",
      technologies: [
        "Synthetic sapphire crystal windows",
        "Superior heat dissipation (25 W/mK)",
        "Enhanced light transmission (>95%)",
        "Scratch-resistant surface",
        "Lifetime warranty components"
      ],
      color: "from-purple-600 to-purple-800",
      status: "Premium Standard"
    },
    {
      year: "2023-2024",
      phase: "AI Integration",
      title: "Intelligent Skin Sensor Technology",
      icon: <Eye className="h-8 w-8" />,
      description: "AI-powered skin analysis and automatic treatment optimization",
      technologies: [
        "Multi-spectral skin sensors",
        "Real-time skin analysis (<0.5s)",
        "Fitzpatrick I-V skin type detection",
        "Automatic safety adjustments",
        "99%+ accuracy rate"
      ],
      color: "from-green-600 to-green-800",
      status: "Current Innovation"
    },
    {
      year: "2025+",
      phase: "Future",
      title: "Next-Generation IPL Platform",
      icon: <Lightbulb className="h-8 w-8" />,
      description: "Revolutionary IPL technology with AI, IoT, and sustainable design",
      technologies: [
        "AI-powered treatment personalization",
        "IoT cloud connectivity",
        "Sustainable manufacturing materials",
        "Enhanced energy efficiency",
        "Global telemedicine integration"
      ],
      color: "from-orange-600 to-orange-800",
      status: "In Development"
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Company
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Profile</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive overview of Shenzhen iShine Technology Co., Ltd - 
              your trusted partner in IPL device manufacturing and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Company Overview</h2>
              <div className="space-y-6">
                {companyInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl">
                    <div className="text-blue-600 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{info.label}</div>
                      <div className="text-gray-600">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Legal Information</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold mb-1">Registration Number</div>
                  <div className="opacity-90">91440300MA5XXXXX</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Business License</div>
                  <div className="opacity-90">Valid through 2034</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Tax Registration</div>
                  <div className="opacity-90">General Taxpayer Status</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Export License</div>
                  <div className="opacity-90">Authorized for Global Export</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IPL Technology Roadmap */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              IPL Technology
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Roadmap</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our journey of innovation: How we've evolved IPL technology from basic functionality 
              to cutting-edge AI-powered devices, and what's coming next.
            </p>
          </div>

          <div className="space-y-12">
            {technologyRoadmap.map((tech, index) => (
              <div
                key={index}
                className={`relative ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex items-center gap-8`}
              >
                {/* Content Card */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center text-white mr-4`}>
                        {tech.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">{tech.phase}</div>
                        <h3 className="text-2xl font-bold text-gray-900">{tech.title}</h3>
                        <div className="text-sm text-blue-600 font-medium">{tech.year}</div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{tech.description}</p>

                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900">Key Technologies:</h4>
                      {tech.technologies.map((technology, techIndex) => (
                        <div key={techIndex} className="flex items-center">
                          <div className={`w-2 h-2 bg-gradient-to-r ${tech.color} rounded-full mr-3`}></div>
                          <span className="text-sm text-gray-700">{technology}</span>
                        </div>
                      ))}
                    </div>

                    <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${tech.color} text-white rounded-full text-sm font-medium`}>
                      {tech.status}
                    </div>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="lg:w-1/2">
                  <div className={`bg-gradient-to-br ${tech.color} rounded-3xl p-8 h-64 flex items-center justify-center text-white shadow-xl`}>
                    <div className="text-center">
                      <div className="text-6xl mb-4 opacity-80">
                        {tech.icon}
                      </div>
                      <div className="text-xl font-bold mb-2">{tech.year}</div>
                      <div className="text-lg opacity-90">{tech.phase} Phase</div>
                    </div>
                  </div>
                </div>

                {/* Timeline Connector */}
                {index < technologyRoadmap.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-1 h-12 bg-gradient-to-b from-blue-300 to-teal-300 z-10 hidden lg:block"></div>
                )}
              </div>
            ))}
          </div>

          {/* Roadmap Summary */}
          <div className="mt-16 bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Technology Evolution Summary</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
                <div className="text-gray-600">Technology Generations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">15+</div>
                <div className="text-gray-600">Years of Innovation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">50M+</div>
                <div className="text-gray-600">Devices Manufactured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art facilities designed for precision manufacturing, 
              innovation, and global logistics excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{facility.name}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-semibold text-gray-900">{facility.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Area:</span>
                    <span className="font-semibold text-gray-900">{facility.area}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Capacity:</span>
                    <span className="font-semibold text-gray-900">{facility.capacity}</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                  <ul className="space-y-1">
                    {facility.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Scope */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Business Scope</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of products, services, and markets we serve 
              across the global beauty and technology industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessScope.map((scope, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">{scope.category}</h3>
                <ul className="space-y-3">
                  {scope.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mr-3"></div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Financial Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strong financial performance and strategic investments driving 
              continued growth and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">$50M+</div>
              <div className="text-gray-600">Annual Revenue</div>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-teal-600 mb-2">15%</div>
              <div className="text-gray-600">R&D Investment</div>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">25%</div>
              <div className="text-gray-600">YoY Growth</div>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">AAA</div>
              <div className="text-gray-600">Credit Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-12">
            Ready to partner with us? Contact our team for detailed company 
            information, certifications, and partnership opportunities.
          </p>
          
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 text-white">
            <div className="grid md">
              <div>
                <div className="font-semibold mb-2">Sales Inquiries</div>
                <div className="opacity-90">info@iplmanufacturer.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyProfilePage;
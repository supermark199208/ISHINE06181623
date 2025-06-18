import React, { useState } from 'react';
import { Smartphone, Snowflake, Gem, Lightbulb, Eye, Zap, Download, ArrowRight } from 'lucide-react';

const Technologies = () => {
  const [activeTab, setActiveTab] = useState(0);

  const technologies = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Basic IPL Technology",
      description: "Essential IPL functionality with reliable performance and safety features for entry-level devices.",
      features: [
        "Intense Pulsed Light technology",
        "Multiple intensity levels",
        "Safety skin contact sensor",
        "UV filter protection",
        "Long-lasting lamp life"
      ],
      specs: {
        "Light Output": "10-50 J/cm²",
        "Wavelength": "580-1200nm",
        "Flash Window": "3.1cm²",
        "Lamp Life": "500,000+ flashes"
      },
      color: "blue",
      image: "https://images.pexels.com/photos/5938567/pexels-photo-5938567.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "App-Controlled IPL",
      description: "Smart connectivity features allowing users to control device settings and track progress through mobile apps.",
      features: [
        "Bluetooth connectivity",
        "Mobile app integration",
        "Treatment tracking",
        "Personalized schedules",
        "Progress monitoring"
      ],
      specs: {
        "Connectivity": "Bluetooth 5.0",
        "App Platform": "iOS & Android",
        "Battery Life": "60+ treatments",
        "Remote Control": "Full device control"
      },
      color: "teal",
      image: "https://images.pexels.com/photos/5938322/pexels-photo-5938322.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Snowflake className="h-8 w-8" />,
      title: "Cooling Sensation",
      description: "Advanced cooling technology that provides comfort during treatment and reduces skin irritation.",
      features: [
        "Active cooling system",
        "Temperature regulation",
        "Comfort enhancement",
        "Reduced side effects",
        "Suitable for sensitive skin"
      ],
      specs: {
        "Cooling Method": "Thermoelectric",
        "Temperature": "5-15°C",
        "Cooling Duration": "Continuous",
        "Recovery Time": "< 2 seconds"
      },
      color: "cyan",
      image: "https://images.pexels.com/photos/6663461/pexels-photo-6663461.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Gem className="h-8 w-8" />,
      title: "Sapphire Ice Point",
      description: "Premium sapphire crystal cooling technology for maximum comfort and optimal light transmission.",
      features: [
        "Sapphire crystal window",
        "Superior heat dissipation",
        "Enhanced light transmission",
        "Scratch-resistant surface",
        "Premium user experience"
      ],
      specs: {
        "Crystal Type": "Synthetic Sapphire",
        "Thermal Conductivity": "25 W/mK",
        "Light Transmission": ">95%",
        "Durability": "Lifetime warranty"
      },
      color: "purple",
      image: "https://images.pexels.com/photos/5938393/pexels-photo-5938393.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Dual Lamp System",
      description: "Innovative dual-lamp technology for faster treatment coverage and improved efficiency.",
      features: [
        "Twin lamp configuration",
        "Larger treatment area",
        "Faster session completion",
        "Uniform light distribution",
        "Extended lamp life"
      ],
      specs: {
        "Coverage Area": "6.2cm²",
        "Treatment Speed": "2x faster",
        "Lamp Configuration": "Dual xenon",
        "Total Flashes": "1,000,000+"
      },
      color: "orange",
      image: "https://images.pexels.com/photos/5938394/pexels-photo-5938394.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Skin Sensor Technology",
      description: "Intelligent skin detection and analysis for safe, personalized treatments across different skin types.",
      features: [
        "Automatic skin tone detection",
        "Real-time skin analysis",
        "Safety auto-adjustment",
        "Skin type recognition",
        "Treatment optimization"
      ],
      specs: {
        "Sensor Type": "Multi-spectral",
        "Detection Speed": "<0.5 seconds",
        "Skin Types": "Fitzpatrick I-V",
        "Accuracy": ">99%"
      },
      color: "green",
      image: "https://images.pexels.com/photos/6663459/pexels-photo-6663459.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-600 to-blue-800",
      teal: "from-teal-600 to-teal-800",
      cyan: "from-cyan-600 to-cyan-800",
      purple: "from-purple-600 to-purple-800",
      orange: "from-orange-600 to-orange-800",
      green: "from-green-600 to-green-800"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="technologies" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> IPL Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our cutting-edge IPL technologies are designed to meet diverse market needs, 
            from basic functionality to premium smart features.
          </p>
        </div>

        {/* Technology Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {technologies.map((tech, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === index
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {tech.title}
            </button>
          ))}
        </div>

        {/* Active Technology Detail */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${getColorClasses(technologies[activeTab].color)} rounded-2xl text-white mb-6`}>
              {technologies[activeTab].icon}
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {technologies[activeTab].title}
            </h3>
            
            <p className="text-lg text-gray-600 mb-8">
              {technologies[activeTab].description}
            </p>

            <div className="space-y-3 mb-8">
              {technologies[activeTab].features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-2 h-2 bg-gradient-to-r ${getColorClasses(technologies[activeTab].color)} rounded-full mr-4`}></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Updated Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className={`inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r ${getColorClasses(technologies[activeTab].color)} text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
              >
                Get Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              
              <button
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                onClick={() => {
                  // In a real implementation, this would trigger a download
                  alert('Technical specifications download will be available soon!');
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Specs
              </button>
            </div>
          </div>

          {/* Right Specifications and Photo */}
          <div className="space-y-8">
            {/* Technology Photo */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Technology Showcase</h4>
              <div className="relative">
                <img
                  src={technologies[activeTab].image}
                  alt={`${technologies[activeTab].title} technology`}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  style={{ maxWidth: '800px', maxHeight: '800px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-sm font-semibold text-gray-900">{technologies[activeTab].title}</div>
                    <div className="text-xs text-gray-600">Advanced IPL Technology</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Technical Specifications</h4>
              
              <div className="space-y-4">
                {Object.entries(technologies[activeTab].specs).map(([key, value], index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-700">{key}</span>
                    <span className="text-gray-900 font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technology Comparison */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Technology Comparison</h3>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl text-center transition-all duration-300 cursor-pointer ${
                  activeTab === index
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white hover:bg-blue-50 hover:shadow-md'
                }`}
                onClick={() => setActiveTab(index)}
              >
                <div className={`${activeTab === index ? 'text-white' : 'text-blue-600'} mb-3`}>
                  {tech.icon}
                </div>
                <h4 className={`font-semibold text-sm ${activeTab === index ? 'text-white' : 'text-gray-900'}`}>
                  {tech.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
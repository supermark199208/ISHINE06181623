import React from 'react';
import { Cpu, Palette, Factory, Package, Wrench, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "OEM/ODM Solutions",
      description: "Complete product development from concept to market-ready devices with your brand identity.",
      features: ["Custom hardware design", "Software development", "Regulatory compliance", "Market analysis"],
      color: "blue"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Product Design & Development",
      description: "Innovative design solutions that combine aesthetics, functionality, and user experience.",
      features: ["Industrial design", "UI/UX development", "Prototyping", "User testing"],
      color: "teal"
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Production & Assembly",
      description: "State-of-the-art manufacturing facilities with rigorous quality control processes.",
      features: ["Automated assembly lines", "Quality assurance", "Scalable production", "ISO certified"],
      color: "orange"
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Packaging & Logistics",
      description: "End-to-end packaging solutions and global logistics management for seamless delivery.",
      features: ["Custom packaging design", "Global shipping", "Inventory management", "Drop shipping"],
      color: "green"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Customization Options",
      description: "Extensive customization capabilities to match your brand requirements perfectly.",
      features: ["Logo printing", "Color customization", "Packaging design", "User manual translation"],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-blue-50 to-blue-100",
        text: "text-blue-600",
        border: "border-blue-200",
        hover: "hover:border-blue-300"
      },
      teal: {
        bg: "from-teal-50 to-teal-100",
        text: "text-teal-600",
        border: "border-teal-200",
        hover: "hover:border-teal-300"
      },
      orange: {
        bg: "from-orange-50 to-orange-100",
        text: "text-orange-600",
        border: "border-orange-200",
        hover: "hover:border-orange-300"
      },
      green: {
        bg: "from-green-50 to-green-100",
        text: "text-green-600",
        border: "border-green-200",
        hover: "hover:border-green-300"
      },
      purple: {
        bg: "from-purple-50 to-purple-100",
        text: "text-purple-600",
        border: "border-purple-200",
        hover: "hover:border-purple-300"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Manufacturing Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial concept to final delivery, we provide end-to-end solutions 
            for your IPL device manufacturing needs with unmatched expertise and quality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            return (
              <div
                key={index}
                className={`group p-8 rounded-3xl bg-gradient-to-br ${colorClasses.bg} border-2 ${colorClasses.border} ${colorClasses.hover} transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2`}
              >
                <div className={`${colorClasses.text} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className={`w-2 h-2 ${colorClasses.text.replace('text-', 'bg-')} rounded-full mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`inline-flex items-center ${colorClasses.text} font-semibold hover:underline transition-all duration-200 group-hover:translate-x-1`}>
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Process Flow */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Manufacturing Process</h3>
          
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your requirements" },
              { step: "02", title: "Design", desc: "Creating custom solutions" },
              { step: "03", title: "Prototype", desc: "Testing and refinement" },
              { step: "04", title: "Production", desc: "Mass manufacturing" },
              { step: "05", title: "Delivery", desc: "Quality assurance & shipping" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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
  );
};

export default Services;
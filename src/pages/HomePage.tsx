import React from 'react';
import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import BeforeAfterComparison from '../components/BeforeAfterComparison';
import { ArrowRight, Factory, Users, Award, Globe, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const highlights = [
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Advanced Manufacturing",
      description: "State-of-the-art facilities with 500K+ units monthly capacity",
      link: "/manufacturing-capabilities"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Global Partnerships",
      description: "Trusted by leading brands like KU-2 Cosmetic, Costco, and RoseSkinCo",
      link: "/clients"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Excellence",
      description: "ISO certified with 99.5% pass rate and comprehensive testing",
      link: "/quality-control"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Complete Solutions",
      description: "End-to-end OEM/ODM services from design to delivery",
      link: "/services"
    }
  ];

  const services = [
    {
      title: "OEM/ODM Solutions",
      description: "Complete product development from concept to market-ready devices",
      features: ["Custom Design", "Regulatory Compliance", "Brand Integration"],
      link: "/oem-odm"
    },
    {
      title: "Advanced Technologies",
      description: "Cutting-edge IPL innovations including app control and cooling systems",
      features: ["Smart Connectivity", "Cooling Technology", "Skin Sensors"],
      link: "/products"
    },
    {
      title: "Manufacturing Excellence",
      description: "World-class production facilities with rigorous quality control",
      features: ["Automated Assembly", "Quality Assurance", "Scalable Production"],
      link: "/manufacturing-capabilities"
    }
  ];

  return (
    <div>
      <Hero />
      
      {/* WHAT WE DO Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Three-line Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              <span className="block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Who We Are</span>
              <span className="block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Make Your Own IPL Devices
              </span>
              <span className="block text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Faster & Cheaper Than Your Competition With iShine Team
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - YouTube Video */}
            <div>
              <div className="relative bg-gray-900 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                {/* Video Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center relative">
                  {/* Play Button */}
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-10 w-10 text-white ml-1" fill="currentColor" />
                  </div>
                  
                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  
                  {/* Video Duration */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                    3:45
                  </div>
                </div>
                
                {/* Video Title - Italic */}
                <div className="p-6 bg-gray-900">
                  <h3 className="text-xl font-medium text-white italic leading-relaxed">
                    "From Idea to Global Success: iShine Empower Cosmetics Brands with IPL Manufacturing Excellence"
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Side - Company Introduction */}
            <div className="space-y-6">
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  <strong className="font-bold text-gray-900">iShine team</strong> works with different industries brands Owner, development managers, products managers, products designers together and offer them
                  <strong className="font-bold"> IPL hair removal devices</strong> with over <strong className="font-bold">15 years</strong> of industry expertise. 
                  We serve global beauty brands through comprehensive <strong className="font-semibold">OEM/ODM solutions</strong>.
                </p>
                
                <p>
                  Our state-of-the-art manufacturing facilities produce <strong className="font-bold">500,000+ units monthly</strong>, 
                  serving renowned clients including <strong className="font-semibold">KU-2 Cosmetic</strong>, <strong className="font-semibold">Costco</strong>, 
                  and <strong className="font-semibold">ROSESKINCO</strong> across <strong className="font-bold">50+ countries</strong> worldwide.
                </p>
                
              
                
                <p>
                  From <strong className="font-semibold">concept development</strong> to <strong className="font-semibold">mass production</strong>, 
                  our expert team delivers solutions including <strong className="font-semibold">app-controlled devices</strong>, 
                  <strong className="font-semibold">advanced cooling systems</strong>, and 
                  <strong className="font-semibold">smart skin sensors</strong>.
                </p>
                
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BeforeAfterComparison />
      
      {/* Company Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> iShine</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With 15+ years of experience and partnerships with global leaders, we deliver 
              unmatched manufacturing excellence and innovation in IPL technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <Link
                key={index}
                to={highlight.link}
                className="group p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2"
              >
                <div className="text-blue-600 group-hover:text-teal-600 transition-colors duration-300 mb-6">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
                <p className="text-gray-600 mb-6">{highlight.description}</p>
                <div className="flex items-center text-blue-600 group-hover:text-teal-600 font-semibold">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <TrustBadges />
      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Manufacturing Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial concept to final delivery, we provide end-to-end solutions 
              for your IPL device manufacturing needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={service.link}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-teal-600 transition-colors duration-200"
                >
                  Explore Service
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you need 100 sample units or 100,000 production devices, 
            our team is ready to bring your vision to life with precision and quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Explore Technologies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
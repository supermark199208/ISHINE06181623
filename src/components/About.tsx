import React from 'react';
import { Factory, Users, Award, Shield, Lightbulb, Globe2 } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Factory,
      title: 'Advanced Manufacturing',
      description: 'State-of-the-art production facilities with ISO 9001 certified processes and quality control systems.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated R&D team with 15+ years of experience in beauty device technology and manufacturing.'
    },
    {
      icon: Award,
      title: 'Quality Certification',
      description: 'CE, FDA, and FCC certified products meeting international safety and quality standards.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Comprehensive testing protocols ensuring every device meets strict performance and safety criteria.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Continuous investment in R&D to develop cutting-edge IPL technology and features.'
    },
    {
      icon: Globe2,
      title: 'Global Reach',
      description: 'Serving clients across North America, Europe, and Asia with localized support and service.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Shenzhen iShine Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A leading B2B manufacturer specializing in IPL hair removal devices, 
            dedicated to helping global brands bring innovative beauty technology to market.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              15+ Years of Manufacturing Excellence
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Founded in Shenzhen, China's technology hub, iShine Technology has grown 
                from a small manufacturing workshop to a trusted partner for global beauty 
                brands seeking high-quality IPL device production.
              </p>
              <p>
                Our comprehensive approach combines advanced manufacturing capabilities 
                with custom design services, helping clients transform their vision into 
                market-ready products. From basic IPL devices to sophisticated app-controlled 
                units with cooling technology, we deliver solutions that meet diverse market needs.
              </p>
              <p>
                With successful partnerships including major retailers like Costco and 
                innovative beauty brands like ROSESKINCO, we've proven our ability to 
                scale production while maintaining exceptional quality standards.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary-600 to-teal-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Our Mission</h4>
              <p className="text-lg leading-relaxed opacity-90">
                To empower beauty brands worldwide with innovative, high-quality IPL 
                manufacturing solutions that combine cutting-edge technology with 
                reliable production processes.
              </p>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">ISO 9001</div>
                    <div className="text-sm opacity-80">Certified</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm opacity-80">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Partner with Us?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join leading brands who trust iShine Technology for their IPL device 
              manufacturing needs. Let's discuss how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#contact"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Start a Partnership
              </a>
              <a
                href="#services"
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
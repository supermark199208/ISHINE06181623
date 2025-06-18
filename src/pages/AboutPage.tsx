import React from 'react';
import { Factory, Users, Award, TrendingUp, Globe, Shield } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: <Factory className="h-8 w-8" />, value: "50M+", label: "Devices Manufactured" },
    { icon: <Users className="h-8 w-8" />, value: "200+", label: "Global Partners" },
    { icon: <Award className="h-8 w-8" />, value: "15+", label: "Years Experience" },
    { icon: <Globe className="h-8 w-8" />, value: "50+", label: "Countries Served" }
  ];

  const milestones = [
    {
      year: "2009",
      title: "Company Founded",
      description: "Established in Shenzhen with focus on IPL technology development"
    },
    {
      year: "2012",
      title: "First Major Partnership",
      description: "Secured first international OEM contract with European beauty brand"
    },
    {
      year: "2015",
      title: "ISO Certification",
      description: "Achieved ISO 9001:2015 and ISO 13485 certifications"
    },
    {
      year: "2018",
      title: "Advanced Technology",
      description: "Launched app-controlled IPL devices and cooling technology"
    },
    {
      year: "2020",
      title: "Global Expansion",
      description: "Partnerships with Costco, KU-2 Cosmetic, and major DTC brands"
    },
    {
      year: "2024",
      title: "Innovation Leadership",
      description: "Leading manufacturer with 500K+ monthly production capacity"
    }
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality First",
      description: "Uncompromising commitment to quality with 99.5% pass rate and rigorous testing protocols."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer Partnership",
      description: "Building long-term relationships through dedicated support and collaborative innovation."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Continuous Innovation",
      description: "Investing 15% of annual revenue in R&D to stay at the forefront of IPL technology."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> iShine Technology</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              For over 15 years, Shenzhen iShine Technology Co., Ltd has been at the forefront 
              of IPL hair removal device manufacturing, serving global beauty brands with 
              innovative OEM/ODM solutions and uncompromising quality standards.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2009 in Shenzhen, China's innovation hub, iShine Technology began 
                  with a vision to revolutionize the beauty device industry through advanced 
                  IPL technology and manufacturing excellence.
                </p>
                <p>
                  What started as a small team of engineers passionate about optical technology 
                  has grown into a global leader, manufacturing over 50 million devices and 
                  partnering with renowned brands across 50+ countries.
                </p>
                <p>
                  Today, we combine cutting-edge technology with flexible manufacturing 
                  capabilities, serving everyone from innovative DTC startups to established 
                  retail giants like Costco and KU-2 Cosmetic.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg mb-6 opacity-90">
                To empower beauty brands worldwide with innovative IPL manufacturing 
                solutions that combine advanced technology, exceptional quality, and 
                flexible customization capabilities.
              </p>
              <div className="bg-white/10 rounded-2xl p-6">
                <h4 className="font-semibold mb-3">Core Focus Areas</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Advanced IPL Technology Development</li>
                  <li>• Flexible OEM/ODM Manufacturing</li>
                  <li>• Quality Excellence & Compliance</li>
                  <li>• Global Partnership Building</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a startup vision to global manufacturing leader - key milestones 
              that shaped our company and the IPL industry.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-teal-600 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our decisions, shape our culture, and 
              drive our commitment to excellence in everything we do.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders driving innovation and excellence in IPL manufacturing.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-xl text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Committed to Your Success
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our leadership team brings together decades of experience in optical technology, 
                manufacturing excellence, and global business development. We're committed to 
                building long-term partnerships and delivering solutions that exceed expectations.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                  <div className="text-gray-600">Expert Engineers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600 mb-2">50+</div>
                  <div className="text-gray-600">R&D Specialists</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">30+</div>
                  <div className="text-gray-600">Quality Experts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
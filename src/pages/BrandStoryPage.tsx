import React from 'react';
import { Heart, Lightbulb, Users, Globe, Award, Target, Zap, Shield } from 'lucide-react';

const BrandStoryPage = () => {
  const brandValues = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion for Innovation",
      description: "Our journey began with a simple belief: everyone deserves access to professional-grade beauty technology at home."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality First",
      description: "We never compromise on quality, ensuring every device meets the highest standards of safety and effectiveness."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer-Centric",
      description: "Every decision we make is guided by our commitment to improving the lives of our customers and partners."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Impact",
      description: "From our headquarters in Shenzhen to customers worldwide, we're building a global community of beauty innovation."
    }
  ];

  const milestones = [
    {
      year: "2009",
      title: "The Beginning",
      description: "Founded in Shenzhen with a vision to democratize professional beauty treatments",
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      year: "2012",
      title: "First Breakthrough",
      description: "Developed our first IPL device with revolutionary cooling technology",
      icon: <Zap className="h-6 w-6" />
    },
    {
      year: "2015",
      title: "Global Recognition",
      description: "Achieved ISO certifications and began partnerships with international brands",
      icon: <Award className="h-6 w-6" />
    },
    {
      year: "2018",
      title: "Smart Innovation",
      description: "Launched the first app-controlled IPL device, setting new industry standards",
      icon: <Target className="h-6 w-6" />
    },
    {
      year: "2020",
      title: "Market Leadership",
      description: "Became a trusted partner for major retailers including Costco and KU-2 Cosmetic",
      icon: <Users className="h-6 w-6" />
    },
    {
      year: "2024",
      title: "Future Vision",
      description: "Leading the industry with 500K+ monthly production capacity and cutting-edge R&D",
      icon: <Globe className="h-6 w-6" />
    }
  ];

  const teamStory = [
    {
      title: "Our Founders",
      description: "Visionary engineers who saw the potential to bring professional IPL technology to homes worldwide.",
      image: "bg-gradient-to-br from-blue-600 to-blue-800"
    },
    {
      title: "Our Engineers",
      description: "200+ dedicated professionals pushing the boundaries of what's possible in beauty technology.",
      image: "bg-gradient-to-br from-teal-600 to-teal-800"
    },
    {
      title: "Our Partners",
      description: "Global network of brands and retailers who trust us to bring their vision to life.",
      image: "bg-gradient-to-br from-purple-600 to-purple-800"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Brand Story</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From a small team of passionate engineers to a global leader in IPL manufacturing, 
              our story is one of innovation, dedication, and an unwavering commitment to making 
              professional beauty technology accessible to everyone.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The iShine Vision</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  In 2009, a group of optical engineers in Shenzhen had a revolutionary idea: 
                  what if professional IPL technology could be made safe, effective, and affordable 
                  for home use? This simple question sparked the creation of iShine Technology.
                </p>
                <p>
                  We believed that everyone deserves access to professional-grade beauty treatments 
                  without the high costs and inconvenience of salon visits. This belief became our 
                  mission and continues to drive every innovation we create.
                </p>
                <p>
                  Today, with over 50 million devices manufactured and partnerships with global 
                  leaders like Costco and KU-2 Cosmetic, we're proud to have made that vision a reality.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                <p className="text-lg mb-6 opacity-90">
                  To democratize professional beauty technology by creating innovative, 
                  safe, and effective IPL devices that empower people to achieve 
                  professional results at home.
                </p>
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h4 className="font-semibold mb-3">Core Principles</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Innovation through research and development</li>
                    <li>• Quality without compromise</li>
                    <li>• Accessibility for all skin types</li>
                    <li>• Partnership-driven growth</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our values shape every decision we make and every product we create.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandValues.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that shaped our company and the IPL industry.
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
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl text-white mb-4 mx-auto">
                        {milestone.icon}
                      </div>
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

      {/* Team Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The People Behind iShine</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our success is built on the passion and expertise of our incredible team.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teamStory.map((story, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`h-48 ${story.image} flex items-center justify-center`}>
                  <div className="text-white text-center">
                    <Users className="h-16 w-16 mx-auto mb-4 opacity-80" />
                    <div className="text-lg font-semibold">{story.title}</div>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed">{story.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Looking Forward</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            As we continue to grow, our commitment remains unchanged: to innovate, 
            to improve, and to make professional beauty technology accessible to everyone, everywhere.
          </p>
          
          <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <div className="grid md:grid-cols-3 gap-8 text-white">
              <div>
                <div className="text-3xl font-bold mb-2">2025+</div>
                <div className="text-blue-100">Next Generation IPL</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Global</div>
                <div className="text-blue-100">Market Expansion</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Sustainable</div>
                <div className="text-blue-100">Manufacturing</div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Join Our Story
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandStoryPage;
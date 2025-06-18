import React from 'react';
import { Star, MapPin, TrendingUp, Users } from 'lucide-react';

const Clients = () => {
  const majorClients = [
    {
      name: "KU-2 Cosmetic",
      country: "Germany",
      logo: "K2",
      description: "Leading European beauty device brand",
      partnership: "5+ years",
      orderVolume: "100K+ units annually",
      specialization: "Premium IPL devices with advanced cooling technology"
    },
    {
      name: "Costco Wholesale",
      country: "Canada",
      logo: "CO",
      description: "Global retail giant",
      partnership: "3+ years",
      orderVolume: "200K+ units annually",
      specialization: "Consumer-grade IPL devices for mass market"
    },
    {
      name: "ROSESKINCO",
      country: "USA",
      logo: "RS",
      description: "Direct-to-consumer beauty brand",
      partnership: "2+ years",
      orderVolume: "50K+ units annually",
      specialization: "Smart app-controlled IPL devices"
    }
  ];

  const dtcSuccess = [
    {
      title: "Beauty Startup Success",
      description: "Helped a DTC brand go from 100 sample units to 10K monthly production",
      growth: "10,000% growth in 18 months",
      services: ["Custom design", "Private labeling", "Packaging", "Fulfillment"]
    },
    {
      title: "European Market Entry",
      description: "Supported a new brand's successful entry into the European beauty market",
      growth: "€2M revenue in first year",
      services: ["CE certification", "Localization", "Quality assurance", "Logistics"]
    },
    {
      title: "Premium Brand Partnership",
      description: "Developed exclusive IPL technology for luxury beauty brand",
      growth: "300% premium pricing achieved",
      services: ["R&D collaboration", "Exclusive features", "Luxury packaging", "Marketing support"]
    }
  ];

  const testimonials = [
    {
      quote: "iShine Technology's manufacturing expertise and attention to detail has been instrumental in our product success. Their ability to scale from small orders to large production runs is unmatched.",
      author: "Product Director",
      company: "Leading European Beauty Brand",
      rating: 5
    },
    {
      quote: "The quality consistency and technical innovation we get from iShine allows us to compete with the biggest brands in the market. Their OEM services are world-class.",
      author: "Founder & CEO",
      company: "DTC Beauty Startup",
      rating: 5
    }
  ];

  return (
    <section id="clients" className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Global Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From established retail giants to innovative DTC startups, we partner with brands 
            worldwide to bring cutting-edge IPL technology to market.
          </p>
        </div>

        {/* Major Clients */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {majorClients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              {/* Client Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{client.logo}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{client.name}</h3>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{client.country}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{client.description}</p>

              {/* Stats */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm font-medium text-gray-700">Partnership</span>
                  <span className="text-sm font-semibold text-blue-600">{client.partnership}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm font-medium text-gray-700">Order Volume</span>
                  <span className="text-sm font-semibold text-teal-600">{client.orderVolume}</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Specialization</h4>
                <p className="text-sm text-gray-700">{client.specialization}</p>
              </div>
            </div>
          ))}
        </div>

        {/* DTC Success Stories */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">DTC Brand Success Stories</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {dtcSuccess.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <TrendingUp className="h-6 w-6 text-green-500" />
                  <h4 className="font-bold text-gray-900">{story.title}</h4>
                </div>
                
                <p className="text-gray-600 mb-4">{story.description}</p>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 mb-6">
                  <div className="text-lg font-bold text-green-700">{story.growth}</div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-700 mb-2">Services Provided:</div>
                  {story.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <div className="text-center mb-12">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What Our Partners Say</h3>
            <p className="text-gray-600">Hear from brands that have experienced our manufacturing excellence</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                {/* Stars */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're a startup looking for your first 100 units or an established brand 
            planning your next product line, we have the expertise and capacity to support your growth.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Start Your Partnership Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default Clients;
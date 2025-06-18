import React from 'react';
import { Award, CheckCircle, Globe, TrendingUp } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "ISO 9001:2015",
      subtitle: "Quality Management"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "CE & FDA",
      subtitle: "Safety Certified"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Reach",
      subtitle: "50+ Countries"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "R&D Investment",
      subtitle: "15% Annual Revenue"
    }
  ];

  const clients = [
    { name: "KU-2 Cosmetic", country: "Germany", logo: "K2" },
    { name: "Costco", country: "Canada", logo: "CO" },
    { name: "ROSESKINCO", country: "USA", logo: "RS" },
    { name: "BeautyTech", country: "UK", logo: "BT" },
    { name: "SkinCare Pro", country: "Australia", logo: "SP" }
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 hover:from-blue-50 hover:to-teal-50 transition-all duration-300 group"
            >
              <div className="text-blue-600 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                {badge.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{badge.title}</h3>
              <p className="text-sm text-gray-600">{badge.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <p className="text-gray-600 mb-8 font-medium">Trusted by Leading Beauty Brands Worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group cursor-pointer transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-3 px-6 py-4 rounded-xl bg-gray-50 group-hover:bg-blue-50 transition-colors duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{client.logo}</span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                      {client.name}
                    </div>
                    <div className="text-sm text-gray-500">{client.country}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
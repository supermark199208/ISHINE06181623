import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, MapPin, Building, Cog, Package, Users, Mail } from 'lucide-react';

const SitemapPage = () => {
  const siteStructure = [
    {
      category: "Main Pages",
      icon: <Building className="h-5 w-5" />,
      pages: [
        { name: "Home", path: "/" },
        { name: "IPL Hair Removal", path: "/products" },
        { name: "Service & Support", path: "/services" },
        { name: "Clients", path: "/clients" },
        { name: "Contact", path: "/contact" }
      ]
    },
    {
      category: "About Section",
      icon: <Building className="h-5 w-5" />,
      pages: [
        { name: "About Us", path: "/about" },
        { name: "Company Profile", path: "/company-profile" },
        { name: "Manufacturing Capabilities", path: "/manufacturing-capabilities" },
        { name: "Quality Control", path: "/quality-control" }
      ]
    },
    {
      category: "Services Section",
      icon: <Cog className="h-5 w-5" />,
      pages: [
        { name: "OEM/ODM Solutions", path: "/oem-odm" },
        { name: "Product Design", path: "/product-design" },
        { name: "Production & Assembly", path: "/production-assembly" },
        { name: "Packaging & Logistics", path: "/packaging-logistics" }
      ]
    },
    {
      category: "Utility Pages",
      icon: <MapPin className="h-5 w-5" />,
      pages: [
        { name: "Sitemap", path: "/sitemap" }
      ]
    }
  ];

  const totalPages = siteStructure.reduce((total, section) => total + section.pages.length, 0);

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Site
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Map</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Complete navigation guide to all pages and sections of the iShine Technology website. 
              Find everything you need about our IPL manufacturing services and capabilities.
            </p>
            
            <div className="mt-8 inline-flex items-center px-6 py-3 bg-blue-100 text-blue-800 rounded-full">
              <Package className="h-5 w-5 mr-2" />
              <span className="font-medium">{totalPages} Total Pages</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {siteStructure.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <div className="flex items-center mb-8">
                  <div className="text-blue-600 mr-3">
                    {section.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{section.category}</h2>
                  <div className="ml-4 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                    {section.pages.length} pages
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {section.pages.map((page, pageIndex) => (
                    <Link
                      key={pageIndex}
                      to={page.path}
                      className="group block p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 border border-transparent hover:border-blue-200"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                          {page.name}
                        </h3>
                        <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                      </div>
                      
                      <div className="flex items-center text-xs text-gray-500">
                        <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                          {page.path}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Information */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Website Information</h2>
              <p className="text-gray-600">
                Technical details about our website structure and content organization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Site Statistics</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Total Pages: {totalPages}</li>
                  <li>• Main Sections: {siteStructure.length}</li>
                  <li>• Last Updated: {new Date().toLocaleDateString()}</li>
                  <li>• Language: English</li>
                  <li>• Mobile Responsive: Yes</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Content Focus</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• IPL Hair Removal Technology</li>
                  <li>• OEM/ODM Manufacturing Services</li>
                  <li>• Quality Control & Certifications</li>
                  <li>• Global Client Success Stories</li>
                  <li>• Product Design & Development</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl">
              <h3 className="font-semibold text-gray-900 mb-3">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <strong>Company:</strong> Shenzhen iShine Technology Co., Ltd
                </div>
                <div>
                  <strong>Industry:</strong> IPL Device Manufacturing
                </div>
                <div>
                  <strong>Email:</strong> sales@ishine-tech.com
                </div>
                <div>
                  <strong>Location:</strong> Shenzhen, Guangdong, China
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Quick Navigation</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              <Building className="h-4 w-4 mr-2" />
              Home
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-colors duration-200"
            >
              <Package className="h-4 w-4 mr-2" />
              IPL Hair Removal
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-colors duration-200"
            >
              <Cog className="h-4 w-4 mr-2" />
              Service & Support
            </Link>
            <Link
              to="/clients"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors duration-200"
            >
              <Users className="h-4 w-4 mr-2" />
              Clients
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-colors duration-200"
            >
              <Mail className="h-4 w-4 mr-2" />
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SitemapPage;
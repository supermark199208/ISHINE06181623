import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Globe } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "MENU",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Manufacturing", href: "/manufacturing-capabilities" },
        { name: "Quality Control", href: "/quality-control" },
        { name: "Careers", href: "#careers" },
        { name: "News", href: "#news" }
      ]
    },
    {
      title: "USEFUL LINKS",
      links: [
        { name: "After-Sales Services", href: "#after-sales" },
        { name: "Brand Story", href: "/brand-story" },
        { name: "Customization", href: "/product-design" },
        { name: "Quality", href: "/quality-control" },
        { name: "Videos", href: "#videos" },
        { name: "FAQs", href: "#faqs" }
      ]
    },
    {
      title: "CONTACT US",
      contactInfo: [
        { type: "tel", label: "Tel:", value: "86-371-62625998" },
        { type: "email", label: "Email:", value: "Info@iplmanufacturer.com" },
        { type: "urgent", label: "For Urgent Calls:", value: "+86-15900283962" },
        { type: "whatsapp", label: "WhatsApp:", value: "+86-15012891148" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Youtube className="h-5 w-5" />, href: "#", label: "YouTube" },
    { icon: <Globe className="h-5 w-5" />, href: "#", label: "Website" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <img 
                  src="/logo.png" 
                  alt="iShine Technology Logo" 
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <div className="font-bold text-xl">iShine Technology</div>
                  <div className="text-sm text-gray-400">IPL Manufacturing Excellence</div>
                </div>
              </Link>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading manufacturer of premium IPL hair removal devices, serving global beauty brands 
                with innovative OEM/ODM solutions and uncompromising quality standards.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:transform hover:-translate-y-1"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg mb-6">{section.title}</h3>
                
                {/* Regular Links */}
                {section.links && (
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        {link.href.startsWith('#') ? (
                          <a
                            href={link.href}
                            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                          >
                            {link.name}
                          </a>
                        ) : (
                          <Link
                            to={link.href}
                            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                          >
                            {link.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Contact Information */}
                {section.contactInfo && (
                  <div className="space-y-3">
                    {section.contactInfo.map((contact, contactIndex) => (
                      <div key={contactIndex} className="text-sm">
                        <span className="text-gray-400">{contact.label}</span>
                        <span className="text-gray-300 ml-1 whitespace-nowrap">{contact.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="font-semibold text-lg mb-2">Stay Updated</h3>
              <p className="text-gray-300 text-sm">
                Get the latest updates on IPL technology, industry insights, and company news.
              </p>
            </div>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2012-2025 Shenzhen iShine Technology Co., Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#cookies" className="hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
              <Link to="/sitemap" className="hover:text-white transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
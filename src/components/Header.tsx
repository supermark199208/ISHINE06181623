import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'IPL Hair Removal', 
      href: '/iplhairremoval',
      dropdown: [
        { name: 'Sapphire Hera IPL', href: '/iplhairremoval/sapphire' },
        { name: 'Alpha APP-Connect IPL', href: '/iplhairremoval/alpha' },
        { name: 'Emerald IPL', href: '/iplhairremoval/emerald' },
        { name: 'Ice Cooling Hestia IPL', href: '/iplhairremoval/hestia' },
        { name: 'Dual Lamp Euno IPL', href: '/iplhairremoval/euno' },
        { name: 'Handheld Themis IPL', href: '/iplhairremoval/themis' },
        { name: 'Sapphire Metis IPL', href: '/iplhairremoval/metis' },
        { name: 'Lene Wooden IPL', href: '/iplhairremoval/wooden' },
        { name: 'Hebe IPL', href: '/iplhairremoval/hebe' },
        { name: 'Handheld Eirene IPL', href: '/iplhairremoval/eirene' },
        { name: 'Handheld Nyx IPL', href: '/iplhairremoval/nyx' }
      ]
    },
    { 
      name: 'Services & Support', 
      href: '/services',
      megaMenu: {
        sections: [
          {
            title: 'Custom IPL Hair Removal Devices',
            items: [
              { name: 'OEM/ODM for Your Brand', href: '/custom-ipl/oem-odm' },
              { name: 'Unique Device Design', href: '/custom-ipl/design' },
              { name: 'Product Function Customization', href: '/custom-ipl/multi-function' },
              { name: 'App-Connected Devices', href: '/custom-ipl/smart-app' },
              { name: 'Pain-Free Ice Cooling', href: '/custom-ipl/cooling' },
              { name: 'Global Safety Compliance', href: '/custom-ipl/compliance' },
              { name: 'Branded Logo Printing', href: '/custom-ipl/logo-print' },
              { name: 'Dual-Lamp Configuration', href: '/custom-ipl/duallamp' },
              { name: 'Premium Packaging Design', href: '/custom-ipl/packaging' },
              { name: 'Multi-Head Configuration', href: '/custom-ipl/multi-head' },
              { name: 'IPL for Men', href: '/custom-ipl/men' },
              { name: 'Smart Skin Tone Sensors', href: '/custom-ipl/skinsensor' },
              { name: 'Custom Energy & Wavelengths', href: '/custom-ipl/customenery' },
              { name: 'Ongoing After-Sales Support', href: '/custom-ipl/aftersales' },
              { name: 'Scalable Mass Production', href: '/custom-ipl/massproduction' },
              { name: 'Expert Technical Guidance', href: '/custom-ipl/expertise' },
              { name: 'Low MOQ for Startups', href: '/custom-ipl/startups' },
              { name: 'DTC Brand Launch Support', href: '/custom-ipl/dtcsupport' },
              { name: 'Trusted B2B Partnerships', href: '/custom-ipl/partnership' },
              { name: 'All-in-One Manufacturing', href: '/custom-ipl/onestep' },
              { name: 'Earn Your Own FDA 510k', href: '/custom-ipl/fda-cleared' },
              { name: 'Global Shipping', href: '/custom-ipl/globalshipping' }
            ]
          },
          {
            title: 'Order IPL Devices Components',
            items: [
              { name: 'IPL Lamp Cartridges', href: '/components/lamp-cartridges' },
              { name: 'Optical Filters & Lenses', href: '/components/optical-filters' },
              { name: 'Cooling System Components', href: '/components/cooling-system' },
              { name: 'Control Circuit Boards', href: '/components/circuit-boards' },
              { name: 'Housing & Enclosures', href: '/components/housing-enclosures' },
              { name: 'Power Supply Units', href: '/components/power-supply' }
            ]
          }
        ],
        rightContent: [
          {
            type: 'large',
            title: 'Custom IPL Manufacturing',
            description: 'From concept to market-ready devices with complete OEM/ODM solutions',
            image: 'bg-gradient-to-br from-blue-600 to-teal-600',
            buttonText: 'Start Your Project',
            buttonLink: '/contact',
            size: '570x569'
          },
          {
            type: 'small',
            title: 'Quality Assurance',
            description: 'ISO certified manufacturing with 99.5% pass rate',
            image: 'bg-gradient-to-br from-green-600 to-emerald-600',
            size: '564x270'
          }
        ]
      }
    },
    { name: 'Blog', href: '/blog' },
    { 
      name: 'About', 
      href: '/about',
      dropdown: [
        { name: 'Company Profile', href: '/company-profile' },
        { name: 'Manufacturing Capabilities', href: '/manufacturing-capabilities' },
        { name: 'Quality Control', href: '/quality-control' }
      ]
    },
    { name: 'Contact', href: '/contact' }
  ];

  const isActivePath = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 ${isScrolled ? 'bg-white' : 'bg-transparent'} backdrop-blur-sm border-t-2 border-b-2 border-[#e8e5e8] z-50 transition-all duration-300 ease-out ${isScrolled ? 'h-[80px]' : 'h-[105px]'}`}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo - 左侧 */}
          <div className="flex-shrink-0 h-full flex items-center">
            <Link to="/home" className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <img 
                  src="https://i.imgur.com/D9NpQoD.png" 
                  alt="iShine Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-lg">iShine</div>
                <div className="text-xs text-gray-700 -mt-1">Empower your brand with IPL</div>
              </div>
            </Link>
          </div>

          {/* 桌面导航 - 居中 */}
          <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap relative ${
                    isActivePath(item.href)
                      ? 'text-blue-600'
                      : isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-900e hover:text-blue-400'
                  }`}
                >
                  {item.name}
                  {(item.dropdown || item.megaMenu) && (
                    <ChevronDown className={`ml-1 h-4 w-4 ${isScrolled ? 'text-gray-700' : 'text-gray-900'}`} />
                  )}
                  
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                </Link>
                
                {/* 下拉菜单 */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className={`block px-4 py-2 text-sm transition-colors duration-150 ${
                          isActivePath(subItem.href)
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
                {/* Mega Menu */}
                {item.megaMenu && activeDropdown === item.name && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-7xl bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 mt-2">
                    <div className="p-8">
                      <div className="grid grid-cols-12 gap-8">
                        {/* Left Side - Menu Sections */}
                        <div className="col-span-7">
                          {/* Custom IPL Hair Removal Devices - 22 items in 2 columns */}
                          <div className="mb-8">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                              {item.megaMenu.sections[0].title}
                            </h3>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                              {item.megaMenu.sections[0].items.map((menuItem, itemIndex) => (
                                <Link
                                  key={itemIndex}
                                  to={menuItem.href}
                                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-150"
                                >
                                  {menuItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Order IPL Devices Components - 6 items */}
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                              {item.megaMenu.sections[1].title}
                            </h3>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                              {item.megaMenu.sections[1].items.map((menuItem, itemIndex) => (
                                <Link
                                  key={itemIndex}
                                  to={menuItem.href}
                                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-150"
                                >
                                  {menuItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right Side - Content Blocks */}
                        <div className="col-span-5 space-y-4">
                          {/* Large Block (570x569 equivalent) */}
                          <div className="relative h-80 bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl overflow-hidden group cursor-pointer">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                            <div className="relative h-full p-6 flex flex-col justify-between text-white">
                              <div>
                                <h4 className="text-xl font-bold mb-3">Custom IPL Manufacturing</h4>
                                <p className="text-blue-100 text-sm leading-relaxed">
                                  From concept to market-ready devices with complete OEM/ODM solutions. 
                                  15+ years of expertise in IPL technology.
                                </p>
                              </div>
                              <div className="flex items-center justify-between">
                                <Link
                                  to="/contact"
                                  className="inline-flex items-center px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
                                >
                                  Start Your Project
                                </Link>
                                <div className="text-xs text-blue-200">570×569</div>
                              </div>
                            </div>
                          </div>

                          {/* Small Block (564x270 equivalent) */}
                          <div className="relative h-36 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl overflow-hidden group cursor-pointer">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                            <div className="relative h-full p-4 flex flex-col justify-between text-white">
                              <div>
                                <h4 className="text-lg font-bold mb-2">Quality Assurance</h4>
                                <p className="text-green-100 text-xs">
                                  ISO certified manufacturing with 99.5% pass rate
                                </p>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-medium">Learn More →</span>
                                <div className="text-xs text-green-200">564×270</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side - Language Selector */}
          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
            <LanguageSelector />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                      isActivePath(item.href)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  
                  {/* Mobile Dropdown Items */}
                  {item.dropdown && (
                    <div className="pl-4 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className={`block px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                            isActivePath(subItem.href)
                              ? 'text-blue-600 bg-blue-50'
                              : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Mobile Mega Menu Items */}
                  {item.megaMenu && (
                    <div className="pl-4 space-y-1">
                      {item.megaMenu.sections.map((section) => (
                        <div key={section.title}>
                          <div className="px-3 py-2 text-sm font-semibold text-gray-800">
                            {section.title}
                          </div>
                          {section.items.slice(0, 5).map((menuItem) => (
                            <Link
                              key={menuItem.name}
                              to={menuItem.href}
                              className="block px-6 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                              onClick={() => setIsOpen(false)}
                            >
                              {menuItem.name}
                            </Link>
                          ))}
                          {section.items.length > 5 && (
                            <div className="px-6 py-1 text-xs text-gray-500">
                              +{section.items.length - 5} more items
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
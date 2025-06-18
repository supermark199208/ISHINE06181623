import React, { useState, useRef } from 'react';
import { Palette, Lightbulb, Smartphone, Users, Eye, Zap, Upload, X, RotateCcw } from 'lucide-react';

const ProductDesignPage = () => {
  const [selectedDevice, setSelectedDevice] = useState(0);
  const [uploadedLogo, setUploadedLogo] = useState<string | null>(null);
  const [logoPosition, setLogoPosition] = useState({ x: 50, y: 30 });
  const [logoSize, setLogoSize] = useState(15);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const deviceModels = [
    {
      name: "Premium IPL Pro",
      image: "bg-gradient-to-br from-gray-800 to-gray-900",
      description: "Professional-grade device with advanced cooling",
      color: "Dark Titanium"
    },
    {
      name: "Smart IPL Connect",
      image: "bg-gradient-to-br from-blue-600 to-blue-800",
      description: "App-controlled device with smart features",
      color: "Ocean Blue"
    },
    {
      name: "Elegant IPL Rose",
      image: "bg-gradient-to-br from-pink-400 to-rose-600",
      description: "Stylish design for premium market",
      color: "Rose Gold"
    },
    {
      name: "Classic IPL White",
      image: "bg-gradient-to-br from-gray-100 to-gray-300",
      description: "Clean, minimalist design",
      color: "Pearl White"
    }
  ];

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedLogo(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    setUploadedLogo(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const resetPosition = () => {
    setLogoPosition({ x: 50, y: 30 });
    setLogoSize(15);
  };

  const designServices = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Industrial Design",
      description: "Creating beautiful, functional designs that reflect your brand identity and appeal to your target market.",
      features: [
        "Aesthetic design development",
        "Ergonomic optimization",
        "Brand identity integration",
        "Market trend analysis"
      ]
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation & Concept",
      description: "Transforming ideas into viable product concepts through creative thinking and technical expertise.",
      features: [
        "Concept development",
        "Innovation workshops",
        "Market opportunity analysis",
        "Technology feasibility studies"
      ]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "User Experience Design",
      description: "Designing intuitive interfaces and user experiences that make IPL devices easy and enjoyable to use.",
      features: [
        "User interface design",
        "Mobile app development",
        "User journey mapping",
        "Usability testing"
      ]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Technical Engineering",
      description: "Converting design concepts into manufacturable products with optimal performance and reliability.",
      features: [
        "Mechanical engineering",
        "Electronic design",
        "Optical system design",
        "Safety compliance"
      ]
    }
  ];

  const designProcess = [
    {
      phase: "Research & Discovery",
      description: "Understanding market needs, user preferences, and technical requirements",
      activities: [
        "Market research and analysis",
        "User persona development",
        "Competitive landscape study",
        "Technical requirement gathering"
      ]
    },
    {
      phase: "Concept Development",
      description: "Creating and refining design concepts that meet project objectives",
      activities: [
        "Ideation and brainstorming",
        "Concept sketching and visualization",
        "Design direction selection",
        "Initial feasibility assessment"
      ]
    },
    {
      phase: "Design Refinement",
      description: "Developing detailed designs with focus on aesthetics and functionality",
      activities: [
        "3D modeling and rendering",
        "Material and color selection",
        "Ergonomic optimization",
        "Brand integration"
      ]
    },
    {
      phase: "Prototyping & Testing",
      description: "Creating physical prototypes for validation and user testing",
      activities: [
        "Rapid prototyping",
        "User testing sessions",
        "Design iteration",
        "Performance validation"
      ]
    },
    {
      phase: "Production Preparation",
      description: "Finalizing designs for manufacturing with detailed specifications",
      activities: [
        "Manufacturing drawings",
        "Material specifications",
        "Quality standards definition",
        "Production tooling design"
      ]
    }
  ];

  const designCapabilities = [
    {
      category: "Aesthetic Design",
      description: "Creating visually appealing products that stand out in the market",
      capabilities: [
        "Modern and timeless design languages",
        "Color, material, and finish (CMF) design",
        "Brand-aligned visual identity",
        "Premium and accessible design options"
      ]
    },
    {
      category: "Functional Design",
      description: "Ensuring optimal user experience and product performance",
      capabilities: [
        "Ergonomic design for comfortable use",
        "Intuitive control interfaces",
        "Efficient heat dissipation",
        "Easy maintenance and cleaning"
      ]
    },
    {
      category: "Smart Features",
      description: "Integrating advanced technology for enhanced user experience",
      capabilities: [
        "Mobile app connectivity",
        "Smart skin detection",
        "Personalized treatment programs",
        "Progress tracking and analytics"
      ]
    },
    {
      category: "Safety & Compliance",
      description: "Designing for safety and regulatory compliance across global markets",
      capabilities: [
        "Safety mechanism integration",
        "Regulatory compliance design",
        "Risk assessment and mitigation",
        "International standard adherence"
      ]
    }
  ];

  const designShowcase = [
    {
      title: "Minimalist Premium Design",
      description: "Clean, sophisticated design for luxury beauty market",
      features: ["Premium materials", "Minimalist aesthetics", "Luxury packaging"]
    },
    {
      title: "Smart Connected Device",
      description: "App-controlled IPL with advanced user interface",
      features: ["Touch controls", "LED indicators", "Mobile connectivity"]
    },
    {
      title: "Ergonomic Comfort Design",
      description: "Optimized for extended use with superior comfort",
      features: ["Ergonomic grip", "Lightweight design", "Balanced weight distribution"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Product
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Design & Development</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your vision into market-ready IPL devices through our comprehensive 
              design and development services. From concept to production, we create products 
              that combine innovation, aesthetics, and functionality.
            </p>
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Design Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive design services covering every aspect of product development 
              from initial concept to production-ready specifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designServices.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Preview Tool */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Logo Preview
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Tool</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Upload your logo and see how it would look on different IPL device models. 
              Customize the position and size to visualize your branded product.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Device Selection and Preview */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Device Preview</h3>
                
                {/* Device Model Selector */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {deviceModels.map((device, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedDevice(index)}
                      className={`p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                        selectedDevice === index
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className={`w-full h-16 ${device.image} rounded-lg mb-3`}></div>
                      <div className="font-semibold text-gray-900 text-sm">{device.name}</div>
                      <div className="text-xs text-gray-600">{device.color}</div>
                    </button>
                  ))}
                </div>

                {/* Device Preview */}
                <div className="relative">
                  <div className="bg-gray-100 rounded-3xl p-8 flex items-center justify-center min-h-[400px]">
                    <div className="relative">
                      {/* Device Body */}
                      <div className={`w-48 h-80 ${deviceModels[selectedDevice].image} rounded-3xl shadow-2xl relative overflow-hidden`}>
                        {/* Device Details */}
                        <div className="absolute top-6 left-6 right-6">
                          <div className="w-full h-8 bg-black/20 rounded-lg mb-4"></div>
                          <div className="w-3/4 h-4 bg-black/10 rounded mb-2"></div>
                          <div className="w-1/2 h-4 bg-black/10 rounded"></div>
                        </div>
                        
                        {/* Logo Overlay */}
                        {uploadedLogo && (
                          <div
                            className="absolute cursor-move"
                            style={{
                              left: `${logoPosition.x}%`,
                              top: `${logoPosition.y}%`,
                              transform: 'translate(-50%, -50%)',
                              width: `${logoSize}%`,
                              maxWidth: '60px'
                            }}
                            onMouseDown={(e) => {
                              const startX = e.clientX;
                              const startY = e.clientY;
                              const startPosX = logoPosition.x;
                              const startPosY = logoPosition.y;

                              const handleMouseMove = (e: MouseEvent) => {
                                const deltaX = ((e.clientX - startX) / 192) * 100; // 192px is device width
                                const deltaY = ((e.clientY - startY) / 320) * 100; // 320px is device height
                                
                                setLogoPosition({
                                  x: Math.max(10, Math.min(90, startPosX + deltaX)),
                                  y: Math.max(10, Math.min(90, startPosY + deltaY))
                                });
                              };

                              const handleMouseUp = () => {
                                document.removeEventListener('mousemove', handleMouseMove);
                                document.removeEventListener('mouseup', handleMouseUp);
                              };

                              document.addEventListener('mousemove', handleMouseMove);
                              document.addEventListener('mouseup', handleMouseUp);
                            }}
                          >
                            <img
                              src={uploadedLogo}
                              alt="Logo preview"
                              className="w-full h-auto max-w-full opacity-90 filter drop-shadow-lg"
                              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
                            />
                          </div>
                        )}
                        
                        {/* Device Controls */}
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="w-full h-12 bg-black/20 rounded-xl flex items-center justify-center">
                            <div className="w-8 h-8 bg-white/30 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Device Info */}
                      <div className="text-center mt-6">
                        <h4 className="font-bold text-gray-900">{deviceModels[selectedDevice].name}</h4>
                        <p className="text-sm text-gray-600">{deviceModels[selectedDevice].description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Logo Upload and Controls */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Logo Upload & Controls</h3>
                
                {/* Upload Section */}
                <div className="mb-8">
                  <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-blue-400 transition-colors duration-300">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="hidden"
                      id="logo-upload"
                    />
                    <label htmlFor="logo-upload" className="cursor-pointer">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-lg font-semibold text-gray-700 mb-2">Upload Your Logo</p>
                      <p className="text-sm text-gray-500">PNG, JPG, SVG up to 10MB</p>
                    </label>
                  </div>
                  
                  {uploadedLogo && (
                    <div className="mt-4 flex items-center justify-between p-4 bg-green-50 rounded-xl">
                      <div className="flex items-center">
                        <img src={uploadedLogo} alt="Uploaded logo" className="w-8 h-8 object-contain mr-3" />
                        <span className="text-sm font-medium text-green-800">Logo uploaded successfully</span>
                      </div>
                      <button
                        onClick={removeLogo}
                        className="text-red-600 hover:text-red-800 transition-colors duration-200"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Logo Controls */}
                {uploadedLogo && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Logo Size</label>
                      <input
                        type="range"
                        min="8"
                        max="25"
                        value={logoSize}
                        onChange={(e) => setLogoSize(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Small</span>
                        <span>Large</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Position</label>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Horizontal</label>
                          <input
                            type="range"
                            min="10"
                            max="90"
                            value={logoPosition.x}
                            onChange={(e) => setLogoPosition(prev => ({ ...prev, x: Number(e.target.value) }))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Vertical</label>
                          <input
                            type="range"
                            min="10"
                            max="90"
                            value={logoPosition.y}
                            onChange={(e) => setLogoPosition(prev => ({ ...prev, y: Number(e.target.value) }))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={resetPosition}
                      className="flex items-center justify-center w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors duration-200"
                    >
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Reset Position & Size
                    </button>
                  </div>
                )}

                {/* Instructions */}
                <div className="mt-8 p-6 bg-blue-50 rounded-2xl">
                  <h4 className="font-semibold text-blue-900 mb-3">How to Use:</h4>
                  <ul className="text-sm text-blue-800 space-y-2">
                    <li>• Upload your logo file (PNG, JPG, or SVG)</li>
                    <li>• Select different device models to see variations</li>
                    <li>• Drag the logo on the device to reposition</li>
                    <li>• Use sliders to adjust size and fine-tune position</li>
                    <li>• Contact us to discuss your custom branding needs</li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <a
                    href="/contact"
                    className="block w-full text-center px-6 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Get Quote for Custom Branding
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Design Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured design methodology ensuring successful product development 
              from initial research to production-ready designs.
            </p>
          </div>

          <div className="space-y-12">
            {designProcess.map((phase, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold mr-4">
                        {index + 1}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{phase.phase}</h3>
                    </div>
                    <p className="text-gray-600">{phase.description}</p>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="grid md:grid-cols-2 gap-4">
                      {phase.activities.map((activity, activityIndex) => (
                        <div
                          key={activityIndex}
                          className="flex items-center p-3 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl"
                        >
                          <Eye className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Capabilities */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Design Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive design expertise covering aesthetics, functionality, 
              technology integration, and regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {designCapabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{capability.category}</h3>
                <p className="text-gray-600 mb-6">{capability.description}</p>
                
                <ul className="space-y-3">
                  {capability.capabilities.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <Users className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Design Showcase</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Examples of our design excellence across different market segments 
              and user requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {designShowcase.map((design, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Palette className="h-16 w-16 mx-auto mb-4 opacity-80" />
                    <div className="text-lg font-semibold">Design Concept</div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{design.title}</h3>
                  <p className="text-gray-600 mb-6">{design.description}</p>
                  
                  <div className="space-y-2">
                    {design.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Lightbulb className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Design Your Next Product?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let our design experts help you create IPL devices that stand out in the market 
            and deliver exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Design Project
            </a>
            <a
              href="/oem-odm"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              View OEM/ODM Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDesignPage;
import Header from '../components/Header';
import Contact from '../components/Contact';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Star, ShieldCheck, Truck, Package, Award, ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react';

const WoodenIPLPage = () => {
  const [mainImage, setMainImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [showZoom, setShowZoom] = useState(false);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section1Image = document.querySelector('#section1-image');
      if (section1Image) {
        const rect = section1Image.getBoundingClientRect();
        setIsHeaderSticky(rect.top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainImages = [
    '/images/product1.jpg',
    '/images/product2.jpg',
    '/images/product3.jpg',
    '/images/product4.jpg',
  ];

  const handlePrevImage = () => {
    setMainImage((prev) => (prev === 0 ? mainImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setMainImage((prev) => (prev === mainImages.length - 1 ? 0 : prev + 1));
  };

  const features = [
    "Long-lasting smooth skin - IPL destroys hair roots and prevents regrowth permanently",
    "Painless & gentle - ❄️ Ice cooling reduces heat sensation and irritation to a minimum",
    "Maximum flexibility - 9️⃣ intensity levels for face, legs, bikini area, armpits and more",
    "Saves time & money - 💰 No more expensive treatments at the beauty salon"
  ];

  const advantages = [
    {
      icon: <ShieldCheck className="w-12 h-12 text-blue-600" />,
      title: "365-Day Money-Back Guarantee",
      description: "If you're not satisfied with the product, we offer a 365-day unconditional refund"
    },
    {
      icon: <Truck className="w-12 h-12 text-blue-600" />,
      title: "Free Global Shipping",
      description: "All orders include free express delivery service"
    },
    {
      icon: <Package className="w-12 h-12 text-blue-600" />,
      title: "Secure Packaging",
      description: "Reinforced shock-proof packaging ensures safe delivery"
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: "Quality Assurance",
      description: "Certified by CE, ROHS and other international standards"
    }
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Sticky Header */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHeaderSticky ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
        <Header transparent />
      </div>

      {/* Initial Header */}
      <div className="relative z-40">
        <Header />
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 text-sm text-gray-500">
        <span className="hover:text-blue-600 cursor-pointer">Home</span> 
        <ArrowRight className="inline h-3 w-3 mx-1" /> 
        <span className="hover:text-blue-600 cursor-pointer">IPL Hair Removal</span> 
        <ArrowRight className="inline h-3 w-3 mx-1" /> 
        <span className="text-gray-700">iShine Sapphire</span>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Column - Product Image */}
            <div className="w-full md:w-1/2">
              <div className="max-w-[532px] mx-auto">
                <div 
                  id="section1-image" 
                  className="mb-6 rounded-2xl overflow-hidden shadow-lg relative group"
                  onMouseEnter={() => setShowControls(true)}
                  onMouseLeave={() => setShowControls(false)}
                >
                  <div className="aspect-square">
                    <img 
                      src={mainImages[mainImage]} 
                      alt="iShine Sapphire IPL Device"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Navigation Controls */}
                  <div className={`absolute inset-0 flex items-center justify-between px-4 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                    <button 
                      onClick={handlePrevImage}
                      className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={handleNextImage}
                      className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                  {/* Zoom Button */}
                  <button 
                    onClick={() => setShowZoom(true)}
                    className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {mainImages.map((image, index) => (
                    <div 
                      key={index}
                      className={`rounded-xl overflow-hidden cursor-pointer transition shadow-md transform hover:scale-105 ${mainImage === index ? 'ring-2 ring-blue-500' : 'hover:ring-2 hover:ring-gray-300'}`}
                      onClick={() => setMainImage(index)}
                    >
                      <img 
                        src={image} 
                        alt={`View ${index + 1}`}
                        className="w-full aspect-square object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Product Info */}
            <div className="w-full md:w-1/2">
              <div className="max-w-[600px]">
                <h1 className="text-4xl font-bold mb-6">iShine Sapphire IPL Hair Removal Device</h1>
                
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400 mr-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600">Based on 2,100+ customer reviews</span>
                </div>

                <div className="mb-8 bg-white p-6 rounded-xl shadow-sm">
                  <div className="mb-4">
                    <span className="line-through text-gray-500 text-2xl">$199.00</span>
                    <span className="text-4xl font-bold text-red-600 ml-4">$149.00</span>
                    <span className="block text-sm text-gray-500 mt-2">incl. VAT. Free shipping</span>
                  </div>
                  
                  <div className="text-sm text-gray-600 mb-4">
                    <p>✨ Limited time offer - Save $50 ✨</p>
                    <p>Only 45 units left in stock</p>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-lg font-medium">Quantity:</span>
                    <div className="border rounded-lg flex items-center">
                      <button 
                        className="px-4 py-2 text-xl hover:bg-gray-100 transition"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        -
                      </button>
                      <span className="px-6 py-2 border-x">{quantity}</span>
                      <button 
                        className="px-4 py-2 text-xl hover:bg-gray-100 transition"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold text-lg transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    Get a quote now
                  </button>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl mb-8">
                  <h2 className="text-xl font-semibold mb-4">✨ Say goodbye to unwanted hair with iShine Sapphire IPL ✨</h2>
                  <p className="mb-4 text-gray-700">
                    Experience the revolution of at-home hair removal: The iShine Sapphire IPL combines
                    clinically proven IPL technology with a soothing ❄️ ice cooling mode -
                    for visibly smoother skin in record time, completely without pain.
                  </p>
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {advantages.map((advantage, index) => (
                    <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                      <div className="flex justify-center mb-3">{advantage.icon}</div>
                      <h3 className="font-semibold mb-2">{advantage.title}</h3>
                      <p className="text-sm text-gray-600">{advantage.description}</p>
                    </div>
                  ))}
                </div>

                <div className="text-sm text-gray-500 space-y-2">
                  <p>365-day money-back guarantee | FREE RETURN SHIPPING</p>
                  <p>Model: SKN010</p>
                  <p>Category: IPL Hair Removal</p>
                  <p>Delivery time: 1-2 business days</p>
                  <p className="text-green-600 font-medium">✓ Ready to ship</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <hr className="border-gray-200 mb-16" />
          
          {/* First Detail Block */}
          <div className="flex flex-col md:flex-row gap-12 mb-16">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Revolutionary IPL Technology</h2>
              <p className="text-gray-600 text-lg">Experience professional-grade hair removal from the comfort of your home with our advanced IPL technology.</p>
            </div>
            <div className="w-full md:w-1/2">
              <img src="/images/detail1.jpg" alt="IPL Technology" className="w-[600px] h-[600px] object-cover rounded-2xl" />
            </div>
          </div>

          {/* Second Detail Block */}
          <div className="flex flex-col md:flex-row gap-12 mb-16">
            <div className="w-full md:w-1/2">
              <img src="/images/detail2.jpg" alt="Cooling System" className="w-[600px] h-[600px] object-cover rounded-2xl" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Ice-Cool Comfort</h2>
              <p className="text-gray-600 text-lg">Our unique cooling system ensures a comfortable and painless experience during every treatment session.</p>
            </div>
          </div>

          {/* Full Width Image */}
          <div className="mb-16">
            <img src="/images/detail3.jpg" alt="Full Experience" className="w-full h-[600px] object-cover rounded-2xl" />
          </div>

          {/* Third Detail Block */}
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2">
              <img src="/images/detail4.jpg" alt="Smart Features" className="w-[600px] h-[600px] object-cover rounded-2xl" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Smart Features</h2>
              <p className="text-gray-600 text-lg">Equipped with intelligent skin sensors and automatic power adjustment for safe and effective treatments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Specifications</h2>
          <div className="max-w-4xl mx-auto">
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 font-medium">ZUSÄTZLICHE INFORMATIONEN</td>
                  <td className="py-4"></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4">GEWICHT</td>
                  <td className="py-4">0.5 kg</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4">MARKE</td>
                  <td className="py-4">KU2 Cosmetics</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4">GEWICHT</td>
                  <td className="py-4">0.5 kg</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4">LIEFERUMFANG</td>
                  <td className="py-4">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Haarentfernungsgerät</li>
                      <li>Netzteil</li>
                      <li>Schutzbrille</li>
                      <li>Rasierer</li>
                      <li>Gebrauchsanweisung</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4">TECHNISCHE DATEN</td>
                  <td className="py-4">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Produktbezeichnung: IPL Gerät</li>
                      <li>Modelname: IPL Supersilk KU20</li>
                      <li>Nennleistung: 36 Watt</li>
                      <li>Nennspannung: 100-240 V, 50/60 Hz</li>
                      <li>Adaptertyp: DC 12V/3A</li>
                      <li>Lichtfläche: 3.3 cm²</li>
                      <li>Verwendete Technologie: IPL (Intense Pulsed Light)</li>
                      <li>Intensitätsstufen: 1.5-3.9 J/cm²</li>
                      <li>Wellenlänge: 510 – 1100 nm</li>
                      <li>Lebensdauer der Lampenröhre: 999999</li>
                      <li>Blitzzeiten Intensitätsstufen: 9 Stufen</li>
                      <li>Betriebsfeuchtigkeitsbereich: Relative Luftfeuchtigkeit 30%-60%</li>
                      <li>Betriebstemperatur: 5 ~ 35 ℃</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4">WARNHINWEISE</td>
                  <td className="py-4">
                    <ul className="list-disc list-inside space-y-1">
                      <li>WARNUNG: Das Gerät strahlt starke sichtbare und unsichtbare optische Strahlung ab, die Augenschäden verursachen kann.</li>
                      <li>WARNUNG: Vermeiden Sie die direkte Augeneinstrahlung.</li>
                      <li>ACHTUNG: Wenden Sie das Gerät nicht bei Kindern an.</li>
                      <li>ACHTUNG: Halten Sie das Gerät trocken.</li>
                      <li>WARNUNG: Bei Nichtbeachtung der Anweisungen können mögliche Augenschäden und eventueller Sehverlust oder Hautschäden die Folgen sein.</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Zoom Modal */}
      {showZoom && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-6xl mx-4">
            <button 
              onClick={() => setShowZoom(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={mainImages[mainImage]} 
              alt="Zoomed view"
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WoodenIPLPage;
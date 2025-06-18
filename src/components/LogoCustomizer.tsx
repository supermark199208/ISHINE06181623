import React, { useState, useRef } from 'react';
import { Upload, RotateCw, Move, ZoomIn, ZoomOut, Download, Mail } from 'lucide-react';

const LogoCustomizer = () => {
  const [selectedDevice, setSelectedDevice] = useState('basic');
  const [logo, setLogo] = useState(null);
  const [logoPosition, setLogoPosition] = useState({ x: 50, y: 30 });
  const [logoSize, setLogoSize] = useState(20);
  const [logoRotation, setLogoRotation] = useState(0);
  const fileInputRef = useRef(null);

  const devices = [
    {
      id: 'basic',
      name: 'Basic IPL Device',
      image: 'device-basic',
      color: 'from-gray-400 to-gray-600'
    },
    {
      id: 'app',
      name: 'App-Controlled Device',
      image: 'device-app',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 'ice',
      name: 'Ice Sensation Device',
      image: 'device-ice',
      color: 'from-cyan-400 to-cyan-600'
    }
  ];

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogo(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePositionChange = (axis, value) => {
    setLogoPosition(prev => ({
      ...prev,
      [axis]: Math.max(0, Math.min(100, value))
    }));
  };

  const resetCustomization = () => {
    setLogo(null);
    setLogoPosition({ x: 50, y: 30 });
    setLogoSize(20);
    setLogoRotation(0);
  };

  const selectedDeviceData = devices.find(d => d.id === selectedDevice);

  return (
    <section id="customize" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Interactive Logo Customizer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visualize your brand on our IPL devices. Upload your logo and see exactly 
            how it will look on the final product before placing your order.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Device Preview */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Device Preview</h3>
            
            {/* Device Selection */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {devices.map((device) => (
                <button
                  key={device.id}
                  onClick={() => setSelectedDevice(device.id)}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                    selectedDevice === device.id
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <div className={`h-12 bg-gradient-to-br ${device.color} rounded mb-2`}></div>
                  <div className="text-xs font-medium text-gray-700">{device.name}</div>
                </button>
              ))}
            </div>

            {/* Device Visualization */}
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-8 h-96 flex items-center justify-center overflow-hidden">
              {/* Device Shape */}
              <div className={`relative w-48 h-64 bg-gradient-to-br ${selectedDeviceData.color} rounded-2xl shadow-xl transform rotate-12`}>
                {/* Device Details */}
                <div className="absolute top-4 left-4 right-4 h-8 bg-black/20 rounded-lg"></div>
                <div className="absolute bottom-4 left-4 right-4 h-12 bg-black/10 rounded-lg"></div>
                
                {/* Logo Overlay */}
                {logo && (
                  <img
                    src={logo}
                    alt="Custom Logo"
                    className="absolute z-10 max-w-none"
                    style={{
                      left: `${logoPosition.x}%`,
                      top: `${logoPosition.y}%`,
                      width: `${logoSize}%`,
                      transform: `translate(-50%, -50%) rotate(${logoRotation}deg)`,
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                    }}
                  />
                )}
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-4">
                Current Device: <span className="font-medium">{selectedDeviceData.name}</span>
              </p>
              <button
                onClick={resetCustomization}
                className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                Reset Customization
              </button>
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-6">
            {/* Logo Upload */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Upload Your Logo</h4>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-400 transition-colors">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="hidden"
                />
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">
                  {logo ? 'Logo uploaded successfully!' : 'Click to upload your logo'}
                </p>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                >
                  {logo ? 'Change Logo' : 'Upload Logo'}
                </button>
              </div>
            </div>

            {/* Position Controls */}
            {logo && (
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Position & Size</h4>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Horizontal Position: {logoPosition.x}%
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="90"
                      value={logoPosition.x}
                      onChange={(e) => handlePositionChange('x', parseInt(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vertical Position: {logoPosition.y}%
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="90"
                      value={logoPosition.y}
                      onChange={(e) => handlePositionChange('y', parseInt(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Size: {logoSize}%
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="40"
                      value={logoSize}
                      onChange={(e) => setLogoSize(parseInt(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rotation: {logoRotation}°
                    </label>
                    <input
                      type="range"
                      min="-45"
                      max="45"
                      value={logoRotation}
                      onChange={(e) => setLogoRotation(parseInt(e.target.value))}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Next Steps</h4>
              <div className="space-y-3">
                <button className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Quote Request
                </button>
                <button className="w-full border-2 border-primary-600 text-primary-600 py-3 px-6 rounded-lg font-medium hover:bg-primary-50 transition-colors flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Preview
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Our team will contact you within 24 hours with a detailed quote
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCustomizer;
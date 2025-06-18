import React from 'react';
import { ArrowRight, Play, Shield, Zap, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Custom IPL Hair Removal Products
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              & IPL Molding Service
              </span>
            </h1>
            
            <div className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              <p className="mb-4">
                  .
              </p>
              <p>
                The IPL Products OEM Manufacturing Brand Behind The Brands. One-Stop Supplier For Molded IPL Products And IPL Molding Solution. From Idea To Market. Design it, build it, and box it.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-200 group">
                <Play className="mr-2 h-5 w-5 group-hover:text-blue-600" />
                Watch Factory Tour
              </button>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 rounded-3xl p-8 shadow-2xl">
              {/* Device mockup placeholder */}
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-600">Manufacturing Active</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-xl text-center">
                      <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-xs font-medium text-gray-700">IPL Technology</div>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-xl text-center">
                      <Shield className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                      <div className="text-xs font-medium text-gray-700">Safety First</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-xl text-center">
                      <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                      <div className="text-xs font-medium text-gray-700">Custom OEM</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Production Capacity</span>
                      <span className="text-sm text-blue-600 font-bold">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full w-[95%] transition-all duration-1000"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-bounce">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg animate-bounce delay-1000">
                <div className="w-6 h-6 bg-gradient-to-r from-orange-600 to-red-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
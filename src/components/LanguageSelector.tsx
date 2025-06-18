import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { useLanguage, languages } from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const { currentLanguage, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = (language: typeof languages[0]) => {
    setLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 rounded-lg hover:bg-gray-50"
      >
        <div className="flag-container">
          <span className="flag-icon">
            {currentLanguage.flag}
          </span>
        </div>
        <span className="hidden sm:inline">{currentLanguage.nativeName}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50 max-h-80 overflow-y-auto">
          <div className="px-4 py-2 border-b border-gray-100">
            <div className="flex items-center text-sm font-medium text-gray-700">
              <Globe className="h-4 w-4 mr-2" />
              Select Language
            </div>
          </div>
          
          <div className="py-2">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-blue-50 transition-colors duration-150 ${
                  currentLanguage.code === language.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                }`}
              >
                <div className="flag-container">
                  <span className="flag-icon">
                    {language.flag}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="font-medium">{language.nativeName}</div>
                </div>
                {currentLanguage.code === language.code && (
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
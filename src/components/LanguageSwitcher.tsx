import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'no', name: 'Norsk', flag: '🇳🇴' },
  { code: 'ro', name: 'Română', flag: '🇷🇴' },
  { code: 'hr', name: 'Hrvatski', flag: '🇭🇷' },
  { code: 'cs', name: 'Čeština', flag: '🇨🇿' },
  { code: 'sk', name: 'Slovenčina', flag: '🇸🇰' },
  { code: 'lb', name: 'Lëtzebuergesch', flag: '🇱🇺' },
  { code: 'uk', name: 'Українська', flag: '🇺🇦' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'fil', name: 'Filipino', flag: '🇵🇭' },
  { code: 'pt-BR', name: 'Português (Brasil)', flag: '🇧🇷' },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
      >
        <span className="text-xl">{currentLanguage.flag}</span>
        <span className="hidden sm:inline">{currentLanguage.name}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 max-h-96 overflow-y-auto z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className="flex items-center space-x-3 w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none"
            >
              <span className="text-xl">{language.flag}</span>
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
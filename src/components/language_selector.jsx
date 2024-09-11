import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Vlaggen URL's
const flags = {
  en: 'https://flagcdn.com/w40/gb.png', // Engelse vlag
  th: 'https://flagcdn.com/w40/th.png', // Thaise vlag
};

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language || 'en');

  const changeLanguage = () => {
    const newLanguage = selectedLanguage === 'en' ? 'th' : 'en';
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  // Toon de vlag van de andere taal
  const flagToShow = selectedLanguage === 'en' ? flags.th : flags.en;

  return (
    <div className='btn-container'>
      <button onClick={changeLanguage}>
        {/* Vlag tonen */}
        <img 
          src={flagToShow} 
          alt="Switch Language" 
          style={{ width: '48px', height: '28px' }}  // Groote aangepast
        />
      </button>
    </div>
  );
}

export default LanguageSelector;

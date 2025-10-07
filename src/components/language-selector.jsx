import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'he', name: 'עברית', flag: '🇮🇱' }
];

export function LanguageSelector({ variant = 'default' }) {
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguage();

  const currentLanguageData = languages.find(lang => lang.code === currentLanguage) || languages[0];
  
  // Icon-only outlined button to match ThemeToggle styling
  const iconButtonClasses = "inline-flex items-center justify-center rounded-lg text-sm font-medium h-10 w-10 relative border border-black dark:border-black bg-white dark:bg-white text-black dark:text-black";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={iconButtonClasses} title={t('common.language')}>
          <Globe className="h-5 w-5" />
          <span className="sr-only">{t('common.language')}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-white text-gray-900 border border-black dark:bg-white dark:text-gray-900 dark:border-black shadow-md">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className={`flex items-center gap-3 focus:bg-gray-100 dark:focus:bg-gray-100 dark:text-gray-900 ${
              currentLanguage === language.code 
                ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400' 
                : ''
            }`}
          >
            <span className="text-lg">{language.flag}</span>
            <span className="flex-1">{language.name}</span>
            {currentLanguage === language.code && (
              <span className="text-indigo-600 dark:text-indigo-400">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

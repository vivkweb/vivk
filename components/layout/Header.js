import { motion } from 'framer-motion'
import { Sun, Moon, Globe } from 'lucide-react'

export default function Header({ darkMode, setDarkMode, currentLanguage, setCurrentLanguage }) {
  const languages = [
    { code: 'ar', name: 'العربية' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' }
  ]

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
            V
          </div>
          <span className="text-xl font-bold">Vivk AI</span>
        </motion.div>
        
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="hover:text-blue-500 transition-colors">الميزات</a>
            <a href="#chat" className="hover:text-blue-500 transition-colors">المحادثة</a>
            <a href="#api" className="hover:text-blue-500 transition-colors">API</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            {/* تبديل اللغة */}
            <div className="relative group">
              <button className="flex items-center space-x-1 p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                <Globe size={18} />
                <span>{languages.find(lang => lang.code === currentLanguage)?.name}</span>
              </button>
              <div className="absolute hidden group-hover:block right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => setCurrentLanguage(language.code)}
                    className="block w-full text-right px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {language.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* تبديل الوضع الداكن */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
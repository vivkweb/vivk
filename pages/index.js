import { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Header from '../components/layout/Header'
import Hero from '../components/sections/Hero'
import Features from '../components/sections/Features'
import ChatInterface from '../components/chat/ChatInterface'
import ApiIntegration from '../components/sections/ApiIntegration'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('ar')

  useEffect(() => {
    // التحقق من تفضيلات المستخدم للنظام
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    // تطبيق وضع الألوان
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Head>
        <title>Vivk AI - منصة الذكاء الاصطناعي المتكاملة</title>
        <meta name="description" content="منصة ذكاء اصطناعي فريدة تتفوق على DeepSeek" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
      />
      
      <main>
        <Hero />
        <Features />
        <ChatInterface />
        <ApiIntegration />
      </main>
    </div>
  )
}
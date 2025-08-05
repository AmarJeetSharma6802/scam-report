// app/page.js
'use client'

import { useTranslation } from 'react-i18next'

export default function HomePage() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{t('welcome')}</h1>
      <p>{t('about')}</p>

      <div style={{ marginTop: '2rem' }}>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('hi')}>हिंदी</button>
        <button onClick={() => changeLanguage('ta')}>தமிழ்</button>
        <button onClick={() => changeLanguage('gu')}>ગુજરાતી</button>
        <button onClick={() => changeLanguage('mr')}>मराठी</button>
      </div>
    </main>
  )
}

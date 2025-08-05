// app/[locale]/page.tsx
'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export default function HomePage({ params }) {
  const t = useTranslations('translation');
  const router = useRouter();
  const pathname = usePathname();
  const [lang, setLang] = useState(params.locale || 'en');

  useEffect(() => {
    const newLang = params.locale || 'en';
    setLang(newLang);
  }, [params.locale]);

  const changeLanguage = (lng) => {
    router.push(`/${lng}${pathname}`);
  };

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
  );
}
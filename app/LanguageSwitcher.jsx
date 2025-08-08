'use client';

import {useRouter, usePathname} from 'next-intl/client';
import {useLocale} from 'next-intl';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const changeLanguage = (e) => {
    const newLocale = e.target.value;
    router.replace(pathname, {locale: newLocale});
  };

  return (
    <select onChange={changeLanguage} value={locale} style={{padding: '5px'}}>
      <option value="en">English</option>
      <option value="hi">हिंदी</option>
      <option value="gu">ગુજરાતી</option>
    </select>
  );
}

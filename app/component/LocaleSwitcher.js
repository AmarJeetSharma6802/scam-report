'use client';

import { usePathname, useRouter } from 'next/navigation';

const locales = ['en', 'hi', 'fr', 'es', 'de'];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e) => {
    const newLocale = e.target.value;
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  return (
    <select onChange={handleChange} defaultValue={pathname.split('/')[1]}>
      {locales.map((loc) => (
        <option key={loc} value={loc}>
          {loc.toUpperCase()}
        </option>
      ))}
    </select>
  );
}

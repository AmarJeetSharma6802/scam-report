// import {NextIntlClientProvider, hasLocale} from 'next-intl';
// import {notFound} from 'next/navigation';
// import {routing} from '../i18n/routing';
 
// export default async function LocaleLayout({
//   children,
//   params
// }: {
//   children: React.ReactNode;
//   params: Promise<{locale: string}>;
// }) {
//   // Ensure that the incoming `locale` is valid
//   const {locale} = await params;
//   if (!hasLocale(routing.locales, locale)) {
//     notFound();
//   }
 
//   return (
//     <html lang={locale}>
//       <body>
//         <NextIntlClientProvider>{children}</NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }

import { ReactNode } from "react";
import LanguageSwitcher from "../LanguageSwitcher";

interface LocaleLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = params;
  const messages = await getMessages(); // <- isko bhi type de sakte ho

  return (
    <html lang={locale}>
      <body>
        <LanguageSwitcher />
        {children}
      </body>
    </html>
  );
}

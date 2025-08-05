import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return ['en', 'hi', 'fr', 'de', 'es'].map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const { locale } = params;
  let messages;
  try {
    messages = require(`../../locales/${locale}.json`);
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <p>{messages.hello}</p>
        {children}
      </body>
    </html>
  );
}

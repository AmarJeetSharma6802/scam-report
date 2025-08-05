import { notFound } from 'next/navigation';

export default async function RootLayout({ children, params }) {
  const { locale } = params;
  let messages;

  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    notFound(); // 404 if language file not found
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

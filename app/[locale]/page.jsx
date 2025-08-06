export async function generateStaticParams() {
  return ['en', 'hi', 'fr', 'de', 'es'].map((locale) => ({ locale }));
}

export default async function HomePage({ params }) {
  const locale = params?.locale;

  const messages = (await import(`../../locales/${locale}.json`)).default;

  return (
    <div>
      <h1>{messages.title}</h1>
      <p>{messages.description}</p>
    </div>
  );
}

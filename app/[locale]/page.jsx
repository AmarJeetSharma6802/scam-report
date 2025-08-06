export default async function HomePage({ params }) {
  const { locale } = params;
  const messages = (await import(`../../locales/${locale}.json`)).default;

  return (
    <div>
      <h1>{messages.title}</h1>
      <h1>{messages.description}</h1>
    </div>
  );
}

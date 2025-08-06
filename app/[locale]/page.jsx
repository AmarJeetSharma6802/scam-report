export default async function HomePage({ params }) {
  const { locale } = params;
  const messages = (await import(`../../locales/${locale}.json`)).default;

  return (
    <div>
      <h2>{messages.welcome}</h2>
      <p>{messages.description}</p>
    </div>
  );
}
export default async function HomePage({ params }) {
  const { locale } = params;
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <div>
      <h1>{messages.title}</h1>
      <p>{messages.description}</p>
    </div>
  );
}

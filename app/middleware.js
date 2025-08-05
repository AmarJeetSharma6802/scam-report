import { NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';

acceptLanguage.languages(['en', 'hi', 'fr', 'de', 'es']);

export function middleware(req) {
  let locale = req.cookies.get('NEXT_LOCALE')?.value;

  if (!locale) {
    locale = acceptLanguage.get(req.headers.get('accept-language'));
  }

  if (!locale) locale = 'en';

  return NextResponse.redirect(new URL(`/${locale}`, req.url));
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
};

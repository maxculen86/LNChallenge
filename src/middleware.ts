import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const locales = ['en', 'es']
const defaultLocale = 'es'

// Function to determine the best locale based on cookies or headers
function getLocale(request: NextRequest): string {
  // 1. Check cookie
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale
  }

  // 2. Check 'Accept-Language' header
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales)
  const headerLocale = match(languages, locales, defaultLocale)
  return headerLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if the pathname is missing a locale prefix
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale prefix
  if (pathnameIsMissingLocale) {
    // Always use defaultLocale for the root path, otherwise determine from request
    const locale = pathname === '/' ? defaultLocale : getLocale(request);

    // Ensure the pathname used for redirection doesn't double the slash if it's not the root
    const targetPath = pathname === '/' ? '' : pathname;
    const redirectUrl = new URL(`/${locale}${targetPath}`, request.url)

    // Preserve search parameters
    redirectUrl.search = request.nextUrl.search;

    return NextResponse.redirect(redirectUrl)
  }

  // If locale is present in the path, store it in a cookie and continue
  const segments = pathname.split('/');
  const currentLocale = segments[1]; // e.g., 'en' or 'es'

  if (locales.includes(currentLocale)) {
    const response = NextResponse.next()
    // Set cookie to remember the locale for subsequent requests
    response.cookies.set('NEXT_LOCALE', currentLocale, { path: '/', maxAge: 60 * 60 * 24 * 30 }) // Cookie expires in 30 days
    return response
  }

  // Fallback if something unexpected happens
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (static image files)
     * - fonts (static font files)
     * Match the root path '/' explicitly as well.
     */
    '/', // Match the root path explicitly
    '/((?!api|_next/static|_next/image|images|fonts|favicon.ico).*)', // Match other paths excluding specified ones
  ],
}

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'es']
const defaultLocale = 'es'

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname
  console.log("Middleware triggered for Pathname:", pathname); // Log entry

  // Check if the pathname is missing a locale prefix
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale prefix in the path
  if (pathnameIsMissingLocale) {
    // Prepend the default locale
    console.log(`Pathname "${pathname}" is missing locale. Redirecting to '/${defaultLocale}${pathname}'`);
    // Ensure the pathname used for redirection doesn't double the slash if it's not the root
    const targetPath = pathname === '/' ? '' : pathname;
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${targetPath}`, request.url)
    )
  }

  // If locale is present, continue
  console.log(`Pathname "${pathname}" has locale. Continuing.`);
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

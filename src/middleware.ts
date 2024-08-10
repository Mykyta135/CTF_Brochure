import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['931837', '504912'],

    // Used when no locale matches
    defaultLocale: '504912',
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(504912|931837)/:path*']
};
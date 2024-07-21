/**
 * Public routes that does not need the user to be authenticated
 * @type {string[]}
 */
export const publicRoutes = ['/'];

/**
 * Public routes that need the user to be authenticated
 * @type {string[]}
 */
export const authRoutes = ['/auth/login', '/auth/register', '/auth/error'];

/**
 * These routes used for interacting with the auth purposes
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

export const DEFAULT_LOGIN_REDIRECT = '/settings';

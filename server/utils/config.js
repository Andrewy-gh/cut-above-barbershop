import 'dotenv/config';

export const DATABASE_URL =
  process.env.NODE_ENV === 'development'
    ? process.env.DEV_DATABASE_URL
    : process.env.DATABASE_URL;
export const PORT =
  process.env.NODE_ENV === 'development'
    ? process.env.DEV_PORT
    : process.env.PROD_PORT;
export const REDIS_URL = process.env.REDIS_URL;
export const SESSION_SECRET = process.env.SESSION_SECRET;
export const CLIENT_URL =
  process.env.NODE_ENV === 'development'
    ? process.env.DEV_CLIENT_URL
    : process.env.PROD_CLIENT_URL;
export const EMAIL_SERVICE =
  process.env.NODE_ENV === 'development'
    ? process.env.DEV_EMAIL_SERVICE
    : process.env.EMAIL_SERVICE;
export const EMAIL_USER =
  process.env.NODE_ENV === 'development'
    ? process.env.DEV_EMAIL_USER
    : process.env.EMAIL_USER;
export const EMAIL_PASSWORD =
  process.env.NODE_ENV === 'development'
    ? process.env.DEV_EMAIL_PASSWORD
    : process.env.EMAIL_PASSWORD;

export const env = 'development';
export const host = 'localhost';
export const port = 3000;
export const connectionString = process.env.DATABASE_URL  || 'postgres://localhost:5432/todo';
export default function (){}
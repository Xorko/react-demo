/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: 'https://jsonplaceholder.typicode.com',
    NEXT_PUBLIC_API_MOCKING: false,
  },
};

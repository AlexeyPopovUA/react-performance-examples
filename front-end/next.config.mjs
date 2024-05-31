/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    reactStrictMode: true,
    output: 'export',
    experimental: {
        reactCompiler: true,
    },
};

export default nextConfig;

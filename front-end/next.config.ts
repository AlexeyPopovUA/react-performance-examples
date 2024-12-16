import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
    trailingSlash: true,
    reactStrictMode: true,
    output: 'export',
    experimental: {
        reactCompiler: true,
    },
};

export default nextConfig;

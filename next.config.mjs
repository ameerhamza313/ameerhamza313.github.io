/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/next-portfolio",
  // assetPrefix: "/next-portfolio/",
  output: "export",
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js"],
  eslint: {
    dirs: ["src"],
  },
  images: {
    loader: "default",
    // path: "/next-portfolio/",
    domains: ["flagcdn.com"],
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
    };

    return config;
  },
};

// Export the configuration using ESM syntax
export default nextConfig;

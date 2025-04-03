/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "resizer.glanacion.com",
        pathname: "/resizer/**",
      },
      {
        protocol: "https",
        hostname: "especiales.lanacion.com.ar",
      },
    ],
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/fonts/:path*",
          destination:
            "https://especiales.lanacion.com.ar/arc-css/css/fonts/:path*",
        },
      ],
    };
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      type: "asset/resource",
      generator: {
        emit: false,
      },
    });
    return config;
  },
};

module.exports = nextConfig;

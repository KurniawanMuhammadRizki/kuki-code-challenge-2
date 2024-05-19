/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
const nextConfig = {
  images: {
    domains: ["kukilabs.id", "res.cloudinary.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next",
          outputPath: "static/videos",
          name: "[name].[ext]",
        },
      },
    });
    return config;
  },
};

export default nextConfig;

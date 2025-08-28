const path = require("path");

module.exports = {
  experimental: {
    // Enable modern JavaScript features
    esmExternals: "loose",
    // Better tree shaking
    optimizePackageImports: ["react", "react-dom"],
  },
  sassOptions: {
    includePaths: [path.resolve(__dirname, "./src")],
    prependData: '@import "src/assets/scss/variables";',
  },
  images: {
    domains: [
      "images.ctfassets.net", // Contentful images
      "downloads.ctfassets.net", // Contentful images
      "images.unsplash.com", // Storybook placeholder images
    ],
    deviceSizes: [82, 110, 140, 640, 750, 828, 1080, 1200, 1920, 2048],
  },
  // Module path mapping (replaces babel-plugin-module-resolver)
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // Add your module aliases here
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@sections": path.resolve(__dirname, "src/sections"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@services": path.resolve(__dirname, "src/services"),
      "@views": path.resolve(__dirname, "src/views"),
      "@config": path.resolve(__dirname, "src/config"),
      // Also add the old-style aliases for backward compatibility
      components: path.resolve(__dirname, "src/components"),
      sections: path.resolve(__dirname, "src/sections"),
      assets: path.resolve(__dirname, "src/assets"),
      services: path.resolve(__dirname, "src/services"),
      views: path.resolve(__dirname, "src/views"),
      config: path.resolve(__dirname, "src/config"),
      pages: path.resolve(__dirname, "src/pages"),
    };
    return config;
  },
};

/** @format */

// postcss.config.js
module.exports = (ctx) => {
  const isMeteor = ctx.meteor; // Check if Meteor context is available

  const config = {
    plugins: {
      tailwindcss: {},
      // Use autoprefixer in all environments, not just production
      autoprefixer: {
        overrideBrowserslist: ["defaults"],
      },
    },
  };

  // Use autoprefixer only in production for Meteor context
  if (isMeteor && ctx.env === "production") {
    config.plugins.autoprefixer = {
      overrideBrowserslist: ["defaults"],
    };
  }

  return config;
};

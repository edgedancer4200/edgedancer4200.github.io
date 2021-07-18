const path = require('path');

require("dotenv").config({
  path: path.resolve(`${process.cwd()}.env.${process.env.NODE_ENV}`)
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Carlos Barrios, developer"
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-react-helmet",
  ],
};

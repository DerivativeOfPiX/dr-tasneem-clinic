module.exports = {
  siteMetadata: {
      title: `DrTasneemClinic`,
    siteUrl: `https://drtasneemsclinic.com`
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-fontawesome-css", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};
let path = require('path');

module.exports = {
  siteMetadata: {
    title: `Східниця Таксі`,
    description: `gatsby-hospitality-core`,
    author: `gatsby-hospitality-core`,
    siteUrl: 'https://skhidnysia.netlify.app/'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `/images`,
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://netlify.us19.list-manage.com/subscribe/post?u=42cbac8ab50c337705fc6ec2d&amp;id=82e9f85efa',  
          timeout: 3500,  
      },
    },
    { 
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 5000
      }
    },
    `gatsby-transformer-json`,
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uk`,
        path: `${__dirname}/content/uk/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `en`,
        path: `${__dirname}/content/en/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/templates`,
        name: "templates",
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `${__dirname}/static/icons/favicon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyForNull: `uk`,
        langKeyDefault: `uk`,
        useLangKeyLayout: false,
        prefixDefault: false,
      },
    },
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          '~': path.resolve(__dirname, 'src'),
          '~c': path.resolve(__dirname, 'src/components'),
          '~p': path.resolve(__dirname, 'src/pages'),
          '~s': path.resolve(__dirname, 'src/store'),
          '~d': path.resolve(__dirname, 'content'),
          '~r': path.resolve(__dirname, 'src/redux'),
          '~h': path.resolve(__dirname, 'src/hooks'),
          '~u': path.resolve(__dirname, 'src/utils'),
          '~style': path.resolve(__dirname, 'src/styles'),
          '~f': path.resolve(__dirname, 'src/fonts'),
          '~img': path.resolve(__dirname, 'static/images'),
          '~ic': path.resolve(__dirname, 'static/icons')
        }
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', 
  ],
}



 
	// <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
 
	// <input type="text" value="" name="MMERGE1" class="" id="mce-MMERGE1">
 
	// <input type="text" name="MMERGE5" class="" value="" id="mce-MMERGE5">
 
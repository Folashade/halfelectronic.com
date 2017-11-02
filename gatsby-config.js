module.exports = {
  siteMetadata: {
    title: 'halfelectronic.com',
    author: 'Fernando Poumian',
    siteUrl: 'https://www.halfelectronic.com',
    disqus: {
      shortname: 'fernando-codes',
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `g1j45oe19wh0`,
        accessToken: `804cfb4a7c7973acb081dbdf3f475aaad38bc7d2a16ca68f3b1a976f1a636d7f`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      // options: {
      //   plugins: [
      //     {
      //       resolve: `gatsby-remark-images`,
      //       options: {
      //         maxWidth: 590,
      //       },
      //     },
      //     {
      //       resolve: `gatsby-remark-responsive-iframe`,
      //       options: {
      //         wrapperStyle: `margin-bottom: 1.0725rem`,
      //       },
      //     },
      //     'gatsby-remark-prismjs',
      //     'gatsby-remark-copy-linked-files',
      //     'gatsby-remark-smartypants'
      //   ],
      // },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: "gatsby-plugin-typography",
    //   options: {
    //     pathToConfigModule: "src/utils/typography",
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat`, `Noto Serif`, `Varela Round`],
      },
    },

  ],
}

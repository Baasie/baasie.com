module.exports = {
  siteMetadata: {
    siteUrl: `https://baasie.com`,
    title: `Baasie.com`,
    titleTemplate: "%s - In accordance to nature",
    description: `A site about everything I do in tech`,
    url: "https://baasie.com",
    twitterUsername: "@kenny_baas",
    defaultKeywords:
        "Domain-Driven Design, Domain Driven Design, Behaviour-Driven Development, Software Architecture, Socio-technical, Sociotechnical, Socio-technical architecture, Sociotechnical architecture, Microservices, cqrs/es, evenstorming, event storming, strategic design, organisational design",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-remark-images`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        defaultLayouts: {
          default: require.resolve(`./src/templates/layout.tsx`),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `header-link-icon`,
              maintainCase: false,
              removeAccents: true,
              isIconAfterHeader: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: true,
              maxWidth: 1000,
              wrapperStyle: (result) => `width: 100%;margin-left: 0;`,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [
                `md`,
                `mdx`,
                `png`,
                `jpg`,
                `jpeg`,
                `bmp`,
                `tiff`,
              ],
            },
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `content`,
    //     path: `${__dirname}/src/content`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop", "build-javascript"],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    `gatsby-plugin-styled-components`,
  ],
};

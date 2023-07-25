// require("dotenv").config();

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby_blog`,
    siteUrl: `https://www.yourdomain.tld`,
  },

  graphqlTypegen: true,
  flags: {
    DEV_SSR: true
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `y7vuq0by0w4f`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `experience`,
        path: `${__dirname}/experience`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `stack`,
        path: `${__dirname}/stack`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project`,
        path: `${__dirname}/project`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Byul's Blog`,
        short_name: `Blog`,
        start_url: `/`,
        icon: `src/images/favicon.png`,
        display: `standalone`,
      },
    },
  ]
};

export default config;

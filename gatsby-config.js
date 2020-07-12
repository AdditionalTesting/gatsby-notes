module.exports = {
  pathPrefix:"/gatsby-notes",
  siteMetadata: {
    title: 'gatsby-starter-code-notes',
    description: `A starter for gatsby-theme-code-notes`,
    author: 'Zander',
    siteUrl: 'https://notes.albertb.dev'
  },
  plugins: [
    'gatsby-plugin-cname',
    {
      resolve: 'gatsby-theme-code-notes',
      options: {
        contentPath: '/',
        basePath: '/',
        showThemeInfo: true,
        showDescriptionInSidebar: true,
      },
    },
  ],
}

module.exports = {
  pathPrefix:"/gatsby-notes",
  siteMetadata: {
    title: 'gatsby-starter-code-notes',
    description: `A starter for gatsby-theme-code-notes`,
    author: 'Zander',
    siteUrl: 'https://notes.albertb.dev'
  },
  plugins: [
    {
      resolve: 'gatsby-theme-code-notes',
      options: {
        contentPath: 'notes',
        basePath: '/',
        showThemeInfo: true,
        showDescriptionInSidebar: true,
      },
      'gatsby-plugin-cname'
    },
  ],
}

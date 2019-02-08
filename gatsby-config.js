module.exports = {
    plugins: [
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icons: [
                    {
                      src: '/favicon.png',
                      sizes: '192x192',
                    },
                  ],
            }
        },
        `gatsby-plugin-react-helmet`
    ]
}
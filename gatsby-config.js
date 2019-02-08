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
        {
         resolve:`gatsby-plugin-react-helmet`
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                displayName: false
            }
        }
    ]
}
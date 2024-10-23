import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'
import path from 'path'

const googleStructuredDataString = `
[ {
  "@context" : "http://schema.org",
  "@type" : "SoftwareApplication",
  "name" : "LINE Pay Merchant",
  "url" : "https://github.com/mirror-media/line-pay-merchant",
  "author" : {
    "@type" : "Organization",
    "name" : "MirrorMedia"
  },
  "datePublished" : "2022-06-09T06:15:47",
  "publisher" : {
    "@type" : "Organization",
    "name" : "MirrorMedia"
  },
  "downloadUrl" : "https://www.npmjs.com/package/@mirrormedia/line-pay-merchant",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "applicationCategory": "DeveloperApplication"
}]
`

export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {}
  }),
  // site config
  base: '/line-pay-merchant/',
  lang: 'en-US',
  title: 'LINE Pay Merchant',
  description:
    'LINE Pay Merchant is a JavaScript (Node.js) library for integrating LINE Pay V3 Online APIs. The goal of this library is to help developers build reliable LINE Pay applications. It handles tedious jobs to help developers focus on business logic and ideas that produce value.',

  markdown: {
    importCode: {
      handleImportPath: str =>
        str.replace(/^@/, path.resolve(__dirname, '../../src'))
    }
  },

  head: [
    [
      'script',
      {
        type: 'application/ld+json'
      },
      googleStructuredDataString
    ]
  ],

  plugins: [
    sitemapPlugin({
      hostname: 'https://mirror-media.github.io/line-pay-merchant'
    })
  ],

  // theme and its config
  theme: defaultTheme({
    navbar: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/guide/getting-started'
      },
      {
        text: 'API Reference',
        link: '/api-reference/request'
      },
      {
        text: 'Resources',
        children: [
          {
            text: 'Official Documentation',
            children: [
              {
                text: 'Online API V3 Guide',
                link: 'https://pay.line.me/tw/developers/apis/onlineApis?locale=en_US'
              },
              {
                text: 'Test flow',
                link: 'https://pay.line.me/tw/developers/techsupport/sandbox/testflow?locale=en_US'
              },
              {
                text: 'Channel ID & SK',
                link: 'https://pay.line.me/tw/developers/techsupport/sandbox/channel?locale=en_US'
              }
            ]
          },
          {
            text: 'Installation',
            children: [
              {
                text: 'npm',
                link: 'https://www.npmjs.com/package/@mirrormedia/line-pay-merchant'
              },
              {
                text: 'Yarn',
                link: 'https://yarnpkg.com/package/@mirrormedia/line-pay-merchant'
              }
            ]
          }
        ]
      },
      {
        text: 'GitHub',
        link: 'https://github.com/mirror-media/line-pay-merchant'
      }
    ],
    sidebar: {
      '/': [
        {
          text: 'Home',
          children: ['/']
        }
      ],
      '/guide/': [
        {
          text: 'Guide',
          children: [
            '/guide/getting-started.md',
            '/guide/handlers.md',
            '/guide/further-details.md'
          ]
        }
      ],
      '/api-reference/': [
        {
          text: 'Reference',
          children: [
            '/api-reference/request.md',
            '/api-reference/confirm.md',
            '/api-reference/capture.md',
            '/api-reference/void.md',
            '/api-reference/refund.md',
            '/api-reference/payment-details.md',
            '/api-reference/check-payment-status.md',
            '/api-reference/check-regkey.md',
            '/api-reference/pay-preapproved.md',
            '/api-reference/expire-regkey.md',
            '/api-reference/common.md'
          ]
        }
      ]
    }
  })
})

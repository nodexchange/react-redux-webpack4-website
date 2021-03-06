require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Quartile',
    description: 'Buckinghamshire based Creative Ad Agency and RichMedia solutions experts. We specialise in emotion and data-driven creative ad executions.',
    head: {
      titleTemplate: 'Quartile |  %s',
      defaultTitle: 'Quartile | home',
      meta: [
        { name: 'description', content: 'We are Buckinghamshire based Creative Ad Agency and Rich Media solutions experts, specialising in emotion and data-driven creative ad executions.' },
        { name: 'keywords', content: 'Great RichMedia Ads, Buckinghamshire Ad Agency, Wallpaper Ads, Publishing Ad Support, Creative Ad Agency, Ad Agency, Unique Homepage takeovers, Billboard Ads, Leaderboards Ads, Skyscrapper Ads, Portrait Ads, Custom Formats, RichMedia templates, Emotional Optimisation, Data-driven ads, RichMedia Experts, IAB Ads, DoubleClck Agency, DoubleClick Studio Ads, ONE Creative Ads, Creative Ad Agency, Affordable Ad Solutions, Great Ads, Engagement Ads' },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: 'Quartile - Creative Ad Agency' },
        { property: 'og:image', content: 'https://quartile.io/social-image.jpg' },
        { property: 'og:locale', content: 'en_UK' },
        { property: 'og:title', content: 'Quartile: Creative Ad Agency' },
        { property: 'og:description', content: 'We are Buckinghamshire based Creative Ad Agency and RichMedia solutions experts, specialising in emotion and data-driven creative ad executions.' },
        { property: 'og:card', content: 'summary' },
        { property: 'og:url', content: 'https://quartile.io/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site', content: '@quartile' },
        { property: 'og:creator', content: '@quartile' },
        { property: 'og:image:width', content: '400' },
        { property: 'og:image:height', content: '400' },
        { property: 'twitter:site', content: 'HelloQuartile' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:title', content: 'Quartile: Creative Ad Agency' },
        { property: 'twitter:image', content: 'https://quartile.io/social-image.jpg' },
        { property: 'twitter:description', content: 'Buckinghamshire based Creative Ad Agency and Premium solutions experts, specialising in emotion and data-driven creative ad executions.' }
      ]
    }
  },

}, environment);

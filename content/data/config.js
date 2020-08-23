const config = {
  siteTitle: 'Lara Beatriz - Desenvolvedora Fullstack',
  headerTitle: 'Lara Beatriz',
  siteTitleShort: 'larabeatriz.dev',
  siteTitleAlt: 'Lara Beatriz',
  // siteLogo: '/images/favicon.png',
  // siteBanner: '/img/banner.png',
  siteUrl: 'https://www.labeatriz.dev',
  pathPrefix: '/',
  siteDescription:
    'Um blog de uma desenvolvedora Fullstack entusiasta de novas tecnologias e fã de JavaScript. Atualmente trabalhando na Smartenvios com React, Node.js e mais =D',
  siteRss: '/rss.xml',
  // googleAnalyticsID: 'UA-134411592-1',
  disqusShortname: 'blog-da-lara',
  themeColor: '#00E2BC',
  backgroundColor: '#FFFFFF',
  userEmail: 'laraamori.machado@gmail.com',
  copyright: 'Lara Beatriz',
};

if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1);

if (config.siteRss && config.siteRss[0] !== '/')
  config.siteRss = `/${config.siteRss}`;

module.exports = config;

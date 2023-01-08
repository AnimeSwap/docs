// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AnimeSwap',
  tagline: '',
  url: 'https://docs.animeswap.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AnimeSwap', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/AnimeSwap/docs/blob/main',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-GTPX8PSW7C',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'AnimeSwap Docs',
        logo: {
          alt: 'AnimeSwap',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'tutorial/what_is_animeswap',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'doc',
            docId: 'contracts/contracts',
            position: 'left',
            label: 'Contracts',
          },
          {
            type: 'doc',
            docId: 'sdk/sdk',
            position: 'left',
            label: 'SDK',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            type: 'doc',
            docId: 'updates/2023',
            position: 'left',
            label: 'Updates',
          },
          {
            href: 'https://github.com/AnimeSwap/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Developers',
            items: [
              {
                label: 'Contracts',
                to: '/docs/contracts',
              },
              {
                label: 'SDK',
                to: '/docs/sdk',
              },
              {
                label: '#dev-chat',
                to: 'https://discord.com/channels/1004623679629557850/1005239215208009788',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/rbUG6SpRAM',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/animeswap_org',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Ecosystem',
            items: [
              {
                label: 'Home',
                href: 'https://animeswap.org',
              },
              {
                label: 'App',
                href: 'https://app.animeswap.org',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/AnimeSwap',
              },
            ],
          },
        ],
        copyright: ` `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        // respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;

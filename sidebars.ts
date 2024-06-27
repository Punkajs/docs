import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  home: [
    { type: 'doc', label: 'Get Started', id: 'home/get-started' },
    'home/roadmap',
    {
      type: 'category',
      label: 'Basics',
      link: { type: 'doc', id: 'home/basics/basics' },
      items: [
        {
          type: 'category',
          label: 'Swap',
          link: { type: 'doc', id: 'home/basics/swap/swap' },
          items: [
            'home/basics/swap/atomic-swaps',
            'home/basics/swap/order-matching-engine',
          ],
        },
        {
          type: 'category',
          label: 'Stake',
          link: { type: 'doc', id: 'home/basics/stake/stake' },
          items: ['home/basics/stake/governance'],
        },
        'home/basics/liquidity-provision',
        {
          type: 'category',
          label: 'Token',
          link: { type: 'doc', id: 'home/basics/token/token' },
          items: ['home/basics/token/seasons'],
        },
        'home/basics/supported-chains',
        {
          type: 'category',
          label: 'Guides',
          link: { type: 'doc', id: 'home/basics/guides/guides' },
          items: [
            'home/basics/guides/btc-wbtc',
            'home/basics/guides/wbtc-btc',
            'home/basics/guides/wbtc-wbtc',
            'home/basics/guides/stake-seed',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Security',
      link: { type: 'doc', id: 'home/security/security' },
      items: ['home/security/bug-bounty'],
    },
    {
      type: 'category',
      label: 'FAQs',
      link: { type: 'doc', id: 'home/faqs/faqs' },
      items: ['home/faqs/support'],
    },
    'home/garden-brand-guide',
  ],

  developers: [
    'developers/developers',
    {
      type: 'category',
      label: 'SDK',
      link: { type: 'doc', id: 'developers/sdk/sdk' },
      items: [
        'developers/sdk/installation',
        'developers/sdk/quickstart',
        'developers/sdk/core-concepts',
        'developers/sdk/supported-chains',
        {
          type: 'category',
          label: 'API Reference',
          link: {
            type: 'doc',
            id: 'developers/sdk/api-reference/api-reference',
          },
          items: [
            'developers/sdk/api-reference/orderbook',
            'developers/sdk/api-reference/core',
          ],
        },
        {
          type: 'category',
          label: 'SDK Guides',
          link: {
            type: 'doc',
            id: 'developers/sdk/sdk-guides/sdk-guides',
          },
          items: [
            'developers/sdk/sdk-guides/creating-wallets',
            'developers/sdk/sdk-guides/swapping-btc-wbtc',
            'developers/sdk/sdk-guides/swapping-wbtc-btc',
            'developers/sdk/sdk-guides/1inch-integration',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Orderbook',
      link: { type: 'doc', id: 'developers/orderbook/test' },
      items: [],
    },

    {
      type: 'category',
      label: 'Merry',
      link: { type: 'doc', id: 'developers/merry/merry' },
      items: [
        'developers/merry/merry-installation',
        'developers/merry/merry-cmds',
        'developers/merry/merry-services',
      ],
    },
  ],

  cookbook: [
    'cookbook/cookbook',
    'cookbook/cli-tool-with-garden-sdk',
    'cookbook/swapper-frontend',
  ],

  community: ['community/community', 'community/garden-ambassador-program'],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;

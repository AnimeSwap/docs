/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorial: [
    {
      type: 'autogenerated',
      dirName: 'tutorial',
    },
  ],
  contracts: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'contracts/contracts',
    },
    {
      type: 'category',
      label: 'Swap',
      items: [
        'contracts/Swap/swap_api',
        'contracts/Swap/swap_resources',
        'contracts/Swap/swap_events',
        'contracts/Swap/swap_examples',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'MasterChef',
      items: [
        'contracts/MasterChef/masterchef_api'
      ],
      collapsed: false,
    },
  ],
  sdk: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'sdk/sdk',
    },
  ],
  updates: [
    {
      type: 'autogenerated',
      dirName: 'updates',
    },
  ],
};

module.exports = sidebars;
module.exports = {
  docs: [
    'introduction',
    'lido-dao',
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/node-operator-manual',
        'guides/oracle-operator-manual',
        'guides/multisig-deployment',
      ],
    },
    {
      type: 'category',
      label: 'Contracts',
      items: [
        'contracts/lido',
        'contracts/lido-oracle',
        'contracts/node-operators-registry',
        'contracts/csteth',
      ],
    },
    'deployed-contracts',
  ],
}

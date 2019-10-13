export default {
  widgets: [
    {
      name: 'sanity-tutorials'
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-podcast-studio-studio-fseapnrm',
                  apiId: '51c0f819-2a0d-406d-9241-c4522168a970'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jamesgrubb/sanity-podcast-studio',
            category: 'Code'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: []},
      layout: {width: 'medium'}
    }
  ]
}

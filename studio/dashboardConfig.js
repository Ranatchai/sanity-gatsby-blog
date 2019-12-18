export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5df9d3712263253c2daeb067',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-cuh6qoyg',
                  apiId: '0715cfbd-54e4-453c-ae97-17e3677977f0'
                },
                {
                  buildHookId: '5df9d371fb22ac6a3d6017ff',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-vn9hnzui',
                  apiId: '2dc7eb91-2aa0-46ba-92f6-5954d7b8c188'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Ranatchai/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-vn9hnzui.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

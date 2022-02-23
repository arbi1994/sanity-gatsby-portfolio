export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
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
                  buildHookId: '6215af47ec34687c9636b46f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-y84bd5bn',
                  apiId: '0265ca75-83d7-41f5-8980-f58acdd04742'
                },
                {
                  buildHookId: '6215af47ec3468827236b306',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-h1bzkyu5',
                  apiId: '3e8a8a39-661c-4064-9700-015ec02a3934'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/arbi1994/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-h1bzkyu5.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

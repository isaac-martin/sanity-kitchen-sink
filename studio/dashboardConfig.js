export default {
  widgets: [
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
                  buildHookId: '61686be138d28e16440a650a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-a8so4hau',
                  apiId: '5a84987a-113f-4191-932e-3db08ff925b3'
                },
                {
                  buildHookId: '61686be185133a18255b29b7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-cwn1iy7r',
                  apiId: '0d350604-630b-40c1-9d67-ee531aa3f42d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/isaac-martin/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-cwn1iy7r.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

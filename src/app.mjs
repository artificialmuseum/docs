import { replaceSlashSlash } from '@magic/core'

export const state = {
  title: 'Artificial Museum Documentation',
  description: 'This page documents the features of the artificialmuseum.com',

  menu: [
    { to: '/', text: 'Index' },
    { to: '/gltf/', text: 'Gltf files' },
    { to: '/metadata/', text: 'Artifact metadata' },
    { to: '/browsers/', text: 'Supported Browsers' },
    { to: '/glitch/', text: 'Glitch Sandbox' },
    { to: '/schema/', text: 'Artifact DB Schema' },
    // { to: '/realworld/', text: 'Real world interaction' },
    // { to: '/sandbox/', text: 'Sandbox' },
    // { to: '/blender/', text: 'Blender Tutorials' },
    { to: '/testing/', text: 'Preview' },
  ],
}

export const build = async args => {
  const { app, config } = args
  const { WEB_ROOT } = config

  const { schema } = await import('../../ar/db/schema.js')

  const { artifact } = schema

  const page = {
    name: replaceSlashSlash(`${WEB_ROOT}/schema/`),
    path: replaceSlashSlash(`${WEB_ROOT}/schema/index.html`),
    View: () => [
      h1('Artifact Schema:'),

      p([
        'For now, this page shows a json stringified version of the schema.js',
        ' file that is actually being used by the artificial museum sourcecode to verify artifact data integrity.',
        ' We are working on a nicer version of this page and on adding more info fields.',
      ]),

      Pre({ lines: false }, JSON.stringify(artifact, null, 2)),
    ],
    state: {
      title: 'Artifact Schema',
      description: 'Artificial Museum Artifact Schema Documentation',
    },
    originalState: {
      title: 'Artifact Schema',
      description: 'Artificial Museum Artifact Schema Documentation',
    },
  }

  const { pages = [] } = app
  pages.push(page)

  app.pages = pages

  return app
}

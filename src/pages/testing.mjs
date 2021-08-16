export const View = () => [
  h2('Testing:'),
  p([
    'Don Mc Curdy’s ',
    Link({ text: 'GLTF Viewer', to: 'https://gltf-viewer.donmccurdy.com/' }),
    ' is a fast and simple way to test your gltf files.',
    ' Having a working gltf file in the gltf viewer means that it should also be usable in the Artificial Museum.',
  ]),
]

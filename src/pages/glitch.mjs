export const View = () => [
  h1('Glitch Sandbox Examples'),

  p(
    'We prepared projects on glitch that can be remixed to create your own artifact for the Artificial Museum.',
  ),

  Link({ href: 'https://glitch.com/@artificialmuseum' }, '@artificialmuseum glitch'),

  p('Currently, there are two projects on glitch that can be remixed'),

  h2('ArmSandbox'),
  p('This is the general purpose arm sandbox for placements anywhere on earth.'),
  Link({ to: 'https://glitch.com/~armsandbox' }, 'ArmSandbox'),

  h2('ArmMoonPortal'),
  p('This is a special sandbox for artifacts that should be exhibited on the moon.'),
  Link({ to: 'https://glitch.com/~armmoonportal' }, 'ArmMoonPortal'),

  h2('Usage'),
  p([
    'Usage of both sandboxes is quite similar.',
    ' There is an artifact.js and a CustomScene.js file.',
    ' Those files can be used to configure the Artifact (artifact.js) and to build custom javascript runtime code using three.js (CustomScene.js).',
  ]),

  h3('artifact.js'),
  p(
    'The artifact.js file contains quite a few configuration settings, some of them optional, some required.',
  ),
  p([
    'You can have a look at the ',
    Link(
      { to: 'https://glitch.com/edit/#!/armsandbox?path=artifact.js%3A2%3A0' },
      'ArmSandbox artifact.js',
    ),
    ' to get an overview.',
  ]),

  h3('CustomScene.js'),
  p([
    'This is a javascript with various functions that allow you to implement custom code at various points of the program runtime.',
    ' For more details, the ',
    Link(
      { to: 'https://glitch.com/edit/#!/armsandbox?path=CustomScene.js' },
      'ArmSandbox CustomScene.js',
    ),
    ' File contains the documentation of the various hooks you can use.',
  ]),

  h3('Assets'),
  p([
    'Glitch provides an assets area for your static (glb (3d model), audio and video) files.',
    ' To use them, just upload them in the assets area of your glitch,',
    ' then replace the corresponding url in the artifact.js file with your link.',
  ]),
]

export const View = () => [
  h1('Welcome to the Artificial Museum Documentation.'),

  p([
    'This Document is a work in progress, ',
    ' if there are errors, questions and/or any other suggestions,',
    ' feel free to use our github repository to ',
    Link({ to: 'https://github.com/artificialmuseum/docs/issues', text: 'file issues' }),
    ' or submit a ',
    Link({ to: 'https://github.com/artificialmuseum/docs/pulls', text: 'pull request' }),
  ]),

  h2('What?'),

  p([
    'The Artificial Museum is a web based Augmented Reality Geolocation Application hosted on ',
    Link({ to: 'https://artificialmuseum.com', text: 'artificialmuseum.com' }),
    '.',
  ]),
  p([
    'Artworks are positioned in the real world using GPS,',
    ' allowing artists to freely place their art',
    ' and visitors to experience the same art anytime.',
  ]),

  h2('Who?'),

  p([
    'The Artificial Museum is a project of ',
    Link({ to: 'https://thesystem.at', text: 'TheSystemCollective' }),
    '.',
  ]),

  h2('Privacy notice'),

  h3('No spying'),

  p('We promise to never analyze, track or sell any data about you.'),
  p('We will also never save any data without asking explicitly.'),

  h3('Local data'),

  p([
    'All browser features that collect sensitive data ',
    '(device orientation, 3d-map of your surroundings, camera video streams, geolocation)',
    ' DO NOT and NEVER WILL transmit this data to our servers.',
  ]),

  h3('Session storage'),

  p('We save some data in your browser (your last gps location).'),
  p('This information gets deleted as soon as you close the browser tab.'),
]

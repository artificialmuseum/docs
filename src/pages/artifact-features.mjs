export const state = {
  title: 'Artwork Features',
  description: 'custom description',
}

export const View = state => [
  h1('Artwork Features'),

  h2('Metadata:'),
  p('This information is displayed in the List of Artworks and the map popups.'),
  p('Some of the data below is not yet being displayed, this is just a matter of time.'),

  ul([
    li('Name'),
    li('Abstract (max 100 Characters)'),
    li('Description (max 500 characters)'),
    li('Position (Latitude & Longitude)'),
  ]),

  h2('Artifact Location'),
  ul([
    li('Name (max 30 Characters)'),
    li('Abstract (max 100 Characters)'),
    li('Description (max 500 characters)'),
    li('Position (Latitude & Longitude)'),
  ]),

  h2('Artist:'),
  ul([
    li('Name (max 30 characters)'),
    li('Url (Homepage or Social Network Profile)'),
    li('Bio (max 300 characters)'),
  ]),

  h2('3D Artist:'),
  p('if different to Artist'),

  ul([li('Name'), li('Url (Homepage or Social Network Profile)'), li('Bio (max 300 characters)')]),

  h2('Assets:'),

  p(['Maximum Package Size: ', b('10 megabytes'), '.']),
  p('This includes the gltf file and any video / audio files that should be played.'),

  h3('Artwork 3D File:'),
  p('.gltf and .glb files are supported. Textures should be packed into the gltf file.'),

  h3('Preview image'),
  p('width: 800px, height: 600px'),

  h3('Skybox image'),
  p('360 degree image of the location the artifact is positioned at.'),
  p('Should be edited to remove the photographer from the image.'),

  h3('Video'),
  p('Optional. ONE object in the scene has to be named "videotarget" for this to work'),

  h3('Audio'),
  p('Optional.'),
  p(
    'Unfortunately, directional audio is broken in chrome on android, so this audio file will just play in stereo.',
  ),

  h3('Testing:'),

  p([
    'Don Mc Curdy’s ',
    Link({ text: 'GLTF Viewer', to: 'https://gltf-viewer.donmccurdy.com/' }),
    ' is a fast and simple way to test your gltf files.',
  ]),

  h2('Additional Features:'),

  p('Every feature supported by gltf2 is supported by the Artificial Museum.'),
  p([
    'For more information consult the ',
    Link({
      text: 'Blender Gltf2',
      to: 'https://docs.blender.org/manual/en/latest/addons/import_export/scene_gltf2.html',
    }),
    ' Documentation.',
  ]),

  h3('Clipping'),
  p('If you want to clip parts of the scene, you can add a clipping mesh to your artwork.'),
  p('Just add any mesh(es) and make sure their name includes the word "clip".'),
  p(
    'This needs to be used sensibly, visitors can move INTO clipping objects, turning the clipping off.',
  ),

  p([
    'Example: ',
    Link({
      text: 'The Wound',
      to: 'https://artificialmuseum.com/#z=18.0&lat=48.20487&lng=16.36026&p=thewound',
    }),
  ]),

  h3('Videotarget'),

  p([
    'Any mesh can be a videotarget, just name it "videotarget" and the video will play on the object,',
    ' using the same texture mapping as that object uses before the video gets applied.',
  ]),
  p([
    'Please note that the number of vertices drops performance almost exponentially,',
    ' cubes, planes and other very simple structures work well.',
  ]),

  p([
    'Example: ',
    Link({
      text: 'De.Fragmentation',
      to: 'https://artificialmuseum.com/#z=18.0&lat=48.20333&lng=16.35861&p=defragmentation',
    }),
  ]),

  h3('Animations'),
  p('All animations in the gltf file will play simultaneously.'),
  p('Only a few properties are animatable:'),

  ul([li('Keyframe(translation, rotation, scale)'), li('Shape keys'), li('Armatures / skinning')]),

  p([
    'Example: ',
    Link({
      text: 'Fake Mirror',
      to: 'https://artificialmuseum.com/#z=17&lat=48.2034&lng=16.37&p=fakemirror',
    }),
  ]),

  h3('Clickable'),
  p('Allow the visitor to start and stop the animations by clicking on a play / pause button.'),

  h3('Displacement Map'),
  p('A Video can be displayed on a plane and be it’s own displacement map.'),
  p('This is hard to control, in some cases the result can be pretty interesting.'),
  p([
    'Example: ',
    Link({
      text: 'Doppeldenk',
      to: 'https://artificialmuseum.com/#z=17&lat=48.212&lng=16.376&p=doppeldenk',
    }),
  ]),
]

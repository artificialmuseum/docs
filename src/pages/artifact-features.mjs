export const state = {
  title: 'Artifact Features',
  description: 'Describes the possibilities when creating artifacts for the Artificial Museum',
}

export const View = state => [
  h1('Artifact Features'),

  h2('Metadata:'),
  p('This information is displayed in the List of Artifacts and the map popups.'),
  p('Some of the data below is not yet being displayed, this is just a matter of time.'),

  h2('Artifact Data'),
  ul([
    li(['Name (max 30 characters)', Required()]),
    li(['Abstract (max 100 characters)', Required()]),
    li(['Description (max 500 characters)', Required()]),
    li(['Position (Latitude & Longitude)', Required()]),
  ]),

  h2('Artist:'),
  ul([
    li(['Name (max 30 characters)', Required()]),
    li(['Url (Homepage or Social Network Profile)', Optional()]),
    li(['Bio (max 300 characters)', Required()]),
  ]),

  h2('3D Artist:'),
  p('if different to Artist.'),

  ul([
    li(['Name (max 30 characters)', Required()]),
    li(['Url (Homepage or Social Network Profile)', Optional()]),
    li(['Bio (max 300 characters)', Required()]),
  ]),

  h2('Assets:'),

  p(['Maximum Package Size: ', b('10 megabytes'), '.']),
  p(['This includes the gltf file ', b('and'), ' any video / audio files that should be played.']),

  h3('GLTF 3D File:'),
  p([
    '.gltf and .glb files are supported. Textures should be optimized and packed into the gltf file.',
    ' For optimal gpu performance, make sure that the image sizes are powers of two (128, 256, 512, 1024, 2048).',
    ' Textures bigger than 2048x2048 pixels can usually be resized to 1024x1024 without losing visible quality.',
    ' (re)baking the textures also usually makes them smaller because the bake algorithm tries to find the smallest image it can fit the texture parts into.',
    " It's allowed to use non-quadratic images too (example; 1024x512)",
    ' For optimization of images tools like optipng and sharp offer command line interfaces to quickly convert multiple images.',
  ]),

  h3('GLTF object position'),
  p([
    'The 3D object in the gltf should be positioned on X: 0 and Y: 0,',
    ' the Z position determines how high the objects floats above the floor.',
    ' The Blender units translate 1:1 to meters.',
  ]),

  h3(['Preview image', Required()]),
  p('width: 800px, height: 600px'),

  h3(['Skybox image', Required()]),
  p('360 degree image of the location the artifact is positioned at.'),
  p('Should be edited to remove the photographer from the image.'),
  p('Alternatively, the skybox image can also be related to the artwork and not to the location.'),

  h3(['Video', Optional()]),
  p('ONE object in the scene has to be named "videotarget" for this to work'),
  p('Depending on the object, there can theoretically also be multiple videotargets.'),
  p('Caveat: The polycount of the videotarget should be as low as possible, ~20-50 faces work nicely.'),

  h3(['Audio', Optional()]),
  p([
    'Unfortunately, directional audio is broken in chromium on android,',
    ' so this audio file will just play in stereo.',
    ' The chrome bug that tracks progress on this is a few years old by now',
    ' and unlikely to be fixed until the android audio drivers are rewritten from scratch.',
  ]),

  h3('Testing:'),
  p([
    'Don Mc Curdy’s ',
    Link({ text: 'GLTF Viewer', to: 'https://gltf-viewer.donmccurdy.com/' }),
    ' is a fast and simple way to test your gltf files.',
    ' Having a working gltf file in the gltf viewer means that it should also be usable in the Artificial Museum.',
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

  p('If you want to clip parts of the scene, you can add a clipping mesh to your artifact.'),
  p('Just add any mesh(es) and make sure their name includes the word "clip".'),
  p([
    'This needs to be used sensibly,',
    ' visitors can move INTO clipping objects,',
    ' turning the clipping off.',
  ]),

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

  h2('Caveats'),

  h3('GPS accuracy'),
  p('The Geo Positioning System is quite inaccurate.'),
  p([
    'This inaccuracy stems from obstruction of the signal,',
    ' for example buildings, trees and even cloudy skies can have a negative impact.',
  ]),
  p([
    'This leads to an average accuracy of 10-20 meters,',
    ' and currently our artworks are spawnable in a 50 meter radius around their latitude and longitude.',
  ]),
  p([
    'Phone vendors are working on multiplexing gps hardware,',
    ' which would then use more than one satellite to improve the positioning using triangulation.',
  ]),

  h3('Audio/Video and Gltf synchronisation'),
  p('It is not possible to force the audio, video and gltf animations to play at the same time.'),
  p([
    'Videos and Audio files buffer their data and might just stop playing',
    ' if the bandwidth of the visitor is too low,',
    ' even if we synchronized the start of the video/audio and the animations, buffering might break that sync later..',
  ]),

  h3('Clipping'),
  p([
    'Visitors can walk anywhere in the scene, including the ',
    b('INSIDE'),
    ' of the clipping object, breaking the clipping in weird ways.',
  ]),
  p([
    'To avoid this problem,',
    ' clipping objects should only be placed where visitors are unlikely to go to',
    ' (below the ground, very far from the artifact, or high in the sky (2+ meters))',
    ' alternatively, the clipping object should be as small as possible.',
  ]),

  h3('Interacting with the real world'),
  p([
    'We only support one method of interaction at the moment:',
    ' The visitor points their device to the ground and we find the floor level using sensors.',
  ]),
  p([
    'Once the depth api lands in browsers,',
    ' which is expected sometime during 2021,',
    ' we will work on adding the real world as input.',
  ]),
  p([
    'This will allow plants to grow on walls,',
    ' physics that are restricted by the real world,',
    ' and lots of other ways to incorporate real world data into artifacts.',
  ]),

  h2('Compatible Browsers'),

  h3('IOS'),
  p([
    'Mozilla has built a special Version of Firefox for Augmented Reality: ',
    Link({ to: 'https://apps.apple.com/us/app/webxr-viewer/id1295998056', text: 'Webxr Viewer' }),
  ]),

  h3('Android'),
  p([
    'On Android, Chromium, Brave and other Chromium based browsers support Webxr.',
    ' In addition, ',
    Link({ to: 'https://play.google.com/store/apps/details?id=com.google.ar.core&hl=en_US&gl=US', text: 'Google Play Services for AR' }),
    ' have to be installed.',
  ]),
]

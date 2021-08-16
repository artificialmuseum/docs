export const View = () => [
  h1('Artifact Features'),

  h2('Assets:'),
  p(['Maximum Package Size: ', b('10 megabytes'), '.']),
  p(['This includes the gltf file ', b('and'), ' any video / audio files that should be played.']),

  h2('Scene setup'),

  h3('3D File:'),
  p([
    '.gltf and .glb files are supported. Textures should be optimized and packed into the gltf file.',
    ' For optimal gpu performance, make sure that the image sizes are powers of two (128, 256, 512, 1024, 2048).',
    ' Textures bigger than 2048x2048 pixels can usually be resized to 1024x1024 without losing visible quality.',
    ' (re)baking the textures also usually makes them smaller because the bake algorithm tries to find the smallest image it can fit the texture parts into.',
    " It's allowed to use non-quadratic images too (example; 1024x512)",
    ' For optimization of images tools like ',
    Link({ to: 'http://optipng.sourceforge.net/', text: 'optipng' }),
    ' and ',
    Link({ to: 'https://www.npmjs.com/package/sharp', text: 'sharp' }),
    ' offer command line interfaces to quickly convert multiple images.',
  ]),

  h3('Object position'),
  p([
    'The 3D object in the gltf should be positioned on X: 0 and Y: 0,',
    ' the Z position determines how high the objects floats above the floor.',
    ' The Blender units translate 1:1 to meters.',
  ]),

  h3('Scenes'),
  p(
    'Please delete all non-used scenes from the blend project before exporting the gltf file, empty scenes will cause an error.',
  ),

  h3('Apply'),
  p(
    'Please apply the transform, scale, rotation and modifier data of the object (in blender the apply menu can be shown using ctrl+a)',
  ),

  h2('Animations'),
  p('All animations in the gltf file will play simultaneously.'),
  p('Only a few properties are animatable:'),

  ul([li('Keyframe (translation, rotation, scale)'), li('Shape keys'), li('Armatures / skinning')]),

  p([
    'Example: ',
    Link({
      text: 'Fake Mirror',
      to: 'https://artificialmuseum.com/#z=17&lat=48.2034&lng=16.37&p=fakemirror',
    }),
  ]),

  h2(['Skybox image', Required()]),
  p('360 degree image of the location the artifact is positioned at.'),
  p('Should be edited to remove the photographer from the image.'),
  p('Alternatively, the skybox image can also be related to the artifact and not to the location.'),

  h2(['Video', Optional()]),
  p('At least one object in the scene has to be named "videotarget" for this to work.'),
  p('Depending on the object, there can theoretically also be multiple videotargets.'),

  p([
    'Any mesh can be a videotarget, just name it "videotarget" and the video will play on the object,',
    ' using the same texture mapping as that object uses before the video gets applied.',
  ]),
  p([
    'Please note that the number of irregular vertices drops performance almost exponentially,',
    ' cubes, planes, spheres and other very simple structures work well.',
  ]),

  p('Max Resolution: 1280x720p'),
  p('Optimal Resolution: 1024x512p, 512x1024p'),
  p('Framerate: 25'),
  p('Maximum Video Bitrate: ~2MBit/s'),
  p('Audio sample rate: 44100, 48000'),
  p('FFmpeg command:'),
  p('ffmpeg -i video_in.mp4 -b:v 1024k -b:a 128k video_out.mp4'),

  p([
    'Example: ',
    Link({
      text: 'De.Fragmentation',
      to: 'https://artificialmuseum.com/#z=18.0&lat=48.20333&lng=16.35861&p=defragmentation',
    }),
  ]),

  h2(['Audio', Optional()]),
  p([
    'Unfortunately, directional audio is broken in chromium on android,',
    ' so this audio file will just play in stereo.',
    ' The chrome bug that tracks progress on this is a few years old by now',
    ' and unlikely to be fixed until the android audio drivers are rewritten from scratch.',
  ]),

  h2('Clipping'),

  p('If you want to clip parts of the scene, you can add a clipping mesh to your artifact.'),
  p('Just add any mesh(es) and make sure their name includes the word "clip".'),
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
  p([
    'Example: ',
    Link({
      text: 'The Wound',
      to: 'https://artificialmuseum.com/#z=18.0&lat=48.20487&lng=16.36026&p=thewound',
    }),
  ]),

  h2('Photogrammetry'),
  p([
    'If your artifact is based on a 3d scan, ',
    Link({ to: 'https://github.com/wjakob/instant-meshes', text: 'instant meshes' }),
    ' can be used to cleanup and minify the mesh before using it.',
    ' Unfortunately the uv map of the texture is lost in the process, it usually is quite easy to reapply after instant meshes has been applied',
  ]),
]

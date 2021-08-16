export const View = () => [
  h2('Compatible Browsers'),

  h2('IOS'),
  p([
    'Mozilla has built a special Version of Firefox for Augmented Reality: ',
    Link({ to: 'https://apps.apple.com/us/app/webxr-viewer/id1295998056', text: 'Webxr Viewer' }),
  ]),

  h2('Android'),
  p([
    'On Android, Chromium, Brave and other Chromium based browsers support Webxr.',
    ' In addition, the ',
    Link({
      to: 'https://play.google.com/store/apps/details?id=com.google.ar.core&hl=en_US&gl=US',
      text: 'Google Play Services for AR',
    }),
    ' have to be installed.',
  ]),
]

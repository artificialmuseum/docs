export const View = () => [
  h2('Metadata:'),

  p('This information is displayed in the List of Artifacts and the map popups.'),
  p('Some of the data below is not yet being displayed, this is just a matter of time.'),

  h2('Artifact Data'),
  ul([
    li(['Name (max 25 characters)', Required()]),
    li(['Abstract (max 100 characters)', Required()]),
    li(['Description (max 300 characters)', Required()]),
    li(['Position (Latitude & Longitude)', Required()]),
  ]),

  h2('Artist(s):'),
  ul([
    li(['Name (max 25 characters)', Required()]),
    li(['Url (Homepage or Social Network Profile)', Optional()]),
    li(['Bio (max 300 characters)', Required()]),
  ]),

  h2('3D Artist(s):'),
  p('if different to Artists.'),
  ul([
    li(['Name (max 25 characters)', Required()]),
    li(['Url (Homepage or Social Network Profile)', Optional()]),
    li(['Bio (max 300 characters)', Required()]),
  ]),

  h2('Photographer'),
  p('If the preview image has been shot by someone other than the artists.'),
  ul([
    li(['Name (max 25 characters)', Required()]),
    li(['Url (Homepage or Social Network Profile)', Optional()]),
    li(['Bio (max 300 characters)', Required()]),
  ]),

  h2('Sound artist'),
  p('If the sound has been created by someone other than the artists.'),
  ul([
    li(['Name (max 25 characters)', Required()]),
    li(['Url (Homepage or Social Network Profile)', Optional()]),
    li(['Bio (max 300 characters)', Required()]),
  ]),

  h2(['Preview image', Required()]),
  p('width: 800px, height: 600px'),
]

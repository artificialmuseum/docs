export const View = () => [
  h2('Interacting with the real world'),
  p([
    'At the moment, we only support one method of interaction:',
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
]

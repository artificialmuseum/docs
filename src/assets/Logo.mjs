export const View = () => img({ class: 'Logo', alt: 'Artificial Museum', title: 'Artificial Museum', src: 'https://static.artificialmuseum.com/favicon.png' })

export const style = vars => ({
  '.Header &&': {
    float: 'left',
  },
  [`@media screen and (min-width: ${vars.widths.laptop}`]: {
    '.Header &&': {
      float: 'left',
    },
  },
})

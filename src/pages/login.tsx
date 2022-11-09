import React from 'react'
import { Eatery } from '../models/Eatery'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import EateryCard from '../components/EateryCard'

const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
})

const dummyData: Eatery[] = [
  new Eatery('104west', '... West Ave', 'Kosher Dining Hall'),
  new Eatery('anabel', '... West Ave', 'Kosher Dining Hall'),
  new Eatery('cafe-jennie', '... West Ave', 'Kosher Dining Hall'),
  new Eatery('cornell-dairy-bar', '... West Ave', 'Kosher Dining Hall'),
  new Eatery('gimme-coffee', '... West Ave', 'Kosher Dining Hall'),
  new Eatery('mattins-cafe', '... West Ave', 'Kosher Dining Hall'),
  new Eatery('okenshields', '... West Ave', 'Kosher Dining Hall'),
  new Eatery('risley', '... West Ave', 'Kosher Dining Hall'),
]

export default function loginPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {dummyData.map((eatery: Eatery) => (
        <EateryCard name={''} imageName={eatery.imgName} />
      ))}
    </ThemeProvider>
  )
}

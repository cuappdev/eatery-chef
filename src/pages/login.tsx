import React from 'react'
import { Eatery } from '../models/Eatery'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import EateryCard from '../components/EateryCard'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import { StaticImage } from 'gatsby-plugin-image'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import headerStyles from '../styles/header.module.scss'

// const darkTheme = createTheme({
//   palette: {
//     type: 'dark',
//   },
// })

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
const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    width: 1152,
  },
  leftContainer: {
    width: 552,
  },
  h1: {
    fontFamily: 'SF Pro Display',
    fontStyle: 'bold',
    fontSize: 50,
  },
  icon: {
    marginTop: '30vh',
  },
  rightContainer: {
    width: 500,
  },
}))

export default function loginPage() {
  const styles = useStyles()
  return (
    <>
      <CssBaseline />
      <Box className={styles.root}>
        <Grid container spacing={2}>
          <Grid item className={styles.leftContainer}>
            <CardMedia
              component="img"
              image="/static/images/eatery-chef-logo.png"
              className={styles.icon}
            />
            <Typography gutterBottom variant="h6" component="div">
              Manage your eatery, update your menu items, and help more people
              love your food.
            </Typography>
            <CardMedia component="img" image="/static/images/footer.png" />
          </Grid>
          <Grid item className={styles.rightContainer}>
            <Paper>
              <h1>Right Container</h1>
            </Paper>
            <Typography className={styles.h1}>Find your Eatery</Typography>
            <Typography variant="h5">
              or get started by adding a new eatery
            </Typography>

            <Grid container spacing={4}>
              {dummyData.map((eatery: Eatery) => (
                <Grid item xs={6}>
                  <EateryCard
                    key={eatery.imgName}
                    name={''}
                    imageName={eatery.imgName}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

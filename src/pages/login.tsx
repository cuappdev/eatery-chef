import React from 'react'
import { Eatery } from '../models/Eatery'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import EateryCard from '../components/EateryCard'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import DummyData from '../data/DummyData'
import headerStyles from '../styles/header.module.scss'

const eateries = DummyData.eateries

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
              {eateries.map((eatery: Eatery) => (
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

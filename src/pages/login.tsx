import React from 'react'
import { Eatery } from '../models/Eatery'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { EateryCard, CardSizeW } from '../components/EateryCard'
import { Grid, Box } from '@material-ui/core'
import styled from '@emotion/styled'

import IconPie from '../assets/logo-pie.svg'
import IconText from '../assets/logo-text.svg'
import AppDev from '../assets/appdev.svg'

import DummyData from '../data/DummyData'

const eateries = DummyData.eateries

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: '100vh',
    width: 1152,
    margin: 'auto',
    overflow: 'hidden',
  },
  leftContainer: {
    marginTop: '29.4vh',
    marginLeft: '48px',
    width: '552px',
  },
  rightContainer: {
    marginTop: '16.8vh',
    marginLeft: '48px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '500px',
    overflow: 'hidden',
  },
}))

const TitleContainer = styled.div`
  width: 500px;
  & > h1 {
    margin: 0;
    font-size: 48px;
    font-weight: 700;
    line-height: 57.28px;
  }
  & > h3 {
    margin: 0;
    padding-top: 12px;
    font-size: 24px;
    font-weight: 500;
    line-height: 28.64px;
    color: #586069;
  }
`

const SearchBar = styled.input`
  height: 44px;
  width: 100%;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  padding: 0 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  color: #24292e;
  background-color: #eff1f4;
  & > focus {
    outline: none;
  }
`

const Description = styled.p`
  margin: 0;
  font-size: 24px;
  weight: 500;
  line-height: 28.64px;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 0;
  color: #586069;

  position: fixed;
  bottom: 0;
`

export default function loginPage() {
  const styles = useStyles()
  return (
    <>
      <CssBaseline />
      <Box className={styles.root}>
        <Grid container spacing={2}>
          <Grid item className={styles.leftContainer}>
            <IconPie />
            <IconText />
            <Description>
              Manage your eatery, update your menu items, and help more people
              love your food.
            </Description>
            <Footer>
              Designed and developed by
              <AppDev />. See our privacy policy.
            </Footer>
          </Grid>
          <Grid item className={styles.rightContainer}>
            <TitleContainer>
              <h1>Find your Eatery</h1>
              <h3>or get started by adding a new eatery</h3>
            </TitleContainer>
            <SearchBar placeholder="Search all eateries" />
            <Grid container spacing={4}>
              {eateries.map((eatery: Eatery) => (
                <Grid item xs={6}>
                  <EateryCard
                    key={eatery.imgName}
                    name={''}
                    imageName={eatery.imgName}
                    cardSizeW={CardSizeW.M}
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

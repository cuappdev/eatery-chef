import React from 'react'
import { Eatery } from '../models/Eatery'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import EateryCard from '../components/EateryCard'
import { Grid, Box } from '@material-ui/core'
import styled from '@emotion/styled'

import IconPie from '../assets/logo-pie.svg'

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

const FieldHeaders = styled.h1``
const NameInput = styled.input``
const LocationInput = styled.input``
const DescriptionInput = styled.input``
const AddButton = styled.button``

export default function loginPage() {
  const styles = useStyles()
  return (
    <>
      <CssBaseline />
      <Box className={styles.root}></Box>
    </>
  )
}

import React from 'react'
import { Eatery } from '../models/Eatery'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { EateryCard, CardSizeW } from '../components/EateryCard'
import { Grid, Box, Paper } from '@material-ui/core'
import styled from '@emotion/styled'

import EaterySelect from '../components/EaterySelect'

import IconPie from '../assets/logo-pie.svg'
import EateryTextField from '../components/EateryTextField'
import EateryPaymentMethods from '../components/EateryPaymentMethods'

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: '100vh',
    width: 1152,
    margin: 'auto',
    overflow: 'hidden',
  },
  leftContainer: {
    marginTop: '4.69vh',
    marginLeft: '48px',
    width: '420px',
  },
  rightContainer: {
    marginTop: '10.64vh',
    marginLeft: '48px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '555px',
  },
}))

const LocationAreaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`

const AddButton = styled.button`
  width: 555px;
  height: 48px;
  line-height: 21px;
  background: #eff1f4;
  border-radius: 100px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #959da5;
  border: none;
`

const EateryName = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  color: #4a90e2;
`

type Props = { readonly name: string }

export default function loginPage({ name }: Props) {
  const styles = useStyles()
  return (
    <>
      <CssBaseline />
      <Box className={styles.root}>
        <Grid container spacing={2}>
          <Grid item className={styles.leftContainer}>
            <IconPie />
            <EateryName>{name ? name : 'Eatery Name'}</EateryName>
            <EateryCard name={name} imageName={null} cardSizeW={CardSizeW.XL} />
          </Grid>
          <Grid item className={styles.rightContainer}>
            <h1>Add your Eatery</h1>
            <EateryTextField
              header={'Name'}
              placeholder={'Type the Eatery name...'}
            />
            <LocationAreaWrapper>
              <EateryTextField
                width="50%"
                header={'Location'}
                placeholder={'Type a campus building...'}
              />
              <EaterySelect
                width="50%"
                header={'Campus Area'}
                placeholder="Select the campus area..."
                options={['Area 1', 'Area 2', 'Area 3']}
              />
            </LocationAreaWrapper>
            <EateryTextField
              header={'Description'}
              placeholder={'Type a menu summary...'}
            />
            <EateryPaymentMethods />
            <EateryTextField
              header={'Online Ordering (optional)'}
              placeholder={'Type a URL...'}
            />
            <AddButton>Add Eatery</AddButton>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

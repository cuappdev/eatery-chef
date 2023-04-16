import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Grid, Box } from '@material-ui/core'
import { useState } from 'react'
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
      marginTop: '4.69vh',
      marginLeft: '48px',
      width: '330px',
    },
    rightContainer: {
      marginTop: '4.69vh',
      marginLeft: '48px',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      width: '555px',
    },
    h1: {
      fontSize: '45px'
    },
    h2: {
      fontSize: '30px',
      marginTop: '-1vh',
    },
    h3: {
      fontSize: '20px',
      color: '#586069',
    }
  }))

const Button = styled.button<{ isActive: boolean }>`
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  background-color: ${props => props.isActive ? 'white' : '#4a90e2'};
  color: ${props => props.isActive ? 'black' : 'white'};
  padding: 10px 15px;
  margin: 0px 10px;
  border-radius: 100px;
  cursor: pointer;
  border: none;
`
const SidebarButton = styled.button<{ isActive: boolean }>`
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  background-color: white;
  color: ${props => props.isActive ? '#586069' : 'black'};
  padding: 10px 15px;
  margin: 0px 0px;
  border-radius: 100px;
  cursor: pointer;
  border: none;
`

const ButtonGroup = styled.div`
  display: flex;
  margin-top: -35px;
  margin-left: -10px;
`

const EateryName = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  color: #4a90e2;
`

const Icon = styled.img`
  margin-right: 10px;
  width: 15px;
  height: 15px;
`

const SidebarGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  margin-left: -10px;
  justify-content: flex-start;
  align-items: flex-start;
  &:not(:first-of-type) {
    margin-top: 200px;
  }
`

type Props = { readonly name: string }

export default function loginPage({ name }: Props) {
    const styles = useStyles()
    const [isActive, setIsActive] = useState(false)
    const handleClick = () => {
      setIsActive(current => !current);
    }
    return (
      <>
        <CssBaseline />
        <Box className={styles.root}>
          <Grid container spacing={2}>
            <Grid item className={styles.leftContainer}>
              <IconPie />
              <EateryName>{name ? name : 'Eatery Name'}</EateryName>
              <SidebarGroup>
                <SidebarButton onClick={handleClick} isActive={isActive}><Icon src="reports-icon.png"/>Reports</SidebarButton>
                <SidebarButton onClick={handleClick} isActive={!isActive}><Icon src="food-icon.png"/>Food</SidebarButton>
                <SidebarButton onClick={handleClick} isActive={!isActive}><Icon src="schedule-icon.png"/>Schedule</SidebarButton>
                <SidebarButton onClick={handleClick} isActive={!isActive}><Icon src="alerts-icon.png"/>Alerts</SidebarButton>
                <SidebarButton onClick={handleClick} isActive={!isActive}><Icon src="gen-info-icon.png"/>General Info</SidebarButton>
                <SidebarButton onClick={handleClick} isActive={!isActive}><Icon src="food-icon.png"/>Food</SidebarButton>
              </SidebarGroup>
              <SidebarGroup>
                <SidebarButton onClick={handleClick} isActive={!isActive}><Icon src="settings-icon.png"/>Settings</SidebarButton>
                <SidebarButton onClick={handleClick} isActive={!isActive}><Icon src="log-out-icon.png"/>Log out</SidebarButton>
              </SidebarGroup>
            </Grid>
            <Grid item className={styles.rightContainer}>
              <h1 className={styles.h1}>Food</h1>
              <ButtonGroup>
                <Button onClick={handleClick} isActive={isActive}>Item</Button>
                <Button onClick={handleClick} isActive={!isActive}>Menus</Button>
              </ButtonGroup>
              <h2 className={styles.h2}>All Items</h2>
            </Grid>
          </Grid>
        </Box>
      </>
    )
  }


import React from 'react'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  card: {
    height: 158,
    width: 238,
    cornerRadius: 8,
  },
}))

type Props = { readonly name: string; readonly imageName: string }

export default function EateryCard({ name, imageName }: Props) {
  const styles = useStyles()
  return (
    <Paper className={styles.card}>
      <Container>
        <h1>Card</h1>
      </Container>
    </Paper>
  )
}

import React from 'react'
// import { StaticImage } from 'gatsby-plugin-image'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  card: {
    maxHeight: 158,
    maxWidth: 238,
    cornerRadius: 8,
  },
}))

type Props = { readonly name: string; readonly imageName: string }

// TODO: Replace image with Gatsby dynamic image instead of loading directly from static
export default function EateryCard({ name, imageName }: Props) {
  const styles = useStyles()
  return (
    <Paper className={styles.card}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="96"
            image={`../../${imageName}.png`}
            alt={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {imageName}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Paper>
  )
}

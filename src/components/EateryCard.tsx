import React from 'react'
// import { StaticImage } from 'gatsby-plugin-image'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import styled from '@emotion/styled'

const useStyles = makeStyles((theme) => ({
  card: {
    maxHeight: 158,
    maxWidth: 238,
    borderRadius: 8,
    backgroundColor: '#FAFAFA',
  },
}))

const TextWrapper = styled.div`
  display: flex;
  width: 85%;
  flex-direction: column;
  gap: 4px;
  margin: 12px;

  & > h3 {
    margin: 0;
    font-size: 17px;
    font-weight: 600;
    line-height: 20.29px;
    color: #050505;
  }
  & > p {
    margin: 0;
    font-size: 12px;
    font-weight: 500;
    line-height: 14.32px;
    color: #586069;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`

const prettifyName = (name: string) => {
  return name
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')
}

type Props = { readonly name: string; readonly imageName: string }

// TODO: Replace image with Gatsby dynamic image instead of loading directly from static
export default function EateryCard({ name, imageName }: Props) {
  const styles = useStyles()
  return (
    <Paper elevation={4} className={styles.card}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="96"
            image={`../../${imageName}.png`}
            alt={name}
          />
          <TextWrapper>
            <h3>{prettifyName(imageName)}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              diam sapien, dapibus quis orci sit amet, bibendum luctus eros.
            </p>
          </TextWrapper>
        </CardActionArea>
      </Card>
    </Paper>
  )
}

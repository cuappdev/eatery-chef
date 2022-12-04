import React from 'react'
import { Card, CardActionArea, CardMedia, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import styled from '@emotion/styled'

type Props = {
  readonly name: string
  readonly imageName: string | null
  readonly cardSizeW: CardSizeW
}

const useStyles = makeStyles((theme) => ({
  card: {
    maxHeight: 158,
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

const EateryCardWrapper = styled.div<{ readonly cardSizeW: CardSizeW }>`
  max-width: ${(props) => props.cardSizeW + 'px'};
`

const prettifyName = (name: string | null) => {
  if (name === null) {
    return 'Eatery Name'
  }
  return name
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')
}

export enum CardSizeW {
  S = 122,
  M = 238,
  L = 295,
  XL = 343,
}

// TODO: Replace image with Gatsby dynamic image instead of loading directly from static
export function EateryCard({ name, imageName, cardSizeW }: Props) {
  return (
    <EateryCardWrapper cardSizeW={cardSizeW}>
      <Paper elevation={4}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="96"
              image={
                imageName ? `../../${imageName}.png` : '../../placeholder.png'
              }
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
    </EateryCardWrapper>
  )
}

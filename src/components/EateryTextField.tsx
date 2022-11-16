import React from 'react'
import { Box, TextField } from '@material-ui/core'
import styled from '@emotion/styled'

type Props = {
  readonly width?: string
  readonly header: string
  readonly placeholder: string
}

const FormHeader = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 24px;
  line-height: 28.64px;
  padding-bottom: 12px;
`

export default function EateryTextField({ width, header, placeholder }: Props) {
  const [value, setValue] = React.useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as string)
  }
  return (
    <>
      <Box width={width}>
        <FormHeader>{header}</FormHeader>
        <TextField
          id="filled-basic"
          variant="filled"
          label={placeholder}
          value={value}
          onChange={handleChange}
          fullWidth
        />
      </Box>
    </>
  )
}

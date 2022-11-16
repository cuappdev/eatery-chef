import React from 'react'
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core'
import styled from '@emotion/styled'

type Props = {
  readonly width?: string
  readonly header: string
  readonly placeholder: string
  readonly options: string[]
}

const FormHeader = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 24px;
  line-height: 28.64px;
  padding-bottom: 12px;
`

export default function EaterySelect({
  width,
  header,
  placeholder,
  options,
}: Props) {
  const [value, setValue] = React.useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as string)
  }
  return (
    <>
      <Box width={width}>
        <FormHeader>{header}</FormHeader>
        <TextField
          label={placeholder}
          select
          value={value}
          onChange={handleChange}
          fullWidth
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </>
  )
}

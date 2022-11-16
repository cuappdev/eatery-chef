import * as React from 'react'
import Avatar from '@mui/joy/Avatar'
import FormLabel from '@mui/joy/FormLabel'
import Radio, { radioClasses } from '@mui/joy/Radio'
import RadioGroup from '@mui/joy/RadioGroup'
import Sheet from '@mui/joy/Sheet'

import MealSwipes from '../assets/meal-swipes.svg'
import COC from '../assets/coc.svg'
import BRBs from '../assets/brbs.svg'

import styled from '@emotion/styled'

export enum PaymentMethods {
  MEAL = 'Meal swipes',
  BRB = 'BRBs',
  COC = 'Cash or credit',
}

const FormHeader = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 24px;
  line-height: 28.64px;
  padding-bottom: 12px;
`

const getIcon = (value: PaymentMethods) => {
  switch (value) {
    case PaymentMethods.MEAL:
      return <MealSwipes />
    case PaymentMethods.BRB:
      return <BRBs />
    case PaymentMethods.COC:
      return <COC />
  }
}

export default function EateryPaymentMethods() {
  const [value, setValue] = React.useState<PaymentMethods>(PaymentMethods.NA)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as PaymentMethods)
  }
  return (
    <>
      <FormHeader>Accepted Payment Methods</FormHeader>
      <RadioGroup
        aria-label="meal-swipes"
        defaultValue={PaymentMethods.MEAL}
        overlay
        name={PaymentMethods.MEAL}
        sx={{
          flexDirection: 'row',
          gap: 2,
          [`& .${radioClasses.checked}`]: {
            [`& .${radioClasses.action}`]: {
              inset: -1,
              border: '3px solid',
              borderColor: 'primary.500',
            },
          },
          [`& .${radioClasses.radio}`]: {
            display: 'contents',
            '& > svg': {
              zIndex: 2,
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              bgcolor: 'background.body',
              borderRadius: '50%',
            },
          },
        }}
      >
        {Object.values(PaymentMethods).map((value) => (
          <Sheet
            key={value}
            variant="soft"
            sx={{
              borderRadius: 'md',
              bgcolor: 'background.level1',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1.5,
              p: 2,
              minWidth: 120,
            }}
          >
            <Radio id={value} value={value} />
            {getIcon(value)}
            <FormLabel htmlFor={value}>{value}</FormLabel>
          </Sheet>
        ))}
      </RadioGroup>
    </>
  )
}

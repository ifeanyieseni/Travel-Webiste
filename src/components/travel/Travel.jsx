import React from 'react'

import { Box, Container, Typography } from '@mui/material'

import { travelItems } from '../../data'
import TravelItem from '../travel-item'
import SecondaryButton from '../secondary-button/SecondaryButton'

const Travel = () => {
  return (
    <Container
      disableGutters
      maxWidth='xl'
      sx={{
        px: {
          xs: 2,
          sm: 5,
          md: 10,
        },
        my: 15,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          alignItems: {
            xs: 'center',
            md: 'flex-start',
          },
          justifyContent: 'space-between',
          gap: 2,
          mb: 4,
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: '600',
            fontSize: '32px',
            color: '#161414',
            width: 'fit-content',
          }}
        >
          Travel Tips and Advice
        </Typography>
        <SecondaryButton text='View all' />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          alignItems: {
            xs: 'center',
            md: 'flex-start',
          },
          justifyContent: {
            xs: 'flex-start',
            lg: 'space-between',
          },

          gap: {
            xs: 4,
            lg: 2,
          },
        }}
      >
        {travelItems.map((travelItem) => {
          return (
            <TravelItem
              key={travelItem.id}
              name={travelItem.name}
              location={travelItem.location}
              text={travelItem.text}
              image={travelItem.image}
              calendarText={travelItem.calendarText}
              userText={travelItem.userText}
              commentsText={travelItem.commentsText}
            />
          )
        })}
      </Box>
    </Container>
  )
}

export default Travel

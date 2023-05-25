import React from 'react'

import { Box, Container, Typography } from '@mui/material'

import { destinations } from '../../data'
import DestinationItem from '../destination-item'

const Destionations = () => {
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
      <Typography
        sx={{
          fontFamily: 'Poppins',
          fontWeight: '600',
          fontSize: '32px',
          color: '#161414',
          mb: 8,
          textAlign: {
            xs: 'center',
            md: 'left',
          },
        }}
      >
        Popular Destionations
      </Typography>
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
          gap: {
            xs: 4,
            md: 1,
          },
        }}
      >
        {destinations.map((destination) => {
          return (
            <DestinationItem
              key={destination.id}
              name={destination.name}
              location={destination.location}
              image={destination.image}
            />
          )
        })}
      </Box>
    </Container>
  )
}

export default Destionations

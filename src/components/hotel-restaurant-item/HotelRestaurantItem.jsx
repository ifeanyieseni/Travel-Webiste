import React from 'react'

import { Typography } from '@mui/material'
import { Box } from '@mui/system'

import hotelsLocationIcon from '../../assets/hotels-restaurants/hotels-location-icon.svg'

const HotelRestaurantItem = ({ name, location, image, ratingImage }) => {
  return (
    <>
      <Box>
        <Box
          sx={{
            width: {
              xs: '70vw',
              sm: '60vw',
              md: 'auto',
            },
          }}
        >
          <img
            src={image}
            alt={name}
            style={{
              width: '100%',
              objectFit: 'cover',
              cursor: 'pointer',
            }}
          />
        </Box>

        <Typography
          sx={{
            mt: 1.25,
            fontWeight: '700',
            fontFamily: 'Poppins',
            fontSize: '16px',
            color: '#161414',
            maxWidth: '252px',
          }}
        >
          {name}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              lg: 'row',
            },
            alignItems: {
              xs: 'flex-start',
              lg: 'center',
            },
            justifyContent: 'space-between',
            gap: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              mt: 1.5,
            }}
          >
            <img src={hotelsLocationIcon} alt='' />

            <Typography
              sx={{
                fontWeight: '500',
                fontFamily: 'Poppins',
                fontSize: '14px',
                color: '#979797',
              }}
            >
              {location}
            </Typography>
          </Box>
          <img src={ratingImage} alt='' />
        </Box>
      </Box>
    </>
  )
}

export default HotelRestaurantItem

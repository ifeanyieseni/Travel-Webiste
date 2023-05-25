import React from 'react'

import { Box, Typography } from '@mui/material'

const DestionationItem = ({ name, location, image }) => {
  return (
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
          fontWeight: '700',
          fontFamily: 'Poppins',
          fontSize: '18px',
          color: '#161414',
        }}
      >
        {name}
      </Typography>
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
  )
}

export default DestionationItem

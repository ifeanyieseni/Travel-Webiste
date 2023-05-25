import React from 'react'

import { Box, Container, Typography } from '@mui/material'

import SecondaryButton from '../secondary-button/SecondaryButton'
import aboutUsImg from '../../assets/main/about-us-img.jpg'

const AboutUs = () => {
  return (
    <Container
      disableGutters
      maxWidth='lg'
      sx={{
        px: {
          xs: 2,
          sm: 5,
          md: 3.5,
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
          justifyContent: 'center',
          gap: 4,
          alignItems: 'center',
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '600',
              fontSize: '32px',
              lineHeight: '48px',
              color: '#161414',
              textAlign: {
                xs: 'center',
                md: 'left',
              },
            }}
          >
            About Us
          </Typography>

          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '400',
              fontSize: '16px',
              lineHeight: '32px',
              color: '#5B5B5B',
              my: 4,
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Doloremque, cupiditate? Voluptatem excepturi commodi tenetur porro
            fugit minus eligendi voluptate totam, hic natus expedita sequi, sint
            soluta doloribus exercitationem dolores asperiores harum, minima
            facilis modi possimus voluptas sed illo! Saepe ex earum eos pariatur
            at soluta aspernatur consequatur nulla suscipit doloremque.
          </Typography>
          <SecondaryButton text='Read More' />
        </Box>

        <Box sx={{ flex: 1 }}>
          <img
            src={aboutUsImg}
            alt=''
            style={{ borderRadius: '24px', maxWidth: '100%' }}
          />
        </Box>
      </Box>
    </Container>
  )
}

export default AboutUs

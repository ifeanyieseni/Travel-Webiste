import React from 'react'

import { Box, Container, Link, Typography } from '@mui/material'

import logo from '../../assets/footer/logo.svg'
import facebookIcon from '../../assets/footer/facebook-icon.svg'
import twitterIcon from '../../assets/footer/twitter-icon.svg'
import instagramIcon from '../../assets/footer/instagram-icon.svg'
import { footerNav } from '../../data'
import MainButton from '../main-button/MainButton'
import btnArrowIcon from '../../assets/footer/btn-arrow-icon.svg'
import inputIcon from '../../assets/footer/input-icon.svg'
import { LinkSharp } from '@mui/icons-material'

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f9f9f9',
        py: {
          xs: 10,
          lg: 15,
        },
      }}
    >
      <Container
        maxWidth='xl'
        disableGutters
        sx={{
          px: {
            xs: 2,
            sm: 5,
            md: 10,
          },
          display: 'flex',
          flexDirection: {
            xs: 'column',
            lg: 'row',
          },

          alignItems: {
            xs: 'center',
            lg: 'flex-start',
          },

          justifyContent: 'space-between',
          gap: 8,
        }}
      >
        <Box
          sx={{
            maxWidth: {
              xs: 'auto',
              lg: '355px',
            },
            display: 'flex',
            flexDirection: 'column',
            alignItems: {
              xs: 'center',
              lg: 'flex-start',
            },
          }}
        >
          <img src={logo} alt='' />
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '400',
              fontSize: '13px',
              color: '#5b5b5b',
              lineHeight: '19.5px',
              textAlign: {
                xs: 'center',
                md: 'left',
              },
              mt: 3,
              mb: 2,
            }}
          >
            We always make our customers happy by providing as many choices as
            possible
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <img src={facebookIcon} alt='' />
            <img src={twitterIcon} alt='' />
            <img src={instagramIcon} alt='' />
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            width: {
              xs: '100%',
              md: 'auto',
            },
            gap: {
              xs: 2,
              sm: 8,
            },
            justifyContent: {
              xs: 'space-between',
              lg: 'flex-start',
            },
          }}
        >
          {footerNav.map((item) => {
            return (
              <Box key={item.id}>
                <Typography
                  sx={{
                    fontFamily: 'Poppins',
                    fontWeight: '500',
                    fontSize: {
                      xs: '14px',
                      sm: '18px',
                    },
                    color: '#161414',
                    mb: 2.5,
                  }}
                >
                  {item.title}
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5,
                  }}
                >
                  {item.links.map((link) => {
                    return (
                      <Link
                        key={link}
                        href='#'
                        underline='none'
                        color='#5b5b5b'
                        sx={{
                          width: 'fit-content',
                          fontWeight: '400',
                          fontSize: '13px',
                          '&:hover': {
                            color: '#161414',
                          },
                        }}
                      >
                        {link}
                      </Link>
                    )
                  })}
                </Box>
              </Box>
            )
          })}
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2.5,
            alignItems: {
              xs: 'center',
              lg: 'flex-start',
            },
            maxWidth: {
              xs: 'auto',
              lg: '388px',
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: {
                xs: '14px',
                sm: '18px',
              },
              color: '#161414',
              textAlign: {
                xs: 'center',
                lg: 'left',
              },
            }}
          >
            Subscribe on our destination review newsletters
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: {
                xs: 'column',
                md: 'row',
              },
              gap: 2,
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <Box>
              <img
                src={inputIcon}
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '36px',
                  transform: 'translateY(-50%)',
                }}
                alt=''
              />

              <input
                placeholder='Your Email'
                style={{
                  backgroundColor: '#ffefef',
                  height: '72px',
                  padding: '16px',
                  border: 'none',
                  outline: 0,
                  borderRadius: '12px',
                  paddingLeft: '54px',
                  fontFamily: 'Poppins',
                  fontWeight: '500',
                  fontSize: '16px',
                  color: '#161414',
                }}
              />
            </Box>

            <MainButton iconImg={btnArrowIcon} />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer

import React from 'react'

import { Box, Container } from '@mui/material'

import { searchNavItems } from '../../data'
import MainButton from '../main-button/MainButton'
import SearchNavItem from '../search-nav-item'
import navBtnIcon from '../../assets/search-nav/nav-btn-icon.svg'

const SearchNav = () => {
  return (
    <>
      <Container
        sx={{
          mt: 23,
          p: '0 30px 0 30px',
          maxWidth: {
            xs: '600px',
            md: '1200px',
          },
        }}
        disableGutters
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            alignItems: {
              xs: 'flex-start',
              md: 'center',
            },
            justifyContent: 'space-between',
            p: {
              xs: 2,
              md: 1,
            },
            md: {
              xs: 2,
              md: 0,
            },
            background: '#fff',
            borderRadius: '20px',
          }}
        >
          {searchNavItems.map((item) => {
            // console.log(item)
            return (
              <SearchNavItem
                key={item.id}
                boldText={item.boldText}
                normalText={item.normalText}
                iconImg={item.icon}
              />
            )
          })}
          <MainButton iconImg={navBtnIcon} />
        </Box>
      </Container>
    </>
  )
}

export default SearchNav

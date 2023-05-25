import React from 'react'

import { Button } from '@mui/material'

import btnArrowIcon from '../../assets/main/btn-arrow-icon.svg'

const SecondaryButton = ({ text }) => {
  return (
    <Button
      variant='contained'
      sx={{
        width: {
          xs: '90%',
          md: 'auto',
        },
        background: '#f6f4ff',
        p: 1.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0.5,
        borderRadius: '12px',
        fontSize: '18px',
        fontWeight: '600',
        color: '#5243c2',
        mb: {
          xs: 3,
        },

        '&.MuiButtonBase-root:hover': {
          backgroundColor: '#f6f4ff',
        },
      }}
    >
      {text}
      <img src={btnArrowIcon} alt='' />
    </Button>
  )
}

export default SecondaryButton

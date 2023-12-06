import Badge, { BadgeProps } from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Fade, Slide, Zoom } from '@mui/material'
import { useState } from 'react'

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))

export default function Basket() {
  return (
    <Fade timeout={600} in>
      <IconButton aria-label="cart" sx={{ color: 'white' }}>
        <StyledBadge badgeContent={4}>
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </Fade>
  )
}

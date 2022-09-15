import React from 'react'
import "./SwipeButtons.css"
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateSharpIcon from '@mui/icons-material/StarRateSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import FlashOnSharpIcon from '@mui/icons-material/FlashOnSharp';
import IconButton from '@mui/material/IconButton';

export default function SwipeButtons() {
  return (
    <div className='swipeButtons'>
      <IconButton className="swipeButtons__repeat">
        <ReplayIcon fontSize='large'/>
      </IconButton>
      <IconButton className="swipeButtons__left">
        <CloseIcon fontSize='large'/>
      </IconButton>
      <IconButton className="swipeButtons__star">
       <StarRateSharpIcon fontSize='large'/>
      </IconButton>
      <IconButton className="swipeButtons__right">
        <FavoriteSharpIcon fontSize='large'/>
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        <FlashOnSharpIcon fontSize='large'/>
      </IconButton>
    </div>
  )
}

import { styled } from '@mui/material'

const BackgroundVideo = styled('video')({
  position: 'fixed',
  width: '100vw' /* Cover entire viewport width */,
  height: '100vh' /* Cover entire viewport height */,
  objectFit: 'cover' /* Maintain aspect ratio */,
  zIndex: -1 /* Puts the video behind other content */,
})

export default BackgroundVideo

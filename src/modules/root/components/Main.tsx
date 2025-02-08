import { Box } from '@mui/material'
import type { PropsWithChildren } from 'react'

const Main = ({ children }: PropsWithChildren) => (
  <Box component='main' flexGrow={1}>
    {children}
  </Box>
)

export default Main

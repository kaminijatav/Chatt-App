import { AvatarGroup,Box,Stack } from '@mui/material'
import React from 'react'

const AvatarCard = ({avatar=[],max=4}) => {
  return <Stack direction={"row"} spacing={0.5}>
<AvatarGroup max={max}>
 </AvatarGroup> 
  </Stack>
  
}

export default AvatarCard
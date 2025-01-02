import React from 'react'
import { Grid2 as Grid,Skeleton} from '@mui/material' 

export const LayoutLoader = () => {
    return (
        <Grid container height={"calc(100vh - 4rem)"} spacing={"1rem"} >

        <Grid item
            sm={4}
            md={3}
            sx={{  
                display: { xs: "none", sm: "block" },
            }} height={"100%"} width={"30%"} >
            <Skeleton variant = "rectangular" height = {"100vh"} />
        </Grid>
        <Grid item xs={12} sm={8} md={5} lg={6} height={" 100% "} width={"40%"} >
          <Stack spacing = {"0rem"}>
             {
                Array.from({ length: 10 }).map((_, index) => (
                    <Skeleton key = {index}  height = {"5rem"} />
                ))  
            }
          </Stack>
        </Grid>


        <Grid item md={4} lg={3} height={"100%"} width={"30%"}
            sx={{
                display: { xs: "none" , md: "block"},
              
            }}
        >
            <Skeleton variant = "rectangular" height = {"100vh"} />
        </Grid>

        </Grid>
    )
};
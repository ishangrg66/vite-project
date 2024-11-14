import { Box, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <>
    <Typography variant='h3'textAlign={'center'} marginTop={10} color={'secondary'} sx={{textDecoration: 'underline'}}> Contact</Typography>
      <Box display={'flex'} flexWrap={'wrap'}>
        <Box width={'50%'} bgcolor={'secondary.light'} padding={6}>
          <Typography variant='h4'>Address</Typography>
            <Typography variant='body2'>
              Damside ,Street No. 14<br/>
              Pokhara<br/>
              Gandaki
            </Typography>
        </Box>
        <Box width={'50%'} bgcolor={'red'} p={6}>
        <TextField label='Email' placeholder='Enter your email' required helperText='Example: ishangurung187@gmail.com' fullWidth></TextField>
        <TextField label='Subject' placeholder='Subject' fullWidth></TextField>
        <TextField label='Message' required multiline rows={4} fullWidth></TextField>
          </Box>
        <Box width={'100%'} bgcolor={'pink'} p={6} >
        <Typography variant="h4">Map</Typography>
      
          </Box>
    </Box>

    <Grid container>
    <Grid item xs={12} sm={6} md={4} lg={3}>1</Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>2</Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>3</Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>4</Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>5</Grid>
    </Grid>
    </>
  )
}

export default Contact
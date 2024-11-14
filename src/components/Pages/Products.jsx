import { Checkbox, FormControlLabel, FormGroup, Grid, ListItem, Radio, RadioGroup, Rating, Typography, Link, Card, CardMedia, CardContent, Button, CardActions } from '@mui/material'
import React from 'react'

const Products = () => {
  return (
    <>
    <Grid container>
        <Grid item xs={11} sm={6} md={4} lg={3} p={5}>
            <Typography variant='h5' fontWeight={'bold'} mt={5}>Categories</Typography>
            <FormGroup>
                 <FormControlLabel control={<Checkbox defaultChecked color="secondary"/>} label="Mobiles" />
                 <FormControlLabel control={<Checkbox />} label="Laptop" />
                 <FormControlLabel control={<Checkbox />} label="Organs" />
                 <FormControlLabel control={<Checkbox />} label="Sushil" />
                 <FormControlLabel control={<Checkbox />} label="Rabin" />
            </FormGroup>

            <Typography variant='h5' fontWeight={'bold'} mt={5}>Prices</Typography>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                <FormControlLabel value="0" control={<Radio />} label="Rs.0 - Rs.30,000" />
                <FormControlLabel value="1" control={<Radio />} label="Rs.30,000 - Rs.60,000" />
                <FormControlLabel value="2" control={<Radio />} label="Rs.60,000 - Rs.1,00,000" />
                <FormControlLabel value="3" control={<Radio />} label="Rs.1,00,000 - Rs.3,00,000" />
                <FormControlLabel value="4" control={<Radio />} label="Rs.3,00,000 - Rs.10,00,000" />
            </RadioGroup>

            <Typography variant='h5' fontWeight={'bold'} mt={5}>Avg Review</Typography>
            <ListItem><Rating value={1} readOnly/></ListItem>
            <ListItem><Rating value={2} readOnly/></ListItem>
            <ListItem><Rating value={3} readOnly/></ListItem>
            <ListItem><Rating value={4} readOnly/></ListItem>
            <ListItem><Rating value={5} readOnly/></ListItem>

            <Typography variant='h5' fontWeight={'bold'} mt={5}>Deals</Typography>
            <ListItem><Link href={'#'} underline='hover' fontWeight={'bold'} color={'Red'} fontSize={30}>Sushil ko 50% off</Link></ListItem>
            <ListItem><Link href={'#'} underline='hover'>50% off</Link></ListItem>
            <ListItem><Link href={'#'} underline='hover'>50% off</Link></ListItem>
        </Grid>
        <Grid item xs={11} sm={6} md={8} lg={9} p={5} >

        <Grid item xs={12} sm={6} md={8} lg={5} p={5} container>
            <Card sx={{ maxWidth: 345 }}>
                 <CardMedia
                   sx={{ height: 140 }}
                   image=""
                   title="green iguana"
                 />
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div">
                     Lizard
                   </Typography>
                   <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                     Lizards are a widespread group of squamate reptiles, with over 6,000
                     species, ranging across all continents except Antarctica
                   </Typography>
                 </CardContent>
                 <CardActions>
                   <Button size="small">Buy Now</Button>
                   <Button size="small">Add to cart</Button>
                 </CardActions>
            </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}></Grid>
            <Grid item xs={12} md={6} lg={4}></Grid>
            </Grid>
    </Grid>
    </>

  )
}

export default Products
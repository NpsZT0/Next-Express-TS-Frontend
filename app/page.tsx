
import React from 'react'
import Link from 'next/link'
import {
  Container,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@mui/material';
import { IAttractions } from './ts/IAttractions';

const getData = async () => {
  const response = await fetch('http://localhost:5000/attractions');
  return response.json();
}

const getDataById = async (id: number) => {
  return 'string'
  // const response = await fetch(`http://localhost:5000/attractions/${id}`);
  // return response.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <Container maxWidth="lg">
      <h1>Attractions</h1>
      <Grid container spacing={2}>
        {data.map((attraction: IAttractions) => (
          <Grid item xs={12} md={4} key={attraction.id}>
            <Card >
              <CardMedia
                sx={{ height: 140 }}
                image={attraction.coverimage}
                title={attraction.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {attraction.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                }}>
                  {attraction.detail}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small"><Link href={`/${attraction.id}`}>Learn More</Link></Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container >
  )
}

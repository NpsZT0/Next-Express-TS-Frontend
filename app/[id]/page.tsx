import React from 'react'
import { IAttractions } from '../ts/IAttractions';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@mui/material';

const getData = async (id: string) => {
    const response = await fetch(`http://localhost:5000/attractions/${id}`);
    return response.json();
}

export default async function LearnMore({ params }: { params: { id: string } }) {
    const data = await getData(params.id);
    return (
        <div>
            {data.map((attraction: IAttractions) => (
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
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

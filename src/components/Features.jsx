import React from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from '@mui/material';

const features = [
  {
    title: 'Innovative Design',
    description: 'Modern and intuitive interface that puts user experience first.',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Powerful Features',
    description: 'Advanced tools and capabilities to boost your productivity.',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Reliable Support',
    description: '24/7 customer support to help you every step of the way.',
    image: 'https://via.placeholder.com/150',
  },
];

function Features() {
  return (
    <Box
      sx={{
        py: 8,
        bgcolor: 'grey.50',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Our Features
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: 140,
                    objectFit: 'cover',
                  }}
                  image={feature.image}
                  alt={feature.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Features; 
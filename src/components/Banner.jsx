import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

function Banner() {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: 'md',
            mx: 'auto',
          }}
        >
          <Typography
            component="h2"
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 600,
              mb: 3,
            }}
          >
            Ready to Get Started?
          </Typography>
          <Typography
            variant="h6"
            paragraph
            sx={{
              mb: 4,
              opacity: 0.9,
            }}
          >
            Join thousands of satisfied customers who have transformed their
            business with our platform.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              '&:hover': {
                bgcolor: 'secondary.dark',
              },
            }}
          >
            Start Free Trial
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Banner; 
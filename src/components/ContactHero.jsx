import React from 'react';
import { Container, Typography, Box, Breadcrumbs, Link } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import background from '../assets/back-ground.jpg'
import color from '../assets/color.png'

const ContactHero = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          py: 6,
          textAlign: 'right',
          direction: 'rtl',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'start',
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '400px',
        }}
      >
        <Box
          component="img"
          src={color}
          alt="color"
          sx={{
            position: 'absolute',
            top: -40,
            right: -150,
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}
        />
        {/* العنوان مع خلفية تحت النص فقط */}
        <Box
          sx={{
            position: 'relative',
            display: 'inline-block',
            mb: 3,
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              bottom: 8,
              right: 0,
              width: '100%',
              height: '20px',
              backgroundColor: '#E1C9F5',
              zIndex: 0,
            }}
          />
          <Typography
            variant="h1"
            component="h1"
            sx={{
              position: 'relative',
              fontSize: { xs: '2rem', md: '3.5rem' },
              fontWeight: 700,
              color: '#000',
              fontFamily: 'Norsal',
              zIndex: 1,
              px: 2,
            }}
          >
            تواصل معنا
          </Typography>
        </Box>

        {/* المسار Breadcrumb */}
        <Breadcrumbs
          separator={
            <KeyboardDoubleArrowLeftIcon fontSize="small" sx={{ color: '#4A154B' }} />
          }
          aria-label="breadcrumb"
          sx={{ fontFamily: 'Norsal' }}
        >
          <Typography sx={{ color: '#000', fontSize: '16px' }}>نبذة عنا</Typography>
          <Link
            href="/"
            sx={{
              color: '#4A154B',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '16px',
            }}
          >
            الصفحة الرئيسية
          </Link>
        </Breadcrumbs>
      </Box>
    </Container>
  );
};

export default ContactHero;

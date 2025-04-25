import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsApp from '../assets/WhatsApp.svg'
import callCalling from '../assets/call-calling.svg'
import smsTracking from '../assets/sms-tracking.svg'
import background from '../assets/back2.jpg'
const ContactMethods = () => {
  const contactMethods = [
    {
      image: smsTracking,
      title: 'البريد الإلكتروني',
      value: 'info@intelligentsolutionss.com'
    },
    {
      image: callCalling,
      title: 'هاتفياً',
      value: '+966 560 904 524'
    },
    {
      image: WhatsApp,
      title: 'واتساب',
      value: "+966 560 904 524"
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mb: 8, backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight:300
    }}>
      <Grid container spacing={3} direction="row-reverse">
        {contactMethods.map((method, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                height: '288px',
                width: '360px',
                bgcolor: '#E7D8F380',
                border: '1px solid #59287F',
                borderRadius: 4,
                boxShadow: 'none'
              }}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 4
                }}
              >
                <Box
                  component="img"
                  src={method.image}
                  alt="method"
                  sx={{ mb: 2 }}
                />

                <Typography
                  variant="h1"
                  sx={{
                    mb: 1,
                    color: '#1A1A1A',
                    fontWeight: 800,
                    fontSize: '32px',
                    lineHeight: '28px',
                    letterSpacing: '0.5px',
                  }}
                >
                  {method.title}
                </Typography>
                <p
                  style={{
                    color: '#4D4D4D',
                    direction: 'ltr',
                    fontSize: '16px',
                    fontWeight: 600,
                    lineHeight: '20px',
                    letterSpacing: '0.5px',
                  }}
                >
                  {method.value}
                </p>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ContactMethods; 
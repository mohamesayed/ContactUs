import React from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import person from '../assets/Group.svg'
import phone from '../assets/phone.svg'
import email from '../assets/email.svg'
import service from '../assets/service.svg'
import message from '../assets/message.svg'
import vector from '../assets/Vector2.svg'
const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <Container maxWidth="lg" sx={{
      mb: 8, width: '1128px',
      height: '799px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid #A064CE',
      borderRadius: "40px",

    }}>
      <Card
        sx={{
          p: { xs: 3, md: 6 },
          width: '812px',
          height: '657px',
          boxShadow: 'none',
          position: 'relative',
        }}
      >
        
        <Box
          component="img"
          src={vector}
          alt="Arrow Vector"
          sx={{
            position: 'absolute',
            top: 130,
            left: 60,
            width: '90px',
            height: '90px',
            transform: 'translate(25%, -25%)', 
          }}
        />
        <Box sx={{ textAlign: 'center', mb: 4, }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              color: 'rgba(89, 40, 127, 1)',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '58px',
              direction: 'ltr',
              mb: 2
            }}
          >
            هل لديك أي أسئلة أو استفسارات, ارسل طلبك!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(109, 49, 155, 1)',
              fontWeight: 600,
              fontSize: '18px',
            }}
          >
            لا تتردد في التواصل معنا، وسيتم الرد عليك في اسرع وقت.
          </Typography>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            direction: 'rtl'
          }}
        >
          <Grid container spacing={3} sx={{ direction: 'ltr' }}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <img src={person} style={{ width: '18px', height: '18px' }} />
                    <Typography sx={{ fontWeight: 700, color: 'rgba(51, 51, 51, 1)', fontSize: '18px' }}>
                      الاسم
                    </Typography>
                  </Box>
                }
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'rgba(231, 216, 243, 0.25)',
                    borderRadius: '16px',
                    fontWeight: 600,
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <img src={phone} style={{ width: '18px', height: '18px' }} />
                    <Typography sx={{ fontWeight: 700, color: 'rgba(51, 51, 51, 1)', fontSize: '18px' }}>
                      رقم الهاتف
                    </Typography>
                  </Box>
                }
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'rgba(231, 216, 243, 0.25)',
                    borderRadius: '16px',
                    fontWeight: 600,
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                type="email"
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <img src={email} style={{ width: '18px', height: '18px' }} />
                    <Typography sx={{ fontWeight: 700, color: 'rgba(51, 51, 51, 1)', fontSize: '18px' }}>
                      البريد الإلكتروني
                    </Typography>
                  </Box>
                }
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'rgba(231, 216, 243, 0.25)',
                    borderRadius: '16px',
                    fontWeight: 600,
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <img src={service} style={{ width: '18px', height: '18px' }} />
                    <Typography sx={{ fontWeight: 700, color: 'rgba(51, 51, 51, 1)', fontSize: '18px' }}>
                      الخدمة
                    </Typography>
                  </Box>
                }
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'rgba(231, 216, 243, 0.25)',
                    borderRadius: '16px',
                    fontWeight: 600,
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                multiline
                rows={4}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <img src={message} style={{ width: '18px', height: '18px' }} />
                    <Typography sx={{ fontWeight: 700, color: 'rgba(51, 51, 51, 1)', fontSize: '18px' }}>
                      الرسالة
                    </Typography>
                  </Box>
                }
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'rgba(231, 216, 243, 0.25)',
                    borderRadius: '16px',
                    fontWeight: 600,
                  },
                }}
              />
            </Grid>
          </Grid>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "28px" }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                width: '211px',
                height: '56px',
                bgcolor: 'rgba(89, 40, 127, 1)',
                color: 'white',
                px: 4,
                p: "16px",
                '&:hover': {
                  bgcolor: '#3a1039'
                }
              }}
            >
              <div style={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: "15px", padding: "2px", borderRadius: "16px", backgroundColor: "#FFFFFF4D" }}>

                <ArrowBackIcon
                  sx={{
                    fontWeight: 600,
                    fontSize: '16px', // حجم السهم نفسه

                  }}
                />
              </div>
              ارسل الان
            </Button>
          </div>
        </Box>
      </Card>
    </Container>
  );
};

export default ContactForm; 
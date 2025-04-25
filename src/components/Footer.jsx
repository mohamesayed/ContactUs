import { Box, Container, Grid, Typography, Stack, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from '../assets/logo-footer.png';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import facebook from '../assets/facebook.svg';
import whatsapp from '../assets/whatsapp-footer.svg';
import instagram from '../assets/instagram.svg';
import x from '../assets/x.svg';
// بيانات افتراضية للعرض
const contactInfo = {
  email: 'example@email.com',
  phone: '0123456789',
  whatsapp: '20123456789',
};

const quickLinks = [
  { title: 'الصفحة الرئيسية', href: '#' },
  { title: 'خدماتنا', href: '#' },
  { title: 'أراء العملاء', href: '#' },
  { title: 'سياسة الخصوصية', href: '#' },
  { title: 'اعمالنا', href: '#' },
  { title: 'الأسئلة الشائعة', href: '#' },
  { title: 'تواصل معنا', href: '#' },
  { title: 'نبذة عنا', href: '#' },
  { title: 'شركاؤنا', href: '#' },
];


export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#F8F9FA',
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        {/* Section 1 - Contact */}
        <Grid container spacing={4} direction="row-reverse">
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'end' }}>
              <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{ height: 50, mb: 2 }}
              />
              <Typography
                variant="body2"
                sx={{ color: 'rgba(17, 17, 17, 1)', mb: 3, fontSize: '18px', fontWeight: 600 }}
              >
                نحن نخلق قصة فريدة تجمع بين تسخير التقنيات الحديثة والفن الرقمي للإرتقاء بعلامتك التجارية والوصول بها لتجربة مستخدم استثنائية.
              </Typography>

              <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'end', gap: '20px' }}>
                <div href="#" style={{ color: 'rgba(51, 51, 51, 1)', fontWeight: 600, width: '30%', borderRadius: '20px', backgroundColor: 'rgba(208, 177, 231, 0.19)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                  <p>واتساب</p>
                  <img src={whatsapp} alt="whatsapp" style={{ width: '24px', height: '16px' }} />
                </div>
                <div href="#" style={{ color: 'rgba(51, 51, 51, 1)', fontWeight: 600, width: '30%', borderRadius: '20px', backgroundColor: 'rgba(237, 249, 255, 1)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                  <p>فيسبوك</p>
                  <img src={facebook} alt="facebook" style={{ width: '24px', height: '16px' }} />
                </div>
                <div href="#" style={{ color: 'rgba(51, 51, 51, 1)', fontWeight: 600, width: '30%', borderRadius: '20px', backgroundColor: 'rgba(237, 249, 255, 1)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                  <p>انستجرام</p>
                  <img src={instagram} alt="instagram" style={{ width: '24px', height: '16px' }} />
                </div>
                <div href="#" style={{ color: 'rgba(51, 51, 51, 1)', fontWeight: 600, width: '30%', borderRadius: '20px', backgroundColor: 'rgba(208, 177, 231, 0.19)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                  <p>اكس</p>
                  <img src={x} alt="x" style={{ width: '24px', height: '16px' }} />
                </div>
              </div>
            </Box>
          </Grid>


          {/* Section 2 - Links */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2} alignItems="flex-end">
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
                    bottom: 0,
                    right: 0,
                    width: '100%',
                    height: '10px',
                    backgroundColor: '#E1C9F5',
                    zIndex: 0,
                  }}
                />
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    position: 'relative',
                    fontSize: '25px',
                    fontWeight: 700,
                    color: 'rgba(1, 51, 91, 1)',
                    zIndex: 1,
                    px: 2,
                  }}
                >
                  روابط هامة
                </Typography>
              </Box>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'end', flexWrap: 'wrap', height: '300px', direction: 'rtl' }}>

                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      color: 'rgba(17, 17, 17, 1)',
                      '&:hover': {
                        color: '#4A154B',
                      },
                    }}
                  >
                    <KeyboardDoubleArrowLeftIcon sx={{ fontSize: '13px', color: 'rgba(109, 49, 155, 1)' }} />
                    {link.title}
                  </Link>
                ))}
              </div>
            </Stack>
          </Grid>

          {/* Section 3 - Logo & Social */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2} alignItems="flex-end">



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
                    bottom: 0,
                    right: 0,
                    width: '100%',
                    height: '10px',
                    backgroundColor: '#E1C9F5',
                    zIndex: 0,
                  }}
                />
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    position: 'relative',
                    fontSize: '25px',
                    fontWeight: 700,
                    color: 'rgba(1, 51, 91, 1)',
                    zIndex: 1,
                    px: 2,
                  }}
                >
                  تواصل معنا
                </Typography>
              </Box>

              <div style={{ display: 'flex', alignItems: 'center', direction: 'rtl' }}>

                <KeyboardDoubleArrowLeftIcon sx={{ fontSize: '13px', color: 'rgba(109, 49, 155, 1)' }} />
                <Link
                  href={`mailto:${contactInfo.email}`}
                  sx={{
                    color: 'rgba(17, 17, 17, 1)',
                    textDecoration: 'none',
                    '&:hover': {
                      color: '#4A154B',
                    },
                  }}
                >
                  البريد الإلكتروني
                </Link>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', direction: 'rtl' }}>

                <KeyboardDoubleArrowLeftIcon sx={{ fontSize: '13px', color: 'rgba(109, 49, 155, 1)' }} />
                <Link
                  href={`tel:${contactInfo.phone}`}
                  sx={{
                    color: 'rgba(17, 17, 17, 1)',
                    textDecoration: 'none',
                    '&:hover': {
                      color: '#4A154B',
                    },
                  }}
                >
                  رقم الهاتف
                </Link>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', direction: 'rtl' }}>

                <KeyboardDoubleArrowLeftIcon sx={{ fontSize: '13px', color: 'rgba(109, 49, 155, 1)' }} />
                <Link
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  sx={{
                    color: 'rgba(17, 17, 17, 1)',
                    textDecoration: 'none',
                    '&:hover': {
                      color: '#4A154B',
                    },
                  }}
                >
                  واتساب
                </Link>
              </div>



            </Stack>
          </Grid>
        </Grid>

        {/* Bottom Copyright */}
        <Box
          sx={{
            mt: 8,
            pt: 3,
            borderTop: '1px solid',
            borderColor: 'divider',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" color="rgba(0, 0, 0, 1) " sx={{ fontSize: '14px', fontWeight: 600 }}>
            <a href="" style={{ textDecoration: 'none', paddingRight: '5px' }}>

              Intelligent Solutions
            </a>
            2024 &copy; جميع الحقوق محفوظة
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

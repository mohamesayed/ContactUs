import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import person from "../assets/Group.svg";
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";
import service from "../assets/service.svg";
import message from "../assets/message.svg";
import vector from "../assets/Vector2.svg";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        mb: 8,
        width: { xs: "100%", md: "1128px" },
        minHeight: { xs: "auto", md: "799px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #A064CE",
        borderRadius: "40px",
        px: { xs: 2, md: 0 },
      }}
    >
      <Card
        sx={{
          p: { xs: 3, md: 6 },
          width: "100%",
          maxWidth: "812px",
          boxShadow: "none",
          position: "relative",
        }}
      >
        <Box
          component="img"
          src={vector}
          alt="Arrow Vector"
          sx={{
            position: "absolute",
            top: { xs: 20, md: 130 },
            left: { xs: 20, md: 60 },
            width: { xs: "60px", md: "90px" },
            height: { xs: "60px", md: "90px" },
            transform: "translate(25%, -25%)",
          }}
        />
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              color: "rgba(89, 40, 127, 1)",
              fontWeight: 700,
              fontSize: { xs: "28px", md: "48px" },
              lineHeight: { xs: "36px", md: "58px" },
              direction: "ltr",
              mb: 2,
            }}
          >
            هل لديك أي أسئلة أو استفسارات, ارسل طلبك!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(109, 49, 155, 1)",
              fontWeight: 600,
              fontSize: { xs: "14px", md: "18px" },
            }}
          >
            لا تتردد في التواصل معنا، وسيتم الرد عليك في اسرع وقت.
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit} sx={{ direction: "rtl" }}>
          <Grid container spacing={3} sx={{ direction: "ltr" }}>
            {[
              { label: "الاسم", icon: person },
              { label: "رقم الهاتف", icon: phone },
              { label: "البريد الإلكتروني", icon: email, type: "email" },
              { label: "الخدمة", icon: service },
            ].map((field, index) => (
              <Grid item xs={12} md={6} key={index}>
                <TextField
                  fullWidth
                  variant="outlined"
                  type={field.type || "text"}
                  label={
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <img
                        src={field.icon}
                        alt=""
                        style={{ width: "18px", height: "18px" }}
                      />
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: "rgba(51, 51, 51, 1)",
                          fontSize: "18px",
                        }}
                      >
                        {field.label}
                      </Typography>
                    </Box>
                  }
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      bgcolor: "rgba(231, 216, 243, 0.25)",
                      borderRadius: "16px",
                      fontWeight: 600,
                    },
                  }}
                />
              </Grid>
            ))}

            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                multiline
                rows={4}
                label={
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <img
                      src={message}
                      alt=""
                      style={{ width: "18px", height: "18px" }}
                    />
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "rgba(51, 51, 51, 1)",
                        fontSize: "18px",
                      }}
                    >
                      الرسالة
                    </Typography>
                  </Box>
                }
                sx={{
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "rgba(231, 216, 243, 0.25)",
                    borderRadius: "16px",
                    fontWeight: 600,
                  },
                }}
              />
            </Grid>
          </Grid>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 4,
            }}
          >
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                width: "211px",
                height: "56px",
                bgcolor: "rgba(89, 40, 127, 1)",
                color: "white",
                px: 4,
                p: "16px",
                "&:hover": {
                  bgcolor: "#3a1039",
                },
              }}
            >
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 2,
                  p: "2px",
                  borderRadius: "16px",
                  backgroundColor: "#FFFFFF4D",
                }}
              >
                <ArrowBackIcon sx={{ fontWeight: 600, fontSize: "16px" }} />
              </Box>
              ارسل الان
            </Button>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default ContactForm;

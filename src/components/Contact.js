import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import '../components/Style/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <Grid container spacing={4}>
        {/* Left Side - Contact Form */}
        <Grid item xs={12} md={6}>
          <div className="contact-form">
            <Typography variant="h4" gutterBottom>Contact Us</Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {/* Name and Email on the same line */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                  />
                </Grid>

                {/* Phone and Subject on the second line */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Subject"
                    variant="outlined"
                    fullWidth
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    margin="normal"
                  />
                </Grid>

                {/* Message */}
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    margin="normal"
                    multiline
                    rows={4}
                  />
                </Grid>

                {/* File input */}
                <Grid item xs={12}>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    name="file"
                    style={{ marginTop: '10px', width: '100%' }}
                  />
                </Grid>

                {/* Submit button */}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ marginTop: '20px' }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>

        {/* Right Side - Contact Information */}
        <Grid item xs={12} md={6}>
          <div className="contact-info">
            <Typography variant="h4" gutterBottom>Contact Information</Typography>
            <Typography variant="body1" paragraph>
              <strong>Ministry of Health, South Sudan</strong>
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Address:</strong> Juba, South Sudan
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Email:</strong> <a href="mailto:info@moh.gov.ss">info@mohss.gov.ss</a>
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Phone Number:</strong> +211 912 345 678
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>WhatsApp:</strong> +211 912 345 679
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;

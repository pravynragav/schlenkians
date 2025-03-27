import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Card, CardContent, Grid } from '@mui/material';

function PatientForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const [oxygen, setOxygen] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const sensor_data = {
      heart_rate: parseInt(heartRate),
      oxygen: parseInt(oxygen),
      blood_pressure: parseInt(bloodPressure)
    };
    axios.post('http://localhost:5000/api/patient', { name, age: parseInt(age), sensor_data })
      .then(response => setMessage(`Patient added. Priority: ${response.data.priority}`))
      .catch(err => setMessage('Error adding patient'));
  };

  return (
    <Card sx={{ maxWidth: 600, margin: 'auto' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Enter Patient Health Data
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="Name" value={name} onChange={(e)=> setName(e.target.value)} required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth type="number" label="Age" value={age} onChange={(e)=> setAge(e.target.value)} required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth type="number" label="Heart Rate" value={heartRate} onChange={(e)=> setHeartRate(e.target.value)} required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth type="number" label="Oxygen Level" value={oxygen} onChange={(e)=> setOxygen(e.target.value)} required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth type="number" label="Blood Pressure" value={bloodPressure} onChange={(e)=> setBloodPressure(e.target.value)} required />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit" fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
        {message && <Typography variant="subtitle1" color="secondary" sx={{ mt: 2 }}>{message}</Typography>}
      </CardContent>
    </Card>
  );
}

export default PatientForm;

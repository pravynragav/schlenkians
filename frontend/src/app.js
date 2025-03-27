import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import PatientForm from './components/PatientForm';
import DoctorDashboard from './components/DoctorDashboard';
import NurseDashboard from './components/NurseDashboard';
import AdminDashboard from './components/AdminDashboard';
import VideoCall from './components/VideoCall';

function App() {
  const [patients, setPatients] = useState([]);
  const [view, setView] = useState('patient'); // options: 'patient', 'doctor', 'nurse', 'admin', 'telemedicine'

  const fetchPatients = () => {
    axios.get('http://localhost:5000/api/patients')
      .then(response => setPatients(response.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchPatients();
  }, [view]);

  const renderView = () => {
    switch(view) {
      case 'patient': return <PatientForm />;
      case 'doctor': return <DoctorDashboard patients={patients} />;
      case 'nurse': return <NurseDashboard patients={patients} />;
      case 'admin': return <AdminDashboard patients={patients} />;
      case 'telemedicine': return <VideoCall />;
      default: return <PatientForm />;
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Remote Health Monitoring
          </Typography>
          <Button color="inherit" onClick={() => setView('patient')}>Patient</Button>
          <Button color="inherit" onClick={() => setView('doctor')}>Doctor</Button>
          <Button color="inherit" onClick={() => setView('nurse')}>Nurse</Button>
          <Button color="inherit" onClick={() => setView('admin')}>Dashboard</Button>
          <Button color="inherit" onClick={() => setView('telemedicine')}>Telemedicine</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        {renderView()}
      </Container>
    </Box>
  );
}

export default App;

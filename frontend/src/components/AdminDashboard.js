import React from 'react';
import axios from 'axios';
import { Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography } from '@mui/material';

function AdminDashboard({ patients }) {
  const assignDoctors = () => {
    axios.get('http://localhost:5000/api/assign_doctors')
      .then(response => {
        alert(response.data.message);
        window.location.reload();
      })
      .catch(err => alert('Error assigning doctors'));
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Admin Dashboard
      </Typography>
      <Button variant="contained" color="secondary" onClick={assignDoctors} sx={{ mb: 2 }}>
        Assign Doctors
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>Patient Name</TableCell>
              <TableCell>Vitals</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Doctor Assigned</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map(patient => (
              <TableRow key={patient.id}>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{JSON.stringify(patient.sensor_data)}</TableCell>
                <TableCell>{patient.priority}</TableCell>
                <TableCell>{patient.doctor_assigned || 'Not assigned'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AdminDashboard;

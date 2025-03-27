import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography } from '@mui/material';

function DoctorDashboard({ patients }) {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Doctor Dashboard
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>Patient Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Vitals</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Doctor Assigned</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map(patient => (
              <TableRow key={patient.id}>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.age}</TableCell>
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

export default DoctorDashboard;

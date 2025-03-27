import React, { useRef } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';

function VideoCall() {
  const localVideoRef = useRef(null);

  const startCall = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      localVideoRef.current.srcObject = stream;
    } catch (err) {
      console.error('Error accessing media devices.', err);
    }
  };

  return (
    <Card sx={{ maxWidth: 600, margin: 'auto' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Telemedicine Video Call
        </Typography>
        <video
          ref={localVideoRef}
          autoPlay
          playsInline
          width="100%"
          style={{ border: '1px solid #ccc', borderRadius: 4 }}
        ></video>
        <Button variant="contained" color="primary" onClick={startCall} sx={{ mt: 2 }}>
          Start Call
        </Button>
      </CardContent>
    </Card>
  );
}

export default VideoCall;

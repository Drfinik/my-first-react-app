import React from 'react';
import './CurrentTime.css';

function CurrentTime() {
  const currentTime = new Date().toLocaleTimeString();
  return <h2>Текущее время: {currentTime}</h2>;
}

export default CurrentTime;
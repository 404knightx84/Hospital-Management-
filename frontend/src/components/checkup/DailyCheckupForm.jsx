import React, { useState } from 'react';
import api from '../../services/api';

export default function DailyCheckupForm() {
  const [form, setForm] = useState({
    patient: '',
    bloodPressure: '',
    temperature: '',
    pulseRate: '',
    weight: '',
    bloodSugar: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/checkups', {
      patient: form.patient,
      vitals: {
        bloodPressure: form.bloodPressure,
        temperature: form.temperature,
        pulseRate: form.pulseRate,
        weight: form.weight,
        bloodSugar: form.bloodSugar,
      },
    });
    alert('Checkup recorded');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Daily Checkup</h3>
      <input name="patient" placeholder="Patient ID" onChange={handleChange} />
      <input name="bloodPressure" placeholder="Blood Pressure (e.g. 120/80)" onChange={handleChange} />
      <input name="temperature" placeholder="Temperature (°C)" onChange={handleChange} />
      <input name="pulseRate" placeholder="Pulse Rate" onChange={handleChange} />
      <input name="weight" placeholder="Weight (kg)" onChange={handleChange} />
      <input name="bloodSugar" placeholder="Blood Sugar (mg/dL)" onChange={handleChange} />
      <button type="submit">Save Checkup</button>
    </form>
  );
}

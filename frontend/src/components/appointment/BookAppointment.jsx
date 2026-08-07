import React, { useState } from 'react';
import api from '../../services/api';

export default function BookAppointment() {
  const [form, setForm] = useState({ doctor: '', date: '', timeSlot: '', reason: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/appointments', form);
    alert('Appointment booked');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Book Appointment</h3>
      <input name="doctor" placeholder="Doctor ID" onChange={handleChange} />
      <input name="date" type="date" onChange={handleChange} />
      <input name="timeSlot" placeholder="Time Slot" onChange={handleChange} />
      <input name="reason" placeholder="Reason" onChange={handleChange} />
      <button type="submit">Book</button>
    </form>
  );
}

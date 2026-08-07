import React, { useState } from 'react';
import api from '../../services/api';

export default function PrescriptionUpdate({ patientId, prescriptionId }) {
  const [form, setForm] = useState({ medicine: '', changeType: 'dosage_change', newDosage: '', reason: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/prescriptions/update', { ...form, patient: patientId, prescription: prescriptionId });
    alert('Medicine update recorded');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Update Medicine</h4>
      <input name="medicine" placeholder="Medicine ID" onChange={handleChange} />
      <select name="changeType" onChange={handleChange}>
        <option value="dosage_change">Dosage Change</option>
        <option value="refill">Refill</option>
        <option value="stopped">Stopped</option>
        <option value="added">Added</option>
      </select>
      <input name="newDosage" placeholder="New Dosage" onChange={handleChange} />
      <input name="reason" placeholder="Reason" onChange={handleChange} />
      <button type="submit">Update</button>
    </form>
  );
}

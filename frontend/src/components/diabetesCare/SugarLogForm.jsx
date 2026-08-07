import React, { useState } from 'react';
import api from '../../services/api';

export default function SugarLogForm({ diabetesRecordId }) {
  const [form, setForm] = useState({ fastingLevel: '', postMealLevel: '', insulinDose: '', notes: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.put(`/diabetes-care/${diabetesRecordId}`, {
      $push: { sugarLogs: { ...form, date: new Date() } },
    });
    alert('Sugar log added');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Log Blood Sugar</h4>
      <input name="fastingLevel" placeholder="Fasting (mg/dL)" onChange={handleChange} />
      <input name="postMealLevel" placeholder="Post-meal (mg/dL)" onChange={handleChange} />
      <input name="insulinDose" placeholder="Insulin Dose" onChange={handleChange} />
      <input name="notes" placeholder="Notes" onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
}

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import useFetch from '../../hooks/useFetch';

export default function VitalsChart({ patientId }) {
  const { data: checkups, loading } = useFetch(`/checkups?patient=${patientId}`);

  if (loading) return <p>Loading chart...</p>;

  const chartData = checkups?.map((c) => ({
    date: new Date(c.date).toLocaleDateString(),
    sugar: c.vitals?.bloodSugar,
    pulse: c.vitals?.pulseRate,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="sugar" stroke="#e63946" />
        <Line type="monotone" dataKey="pulse" stroke="#457b9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}

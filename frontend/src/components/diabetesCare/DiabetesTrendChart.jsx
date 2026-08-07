import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import useFetch from '../../hooks/useFetch';

export default function DiabetesTrendChart({ diabetesRecordId }) {
  const { data: record, loading } = useFetch(`/diabetes-care/${diabetesRecordId}`);

  if (loading) return <p>Loading trend...</p>;

  const chartData = record?.sugarLogs?.map((log) => ({
    date: new Date(log.date).toLocaleDateString(),
    fasting: log.fastingLevel,
    postMeal: log.postMealLevel,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="fasting" stroke="#2a9d8f" />
        <Line type="monotone" dataKey="postMeal" stroke="#f4a261" />
      </LineChart>
    </ResponsiveContainer>
  );
}

import React from 'react';
import useFetch from '../../hooks/useFetch';

export default function AppointmentList() {
  const { data: appointments, loading } = useFetch('/appointments');

  if (loading) return <p>Loading appointments...</p>;

  return (
    <div>
      <h3>Appointments</h3>
      <ul>
        {appointments?.map((a) => (
          <li key={a._id}>{a.date} - {a.timeSlot} - {a.status}</li>
        ))}
      </ul>
    </div>
  );
}

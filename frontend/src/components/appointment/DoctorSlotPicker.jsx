import React from 'react';
import useFetch from '../../hooks/useFetch';

export default function DoctorSlotPicker({ doctorId, date }) {
  const { data, loading } = useFetch(`/doctors/${doctorId}/available-slots?date=${date}`);

  if (loading) return <p>Loading slots...</p>;

  return (
    <div>
      <h4>Available Slots</h4>
      {data?.availability?.map((slot, i) => (
        <div key={i}>{slot.day}: {slot.startTime} - {slot.endTime}</div>
      ))}
    </div>
  );
}

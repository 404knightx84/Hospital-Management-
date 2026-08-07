import React from 'react';
import useFetch from '../../hooks/useFetch';

export default function ChemoScheduleTracker({ patientId }) {
  const { data: cases, loading } = useFetch(`/cancer-care?patient=${patientId}`);

  if (loading) return <p>Loading cancer care records...</p>;

  return (
    <div>
      <h3>Chemo Schedule</h3>
      {cases?.map((c) => (
        <div key={c._id}>
          <p>{c.cancerType} - {c.stage} - Status: {c.status}</p>
          <ul>
            {c.chemoCycles?.map((cycle, i) => (
              <li key={i}>
                Cycle {cycle.cycleNumber} - {new Date(cycle.date).toLocaleDateString()} - Next: {cycle.nextCycleDate ? new Date(cycle.nextCycleDate).toLocaleDateString() : 'TBD'}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

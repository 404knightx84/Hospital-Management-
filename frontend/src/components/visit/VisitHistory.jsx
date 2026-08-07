import React from 'react';
import useFetch from '../../hooks/useFetch';

export default function VisitHistory() {
  const { data: visits, loading } = useFetch('/visits');

  if (loading) return <p>Loading visit history...</p>;

  return (
    <div>
      <h3>Visit History</h3>
      <ul>
        {visits?.map((v) => (
          <li key={v._id}>
            {new Date(v.visitDate).toLocaleDateString()} - {v.visitType} - {v.diagnosis || 'No diagnosis yet'}
          </li>
        ))}
      </ul>
    </div>
  );
}

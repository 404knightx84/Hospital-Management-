import React from 'react';
import useFetch from '../../hooks/useFetch';

export default function OperationDetails({ operationId }) {
  const { data: op, loading } = useFetch(`/operations/${operationId}`);

  if (loading) return <p>Loading operation details...</p>;

  return (
    <div>
      <h3>{op?.operationName}</h3>
      <p>Surgeon: {op?.leadSurgeon}</p>
      <p>Type: {op?.operationType}</p>
      <p>Scheduled: {op?.scheduledDate && new Date(op.scheduledDate).toLocaleString()}</p>
      <p>Status: {op?.status}</p>
      <p>Pre-Op Notes: {op?.preOpNotes}</p>
      <p>Post-Op Notes: {op?.postOpNotes}</p>
    </div>
  );
}

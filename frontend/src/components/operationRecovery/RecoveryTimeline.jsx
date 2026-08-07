import React from 'react';
import useFetch from '../../hooks/useFetch';

export default function RecoveryTimeline({ operationId }) {
  const { data: logs, loading } = useFetch(`/recovery-logs?operation=${operationId}`);

  if (loading) return <p>Loading recovery timeline...</p>;

  return (
    <div>
      <h3>Recovery Timeline</h3>
      <ul>
        {logs?.map((log) => (
          <li key={log._id}>
            Day {log.day} - Pain: {log.painLevel}/10 - Mobility: {log.mobilityStatus} - Wound: {log.woundStatus}
          </li>
        ))}
      </ul>
    </div>
  );
}

import React, { useState } from 'react';
import api from '../../services/api';

export default function CancerReportUpload({ cancerCaseId }) {
  const [reportType, setReportType] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: wire up actual file upload (e.g. to S3) then save fileUrl
    await api.put(`/cancer-care/${cancerCaseId}`, {
      $push: { reports: { reportType, date: new Date() } },
    });
    alert('Report uploaded');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Upload Cancer Report</h4>
      <input placeholder="Report type (biopsy, CT scan...)" value={reportType} onChange={(e) => setReportType(e.target.value)} />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit">Upload</button>
    </form>
  );
}

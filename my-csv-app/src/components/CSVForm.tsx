import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Papa from 'papaparse';

const CSVForm = () => {
  const [csvData, setCsvData] = useState<any[]>([]);
  const navigate = useNavigate();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (result) => {
          setCsvData(result.data);
          navigate('/display', { state: result.data });
        },
      });
    }
  };

  return (
    <div>
      <h2>Upload CSV</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
    </div>
  );
};

export default CSVForm;

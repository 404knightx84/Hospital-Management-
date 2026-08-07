import React from 'react';
import useFetch from '../../hooks/useFetch';

export default function MedicineCatalog() {
  const { data: medicines, loading } = useFetch('/medicines');

  if (loading) return <p>Loading medicine catalog...</p>;

  return (
    <div>
      <h3>Medicine Catalog</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Category</th><th>Stock</th><th>Price</th><th>Expiry</th>
          </tr>
        </thead>
        <tbody>
          {medicines?.map((m) => (
            <tr key={m._id}>
              <td>{m.name}</td>
              <td>{m.category}</td>
              <td>{m.stockQuantity}</td>
              <td>{m.unitPrice}</td>
              <td>{m.expiryDate ? new Date(m.expiryDate).toLocaleDateString() : '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

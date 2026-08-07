import React from 'react';

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)' }}>
      <div style={{ background: '#fff', margin: '10% auto', padding: 20, width: '400px' }}>
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
}

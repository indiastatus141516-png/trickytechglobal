import React, { useState, useEffect } from 'react';
import axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const AgreementForm = ({ onSign }) => {
  const [agreement, setAgreement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSigned, setIsSigned] = useState(false);

  useEffect(() => {
    const fetchActiveAgreement = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/agreements/active`);
        setAgreement(res.data);
      } catch (err) {
        console.error('Error fetching agreement:', err);
        setError('Failed to load agreement. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchActiveAgreement();
  }, []);

  const handleSign = async () => {
    await onSign();
    setIsSigned(true);
  };

  if (loading) {
    return (
      <div style={{ maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
        <div style={{ marginBottom: '20px' }}>Loading agreement...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
        <div style={{ color: 'red', marginBottom: '20px' }}>{error}</div>
      </div>
    );
  }

  if (!agreement) {
    return (
      <div style={{ maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
        <div style={{ marginBottom: '20px' }}>No active agreement available.</div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{agreement.title}</h2>
      <p style={{ textAlign: 'center', marginBottom: '20px' }}>Version: {agreement.version}</p>
      <div style={{
        height: '300px',
        overflowY: 'scroll',
        border: '1px solid #ccc',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        marginBottom: '20px'
      }}>
        <pre style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', lineHeight: '1.5', whiteSpace: 'pre-wrap' }}>{agreement.content}</pre>
        {agreement.fileUrl && (
          <div style={{ marginTop: '20px' }}>
            <a href={`${backendUrl}${agreement.fileUrl}`} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'underline' }}>
              View Full Agreement Document
            </a>
          </div>
        )}
      </div>
      <button
        onClick={handleSign}
        disabled={isSigned}
        style={{
          backgroundColor: isSigned ? '#6c757d' : '#28a745',
          color: 'white',
          padding: '12px 20px',
          border: 'none',
          borderRadius: '8px',
          fontSize: '18px',
          fontWeight: 'bold',
          cursor: isSigned ? 'not-allowed' : 'pointer',
          boxShadow: isSigned ? 'none' : '0 4px 6px rgba(40, 167, 69, 0.4)',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={e => !isSigned && (e.currentTarget.style.backgroundColor = '#218838')}
        onMouseOut={e => !isSigned && (e.currentTarget.style.backgroundColor = '#28a745')}
      >
        {isSigned ? 'Signed' : 'Agree & Sign'}
      </button>
    </div>
  );
};

export default AgreementForm;

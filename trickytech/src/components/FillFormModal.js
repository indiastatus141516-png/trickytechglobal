import React from 'react';
import { useLocation } from 'react-router-dom';
import ProfileForm from './ProfileForm';

const FillFormModal = ({ isOpen, onClose, onSubmit }) => {
  const location = useLocation();
  const pathname = location && location.pathname ? location.pathname.toLowerCase() : '';
  const isHome = pathname === '/' || pathname === '/home';

  if (!isOpen) return null;
  if (isHome) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '8px',
        width: '400px',
        maxHeight: '80vh',
        overflowY: 'auto',
        boxShadow: '0 8px 16px rgba(0,0,0,0.3)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0, fontWeight: 'bold', fontSize: '24px' }}>Fill Form</h2>
          <button
            onClick={onClose}
            style={{
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = '#c82333')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = '#dc3545')}
          >
            X
          </button>
        </div>
        <ProfileForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default FillFormModal;

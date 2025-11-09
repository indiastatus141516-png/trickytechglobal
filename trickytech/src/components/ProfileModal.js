import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProfileModal = () => {
  const { authState, setShowProfileModal } = useAuth();
  const navigate = useNavigate();

  if (!authState || !authState.showProfileModal) return null;

  const closeModal = () => {
    setShowProfileModal(false);
  };

  const gotoProfile = () => {
    setShowProfileModal(false);
    navigate('/profile#fillForm');
  };

  return (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 680, maxWidth: '95%', background: '#fff', borderRadius: 12, padding: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0 }}>Complete your profile</h3>
          <button onClick={closeModal} style={{ background: 'transparent', border: 'none', fontSize: 20, cursor: 'pointer' }}>✕</button>
        </div>
        <p style={{ color: '#444' }}>To get the best experience, please complete your profile. You can skip this and complete it later from My Profile.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 12 }}>
          <button onClick={closeModal} style={{ padding: '10px 14px', borderRadius: 8, border: '1px solid #ccc', background: '#fff', cursor: 'pointer' }}>Skip</button>
          <button onClick={gotoProfile} style={{ padding: '10px 14px', borderRadius: 8, border: 'none', background: '#2e7c4e', color: 'white', cursor: 'pointer' }}>Fill Form</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;

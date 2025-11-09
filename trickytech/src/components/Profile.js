import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import ProfileForm from './ProfileForm';
import AgreementForm from './AgreementForm';
import Contact from './contactus page/Contact';
import CountUp from 'react-countup';

const Profile = () => {
  const { authState, updateProfile, signAgreement } = useAuth();
  const { user } = authState;
  const [activeSection, setActiveSection] = useState('home');

  const handleProfileSubmit = async (data) => {
    try {
      await updateProfile(data);
      alert('Profile updated successfully');
    } catch (err) {
      console.error(err);
      alert('Error updating profile');
    }
  };

  const handleAgreementSign = async () => {
    try {
      await signAgreement();
      alert('Agreement signed successfully');
    } catch (err) {
      alert('Error signing agreement');
    }
  };

  if (!user) return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', background: '#f8f9fa', color: '#005025' }}>Loading...</div>;

  const sidebarItems = [
    { key: 'home', label: 'Home', icon: '🏠' },
    { key: 'fillForm', label: 'Fill Form', icon: '📝' },
    { key: 'agreement', label: 'Agreement Form', icon: '📄' },
    { key: 'careerCoaching', label: 'Career Coaching', icon: '🎓' },
    { key: 'contactUs', label: 'Contact Us', icon: '📞' },
    { key: 'reports', label: 'Reports', icon: '📊' },
    { key: 'manageProfile', label: 'Settings', icon: '⚙️' },
  ];

  const userName = user.profileData?.firstName || user.email?.split('@')[0] || 'User';

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div style={{ padding: '20px', background: '#f8f9fa' }}>
            <div style={{
              background: 'linear-gradient(135deg, #ffffff, #f0f2f5)',
              borderRadius: '15px',
              padding: '30px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e0e0e0',
              textAlign: 'center',
              marginBottom: '30px'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #005025, #00bf58)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
                color: 'white',
                margin: '0 auto 20px',
                boxShadow: '0 0 20px rgba(0, 80, 37, 0.3)'
              }}>
                {userName[0].toUpperCase()}
              </div>
              <h1 style={{ color: '#005025', margin: '0 0 10px', fontSize: '2.5rem' }}>Welcome back, {userName}!</h1>
              <p style={{ color: '#00bf58', fontSize: '1.2rem' }}>Ready to explore your dashboard?</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
              <div style={{
                background: 'white',
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <h3 style={{ color: '#005025', marginBottom: '10px' }}>Profile Completion</h3>
                <div style={{ fontSize: '2rem', color: '#00bf58', fontWeight: 'bold' }}>
                  <CountUp end={user.isProfileCompleted ? 100 : 50} duration={2} />%
                </div>
                <p style={{ color: '#6c757d' }}>Complete your profile to unlock more features</p>
              </div>
              <div style={{
                background: 'white',
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <h3 style={{ color: '#005025', marginBottom: '10px' }}>Agreement Status</h3>
                <div style={{ fontSize: '1.5rem', color: user.isAgreementSigned ? '#00bf58' : '#ffc107', fontWeight: 'bold' }}>
                  {user.isAgreementSigned ? 'Signed' : 'Pending'}
                </div>
                <p style={{ color: '#6c757d' }}>Sign the agreement to proceed</p>
              </div>
              <div style={{
                background: 'white',
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <h3 style={{ color: '#005025', marginBottom: '10px' }}>Quick Actions</h3>
                <button
                  onClick={() => setActiveSection('fillForm')}
                  style={{
                    background: '#00bf58',
                    color: 'white',
                    border: 'none',
                    padding: '10px 15px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    margin: '5px'
                  }}
                >
                  Fill Form
                </button>
                <button
                  onClick={() => setActiveSection('manageProfile')}
                  style={{
                    background: '#005025',
                    color: 'white',
                    border: 'none',
                    padding: '10px 15px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    margin: '5px'
                  }}
                >
                  Manage Profile
                </button>
              </div>
            </div>
            <div style={{
              background: 'white',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#005025', marginBottom: '15px' }}>Recent Activity</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #e0e0e0' }}>
                  <strong>Profile Updated:</strong> Last updated on {new Date().toLocaleDateString()}
                </li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #e0e0e0' }}>
                  <strong>Agreement Signed:</strong> {user.isAgreementSigned ? new Date(user.agreementSignedDate).toLocaleDateString() : 'Not yet'}
                </li>
                <li style={{ padding: '10px 0' }}>
                  <strong>Login:</strong> Today
                </li>
              </ul>
            </div>
          </div>
        );
      case 'fillForm':
        return (
          <div style={{ padding: '20px', background: '#f8f9fa' }}>
            <h3 style={{ color: '#005025', marginBottom: '20px' }}>
              Fill Form - <span style={{ color: user.isProfileCompleted ? '#00bf58' : '#ffc107' }}>
                {user.isProfileCompleted ? 'Completed' : 'Pending'}
              </span>
            </h3>
            <ProfileForm defaultValues={user.profileData} onSubmit={handleProfileSubmit} isProfileCompleted={user.isProfileCompleted} />
          </div>
        );
      case 'agreement':
        return (
          <div style={{ padding: '20px', background: '#f8f9fa' }}>
            <h3 style={{ color: '#005025', marginBottom: '20px' }}>
              Agreement Form - <span style={{ color: user.isAgreementSigned ? '#00bf58' : '#ffc107' }}>
                {user.isAgreementSigned ? 'Signed' : 'Pending'}
              </span>
            </h3>
            {user.isAgreementSigned ? (
              <div style={{
                background: 'white',
                borderRadius: '10px',
                padding: '20px',
                border: '1px solid #00bf58',
                boxShadow: '0 0 20px rgba(0, 191, 88, 0.2)'
              }}>
                Signed on: {new Date(user.agreementSignedDate).toLocaleDateString()}
              </div>
            ) : (
              <AgreementForm onSign={handleAgreementSign} />
            )}
          </div>
        );
      case 'manageProfile':
        return (
          <div style={{ padding: '20px', background: '#f8f9fa' }}>
            <h3 style={{ color: '#005025', marginBottom: '20px' }}>Settings</h3>
            {user.isProfileCompleted ? (
              <ProfileForm defaultValues={user.profileData} onSubmit={handleProfileSubmit} isProfileCompleted={true} />
            ) : (
              <div style={{
                background: 'white',
                borderRadius: '10px',
                padding: '20px',
                border: '1px solid #ffc107',
                textAlign: 'center'
              }}>
                <p style={{ color: '#ffc107', fontSize: '18px', marginBottom: '20px' }}>Profile not completed yet. Please fill the form first.</p>
                <button
                  onClick={() => setActiveSection('fillForm')}
                  style={{
                    background: '#00bf58',
                    color: 'white',
                    padding: '12px 20px',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 0 20px rgba(0, 191, 88, 0.3)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseOver={e => (e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 191, 88, 0.5)')}
                  onMouseOut={e => (e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 191, 88, 0.3)')}
                >
                  Fill Form
                </button>
              </div>
            )}
          </div>
        );
      case 'careerCoaching':
        return (
          <div style={{ padding: '20px', background: '#f8f9fa' }}>
            <h3 style={{ color: '#005025' }}>Career Coaching</h3>
            <p style={{ color: '#00bf58' }}>Career coaching content will be displayed here.</p>
          </div>
        );
      case 'contactUs':
        return (
          <div style={{ padding: '20px', background: '#f8f9fa' }}>
            <Contact />
          </div>
        );
      case 'reports':
        return (
          <div style={{ padding: '20px', background: '#f8f9fa' }}>
            <h3 style={{ color: '#005025' }}>Reports</h3>
            <p style={{ color: '#00bf58' }}>Reports and analytics will be displayed here.</p>
          </div>
        );
      default:
        return <div style={{ padding: '20px', color: '#005025' }}>Select a section from the sidebar.</div>;
    }
  };

  return (
    <div style={{
      display: 'flex',
      background: '#f8f9fa',
      fontFamily: 'Arial, sans-serif',
      minHeight: 'calc(100vh - 200px)' // Adjust for header and footer
    }}>
      <div style={{
        width: '280px',
        background: 'white',
        borderRight: '1px solid #e0e0e0',
        padding: '20px 0',
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        height: 'fit-content',
        overflowY: 'auto'
      }}>
        <div style={{ padding: '0 20px 20px', borderBottom: '1px solid #e0e0e0', marginBottom: '20px' }}>
          <h2 style={{ color: '#005025', margin: 0, fontSize: '1.5rem' }}>Dashboard</h2>
        </div>
        {sidebarItems.map(item => (
          <button
            key={item.key}
            onClick={() => setActiveSection(item.key)}
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              padding: '15px 20px',
              background: activeSection === item.key ? '#00bf58' : 'transparent',
              color: activeSection === item.key ? 'white' : '#005025',
              border: 'none',
              borderRadius: '0',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              borderLeft: activeSection === item.key ? '4px solid #005025' : '4px solid transparent',
              textAlign: 'left'
            }}
            onMouseOver={e => {
              if (activeSection !== item.key) {
                e.currentTarget.style.background = '#f0f2f5';
              }
            }}
            onMouseOut={e => {
              if (activeSection !== item.key) {
                e.currentTarget.style.background = 'transparent';
              }
            }}
          >
            <span style={{ marginRight: '15px', fontSize: '20px' }}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Profile;

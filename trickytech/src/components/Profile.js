import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import ProfileForm from './ProfileForm';
import AgreementForm from './AgreementForm';
import Contact from './contactus page/Contact';
import CountUp from 'react-countup';
import './Profile.css';

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

  if (!user) return <div className="profile-loading">Loading...</div>;

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
          <div className="profile-section-wrapper">
            <div className="profile-home-hero">
              <div className="profile-avatar">
                {userName[0].toUpperCase()}
              </div>
              <h1 className="profile-home-title">Welcome back, {userName}!</h1>
              <p className="profile-home-subtitle">Ready to explore your dashboard?</p>
            </div>
            <div className="profile-home-grid">
              <div className="profile-home-card">
                <h3 className="profile-home-card-title">Profile Completion</h3>
                <div className="profile-home-card-metric">
                  <CountUp end={user.isProfileCompleted ? 100 : 50} duration={2} />%
                </div>
                <p className="profile-home-card-text">Complete your profile to unlock more features</p>
              </div>
              <div className="profile-home-card">
                <h3 className="profile-home-card-title">Agreement Status</h3>
                <div className={`profile-home-card-metric ${user.isAgreementSigned ? 'is-success' : 'is-warning'}`}>
                  {user.isAgreementSigned ? 'Signed' : 'Pending'}
                </div>
                <p className="profile-home-card-text">Sign the agreement to proceed</p>
              </div>
              <div className="profile-home-card">
                <h3 className="profile-home-card-title">Quick Actions</h3>
                <div className="profile-home-actions">
                  <button
                    onClick={() => setActiveSection('fillForm')}
                    className="profile-home-action-btn is-primary"
                  >
                    Fill Form
                  </button>
                  <button
                    onClick={() => setActiveSection('manageProfile')}
                    className="profile-home-action-btn is-secondary"
                  >
                    Manage Profile
                  </button>
                </div>
              </div>
            </div>
            <div className="profile-home-card">
              <h3 className="profile-home-card-title">Recent Activity</h3>
              <ul className="profile-activity-list">
                <li>
                  <strong>Profile Updated:</strong> Last updated on {new Date().toLocaleDateString()}
                </li>
                <li>
                  <strong>Agreement Signed:</strong> {user.isAgreementSigned ? new Date(user.agreementSignedDate).toLocaleDateString() : 'Not yet'}
                </li>
                <li>
                  <strong>Login:</strong> Today
                </li>
              </ul>
            </div>
          </div>
        );
      case 'fillForm':
        return (
          <div className="profile-section-wrapper">
            <h3 className="profile-section-heading">
              Fill Form - <span style={{ color: user.isProfileCompleted ? '#00bf58' : '#ffc107' }}>
                {user.isProfileCompleted ? 'Completed' : 'Pending'}
              </span>
            </h3>
            <ProfileForm defaultValues={user.profileData} onSubmit={handleProfileSubmit} isProfileCompleted={user.isProfileCompleted} />
          </div>
        );
      case 'agreement':
        return (
          <div className="profile-section-wrapper">
            <h3 className="profile-section-heading">
              Agreement Form - <span style={{ color: user.isAgreementSigned ? '#00bf58' : '#ffc107' }}>
                {user.isAgreementSigned ? 'Signed' : 'Pending'}
              </span>
            </h3>
            {user.isAgreementSigned ? (
              <div className="profile-status-card is-success">
                Signed on: {new Date(user.agreementSignedDate).toLocaleDateString()}
              </div>
            ) : (
              <AgreementForm onSign={handleAgreementSign} />
            )}
          </div>
        );
      case 'manageProfile':
        return (
          <div className="profile-section-wrapper">
            <h3 className="profile-section-heading">Settings</h3>
            {user.isProfileCompleted ? (
              <ProfileForm defaultValues={user.profileData} onSubmit={handleProfileSubmit} isProfileCompleted={true} />
            ) : (
              <div className="profile-status-card is-warning">
                <p className="profile-status-text">Profile not completed yet. Please fill the form first.</p>
                <button
                  onClick={() => setActiveSection('fillForm')}
                  className="profile-cta-btn"
                >
                  Fill Form
                </button>
              </div>
            )}
          </div>
        );
      case 'careerCoaching':
        return (
          <div className="profile-section-wrapper">
            <h3 className="profile-section-heading">Career Coaching</h3>
            <p className="profile-section-subtext">Career coaching content will be displayed here.</p>
          </div>
        );
      case 'contactUs':
        return (
          <div className="profile-section-wrapper">
            <Contact />
          </div>
        );
      case 'reports':
        return (
          <div className="profile-section-wrapper">
            <h3 className="profile-section-heading">Reports</h3>
            <p className="profile-section-subtext">Reports and analytics will be displayed here.</p>
          </div>
        );
      default:
        return <div className="profile-section-wrapper">Select a section from the sidebar.</div>;
    }
  };

  return (
    <div className="profile-layout">
      <div className="profile-sidebar">
        <div className="profile-sidebar-header">
          <h2>Dashboard</h2>
        </div>
        {sidebarItems.map(item => (
          <button
            key={item.key}
            onClick={() => setActiveSection(item.key)}
            className={`profile-sidebar-button ${activeSection === item.key ? 'is-active' : ''}`}
          >
            <span className="profile-sidebar-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>
      <div className="profile-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Profile;

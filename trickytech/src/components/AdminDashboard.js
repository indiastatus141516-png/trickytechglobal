import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ManageUsers from './ManageUsers';
import ManageBlogs from './ManageBlogs';
import ManageAgreements from './ManageAgreements';
import '../style/AdminDashboard.css';


const backendUrl = process.env.REACT_APP_BACKEND_URL;

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('manageUsers');
  const [adminData, setAdminData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdminAuth = async () => {
      const token = localStorage.getItem('adminToken');
      const adminUser = localStorage.getItem('adminUser');

      if (!token) {
        navigate('/admin/login');
        return;
      }

      if (adminUser) {
        setAdminData(JSON.parse(adminUser));
        setLoading(false);
        return;
      }

      try {
        axios.defaults.headers.common['x-auth-token'] = token;
        const res = await axios.get(`${backendUrl}/api/admin/me`);
        setAdminData(res.data);
        localStorage.setItem('adminUser', JSON.stringify(res.data));
      } catch (err) {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        navigate('/admin/login');
      } finally {
        setLoading(false);
      }
    };

    checkAdminAuth();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    delete axios.defaults.headers.common['x-auth-token'];
    navigate('/admin/login');
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'manageUsers':
        return <ManageUsers />;
      case 'manageBlogs':
        return <ManageBlogs />;
      case 'manageAgreements':
        return <ManageAgreements />;
      default:
        return <ManageUsers />;
    }
  };

  if (loading) {
    return (
      <div className="admin-dashboard-loading">
        <div className="loading-spinner"></div>
        <p>Loading admin dashboard...</p>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div className="admin-header-content">
          <h1>Admin Dashboard</h1>
          <div className="admin-info">
            <span>Welcome, {adminData?.name || 'Admin'}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        </div>
      </header>

      <div className="admin-content">
        <nav className="admin-sidebar">
          <div className="sidebar-menu">
            <button
              className={`sidebar-item ${activeSection === 'manageUsers' ? 'active' : ''}`}
              onClick={() => setActiveSection('manageUsers')}
            >
              <span className="sidebar-icon">👥</span>
              Manage Users
            </button>
            <button
              className={`sidebar-item ${activeSection === 'manageBlogs' ? 'active' : ''}`}
              onClick={() => setActiveSection('manageBlogs')}
            >
              <span className="sidebar-icon">📝</span>
              Manage Blogs
            </button>
            <button
              className={`sidebar-item ${activeSection === 'manageAgreements' ? 'active' : ''}`}
              onClick={() => setActiveSection('manageAgreements')}
            >
              <span className="sidebar-icon">📄</span>
              Upload Agreement
            </button>
          </div>
        </nav>

        <main className="admin-main">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;

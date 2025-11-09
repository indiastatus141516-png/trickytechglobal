import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/ManageAgreements.css';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const ManageAgreements = () => {
  const [agreements, setAgreements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingAgreement, setEditingAgreement] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    version: '',
    fileUrl: '',
    file: null
  });

  useEffect(() => {
    fetchAgreements();
  }, []);

  const fetchAgreements = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/admin/agreements`);
      setAgreements(res.data);
    } catch (err) {
      console.error('Error fetching agreements:', err);
      alert('Failed to fetch agreements');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      content: '',
      version: '',
      fileUrl: '',
      file: null
    });
    setEditingAgreement(null);
    setShowCreateForm(false);
  };

  const handleCreate = () => {
    resetForm();
    setShowCreateForm(true);
  };

  const handleEdit = (agreement) => {
    setFormData({
      title: agreement.title,
      content: agreement.content,
      version: agreement.version,
      fileUrl: agreement.fileUrl || '',
      file: null
    });
    setEditingAgreement(agreement._id);
    setShowCreateForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitData = new FormData();
    submitData.append('title', formData.title);
    submitData.append('content', formData.content);
    submitData.append('version', formData.version);
    submitData.append('isActive', false); // New agreements are inactive by default

    if (formData.file) {
      submitData.append('file', formData.file);
    }

    try {
      if (editingAgreement) {
        await axios.put(`${backendUrl}/api/admin/agreements/${editingAgreement}`, submitData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        alert('Agreement updated successfully');
      } else {
        await axios.post(`${backendUrl}/api/admin/agreements`, submitData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        alert('Agreement uploaded successfully');
      }

      resetForm();
      fetchAgreements();
    } catch (err) {
      console.error('Error saving agreement:', err);
      alert('Failed to save agreement');
    }
  };

  const handleDelete = async (agreementId) => {
    if (!window.confirm('Are you sure you want to delete this agreement?')) return;

    try {
      await axios.delete(`${backendUrl}/api/admin/agreements/${agreementId}`);
      fetchAgreements();
      alert('Agreement deleted successfully');
    } catch (err) {
      console.error('Error deleting agreement:', err);
      alert('Failed to delete agreement');
    }
  };

  const toggleStatus = async (agreementId, currentStatus) => {
    try {
      await axios.patch(`${backendUrl}/api/admin/agreements/${agreementId}/toggle-status`);
      fetchAgreements();
      alert(`Agreement ${currentStatus ? 'deactivated' : 'activated'} successfully`);
    } catch (err) {
      console.error('Error toggling status:', err);
      alert('Failed to update agreement status');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading agreements...</p>
      </div>
    );
  }

  return (
    <div className="manage-agreements">
      <div className="section-header">
        <h2>Manage Agreements</h2>
        <button onClick={handleCreate} className="create-btn">Upload New Agreement</button>
      </div>

      {showCreateForm && (
        <div className="agreement-form-container">
          <form onSubmit={handleSubmit} className="agreement-form">
            <h3>{editingAgreement ? 'Edit Agreement' : 'Upload New Agreement'}</h3>

            <div className="form-row">
              <div className="form-group">
                <label>Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Version *</label>
                <input
                  type="text"
                  value={formData.version}
                  onChange={(e) => setFormData({...formData, version: e.target.value})}
                  placeholder="e.g., 1.0, 2.1"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Content *</label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                rows="10"
                placeholder="Enter the agreement content here..."
                required
              />
            </div>

            <div className="form-group">
              <label>Upload File (PDF, DOC, etc.)</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx,.txt"
                onChange={(e) => setFormData({...formData, file: e.target.files[0]})}
              />
              <small className="file-hint">
                Or provide a direct URL below if the file is already hosted
              </small>
            </div>

            <div className="form-group">
              <label>File URL (optional)</label>
              <input
                type="url"
                value={formData.fileUrl}
                onChange={(e) => setFormData({...formData, fileUrl: e.target.value})}
                placeholder="https://example.com/agreement.pdf"
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn">
                {editingAgreement ? 'Update Agreement' : 'Upload Agreement'}
              </button>
              <button type="button" onClick={resetForm} className="cancel-btn">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="agreements-list">
        {agreements.map(agreement => (
          <div key={agreement._id} className="agreement-card">
            <div className="agreement-header">
              <div className="agreement-info">
                <h3>{agreement.title}</h3>
                <p className="version">Version: {agreement.version}</p>
              </div>
              <div className="agreement-status">
                <span className={`status-badge ${agreement.isActive ? 'active' : 'inactive'}`}>
                  {agreement.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>

            <div className="agreement-content-preview">
              <p>{agreement.content.substring(0, 200)}...</p>
            </div>

            <div className="agreement-meta">
              <span>Uploaded by: {agreement.uploadedBy?.name || 'Unknown'}</span>
              <span>Created: {formatDate(agreement.createdAt)}</span>
              {agreement.fileUrl && (
                <span>
                  File: <a href={`${backendUrl}${agreement.fileUrl}`} target="_blank" rel="noopener noreferrer">View File</a>
                </span>
              )}
            </div>

            <div className="agreement-actions">
              <button onClick={() => handleEdit(agreement)} className="edit-btn">Edit</button>
              <button onClick={() => toggleStatus(agreement._id, agreement.isActive)} className="status-btn">
                {agreement.isActive ? 'Deactivate' : 'Activate'}
              </button>
              <button onClick={() => handleDelete(agreement._id)} className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAgreements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/ManageUsers.css';

const backendUrl = process.env.REACT_APP_BACKEND_URL;
const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null);
  const [editForm, setEditForm] = useState({
    name: '',
    email: '',
    isAdmin: false
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/admin/users`);
      setUsers(res.data);
    } catch (err) {
      console.error('Error fetching users:', err);
      alert('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user._id);
    setEditForm({
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`${backendUrl}/api/admin/users/${editingUser}`, editForm);
      setEditingUser(null);
      fetchUsers();
      alert('User updated successfully');
    } catch (err) {
      console.error('Error updating user:', err);
      alert('Failed to update user');
    }
  };

  const handleDelete = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;

    try {
      await axios.delete(`${backendUrl}/api/admin/users/${userId}`);
      fetchUsers();
      alert('User deleted successfully');
    } catch (err) {
      console.error('Error deleting user:', err);
      alert('Failed to delete user');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading users...</p>
      </div>
    );
  }

  return (
    <div className="manage-users">
      <div className="section-header">
        <h2>Manage Users</h2>
        <p>Total Users: {users.length}</p>
      </div>

      <div className="users-table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Profile Status</th>
              <th>Agreement Status</th>
              <th>Joined</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>
                  {editingUser === user._id ? (
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                      className="edit-input"
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td>
                  {editingUser === user._id ? (
                    <input
                      type="email"
                      value={editForm.email}
                      onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                      className="edit-input"
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td>
                  {editingUser === user._id ? (
                    <select
                      value={editForm.isAdmin}
                      onChange={(e) => setEditForm({...editForm, isAdmin: e.target.value === 'true'})}
                      className="edit-select"
                    >
                      <option value={false}>User</option>
                      <option value={true}>Admin</option>
                    </select>
                  ) : (
                    <span className={`role-badge ${user.isAdmin ? 'admin' : 'user'}`}>
                      {user.isAdmin ? 'Admin' : 'User'}
                    </span>
                  )}
                </td>
                <td>
                  <span className={`status-badge ${user.isProfileCompleted ? 'completed' : 'pending'}`}>
                    {user.isProfileCompleted ? 'Completed' : 'Pending'}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${user.isAgreementSigned ? 'signed' : 'pending'}`}>
                    {user.isAgreementSigned ? 'Signed' : 'Pending'}
                  </span>
                </td>
                <td>{formatDate(user.createdAt)}</td>
                <td>
                  <div className="action-buttons">
                    {editingUser === user._id ? (
                      <>
                        <button onClick={handleUpdate} className="save-btn">Save</button>
                        <button onClick={() => setEditingUser(null)} className="cancel-btn">Cancel</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => handleEdit(user)} className="edit-btn">Edit</button>
                        <button onClick={() => handleDelete(user._id)} className="delete-btn">Delete</button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;

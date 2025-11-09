import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/ManageBlogs.css';

const backendUrl = process.env.REACT_APP_BACKEND_URL;
const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    tags: '',
    metaTitle: '',
    metaDescription: '',
    author: '',
    featured: false,
    published: false,
    image: null
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/admin/blogs`);
      setBlogs(res.data);
    } catch (err) {
      console.error('Error fetching blogs:', err);
      alert('Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      tags: '',
      metaTitle: '',
      metaDescription: '',
      author: '',
      featured: false,
      published: false,
      image: null
    });
    setEditingBlog(null);
    setShowCreateForm(false);
  };

  const handleCreate = () => {
    resetForm();
    setShowCreateForm(true);
  };

  const handleEdit = (blog) => {
    setFormData({
      title: blog.title,
      slug: blog.slug || '',
      excerpt: blog.excerpt,
      content: blog.content,
      tags: blog.tags.join(', '),
      metaTitle: blog.metaTitle || '',
      metaDescription: blog.metaDescription || '',
      author: blog.author || '',
      featured: blog.featured || false,
      published: blog.published,
      image: null
    });
    setEditingBlog(blog._id);
    setShowCreateForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitData = new FormData();
    submitData.append('title', formData.title);
    submitData.append('slug', formData.slug);
    submitData.append('excerpt', formData.excerpt);
    submitData.append('content', formData.content);
    submitData.append('tags', formData.tags);
    submitData.append('metaTitle', formData.metaTitle);
    submitData.append('metaDescription', formData.metaDescription);
    submitData.append('author', formData.author);
    submitData.append('featured', formData.featured);
    submitData.append('published', formData.published);

    if (formData.image) {
      submitData.append('image', formData.image);
    }

    try {
      if (editingBlog) {
        await axios.put(`${backendUrl}/api/admin/blogs/${editingBlog}`, submitData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        alert('Blog updated successfully');
      } else {
        await axios.post(`${backendUrl}/api/admin/blogs`, submitData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        alert('Blog created successfully');
      }

      resetForm();
      fetchBlogs();
    } catch (err) {
      console.error('Error saving blog:', err);
      alert('Failed to save blog');
    }
  };

  const handleDelete = async (blogId) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;

    try {
      await axios.delete(`${backendUrl}/api/admin/blogs/${blogId}`);
      fetchBlogs();
      alert('Blog deleted successfully');
    } catch (err) {
      console.error('Error deleting blog:', err);
      alert('Failed to delete blog');
    }
  };

  const togglePublish = async (blogId, currentStatus) => {
    try {
      await axios.patch(`${backendUrl}/api/admin/blogs/${blogId}/toggle-publish`);
      fetchBlogs();
      alert(`Blog ${currentStatus ? 'unpublished' : 'published'} successfully`);
    } catch (err) {
      console.error('Error toggling publish status:', err);
      alert('Failed to update publish status');
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
        <p>Loading blogs...</p>
      </div>
    );
  }

  return (
    <div className="manage-blogs">
      <div className="section-header">
        <h2>Manage Blogs</h2>
        <button onClick={handleCreate} className="create-btn">Create New Blog</button>
      </div>

      {showCreateForm && (
        <div className="blog-form-container">
          <form onSubmit={handleSubmit} className="blog-form">
            <h3>{editingBlog ? 'Edit Blog' : 'Create New Blog'}</h3>

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
                <label>Slug/URL</label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({...formData, slug: e.target.value})}
                  placeholder="blog-slug-url"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Meta Title</label>
                <input
                  type="text"
                  value={formData.metaTitle}
                  onChange={(e) => setFormData({...formData, metaTitle: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Author</label>
                <input
                  type="text"
                  value={formData.author || ''}
                  onChange={(e) => setFormData({...formData, author: e.target.value})}
                  placeholder="Author name"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Excerpt *</label>
              <textarea
                value={formData.excerpt}
                onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                rows="3"
                required
              />
            </div>

            <div className="form-group">
              <label>Content *</label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                rows="10"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Tags (comma separated)</label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({...formData, tags: e.target.value})}
                  placeholder="tag1, tag2, tag3"
                />
              </div>
              <div className="form-group">
                <label>Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Meta Description</label>
              <textarea
                value={formData.metaDescription}
                onChange={(e) => setFormData({...formData, metaDescription: e.target.value})}
                rows="2"
              />
            </div>

            <div className="form-row checkbox-row">
              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                  />
                  Featured
                </label>
              </div>
              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.published}
                    onChange={(e) => setFormData({...formData, published: e.target.checked})}
                  />
                  Publish immediately
                </label>
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn">
                {editingBlog ? 'Update Blog' : 'Create Blog'}
              </button>
              <button type="button" onClick={resetForm} className="cancel-btn">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="blogs-list">
        {blogs.map(blog => (
          <div key={blog._id} className="blog-card">
            <div className="blog-header">
              <h3>{blog.title}</h3>
              <div className="blog-status">
                <span className={`status-badge ${blog.published ? 'published' : 'draft'}`}>
                  {blog.published ? 'Published' : 'Draft'}
                </span>
              </div>
            </div>

            {blog.image && (
              <div className="blog-image">
                <img src={`${backendUrl}${blog.image}`} alt={blog.title} />
              </div>
            )}

            <p className="blog-excerpt">{blog.excerpt}</p>

            <div className="blog-meta">
              <span>Slug: {blog.slug}</span>
              <span>Created: {formatDate(blog.createdAt)}</span>
              {blog.tags && blog.tags.length > 0 && (
                <span>Tags: {blog.tags.join(', ')}</span>
              )}
            </div>

            <div className="blog-actions">
              <button onClick={() => handleEdit(blog)} className="edit-btn">Edit</button>
              <button onClick={() => togglePublish(blog._id, blog.published)} className="publish-btn">
                {blog.published ? 'Unpublish' : 'Publish'}
              </button>
              <button onClick={() => handleDelete(blog._id)} className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageBlogs;

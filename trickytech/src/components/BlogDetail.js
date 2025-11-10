import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../style/Blog.css';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const BlogDetail = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await axios.get(`${backendUrl}/api/blogs/${slug}`);
                setBlog(res.data);
            } catch (err) {
                console.error('Error fetching blog:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
    }, [slug]);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Loading blog...</p>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="container pt-100 pb-100">
                <div className="text-center">
                    <h2>Blog post not found</h2>
                    <p>The blog post you're looking for doesn't exist or has been removed.</p>
                </div>
            </div>
        );
    }

    return (
        <section className="blog-detail-section pt-100 xl-pt-150 lg-pt-100 pb-100 xl-pb-130 lg-pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <article className="blog-detail">
                            <header className="blog-header">
                                <h1 className="blog-title">{blog.title}</h1>
                                <div className="blog-meta">
                                    <span className="date">Published on {formatDate(blog.createdAt)}</span>
                                    {blog.tags && blog.tags.length > 0 && (
                                        <span className="tags">Tags: {blog.tags.join(', ')}</span>
                                    )}
                                </div>
                            </header>

                            {blog.image && (
                                <figure className="blog-image">
                                    <img src={`${backendUrl}${blog.image}`} alt={blog.title} className="w-100" />
                                </figure>
                            )}

                            <div className="blog-content">
                                <p className="blog-excerpt">{blog.excerpt}</p>
                                <div className="blog-body" dangerouslySetInnerHTML={{ __html: blog.content }} />
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetail;

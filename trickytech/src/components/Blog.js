import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../style/Blog.css';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const Blog = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const res = await axios.get(`${backendUrl}/api/blogs`);
            setBlogPosts(res.data);
        } catch (err) {
            console.error('Error fetching blogs:', err);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <section className="blog-section-two pt-100 xl-pt-150 lg-pt-100 pb-100 xl-pb-130 lg-pb-80 blog-section">
            <div className="container">
                <div className="position-relative">
                    <div className="title-one text-center mb-30 lg-mb-10">
                        <h2 className="fw-600 fs-45">Our Blog</h2>
                    </div>

                    {loading ? (
                        <div className="loading-container">
                            <div className="loading-spinner"></div>
                            <p>Loading blogs...</p>
                        </div>
                    ) : (
                        <div className="row gx-xxl-5">
                            {blogPosts.length > 0 ? (
                                blogPosts.map((post, index) => (
                                    <div className="col-lg-4 col-md-6" key={post._id || index}>
                                        <article className="blog-meta-one">
                                            <figure className="post-img m0">
                                                <Link to={`/blog/${post.slug}`} className="w-100 d-block">
                                                    <img src={post.image ? `${backendUrl}${post.image}` : "/images/default-blog.jpg"} alt={post.title} className="lazy-img w-100 tran4s" />
                                                </Link>
                                            </figure>
                                            <div className="post-data mt-30 lg-mt-20">
                                                <div><Link to={`/blog/${post.slug}`} className="date text-uppercase">{formatDate(post.createdAt)}</Link></div>
                                                <Link to={`/blog/${post.slug}`} className="mt-10 mb-25 lg-mb-20">
                                                    <h4 className="tran3s blog-title">{post.title}</h4>
                                                </Link>
                                                <div><Link to={`/blog/${post.slug}`} className="btn-seven">Read More</Link></div>
                                            </div>
                                        </article>
                                    </div>
                                ))
                            ) : (
                                <div className="col-12 text-center">
                                    <p>No blog posts available.</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Blog;

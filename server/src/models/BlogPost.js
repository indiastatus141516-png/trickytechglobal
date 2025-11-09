import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  excerpt: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  published: {
    type: Boolean,
    default: false,
  },
  tags: {
    type: [String],
    default: [],
  },
  metaTitle: {
    type: String,
  },
  metaDescription: {
    type: String,
  },
}, {
  timestamps: true,
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

export default BlogPost;

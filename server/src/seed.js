// server/src/seed.js
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Service from './models/Service.js';
import Testimonial from './models/Testimonial.js';
import BlogPost from './models/BlogPost.js';

dotenv.config();

async function runSeed() {
  await connectDB(process.env.MONGO_URI);

  console.log('🧹 Clearing old data...');
  await Service.deleteMany({});
  await Testimonial.deleteMany({});
  await BlogPost.deleteMany({});

  console.log('🌱 Seeding new data...');

  await Service.insertMany([
    {
      title: 'Career Coaching',
      description: 'Identify strengths, set goals, and navigate your path with confidence.'
    },
    {
      title: 'Training & Development',
      description: 'Enhance skills and grow your career with targeted programs.'
    },
    {
      title: 'Resume Building',
      description: 'ATS-friendly resumes that highlight your strengths.'
    },
    {
      title: 'Technical Support',
      description: 'Polish your profile and secure the right job faster.'
    }
  ]);

  await Testimonial.insertMany([
    {
      quote: 'Professional resume and strong profile attracted recruiters.',
      author: 'Mark T',
      role: 'Software Engineer'
    },
    {
      quote: 'Perfect resume and interview prep got me the job!',
      author: 'Raj P',
      role: 'Frontend Developer'
    },
    {
      quote: 'Optimized my profile and nailed the interview.',
      author: 'Sarah M',
      role: 'Frontend Developer'
    },
    {
      quote: 'Game-changer resume service. Boosted my confidence.',
      author: 'David L',
      role: 'Data Analyst'
    }
  ]);

  await BlogPost.insertMany([
    {
      title: 'Most complete job journey',
      excerpt: 'Signup and start find your job or talents.',
      content: 'We help you get the job of your dreams quickly with expert resume building, profile marketing, and interview preparation.'
    }
  ]);

  console.log('✅ Seed complete');
  process.exit(0);
}

runSeed();

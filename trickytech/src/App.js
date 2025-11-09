import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUsPage/AboutUs';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import OurServices from './components/OurServices';
import Login from './components/Login';
import Profile from './components/Profile';
import ProfileModal from './components/ProfileModal';
import Registration from './components/Registration';
import CareerCoaching from './components/CareerCoaching';
import TrainingDev from './components/TrainingDev';
import FAQ from './components/FAQ';
import JobOpportunities from './components/JobOpportunities';
import Contact from './components/contactus page/Contact';
import OutplacementPage from './components/OutplacementPage';
import OurApproach from './components/OurApproach';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
// Placeholder for contact page

function App() {
  const location = useLocation();

  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <ProfileModal />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-services" element={<OurServices />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/career-coaching" element={<CareerCoaching />} />
            <Route path="/training-dev" element={<TrainingDev />} />
            <Route path="/job-opportunities" element={<JobOpportunities />} />
            <Route path="/outplacement" element={<OutplacementPage />} />
            <Route path="/our-approach" element={<OurApproach />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer key={location.pathname} />
      </div>
    </AuthProvider>
  );
}

export default App;

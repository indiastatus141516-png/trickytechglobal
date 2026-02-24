import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import Services from './Services';
import OurServices from './OurServices';
import HowItWorks from './HowItWorks';
import Stats from './Stats';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import Blog from './Blog';
import JobPortalIntro from './JobPortalIntro';
import FillFormModal from './FillFormModal';

const Home = () => {
    const { authState, updateProfile } = useAuth();
    const { user } = authState;
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (user && (user.isFirstLogin || !user.isProfileCompleted)) {
            setShowModal(true);
        }
    }, [user]);

    const handleModalSubmit = async (data) => {
        try {
            await updateProfile(data);
            setShowModal(false);
            alert('Profile updated successfully');
        } catch (err) {
            alert('Error updating profile');
        }
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <HeroSection />
            <AboutUs />
            <Services />
            <HowItWorks />
            <OurServices />
            <Stats />
            <WhyChooseUs />
            <Testimonials />
            <Blog />
            <JobPortalIntro />
            {user && user.isProfileCompleted && user.isAgreementSigned && (
                <div style={{
                    textAlign: 'center',
                    padding: '16px',
                    background: 'linear-gradient(135deg, #28a745, #20c997)',
                    color: 'white',
                    fontSize: '22px',
                    fontWeight: 'bold',
                    borderRadius: '8px',
                    margin: '16px auto',
                    maxWidth: '560px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                }}>
                    ✅ Profile Completed
                </div>
            )}
            <FillFormModal isOpen={showModal} onClose={handleModalClose} onSubmit={handleModalSubmit} />
        </>
    );
};

export default Home;

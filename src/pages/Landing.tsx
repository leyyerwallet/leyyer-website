import React from 'react';
import NavbarMenu from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Body from '../components/Body/Body.tsx';
import {
  DashboardSharedProvider,
  useDashboardSharedVariable,
} from '../shared/dashboard.shared.tsx';

const Landing: React.FC = () => {
  const signupState = useDashboardSharedVariable();

  return (
    <div className='overflow-x-hidden m-0.5'>
      <DashboardSharedProvider signupState={signupState}>
        <NavbarMenu />
        <Body />
        <Footer />
      </DashboardSharedProvider>
    </div>
  );
};

export default Landing;
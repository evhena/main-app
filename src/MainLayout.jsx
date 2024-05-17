import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';

// import ProfilePage from 'accounts/ProfilePage';
// import SocialAccounts from 'accounts/SocialAccounts';

// import TemplatesList from 'platform/TemplatesList';
// import TemplateEditor from 'platform/TemplateEditor';
// import YourDesigns from 'platform/YourDesigns';

const TemplatesList = React.lazy(() => import('platform/TemplatesList'));
const TemplateEditor = React.lazy(() => import('platform/TemplateEditor'));
const YourDesigns = React.lazy(() => import('platform/YourDesigns'));
const ProfilePage = React.lazy(() => import('accounts/ProfilePage'));
const SocialAccounts = React.lazy(() => import('accounts/SocialAccounts'));

export default function MainLayout() {
  return (
    <>
      <Router>
        <hr />
        <NavBar />
        <hr />

        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/social" element={<SocialAccounts />} />
          <Route path="/templates" element={<TemplatesList />} />
          <Route path="/templates/:id" element={<TemplateEditor />} />
          <Route path="/" element={<YourDesigns />} />
        </Routes>
        <hr />
      </Router>
    </>
  );
}

import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import TeamMembers from './components/TeamMembers';
import ContactUsPage from './components/ContactUsPage';

function App() {
  return (
    <div className="app">
      <HomePage />
      <TeamMembers />
      <ContactUsPage />
    </div>
  );
}

export default App;

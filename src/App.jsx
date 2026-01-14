import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import FeedbackModal from './components/FeedbackModal';

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />

      {/* Floating Feedback Button */}
      <button
        onClick={() => setOpenModal(true)}
        className="fixed bottom-6 left-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full shadow-lg z-50"
      >
        Report / Feedback
      </button>

      {/* Feedback Modal */}
      {openModal && <FeedbackModal onClose={() => setOpenModal(false)} />}
    </>
  );
}

export default App;

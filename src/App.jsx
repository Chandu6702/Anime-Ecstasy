import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';   //  make sure default export
import Footer from './components/Footer';   //  make sure default export

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-4">
        <Outlet /> {/* This is where child routes render */}
      </main>
      <Footer />
    </>
  );
}

export default App;

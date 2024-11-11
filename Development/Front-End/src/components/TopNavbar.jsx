import React, { useState } from "react";
import "./Styles/TopNavbar.css";

// Modal Component
const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Login</h2>
        {/* Login Form */}
        <form>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="btn-primary">Login</button>
        </form>

        <p className="toggle-form">
          <span className="text-black">Don't have an account?</span>
        </p>

        <button onClick={onClose} className="btn-close">Close</button>
      </div>
    </div>
  );
};

const TopNavbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="top-navbar">
      <div className="top-nav-buttons">
        <button>Add Your Brand</button>
        <button onClick={toggleModal}>Login/Sign Up</button>
      </div>

      {/* Modal Component */}
      <LoginModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};

export default TopNavbar;

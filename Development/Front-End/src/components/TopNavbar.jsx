import React, { useState } from "react";
import "./Styles/TopNavbar.css";

// Modal for Login
const LoginModal = ({ isOpen, onClose, toggleToSignUp }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  if (!isOpen) return null;

  const toggleForm = () => {
    setIsSignUp(!isSignUp); // Toggle between login and sign up
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
        {/* Form Based on isSignUp */}
        <form>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          {!isSignUp && (
            <button type="submit" className="btn-primary">Login</button>
          )}
          {isSignUp && (
            <>
              <div className="input-group">
                <input type="password" placeholder="Confirm Password" required />
              </div>
              <button type="submit" className="btn-primary">Sign Up</button>
            </>
          )}
        </form>

        <p className="toggle-form">
          {/* Toggle between Login and Sign Up */}
          <a href="#" className="text-link" onClick={toggleForm}>
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
          </a>
        </p>

        <button onClick={onClose} className="btn-close">Close</button>
      </div>
    </div>
  );
};

// Modal for Add Your Brand
const AddBrandModal = ({ isOpen, onClose }) => {
  const [fileName, setFileName] = useState("");

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name); // Set the name of the selected file
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Add Your Brand</h2>
        {/* Add Your Brand Form */}
        <form>
          <div className="input-group">
            <input type="text" placeholder="Brand Name" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="input-group">
            <input type="number" placeholder="Contact Number" required />
          </div>

          {/* Upload Your Products Section */}
          <div className="input-group">
            <label htmlFor="product-upload" className="upload-btn">
              Upload Your Products
            </label>
            <input
              type="file"
              id="product-upload"
              name="product-upload"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="styled-input"
              required
            />
            {fileName && <div className="file-name">{fileName}</div>} {/* Display file name */}
          </div>

          <button type="submit" className="btn-primary">Submit</button>
        </form>

        <button onClick={onClose} className="btn-close">Close</button>
      </div>
    </div>
  );
};

const TopNavbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAddBrandModalOpen, setIsAddBrandModalOpen] = useState(false);

  // Toggle modal visibility
  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const toggleAddBrandModal = () => {
    setIsAddBrandModalOpen(!isAddBrandModalOpen);
  };

  return (
    <div className="top-navbar">
      <div className="top-nav-buttons">
        <button onClick={toggleAddBrandModal}>Add Your Brand</button>
        <button onClick={toggleLoginModal}>Login/Sign Up</button>
      </div>

      {/* Modal Components */}
      <LoginModal isOpen={isLoginModalOpen} onClose={toggleLoginModal} />
      <AddBrandModal isOpen={isAddBrandModalOpen} onClose={toggleAddBrandModal} />
    </div>
  );
};

export default TopNavbar;

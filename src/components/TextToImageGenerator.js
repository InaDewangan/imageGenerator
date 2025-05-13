// Importing necessary libraries and modules
import React, { useState, useEffect } from "react"; // React library and specific hooks
import axios from "axios"; // Axios for making HTTP requests
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import "./ImageGenerator.css";
import "@fontsource/poppins"; // Poppins font

// Defining a functional component called TextToImageGenerator
const TextToImageGenerator = ({ currentUser }) => {
  // State variables
  const [text, setText] = useState(""); // For storing input text
  const [images, setImages] = useState([]); // For storing the generated images
  const [loading, setLoading] = useState(false); // For loader state
  const [currentIndex, setCurrentIndex] = useState(0); // For pagination index
  const [buttonText, setButtonText] = useState("Random Image Generate"); // Button label

  const navigate = useNavigate();

  // Get user name
  const userEmail = currentUser.email;
  const user = userEmail.split('@');
  const userName = user[0].toUpperCase();

  // Logout
  const logoutAndDeleteUser = async () => {
    if (!currentUser) return;

    const confirmDelete = window.confirm("Are you sure you want to delete your account?");
    if (!confirmDelete) return;

    try {
      const email = currentUser.email;
      const password = prompt("Please re-enter your password to confirm:");

      if (!password) {
        alert("Password is required to delete the account.");
        return;
      }

      // Create credential
      const credential = EmailAuthProvider.credential(email, password);

      // Re-authenticate user
      await reauthenticateWithCredential(currentUser, credential);

      // Delete user
      await currentUser.delete();

      // Sign out and redirect
      await auth.signOut();
      alert("Account deleted and logged out successfully.");
      navigate("/signup");
    } catch (error) {
      console.error("Error deleting account:", error);
      alert("Error: " + error.message);
    }
  };

  // Update button text dynamically based on input text
  useEffect(() => {
    setButtonText(text ? "Generate Image" : "Random Image Generate");
  }, [text]);

  // Function to generate images
  const generateImage = async () => {
    setLoading(true); // Show loader
    const options = {
      method: "POST",
      url: "https://ai-image-generator3.p.rapidapi.com/generate",
      headers: {
        "x-rapidapi-key": "ca208cccf1msh8dbbd26faa34ddfp1fd346jsne1feeb41b36a",
        "x-rapidapi-host": "ai-image-generator3.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        prompt: text,
        page: 1,
      },
    };

    try {
      const response = await axios.request(options);
      setImages(response.data.results.images);
      setCurrentIndex(0);
      console.log("Images received:", response.data.results.images);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false); // Hide loader
    }
  };

  // Function to load more images
  const loadMoreImages = () => {
    setCurrentIndex(currentIndex + 4); // Increment index
  };

  // Function to download an image
  const downloadImage = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "blank";
    link.download = "generated-image.png";
    link.click();
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1>ImageGenerator</h1>
        <div className="user-info">
          {currentUser && (
            <>
              <span className="user-name">Welcome, {userName}</span>
              <button className="logout-btn" onClick={logoutAndDeleteUser}>
                Logout
              </button>
            </>
          )}
        </div>
      </nav>

      {/* Welcome Section */}
      <div className="welcome-section">
        <h2>Welcome & Go from text to image in seconds with ImageGenerator</h2>
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Enter text to generate your Image..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="generate-btn"
            onClick={generateImage}
            disabled={loading}
          >
            {loading ? "Generating..." : buttonText}
          </button>
        </div>
      </div>

      {/* Image Display Section */}
      <div className="image-container">
        {loading ? (
          <div className="loader"></div> // Loader during image generation
        ) : (
          images.slice(0, currentIndex + 4).map((image, index) => (
            <div key={index} className="image-card">
              <img src={image} alt={`Generated ${index}`} />
              <button
                className="download-btn"
                onClick={() => downloadImage(image)}
              >
                Download
              </button>
            </div>
          ))
        )}
      </div>

      {/* Load More Button */}
      {currentIndex + 4 < images.length && (
        <button className="load-more-btn" onClick={loadMoreImages}>
          Show More
        </button>
      )}
    </div>
  );
};

export default TextToImageGenerator;




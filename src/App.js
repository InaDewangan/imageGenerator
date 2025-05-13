import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import './App.css';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import TextToImageGenerator from './components/TextToImageGenerator';

function App() {
  // State to track whether the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
        {/* Define routes */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/login"
            element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
          />

          {/* Private Route: Protect the Image Generator Page */}
          <Route
            path="/image-generator"
            element={
              isLoggedIn ? (
                <TextToImageGenerator currentUser={currentUser}/>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
    </Router>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
// import TextToImageGenerator from './components/TextToImageGenerator';
// // import SignUpPage from './components/SignUpPage';
// // import LoginPage from './components/LoginPage';
// import CustomNavbar from './components/Navbar';
// import Footer from './components/Footer';
// import HomePage from './components/HomePage';


// import "@fontsource/poppins";
// function App() {
//   return (
//     <div className="App">
//       <CustomNavbar />
//       <HomePage />
//       <Footer />
//       {/* <Routes>
//         <Route path='/' element={<HomePage />} />
//         <Route path='/login' element={<LoginPage />} />
//         <Route path='/signup' element={<SignUpPage />} />
//       </Routes> */}
//       {/* <header className="text-white font-semibold">
//         <h1 className="bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] p-4 text-3xl" style={{ fontFamily: 'Poppins, sans-serif' }}>BeArt</h1>
//       </header>
//       <main className="p-4">
//         <TextToImageGenerator />
//       </main>
//       <footer className="bg-gray-800 p-4 text-white text-center relative w-full top-[22rem]"style={{ fontFamily: 'Poppins, sans-serif' }}>
//         <p>© 2024 AI Art Generator Becodewala-YouTube</p>
//       </footer> */}
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import CustomNavbar from './components/Navbar';
// import Footer from './components/Footer';
// import HomePage from './components/HomePage';
// import LoginPage from './components/LoginPage';
// import SignUpPage from './components/SignUpPage';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* Navbar appears on all pages */}
//         <CustomNavbar />
        
//         {/* Define routes */}
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<SignUpPage />} />
//         </Routes>
        
//         {/* Footer appears on all pages */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;



// src/components/HomePage.js
import React from 'react';
import CustomNavbar from './Navbar';
import Footer from './Footer';
import './HomePage.css';

import image1 from './Images/cat.png';
import image2 from './Images/birdHouse.png';
import image3 from './Images/bottle.png';
import image4 from './Images/house.png';
import image5 from './Images/kitchen.png';
import image6 from './Images/tree.png';
import image7 from './Images/sunset.jpeg';
import image8 from './Images/laptop.webp';

const prompts = [
    { image: image1, text: "A cozy kitchen with warm lighting and vintage decor." },
    { image: image2, text: "Colorful swirls and shapes with a playful aesthetic." },
    { image: image3, text: "Retro-style scientific illustration of a researcher." },
    { image: image4, text: "A bird in a floral setting, inspired by folk art." },
    { image: image5, text: "Abstract silver and gold liquid shapes blending together." },
    { image: image6, text: "A surreal tree in an autumn landscape." },
    { image: image7, text: "A serene sunset over a calm lake with mountains in the background, golden light reflecting on water." },
    { image: image8, text: "A cozy workspace with a laptop, coffee mug, notebook, and warm lighting on a wooden desk" }
];

const benefits = [
    {
        title: "It's free",
        description: "Use the AI image generator as much as you like, for any project, without spending a penny.",
        icon: "🎨"
    },
    {
        title: "It's fast",
        description: "With the power of generative AI in your hands, you can quickly transform your ideas into one-of-a-kind images.",
        icon: "⚡️"
    },
    {
        title: "It's precise",
        description: "We use API for high-quality images that closely match your description.",
        icon: "🎯"
    },
    {
        title: "It's versatile",
        description: "The AI image generator can create eye-catching images and help you edit photos like an expert.",
        icon: "🔧"
    },
    {
        title: "It's accessible",
        description: "Use it anytime, anywhere — no need to install anything. Just open your browser and start creating instantly.",
        icon: "🌐"
    },
    {
        title: "It's intelligent:",
        description: "Our AI understands context and detail, helping you generate creative and relevant images that truly match your vision.",
        icon: "🧠"
    }
];

const HomePage = () => {
    return (
        <div>
            <CustomNavbar />
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Create any image you can dream up with image generator</h1>
                    <p>Describe your ideas and then watch them transform from text to images...</p>
                </div>
            </div>

            <section className="prompt-section">
                <h2 className="section-title">Try out a few prompts</h2>
                <div className="prompt-grid">
                    {prompts.map((prompt, index) => (
                        <div className="prompt-card" key={index}>
                            <img src={prompt.image} alt="prompt" className="card-image" />
                            <div className="overlay">
                                <p className="overlay-text">{prompt.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="benefits-section">
                <h2 className="section-title">Why use image generator?</h2>
                <p className="section-description">Designer makes creating your own images easy...</p>
                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <div className="benefit-card" key={index}>
                            <div className="benefit-icon">{benefit.icon}</div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="about-section" id="about">
                <h2 className="about-title">About Image Generator</h2>
                <p className="about-description">Our Image Generator is designed to help you create custom images effortlessly...</p>
                <div className="about-cards">
                    <div className="about-card">
                        <h3>Our Mission</h3>
                        <p>Our mission is to make image generation simple, fast, and accessible to everyone. By combining powerful AI with an easy-to-use interface, we help users create high-quality visuals without the need for complex tools. We’re committed to continuous improvement and user-focused design.</p>
                    </div>
                    <div className="about-card">
                        <h3>Our Team</h3>
                        <p>We’re a small team of passionate developers, designers, and AI enthusiasts who believe in the power of technology to unlock creativity. With backgrounds in software engineering and machine learning, we work together to bring smart, user-friendly solutions to life.</p>
                    </div>
                    <div className="about-card">
                        <h3>Join Our Community</h3>
                        <p>Be part of a creative and supportive community where users share ideas, showcase their work, and help each other grow. Whether you're new to image generation or an experienced creator, there’s a place for you here. Join us and help shape the future of digital creativity.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HomePage;

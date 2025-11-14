// src/pages/Home.jsx

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaRoute, FaStrikethrough, FaUserCheck } from 'react-icons/fa';
import pic1 from '../assets/company-img.jpg';
import  pic2 from '../assets/showcase-photo1.jpg';

// Section 1: Header/Hero
const HeaderSection = () => (
    <header className='header'>
       {/* Navbar uses its own background color, which is overridden by the header image's pseudo-element. isDark=false for transparent effect. */}
       <Navbar isDark={false} /> 
        <div className="header-content">
            <h1 className='lg-heading text-light main-heading'>travel the world</h1>
            <p className='text-light'>travel the world, experience the greateness, it's the best gift given by nature</p>
            <a href="#/about" className='btn btn-primary text-red md-heading'>Explore Places</a>
        </div>
    </header>
);

// Section 2: Showcase (Two Rows)
const ShowcaseSection = () => (
    <section className='showcase'>
        <div className="container">
            {/* Row 1: Image Left, Text Right */}
            <div className="row row1">
                <div className="img-box">
                    <img src={pic1} alt="Deganvy, U.K" />
                </div>
                <div className="text-box">
                    <h2 className='lg-heading text-black'>DEGANVY, U.K</h2>
                    <p className='text-gray'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit incidunt nulla a corporis eveniet pariatur maiores, id quis, totam dolore praesentium facere consequatur rem, fuga minus! Rerum, dolorem praesentium. Nemo?</p>
                    <a href="#/about" className='btn btn-secondary'>More</a>
                </div>
            </div>
            {/* Row 2: Image Right, Text Left (Order changed in HTML but layout controlled by CSS float) */}
            <div className="row row2">
                <div className="img-box">
                    <img src={pic2} alt="Desert, Egypt" />
                </div>
                <div className="text-box">
                    <h2 className='lg-heading text-black'>DESERT, EGYPT</h2>
                    <p className='text-gray'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, amet ratione, quas laborum porro, explicabo vero ipsum laudantium nesciunt eos illum pariatur obcaecati fugiat asperiores nulla adipisci. Porro, atque itaque.</p>
                    <a href="#/about" className='btn btn-secondary'>More</a>
                </div>
            </div>
        </div>
    </section>
);

// Section 3: Features (Three Boxes)
const FeaturesSection = () => (
    <section className="features">
        <div className="container">
            <div className="box-wrapper">
                <div className="box box-1">
                    <FaRoute className="fas fa-route fa-2x text-red" />
                    <h2 className="md-heading">Adventure</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, quia. Corporis dolores ipsa a veniam molestias beatae, fuga ex laboriosam.</p>
                </div>
                <div className="box box-2">
                    <FaStrikethrough className="fas fa-strikethrough fa-2x" />
                    <h2 className="md-heading">Less Price</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, quia. Corporis dolores ipsa a veniam molestias beatae, fuga ex laboriosam.</p>
                </div>
                <div className="box box-3">
                    <FaUserCheck className="fas fa-user-check fa-2x text-red" />
                    <h2 className="md-heading">Experice</h2>    
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, quia. Corporis dolores ipsa a veniam molestias beatae, fuga ex laboriosam.</p>
                </div>
            </div>
        </div>
    </section>
);

const Home = () => {
    return (
        <>
            <HeaderSection />
            <ShowcaseSection />
            <FeaturesSection />
            <Footer />
        </>
    );
};

export default Home;
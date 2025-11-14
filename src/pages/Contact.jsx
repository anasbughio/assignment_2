// src/pages/Contact.jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneSquareAlt } from 'react-icons/fa';
import companyImg from '../assets/company-img.jpg';

const ContactSection = () => (
    <section className="contact-form">
        <div className="container">
            <div className="form-wrapper">
                <div className="company-address">
                    <div className="address-group">
                        <FaMapMarkerAlt className="fas fa-map-marker-alt fa-3x text-red" />
                        <h2 className="text-gray md-heading">Location</h2>
                        <p>#2661 Janakpuri Colony, city name, town name</p>
                    </div>
                    <div className="address-group">
                        <FaEnvelope className="far fa-envelope fa-3x text-red" />
                        <h2 className="text-gray md-heading">Email</h2>
                        <p>harshitvashisth@mycompany.com</p>
                    </div>
                    <div className="address-group">
                        <FaPhoneSquareAlt className="fas fa-phone-square-alt fa-3x text-red" />
                        <h2 className="text-gray md-heading">Call</h2>
                        <p>+910101010101</p>
                    </div>
                    <img src={companyImg} alt="Company Image" />
                </div>
                <form action="" className="form">
                    <h1 className="lg-heading text-black">Contact Us</h1>
                    <p className="text-gray">Let us know your questions, suggestions and concerns by filling out the contact form below.</p>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="" id="username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="" id="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="" id="phone" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea name="" id="message"> </textarea>
                    </div>
                    <button type="submit" className='form-btn'>Submit</button>
                </form>
            </div>
        </div>
    </section>
);

const Contact = () => {
    return (
        <>
            <Navbar isDark={true} />
            <ContactSection />
            <Footer />
        </>
    );
};

export default Contact;
import React, { useState, useEffect } from 'react';
import './Portfolio.css'

const Portfolio = () => {
    const [navActive, setNavActive] = useState(false);
    const [certificationsOpen, setCertificationsOpen] = useState(false);
    const [resumeOpen, setResumeOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeNav = () => {
        setNavActive(false);
    };

    const toggleCertifications = () => {
        setCertificationsOpen(!certificationsOpen);
    };

    const toggleResume = () => {
        setResumeOpen(!resumeOpen);
    };

    const openModal = (src) => {
        setModalImage(src);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalImage('');
    };

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        console.log('Form submitted:', formData);
        alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.project-card, .skill-item');
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                if (rect.top <= window.innerHeight * 0.9) {
                    element.classList.add('animate');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const lazyImages = document.querySelectorAll('img[data-src]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        lazyImages.forEach(img => observer.observe(img));
    }, []);

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <header>
                <nav>
                    <div className="logo">Vemula Chakravarthy</div>
                    <ul className={`nav-links ${navActive ? 'active' : ''}`}>
                        <li><a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a></li>
                        <li><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>About</a></li>
                        <li><a href="#education" onClick={(e) => handleSmoothScroll(e, '#education')}>Education</a></li>
                        <li><a href="#skills" onClick={(e) => handleSmoothScroll(e, '#skills')}>Skills</a></li>
                        <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}>Projects</a></li>
                        <li><a href="#certifications" onClick={(e) => handleSmoothScroll(e, '#certifications')}>Certifications</a></li>
                        <li><a href="#resume" onClick={(e) => handleSmoothScroll(e, '#resume')}>Resume</a></li>
                        <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a></li>
                    </ul>
                    <div className={`burger ${navActive ? 'toggle' : ''}`} onClick={toggleNav}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </nav>
            </header>

            <main>
                <section id="home" className="section hero">
                    <div className="container">
                        <div className="hero-content">
                            <h1>Hi, I'm <span>Vemula Chakravarthy</span></h1>
                            <h2>Computer Science Student</h2>
                            <p>
                                Passionate about creating innovative solutions through code.
                                Currently pursuing my B.Tech in Computer Science at Amrita Vishwa Vidyapeetham, Coimbatore.
                            </p>
                            <div className="hero-buttons">
                                <a href="#projects" className="btn" onClick={(e) => handleSmoothScroll(e, '#projects')}>View Projects</a>
                                <a href="#contact" className="btn btn-outline" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact Me</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about" className="section">
                    <div className="container">
                        <h2 className="section-title">About Me</h2>
                        <div className="about-content">
                            <div className="about-image">
                                <img src="Photo.jpg" alt="Vemula Chakravarthy" />
                            </div>
                            <div className="about-text">
                                <p>
                                    I am a third-year Computer Science Engineering student at Amrita Vishwa Vidyapeetham with a strong passion for technology and solid grounding in programming with languages like Python, C, and Java.
                                </p>
                                <p>
                                    My core interests lie in Web Development and Computer Science fundamentals such as Data Structures, Algorithms, and Operating Systems. I enjoy building responsive web applications, experimenting with front-end frameworks like React, and writing clean, efficient backend logic.
                                </p>
                                <p>
                                    I'm a fast learner, constantly exploring new tools and technologies to stay ahead in the tech world. I thrive on solving real-world problems and aim to contribute to meaningful software solutions while continuously growing as a developer.
                                </p>
                                <div className="about-info">
                                    <div className="info-item">
                                        <i className="fas fa-user"></i>
                                        <p>Vemula Chakravarthy</p>
                                    </div>
                                    <div className="info-item">
                                        <i className="fas fa-envelope"></i>
                                        <p>chakravrthyvemula25@gmail.com</p>
                                    </div>
                                    <div className="info-item">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <p>Coimbatore, India</p>
                                    </div>
                                    <div className="info-item">
                                        <i className="fas fa-graduation-cap"></i>
                                        <p>Amrita Vishwa Vidyapeetham</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="education" className="section">
                    <div className="container">
                        <h2 className="section-title">Education</h2>
                        <div className="education-container">
                            <div className="education-card">
                                <h3>Bachelor of Technology</h3>
                                <span className="date">2023 - Present</span>
                                <p>Amrita Vishwa Vidyapeetham</p>
                                <p>Computer Science and Engineering</p>
                                <p>CGPA: 7.0 - Avg</p>
                            </div>
                            <div className="education-card">
                                <h3>Pre-University College</h3>
                                <span className="date">2021 - 2023</span>
                                <p>FIITJEE Junior College, Vijayawada</p>
                                <p>MPC</p>
                                <p>Percentage: 91%</p>
                            </div>
                            <div className="education-card">
                                <h3>Secondary School</h3>
                                <span className="date">2020</span>
                                <p>NSM Public School, Andhra Pradesh</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="skills" className="section">
                    <div className="container">
                        <h2 className="section-title">Skills</h2>
                        <div className="skills-container">
                            {[
                                { icon: 'fab fa-html5', name: 'HTML', rating: 4 },
                                { icon: 'fab fa-css3-alt', name: 'CSS', rating: 4 },
                                { icon: 'fab fa-js', name: 'JavaScript', rating: 4 },
                                { icon: 'fab fa-react', name: 'React', rating: 3 },
                                { icon: 'fab fa-python', name: 'Python', rating: 4 },
                                { icon: 'fas fa-code', name: 'C', rating: 3 },
                                { icon: 'fab fa-java', name: 'Java', rating: 3 },
                                { icon: 'fas fa-project-diagram', name: 'Haskell', rating: 2 },
                                { icon: 'fas fa-database', name: 'SQL', rating: 3 },
                                { icon: 'fas fa-cogs', name: 'Data Structures & Algorithms', rating: 4 },
                                { icon: 'fas fa-desktop', name: 'Operating Systems', rating: 3 },
                                { icon: 'fas fa-shield-alt', name: 'Network Security', rating: 3 },
                                { icon: 'fas fa-server', name: 'DBMS', rating: 3 },
                            ].map((skill, index) => (
                                <div key={index} className="skill-item" data-rating={skill.rating}>
                                    <i className={skill.icon}></i>
                                    <p>{skill.name}</p>
                                    <div className="skill-rating"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="projects" className="section">
                    <div className="container">
                        <h2 className="section-title">Projects</h2>
                        <div className="projects-container">
                            {[
                                {
                                    img: 'project1photo.jpg',
                                    title: 'Task Management System (Python)',
                                    desc: `Python Console-based task manager using custom data structures like Stack, Queue, MinHeap, BST, and more.`,
                                    desc1:`Includes Undo/Redo functionality using stacks and priority scheduling with min-heap.`,
                                    desc2:'Built with OOP and integrated custom Trie and Graphs for advanced features',
                                },
                                {
                                    img: 'Project2Photo.jpg',
                                    title: 'SweetHome Real Estate Portal (HTML, CSS, JS)',
                                    desc: `A static multi-page website for property listings, agent details, and location filtering.`,
                                    desc1:`Designed responsive layouts for desktop and mobile using custom CSS and Flexbox`,
                                    desc2:'Created reusable HTML components (property cards, navigation) to streamline development.',
                                },
                                {
                                    img: 'Project3Photo.jpg',
                                    title: 'Weather App (JavaScript & API)',
                                    desc: `Built a real-time weather application using OpenWeatherMap API and JavaScript.`,
                                    desc1:`Shows current weather, temperature, humidity, and city-based search.`,
                                    desc2:'Implements error handling for invalid city input and responsive design for all devices.',
                                }
                            ].map((project, index) => (
                                <div key={index} className="project-card">
                                    <img src={project.img} alt={`Project ${index + 1}`} />
                                    <div className="project-info">
                                        <h3>{project.title}</h3>
                                        <p>{project.desc}</p>
                                        <p>{project.desc1}</p>
                                        <p>{project.desc2}</p>

                                    </div>
                

                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="certifications" className="section">
                    <div className="container">
                        <div className="certifications-header">
                            <h2 className="section-title">Certifications</h2>
                            <button className="toggle-certifications" onClick={toggleCertifications}>
                                {certificationsOpen ? 'Hide Certifications' : 'Explore Certifications'} <i className={`fas fa-chevron-${certificationsOpen ? 'up' : 'down'}`}></i>
                            </button>
                        </div>
                        <div className={`certifications-container ${certificationsOpen ? 'show' : ''}`}>
                            <div className="certification-card">
                                <div className="certification-info">
                                    <h3>My Certifications</h3>
                                    <ul style={{ paddingLeft: '1.2rem' }}>
                                        <li>Python for Data Science Bootcamp – Udemy (Apr 2025)</li>
                                        <li>Certified Front-End Web Developer – Coursera (Aug 2024)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="resume" className="section">
                    <div className="container">
                        <div className="resume-header">
                            <h2 className="section-title">My Resume</h2>
                            <button className="toggle-resume" onClick={toggleResume}>
                                {resumeOpen ? 'Hide Resume' : 'Explore Resume'} <i className={`fas fa-chevron-${resumeOpen ? 'up' : 'down'}`}></i>
                            </button>
                        </div>
                        <div className={`resume-container ${resumeOpen ? 'show' : ''}`}>
                            <div className="resume-options">
                                <a href="Chakravarthy-Resume.pdf" download className="btn">
                                    <i className="fas fa-download"></i> Download PDF
                                </a>
                                <a href="Chakravarthy-Resume.pdf" target="_blank" className="btn btn-outline">
                                    <i className="fas fa-expand"></i> Open Fullscreen
                                </a>
                            </div>
                            <div className="pdf-preview">
                                <iframe
                                    src="Chakravarthy-Resume.pdf#view=fitH"
                                    width="100%"
                                    height="500px"
                                    title="Resume Preview"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="section">
                    <div className="container">
                        <h2 className="section-title">Get In Touch</h2>
                        <div className="contact-container">
                            <div className="contact-info">
                                <h3>Contact Information</h3>
                                <div className="info-item">
                                    <i className="fas fa-envelope"></i>
                                    <p>chakravrthyvemula25@gmail.com</p>
                                </div>
                                <div className="info-item">
                                    <i className="fas fa-phone"></i>
                                    <p>+91 8897931310</p>
                                </div>
                                <div className="info-item">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <p>Vijayawada, Andhra Pradesh, India</p>
                                </div>
                            </div>
                            <div className="contact-form">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleFormChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleFormChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        value={formData.subject}
                                        onChange={handleFormChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleFormChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn" onClick={handleSubmit}>Send Message</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <div className="footer-social-links">
                    <a href="https://github.com/Chakri-2005" target="_blank" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/chakravarthy-vemula-379158308/" target="_blank" aria-label="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/chakravarthy_vemula?igsh=YzZhcXJvajVrcndh&utm_source=qr" target="_blank" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://leetcode.com/u/Chakravarthy_Vemula/" target="_blank" aria-label="LeetCode">
                        <i className="fas fa-code"></i>
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} Vemula Chakravarthy. All rights reserved.</p>
            </footer>

            <div id="ttt-modal" className={`modal ${modalOpen ? 'show' : ''}`}>
                <span className="close" id="ttt-close" onClick={closeModal}>&times;</span>
                <div className="modal-content">
                    <img className="modal-img" id="ttt-modal-img" src={modalImage} alt="Tic Tac Toe Screenshot" />
                    <div className="modal-caption"></div>
                </div>
                <div className="modal-controls">
                    <button id="ttt-prev" className="modal-arrow">&#10094;</button>
                    <button id="ttt-next" className="modal-arrow">&#10095;</button>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
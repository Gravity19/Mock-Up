import React from 'react';
import "../styles/Footer.css";

function Footer() {
    return (
        <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">our services</a></li>
                            <li><a href="#">privacy policy</a></li>
                            <li><a href="#">affiliate program</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Chatbot</a></li>
                            <li><a href="#">returns</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Department</h4>
                        <ul>
                            <li><a href="#">Computer Science</a></li>
                            <li><a href="#">Communication</a></li>
                            <li><a href="#">Power</a></li>
                            <li><a href="#">Mechanical</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>follow us</h4>
                        <div class="social-links">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
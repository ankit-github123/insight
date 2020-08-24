import React from "react";
import "./footer.css";
import { Link , BrowserRouter as Router, Route} from "react-router-dom";
function Footer() {
    var day = new Date();
    const year =day.getFullYear();
    return <footer class="footer-section">
                <div class="container footer-container">
                    <div class="footer-cta pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div class="cta-text">
                                        <h4>Find us</h4>
                                        <span>Citech ,Bangalore</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="fas fa-phone"></i>
                                    <div class="cta-text">
                                        <h4>Call us</h4>
                                        <span>9620708651</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="far fa-envelope-open"></i>
                                    <div class="cta-text">
                                        <h4>Mail us</h4>
                                        <span>ankit190900@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-content pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-logo">
                                        <a href=""><img src="https://i.ibb.co/QDy827D/ak-logo.png" class="img-fluid" alt="logo"/></a>
                                    </div>
                                    <div class="footer-text">
                                        <p>This website is designed by Ankit Kumar-A K web designers.Thank you for your ❤ and 🤝.<br/>Front-end designer<br/>ANKIT KUMAR</p>
                                    </div>
                                    <div class="footer-social-icon">
                                        <span>Follow us</span>
                                        <a href="https://www.facebook.com/profile.php?id=100007148380703"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                        <a href="https://www.instagram.com/be_a_nandan/"><i class="fa fa-instagram insta-bg" ></i></a>
                                        <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                    
                                        <Link to="/"><li><a href="#">Home</a></li></Link>
                                        <Link to="about"><li><a href="#">about</a></li></Link>
                                        <Link to=""><li><a href="#">services</a></li></Link>
                                        <Link to="about"><li><a href="#">portfolio</a></li></Link>
                                        <Link to=""><li><a href="#">Contact</a></li></Link>
                                        <Link to="about"><li><a href="#">About us</a></li></Link>
                                        <Link to=""><li><a href="#">Our Services</a></li></Link>
                                        <Link to=""><li><a href="#">Expert Team</a></li></Link>
                                        <Link to=""><li><a href="#">Contact us</a></li></Link>
                                        <Link to="news"><li><a href="#">Latest News</a></li></Link>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div class="footer-text mb-25">
                                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div class="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address"/>
                                            <button><i class="fab fa-telegram-plane"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div class="copyright-text">
                                    <p>Copyright &copy; {year}, All Right Reserved </p>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div class="footer-menu">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Terms</a></li>
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Policy</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </footer>
}
export default Footer
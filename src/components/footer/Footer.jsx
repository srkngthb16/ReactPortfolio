import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Serkan</h1>

                <ul className="footer_list">
                    <li>
                        <a href="#about" 
                        className="footer_link">Hakkımda</a>
                    </li>

                    <li>
                        <a href="#portfolio" 
                        className="footer_link">Hizmetler</a>
                    </li>
                </ul>

                <div className="footer_social">
                <a href="#" className="footer_social-link" target="_blank">
                <i class="bx bxl-linkedin"></i>
                </a>

                <a href="https://github.com/srkngthb16" className="footer_social-link" target="_blank">
                <i class="bx bxl-github"></i>
                </a>
                </div>

                {/* <span className="footer_copy">Tüm Hakları 
                    Saklıdır falan filan</span> */}
            </div>
        </footer>
    );
};

export default Footer;
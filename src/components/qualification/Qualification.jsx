import React, {useState} from "react";
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    
    return (
        <section className="qualification section" id="portfolio">
            <h2 className="section_title">Pörtföy</h2>
            <span className="section_subtitle">Kişisel Yolculuğum</span>

            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div 
                    className={toggleState === 1 ? 
                        "qualification_button qualification_active button--flex" : 
                        "qualification_button button--flex"
                    }
                    onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification_icon"></i> Eğitim
                    </div>

                    <div className={toggleState === 2 ? 
                        "qualification_button qualification_active button--flex" : 
                        "qualification_button button--flex"
                    }
                    onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification_icon"></i> Deneyim
                    </div>
                </div>

                <div className="qualification_sections">
                    <div 
                    className={toggleState === 1 
                        ? "qualification_content qualification_content-active"
                         : "qualification_content"}>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">
                                    Üniversite
                                </h3>
                                <span className="qualification_subtitle">
                                    Kahramanmarş Sütçü İmam Üniversitesi
                                </span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - 2024
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">
                                   İngilizce Eğitimi
                                </h3>
                                <span className="qualification_subtitle">
                                UNİVERSİTY OF ECONOMİCS AND HUMAN
                                SCİENCES İN WARSAW 
                                </span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2021 - 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">
                                    Lise
                                </h3>
                                <span className="qualification_subtitle">
                                SİMYA KOLEJİ NEVŞEHİR 
                                </span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2016 - 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 
                        ? "qualification_content qualification_content-active"
                         : "qualification_content"}>
                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">
                                   İş Deneyimi
                                </h3>
                                <span className="qualification_subtitle">
                               Netlog Lojistik - Türkiye
                                </span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2025 - 2025
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">
                                    Staj
                                </h3>
                                <span className="qualification_subtitle">
                                   M2 Teknoloji Hizmetleri - Türkiye
                                </span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2024 - 2024
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
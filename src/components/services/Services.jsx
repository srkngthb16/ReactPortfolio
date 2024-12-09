import React, { useState } from "react";
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="services section" id="services">
            <h2 className="section_title">Hizmetler </h2>
            <span className="section_subtitle">Ne Sunabilrim</span>

            <div className="services_container container grid">
                {/* <div className="services_content">
                    <div>
                        <i className="uil uil-web-grid services_icon"></i>
                        <h3 className="services_title">Product <br/> Designer </h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right services_button-icon"></i></span>

                    <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                            <h3 className="services_modal-title">Product Designer</h3>
                            <p className="services_modal-description">Lorem 
                                ipsum dolor, sit amet consectetur 
                                adipisicing elit. Pariatur id libero 
                                dolorum quasi eligendi error nemo 
                                quibusdam eaque maiores at aut magnam 
                                itaque velit nulla tempore, ipsam, nisi 
                                labore minima.</p>

                                <ul className="services_modal-services gird">
                                    <li className="services_modal-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">
                                            I develop the user interface.
                                        </p>
                                    </li>

                                    <li className="services_modal-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">
                                            Web page development.
                                        </p>
                                    </li>

                                    <li className="services_modal-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">
                                            I create UX element interactions.
                                        </p>
                                    </li>

                                    <li className="services_modal-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">
                                            I position your company brand.
                                        </p>
                                    </li>

                                    <li className="services_modal-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">
                                            Design and mockups of products for companies.
                                        </p>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div> */}

                <div className="services_content">
                    <div>
                        <i className="uil uil-arrow services_icon"></i>
                        <h3 className="services_title">Uİ/UX <br />Tasarım</h3>
                    </div>

                    <span onClick={() => toggleTab(2)} className="services_button">Dahasını Gör <i className="uil uil-arrow-right services_button-icon"></i></span>

                    <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                            <h3 className="services_modal-title">Uİ/UX Tasarım</h3>
                            <p className="services_modal-description">Kullanıcı merkezli tasarımlara olan tutkum, beni hem görsel olarak
                                 çekici hem de işlevsel arayüzler oluşturmaya yönlendiriyor. UI/UX tasarımında edindiğim bilgilerle, 
                                 kullanıcı deneyimini optimize etmek ve etkileşimli web uygulamaları geliştirmek için 
                                 sabırsızlanıyorum.</p>

                                <ul className="services_modal-services gird">
                                    <li className="services_modal-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">
                                            Kullanıcı arayüzü geliştirme.
                                        </p>
                                    </li>

                                    <li className="services_modal-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">
                                            Web sayfası geliştirme.
                                        </p>
                                    </li>

                                    <li className="services_modal-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">
                                            Kullanıcı arabirimi elemanı etkileşimleri.
                                        </p>
                                    </li>

                                    <li className="services_modal-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">
                                        Markanızın pazardaki yerini belirler ve güçlendiririm.
                                        </p>
                                    </li>

                                    <li className="services_modal-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">
                                            Şirketler için web sitesi tasarımı ve prototipleri.
                                        </p>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-edit services_icon"></i>
                        <h3 className="services_title">Görsel <br />Tasarım</h3>
                    </div>

                    <span onClick={() => toggleTab(3)} className="services_button">Dahasını Gör <i className="uil uil-arrow-right services_button-icon"></i></span>

                    <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                            <h3 className="services_modal-title">Görsel Tasarım</h3>
                            <p className="services_modal-description">Yeni mezun bir yazılımcı olarak, Photoshop ve video düzenleme 
                                alanındaki yetkinliğimle, dijital dünyada fark yaratacak görsel çözümler üretiyorum. Projelerinize
                                 yenilikçi bir bakış açısı getirmek için sabırsızlanıyorum.</p>

                                <ul className="services_modal-services gird">
                                    <li className="services_modal-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">
                                        Web, mobil ve sosyal medya için görsel ve yazılımsal içerik üretebilirim.
                                        </p>
                                    </li>

                                    <li className="services_modal-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">
                                        Tutarlı bir marka imajı oluşturabilrim.
                                        </p>
                                    </li>

                                    <li className="services_modal-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">
                                        Hem tasarım hem yazılım bilgisini kullanarak maliyet ve zaman tasarrufu sağlayabilirim.
                                        </p>
                                    </li>

                                    {/* <li className="services_modal-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">
                                            I position your company brand.
                                        </p>
                                    </li>

                                    <li className="services_modal-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_modal-info">
                                            Design and mockups of products for companies.
                                        </p>
                                    </li> */}
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services

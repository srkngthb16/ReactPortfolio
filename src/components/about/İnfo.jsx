import React from "react"

const İnfo = () => {
    return (
        <div className="about_info gird">
            <div className="about_box">
            <i class="bx bx-award about_icon"></i>

                <h3 className="about_title">Deneyim</h3>
                <span className="about_subtitle">Stajer</span>
            </div>
            
            <div className="about_box">
            <i class="bx bx-briefcase-alt about_icon"></i>

                <h3 className="about_title">Tamamlanmış</h3>
                <span className="about_subtitle">2 + Proje</span>
            </div>

             <div className="about_box">
             <i class="bx bx-support about_icon"></i>

                <h3 className="about_title">Destek</h3>
                <span className="about_subtitle">24/7 Çevrimiçi</span>
            </div>      
        </div>
    )
}

export default İnfo
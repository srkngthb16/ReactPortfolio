import React from "react"

const İnfo = () => {
    return (
        <div className="about_info gird">
            <div className="about_box">
            <i class="bx bx-award about_icon"></i>

                <h3 className="about_title">Experience</h3>
                <span className="about_subtitle">intern</span>
            </div>
            
            <div className="about_box">
            <i class="bx bx-briefcase-alt about_icon"></i>

                <h3 className="about_title">Completed</h3>
                <span className="about_subtitle">2 + Projects</span>
            </div>

             <div className="about_box">
             <i class="bx bx-support about_icon"></i>

                <h3 className="about_title">Support</h3>
                <span className="about_subtitle">Online 24/7</span>
            </div>      
        </div>
    )
}

export default İnfo
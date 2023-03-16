import React from 'react';
import Typical from "react-typical"
import "./Profile.css"
function Profile(props) {
    return (
        <div>
            <div className="profile-container">
                <div className="profile-parent">
                    <div className="profile-details">
                        <div className="colz">
                            <div className="colz-icon">
                            <a href="#">
                                <i className="fa fa-facebook-square"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-linkedin"></i>
                            </a>
                            </div>
                        </div>
                        <div className="profile-details-name">
                            <span className="primary-text">
                                {""}
                                Hello, I'M <span className="highlighted-text">Priyanshu</span>
                            </span>
                        </div>
                        <div className="profile-details-role">
                            <span className="primary-text">
                                {""}
                                <h3>
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "full stack developer",1000,
                                    "frontend developer",1000
                                ]}/>
                                    </h3>
                                <span className="profile-role-tagline">
                                    eat sleep code repeat
                                </span>
                            </span>
                        </div>
                        <div className="profile-optins">
                            <button className="btn primary-btn">
                            {""}
                            Hire me {""}
                            </button>
                            <a href="Resume- Priyanshu.Swain_46250556.pdf" download="Resume Resume- Priyanshu.Swain_46250556.pdf">
                            <button className="btn btn-outline-primary"> Get Resume</button>
                            </a>
                        </div>
                    </div>
                        <div className="profile-picture">
                            <div className="profile-picture-bg">
                            </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Profile;
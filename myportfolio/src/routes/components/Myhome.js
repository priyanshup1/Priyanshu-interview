import React from 'react'
import './Myhome.css'
import Typical from "react-typical";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Myhome() {

    const notifyyy = () =>
        toast.info('Welcome to my Portfolio', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
  return (
    <div>
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="profile-details-name">
                            <span className="primary-text">
                                {""}
                              Hello, I'M <span className="highlighted-text">Priyanshu</span>
                            </span>
            </div>
            <div className="profile-details-role">
                            <span className="primary-text">
                                {""}
                              <h2>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                      "full stack developer",2000,
                                      "frontend developer",2000
                                    ]}/>
                                    </h2>
                                <span className="profile-role-tagline">
                                    eat sleep code repeat
                                </span>
                            </span>
            </div>
            <div className="profile-optins">
              <button onClick={notifyyy} className="btn primary-btn">
                {""}
                Hire me {""}
              </button>
              <a href="Resume- Priyanshu.Swain_46250556.pdf" download="Resume Resume- Priyanshu.Swain_46250556.pdf">
                <button className="btn btn-outline-primary"> Get Resume</button>
              </a>
            </div>
          </div>

        </div>
      </div>
        <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
    </div>
  )
}

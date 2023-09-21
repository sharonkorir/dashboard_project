import React from "react";
import "./login.css";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import youtube from "../../assets/youtube.png";
import telephone from "../../assets/telephone.png";
import pin from "../../assets/pin.png";
import mail from "../../assets/mail.png";
import logo from "../../assets/marble.png";
import google from "../../assets/google.png";

export default function Login() {
  return (
    <div className="container">
      <nav className="nav">
        <div className="flex">
          <div className=" center logo-box">
            <div className="center">
              <p className="link">PYO INFOTECH</p>
            </div>
            <img src={logo} />
          </div>
          <div className="center">
            <p className="link">Home</p>
            <p className="link">About</p>
            <p className="link">Login</p>
          </div>
        </div>
        <div className="center">
          <p className="link">LOGOUT</p>
        </div>
      </nav>
      <div className="hero">
        <div className="card">
          <div
            style={{
              color: "white",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div>
              <p className="link">PYO INFOTECH</p>
            </div>
            <img src={logo} />
          </div>
          <form>
            <button className="google">
              <img src={google} />
              <div className="center">
                <p>Sign in with Google</p>
              </div>
            </button>
            <label>Email</label>
            <input placeholder="email" required />
            <label>Password</label>
            <input placeholder="password" required />
            <button className="login-button">SIGN IN</button>
            <p className="center">
              Not a member yet? <span className="blue"> Resgister now!</span>
            </p>
          </form>
        </div>
      </div>
      <footer>
        <div
          style={{
            display: "flex",
            padding: "20px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "50%", paddingLeft: "40px" }}>
            <h2 style={{ paddingLeft: "20px" }}>Get in Touch with us!</h2>
            <div className="footer-section">
              <img src={pin} />
              <p>
                2nd Floor, Tridav Complex, above Rathi X ray & Sonography
                Clinic, Udhana Darwaja Surat, Gujarat 395002
              </p>
            </div>
            <div className="footer-section">
              <img src={mail} />
              <p>info@something.com</p>
            </div>
            <div className="footer-section">
              <img src={telephone} />
              <div>
                <p>+91 777778976 (India)</p>
                <p>+33 777778976 (France)</p>
                <p>+1(703) 777778976 (Canada)</p>
              </div>
            </div>
          </div>
          <div className="subscribe">
            <form>
              <p>Subscribe to our Newsletter </p>
              <label>Enter your email address here!</label>
              <input placeholder="Email Address" />
              <button className="logo-box">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-icons">
          <img src={facebook} alt="" />

          <img src={instagram} alt="" />

          <img src={twitter} alt="" />

          <img src={linkedin} alt="" />

          <img src={youtube} alt="" />
        </div>
        <div className="footer-links">
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
          <p>Login</p>
        </div>
      </footer>
    </div>
  );
}

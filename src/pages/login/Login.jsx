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

export default function Login() {
  return (
    <div className="container">
      <nav className="nav">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <p>Logo</p>
          <p>Home</p>
          <p>About</p>
          <p>Login</p>
        </div>
        <div>
          <p>Logout</p>
        </div>
      </nav>
      <div className="hero">
        <div className="card">
          <h2>pro tech</h2>
          <form>
            <button>
              <img />
              Sign in with Google
            </button>
            <label>Email</label>
            <input placeholder="email" required />
            <label>Password</label>
            <input placeholder="password" required />
            <button>SIGN IN</button>
            <p>
              Not a member yet? <span>Resgister now!</span>
            </p>
          </form>
        </div>
      </div>
      <footer className="footer">
        <div>
          <div>
            <h2>Get in Touch with us!</h2>
            <div>
              <img src={pin} />
              <p>
                2nd Floor, Tridav Complex, above Rathi X ray & Sonography
                Clinic, Udhana Darwaja Surat, Gujarat 395002
              </p>
            </div>
            <div>
              <img src={mail} />
              <p>info@something.com</p>
            </div>
            <div>
              <img src={telephone} />
              <div>
                <p>=91777778976(India)</p>
                <p>=91777778976(France)</p>
                <p>=91777778976(Canada)</p>
              </div>
            </div>
          </div>
          <div className="card">
            <form>
              <h6>Subscribe to our Newsletter </h6>
              <label>Enter your email address here!</label>
              <input placeholder="Email Address" />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
        <div>
          <a
            href="https://www.flaticon.com/free-icons/facebook"
            title="facebook icons"
          >
            <img src={facebook} alt="" />
          </a>
          <a
            href="https://www.flaticon.com/free-icons/instagram"
            title="instagram icons"
          >
            <img src={instagram} alt="" />
          </a>
          <a
            href="https://www.flaticon.com/free-icons/twitter-social-badge"
            title="twitter social badge icons"
          >
            <img src={twitter} alt="" />
          </a>
          <a
            href="https://www.flaticon.com/free-icons/linkedin"
            title="linkedin icons"
          >
            <img src={linkedin} alt="" />
          </a>
          <a
            href="https://www.flaticon.com/free-icons/youtube"
            title="youtube icons"
          >
            <img src={youtube} alt="" />
          </a>
        </div>
        <div>
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
          <p>Login</p>
        </div>
      </footer>
    </div>
  );
}

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
    <div>
      <nav className="nav">
        <div className="flex">
          <div className=" center logo-box">
            <div className="center">
              <p className="link">PUY INFOTECH</p>
            </div>
            <div className="center">
              <img src={logo} />
            </div>
          </div>
          <div className="center nav-link">
            <a className="link">Home</a>
            <a className="link">About</a>
            <a className="link">Contact</a>
          </div>
        </div>
        <div className="center">
          <a className="link">LOG IN</a>
        </div>
      </nav>
      <div className="hero">
        <div className="card">
          <div className="flex-center">
            <div>
              <p className="hero-logo">PUY INFOTECH</p>
            </div>
            <div className="center">
              <img src={logo} />
            </div>
          </div>
          <form>
            <button className="google">
              <img src={google} />
              <div className="center">
                <p>Sign in with Google</p>
              </div>
            </button>
            <p className="header">
              <span>or</span>
            </p>
            <label>
              Email <span className="red">*</span>
            </label>
            <input placeholder="Email" required />
            <div className="flex-between">
              <label>
                Password <span className="red">*</span>
              </label>
              <label>
                <a className="blue">Forgot password?</a>
              </label>
            </div>

            <input placeholder="Password" required />
            <button className="login-button">SIGN IN</button>
            <p className="center">
              Not a member yet? <a className="blue"> Register now!</a>
            </p>
          </form>
        </div>
      </div>
      <footer>
        <div className="footer-body">
          <div className="flex-1">
            <h2>Get in Touch with us!</h2>
            <div className="footer-section">
              <img src={pin} />
              <p>
                2nd Floor, Tridav Complex, above Rathi X ray & Sonography
                Clinic, Udhana Darwaja Surat, Gujarat 395002
              </p>
            </div>
            <div className="footer-section">
              <img src={mail} />
              <p>info@msquaretec.com</p>
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
          <a>Home</a>
          <a>About</a>
          <a>Contact</a>
          <a>Login</a>
        </div>
      </footer>
    </div>
  );
}

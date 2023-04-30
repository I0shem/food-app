import s from "./App.module.css";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Home from "./Components/Home/home";
import Menu from "./Components/Menu/menu";
import Reservation from "./Components/Reservation/reservation";
import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";
import KFC_logo from "./Components/Images/kfc-logo.svg";
import { ReactSVG } from "react-svg";
import { IconContext } from "react-icons";
import { BsFacebook, BsTwitter, BsInstagram, BsSendFill } from "react-icons/bs";

function App() {
  return (
    <BrowserRouter>
      <div className={s.foodApp}>
        <div className={s.appBar}>
          <div className={s.appIcon}>
            <ReactSVG
              src={KFC_logo}
              beforeInjection={(svg) => {
                svg.classList.add("svg-class-name");
                svg.setAttribute("style", "width: 50px", "height: 50px");
              }}
            />
          </div>
          <div className={s.appPages}>
            <ul>
              <Link
                className={s.Link}
                to="/"
                style={{ textDecoration: "none" }}
              >
                <li>Home</li>
              </Link>

              <Link
                className={s.Link}
                to="/Menu"
                style={{ textDecoration: "none" }}
              >
                <li>Menu</li>
              </Link>
              <Link
                className={s.Link}
                to="/Reservation"
                style={{ textDecoration: "none" }}
              >
                <li>Reservation</li>
              </Link>
              <Link
                className={s.Link}
                to="/About"
                style={{ textDecoration: "none" }}
              >
                <li>About</li>
              </Link>
              <Link
                className={s.Link}
                to="/Contact"
                style={{ textDecoration: "none" }}
              >
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className={s.appContent}> </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <div className={s.footer}>
          <div className={s.bottomMedia}>
            <div className={s.bottomAppIcon}>
              <ReactSVG
                src={KFC_logo}
                beforeInjection={(svg) => {
                  svg.classList.add("svg-class-name");
                  svg.setAttribute("style", "width: 70px", "height: 70px");
                }}
              />
            </div>
            <p className={s.regularText}>
              We cook and deliver the tastiest food right away to your
              designated location
            </p>
            <ul>
              <Link to="https://www.instagram.com/" target="_blank">
                <li>
                  <IconContext.Provider
                    value={{
                      size: 40,
                      className: s.paginationBtn,
                      color: "black",
                    }}
                  >
                    <BsInstagram />
                  </IconContext.Provider>
                </li>
              </Link>
              <Link to="https://www.facebook.com/" target="_blank">
                <li>
                  <IconContext.Provider
                    value={{
                      size: 40,
                      className: s.paginationBtn,
                      color: "black",
                    }}
                  >
                    <BsFacebook />
                  </IconContext.Provider>
                </li>
              </Link>
              <Link to="https://twitter.com/" target="_blank">
                <li>
                  <IconContext.Provider
                    value={{
                      size: 40,
                      className: s.paginationBtn,
                      color: "black",
                    }}
                  >
                    <BsTwitter />
                  </IconContext.Provider>
                </li>
              </Link>
            </ul>
          </div>
          <div className={s.bottomTextListF}>
            <ul>
              <li className={s.textHeader}>About</li>
              <li className={s.regularTextList}>About Us</li>
              <li className={s.regularTextList}>Features</li>
              <li className={s.regularTextList}>News</li>
              <li className={s.regularTextList}>Menu</li>
            </ul>
          </div>
          <div className={s.bottomTextList}>
            <ul>
              <li className={s.textHeader}>Company</li>
              <li className={s.regularTextList}>Why KFC?</li>
              <li className={s.regularTextList}>Partner With Us</li>
              <li className={s.regularTextList}>FAQ</li>
              <li className={s.regularTextList}>Blog</li>
            </ul>
          </div>
          <div className={s.bottomTextList}>
            <ul>
              <li className={s.textHeader}>Support</li>
              <li className={s.regularTextList}>Account</li>
              <li className={s.regularTextList}>Support Center</li>
              <li className={s.regularTextList}>Feedback</li>
              <li className={s.regularTextList}>Contact Us</li>
            </ul>
          </div>
          <div className={s.bottomTextList}>
            <ul>
              <li className={s.textHeader}>Get In Touch</li>
              <li className={s.regularTextList}>
                Questions Or Feedback <p>We'd Love To Hear From You</p>
              </li>
              <li>
                <input
                  type="email"
                  className={s.bottomInput}
                  placeholder="E-mail Address"
                  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                  required
                ></input>
                <Link>
                  <IconContext.Provider
                    value={{
                      size: 20,
                      className: s.sendEmailBtn,
                      color: "black",
                    }}
                  >
                    <BsSendFill />
                  </IconContext.Provider>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

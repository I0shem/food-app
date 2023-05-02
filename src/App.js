import s from "./App.module.css";
import { Routes, Route, BrowserRouter, Link, NavLink } from "react-router-dom";
import Home from "./Components/Home/home";
import Menu from "./Components/Menu/menu";
import Reservation from "./Components/Reservation/reservation";
import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";
import KFC_logo from "./Components/Images/kfc-logo.svg";
import Search from "./Components/Images/search.svg";
import Cart from "./Components/Images/cart.svg";
import { ReactSVG } from "react-svg";
import { IconContext } from "react-icons";
import { BsFacebook, BsTwitter, BsInstagram, BsSendFill } from "react-icons/bs";
import Authentication from "./Components/Firebase/auth";

function App() {
  return (
    <BrowserRouter>
      <div className={s.foodApp}>
        <div className={s.appBar}>
          <div className={s.appIcon}>
            <ReactSVG
              src={KFC_logo}
              className={s.svg}
              beforeInjection={(svg) => {
                svg.classList.add("svg");
                svg.setAttribute("style", "width: 200px");
              }}
            />
          </div>
          <div className={s.appPages}>
            <ul>
              <NavLink
                className={s.Link}
                to="/food-app"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "black",
                  };
                }}
                end
              >
                <li id="home">Home</li>
              </NavLink>

              <NavLink
                className={s.Link}
                to="/food-app/Menu"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "black",
                  };
                }}
              >
                <li id="menu">Menu</li>
              </NavLink>
              <NavLink
                className={s.Link}
                to="/food-app/Reservation"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "black",
                  };
                }}
              >
                <li id="reservation">Reservation</li>
              </NavLink>
              <NavLink
                className={s.Link}
                to="/food-app/About"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "black",
                  };
                }}
              >
                <li id="about">About</li>
              </NavLink>
              <NavLink
                className={s.Link}
                to="/food-app/Contact"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "black",
                  };
                }}
              >
                <li id="contact">Contact</li>
              </NavLink>
            </ul>
          </div>
          <div className={s.appButtons}>
            <ul>
              <li>
                <ReactSVG
                  src={Search}
                  beforeInjection={(svg) => {
                    svg.classList.add("svg-class-name");
                    svg.setAttribute("style", "width: 50px", "height: 50px");
                  }}
                />
              </li>
              <li>
                <ReactSVG
                  src={Cart}
                  beforeInjection={(svg) => {
                    svg.classList.add("svg-class-name");
                    svg.setAttribute("style", "width: 50px", "height: 50px");
                  }}
                />
              </li>
              <li className={s.Auth}>
                <Authentication />
              </li>
            </ul>
          </div>
        </div>
        <div className={s.appContent}> </div>
        <Routes>
          <Route path="/food-app" element={<Home />} />
          <Route path="/food-app/Menu" element={<Menu />} />
          <Route path="/food-app/Reservation" element={<Reservation />} />
          <Route path="/food-app/About" element={<About />} />
          <Route path="/food-app/Contact" element={<Contact />} />
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
            <div>
              <p className={s.regularText}>
                We cook and deliver the tastiest food right away to your
                designated location
              </p>
            </div>

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
          <div className={s.bottomMenu}>
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
              <div className={s.getInTouch}>
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
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

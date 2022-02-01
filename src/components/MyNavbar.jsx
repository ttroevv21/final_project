import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import logo from "../images/logo-image.png";
import { Link } from "react-router-dom";
import cartIcon from "../images/cart.png";
import profileIcon from "../images/profile.png";
import { AuthContext } from "../contexts/AuthProvider";

const MyNavbar = () => {
  const { authWithGoogle, user, logout } = React.useContext(AuthContext);

  return (
    <Navbar className="navbar-custom" expand="lg">
      <Container fluid>
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-link margin" to="/">
              ГЛАВНАЯ
            </Link>

            <NavDropdown title="КАТАЛОГ" id="navbarScrollingDropdown">
              <Link to="/faceCare">
                <NavDropdown.Item href="/faceCare">
                  УХОД ЗА ЛИЦОМ
                </NavDropdown.Item>
              </Link>
              <Link to="/makeUp">
                <NavDropdown.Item href="/makeUp">МАКИЯЖ</NavDropdown.Item>
              </Link>
            </NavDropdown>
            <NavDropdown title="АДМИН ПАНЕЛЬ" id="navbarScrollingDropdown">
              <Link to="/add">
                <NavDropdown.Item href="/add">
                  ДОБАВИТЬ ПРОДУКТ
                </NavDropdown.Item>
              </Link>
              <Link to="/admin">
                <NavDropdown.Item href="/admin">
                  СПИСОК ПРОДУКТОВ
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div className="icon-div">
          <Link to="/cart">
            <img className="navbar-icon" src={cartIcon} alt="cartIcon" />
          </Link>
          {user ? (
            <>
              <button className="login-btn margin-right">
                <img
                  className="navbar-icon"
                  src={profileIcon}
                  alt="profileIcon"
                  onClick={logout}
                />
              </button>
              <li>{user.email}</li>
            </>
          ) : (
            <button className="login-btn" onClick={authWithGoogle}>
              <img className="navbar-icon" src={profileIcon} alt="login" />
            </button>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

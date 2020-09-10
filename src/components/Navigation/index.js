import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import cart from "../../img/cart.svg";
import "./style.scss";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar sticky="top" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        <h2>
          <span className="logo-first">J</span>
          <span className="rest">ami Lin's Passions</span>
        </h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/" linkText="Home" />
          <NavbarItem path="/about" linkText="About Jami" />
          <NavbarItem path="/services" linkText="Services" />

          <NavbarItem path="/shop" linkText="Shop" />
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
          {loginLogoutControls}
          <NavbarItem path="/cart" linkText="Cart">
            <img
              src={cart}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="cart"
            />
          </NavbarItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

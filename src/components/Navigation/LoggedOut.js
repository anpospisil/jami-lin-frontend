import React from "react";
import NavbarItem from "./NavbarItem";
import login from "../../img/login.svg"

export default function LoggedOut() {
  return (
    <>
      <NavbarItem path="/login" linkText="Login" >
      <img
        src={login}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="login"
      />
      </NavbarItem>
    </>
  );
}

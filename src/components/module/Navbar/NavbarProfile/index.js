import React from "react";
import { useSelector } from "react-redux";
import Brand from "../Brand";
import Navbar from "../Core";
import Filter from "../Filter";
import Toggler from "../Toggler";
import NavRight from "../NavRight";
import Cart from "../Cart";
import Account from "../Account";
import jwt from "jwt-decode";

const Nav = ({ handleInputSearch, handleSearch, handleSidebar }) => {
  const dataUser = jwt(localStorage.getItem("token"));

  const { status } = useSelector((state) => state.orders);

  return (
    <>
      {dataUser.role === 1 ? (
        <Navbar>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleSidebar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Brand />
          <Toggler>
            <NavRight>
              <Account role={dataUser.role} />
            </NavRight>
          </Toggler>
        </Navbar>
      ) : (
        <Navbar>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleSidebar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Brand />
          <Toggler>
            <Filter
              handleInputSearch={handleInputSearch}
              handleSearch={handleSearch}
            />
            <NavRight>
              <Cart orders={status} />
              <Account role={dataUser.role} />
            </NavRight>
          </Toggler>
        </Navbar>
      )}
    </>
  );
};

export default Nav;

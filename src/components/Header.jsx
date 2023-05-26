import React from "react";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input />
        </div>
        <div className="btns">
          <button className="btn btn__primary">
            <span className="btn__add">
              <i className="fa-solid fa-plus"></i>
            </span>
            Add New
          </button>
          <button className="btn btn__primary">Sign in</button>
          <button className="btn btn__secondary">Sign up</button>
        </div>
      </div>
    </>
  );
};

export default Header;

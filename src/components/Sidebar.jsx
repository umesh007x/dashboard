import React from "react";
import logo from "../assets/img/logo.png";
import home from "../assets/img/icons/home.png";
import exit from "../assets/img/icons/exit.png";
import flow from "../assets/img/icons/flow.png";
import group from "../assets/img/icons/group.png";
import headset from "../assets/img/icons/headset.png";
import list from "../assets/img/icons/list.png";
import manual from "../assets/img/icons/manual.png";
import prepchart from "../assets/img/icons/prepchart.png";
import saving from "../assets/img/icons/saving.png";
import setting from "../assets/img/icons/setting.png";
import user from "../assets/img/icons/user.png";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <img src={logo} alt="" className="sidebar__logo"></img>
        <div className="sidebar__navs">
          <div className="sidebar__navs--nav sidebar__navs--home">
            <img src={home} alt="" className="sidebar__navs--icon"></img>
          </div>

          <div className="sidebar__navs--nav ">
            <img src={user} alt="" className="sidebar__navs--icon"></img>
          </div>
          <div className="sidebar__navs--nav ">
            <img src={group} alt="" className="sidebar__navs--icon"></img>
          </div>
          <div className="sidebar__navs--nav ">
            <img src={flow} alt="" className="sidebar__navs--icon"></img>
          </div>
          <div className="sidebar__navs--nav ">
            <img src={list} alt="" className="sidebar__navs--icon"></img>
          </div>
          <div className="sidebar__navs--nav ">
            <img src={setting} alt="" className="sidebar__navs--icon"></img>
          </div>
          <div className="sidebar__navs--nav ">
            <img src={prepchart} alt="" className="sidebar__navs--icon"></img>
          </div>
          <div className="sidebar__navs--nav ">
            <img src={manual} alt="" className="sidebar__navs--icon"></img>
          </div>
          <div className="sidebar__navs--nav ">
            <img src={saving} alt="" className="sidebar__navs--icon"></img>
          </div>
          <div className="sidebar__navs--nav ">
            <img src={headset} alt="" className="sidebar__navs--icon"></img>
          </div>
          <div className="sidebar__navs--nav ">
            <img src={exit} alt="" className="sidebar__navs--icon"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

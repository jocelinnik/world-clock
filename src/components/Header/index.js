import React from "react";
import "./index.css";
import logo from "./img/logo.png";

export default function Header(){
    return (
        <div className="header pure-menu pure-menu-horizontal pure-menu-fixed">
            <a href="/"><img className="logo" src={logo} alt="logo" /></a>
            <h4 className="label">World Clock</h4>
        </div>
    );
};
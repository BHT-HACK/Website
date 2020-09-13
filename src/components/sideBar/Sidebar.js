import React from "react";
import styles from "./sidebar.module.css";
import {
  //   Healing,
  Home,
  Search,
  AddCircleOutline,
  SportsSoccerOutlined,
  AccountCircle,
  ExitToApp,
  VpnKey,
  Store,
} from "@material-ui/icons";
import Item from "../item/Items";
import { NavLink, Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top ">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            data-toggle="collapse"
            className="navbar-toggle"
            data-target="#myNavbar"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to="/" className={"navbar-brand " + styles.brand}>
            <Store className={styles.logoPic} />
            <div className={styles.logoName}>Aptizr 2020</div>
          </Link>
        </div>
        <div className="collapse navbar-collapse " id="myNavbar">
          <ul className={"nav navbar-nav navbar-right " + styles.items}>
            <li>
              <NavLink to="/" exact activeClassName={styles.my_active}>
                <Item Icon={Home} title="Home" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/search" activeClassName={styles.my_active}>
                <Item Icon={Search} title="Search" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-request" activeClassName={styles.my_active}>
                <Item Icon={SportsSoccerOutlined} title="My Requests" />
              </NavLink>
            </li>

            <li>
              <NavLink to="/request" activeClassName={styles.my_active}>
                <Item Icon={AddCircleOutline} title="Create Requests" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" activeClassName={styles.my_active}>
                <Item Icon={AccountCircle} title="My Profile" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" activeClassName={styles.my_active}>
                <Item Icon={VpnKey} title="Register" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" activeClassName={styles.my_active}>
                <Item Icon={ExitToApp} title="Log In" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;

import React from "react";
import styles from "./home.module.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className={styles.offset}>
      <div className={styles.home}>
        <div className={styles.homeContent}>
          <h2>Aptizr Help</h2>
          <p style={{ color: "rgb(221, 66, 92)" }}>
            Connect to a group of volunteer who are ready to help you
          </p>
          <h2>Start Home</h2>
          <p style={{ color: "rgb(88, 86, 207)" }}>
            Raise your request, get the help you need. You are not alone
          </p>

          <h2>Help each other</h2>
          <p style={{ color: "rgb(31, 30, 83)" }}>
            A small step could make the difference. Let us be united
          </p>

          <Link to="/search">
            <Button className={styles.homeBtn}>continue</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

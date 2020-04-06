import React from "react";
import styles from "./HomePage.module.css"
import { NavLink as Link } from "react-router-dom";
import { Button } from "reactstrap";
import Image from "react-graceful-image"
import Hive from '../assets/images/5-hive.png'

const HomePage = () => {
  return (
    <div className="page">
      <Button tag={Link} to="/login" style={{
        height: "100vh", width: "100vw", display: "flex",
        flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(255, 255, 255, 0.3)", border: "transparent"
      }}>
        <Image src={Hive} className={styles.logo} />
        <div className={styles.circle}>
        </div>
        <p className={styles.tapHere}>Tap to start</p>
      </Button>
    </div>
  )
};

export default HomePage;

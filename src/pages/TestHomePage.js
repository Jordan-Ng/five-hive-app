import React, { useState } from 'react'
import styles from "./TestHomePage.module.css"
import { NavLink as Link } from "react-router-dom";
import { Button, Form, FormGroup, Container } from "reactstrap";
import Image from "react-graceful-image"
import Hive from '../assets/images/5-hive.png'

const TestHomePage = ({ handleUser, handlePassword, submitlog }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    <Button onClick={() => setCurrentPage(currentPage + 1)} style={{
      height: "100vh", width: "100vw", display: "flex",
      flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(255, 255, 255, 0.5)", border: "transparent"
    }}>
      <Image src={Hive} className={styles.logo} />
      <div className={styles.circle}>
      </div>
      <p className={styles.tapHere}>Tap to start</p>
    </Button >,
    <>
      <Container className={styles.fullPage}>
        <div className={styles.logoAnimate}>
          <Image src={Hive} className={styles.logo2} />
        </div>
      </Container>
      <div className={styles.containerTop}>
        <div className={styles.form}>
          <h4 className={styles.h4}>Log In</h4>
          <Form>
            <FormGroup>
              <h6 className={styles.h6}>Username</h6>
              <input type="text" onChange={handleUser} />
            </FormGroup>
            <FormGroup>
              <h6 className={styles.h6}>Password</h6>
              <input type="password" onChange={handlePassword} />
            </FormGroup>
            <Button className={styles.loginBtn} onClick={submitlog} style={{ marginTop: "10px", height: "35px", lineHeight: "15px", border: "3px solid #fdbe83", backgroundColor: "transparent", borderRadius: "5px", color: "#f38c2c" }}>
              log in
          </Button>
          </Form>
        </div>
      </div>
    </>
  ]

  return (
    <>
      {pages[currentPage]}
    </>
  )
}

export default TestHomePage

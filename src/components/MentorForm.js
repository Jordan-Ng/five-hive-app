import React, { useState } from 'react';
import { Button, Container, Col, Row, Form, FormGroup } from "reactstrap";
import { NavLink as Link } from "react-router-dom"
import styles from "./MentorForm.module.css";

const MentorForm = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [checkboxes, setCheckboxes] = useState({
    // first
    weight: false,
    // second
    circuit: false,
    // third
    strength: false,
    // fourth
    aerobic: false,
    // fifth
    // add fifth option
    // sixth
    male: false,
    // seventh
    female: false,
    // eighth
    noPref: false,
    // ninth
    alone: false,
    // tenth
    group: false,
    // eleventh
    daily: false,
    // twelfth
    threeToFour: false,
    // thirteenth
    lessThanThree: false,
    // fourteenth
    recommend: false,
  })

  const handleCheckbox = e => {
    let newCheckboxes = { ...checkboxes }
    newCheckboxes[e.target.name] = !checkboxes[e.target.name]
    setCheckboxes(newCheckboxes)
    console.log(newCheckboxes)
  }

  const pages = [
    (
      <div className={styles.step1}>
        <h4>Why you should hire a fitness <br />mentor from our community:</h4>
        <Container fluid={true}>
          <Row>
            <Col xs="7" md="4">
              <div className={styles.reason} style={{ border: "2px solid #fdbe83" }}>
                <h6>
                  The <span>most</span><br /><span>affordable</span><br />price in town
              </h6>
                <hr />
                <p>we charge 30-40% less than a personal trainer would.</p>
              </div>
              <div className={styles.reason}>
                <h6>
                  <span>No more</span>inefficient exercise routines.
                </h6>
                <hr />
                <h6 style={{ marginTop: "10px", marginBottom: "20px" }}>
                  <span style={{ marginLeft: "-10px" }}>Maximise your time</span>through workouts/diets designed to <br />meet your goals quickly! ;)
              </h6>
              </div>
            </Col>
            <Col xs="5" md="4">
              <div className={styles.reason}>
                <h6>A<span>w i d e</span><span> range</span> of mentoring services</h6>
                <hr />
                <p>including sports activities, special needs training, etc.</p>
              </div>
              <div className={styles.reason} style={{ marginLeft: "-10px", paddingLeft: "5px" }}>
                <h6 style={{ margin: "10px auto" }}>Rest assured</h6>
                <hr />
                <h6 style={{ margin: "10px auto" }}>
                  Our<span style={{ padding: "0 5pxr" }}>Certified</span><br />mentors have at least 3 years of experience.
                </h6>
              </div>
            </Col>
          </Row>
        </Container>
      </div >
    ),
    (
      <div className={styles.step2}>
        <Form>
          <h4>What fitness goals would you <br />like to achieve?</h4>
          <div className={styles.row1}>
            <div className={styles.checkboxes}>
              <input type="checkbox" id="first" name="weight" onChange={handleCheckbox} {...checkboxes.weight ? { checked: true } : { checked: false }} />
              <label className={`hb hb-sm ${styles.hex}`} for="first">
                Weight Loss/Gain
              </label>
              <input type="checkbox" id="second" name="circuit" onChange={handleCheckbox} {...checkboxes.circuit ? { checked: true } : { checked: false }} />
              <label className={`hb hb-sm ${styles.hex}`} for="second" style={{ fontSize: "0.7em" }}>
                Circuit/<br />Functional training
              </label>
              <input type="checkbox" id="third" name="strength" onChange={handleCheckbox} {...checkboxes.strength ? { checked: true } : { checked: false }} />
              <label className={`hb hb-sm ${styles.hex}`} for="third">
                Strength training
              </label>
            </div>
          </div>
          <div className={styles.row2}>
            <div className={styles.checkboxes}>
              <input type="checkbox" id="fourth" name="aerobic" onChange={handleCheckbox} {...checkboxes.aerobic ? { checked: true } : { checked: false }} />
              <label className={`hb hb-sm ${styles.hex}`} for="fourth">Aerobic fitness</label>
              <input type="checkbox" id="fifth" />
              <label className={`hb hb-sm ${styles.hex}`} for="fifth"></label>
            </div>
          </div>
          <FormGroup>
            <label>
              Others:
              <input type="text" placeholder="please specify" />
            </label>
          </FormGroup>
        </Form>
      </div>
    ),
    (
      <div className={styles.step1}>
        <Form>
          <h4>Do you have a gender <br />preference for your trainer?</h4>
          <div className={styles.row3}>
            <div className={styles.checkboxes}>
              <input type="checkbox" id="sixth" name="male" onChange={handleCheckbox} {...checkboxes.male ? { checked: true } : { checked: false }} />
              <label className={`hb hb-sm ${styles.hex}`} for="sixth">
                Male
              </label>
              <input type="checkbox" id="seventh" name="female" onChange={handleCheckbox} {...checkboxes.female ? { checked: true } : { checked: false }} />
              <label className={`hb hb-sm ${styles.hex}`} for="seventh">
                Female
              </label>
            </div>
          </div>
          <div className={styles.row2}>
            <div className={styles.checkboxes}>
              <input type="checkbox" id="eighth" name="noPref" onChange={handleCheckbox} {...checkboxes.noPref ? { checked: true } : { checked: false }} />
              <label className={`hb hb-sm ${styles.hex}`} for="eighth" style={{ fontSize: "0.7em" }}>No <br />preference</label>
            </div>
          </div>
        </Form>
      </div>
    ),
    (
      <div className={styles.step2}>
        <Form>
          <h4>Do you prefer to train alone <br /> or in a group?</h4>
          <div className={styles.row3}>
            <div className={styles.checkboxes}>
              <input type="checkbox" id="ninth" name="alone" onChange={handleCheckbox} {...checkboxes.alone ? { checked: true } : { checked: false }} />
              <label className={`hb hb-sm ${styles.hex}`} for="ninth">
                Alone
              </label>
              <input type="checkbox" id="tenth" name="group" onChange={handleCheckbox} {...checkboxes.group ? { checked: true } : { checked: false }} />
              <label className={`hb hb-sm ${styles.hex}`} for="tenth">
                In a group
              </label>
            </div>
          </div>
        </Form>
      </div>
    ),
    (
      <div className={styles.step1}>
        <Form>
          <h4>How often would you like to train?</h4>
          <div className={styles.row4}>
            <div className={styles.checkboxes}>
              <input type="checkbox" id="eleventh" name="daily" onChange={handleCheckbox} {...checkboxes.daily ? { checked: true } : { checked: false }} />
              <label className={`hb hb-sm ${styles.hex}`} for="eleventh">
                Daily
              </label>
              <input type="checkbox" id="twelfth" name="threeToFour" onChange={handleCheckbox} {...checkboxes.threeToFour ? { checked: true } : { checked: false }} />
              <label className={`hb hb-sm ${styles.hex}`} for="twelfth">
                3-4 times <br />a week
              </label>
            </div>
          </div>
          <div className={styles.row5}>
            <div className={styles.checkboxes}>
              <input type="checkbox" id="thirteenth" name="lessThanThree" onChange={handleCheckbox} {...checkboxes.lessThanThree ? { checked: true } : { checked: false }} />
              <label className={`hb hb-sm ${styles.hex}`} for="thirteenth" style={{ fontSize: "0.75em" }}>
                Less than <br />3 times a week
          </label>
              <input type="checkbox" id="fourteenth" name="recommend" onChange={handleCheckbox} {...checkboxes.recommend ? { checked: true } : { checked: false }} />
              <label className={`hb hb-sm ${styles.hex}`} for="fourteenth" style={{ fontSize: "0.65em" }}>
                Recommend something!
          </label>

            </div>
          </div>
        </Form>
      </div >
    ),
    (
      <div className={styles.step2}>
        <h4>Is there anything else you <br />would like us to know?</h4>
        <textarea rows="2" cols="40" />
      </div>
    ),
    (
      <div className={styles.step1}>
        <h4>Ok great! <br />When would you like to start?</h4>
        <input type="date" />
      </div>
    ),
    (
      <div className={styles.step2}>
        <h4>We're almost done..</h4>
        <h4>Choose your preferred location:</h4>
      </div>
    )
  ];

  const buttonGroup = [
    (
      <div className={styles.nextPrevBtn}>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage + 1)}>
          Let's get started!
        </button>
      </div>
    ),
    (
      <div className={styles.nextPrevBtn}>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage - 1)}>
          &lt; previous
        </button>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage + 1)}>
          next >
        </button>
      </div>
    ),
    (
      <div className={styles.nextPrevBtn}>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage - 1)}>
          &lt; previous
        </button>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage + 1)}>
          next >
        </button>
      </div>
    ),
    (
      <div className={styles.nextPrevBtn}>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage - 1)}>
          &lt; previous
        </button>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage + 1)}>
          next >
        </button>
      </div>
    ),
    (
      <div className={styles.nextPrevBtn}>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage - 1)}>
          &lt; previous
        </button>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage + 1)}>
          next >
        </button>
      </div>
    ),
    (
      <div className={styles.nextPrevBtn}>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage - 1)}>
          &lt; previous
        </button>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage + 1)}>
          next >
        </button>
      </div>
    ),
    (
      <div className={styles.nextPrevBtn}>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage - 1)}>
          &lt; previous
        </button>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage + 1)}>
          next >
        </button>
      </div>
    ),
    (
      <div className={styles.nextPrevBtn}>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage - 1)}>
          &lt; previous
        </button>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage + 1)}>
          All done!
        </button>
      </div>
    ),
  ]

  return (
    <div className="page">
      <div className={styles.fullPage}>
        <Button
          className={styles.backButton}
          tag={Link}
          to="/login"
        >
          <i class="fas fa-caret-left"></i>
        </Button>
        <div className={styles.container}>
          {pages[currentPage]}
        </div>
        {buttonGroup[currentPage]}
      </div >
    </div>
  );
};

export default MentorForm

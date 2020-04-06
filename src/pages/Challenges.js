import React from "react";
import NavBar from "../components/NavBar";
import styles from "./Challenges.module.css";
import sampleVid from "../assets/images/samplevid.mp4";
import sampleVid2 from "../assets/images/samplevid2.mp4";
// import ReactDOM from "react-dom";
// import LazyLoad from "react-lazyload";

// We can use Lazyload if our loading is slow for all the videos, refer to https://www.npmjs.com/package/react-lazyload for documentation.

const Challenges = () => {
  const samples = [
    "https://www.veguci.com/wp-content/uploads/2019/06/b8942f236f51960e99f9781ec827d92e.jpg",
    "https://www.veguci.com/wp-content/uploads/2019/06/b8942f236f51960e99f9781ec827d92e.jpg",
    "https://www.veguci.com/wp-content/uploads/2019/06/b8942f236f51960e99f9781ec827d92e.jpg",
    "https://www.veguci.com/wp-content/uploads/2019/06/b8942f236f51960e99f9781ec827d92e.jpg",
    "https://www.veguci.com/wp-content/uploads/2019/06/b8942f236f51960e99f9781ec827d92e.jpg",
  ];

  const fitvids = [
    "https://five-hive-app.s3.amazonaws.com/video1.mp4",
    "https://five-hive-app.s3.amazonaws.com/video2.mp4",
    "https://five-hive-app.s3.amazonaws.com/video3.mp4",
    "https://five-hive-app.s3.amazonaws.com/video4.mp4",
    "https://five-hive-app.s3.amazonaws.com/video5.mp4",
    "https://five-hive-app.s3.amazonaws.com/video6.mp4",
    "https://five-hive-app.s3.amazonaws.com/video7.mp4",
  ];

  return (
    <div className="page">
      <div className={styles.fullPage}>
        <div className={styles.hashtagRow}>
          <div className={styles.hashtagTitle}>
            <a className={styles.hashtag} href="#">
              <i class={`fas fa-hashtag ${styles.hashtagIcon}`}></i>
            </a>
            <p>somethinghashtag</p>
          </div>
          <div className={styles.container}>
            <video autoPlay muted loop className={styles.card}>
              <source src={sampleVid} type="video/mp4"></source>
            </video>
            <video autoPlay muted loop className={styles.card}>
              <source src={sampleVid2} type="video/mp4"></source>
            </video>
            <video autoPlay muted loop className={styles.card}>
              <source src={sampleVid} type="video/mp4"></source>
            </video>
            <video autoPlay muted loop className={styles.card}>
              <source src={sampleVid2} type="video/mp4"></source>
            </video>
          </div>
        </div>
        <div className={styles.hashtagRow}>
          <div className={styles.hashtagTitle}>
            <a className={styles.hashtag} href="#">
              <i class={`fas fa-hashtag ${styles.hashtagIcon}`}></i>
            </a>
            <p>#FitBersama</p>
          </div>
          <div className={styles.container}>
            {/* {samples.map(picha => (
              <div className={styles.card} style={{ backgroundImage: `url(${picha})` }}>
              </div>
            ))} */}
            {fitvids.map((video) => {
              return (
                <video autoPlay muted loop className={styles.card}>
                  <source src={video} type="video/mp4"></source>
                </video>
              );
            })}
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default Challenges;

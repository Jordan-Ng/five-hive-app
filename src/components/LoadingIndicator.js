import React from 'react'
import styles from "./LoadingIndicator.module.css"

const LoadingIndicator = () => {
  return (
    <>
      <div className={styles.everything}>
        <div className={styles.allHexes}>
          <div className={styles.row1}>
            <div className={styles.hex1}>
              <span className={`hb hb-sm`}></span>
            </div>
            <div className={styles.hex2}>
              <span className={`hb hb-sm`}></span>
            </div>
          </div>
          <div className={styles.row2}>
            <div className={styles.hex3}>
              <span className={`hb hb-sm`}></span>
            </div>
            <div className={styles.hex4}>
              <span className={`hb hb-sm`}></span>
            </div>
            <div className={styles.hex3}>
              <span className={`hb hb-sm`}></span>
            </div>
          </div>
          <div className={styles.row1}>
            <div className={styles.hex2}>
              <span className={`hb hb-sm`}></span>
            </div>
            <div className={styles.hex1}>
              <span className={`hb hb-sm`}></span>
            </div>
          </div>
        </div>
        <h6 style={{ marginRight: "-15px" }}>Loading...</h6>
      </div>
    </>
  )
}

export default LoadingIndicator
